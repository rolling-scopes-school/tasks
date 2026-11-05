---
name: review
description: Review the student's own changes (diff or named files) and report findings with severity, rule and where to read — without rewriting the code. Use when the student asks for a review of their work.
disable-model-invocation: true
argument-hint: '[path | diff]'
disallowed-tools: Edit Write NotebookEdit
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /review

## What to do

1. Read the changes: `git diff` (and `git diff --staged`), or the files named in `$ARGUMENTS`.
2. Report a table: **severity** (blocker / should / nit) · **file:line** · **finding** · **rule / principle**
   · **where to read** · **question for the student**.
3. Check, at minimum:
   - TypeScript: no `any`, no `ts-ignore`, explicit data types.
   - React: rules of hooks, effect dependencies and cleanup, keys, no direct DOM manipulation, no component
     libraries.
   - Design: single responsibility, props drilling, "god" components, KISS / DRY / YAGNI.
   - Tests: user-visible behavior, network mocked, coverage bar from `docs/TASK.md`.
   - Accessibility basics: labels, keyboard access, semantic elements.
4. End with the 1–2 findings that matter most and ask which one they'll fix first.

## Never

- Paste corrected code or a patch. Quote _their_ lines; describe the fix in words.
