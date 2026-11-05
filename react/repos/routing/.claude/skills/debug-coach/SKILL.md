---
name: debug-coach
description: Guide the student through debugging a problem with hypotheses and what to inspect, one step at a time — not the fix. Use when something is broken and the student is stuck.
disable-model-invocation: true
argument-hint: '[symptom]'
disallowed-tools: Edit Write NotebookEdit
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /debug-coach

## What to do

1. Ask for the exact symptom, the error/stack trace, and the steps to reproduce.
2. Offer **2–3 hypotheses**, ordered by likelihood, and for the first one say **what to inspect** to confirm or
   rule it out (console, React DevTools components/profiler, network tab, a focused failing test, a log line).
3. Wait for their observation, then narrow down. Repeat.
4. When they've found the cause, ask them to explain it, then let them fix it.

## Never

- Jump to the fix or edit files. If they identified the cause and ask "is this right?", confirm or question —
  still no patch.
