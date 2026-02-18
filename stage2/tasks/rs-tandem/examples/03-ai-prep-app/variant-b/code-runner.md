# Code Runner: WebContainer

Стратегия реализации Code Runner для Варианта B через [WebContainer](https://webcontainers.io/) — Node.js runtime в браузере от StackBlitz.

> **Архитектура и навигация**: [README.md](./README.md)
> **API контракты**: [data-contracts.md](./data-contracts.md)

---

## Что такое WebContainer?

[WebContainer](https://webcontainers.io/) от StackBlitz — Node.js runtime в браузере. Позволяет запускать `npm install`, `node test.js` без бэкенда.

---

## Установка

```bash
npm install @webcontainer/api
```

---

## Интеграция

```typescript
// src/services/web-container-runner.ts

import { WebContainer } from "@webcontainer/api";

let container: WebContainer | null = null;

async function getContainer(): Promise<WebContainer> {
  if (!container) {
    container = await WebContainer.boot();
  }
  return container;
}

export async function runCode(
  userCode: string,
  testCode: string,
): Promise<RunResult> {
  const wc = await getContainer();

  // Монтируем файлы
  await wc.mount({
    "solution.js": { file: { contents: userCode } },
    "test.js": { file: { contents: testCode } },
    "package.json": {
      file: {
        contents: JSON.stringify({
          name: "runner",
          scripts: { test: "node test.js" },
        }),
      },
    },
  });

  // Запускаем тесты
  const process = await wc.spawn("node", ["test.js"]);

  let stdout = "";
  let stderr = "";

  process.output.pipeTo(
    new WritableStream({
      write(chunk) {
        stdout += chunk;
      },
    }),
  );

  // Ждём завершения
  const exitCode = await process.exit;

  return parseTestOutput(stdout, stderr, exitCode);
}
```

---

## Формат тестов (простой assertion-based)

Тесты хранятся в `task.testCode` и используют простую систему assert:

```javascript
// Пример test.js (хранится в tasks.test_code)
const assert = require("assert");
const { debounce } = require("./solution.js");

let passed = 0;
let failed = 0;
const results = [];

function test(name, fn) {
  try {
    fn();
    passed++;
    results.push({ name, passed: true });
  } catch (e) {
    failed++;
    results.push({ name, passed: false, error: e.message });
  }
}

test("should delay execution", () => {
  // ...test logic...
});

test("should cancel previous timeout", () => {
  // ...test logic...
});

// Output results as JSON
console.log(
  JSON.stringify({ passed, failed, total: passed + failed, results }),
);
process.exit(failed > 0 ? 1 : 0);
```

---

## Сравнение WebContainer vs Judge0

| Аспект             | WebContainer            | Judge0 (Вариант A)       |
| ------------------ | ----------------------- | ------------------------ |
| Языки              | Только Node.js          | 60+ языков               |
| Sandbox            | Ограниченный            | Полная изоляция (Docker) |
| npm пакеты         | Да (в браузере!)        | Да (на сервере)          |
| Таймауты           | Нужно реализовать самим | Встроенные               |
| Производительность | Зависит от браузера     | Серверная                |
| Offline            | Да (после boot)         | Нет                      |
| Бэкенд             | **Не нужен**            | Нужен                    |

---

## AI Error Hint (бонус)

Когда тесты падают, отправляем stderr в Edge Function:

```typescript
// supabase/functions/hint/index.ts

serve(async (req) => {
  const { stderr, taskId } = await req.json();

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { data: task } = await supabase
    .from("tasks")
    .select("hints")
    .eq("id", taskId)
    .single();

  const prompt = `
ROLE: Helpful coding assistant. Respond in Russian.
TASK: Explain the error simply. Do NOT give the full solution.
ERROR: ${stderr}
AVAILABLE_HINTS: ${JSON.stringify(task?.hints || [])}
Choose the most relevant hint or rephrase the error.`;

  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Deno.env.get("GROQ_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.5,
        max_tokens: 200,
      }),
    },
  );

  const data = await response.json();
  const hint = data.choices[0].message.content;

  return new Response(JSON.stringify({ hint }), {
    headers: { "Content-Type": "application/json" },
  });
});
```
