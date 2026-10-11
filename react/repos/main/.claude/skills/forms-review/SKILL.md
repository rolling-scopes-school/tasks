---
name: forms-review
description: Review forms — schema as single source of truth, controlled/uncontrolled correctness, validation timing, accessible errors, file inputs. Use in the forms task.
disable-model-invocation: true
disallowed-tools: Edit Write NotebookEdit
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /forms-review

## Checklist

- **One schema** validates both forms; no duplicated validation logic in components.
- **Uncontrolled form:** values read via `FormData` / refs, validated on submit; no React state per field.
- **Library form:** validation mode matches the spec (e.g. live validation, submit disabled while invalid).
- **Accessibility:** labels via `htmlFor`; errors linked with `aria-describedby`; focus moves to the first
  error on submit; required fields marked.
- **File input:** type/size validated before reading; conversion (e.g. base64) handled async with errors.
- **After success:** modal closes, form resets, store updated once.
- **Tests:** user-level (`userEvent.type`, `userEvent.upload`), invalid and valid paths.

Reading: the official docs of the form and schema libraries the student chose.
