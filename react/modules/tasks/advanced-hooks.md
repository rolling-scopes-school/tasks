# Task 5 — Advanced Hooks & Patterns (AI era)

> Part of the revised React core. See the program rationale in
> [`react/.instructions/AI_ERA_PROGRAM.md`](../../.instructions/AI_ERA_PROGRAM.md).
> This task is **independent** — build it from scratch. No external API is required.

## 🧠 What you'll build

A small **reusable component kit** plus a **showcase page** that composes it. The focus is **advanced
hooks** and **composition patterns** — designing clean, accessible, reusable component APIs.

> **Scope note:** memoization (`useMemo`, `useCallback`, `React.memo`) is intentionally **out of scope**
> here — it belongs to the dedicated **Performance** task. Do not center this task on memoization.

> **Reused downstream:** the **accessible modal (Portal)**, **controlled vs uncontrolled**, and
> **combobox / autocomplete** patterns you build here are the canonical versions — in
> [Task 6 — Forms](./forms.md) you can **reuse them or rebuild them the same way** (that task focuses on form
> handling, not re-deriving these). Build them as clean, portable components you can carry across.

## 🎯 Skills / Learning objectives

- Advanced hooks: **`useRef`**, **`useLayoutEffect`**, **`useId`**, **`useImperativeHandle`**,
  **`useTransition` / `useDeferredValue`**.
- Composition patterns: **compound components**, **custom hooks**, the **provider pattern**,
  **controlled vs uncontrolled** components.
- Bonus / legacy comprehension: **`useSyncExternalStore`** (e.g., a tiny toast store) and **render
  props** (understand them; they're largely superseded by hooks).

## 📖 Required theory

- [Hooks](../hooks/README.md) — advanced hooks & custom hooks
- [Portals](../portals/README.md) — for the modal/popover
- Compound components / render props: study inline resources the AI curates with you.
- [Playwright](https://playwright.dev/docs/intro) — end-to-end testing.

## 🤖 Working with AI (required)

The AI **coaches, you decide**. Keep a mandatory **`CHANGELOG.md`** (per-session steps + justified decisions).
See the full protocol in [`AI_ERA_PROGRAM.md`](../../.instructions/AI_ERA_PROGRAM.md).

**Decision points for this task:**
- **Component API design:** compound-component API vs a props-driven API.
- **Controlled vs uncontrolled** for each component.
- **Where an imperative handle** (`useImperativeHandle` + ref) is genuinely justified vs an anti-pattern.
- **E2E scope & structure:** which flows to cover with Playwright — real keyboard/focus behavior the modal
  and combobox depend on (open/close, focus trap, ESC, arrow-key navigation) that unit tests approximate.

## Functional Requirements (max **100 points**)

### Feature 1: Project setup (**5 points**)
- Vite `react-ts` + Oxlint + Oxfmt + Husky. TypeScript throughout; no `any`/`ts-ignore`.

### Feature 2: Compound-component API (**15 points**)
- A component with a **compound API** (e.g., `<Tabs><Tab/></Tabs>` or an Accordion) sharing state via context.

### Feature 3: Accessible Modal/Popover (**15 points**)
- Rendered through a **Portal**; positioned/measured with **`useLayoutEffect`**; **focus management**
  with **`useRef`** (focus trap, return focus, ESC to close, click-outside to close).

### Feature 4: Combobox / Autocomplete (**15 points**)
- Uses **`useId`** for label/description wiring and **`useImperativeHandle`** to expose imperative
  actions (e.g., focus/reset); full **keyboard navigation**.

### Feature 5: Responsive filtered list (**10 points**)
- A filterable list that stays responsive under load using **`useDeferredValue`** and/or **`useTransition`**.

### Feature 6: Custom-hooks library (**10 points**)
- A few reusable **custom hooks** (e.g., `useOnClickOutside`, `useMediaQuery`).

### Feature 7: Showcase page (**5 points**)
- A page that composes the kit to demonstrate each component and hook.

### Feature 8: Unit tests (**10 points**)
- Vitest + RTL tests for the components and hooks (including keyboard/focus behavior). Coverage ≥ thresholds.

### Feature 9: End-to-end tests (Playwright) (**15 points**)
- Playwright E2E specs in `e2e/` exercise real browser behavior of the kit (open/close modal with focus
  trap + ESC, keyboard-navigate the combobox, switch tabs/accordion). Run against the built app
  (`pnpm build && pnpm preview`) and pass headlessly.

## Technical Requirements

1. Fresh repository; dedicated branch; first commit only `README.md`.
2. Stack: **Vite + React + TS + Oxlint + Oxfmt + Husky + Vitest + RTL + Playwright**.
3. Accessibility matters: keyboard operability and correct ARIA wiring are part of the score.
4. Keep a `CHANGELOG.md`.

## Penalties

- TypeScript not used: **-95** · each `any`: **-20** · each `ts-ignore`: **-20**.
- Centering the task on `useMemo`/`useCallback`/`React.memo` instead of the listed hooks: **-20**.
- Direct DOM manipulation outside justified refs/portals: **-50 each**. · Component libraries (MUI/AntD): **-100**.
- Coverage below thresholds: statements <80% (≥70%): **-10**; <70% (≥50%): **-30**; all <50%: **-50**.
- No E2E (Playwright) tests: **-30**.
- Missing `CHANGELOG.md`: **-90**.

## FAQ

**Why no memoization?** It's covered thoroughly in the Performance task; this task is about hook mechanics and API design.
**Is `useSyncExternalStore` required?** No — it's a bonus (e.g., a toast store). Render props are for comprehension only.
**How do I test focus/keyboard?** Use `userEvent` (tab, arrow keys, escape) and assert focus/roles with RTL.
