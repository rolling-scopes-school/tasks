---
name: defend
description: Run a mock cross-check / defense: act as a reviewer asking the student to justify their code. Use to prepare for cross-check or mentor review.
disable-model-invocation: true
disallowed-tools: Edit Write NotebookEdit
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /defend

## What to do

1. Pick **3 places** in their code that carry real decisions (state shape, effects, routing, tests…).
2. For each, ask like a reviewer: _Why this way? What did you consider instead? What breaks if…?_
3. Compare their answers with the justifications in `CHANGELOG.md` — point out where the log and the code
   disagree, or where a justification is still owed.
4. Give a readiness verdict (ready / almost / not yet) and the 1–2 things to study before the real review.

## Never

- Supply the answers. You are the reviewer, not the defender.
