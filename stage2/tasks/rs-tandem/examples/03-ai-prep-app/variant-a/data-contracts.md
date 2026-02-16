# Data Contracts: Custom Backend + Judge0

Этот документ описывает TypeScript типы, PostgreSQL схему и REST API контракты для Варианта A.

> **Архитектура и навигация**: [README.md](./README.md)

---

## TypeScript интерфейсы (shared между frontend и backend)

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

/** Секретные данные задачи (НЕ отправляются клиенту) */
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

## PostgreSQL схема

```sql
CREATE TABLE users (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email       VARCHAR(255) UNIQUE NOT NULL,
  name        VARCHAR(100) NOT NULL,
  avatar_url  TEXT,
  password_hash TEXT NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE topics (
  id          VARCHAR(50) PRIMARY KEY,  -- 'core_js', 'typescript'
  title       VARCHAR(200) NOT NULL,
  description TEXT,
  icon        VARCHAR(10),
  sort_order  INT DEFAULT 0
);

CREATE TABLE tasks (
  id              VARCHAR(50) PRIMARY KEY,  -- 'task_closure_01'
  topic_id        VARCHAR(50) REFERENCES topics(id),
  type            VARCHAR(20) NOT NULL,     -- 'theory_open', 'coding'
  difficulty      INT CHECK (difficulty BETWEEN 1 AND 5),
  title           VARCHAR(200) NOT NULL,
  question_text   TEXT NOT NULL,
  code_template   TEXT,
  test_code       TEXT,
  rubric_items    JSONB NOT NULL,           -- ["point1", "point2"]
  golden_answer   TEXT NOT NULL,            -- Секрет: НЕ отдаём клиенту
  rubric_weights  JSONB,
  hints           JSONB,                    -- ["hint1", "hint2"]
  max_score       INT DEFAULT 100,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE submissions (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID REFERENCES users(id),
  task_id     VARCHAR(50) REFERENCES tasks(id),
  answer      TEXT NOT NULL,
  score       INT,
  covered     JSONB,                        -- ["point1"]
  missed      JSONB,                        -- ["point2"]
  feedback    TEXT,
  judge_level INT DEFAULT 0,
  submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- Индексы для быстрых запросов
CREATE INDEX idx_submissions_user ON submissions(user_id);
CREATE INDEX idx_submissions_task ON submissions(task_id);
CREATE INDEX idx_tasks_topic ON tasks(topic_id);
```

---

## API контракты (REST)

### Аутентификация

| Метод | Endpoint             | Описание             | Кто делает |
| ----- | -------------------- | -------------------- | ---------- |
| POST  | `/api/auth/register` | Регистрация          | **Mentor** |
| POST  | `/api/auth/login`    | Логин → JWT token    | **Mentor** |
| POST  | `/api/auth/refresh`  | Обновление токена    | **Mentor** |
| GET   | `/api/auth/me`       | Текущий пользователь | **Mentor** |

### Задачи

| Метод | Endpoint                | Описание       | Response                     |
| ----- | ----------------------- | -------------- | ---------------------------- |
| GET   | `/api/topics`           | Список тем     | `Topic[]`                    |
| GET   | `/api/topics/:id/tasks` | Задачи по теме | `Task[]` (без goldenAnswer!) |
| GET   | `/api/tasks/:id`        | Одна задача    | `Task` (без goldenAnswer!)   |

```typescript
// GET /api/tasks/task_closure_01
// Response:
{
  "id": "task_closure_01",
  "topicId": "core_js",
  "type": "theory_open",
  "difficulty": 3,
  "title": "Замыкания в JavaScript",
  "questionText": "Объясни, что такое замыкание...",
  "rubricItems": [
    "Упомянул лексическое окружение",
    "Объяснил сохранение переменных",
    "Привёл корректный пример",
    "Упомянул практическое применение"
  ],
  "maxScore": 100
}
// goldenAnswer, hints, rubricWeights — НЕ отправляются!
```

### AI Judge

| Метод | Endpoint          | Описание           | Response                          |
| ----- | ----------------- | ------------------ | --------------------------------- |
| POST  | `/api/judge`      | Оценить ответ      | `JudgeResult`                     |
| POST  | `/api/judge/hint` | Получить подсказку | `{ hint: string, level: number }` |

```typescript
// POST /api/judge
// Request:
{
  "taskId": "task_closure_01",
  "answer": "Замыкание это когда функция..."
}

// Response:
{
  "score": 65,
  "maxScore": 100,
  "coveredPoints": [
    "Упомянул лексическое окружение",
    "Объяснил сохранение переменных"
  ],
  "missedPoints": [
    "Привёл корректный пример",
    "Упомянул практическое применение"
  ],
  "feedback": "Ты верно описал основную идею замыкания...",
  "judgeLevel": 1
}
```

### Code Runner

| Метод | Endpoint   | Описание      | Response    |
| ----- | ---------- | ------------- | ----------- |
| POST  | `/api/run` | Запустить код | `RunResult` |

```typescript
// POST /api/run
// Request:
{
  "taskId": "task_debounce_01",
  "code": "function debounce(fn, delay) { ... }",
  "language": "javascript"
}

// Response:
{
  "passed": false,
  "totalTests": 4,
  "passedTests": 2,
  "testDetails": [
    { "name": "should delay execution", "passed": true },
    { "name": "should cancel previous timeout", "passed": true },
    { "name": "should pass arguments to fn", "passed": false,
      "error": "Expected fn to be called with (1, 2) but got ()" },
    { "name": "should preserve this context", "passed": false,
      "error": "Expected this to be obj but got undefined" }
  ],
  "stderr": "AssertionError: Expected fn to be called with (1, 2)...",
  "executionTimeMs": 234
}
```

### Dashboard & Progress

| Метод | Endpoint               | Описание                | Response          |
| ----- | ---------------------- | ----------------------- | ----------------- |
| GET   | `/api/dashboard/stats` | Статистика пользователя | `UserStats`       |
| GET   | `/api/progress`        | Прогресс по всем темам  | `TopicProgress[]` |
| GET   | `/api/submissions`     | История сабмитов        | `Submission[]`    |
| GET   | `/api/submissions/:id` | Конкретный сабмит       | `Submission`      |
