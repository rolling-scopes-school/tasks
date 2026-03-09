# Tandem: Week 4 Checkpoint

**Дедлайн:** 16 марта 2026, 23:59 UTC

## Задание

Две задачи, каждая по 10 баллов. Любое условие внутри части не выполнено → 0 за эту часть.

### Часть 1: Unit Testing (+10)

1. **Тестовый фреймворк установлен** — `vitest`, `jest` или аналог в `devDependencies` файла `package.json`.
2. **`npm test` работает** — команда выполняется без ошибок и запускает тесты.
3. **Минимум 5 тестов написаны лично вами** — файлы `*.test.*` или `*.spec.*` в проекте. Суммарно ≥5 тестовых кейсов (`it` / `test`) в ваших коммитах. Ранее написанные тесты засчитываются, если отражены в дневнике. AI может помочь с синтаксисом, но тесты должны быть осмысленными — копипаста без понимания не засчитывается.

### Часть 2: Code Review (+10)

4. **Разобрались в коде тиммейта** — **Вариант А:** ≥3 содержательных комментария в PR команды (не "ок" / "lgtm"). **Вариант Б:** запись в дневнике о том, как вы изучали код другого участника — что разобрали, что поняли, какие артефакты остались (заметки, вопросы, скриншоты). Только PR в вашем командном репозитории.
5. **Ссылки / описание в дневнике** — ссылки на PR с вашими комментариями (Вариант А) или описание процесса изучения кода (Вариант Б).

> **Дневник:** минимум 2 записи за Week 4 (после 9 марта), замержены в `main`. Без дневника — 0 за обе части.

---

## Как написать тесты

Тестируйте код, который вы **лично написали**. Идеи от простого к сложному:

**Утилитарные функции** — самое простое. Чистые функции без побочных эффектов.

```typescript
import { formatScore } from "./utils";

test('formatScore returns "0 / 10" for zero', () => {
  expect(formatScore(0, 10)).toBe("0 / 10");
});

test("formatScore handles missing total", () => {
  expect(formatScore(5)).toBe("5");
});
```

**Логика компонентов** — хуки, state management, редьюсеры.

```typescript
import { renderHook, act } from "@testing-library/react";
import { useQuiz } from "./useQuiz";

test("selectAnswer marks question as answered", () => {
  const { result } = renderHook(() => useQuiz(mockQuestions));
  act(() => result.current.selectAnswer(0, "B"));
  expect(result.current.answers[0]).toBe("B");
});
```

**API-слой** — сервисные функции с моками.

```typescript
import { getDashboardStats } from "./api";

test("getDashboardStats returns stats object", async () => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve({ solved: 12, total: 50 }),
  });

  const stats = await getDashboardStats();
  expect(stats.solved).toBe(12);
});
```

---

## Как провести Code Review

Цель — разобраться в коде, который написал другой участник вашей команды. Есть два варианта выполнения.

### Вариант А: Комментарии в PR (рекомендуется)

Оставьте ≥3 содержательных комментария в Pull Request(ах) вашего командного репозитория. Можно в одном PR или в нескольких. Комментарий по существу кода — три категории:

**1. Предложение тестов** — посмотрите на код в PR и предложите, что стоит протестировать:

> _«Функция `parseAnswer()` не обрабатывает пустую строку — стоит добавить тест на `parseAnswer("")`»_

> _«В `useAuth` нет теста на кейс, когда токен истёк. Можно замокать `Date.now()` и проверить redirect»_

**2. Вопрос о коде** — если что-то непонятно или вызывает сомнения:

> _«Почему `response` типизирован как `any`? Можно ли использовать `unknown` + type guard?»_

> _«Этот useEffect зависит от `user`, но `user` не в dependency array — не будет ли stale closure?»_

**3. Предложение улучшения** — конкретное, не абстрактное:

> _«`LoginForm` уже 200 строк — можно вынести валидацию в отдельный хук `useLoginValidation`»_

**Не засчитывается:** `"ок"`, `"lgtm"`, `"👍"`, `"добавь тесты"` (без конкретики), комментарии сгенерированные AI целиком.

**Реальные примеры из ваших репозиториев:**

> _«Defining object literals like `[btnConfig]="{...}"` directly in templates causes Angular to recreate them on every change detection cycle. To improve performance, move these configurations to the TS file»_ — Zhdko, Дрим Тим ([PR #25](https://github.com/PoMaKoM-RSTeam/Rs-Tandem/pull/25))

> _«Two identical regex expressions here and at line 23. If you need to change validation logic, you'll need to change it in two places. Move it to `utils/validation.ts`»_ — KarpovDmitriy, Джунгли зовут! ([PR #17](https://github.com/KarpovDmitriy/widget-trainer/pull/17))

> _«Here you lose type safety: `variant` becomes plain string. Prefer `variant: IProps['variant']`. Otherwise, any string can be passed here»_ — dilmun1101, Strict Mode ([PR #31](https://github.com/FierceSloth/rss-tandem-app/pull/31))

> _«Сейчас signOut просто вызывает signOutApi() но UI не обновляется. После await signOutApi() нужно вызвать setSession(null)»_ — sunyuna00, Team42 ([PR #67](https://github.com/kanoplich/rs-tandem/pull/67))

Пример оформления в дневнике:

```markdown
## Code Review

- [PR #18: Add auth service](https://github.com/team/repo/pull/18) — 2 комментария (спросил про `any` в response, предложил тест на истёкший токен)
- [PR #21: Login form](https://github.com/team/repo/pull/21) — 1 комментарий (предложил вынести валидацию в хук)
```

### Вариант Б: Разбор кода в дневнике

Если вы не можете оставить содержательные комментарии в PR (нет открытых PR, код тиммейта слишком простой, или вы пока не видите, что можно улучшить) — опишите в дневнике, как вы разбирались в коде другого участника команды:

- Какой код / компонент вы изучали и чей он
- Что вы поняли о том, как он работает
- Какие вопросы у вас возникли (даже если вы потом нашли ответ)
- Какие артефакты остались: заметки, скриншоты, вопросы тиммейту в чате

> Важно: это не формальная отписка «я посмотрел код Васи». Это рассказ о том, что именно вы узнали, разбираясь в чужом коде.

Пример оформления в дневнике:

```markdown
## Code Review

Разбирался в auth-модуле, который написал @teammate.
Основная логика в `src/services/auth.ts` — JWT + refresh token.
Не сразу понял, зачем двойной вызов `validateToken()` — оказалось,
первый проверяет формат, второй — срок действия.
Спросил в чате, почему не используется httpOnly cookie — тиммейт объяснил,
что пока не настроен прокси на бэкенде.
Также посмотрел `LoginForm.tsx` — компонент на 200 строк,
валидация смешана с рендером. Предложил тиммейту вынести в хук.
```

---

## Сабмит

Отдельный сабмит не требуется — репозиторий уже зарегистрирован через форму на Week 1. Оценка выставляется автоматически после дедлайна.
