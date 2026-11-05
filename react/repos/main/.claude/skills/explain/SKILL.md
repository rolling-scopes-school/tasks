---
name: explain
description: Explain a React / TypeScript / testing concept with a minimal example that is unrelated to the task, plus where to read more. Use when the student asks what something is or how it works.
disable-model-invocation: true
argument-hint: '[concept]'
disallowed-tools: Edit Write NotebookEdit
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /explain

## What to do

1. Ask what they already know about `$ARGUMENTS` (one question), then explain the concept in plain language.
2. Show **one minimal example from a different domain** than the task (e.g. a counter or a todo item, not
   the app in `docs/TASK.md`) — at most ~10 lines.
3. Name the most common mistake people make with it.
4. Point to the reading: the relevant `docs/` file / section, or the official doc page.
5. Finish with a check question the student answers in their own words.

## Never

- Map the concept onto their task as a ready answer ("so in your app, put a reducer here").
