# Task 5 — Advanced Hooks & Patterns (AI era)

> Part of the revised React core. See the program rationale in
> [`react/.instructions/AI_ERA_PROGRAM.md`](../../.instructions/AI_ERA_PROGRAM.md).
> This task is **independent** — build it from scratch. No external API is required.

## 🧠 What you'll build

A small **reusable component kit** plus a **showcase page** that composes it. The focus is **advanced
hooks** and **composition patterns** — designing clean, accessible, reusable component APIs.

> **Scope note:** memoization (`useMemo`, `useCallback`, `React.memo`) is intentionally **out of scope**
> here — it belongs to the dedicated **Performance** task. Do not center this task on memoization.

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

## 🤖 Working with AI (required)

The AI **coaches, you decide**. Keep a mandatory **`LOG.md`** (per-session steps + justified decisions).
See the full protocol in [`AI_ERA_PROGRAM.md`](../../.instructions/AI_ERA_PROGRAM.md).

**Decision points for this task:**
- **Component API design:** compound-component API vs a props-driven API.
- **Controlled vs uncontrolled** for each component.
- **Where an imperative handle** (`useImperativeHandle` + ref) is genuinely justified vs an anti-pattern.

## Functional Requirements (max **100 points**)

### Feature 1: Project setup (**5 points**)
- Vite `react-ts` + Oxlint + Prettier + Husky. TypeScript throughout; no `any`/`ts-ignore`.

### Feature 2: Compound-component API (**15 points**)
- A component with a **compound API** (e.g., `<Tabs><Tab/></Tabs>` or an Accordion) sharing state via context.

### Feature 3: Accessible Modal/Popover (**20 points**)
- Rendered through a **Portal**; positioned/measured with **`useLayoutEffect`**; **focus management**
  with **`useRef`** (focus trap, return focus, ESC to close, click-outside to close).

### Feature 4: Combobox / Autocomplete (**20 points**)
- Uses **`useId`** for label/description wiring and **`useImperativeHandle`** to expose imperative
  actions (e.g., focus/reset); full **keyboard navigation**.

### Feature 5: Responsive filtered list (**10 points**)
- A filterable list that stays responsive under load using **`useDeferredValue`** and/or **`useTransition`**.

### Feature 6: Custom-hooks library (**10 points**)
- A few reusable **custom hooks** (e.g., `useOnClickOutside`, `useMediaQuery`).

### Feature 7: Showcase page (**5 points**)
- A page that composes the kit to demonstrate each component and hook.

### Feature 8: Tests (**15 points**)
- Vitest + RTL tests for the components and hooks (including keyboard/focus behavior). Coverage ≥ thresholds.

## Technical Requirements

1. Fresh repository; dedicated branch; first commit only `README.md`.
2. Stack: **Vite + React + TS + Oxlint + Prettier + Husky + Vitest + RTL**.
3. Accessibility matters: keyboard operability and correct ARIA wiring are part of the score.
4. Keep a `LOG.md`.

## Penalties

- TypeScript not used: **-95** · each `any`: **-20** · each `ts-ignore`: **-20**.
- Centering the task on `useMemo`/`useCallback`/`React.memo` instead of the listed hooks: **-20**.
- Direct DOM manipulation outside justified refs/portals: **-50 each**. · Component libraries (MUI/AntD): **-100**.
- Coverage below thresholds: statements <80% (≥70%): **-10**; <70% (≥50%): **-30**; all <50%: **-50**.
- Missing `LOG.md`: **-90**.

## FAQ

**Why no memoization?** It's covered thoroughly in the Performance task; this task is about hook mechanics and API design.
**Is `useSyncExternalStore` required?** No — it's a bonus (e.g., a toast store). Render props are for comprehension only.
**How do I test focus/keyboard?** Use `userEvent` (tab, arrow keys, escape) and assert focus/roles with RTL.
