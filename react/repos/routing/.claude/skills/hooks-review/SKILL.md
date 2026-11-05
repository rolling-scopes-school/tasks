---
name: hooks-review
description: Review hooks usage — rules of hooks, effect dependencies and cleanup, derived state, custom-hook boundaries. Use in tasks built on hooks (e.g. functional components, advanced hooks).
disable-model-invocation: true
disallowed-tools: Edit Write NotebookEdit
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /hooks-review

## Checklist

- **Rules of hooks:** top level only, not in conditions/loops; custom hooks start with `use`.
- **Effects:** every reactive value in the dependency array; no "lying" deps; **cleanup** for subscriptions,
  timers and fetches (abort or ignore stale responses); no state updates after unmount; no duplicate requests.
- **You might not need an effect:** derived values computed during render, not synced via `useEffect` +
  `setState`; event logic in event handlers.
- **State:** minimal and non-duplicated; functional updates when the next state depends on the previous one;
  `useReducer` transitions kept pure.
- **Custom hooks:** extracted for reuse/testability, return a clear API, testable with `renderHook`.

Reading: `docs/` hooks file → react.dev _Rules of Hooks_, _You Might Not Need an Effect_, _Synchronizing with
Effects_.
