# Технические требования к проекту

Baseline-требования, которые ожидаются от каждого проекта. Ознакомьтесь с этим документом **до начала разработки**.

---

## Angular

- Проект создан через Angular CLI (`ng new`)
- Используется Angular 20+ (рекомендуется последняя стабильная версия)
- Standalone API
- Использование нового control flow (`@if`, `@for`, `@switch`)
- Используется `OnPush` Change Detection
- Используются Angular Signals (`signal`, `computed`, `effect`) для управления реактивным состоянием
- `input()`, `output()`, `model()` — signal-based API для компонентов
- Routing настроен с хотя бы 1 lazy-loaded маршрутом
- Минимум 1 Reactive Form с валидацией

## TypeScript

- В `tsconfig.json` включён `"strict": true`
- В коде нет `@ts-ignore` и `as any`
- Нет явного использования типа `any` (`: any`, `<any>`)

> **Исключения:**
>
> - `any` в типах внешних библиотек — допускается при наличии комментария `// TODO: replace any`.
> - `any` в сложных дженерик сущностях — допускается при наличии комментария.

## Linting & Formatting

- ESLint настроен: `eslint.config.*` или `.eslintrc.*`
- Prettier настроен: `.prettierrc` или `prettier.config.*`
- `ng lint` / `npm run lint` проходит без ошибок

## Error Handling

- API-запросы обёрнуты в обработку ошибок (`catchError` / try-catch)
- При переходе на несуществующий URL — осмысленная страница 404
- При загрузке данных — индикатор загрузки
- При ошибке сети — понятное сообщение пользователю

## Deploy

- Frontend задеплоен (Vercel, Netlify, Firebase Hosting, GitHub Pages)
- Ссылка на деплой в README
- Проект запускается стандартными командами (`npm i && ng serve` / `npm start`)
