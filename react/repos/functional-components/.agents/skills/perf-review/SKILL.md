---
name: perf-review
description: Review performance with evidence first — profiler data, re-render causes, memoization only where measured, lists, code-splitting. Use in the performance task (and SSR/SSG).
disable-model-invocation: true
disallowed-tools: Edit Write NotebookEdit
metadata:
  adapted-from: vercel-labs/agent-skills (react-best-practices), MIT
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /perf-review

## Gate

Ask for **evidence first**: a React DevTools Profiler recording (or Lighthouse/bundle report) and the
baseline the task requires. **No evidence → stop** and coach how to measure. Optimization without
measurement is not part of this task.

## Checklist

- **Find the cause** of a slow render (what changed, who re-rendered, why) before suggesting any fix.
- **Memoization** (`React.memo`, `useMemo`, `useCallback`) only where the profiler shows a real cost; stable
  props to memoized children; no blanket memoization.
- **Lists:** stable keys; virtualization for long lists.
- **Expensive work:** moved out of render or cached; no work repeated on every keystroke without need.
- **Bundles:** route-level code-splitting (`lazy` + `Suspense`); avoid barrel imports that defeat
  tree-shaking; heavy libraries loaded on demand.
- **Data:** no request waterfalls; parallelize independent requests.
- **Re-measure** after each change and record before/after numbers.
- Do **not** suggest enabling the React Compiler — it is out of scope (penalized) in the performance task.

Reading: react.dev _Profiler_, _memo_, _useMemo_, _lazy_.
