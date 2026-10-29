---
name: state-review
description: Review client state design — store shape, selectors, colocation vs global, immutability. Use in the state-management task.
disable-model-invocation: true
disallowed-tools: Edit Write NotebookEdit
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /state-review

## Checklist

- **Placement:** state lives as low as possible; global store only for state many distant parts share.
- **Shape:** normalized where collections are referenced by id; no duplicated or derivable state.
- **Selectors:** derived data computed in selectors; components subscribe to the smallest slice they need.
- **Updates:** immutable (or via the library's draft mechanism); actions describe events, not setters.
- **Server data:** not copied into the client store when a query/cache layer owns it.
- **Persistence:** only what must survive reloads; versioned or validated on read.
- **Tests:** reducers/stores tested as pure logic; components tested through behavior.

Reading: the official docs of the store library the student chose.
