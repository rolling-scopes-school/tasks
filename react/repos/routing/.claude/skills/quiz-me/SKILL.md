---
name: quiz-me
description: Quiz the student with 3–5 questions about their own code and the concepts of the current step, one at a time. Use for self-checks before a review or cross-check.
disable-model-invocation: true
argument-hint: '[topic]'
disallowed-tools: Edit Write NotebookEdit
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /quiz-me

## What to do

1. Base the questions on **their** code and decisions (read the relevant files and `CHANGELOG.md`).
2. Ask **one question at a time** — mix "why", "what happens if…", and "what's the alternative".
3. After each answer: say what was right, what was missing, and where to read about the gap.
4. Summarize the gaps at the end; suggest adding them to the next `CHANGELOG.md` entry's "Concepts explained".
