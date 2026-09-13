# Decision Document — RS School React Course for the AI Era

> **What this is.** The source-of-truth decision document for the revised **main module** (core tasks)
> of the RS School React course, redesigned so each task is an independent app with a focused, per-task
> AI-assistant harness. It defines, per task: the domain, the concepts, the required theory, the
> recommended setup/harness, and a feature/points breakdown to seed the cross-check process.
>
> **Status of the rollout:**
> - **Done:** this document + one self-contained student-facing task file per core task, named with an
>   **`ai_` prefix** in `react/modules/tasks/` (old task files retained untouched).
> - **Done (latest iteration):** the **Task 1 harness repo** is scaffolded and verified at
>   `react/repos/functional-components/` — the reference implementation for every other task (see
>   "AI Harness Blueprint" and "Rollout status" below).
> - **Next:** scaffold the remaining tasks' harness repos by copying the Task 1 template, then run a
>   harness dry-run. This document and the `ai_*` task files carry **all context** needed to do so.

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

New task files must reuse these numbers verbatim.

---

## Program overview

**Core module (5 tasks, ~1 per week).** Concepts accumulate conceptually; each app is standalone.

| Task | Title | New task file | Domain (suggested, key-free API) | New concepts |
|------|-------|---------------|----------------------------------|--------------|
| 1 | Functional Components, State & Testing | `ai_functional-components.md` | **Weather dashboard** (Open-Meteo) | `useState`, `useReducer`, `useEffect`, custom hooks, controlled inputs, localStorage, Error Boundary, **Vitest+RTL** |
| 2 | Routing (SPA) | `ai_routing.md` | **Character catalog** (Rick & Morty API) | React Router **or** TanStack Router; nested routes/`Outlet`, URL params, URL-synced pagination, 404 |
| 3 | State Management + Context | `ai_state-management.md` | **Mini-shop / cart** (FakeStore API or local JSON) | Redux Toolkit **or** Zustand; React Context (theme); context-vs-store tradeoff |
| 4 | Data Queries | `ai_queries.md` | **GitHub explorer** (GitHub REST, unauthenticated) | RTK Query **or** TanStack Query; caching, invalidation, loading/error |
| 5 | Advanced Hooks & Patterns | `ai_advanced-hooks.md` | **Reusable component kit** (no API needed) | `useRef`, `useLayoutEffect`, `useId`, `useImperativeHandle`, `useTransition`/`useDeferredValue`, `useSyncExternalStore`; compound components, custom hooks, provider pattern |
| — | Next.js SSR/SSG (isolated) | `ai_nextjs-ssr-ssg.md` | rebuilt from scratch | App Router, RSC, server actions, next-intl, `next/image` |

**Isolated tasks (kept):** Forms (as-is + harness later), Performance (as-is + harness later),
**Next.js (rebuilt from scratch)**.

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
> fully-scaffolded harness and the template the remaining tasks should copy. The realized layout below
> supersedes the earlier draft (which made `AGENTS.md` canonical). **`CLAUDE.md` is now the canonical
> instruction file**; the other tool files are thin pointers to it. Harness repos live under
> `react/repos/<slug>/`.

Each task repo ships:

```
react/repos/<slug>/
  CLAUDE.md                        # canonical instruction file (source of truth)
  AGENTS.md                        # Codex:   pointer → "Follow ./CLAUDE.md" + 4-line gist
  GEMINI.md                        # Gemini:  pointer → "Follow ./CLAUDE.md" + 4-line gist
  .github/copilot-instructions.md  # Copilot: pointer → "Follow ../CLAUDE.md" + 4-line gist
  TASK.md                          # copy of the student-facing ai_<slug>.md spec (referenced by CLAUDE.md)
  CHANGELOG.md                     # decision log; seeded with format, otherwise empty (was "LOG.md")
  README.md                        # what the starter is; pnpm quickstart; tool→file map
  cross-check.json                 # mirrors the points breakdown (next iteration)
  <pre-scaffolded Vite+TS+Oxlint+Oxfmt+Husky+Vitest project (pnpm)>
```

