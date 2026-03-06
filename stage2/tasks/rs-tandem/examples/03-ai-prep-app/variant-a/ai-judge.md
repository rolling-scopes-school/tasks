# AI Judge: Custom Backend + Judge0

Стратегия реализации AI Judge для Варианта A. Judge работает на Express сервере — ключи API не попадают в браузер.

> **Архитектура и навигация**: [README.md](./README.md)
> **API контракты**: [data-contracts.md](./data-contracts.md)

---

## Level 0: Hardcoded (без LLM)

Используется для разработки UI. Не требует API ключей, работает мгновенно.

```typescript
// backend/services/judge-level0.ts

function evaluateLevel0(answer: string, task: TaskWithSecret): JudgeResult {
  const answerLower = answer.toLowerCase();
  const covered: string[] = [];
  const missed: string[] = [];

  // Простое keyword matching
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

  for (const rubricItem of task.rubricItems) {
    const keywords = keywordMap[rubricItem] || [];
    const found = keywords.some((kw) => answerLower.includes(kw));
    if (found) covered.push(rubricItem);
    else missed.push(rubricItem);
  }

  const score = Math.round((covered.length / task.rubricItems.length) * 100);

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

## Level 1: Real LLM (Groq)

Подключается когда UI готов. **Mentor** реализует endpoint.

```typescript
// backend/services/judge-level1.ts

import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function evaluateLevel1(
  answer: string,
  task: TaskWithSecret,
): Promise<JudgeResult> {
  const systemPrompt = `
ROLE: You are a strict technical interviewer.
TASK: Compare the CANDIDATE_ANSWER with the REFERENCE_ANSWER using the RUBRIC.

REFERENCE_ANSWER: ${task.goldenAnswer}
RUBRIC_POINTS: ${JSON.stringify(task.rubricItems)}

IMPORTANT: Respond ONLY with valid JSON in this exact format:
{
  "score": <0-100>,
  "covered_points": ["point that was covered"],
  "missed_points": ["point that was missed"],
  "feedback": "Short constructive feedback in Russian."
}`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: answer },
    ],
    temperature: 0.3,
    response_format: { type: "json_object" },
  });

  const raw = JSON.parse(completion.choices[0].message.content!);

  return {
    score: raw.score,
    maxScore: 100,
    coveredPoints: raw.covered_points,
    missedPoints: raw.missed_points,
    feedback: raw.feedback,
    judgeLevel: 1,
  };
}
```

---

## Level 2: Advanced (если осталось время)

- Несколько rubric dimensions с весами
- Confidence score для каждого пункта
- Follow-up вопросы при пограничном результате
- Сравнение с предыдущими попытками пользователя

---

## Переключение уровней

```typescript
// backend/services/judge.ts

const JUDGE_LEVEL = parseInt(process.env.JUDGE_LEVEL || "0");

export async function evaluate(
  answer: string,
  task: TaskWithSecret,
): Promise<JudgeResult> {
  switch (JUDGE_LEVEL) {
    case 0:
      return evaluateLevel0(answer, task);
    case 1:
      return evaluateLevel1(answer, task);
    case 2:
      return evaluateLevel2(answer, task);
    default:
      return evaluateLevel0(answer, task);
  }
}
```
