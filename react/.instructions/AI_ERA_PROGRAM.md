# Decision Document — RS School React Course for the AI Era

> **What this is.** The source-of-truth decision document for the revised **main module** (core tasks)
> of the RS School React course, redesigned so each task is an independent app with a focused, per-task
> AI-assistant harness. It defines, per task: the domain, the concepts, the required theory, the
> recommended setup/harness, and a feature/points breakdown to seed the cross-check process.
>
> **Status of the rollout:**
> - **Done:** an 8-task program under `react/modules/tasks/` (plain filenames; pre-AI originals archived in
>   `old/`). Playwright (E2E) added from task 2 (except task 7); the final task is +50 → 600.
> - **Done:** harness repos scaffolded and verified for **Task 1** (`react/repos/functional-components/`) and
>   **Task 2** (`react/repos/routing/`, first with Playwright) — the reference implementations to copy.
> - **Next:** scaffold the remaining tasks' harness repos by copying the templates, then run a harness
>   dry-run. This document + the task files carry **all context** needed to do so.

---

## Context — why this change

The current React core (Tasks 1–5) is **one app that evolves cumulatively**: each task's branch is
created from the student's own previous branch (`class-components → unit-testing → hooks-and-routing →
app-state-management → api-queries`). Two problems for the AI era:

1. **Cumulative branches can't carry a per-task AI harness.** A focused instruction file (`AGENTS.md`)
   needs a known, clean starting point; it can't reason about an arbitrary student's prior code.
2. **Class components are obsolete.** Task 1 (class components) and Task 2 (tests-on-class-components)
   are built on a foundation we no longer teach.

The goal for the new era (per `fullstack-engineering/.instructions/VISION.md`): students **use AI to
research, design, write and check code**, but **own and can justify the result**. AI use must be
**transparent**. This document operationalizes that for React — the exact gap
`fullstack-engineering/.instructions/OPEN_QUESTIONS.md` flags as *"planned but not yet implemented."*

---

## Decisions taken

| # | Decision | Choice |
|---|----------|--------|
| 1 | Task independence | **Each task = separate app, built from scratch, own domain.** No shared/cumulative baseline. |
| 2 | Testing | **Introduced in Task 1, required in every task** (no standalone testing task). |
| 3 | Task 5 topic | **Advanced hooks + composition patterns** (memoization stays in the Performance task). |
| 4 | Next.js task | **Rebuilt from scratch** in Next.js (no migration from a prior branch). |
| 5 | Harness files | **Canonical `AGENTS.md`** per task; thin `CLAUDE.md` + `.github/copilot-instructions.md` pointers; mandatory **`CHANGELOG.md`**. |
| 6 | Log / understanding | AI proposes options → **student decides & justifies** → AI writes a concise per-step report + the decision & justification to `CHANGELOG.md`. |
| 7 | Library choices | **Stay open.** AI presents tradeoffs & downstream effects, stays **neutral**; student chooses and justifies. |
| 8 | Domains & points | **Fixed, well-bounded domain per task with a defined points breakdown** (seeds cross-check). |

**Left as-is (isolated tasks):** Forms, Performance. They are already self-contained; they only need
the harness treatment (see "AI Harness Blueprint"). Next.js changes per decision #4.

---

## Standard project setup (all core tasks except Next.js)

- **Vite** + **React** + **TypeScript** (`react-ts` template). **pnpm** is the recommended package
  manager/runner (pinned via `packageManager`; `corepack enable`).
- **Oxlint** as the linter (replaces the ESLint flat-config in the current `project-setup.md`),
  + **Oxfmt** as the formatter (one unified oxc toolchain — Oxlint does not format, so no lint/format
  conflict; replaces Prettier), + **Husky** pre-commit (lint + format) and pre-push (tests).
- **Vitest** + **React Testing Library** (+ **MSW** for network mocking).
- **Playwright (in-project)** for end-to-end tests — from **task 2 onward, except task 7** (Performance).
  E2E specs live in `e2e/`, `playwright.config.ts` at the repo root serves the built app; Vitest owns
  `src/**` and Playwright owns `e2e/**` (separate globs). Browsers install and E2E run **in CI**, not in the
  local Husky hooks.
- **Per-assistant enforcement hooks** (committed; on top of the instruction mirrors, which stay the
  cross-tool baseline):
  - **Claude Code** (`.claude/settings.json`): **plan-mode default** (`permissions.defaultMode: "plan"`)
    + a `UserPromptSubmit` hook (`scripts/coach-reminder.mjs`) that re-injects the condensed contract every
    turn (survives deletion of `CLAUDE.md`). Local overrides in the git-ignored `.claude/settings.local.json`.
  - **Codex** (`.codex/config.toml`): a `UserPromptSubmit` hook reusing the same `coach-reminder.mjs`
    (Codex adds a hook's plain stdout as developer context). Runs only when the student **trusts** the
    project; `approval_policy`/plan-mode can't be set per-repo (user-level `~/.codex/config.toml` only).
  - **Cursor** (`.cursor/hooks.json`): the contract is injected via `.cursor/rules/coaching.mdc`
    (`alwaysApply`); Cursor hooks can't inject, so a `beforeSubmitPrompt` `failClosed` hook
    (`.cursor/hooks/check-harness.mjs`) acts as a **tamper tripwire** — it blocks the prompt if instruction
    files are stripped.
  - **Copilot**: no hook/lifecycle system exists; `.github/copilot-instructions.md` is the maximum.
  - Honest limit: these set defaults / re-inject / trip on tampering, but none is a hard lock — the
    backstop stays `verify-harness` + cross-check review.
- **No component libraries** (MUI/AntD) — consistent with existing penalties.
- **No mandatory backend.** Each task uses a **key-free public API**, or a **tiny local API/mock the
  AI scaffolds**. Focus stays on React, not backend.
- TypeScript strictness enforced: **no `any`, no `ts-ignore`** (existing penalty rules, now also encoded
  as harness guardrails).

> Follow-up (next iteration): update/replace `react/modules/tasks/project-setup.md` to the Oxlint-based
> setup, or ship a per-task pre-scaffolded template repo.

---

## Grading invariants (apply to every task)

These rules hold across all tasks; individual task files inherit them and should not re-decide them.

- **Missing `CHANGELOG.md`: -90.** The log is the mandatory record of the student's decisions and ownership;
  without it the work cannot be verified as the student's own. Every task penalizes its absence at -90.
- **TypeScript not used: -95** (Next.js: -100). **Each `any`: -20. Each `ts-ignore`: -20.**
- **Component libraries (MUI/AntD): -100.**
- **Direct DOM manipulation inside components: -50 each** (documented per-task exceptions only).
- **Coverage** (tasks with tests): statements <80% (≥70%): -10; <70% (≥50%): -30; all metrics <50%: -50.
- **E2E (Playwright)** — required for tasks 2–6 and 8 (not task 1, not task 7). **No E2E tests: -30** per
  core task (the final task treats E2E as a +50 feature and penalizes its absence at -100).

New task files must reuse these numbers verbatim.

---

## Program overview

**Eight numbered tasks**, each a standalone app. Concepts accumulate conceptually. Task files live in
`react/modules/tasks/` with **plain names** (the `ai_` prefix was dropped); the pre-AI originals are
archived under `react/modules/tasks/old/`.

| Task | Title | Task file | Domain (suggested, key-free API) | New concepts | Playwright? |
|------|-------|-----------|----------------------------------|--------------|-------------|
| 1 | Functional Components, State & Testing | `functional-components.md` | **Weather dashboard** (Open-Meteo) | `useState`, `useReducer`, `useEffect`, custom hooks, controlled inputs, localStorage, Error Boundary, **Vitest+RTL** | no (unit only) |
| 2 | Routing (SPA) | `routing.md` | **Character catalog** (Rick & Morty API) | React Router **or** TanStack Router; nested routes/`Outlet`, URL params, URL-synced pagination, 404 | **yes (intro)** |
| 3 | State Management + Context | `state-management.md` | **Mini-shop / cart** (FakeStore API or local JSON) | Redux Toolkit **or** Zustand; React Context (theme); context-vs-store tradeoff | yes |
| 4 | Data Queries | `queries.md` | **GitHub explorer** (GitHub REST, unauthenticated) | RTK Query **or** TanStack Query; caching, invalidation, loading/error | yes |
| 5 | Advanced Hooks & Patterns | `advanced-hooks.md` | **Reusable component kit** (no API needed) | `useRef`, `useLayoutEffect`, `useId`, `useImperativeHandle`, `useTransition`/`useDeferredValue`, `useSyncExternalStore`; compound components, custom hooks, provider pattern | yes |
| 6 | Forms | `forms.md` | **Form playground** (uncontrolled + RHF) | React Hook Form, Zod/Yup, Portal modal, store, image→base64 | yes |
| 7 | Performance | `performance/performance.md` | **CO₂ dashboard** (provided starter) | Profiling, `useMemo`/`useCallback`/`React.memo`, keys, virtualization | **no** (profiling focus) |
| 8 | Next.js SSR/SSG | `nextjs-ssr-ssg.md` | rebuilt from scratch | App Router, RSC, server actions, next-intl, `next/image` | yes |
| — | Final (team) | `final.md` | **Swagger/OpenAPI UI** (SSR) | full-stack SSR app, auth, i18n | **yes (+50 → 600)** |

**Playwright (E2E)** is introduced in task 2 and required in tasks 2–6 and 8 (not task 1, not task 7);
the final task adds it as **+50 points on top (max 600)**.

**Library "paths"** the AI should surface (neutrally) so the student sees coherent stacks:
- Path A (canonical): **React Router → Redux Toolkit → RTK Query**
- Path B (canonical): **TanStack Router → Zustand → TanStack Query**
- Path C (valid mix): **React Router → Zustand → TanStack Query**

---

## Per-task specifications

Each spec lists **Domain**, **Concepts**, **Required theory** (reuse existing `react/modules/*`),
**Decision points** (what the AI asks the student to decide & justify), and a **Feature / points**
breakdown (max 100) that becomes the task's `cross-check.json`.

### Task 1 — Functional Components, State & Testing
- **Domain:** Weather dashboard — search a city, show current weather, keep a saved-locations list.
  Suggested API: **Open-Meteo** (no key). Any key-free API acceptable.
- **Concepts:** functional components & props; `useState` (input, units selection); **optionally**
  `useReducer` for the saved-locations collection + per-item fetch lifecycle; `useEffect` (search &
  per-item refetch), a custom `useLocalStorage` hook, loading/error UI, **Error Boundary** (the one
  remaining class component) with a test button, unit testing.
- **Saved location shape (fixed):** `{ id, name, latitude, longitude, units: 'metric'|'imperial',
  weather?: { tempC, code, fetchedAt }, status: 'idle'|'loading'|'success'|'error', error? }`.
  Rendered as a list; each item can be refetched individually. Units are chosen at search time (next to
  the Search button) and stored per location.
- **Required theory:** `modules/react-setup-env`, `modules/hooks` (useState/useReducer/useEffect/custom),
  `modules/error-boundary`, `modules/testing`.
- **Decision points:** **`useState` vs `useReducer`** for the saved-locations collection + fetch lifecycle
  (shape is fixed; tool is the student's choice, reducer recommended); when a custom hook is warranted;
  test strategy (behavior vs implementation detail).
- **Feature / points:**
  - Project setup (Vite+TS+Oxlint+Oxfmt+Husky) — **5**
  - Layout + controlled search input + units selector (metric/imperial) — **10**
  - Fetch on submit in selected units; loading indicator; human-readable error — **15**
  - Saved-locations list of `SavedLocation` objects (add/remove/per-item refetch); `useReducer` optional — **15**
  - Persist saved locations via custom `useLocalStorage` — **10**
  - Data fetching via `useEffect` (search + per-item refetch) with cleanup — **10**
  - Error Boundary with fallback UI + error-trigger button — **15**
  - Unit tests (components, hook, reducer); ≥80% statements — **20**

### Task 2 — Routing (SPA only)
- **Domain:** Character catalog — paginated list, detail view, search, About, 404.
  Suggested API: **Rick & Morty API** (no key, paginated, detail endpoints).
- **Concepts:** router setup (React Router *or* TanStack Router), route config, nested layout with
  `Outlet`, dynamic params, **URL-synced pagination**, programmatic navigation, 404.
- **Required theory:** `modules/hooks`, `modules/router`.
- **Decision points:** **which router** (present Path A/B tradeoffs, stay neutral); data vs declarative
  mode; URL schema (`?page=` vs `/:page`).
- **Feature / points:**
  - Project setup — **5**
  - Router + nested layout (`Outlet`) — **15**
  - List page, pagination synced to URL — **20**
  - Detail route with param, master-detail via `Outlet` — **20**
  - Search/filter reflected in URL — **10**
  - About page + nav link — **10**
  - 404 page with return-to-app link — **10**
  - Tests (routing, pagination, detail) — **10**

### Task 3 — State Management + Context
- **Domain:** Mini-shop — product list, cart with quantities/totals, theme switch.
  Suggested API: **FakeStore API** (no key) or a local `products.json`.
- **Concepts:** global store (Redux Toolkit *or* Zustand) with **partial updates**; React **Context**
  for theme; the **context-vs-store distinction** (Context has no selective subscription → all
  consumers re-render → good for theme/i18n, poor for hot state).
- **Required theory:** `modules/state-management`, `modules/context-api`.
- **Decision points:** **Redux Toolkit vs Zustand** (neutral tradeoffs; remind it pairs with the query
  lib later); store shape/slices; what belongs in Context vs the store.
- **Feature / points:**
  - Project setup — **5**
  - State lib set up & configured — **15**
  - Product list + add/remove/quantity in global store (partial updates) — **20**
  - Cart summary/flyout with totals; persists across navigation — **15**
  - Theme (light/dark) via Context API — **15**
  - Context-vs-store rationale documented (README/`CHANGELOG.md`) — **5**
  - Optional cart persistence (localStorage) — **5**
  - Tests (store/slice, components, context) — **20**

### Task 4 — Data Queries
- **Domain:** GitHub explorer — search repos/users, paginated results, detail view, manual refresh.
  Suggested API: **GitHub REST** (unauthenticated; rate-limited but fine for learning). PokeAPI/others OK.
- **Concepts:** RTK Query (if Redux) *or* TanStack Query (if Zustand); caching, cache reuse across
  navigation, loading/error states, manual invalidation/refetch, configurable cache TTL via env.
- **Required theory:** `modules/state-management/queries.md`.
- **Decision points:** **query lib** (must be consistent with Task 3's store choice — AI reminds of this
  coupling, stays neutral); cache/staleTime strategy; invalidation approach.
- **Feature / points:**
  - Project setup — **5**
  - Query lib set up & configured — **15**
  - Search + paginated results via query hooks — **20**
  - Detail view with cached fetch — **15**
  - Loading & error states — **15**
  - Manual cache invalidation / refetch control — **10**
  - No refetch when revisiting cached pages — **5**
  - Tests (loading, error, caching) — **15**

### Task 5 — Advanced Hooks & Patterns
- **Domain:** Reusable component kit + a showcase page composing it. No external API required.
- **Concepts:** `useRef`, `useLayoutEffect`, `useId`, `useImperativeHandle`,
  `useTransition`/`useDeferredValue`; **compound components**, **custom hooks**, **provider pattern**,
  controlled/uncontrolled. `useSyncExternalStore` and **render props** covered as
  advanced/legacy-comprehension bonuses (not core). **Explicitly excludes** `useMemo`/`useCallback`/
  `React.memo` — those belong to the Performance task.
- **Required theory:** `modules/hooks` (advanced section), `modules/portals`; new inline material on
  compound components / render props.
- **Decision points:** component API design (compound vs props); controlled vs uncontrolled; where an
  imperative handle is justified.
- **Feature / points:**
  - Project setup — **5**
  - Compound-component API (e.g., Tabs/Accordion) — **15**
  - Accessible Modal/Popover: Portal + `useLayoutEffect` positioning + focus mgmt (`useRef`) — **20**
  - Combobox/Autocomplete: `useId` + `useImperativeHandle` + keyboard nav — **20**
  - Responsive filtered list via `useDeferredValue`/`useTransition` — **10**
  - Custom-hooks library (e.g., `useOnClickOutside`, `useMediaQuery`) — **10**
  - Showcase page composing the kit — **5**
  - Tests (components + hooks) — **15**

### Isolated tasks
- **Forms** — keep current spec; add the harness (next iteration). Already a fresh standalone app.
- **Performance** — keep current spec (already ships a starter repo + `PERFORMANCE.md`); add the harness.
- **Next.js (SSR/SSG)** — **rebuild from scratch** with `create-next-app` (App Router). Drops
  "migrate from `api-queries` branch"; keeps i18n (next-intl), RSC, server actions, `next/image`,
  SSG About, server-rendered search. Uses ESLint per Next defaults (Oxlint carve-out).

---

## AI Harness Blueprint (reusable across every task)

> **Reference implementation shipped:** `react/repos/functional-components/` (Task 1) is the first
> fully-scaffolded harness and the template the remaining tasks should copy. **`CLAUDE.md` is the
> canonical instruction file**; the other tool files are **full-content mirrors** of it (not thin
> pointers — live testing showed Copilot ignored a pointer and built the whole app). Harness repos live
> under `react/repos/<slug>/`.

Each task repo ships:

```
react/repos/<slug>/
  CLAUDE.md                        # canonical instruction file (source of truth)
  AGENTS.md                        # Codex   — full mirror of CLAUDE.md
  GEMINI.md                        # Gemini  — full mirror of CLAUDE.md
  .github/copilot-instructions.md  # Copilot — full mirror of CLAUDE.md
  .cursor/rules/coaching.mdc       # Cursor  — full mirror (MDC frontmatter, alwaysApply: true)
  .claude/settings.json            # Claude Code: plan-mode default + UserPromptSubmit reminder hook
  .codex/config.toml               # Codex: UserPromptSubmit reminder hook (reuses coach-reminder.mjs)
  .cursor/hooks.json               # Cursor: beforeSubmitPrompt tamper-tripwire hook (failClosed)
  .cursor/hooks/check-harness.mjs  # Cursor tripwire: blocks the prompt if instruction files are stripped
  scripts/sync-instructions.mjs    # author-side: regenerate the 4 mirrors from CLAUDE.md
  scripts/coach-reminder.mjs       # Claude + Codex hook: re-injects the coaching contract every turn
  scripts/verify-harness.mjs       # integrity check: instruction files + AI-COACH-RULES blocks + per-tool hook configs + docs/
  .github/workflows/harness.yml    # CI: verify:harness + lint + format + test (+ Playwright for E2E tasks)
  docs/TASK.md                     # copy of the student-facing <task>.md spec (referenced by CLAUDE.md)
  docs/<topic>.md                  # curated theory reading (copied from the course module; links to official docs)
  docs/README.md                   # index: maps each decision to what to read
  CHANGELOG.md                     # decision log; output-only (title only at start; was "LOG.md")
  README.md                        # what the starter is; pnpm quickstart; tool→file map
  cross-check.json                 # mirrors the points breakdown (next iteration)
  <pre-scaffolded Vite+TS+Oxlint+Oxfmt+Husky+Vitest project (pnpm)>
  # E2E tasks (2–6, 8) also ship: playwright.config.ts, e2e/ (smoke spec)
  # + AI-COACH-RULES comment blocks in src/main.tsx, vite.config.ts, index.html (+ playwright.config.ts on E2E tasks)
```

**`CLAUDE.md` contract (per task):**
1. **Binding contract, not style.** The file opens with a hard **operating contract**: coach, do not
   author; a finished app the student didn't drive is a failed task.
2. **Decision gate (the teeth).** The AI **MUST NOT** write feature/implementation code for a step until
   the student has logged a choice + justification (or explicit *Deferred*) in `CHANGELOG.md`. No
   decision → refuse to implement, return to the decision. It **declines** "you decide / just build it"
   **and** "which is better? / what do you think?" (same move — logs it as *Declined by student*) while
   still teaching. Closing the "which is better?" gap came from a real transcript where the agent, asked
   for its opinion, handed over the full pick + justification and the student rubber-stamped it.
3. **Decision protocol — point to docs, withhold the decision.** At each decision point the AI gives
   **options + the criteria to weigh them + the specific reading in `docs/`** (the task spec, a curated
   theory file, and an index), then has the student read, choose, and justify (one line is enough). It
   **withholds the pick-for-this-task and its justification** — the self-reinforcing part: with no stated
   pick, there is nothing to rubber-stamp. It still teaches concepts and answers factual questions. A
   refused justification is recorded (*Declined — justification owed*) and work proceeds. Record it in
   `CHANGELOG.md`.
4. **Incremental & explained.** Implement in small steps; explain what/why; keep the log current.
5. **Guardrails.** No `any`/`ts-ignore`; Oxlint + Oxfmt clean; no component libraries; tests green;
   never edit/remove `AI-COACH-RULES` blocks or instruction files.
6. **Understanding checks.** Periodically ask the student to explain a concept back; note gaps in the log.

**Anti-tamper (defense in depth, honestly best-effort):** full mirrors per tool (deleting one leaves the
others), a condensed **`AI-COACH-RULES`** block embedded in must-keep source files (the floor if
instruction files are deleted; Claude Code auto-loads only `CLAUDE.md`), **per-assistant enforcement hooks**
(each tool at its own ceiling: **Claude** `.claude/settings.json` = plan-mode default + a `UserPromptSubmit`
hook that re-injects the contract every turn and emits a tampering notice if an instruction file is missing;
**Codex** `.codex/config.toml` = the same re-inject via a `UserPromptSubmit` hook, when the project is trusted;
**Cursor** `.cursor/hooks.json` = a `beforeSubmitPrompt` `failClosed` tripwire that blocks on tampering, since
Cursor hooks can't inject; **Copilot** = instruction file only, no hook system), and **`verify-harness`** wired
into Husky (pre-commit/pre-push) **and CI** so stripping the harness (instruction files, `AI-COACH-RULES`
blocks, the reminder/tripwire scripts, or the per-tool hook configs) fails a commit/push and is visible in
review. These hooks set defaults, re-inject, or trip on tampering — none is a hard lock (a student can switch
modes at runtime, or not trust the project). Nothing here is bulletproof against a determined student editing
hooks or code — the backstop stays cross-check human review / the defense gate.

**Tool-support policy (rely on the standard, don't chase every tool).** Students may use any agentic workflow
and we can't track them all. So:
- **`AGENTS.md` is the committed cross-tool baseline** — the open [agents.md](https://agents.md) convention,
  read natively by Codex, Cursor, Copilot, Gemini CLI, Windsurf, Amazon Q, Aider, Devin, Jules, Zed, VS Code,
  and **OpenCode** (V2 reads AGENTS.md only) and **Kiro** (auto-discovers it at the repo root). Each repo's
  `AGENTS.md` is a **complete copy** of the contract (generated from the canonical `CLAUDE.md`), so any
  AGENTS.md-aware tool — including ones that don't exist yet — is covered with no extra work.
- **The named files (`CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md`, `.cursor/rules/coaching.mdc`)
  and the 3 per-tool hooks are redundancy / hardening for the majors**, not separate standards.
- **New or unknown tools (pi, Windsurf, Kiro's native steering, …) rely on `AGENTS.md` + the tool-agnostic
  backstop** (cross-check review of `CHANGELOG.md` + the student defending the code + the defense gate). We do
  **not** add per-tool formats — that's a maintenance treadmill across 8 repos for diminishing returns. The
  student-facing README tells learners on any other tool to point it at `AGENTS.md`.

**`CHANGELOG.md` format (the transparency + proof-of-understanding artifact):**
- Append-only, per session. Each entry: date, step done (concise), decision made (if any) + **student's
  justification**, concepts explained, open TODOs.
- Cross-check reviewers read `CHANGELOG.md` to confirm the student drove decisions and understands the code.
- **Optional defense gate (recommend, decide later):** at cross-check, the student answers 2–3 questions
  or makes a small solo edit to demonstrate understanding.

---

## Rollout status & remaining work

**Done (earlier iterations):** the task specs (now plain-named) + the **Task 1** harness repo
(`react/repos/functional-components/`); decision-log renamed `LOG.md` → `CHANGELOG.md`; Oxfmt replaced
Prettier; pnpm recommended; the hardened harness (binding decision-gate `CLAUDE.md`, full-content mirrors
incl. Cursor, embedded `AI-COACH-RULES`, `verify-harness` + Husky/CI).

**Done (this iteration):**
- **Program restructured to 8 numbered tasks.** Pre-AI originals archived in `react/modules/tasks/old/`;
  the six `ai_*` files renamed to plain names; **Forms → task 6** and **Performance → task 7** fully
  migrated to the new pattern.
- **Playwright (E2E) added** to tasks 2–6 and 8 (not 1, not 7), each **rebalanced to keep 100 points**;
  **final task +50 → 600**.
- **Task 2 harness repo scaffolded** at `react/repos/routing/` — the first with Playwright (in-project:
  `playwright.config.ts` + `e2e/`, CI browser install). Verified: `install`, `verify:harness`, `lint`,
  `format`, `build`, `test`, and `e2e` all pass.
- **Per-assistant enforcement hooks added** to both existing repos (`functional-components`, `routing`):
  Claude `.claude/settings.json` (plan-mode default + `UserPromptSubmit` reminder hook,
  `scripts/coach-reminder.mjs`); Codex `.codex/config.toml` (`UserPromptSubmit` hook reusing the same
  reminder); Cursor `.cursor/hooks.json` + `.cursor/hooks/check-harness.mjs` (`beforeSubmitPrompt`
  tamper tripwire). `verify-harness` extended to guard all of them; `.claude/settings.local.json` git-ignored.
  Verified green incl. negative checks. **Copy this whole layer into every new harness repo** (3, 4, 5, 6, 8).
- **Point-to-docs / withhold-the-decision added** to both existing repos (prompted by a real transcript where
  the agent, asked "what do you think?", handed over the pick + justification and the student rubber-stamped).
  Each repo gains a **`docs/`** folder (`TASK.md` moved in, a curated theory file — `hooks.md` / `router.md` —
  and a `README.md` index). `CLAUDE.md` rewritten: refusal now also covers "which is better? / what do you
  think?"; decision points are **options + criteria + reading** with the pick and its justification withheld;
  one-line justifications accepted, refusals logged as *Declined* and work proceeds. `verify-harness` guards
  `docs/`. Verified green incl. negative checks. **Copy this into every new harness repo** (3, 4, 5, 6, 8).
- **Tool-support policy set: AGENTS.md is the committed cross-tool baseline** (works with OpenCode, Kiro,
  Windsurf, Amazon Q, Aider, … out of the box since `AGENTS.md` is a full copy, not a pointer); named files +
  hooks are redundancy for the majors; unknown tools rely on AGENTS.md + the backstop. Documented in the
  README ("Using another assistant?") and the contract header; `AGENTS.md` relabeled as the standard baseline.
  No new machinery. (Also fixed routing's mirror headers that were mislabeled "Task 1".)

**Next iteration:**
1. `react/.instructions/OPEN_QUESTIONS.md` — track unresolved items (defense gate, Oxlint rule set, deadlines).
2. Scaffold the remaining tasks' harness repos (3, 4, 5, 6, 8) by copying the templates.
3. Update `react/README.md` weekly schedule to the 8-task list.
4. Generate `cross-check.json` from each task's feature/points table.
5. Replace each repo's `docs/TASK.md` copy (and the copied `docs/` theory) with direct GitHub links once the
   tasks are finalized.
6. A dedicated E2E theory module under `react/modules/`.

---

## Open questions for next iterations

- Defense-gate: adopt the optional understanding check at cross-check, and if so, what form?
- Oxlint rule set: exact config + whether `eslint-plugin-react-hooks` equivalents are fully covered.
- Deadlines/weeks: confirm the 8-week schedule still maps (5 core + Forms + Performance + Next.js).
- Do Forms/Performance/Next.js also get fixed-points cross-check parity, or keep current scoring?
