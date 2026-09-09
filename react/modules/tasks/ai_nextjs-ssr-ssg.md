# Next.js — SSR / SSG (AI era)

> Isolated task in the revised React program. See the rationale in
> [`react/.instructions/AI_ERA_PROGRAM.md`](../../.instructions/AI_ERA_PROGRAM.md).
> **Change from the old task:** this is now **built from scratch** with `create-next-app` (App Router) —
> there is **no migration** from a previous `api-queries` branch. It is fully independent.

## 🧠 What you'll build

A **server-rendered application** using **Next.js (App Router)** that reuses the "search results + detail
panel" idea from earlier tasks, but implemented the Next.js way: **React Server Components**, **server
actions**, **file-based routing**, internationalization, and image optimization.

Suggested API: any key-free public API with search + detail (e.g. Rick & Morty, GitHub REST, PokeAPI).
**No custom backend required** beyond Next.js server components / route handlers.

## 🎯 Skills / Learning objectives

- Understand **SSR vs CSR vs SSG** and the role of **React Server Components**.
- Build with the **App Router**: file-based routing, shared layouts, server/client components.
- Use **server actions** for data operations (search, CSV generation).
- Add **internationalization** with **next-intl** and optimized images with **`next/image`**.

## 📖 Required theory

- [Next.js SSR/SSG module](../nextjs-ssr-ssg/README.md)
- [Next.js docs — App Router](https://nextjs.org/docs/app)
- [next-intl](https://next-intl.dev/)

## 🤖 Working with AI (required)

The AI **coaches, you decide**. Keep a mandatory **`LOG.md`** (per-session steps + justified decisions).
See the full protocol in [`AI_ERA_PROGRAM.md`](../../.instructions/AI_ERA_PROGRAM.md).

**Decision points for this task:**
- Which components are **server** vs **client** (move as much as possible to the server).
- **Static (SSG)** vs **dynamic (SSR)** rendering per route.
- Where **server actions** vs client-side data libraries are appropriate.

## Functional Requirements (max **100 points**)

### Feature 1: Fresh Next.js App Router app (**10 points**)
- Created with `create-next-app` (App Router), TypeScript, file-based routing. Builds and runs.

### Feature 2: Internationalization (**10 points**)
- **next-intl** for i18n (≥2 languages) with a client-side language switcher. UI/navigation only; API data need not be translated.

### Feature 3: Shared layout (**5 points**)
- A shared root layout used across all pages.

### Feature 4: 404 page (**5 points**)
- A 404 page shown for unknown routes.

### Feature 5: Image rendering (**10 points**)
- All images rendered via **`next/image`** (with `remotePatterns` configured for external URLs).

### Feature 6: Localized links (**10 points**)
- All navigation links use **next-intl** `createNavigation` so they work across locales.

### Feature 7: About page as SSG server component (**10 points**)
- The About page is a **statically generated server component** (no client-side data fetching).

### Feature 8: Server-side CSV via server action (**15 points**)
- CSV export is generated and served **from the server** via a server action or route handler.

### Feature 9: Search results page with server components + SSR (**15 points**)
- The initial search results page (list + detail-panel shell) is **server-rendered** using server components.

### Feature 10: Server actions for search & detail selection (**10 points**)
- Search submissions run through **server actions**; selecting an item triggers **server-side** detail fetching.

## Technical Requirements

1. Fresh repository; dedicated branch; first commit only `README.md`.
2. **Next.js App Router + TypeScript.** ESLint per Next defaults (this task is the Oxlint carve-out).
3. Theme switching (if included) implemented by hand (React Context + optional `localStorage`); no `next-themes`.
4. Keep a `LOG.md`.

## Penalties

- TypeScript not used: **-100** · each `any`: **-20** · each `ts-ignore`: **-20**.
- Direct DOM manipulation inside components: **-50 each**.
- Component libraries (MUI/AntD): **-100**.
- Missing `LOG.md`: **-90**.

## FAQ

**Do I migrate my old app?** No — build fresh with `create-next-app` (App Router).
**Do I translate API data?** No — localize UI and navigation only.
**Where should requests go?** Static/invariant → server (RSC/`fetch`); dynamic (depend on params/interaction) → client libraries are allowed. Move as much as possible to the server.
**Where to deploy?** Anywhere (Vercel, Netlify, GitHub Pages, …). Vercel integrates tightly with Next.js.
