# Code & Product Quality: Чеклист

> Справочный документ. Не оценивается отдельно.
> Качество кода проверяет ментор ([DEFENCE_MENTOR.md](./DEFENCE_MENTOR.md), критерии в [SCORE_PERSONAL.md](./SCORE_PERSONAL.md)).
> Качество продукта проверяют студенты-эксперты ([DEFENCE_PEER.md](./DEFENCE_PEER.md)).

---

## Качество кода (проверяет ментор)

#### TypeScript Strict

- В `tsconfig.json` включён `"strict": true`
- В коде нет `@ts-ignore`
- В коде нет `as any`

```bash
grep -r "@ts-ignore\|as any" src/
```

#### No Any

- Нет явного использования типа `any` (`: any`, `<any>`)

```bash
grep -rn ": any\|<any>" src/ --include="*.ts" --include="*.tsx" | wc -l
```

> **Исключение:** `any` в типах внешних библиотек (если нет `@types`) — не штрафуется при наличии комментария `// TODO: replace any`.

#### Linting Setup

- ESLint настроен: `.eslintrc.*` или `eslint.config.*` существует
- Prettier настроен: `.prettierrc` или `prettier.config.*` существует

```bash
npm install && npm run lint
```

> **Про Husky.** Наличие `.husky/` само по себе не показатель. Реальная ценность git hooks видна по результату: консистентные коммит-сообщения, код отформатирован единообразно. Эти признаки покрываются критериями History Hygiene (Teamwork).

#### Error Handling

- API-запросы обёрнуты в try/catch
- Приложение не падает при ошибках сети

---

## Качество продукта (проверяют студенты-эксперты)

#### Deploy & Launch

- Деплой доступен **ИЛИ** проект запускается локально
- Ссылка из README работает

#### User Flow

- Основной user flow проходим от начала до конца по Feature List из README

#### Edge Cases

- `/nonexistent` — есть 404-страница?
- DevTools → Network → Slow 3G — есть loading states?
- DevTools → Network → Offline — есть сообщение об ошибке?

#### README

- Деплой-ссылка или инструкция запуска
- Feature List (3-5 фич с шагами)
- Демо-видео (до 8 мин)

---

## Penalties

- (-100%) Проект не на TypeScript.
- (-50%) `strict: false` в `tsconfig.json`.
