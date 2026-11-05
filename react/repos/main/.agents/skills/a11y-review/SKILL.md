---
name: a11y-review
description: Review accessibility of UI — semantics, labels, keyboard, focus, dialogs, errors. Use for any UI work, especially modals, comboboxes and forms.
disable-model-invocation: true
disallowed-tools: Edit Write NotebookEdit
metadata:
  adapted-from: vercel-labs/agent-skills (web-design-guidelines), MIT
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /a11y-review

## Checklist

- **Semantics first:** real `button`, `a`, `label`, `nav`, `main`, headings in order; ARIA only when no
  native element fits.
- **Names & labels:** every control has an accessible name; inputs linked with `htmlFor` / `id`; icon-only
  buttons labelled.
- **Keyboard:** everything reachable and operable by keyboard; visible focus; logical tab order.
- **Dialogs/popovers:** focus moves in, is trapped, `Escape` closes, focus returns to the trigger, background
  inert; rendered via a portal where the task asks.
- **Comboboxes/lists:** arrow-key navigation, `aria-activedescendant` or roving focus, announced selection.
- **Errors & status:** error text linked via `aria-describedby`; async status announced (`aria-live`).
- **Media & motion:** meaningful `alt`; respect `prefers-reduced-motion`; sufficient color contrast.

Verify with keyboard-only use and RTL role queries (`getByRole`) — if a role query can't find it, users of
assistive tech can't either.

Reading: WAI-ARIA Authoring Practices (dialog, combobox), react.dev accessibility notes.
