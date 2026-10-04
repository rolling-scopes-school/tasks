# RS React — Task 2 starter (Routing, SPA)

A pre-configured starter for **Task 2** of the RS School React course (AI era). You build a small
**Character Catalog** single-page app with client-side **routing** (paginated list, master-detail, search,
About, 404), unit tests, and **end-to-end tests** (Playwright, introduced in this task) —
**with an AI assistant coaching you**, not writing it for you.

- 📋 **What to build:** [`docs/TASK.md`](./docs/TASK.md) — full requirements, feature/points breakdown, penalties.
- 📚 **What to read:** [`docs/`](./docs/) — the task spec plus curated theory ([`docs/router.md`](./docs/router.md))
  and an index ([`docs/README.md`](./docs/README.md)) mapping each decision to its reading.
- 🤖 **How the AI must help you:** [`CLAUDE.md`](./CLAUDE.md) — the coaching contract (canonical).
- 📝 **Your decision log:** [`CHANGELOG.md`](./CHANGELOG.md) — **mandatory** (missing = -90 points).

## Quick start

This project uses **pnpm** (recommended). Install it once with `corepack enable` or from
<https://pnpm.io/installation>.

```sh
pnpm install     # install dependencies + set up Husky hooks
pnpm dev         # start Vite dev server
pnpm test        # run Vitest (unit/component) once
pnpm coverage    # run unit tests with coverage (statements >= 80% required)
pnpm e2e         # run Playwright end-to-end tests (builds + serves the app)
pnpm lint        # Oxlint
pnpm format      # Oxfmt (check); pnpm format:fix to write
pnpm build       # type-check + production build
```

> First E2E run: `pnpm exec playwright install chromium` downloads the browser once.

## What's already set up

- **Vite + React 19 + TypeScript** (`strict`, no `any`, no `ts-ignore`).
- **Oxlint** (`.oxlintrc.json` — recommended + React/TypeScript/jsx-a11y) as the linter.
- **Oxfmt** (`.oxfmtrc.json`) as the formatter — one unified oxc toolchain with Oxlint.
- **Vitest + React Testing Library + jsdom + jest-dom** for unit/component tests (a smoke test is in
  `src/App.test.tsx` — replace it with real tests).
- **Playwright** for end-to-end tests (config in `playwright.config.ts`, specs in `e2e/`; a smoke spec is
  included). Vitest owns `src/**`, Playwright owns `e2e/**` — separate globs.
- **Husky** hooks: pre-commit runs `verify:harness` + `lint` + `format`, pre-push runs
  `verify:harness` + `test`. (E2E runs in CI, not in local hooks — browser downloads are heavy.)
- **Per-assistant enforcement hooks** (on top of the instruction files below):
  - **Claude Code** (`.claude/settings.json`): starts in **plan mode** and a `UserPromptSubmit` hook
    re-states the coaching contract each turn. Personal overrides go in `.claude/settings.local.json` (git-ignored).
  - **Codex** (`.codex/config.toml`): a `UserPromptSubmit` hook re-injects the same contract every turn
    (runs once you _trust_ the project in Codex).
  - **Cursor** (`.cursor/hooks.json`): the contract is always applied via `.cursor/rules/coaching.mdc`;
    a `beforeSubmitPrompt` hook additionally **blocks** if the instruction files have been stripped.
- Optional: add **MSW** yourself if you prefer it over Vitest mocks for the network layer.

## Working with your AI assistant

Whichever assistant you use follows the **same** coaching rules. **[`AGENTS.md`](./AGENTS.md) is the
cross-tool standard baseline** — the open [agents.md](https://agents.md) convention read by Codex, OpenCode,
Kiro, Windsurf, Amazon Q, Aider, Gemini, Zed, VS Code, and more. The other files below carry the **same full
rules** (not pointers) as redundancy for assistants that prefer their own file:

| Assistant                   | Instruction file                  |
| --------------------------- | --------------------------------- |
| **Any tool / the standard** | `AGENTS.md`                       |
| Claude                      | `CLAUDE.md` (canonical source)    |
| GitHub Copilot              | `.github/copilot-instructions.md` |
| Gemini                      | `GEMINI.md`                       |
| Cursor                      | `.cursor/rules/coaching.mdc`      |

**Using another assistant?** Whatever tool you use, point it at **`AGENTS.md`** (or `CLAUDE.md`) — the same
coaching rules apply no matter which file loaded. Convenience hooks (plan-mode default, a per-turn reminder,
a tamper tripwire) ship for Claude/Codex/Cursor, but the rules **don't depend on them**.

The assistant will: **not** write the whole app; ask you to **plan first**; at each decision point lay out
the **options + the criteria to weigh them + what to read** in `docs/`, then let **you choose and justify**
(it will decline "just build it" **and** "which is better? / you decide" — it won't hand you the pick);
and record every decision in `CHANGELOG.md`. You own the code and must be able to explain every line.

> This repo ships a **coaching-harness integrity check** (`pnpm verify:harness`, run by the Husky hooks
> and CI): it confirms the instruction files and the in-code `AI-COACH-RULES` notes are present. Removing
> them is not the assignment — the check will fail your commit, and it's visible in review.
