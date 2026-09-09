# Task 3 — State Management + Context (AI era)

> Part of the revised React core. See the program rationale in
> [`react/.instructions/AI_ERA_PROGRAM.md`](../../.instructions/AI_ERA_PROGRAM.md).
> This task is **independent** — build it from scratch with function components, routing, and a state library.

## 🧠 What you'll build

A **Mini-shop**: a product list, a cart with quantities and totals, and a light/dark theme switch. The
focus is **global state management** (a dedicated store) and understanding **when to use Context vs a
store**.

Suggested API: **[FakeStore API](https://fakestoreapi.com/)** (no key) or a local `products.json`.
**No backend** — the focus is React state.

## 🎯 Skills / Learning objectives

- Manage **global state** with a store (Redux Toolkit **or** Zustand), using **partial updates** so only
  the components that use a slice re-render.
- Use **React Context** for cross-cutting UI concerns (theme).
- Understand and articulate the **context-vs-store distinction**: Context has **no selective
  subscription** — every consumer re-renders on any value change — so it fits theme/i18n but is a poor
  fit for frequently-changing state.

## 📖 Required theory

- [State management (Redux Toolkit / Zustand)](../state-management/README.md)
- [Context API](../context-api/README.md)

## 🤖 Working with AI (required)

The AI **coaches, you decide**. Keep a mandatory **`LOG.md`** (per-session steps + justified decisions).
See the full protocol in [`AI_ERA_PROGRAM.md`](../../.instructions/AI_ERA_PROGRAM.md).

**Decision points for this task:**
- **State library:** Redux Toolkit **or** Zustand. AI presents tradeoffs **neutrally**; you choose and
  justify. The AI should remind you this choice **pairs with the query library** in Task 4 (Redux→RTK
  Query; Zustand→TanStack Query) — but must **not** influence your decision.
- **Store shape / slices** (products, cart).
- **What belongs in Context vs the store** (theme vs cart).

## Functional Requirements (max **100 points**)

### Feature 1: Project setup (**5 points**)
- Vite `react-ts` + Oxlint + Prettier + Husky. TypeScript throughout; no `any`/`ts-ignore`.

### Feature 2: State library set up (**15 points**)
- Redux Toolkit **or** Zustand integrated and configured; store used for app state.

### Feature 3: Products + cart in the store (**20 points**)
- Product list rendered; users can **add / remove / change quantity** of cart items.
- Cart lives in the **store** with partial updates (adding an item doesn't needlessly re-render unrelated UI).

### Feature 4: Cart summary/flyout (**15 points**)
- A cart summary (e.g., sticky flyout) shows item count and totals and **persists across navigation**.

### Feature 5: Theme via Context API (**15 points**)
- A light/dark theme switch implemented with **Context API**, affecting the whole app; control at the top.

### Feature 6: Context-vs-store rationale (**5 points**)
- A short written rationale (in `README.md` or `LOG.md`) explaining why theme is in Context and cart is in the store.

### Feature 7: Optional cart persistence (**5 points**)
- Cart optionally persists to `localStorage` across reloads.

### Feature 8: Tests (**20 points**)
- Vitest + RTL tests for the store (slice/actions/selectors), components, and the theme context. Coverage ≥ thresholds.

## Technical Requirements

1. Fresh repository; dedicated branch; first commit only `README.md`.
2. Stack: **Vite + React + TS + Oxlint + Prettier + Husky + Vitest + RTL** + chosen state library.
3. No direct state mutation (Redux/Zustand). Direct DOM only for theme attribute toggling in a `useEffect`.
4. Keep a `LOG.md`.

## Penalties

- TypeScript not used: **-95** · each `any`: **-20** · each `ts-ignore`: **-20**.
- Direct state mutation in the store: **-20 each**.
- Direct DOM manipulation (except theme attribute toggling in `useEffect`): **-50 each**.
- Component libraries (MUI/AntD): **-100**.
- Coverage below thresholds: statements <80% (≥70%): **-10**; <70% (≥50%): **-30**; all <50%: **-50**.
- Missing `LOG.md`: **-90**.

## FAQ

**Redux Toolkit or Zustand?** Your choice — justify in `LOG.md`. AI stays neutral, but reminds you it pairs with Task 4.
**Why not put the cart in Context?** Context re-renders all consumers; a store gives selective updates. Explain this in your rationale.
**Persist selected items?** Only if you want the optional points — in-memory across navigation is enough otherwise.
