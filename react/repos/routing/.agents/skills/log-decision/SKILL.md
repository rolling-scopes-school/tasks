---
name: log-decision
description: Draft a CHANGELOG.md entry for a decision from the student's own words, in the required format. Use right after the student makes and justifies a decision.
disable-model-invocation: true
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /log-decision

## What to do

1. Ask the student for: what they chose and **why, in their own words** (one line is enough).
2. Draft the entry in the `CHANGELOG.md` format from §5 of the coaching contract (Did / Options considered /
   Decision & justification / Concepts explained / TODO, plus "Skills used" if any).
3. Show the draft and ask the student to confirm or correct it, then append it to `CHANGELOG.md`.

## Rules

- **Never invent or improve the justification.** If they won't give one, record the choice as
  **Declined — justification owed**.
- Only append to `CHANGELOG.md` — no other files.
