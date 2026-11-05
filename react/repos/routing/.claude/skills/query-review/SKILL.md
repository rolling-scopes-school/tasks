---
name: query-review
description: Review server-state handling — query keys, caching, invalidation, loading/error/empty states. Use in the data-fetching / queries task.
disable-model-invocation: true
disallowed-tools: Edit Write NotebookEdit
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /query-review

## Checklist

- **Query keys** include every input that changes the result (page, filters, id); stable and consistent.
- **Caching:** `staleTime` / cache time chosen deliberately; no refetch storms on focus/mount unless intended.
- **Mutations:** related queries invalidated or updated; optimistic updates roll back on error.
- **States:** loading, error (human-readable, retryable), empty, and success all handled.
- **Dependent / paginated queries:** enabled only when inputs exist; previous data kept while paginating if
  the UX needs it.
- **No duplicate fetching** via manual `useEffect` alongside the query library.
- **Tests:** network mocked; loading and error paths covered.

Reading: the official docs of the query library the student chose.
