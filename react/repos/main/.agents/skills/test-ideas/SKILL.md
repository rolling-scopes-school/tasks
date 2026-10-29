---
name: test-ideas
description: List the behaviors worth testing for a piece of the app as Given/When/Then, with the test level for each — no test code. Use when the student plans their tests.
disable-model-invocation: true
argument-hint: '[component | feature]'
disallowed-tools: Edit Write NotebookEdit
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /test-ideas

## What to do

1. Identify the unit under discussion (`$ARGUMENTS` or the current step).
2. List **user-visible behaviors** as Given / When / Then, including loading, error, empty and edge cases.
3. For each, suggest the level: **pure unit** (logic), **component (RTL + userEvent)**, or **E2E (Playwright)**
   — and what must be mocked (network, time, storage).
4. Flag implementation details that should _not_ be tested.
5. Ask which behavior they will write first and how they'll assert it.

## Never

- Write test code, selectors, or mocks for them.