**`CLAUDE.md` contract (per task):**
1. **Role — coach, not author.** Help the student learn React/TypeScript by doing; do **not** write the
   whole app unprompted. Prefer explaining, scaffolding small pieces, and reviewing the student's code.
2. **Decision protocol.** At each defined **decision point**, present the realistic options with honest
   pros/cons and downstream effects, then **stop and ask the student to choose and justify**. The AI
   **must not steer** the choice (especially library choices). Record the decision + the student's
   justification in `CHANGELOG.md`.
3. **Incremental & explained.** Implement in small steps; after each, explain what/why in plain terms and
   append a concise entry to `CHANGELOG.md`.
4. **Guardrails (encode existing penalties as rules).** No `any`, no `ts-ignore`; Oxlint clean; no
   component libraries; tests required and green; keep components decomposed.
5. **Task decision points** — list the specific ones for this task (from each spec above).
6. **Understanding checks.** Periodically ask the student to explain a concept back; note gaps in `CHANGELOG.md`.

**`CHANGELOG.md` format (the transparency + proof-of-understanding artifact):**
- Append-only, per session. Each entry: date, step done (concise), decision made (if any) + **student's
  justification**, concepts explained, open TODOs.
- Cross-check reviewers read `CHANGELOG.md` to confirm the student drove decisions and understands the code.
- **Optional defense gate (recommend, decide later):** at cross-check, the student answers 2–3 questions
  or makes a small solo edit to demonstrate understanding.

---

## Rollout status & remaining work

**Done (earlier iteration):** this document + `ai_functional-components.md`, `ai_routing.md`,
`ai_state-management.md`, `ai_queries.md`, `ai_advanced-hooks.md`, `ai_nextjs-ssr-ssg.md`.
Old task files retained untouched.

**Done (this iteration):**
- **Task 1 harness repo scaffolded** at `react/repos/functional-components/` — the reference
  implementation (Vite + React 19 + TS + Oxlint + Oxfmt + Husky + Vitest + RTL, pnpm). Verified:
  `pnpm install`, `lint`, `format`, `build`, `test`/`coverage` all pass on the scaffold.
- **Instruction files** for four assistants: canonical `CLAUDE.md` + pointer `AGENTS.md` / `GEMINI.md`
  / `.github/copilot-instructions.md`; `TASK.md` copy; seeded `CHANGELOG.md`.
- **Decision-log renamed `LOG.md` → `CHANGELOG.md`** across this doc + all six `ai_*` task files.
- **Formatter decision: Oxfmt replaces Prettier** program-wide; **pnpm** recommended. Wording updated
  in this doc + the five Vite-based `ai_*` task files (Next.js keeps ESLint).

**Next iteration:**
1. `react/.instructions/OPEN_QUESTIONS.md` — track unresolved items (defense gate, Oxlint rule set, deadlines).
2. Scaffold the remaining tasks' harness repos by copying the Task 1 template (`react/repos/<slug>/`).
3. Update `react/modules/tasks/project-setup.md` to the Oxlint/Oxfmt/pnpm setup (or point to the template repos).
4. Update `react/README.md` weekly schedule to the new task list.
5. Add the harness to the Forms & Performance tasks.
6. Generate `cross-check.json` from each task's feature/points table.
7. Replace each repo's `TASK.md` copy with a direct GitHub link once the tasks are finalized.

---

## Open questions for next iterations

- Defense-gate: adopt the optional understanding check at cross-check, and if so, what form?
- Oxlint rule set: exact config + whether `eslint-plugin-react-hooks` equivalents are fully covered.
- Deadlines/weeks: confirm the 8-week schedule still maps (5 core + Forms + Performance + Next.js).
- Do Forms/Performance/Next.js also get fixed-points cross-check parity, or keep current scoring?
