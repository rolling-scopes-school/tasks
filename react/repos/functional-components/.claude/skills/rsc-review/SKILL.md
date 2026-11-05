---
name: rsc-review
description: Review server/client boundaries and rendering strategy — use client placement, server data fetching, caching, secrets. Use in the Next.js SSR/SSG task.
disable-model-invocation: true
disallowed-tools: Edit Write NotebookEdit
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /rsc-review

## Checklist

- **`'use client'`** only where interactivity or browser APIs need it, as low in the tree as possible.
- **Data fetching** on the server where possible; no client fetch of data the server already has.
- **Rendering strategy** (static, dynamic, revalidated) matches the decision logged in `CHANGELOG.md`.
- **Caching/revalidation** explicit; no accidental full-dynamic pages.
- **Secrets** never reach client components; env vars scoped correctly.
- **Props across the boundary** are serializable.
- **Loading / error / not-found** handled with the framework's conventions; metadata per page.

Reading: the official Next.js docs (Server and Client Components, Data Fetching, Caching).
