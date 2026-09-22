# RS React — Task 1 starter (Functional Components, State & Testing)

A pre-configured starter for **Task 1** of the RS School React course (AI era). You build a small
**Weather Dashboard** using React function components, hooks, an Error Boundary, and unit tests —
**with an AI assistant coaching you**, not writing it for you.

- 📋 **What to build:** [`TASK.md`](./TASK.md) — full requirements, feature/points breakdown, penalties.
- 🤖 **How the AI must help you:** [`CLAUDE.md`](./CLAUDE.md) — the coaching contract (canonical).
- 📝 **Your decision log:** [`CHANGELOG.md`](./CHANGELOG.md) — **mandatory** (missing = -90 points).

## Quick start

This project uses **pnpm** (recommended). Install it once with `corepack enable` or from
<https://pnpm.io/installation>.

```sh
pnpm install     # install dependencies + set up Husky hooks
pnpm dev         # start Vite dev server
pnpm test        # run Vitest once
pnpm coverage    # run tests with coverage (statements >= 80% required)
pnpm lint        # Oxlint
pnpm format      # Oxfmt (check); pnpm format:fix to write
pnpm build       # type-check + production build
```

## What's already set up

- **Vite + React 19 + TypeScript** (`strict`, no `any`, no `ts-ignore`).
- **Oxlint** (`.oxlintrc.json` — recommended + React/TypeScript/jsx-a11y) as the linter.
- **Oxfmt** (`.oxfmtrc.json`) as the formatter — one unified oxc toolchain with Oxlint.
- **Vitest + React Testing Library + jsdom + jest-dom** with a coverage gate (a smoke test is included
  in `src/App.test.tsx` — replace it with real behavior tests).
- **Husky** hooks: pre-commit runs `verify:harness` + `lint` + `format`, pre-push runs
  `verify:harness` + `test`.
- Optional: add **MSW** yourself if you prefer it over Vitest mocks for the network layer.

## Working with your AI assistant

Whichever assistant you use follows the **same** coaching rules. Each tool has its own instruction file
carrying the **full** rules (they are mirrors of the canonical `CLAUDE.md` — not just pointers, so a tool
that ignores cross-references still gets the whole thing):

| Assistant      | Instruction file                  |
| -------------- | --------------------------------- |
| Claude         | `CLAUDE.md` (canonical)           |
| Codex          | `AGENTS.md`                       |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Gemini         | `GEMINI.md`                       |
| Cursor         | `.cursor/rules/coaching.mdc`      |

The assistant will: **not** write the whole app; ask you to **plan first**; **suggest options** with
pros/cons at each decision point and let **you choose and justify** (it will decline "just build it");
and record every decision in `CHANGELOG.md`. You own the code and must be able to explain every line.

> This repo ships a **coaching-harness integrity check** (`pnpm verify:harness`, run by the Husky hooks
> and CI): it confirms the instruction files and the in-code `AI-COACH-RULES` notes are present. Removing
> them is not the assignment — the check will fail your commit, and it's visible in review.
