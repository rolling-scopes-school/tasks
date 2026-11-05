---
name: e2e-review
description: Review the student's Playwright specs — role-based locators, web-first assertions, isolation, flakiness. Use in tasks with E2E tests. Never writes specs.
disable-model-invocation: true
disallowed-tools: Edit Write NotebookEdit
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /e2e-review

## Checklist

- **Locators:** `getByRole` / `getByLabel` / `getByText` first; test ids only as a last resort; no CSS/XPath
  tied to structure.
- **Assertions:** web-first (`await expect(locator).toBeVisible()`), no manual waits or `waitForTimeout`.
- **Isolation:** each test sets up its own state; no order dependence; network mocked or stable where the
  task requires.
- **Scope:** user journeys from the spec, asserted on user-visible outcomes — not implementation details.
- **Structure:** follows the organization the student chose (page objects vs inline) consistently.
- **Runs** headless against the built app (`pnpm e2e`); traces on retry for debugging.

Reading: Playwright _Best Practices_, _Locators_, _Assertions_.

## Never

- Write or generate spec files, and never run `playwright init-agents` — the specs are the student's graded work.
