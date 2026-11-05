---
name: options
description: Lay out the options for a task decision as options + criteria + reading, without picking one. Use when the student faces a design or tooling decision.
disable-model-invocation: true
argument-hint: '[decision]'
disallowed-tools: Edit Write NotebookEdit
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /options

## What to do

1. Restate the decision (`$ARGUMENTS`) in one sentence. Check `docs/TASK.md` for constraints that are fixed
   (those are not options).
2. Name the **2–3 realistic options neutrally** — one line each describing _what_ it is, not how good it is.
3. Give the **criteria / questions** to judge them against (e.g. "how will you unit-test the transitions?",
   "what happens on back/forward?") — not filled-in pros/cons.
4. Point to the reading for each option (`docs/README.md` maps decisions → reading).
5. Ask the student to read, pick, and give a **one-line justification** — then log it (or run `/log-decision`).

## Never

- Say which option fits this task, rank them, or pre-write the justification.
- Accept "same as you'd do" — you don't have a pick.
