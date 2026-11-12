# Task 8 — Next.js SSR / SSG (AI era)

> Part of the revised React program. See the rationale in
> [`react/.instructions/AI_ERA_PROGRAM.md`](../../.instructions/AI_ERA_PROGRAM.md).
> This task is **independent** — build it from scratch with `create-next-app` (App Router).
> **Change from the old task:** there is **no migration** from a previous `api-queries` branch.

## 🧠 What you'll build

A **server-rendered application** using **Next.js (App Router)** that reuses the "search results + detail
panel" idea from earlier tasks, but implemented the Next.js way: **React Server Components**, **server
actions**, **file-based routing**, internationalization, and image optimization.

Suggested API: any key-free public API with search + detail (e.g. Rick & Morty, GitHub REST, PokeAPI).
**No custom backend required** beyond Next.js server components / route handlers.

> **Optional:** you may use the experimental [`vinext`](https://github.com/cloudflare/vinext) framework
> instead of Next.js. It is still experimental, but allowed for this task.

## 🎯 Skills / Learning objectives

- Understand **SSR vs CSR vs SSG** and the role of **React Server Components**.
- Build with the **App Router**: file-based routing, shared layouts, server/client components.
- Use **server actions** for data operations (search, CSV generation).
- Add **internationalization** with **next-intl** and optimized images with **`next/image`**.

## 📖 Required theory

- [Next.js SSR/SSG module](../nextjs-ssr-ssg/README.md)
- [Next.js docs — App Router](https://nextjs.org/docs/app)
- [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Forms and Server Actions](https://nextjs.org/docs/app/guides/forms)
- [next-intl](https://next-intl.dev/) and its
  [`createNavigation`](https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#i18n-navigation)
- [Playwright](https://playwright.dev/docs/intro) — end-to-end testing.

## 🤖 Working with AI (required)

The AI **coaches, you decide**. Keep a mandatory **`CHANGELOG.md`** (per-session steps + justified decisions).
See the full protocol in [`AI_ERA_PROGRAM.md`](../../.instructions/AI_ERA_PROGRAM.md).

**Decision points for this task:**

- Which components are **server** vs **client** (move as much as possible to the server).
- **Static (SSG)** vs **dynamic (SSR)** rendering per route.
- Where **server actions** vs client-side data libraries are appropriate.
- **E2E scope & structure:** which flows to cover with Playwright (locale switch, navigation across
  server-rendered routes, search via server action, CSV export). Run against `next build && next start`.

## Functional Requirements (max **100 points**)

### Feature 1: Fresh Next.js App Router app (**5 points**)

- Created with `create-next-app` (App Router), TypeScript, file-based routing. Builds and runs.

### Feature 2: Internationalization (**10 points**)

- **next-intl** is used for internationalization with at least two languages. [5 points]
- The language can be changed via a **client-side switcher**. [5 points]
- UI and navigation only; API data need not be translated.

### Feature 3: Shared layout (**5 points**)

- A shared root layout is used across all pages.

### Feature 4: 404 page (**5 points**)

- A 404 page is shown for unknown routes.

### Feature 5: Image rendering (**10 points**)

- All images are rendered via **`next/image`** (with `remotePatterns` configured for external URLs).
- If your API has no images, you get these points automatically.

### Feature 6: Localized links (**10 points**)

- All navigation links use **next-intl** `createNavigation` so they work across locales.

### Feature 7: About page as SSG server component (**10 points**)

- The About page content is a **server component** only (no client components for core content). [5 points]
- The About page is **statically generated** (SSG); no client-side data fetching. [5 points]

### Feature 8: Server-side CSV via server action (**10 points**)

- CSV export is compiled and served **from the server** via a server action (e.g. with `useActionState`) or a
  route handler.

### Feature 9: Search results page with server components + SSR (**10 points**)

- The initial load of the search results page (current page + query params) is **server-rendered**. [5 points]
- The results list and layout (including the detail-panel container) are **server components**. [5 points]

### Feature 10: Server actions for search & detail selection (**10 points**)

- Search submissions run through **server actions** / server functions, not ad-hoc client-only `fetch`. [5 points]
- Selecting an item triggers **server-side** data fetching for its detail panel. [5 points]

### Feature 11: End-to-end tests (Playwright) (**15 points**)

- Playwright E2E specs in `e2e/` cover the key journeys (locale switch, navigation across routes, search via
  server action, CSV export). Run against a production server (`next build && next start`) and pass headlessly.

## Technical Requirements

1. Fresh repository; dedicated branch; first commit only `README.md`.
2. **Next.js App Router + TypeScript.** ESLint per Next defaults (this task is the Oxlint carve-out).
   **Playwright** is still required for E2E.
3. Theme switching (if included) implemented by hand (React Context + optional `localStorage`); no `next-themes`.
4. Keep a `CHANGELOG.md`.

## Penalties

- TypeScript not used: **-100** · each `any`: **-20** · each `ts-ignore`: **-20**.
- Direct DOM manipulation inside components: **-50 each**.
- Component libraries (MUI/AntD): **-100**.
- No E2E (Playwright) tests: **-30**.
- Missing `CHANGELOG.md`: **-90**.

## FAQ

**Do I migrate my old app?** No — build fresh with `create-next-app` (App Router).
**Do I translate API data?** No — localize UI and navigation only (texts, headings, labels).
**Where should requests go?** Static/invariant → server (RSC/`fetch`); dynamic (depend on `searchParams` or interaction) → client libraries (RTK Query / TanStack Query) are allowed. Move as much as possible to the server.
**When should a component be a server component?** Whenever it needs no state or hooks — better for performance and SEO.
**How do I serve the CSV?** Build it in a server action or route handler and send it with proper headers (`Content-Type`, `Content-Disposition`).
**What about external images?** Configure `images.remotePatterns` in `next.config`; avoid custom loaders unless strictly necessary.
**Where to deploy?** Anywhere (Vercel, Netlify, GitHub Pages, …). Vercel integrates tightly with Next.js.
