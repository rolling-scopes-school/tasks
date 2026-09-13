# Task 2 — Routing (SPA) (AI era)

> Part of the revised React core. See the program rationale in
> [`react/.instructions/AI_ERA_PROGRAM.md`](../../.instructions/AI_ERA_PROGRAM.md).
> This task is **independent** — build it from scratch with function components + a router.

## 🧠 What you'll build

A **Character catalog**: a paginated list of items, a detail view, search, an About page, and a 404
page — a single-page application with **client-side routing**. The focus is **routing**: URL-driven
state, nested layouts, and navigation.

Suggested API: **[Rick & Morty API](https://rickandmortyapi.com/)** (no key, paginated, has detail
endpoints). Any key-free paginated API works. **No backend** — the focus is React + routing.

## 🎯 Skills / Learning objectives

- Set up a router and a **nested layout** with an `Outlet`.
- Drive UI from the **URL**: dynamic params, and **pagination synced to the URL**.
- Navigate with links and programmatically.
- Handle **unknown routes** with a 404 page.

## 📖 Required theory

- [Hooks](../hooks/README.md)
- [React Router](../router/README.md)
- For TanStack Router: the [official docs](https://tanstack.com/router/latest).

## 🤖 Working with AI (required)

The AI **coaches, you decide**. Keep a mandatory **`CHANGELOG.md`** (per-session steps + justified decisions).
See the full protocol in [`AI_ERA_PROGRAM.md`](../../.instructions/AI_ERA_PROGRAM.md); the automated
harness ships next iteration.

**Decision points for this task:**
- **Which router:** React Router **or** TanStack Router. Have the AI present the tradeoffs **neutrally**;
  you choose and justify. Note (the AI should remind you) that this choice pairs with your later
  state/query choices into a coherent stack (see the "library paths" in the program doc) — but it must
  **not** steer your pick.
- If using React Router: **data** vs **declarative** mode.
- **URL schema** for pagination and details (e.g. `?page=2&details=1` vs `/:page/:id`).

## Functional Requirements (max **100 points**)

### Feature 1: Project setup (**5 points**)
- Vite `react-ts` + Oxlint + Oxfmt + Husky. TypeScript throughout; no `any`/`ts-ignore`.

### Feature 2: Router & nested layout (**15 points**)
- Router configured for **SPA mode**.
- A shared layout renders child routes through an **`Outlet`**.

### Feature 3: List with URL-synced pagination (**20 points**)
- The list page shows items and pagination controls (visible after data loads).
- The current page is reflected in the **URL** and always matches the visible page.
- Changing the search resets the page to 1 and updates the URL.

### Feature 4: Master-detail via `Outlet` (**20 points**)
- Clicking an item opens a **detail view** (route with a param) beside the list, rendered via `Outlet`.
- A loading indicator shows while details load; a close control hides them.
- On first load no item is selected. The URL reflects page + selected item.

### Feature 5: Search reflected in the URL (**10 points**)
- A search control filters results and is reflected in the URL (e.g. `?search=rick`).

### Feature 6: About page (**10 points**)
- An About page with author info and a link to the RS School React course, reachable via a nav link.

### Feature 7: 404 page (**10 points**)
- Any unknown route shows a 404 page with a clear message and a link back to the app. Works on localhost.

### Feature 8: Tests (**10 points**)
- Vitest + RTL tests covering routing, pagination, and the detail view. Network mocked. Coverage ≥ the thresholds.

## Technical Requirements

1. Fresh repository; dedicated branch; first commit only `README.md`.
2. Stack: **Vite + React + TS + Oxlint + Oxfmt + Husky + Vitest + RTL**.
3. Function components only (no class components needed here).
4. Keep a `CHANGELOG.md`.

## Penalties

- TypeScript not used: **-95** · each `any`: **-20** · each `ts-ignore`: **-20**.
- Class components: **-50 each**. · Direct DOM manipulation: **-50 each**.
- Component libraries (MUI/AntD): **-100**.
- Coverage below thresholds: statements <80% (≥70%): **-10**; <70% (≥50%): **-30**; all <50%: **-50**.
- Missing `CHANGELOG.md`: **-90**.

## FAQ

**React Router or TanStack Router?** Your choice — justify it in `CHANGELOG.md`. The AI must stay neutral.
**Does the page param always need to be in the URL?** Yes, e.g. `?page=1` even by default.
**Must the 404 work locally?** Yes — cross-check runs on localhost.
