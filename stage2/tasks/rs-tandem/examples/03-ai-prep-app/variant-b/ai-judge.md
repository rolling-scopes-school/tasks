# AI Judge: Supabase + WebContainer

Стратегия реализации AI Judge для Варианта B. Judge работает в Supabase Edge Function (Deno Runtime) — ключи API не попадают в браузер.

> **Архитектура и навигация**: [README.md](./README.md)
> **API контракты**: [data-contracts.md](./data-contracts.md)

---

## Level 0: Hardcoded (без LLM)

Работает на клиенте, не требует Edge Function. Идеально для разработки UI.

```typescript
// src/services/judge-level0.ts (клиентская реализация для dev)

function evaluateLevel0(answer: string, rubricItems: string[]): JudgeResult {
  const answerLower = answer.toLowerCase();
  const covered: string[] = [];
  const missed: string[] = [];

  const keywordMap: Record<string, string[]> = {
    "Упомянул лексическое окружение": [
      "лексическ",
      "lexical",
      "scope",
      "окружени",
    ],
    "Объяснил сохранение переменных": [
      "сохран",
      "запомин",
      "remember",
      "persist",
    ],
    "Привёл корректный пример": ["function", "const", "let", "return", "()"],
    "Упомянул практическое применение": [
      "приватн",
      "private",
      "counter",
      "каррир",
      "curry",
    ],
  };

  for (const item of rubricItems) {
    const keywords = keywordMap[item] || [];
    const found = keywords.some((kw) => answerLower.includes(kw));
    if (found) covered.push(item);
    else missed.push(item);
  }

  const score = Math.round((covered.length / rubricItems.length) * 100);

  return {
    score,
    maxScore: 100,
    coveredPoints: covered,
    missedPoints: missed,
    feedback:
      score >= 80
        ? "Отличный ответ! Покрыты основные критерии."
        : `Неплохо, но стоит раскрыть: ${missed.join(", ")}.`,
    judgeLevel: 0,
  };
}
```

---

## Level 1: Real LLM (Supabase Edge Function)

Edge Function запускается на Deno Runtime в Supabase Cloud:

```typescript
// supabase/functions/judge/index.ts

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  const { taskId, answer } = await req.json();

  // Создаём клиент с сервисным ключом (обходит RLS)
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  // Получаем секретные данные задачи (golden_answer)
  const { data: task } = await supabase
    .from("tasks")
    .select("golden_answer, rubric_items, rubric_weights")
    .eq("id", taskId)
    .single();

  if (!task) {
    return new Response(JSON.stringify({ error: "Task not found" }), {
      status: 404,
    });
  }

  // Вызываем Groq API
  const systemPrompt = `
ROLE: You are a strict technical interviewer.
TASK: Compare the CANDIDATE_ANSWER with the REFERENCE_ANSWER using the RUBRIC.

REFERENCE_ANSWER: ${task.golden_answer}
RUBRIC_POINTS: ${JSON.stringify(task.rubric_items)}

IMPORTANT: Respond ONLY with valid JSON:
{
  "score": <0-100>,
  "covered_points": ["point covered"],
  "missed_points": ["point missed"],
  "feedback": "Constructive feedback in Russian."
}`;

  const llmResponse = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Deno.env.get("GROQ_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: answer },
        ],
        temperature: 0.3,
        response_format: { type: "json_object" },
      }),
    },
  );

  const llmData = await llmResponse.json();
  const raw = JSON.parse(llmData.choices[0].message.content);

  // Сохраняем submission
  const authHeader = req.headers.get("Authorization")!;
  const userClient = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
    { global: { headers: { Authorization: authHeader } } },
  );
  const {
    data: { user },
  } = await userClient.auth.getUser();

  await supabase.from("submissions").insert({
    user_id: user!.id,
    task_id: taskId,
    answer,
    score: raw.score,
    covered: raw.covered_points,
    missed: raw.missed_points,
    feedback: raw.feedback,
    judge_level: 1,
  });

  const result: JudgeResult = {
    score: raw.score,
    maxScore: 100,
    coveredPoints: raw.covered_points,
    missedPoints: raw.missed_points,
    feedback: raw.feedback,
    judgeLevel: 1,
  };

  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
  });
});
```

---

## Переключение уровней

```typescript
// src/api/judge.api.ts

const JUDGE_LEVEL = parseInt(import.meta.env.VITE_JUDGE_LEVEL || "0");

export async function evaluateTheory(
  taskId: string,
  answer: string,
): Promise<JudgeResult> {
  if (USE_MOCK) {
    await delay(800);
    return MOCK_JUDGE_RESULT;
  }

  if (JUDGE_LEVEL === 0) {
    // Level 0: клиентский keyword matching (без Edge Function)
    const task = await getTask(taskId);
    return evaluateLevel0(answer, task.rubricItems);
  }

  // Level 1+: Edge Function (серверная оценка через LLM)
  const { data, error } = await supabase.functions.invoke("judge", {
    body: { taskId, answer },
  });

  if (error) throw error;
  return data as JudgeResult;
}
```
