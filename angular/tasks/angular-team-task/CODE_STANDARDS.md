# Project Technical Requirements

Baseline requirements expected from every project. Review this document **before starting development**.

---

## Angular

- Project created via Angular CLI (`ng new`)
- Angular 20+ (latest stable version recommended)
- Standalone API
- New control flow (`@if`, `@for`, `@switch`)
- `OnPush` Change Detection
- Angular Signals (`signal`, `computed`, `effect`) for reactive state management
- `input()`, `output()`, `model()` — signal-based component API
- Routing configured with at least 1 lazy-loaded route
- At least 1 Reactive Form with validation

## TypeScript

- `"strict": true` enabled in `tsconfig.json`
- No `@ts-ignore` or `as any` in the code
- No explicit use of the `any` type (`: any`, `<any>`)

> **Exceptions:**
>
> - `any` in external library types — allowed with a `// TODO: replace any` comment.
> - `any` in complex generic constructs — allowed with a comment.

## Linting & Formatting

- ESLint configured: `eslint.config.*` or `.eslintrc.*`
- Prettier configured: `.prettierrc` or `prettier.config.*`
- `ng lint` / `npm run lint` passes without errors

## Error Handling

- API requests are wrapped in error handling (`catchError` / try-catch)
- Navigating to a non-existent URL shows a meaningful 404 page
- A loading indicator is displayed while data is being fetched
- A clear message is shown to the user on a network error

## Deploy

- Frontend is deployed (Vercel, Netlify, Firebase Hosting, GitHub Pages)
- Deploy link in the README
- The project runs with standard commands (`npm i && ng serve` / `npm start`)
