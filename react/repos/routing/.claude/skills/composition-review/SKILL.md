---
name: composition-review
description: Review component API design — compound components, controlled vs uncontrolled, props vs children, providers. Use in the advanced-hooks task ONLY after the student logged their component-API decision.
disable-model-invocation: true
disallowed-tools: Edit Write NotebookEdit
metadata:
  adapted-from: vercel-labs/agent-skills (composition-patterns), MIT
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /composition-review

## Gate

Check `CHANGELOG.md` for the student's component-API decision. **If it isn't logged, stop** and run the
decision as options + criteria + reading (`/options`) instead — this review must not make the decision.

## Checklist

- **Boolean prop proliferation:** many `isX` / `showY` flags → consider composition (children, slots,
  compound parts).
- **Compound components:** shared state via context; parts usable only inside their parent (clear error
  otherwise); flexible ordering.
- **Controlled vs uncontrolled:** `value`/`onChange` vs `defaultValue`; supporting both consistently.
- **Children over configuration** objects where it keeps the API simpler.
- **Providers:** placed at the narrowest scope; context value stable.
- **Imperative handles:** only where declarative props can't express it.
- **React 19:** `ref` as a prop (no `forwardRef` needed), `use()` where appropriate.

Reading: react.dev _Passing Data Deeply with Context_, _Sharing State Between Components_.
