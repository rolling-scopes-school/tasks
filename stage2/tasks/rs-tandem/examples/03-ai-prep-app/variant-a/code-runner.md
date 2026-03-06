# Code Runner: Judge0

Стратегия реализации Code Runner для Варианта A через [Judge0](https://judge0.com/) — open-source систему выполнения кода.

> **Архитектура и навигация**: [README.md](./README.md)
> **API контракты**: [data-contracts.md](./data-contracts.md)

---

## Что такое Judge0?

[Judge0](https://judge0.com/) — open-source система выполнения кода. Принимает код + тесты → возвращает stdout/stderr/время. Это то, что стоит за LeetCode и HackerRank.

---

## Использование (SaaS)

Самый простой путь — бесплатный Judge0 CE на [RapidAPI](https://rapidapi.com/judge0-official/api/judge0-ce).

```typescript
// backend/services/code-runner.ts

const JUDGE0_URL = process.env.JUDGE0_URL || "https://judge0-ce.p.rapidapi.com";
const JUDGE0_KEY = process.env.JUDGE0_API_KEY;

interface Judge0Submission {
  source_code: string;
  language_id: number; // 63 = JavaScript (Node.js)
  stdin?: string;
  expected_output?: string;
}

async function runCode(userCode: string, testCode: string): Promise<RunResult> {
  // Объединяем пользовательский код с тестами
  const fullCode = `${userCode}\n\n// === TESTS ===\n${testCode}`;

  // Создаём submission
  const response = await fetch(`${JUDGE0_URL}/submissions?wait=true`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": JUDGE0_KEY!,
    },
    body: JSON.stringify({
      source_code: Buffer.from(fullCode).toString("base64"),
      language_id: 63,
      base64_encoded: true,
    }),
  });

  const result = await response.json();

  return parseJudge0Result(result);
}
```

---

## Self-hosted (Docker)

Для полного контроля — запуск Judge0 локально:

```bash
# docker-compose.yml (упрощённый)
services:
  judge0:
    image: judge0/judge0:latest
    ports:
      - "2358:2358"
    depends_on:
      - db
      - redis
  db:
    image: postgres:15
  redis:
    image: redis:7
```

---

## AI Error Hint (бонус)

Когда тесты падают, отправляем stderr в LLM для human-friendly объяснения:

```typescript
async function getErrorHint(
  stderr: string,
  userCode: string,
  hints: string[],
): Promise<string> {
  const prompt = `
ROLE: Helpful coding assistant.
TASK: Explain the error in simple terms. Do NOT give the full solution.

ERROR: ${stderr}
USER_CODE: ${userCode}
AVAILABLE_HINTS: ${JSON.stringify(hints)}

Choose the most relevant hint or rephrase the error simply. Respond in Russian.`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.5,
    max_tokens: 200,
  });

  return completion.choices[0].message.content!;
}
```
