# Task 4 — Data Queries (AI era)

> Part of the revised React core. See the program rationale in
> [`react/.instructions/AI_ERA_PROGRAM.md`](../../.instructions/AI_ERA_PROGRAM.md).
> This task is **independent** — build it from scratch with function components, routing, a state library,
> and a data-query library.

## 🧠 What you'll build

A **GitHub explorer**: search repositories or users, browse **paginated** results, open a **detail**
view, and manually refresh data. The focus is **server-state**: fetching, **caching**, invalidation, and
loading/error handling done by a proper query library.

Suggested API: **[GitHub REST API](https://docs.github.com/en/rest)** (unauthenticated; rate-limited but
fine for learning). PokeAPI or any key-free API works. **No backend** — the focus is React data-fetching.

## 🎯 Skills / Learning objectives

- Understand the difference between **client state** and **server state**.
- Use a query library — **RTK Query** (with Redux) **or** **TanStack Query** (with Zustand) — for all API calls.
- Implement **caching** (revisiting a loaded page makes no new request), loading/error states, and
  **manual cache invalidation / refetch**.

## 📖 Required theory

- [Query solutions (RTK Query / TanStack Query)](../state-management/queries.md)

## 🤖 Working with AI (required)

The AI **coaches, you decide**. Keep a mandatory **`CHANGELOG.md`** (per-session steps + justified decisions).
See the full protocol in [`AI_ERA_PROGRAM.md`](../../.instructions/AI_ERA_PROGRAM.md).

**Decision points for this task:**
- **Query library:** RTK Query **or** TanStack Query. It must be **consistent with your state-library
  choice** (Redux→RTK Query; Zustand→TanStack Query). The AI reminds you of this coupling and presents
  tradeoffs **neutrally**; you choose and justify.
- **Cache strategy** (staleTime / cache TTL) — make the TTL configurable via an env variable.
- **Invalidation approach** for the manual refresh.

## Functional Requirements (max **100 points**)

### Feature 1: Project setup (**5 points**)
- Vite `react-ts` + Oxlint + Oxfmt + Husky. TypeScript throughout; no `any`/`ts-ignore`.

### Feature 2: Query library set up (**15 points**)
- RTK Query or TanStack Query integrated and configured; **all** API calls go through it.
- Cache TTL configurable via an environment variable.

### Feature 3: Search + paginated results (**20 points**)
- Search plus paginated results, driven by query hooks.

### Feature 4: Detail view with cached fetch (**15 points**)
- Opening an item fetches and **caches** its detail; reopening it makes no new request.

### Feature 5: Loading & error states (**15 points**)
- Loading indicators while fetching; clear, human-readable error messages on failure.

### Feature 6: Manual cache invalidation / refetch (**10 points**)
- A refresh control **invalidates** the relevant cache and triggers a refetch.

### Feature 7: Cache reuse across navigation (**5 points**)
- Returning to a previously loaded page/query serves from cache (no unnecessary request).

### Feature 8: Tests (**15 points**)
- Vitest + RTL tests covering loading, error, and caching behavior. Network mocked. Coverage ≥ thresholds.

## Technical Requirements

1. Fresh repository; dedicated branch; first commit only `README.md`.
2. Stack: **Vite + React + TS + Oxlint + Oxfmt + Husky + Vitest + RTL** + state library + query library.
3. Keep a `CHANGELOG.md`.

## Penalties

- TypeScript not used: **-95** · each `any`: **-20** · each `ts-ignore`: **-20**.
- Each API call not made through the chosen query library: **-10 each**.
- Direct DOM manipulation: **-50 each**. · Component libraries (MUI/AntD): **-100**.
- Coverage below thresholds: statements <80% (≥70%): **-10**; <70% (≥50%): **-30**; all <50%: **-50**.
- Missing `CHANGELOG.md`: **-90**.

## FAQ

**RTK Query or TanStack Query?** Match your state library (Redux→RTK Query, Zustand→TanStack Query). Justify in `CHANGELOG.md`.
**Invalidate vs refetch?** Refetch re-requests the current query; invalidate clears the cache so the next access refetches.
**Can I use React Query / Redux DevTools?** Yes — they aren't UI libraries.
