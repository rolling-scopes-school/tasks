# Task 7 — Performance (AI era)

> Part of the revised React program. See the rationale in
> [`react/.instructions/AI_ERA_PROGRAM.md`](../../../.instructions/AI_ERA_PROGRAM.md).
> This task is **profiling-focused** and starts from a **provided unoptimized app** (not a fresh scaffold).
> It is the one core task **without Playwright** — the focus is measurement and memoization.

## 🧠 What you'll build

You **optimize an intentionally unoptimized** React app that displays CO₂-emissions data. All features are
already implemented; your job is to **profile** it with the React DevTools Profiler, find the bottlenecks,
apply React optimization techniques, and **measure the improvement** — documenting before/after in a
`PERFORMANCE.md` report.

Starter code: <https://github.com/rolling-scopes-school/react-performance> (clone it; run with **pnpm**).

## 🎯 Skills / Learning objectives

- Use the **React DevTools Profiler** to find re-render and commit-duration bottlenecks.
- Apply **memoization** correctly: `useMemo`, `useCallback`, `React.memo` — and know when *not* to.
- Optimize list rendering: proper **keys** and **virtualization**.
- Measure and **document** improvement (before/after, % change).

## 📖 Required theory

- [Profiling Workflow Guide](./profiling-workflow-guide.md)
- [React DevTools Profiler](https://react.dev/learn/react-developer-tools)

## 🤖 Working with AI (required)

The AI **coaches, you decide**. Keep a mandatory **`CHANGELOG.md`** (per-session steps + justified decisions).
See the full protocol in [`AI_ERA_PROGRAM.md`](../../../.instructions/AI_ERA_PROGRAM.md).

**Decision points for this task:**
- **Where each optimization belongs:** which computations deserve `useMemo`, which handlers `useCallback`,
  which components `React.memo` — justified by *profiler evidence*, not applied blindly.
- **Virtualization approach:** a library (`react-window`/`react-virtualized`) vs a hand-rolled window; the
  tradeoffs.
- **Measurement methodology:** which interactions to profile and which metrics prove the improvement.

> The AI must not "optimize everything." Coach the student to change one thing at a time and **re-profile**,
> so each optimization is justified by a measured effect (recorded in `CHANGELOG.md` and `PERFORMANCE.md`).

## Functional Requirements (max **100 points**)

### Phase 1: Initial profiling / baseline (**15 points**)
- Profile the unoptimized app for the required interactions (sort, search, change year, toggle columns) and
  capture commit/render durations + flame charts, documented with screenshots in `PERFORMANCE.md`.

### Phase 2: Apply optimizations (**70 points**)
- `useMemo` for computed values — **12** · `useCallback` for handlers — **12** · `React.memo` to cut
  unnecessary re-renders — **12** · correct **keys** for all lists/tables — **12** · **virtualization** for
  the large list — **22**.

### Phase 3: Final profiling / comparison (**15 points**)
- Re-profile the same interactions, compare to baseline in `PERFORMANCE.md` with screenshots, and compute
  the **% improvement** per metric.

## Technical Requirements

1. Start from the provided starter repo; work on a dedicated branch (`performance`).
2. Run and profile in **development mode**; keep the app functional after optimizing.
3. **No React Compiler / automatic memoization** — the goal is learning manual optimization.
4. Keep both a `PERFORMANCE.md` (the report) and a `CHANGELOG.md` (decisions).

## Penalties

- Absence of the performance report (`PERFORMANCE.md`): **-100**.
- Using the React Compiler / automatic memoization: **-50**.
- Missing `CHANGELOG.md`: **-90**.

## FAQ

**Why no Playwright here?** This task is about profiling and memoization, not end-to-end behavior.
**Can I use a virtualization library?** Yes — `react-window`, `react-virtualized`, or your own.
**Dev or production profiling?** Dev mode, for accurate component-level timing.
**Should I memoize everything?** No — only where the profiler shows a real cost; over-memoizing can hurt.
