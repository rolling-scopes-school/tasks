# Data Contracts: Supabase + WebContainer

Этот документ описывает TypeScript типы, Supabase схему (включая RLS и RPC) и SDK-интеграцию для Варианта B.

> **Архитектура и навигация**: [README.md](./README.md)

---

## TypeScript интерфейсы (те же, что в Варианте A)

```typescript
// types/task.ts

/** Тема (Core JS, TypeScript, Algorithms...) */
interface Topic {
  id: string;
  title: string; // "Core JavaScript"
  description: string; // "Замыкания, прототипы, Event Loop..."
  icon: string; // emoji или URL иконки
  taskCount: number; // количество задач в теме
}

/** Тип задачи */
type TaskType = "theory_open" | "theory_choice" | "coding";

/** Задача (то, что видит пользователь) */
interface Task {
  id: string;
  topicId: string;
  type: TaskType;
  difficulty: 1 | 2 | 3 | 4 | 5;
  title: string; // "Замыкания в JavaScript"
  questionText: string; // Текст вопроса (Markdown)
  codeTemplate?: string; // Шаблон кода для coding tasks
  testCode?: string; // Тесты (скрыты от пользователя, но нужны Runner)
  rubricItems: string[]; // ["Упомянул лексическое окружение", ...]
  maxScore: number; // 100
}

/** Секретные данные задачи (НЕ видны через RLS) */
interface TaskSecret {
  taskId: string;
  goldenAnswer: string; // Эталонный ответ
  rubricWeights: number[]; // Вес каждого критерия
  hints: string[]; // Подсказки по уровням
}
```

```typescript
// types/submission.ts

/** Ответ пользователя */
interface Submission {
  id: string;
  userId: string;
  taskId: string;
  answer: string; // Текст ответа или код
  submittedAt: string; // ISO datetime
  result: JudgeResult;
}

/** Результат оценки AI Judge */
interface JudgeResult {
  score: number; // 0-100
  maxScore: number; // 100
  coveredPoints: string[]; // Покрытые критерии
  missedPoints: string[]; // Пропущенные критерии
  feedback: string; // Текстовый комментарий AI
  judgeLevel: 0 | 1 | 2; // Уровень мока (0=hardcoded, 1=LLM, 2=advanced)
}

/** Результат выполнения кода (для coding tasks) */
interface RunResult {
  passed: boolean;
  totalTests: number;
  passedTests: number;
  testDetails: TestDetail[];
  stderr?: string; // Ошибки (для AI Hint)
  executionTimeMs: number;
}

interface TestDetail {
  name: string; // "should delay execution"
  passed: boolean;
  error?: string; // Текст ошибки если failed
}
```

```typescript
// types/user.ts

/** Профиль пользователя */
interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  createdAt: string;
}

/** Статистика для Dashboard */
interface UserStats {
  xp: number;
  streak: number; // Дней подряд
  completedTasks: number;
  totalTasks: number;
  rank: string; // "Junior" | "Middle" | "Senior"
}

/** Прогресс по теме */
interface TopicProgress {
  topicId: string;
  topicTitle: string;
  completed: number;
  total: number;
  avgScore: number; // Средний балл (0-100)
  lastAttemptAt?: string;
}
```

---

## Supabase PostgreSQL схема

```sql
-- Та же логическая схема, что и в Варианте A
-- Отличия: Supabase Auth для users + RLS политики

CREATE TABLE topics (
  id          VARCHAR(50) PRIMARY KEY,
  title       VARCHAR(200) NOT NULL,
  description TEXT,
  icon        VARCHAR(10),
  sort_order  INT DEFAULT 0
);

CREATE TABLE tasks (
  id              VARCHAR(50) PRIMARY KEY,
  topic_id        VARCHAR(50) REFERENCES topics(id),
  type            VARCHAR(20) NOT NULL,
  difficulty      INT CHECK (difficulty BETWEEN 1 AND 5),
  title           VARCHAR(200) NOT NULL,
  question_text   TEXT NOT NULL,
  code_template   TEXT,
  test_code       TEXT,
  rubric_items    JSONB NOT NULL,
  golden_answer   TEXT NOT NULL,       -- Скрыто через RLS!
  rubric_weights  JSONB,
  hints           JSONB,
  max_score       INT DEFAULT 100,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE submissions (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID REFERENCES auth.users(id),  -- Supabase Auth!
  task_id     VARCHAR(50) REFERENCES tasks(id),
  answer      TEXT NOT NULL,
  score       INT,
  covered     JSONB,
  missed      JSONB,
  feedback    TEXT,
  judge_level INT DEFAULT 0,
  submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- Индексы
CREATE INDEX idx_submissions_user ON submissions(user_id);
CREATE INDEX idx_submissions_task ON submissions(task_id);
CREATE INDEX idx_tasks_topic ON tasks(topic_id);
```

---

## Row Level Security (RLS) — ключевая фишка Supabase

RLS гарантирует, что `golden_answer` и `hints` недоступны с клиента:

```sql
-- Включаем RLS
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Tasks: пользователи видят все задачи, но БЕЗ секретных полей
-- Вместо RLS на уровне строк, создаём VIEW
CREATE VIEW public_tasks AS
SELECT
  id, topic_id, type, difficulty, title,
  question_text, code_template,
  rubric_items, max_score, created_at
FROM tasks;
-- golden_answer, rubric_weights, hints — НЕ в VIEW

-- Submissions: пользователь видит только свои
CREATE POLICY "Users see own submissions"
  ON submissions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert submissions"
  ON submissions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Topics: доступны всем аутентифицированным
CREATE POLICY "Authenticated users see topics"
  ON topics FOR SELECT
  TO authenticated
  USING (true);
```

