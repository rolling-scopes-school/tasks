---
name: routing-review
description: Review routing — URL as source of truth, params and search params, nested layouts, 404s, navigation. Use in tasks with client-side routing.
disable-model-invocation: true
disallowed-tools: Edit Write NotebookEdit
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /routing-review

## Checklist

- **URL is the source of truth:** page, selected item and search live in the URL; the UI always matches it;
  reload and shared links reproduce the same view.
- **Params:** validated and parsed (numbers, missing/invalid values → sensible fallback or 404).
- **Search params:** changing filters resets pagination; no state duplicated between component and URL.
- **Layouts:** shared layout renders children through an `Outlet`; detail views nested where the task asks.
- **Navigation:** links for navigation, programmatic navigation for effects of actions; back/forward work.
- **Unknown routes:** catch-all 404 with a way back; works on a direct load of the built app.
- **Per-route states:** loading and error handled where data is loaded.

Reading: `docs/` router file → _URL values_, _Outlet_, the router hooks.
