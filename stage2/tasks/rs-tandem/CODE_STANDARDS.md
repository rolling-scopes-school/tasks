# Технические требования к проекту

Baseline-требования, которые ожидаются от каждого проекта. Ознакомьтесь с этим документом **до начала разработки**.

---

## TypeScript

- Проект написан на TypeScript
- В `tsconfig.json` включён `"strict": true`
- В коде нет `@ts-ignore` и `as any`
- Нет явного использования типа `any` (`: any`, `<any>`)

> **Исключение:** `any` в типах внешних библиотек (если нет `@types`) — допускается при наличии комментария `// TODO: replace any`.

> **Штрафы:** проект не на TypeScript — потеря 100% личной оценки. `strict: false` — потеря 50%. Подробности: [SCORE_PERSONAL.md](./SCORE_PERSONAL.md#penalties).

## Linting & Formatting

- ESLint настроен: `.eslintrc.*` или `eslint.config.*`
- Prettier настроен: `.prettierrc` или `prettier.config.*`
- `npm run lint` проходит без ошибок

## Error Handling

- API-запросы обёрнуты в try/catch
- При переходе на несуществующий URL — осмысленная страница 404
- При загрузке данных — индикатор загрузки
- При ошибке сети — понятное сообщение пользователю

## Deploy

- Frontend задеплоен (Vercel, Netlify, GitHub Pages)
- Ссылка на деплой в README
- Проект запускается стандартными командами (`npm i && npm start`)