---

## RPC-функции для Dashboard

```sql
-- Статистика пользователя (вызывается через supabase.rpc())
CREATE OR REPLACE FUNCTION get_user_stats()
RETURNS JSON AS $$
  SELECT json_build_object(
    'xp', COALESCE(SUM(score), 0),
    'streak', 0,  -- упрощено для MVP
    'completedTasks', COUNT(DISTINCT task_id),
    'totalTasks', (SELECT COUNT(*) FROM tasks),
    'rank', CASE
      WHEN COALESCE(SUM(score), 0) < 500 THEN 'Junior'
      WHEN COALESCE(SUM(score), 0) < 2000 THEN 'Middle'
      ELSE 'Senior'
    END
  )
  FROM submissions
  WHERE user_id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER;

-- Прогресс по темам
CREATE OR REPLACE FUNCTION get_topic_progress()
RETURNS JSON AS $$
  SELECT json_agg(row_to_json(t))
  FROM (
    SELECT
      t.id AS "topicId",
      t.title AS "topicTitle",
      COUNT(DISTINCT s.task_id) AS completed,
      COUNT(DISTINCT tk.id) AS total,
      COALESCE(AVG(s.score), 0)::INT AS "avgScore",
      MAX(s.submitted_at) AS "lastAttemptAt"
    FROM topics t
    LEFT JOIN tasks tk ON tk.topic_id = t.id
    LEFT JOIN submissions s ON s.task_id = tk.id AND s.user_id = auth.uid()
    GROUP BY t.id, t.title
    ORDER BY t.sort_order
  ) t;
$$ LANGUAGE SQL SECURITY DEFINER;
```

---

## API контракты (Supabase SDK + Edge Functions)

### Аутентификация (Supabase Auth)

```typescript
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

// Регистрация (email)
await supabase.auth.signUp({ email, password });

// Логин (email)
await supabase.auth.signInWithPassword({ email, password });

// OAuth (Google / GitHub)
await supabase.auth.signInWithOAuth({ provider: "github" });

// Текущий пользователь
const {
  data: { user },
} = await supabase.auth.getUser();

// Логаут
await supabase.auth.signOut();
```

### Задачи (через Supabase SDK)

```typescript
// src/api/tasks.api.ts

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

const MOCK_TASKS: Task[] = [
  /* ... */
];

export async function getTopics(): Promise<Topic[]> {
  if (USE_MOCK) {
    await delay(400);
    return MOCK_TOPICS;
  }

  const { data, error } = await supabase
    .from("topics")
    .select("*")
    .order("sort_order");

  if (error) throw error;
  return data.map(mapToTopic);
}

export async function getTask(id: string): Promise<Task> {
  if (USE_MOCK) {
    await delay(300);
    return MOCK_TASKS.find((t) => t.id === id)!;
  }

  // Используем VIEW, которая скрывает golden_answer
  const { data, error } = await supabase
    .from("public_tasks")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return mapToTask(data);
}

export async function getTasksByTopic(topicId: string): Promise<Task[]> {
  if (USE_MOCK) {
    await delay(400);
    return MOCK_TASKS.filter((t) => t.topicId === topicId);
  }

  const { data, error } = await supabase
    .from("public_tasks")
    .select("*")
    .eq("topic_id", topicId)
    .order("difficulty");

  if (error) throw error;
  return data.map(mapToTask);
}
```

### AI Judge (через Edge Function)

```typescript
// src/api/judge.api.ts

export async function evaluateTheory(
  taskId: string,
  answer: string,
): Promise<JudgeResult> {
  if (USE_MOCK) {
    await delay(800);
    return MOCK_JUDGE_RESULT;
  }

  const { data, error } = await supabase.functions.invoke("judge", {
    body: { taskId, answer },
  });

  if (error) throw error;
  return data as JudgeResult;
}

export async function getHint(
  taskId: string,
  hintLevel: number,
): Promise<{ hint: string; level: number }> {
  if (USE_MOCK) {
    await delay(300);
    return { hint: "Подумай о лексическом окружении...", level: hintLevel };
  }

  const { data, error } = await supabase.functions.invoke("hint", {
    body: { taskId, hintLevel },
  });

  if (error) throw error;
  return data;
}
```

### Dashboard (через RPC)

```typescript
// src/api/dashboard.api.ts

export async function getDashboardStats(): Promise<UserStats> {
  if (USE_MOCK) {
    await delay(500);
    return MOCK_STATS;
  }

  const { data, error } = await supabase.rpc("get_user_stats");
  if (error) throw error;
  return data as UserStats;
}

export async function getTopicProgress(): Promise<TopicProgress[]> {
  if (USE_MOCK) {
    await delay(500);
    return MOCK_PROGRESS;
  }

  const { data, error } = await supabase.rpc("get_topic_progress");
  if (error) throw error;
  return data as TopicProgress[];
}
```

### Submissions (через Supabase SDK)

```typescript
// src/api/submissions.api.ts

export async function getSubmissionHistory(): Promise<Submission[]> {
  if (USE_MOCK) {
    await delay(400);
    return MOCK_SUBMISSIONS;
  }

  const { data, error } = await supabase
    .from("submissions")
    .select("*")
    .order("submitted_at", { ascending: false });

  if (error) throw error;
  return data.map(mapToSubmission);
}
```
