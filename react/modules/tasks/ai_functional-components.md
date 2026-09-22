# Task 1 — Functional Components, State & Testing (AI era)

> Part of the revised React core. See the program rationale in
> [`react/.instructions/AI_ERA_PROGRAM.md`](../../.instructions/AI_ERA_PROGRAM.md).
> This task is **independent** — build it from scratch; it does not depend on any other task.

## 🧠 What you'll build

A **Weather dashboard**: search for a city, show its current weather, and keep a list of saved
locations you can revisit. The app is small on purpose — the focus is on **React fundamentals with
function components**, correct state modeling, side effects, and **unit testing**.

Suggested API: **[Open-Meteo](https://open-meteo.com/)** (no API key). You may use any key-free public
API, or a tiny local mock. **Do not build a backend** — the focus is React.

## 🎯 Skills / Learning objectives

- Build UIs from **function components** and props (no class components, except the Error Boundary).
- Model state with **`useState`** (form input, units selection) and — **optionally** — **`useReducer`** for the saved-locations collection + per-item fetch lifecycle (choose one and justify it).
- Handle side effects and data fetching with **`useEffect`**.
- Extract reusable logic into a **custom hook** (`useLocalStorage`).
- Show **loading** and **human-readable error** states.
- Implement an **Error Boundary** (the one place a class component is still used) with a test trigger.
- Write **unit tests** with **Vitest + React Testing Library**, focusing on behavior, not internals.

## 📖 Required theory

- [Vite + React + TypeScript setup](../react-setup-env/README.md)
- [Hooks](../hooks/README.md) — `useState`, `useReducer`, `useEffect`, custom hooks
- [Error Boundaries](../error-boundary/README.md)
- [Testing](../testing/README.md)

## 🤖 Working with AI (required)

You are expected to complete this task **with an AI assistant** (Claude, Codex, GitHub Copilot, …). The
assistant's job is to **coach you, not to write the app for you**. The full per-task harness
(`AGENTS.md` + `CHANGELOG.md`) ships in a later iteration; until then, follow these rules manually and keep a
`CHANGELOG.md` yourself.

- **You own the code.** You must be able to explain and defend every line.
- **Decisions are yours.** At each **decision point** below, have the AI lay out the options with
  pros/cons, then **you choose and write down why** in `CHANGELOG.md`.
- **`CHANGELOG.md` is mandatory.** Keep an append-only log: what you did each session, which decisions you
  made and your justification, and concepts the AI explained to you. Reviewers read it.

**Decision points for this task:**
- **`useState` vs `useReducer`** for the saved-locations collection + per-item fetch lifecycle. The
  stored object shape is fixed (see Feature 4), but the state tool is your choice — a reducer is
  recommended once the fetch lifecycle is involved; justify whatever you pick.
- When a piece of logic deserves a **custom hook** vs staying inline.
- Your **test strategy**: what counts as user-visible behavior vs an implementation detail.

## Functional Requirements (max **100 points**)

### Feature 1: Project setup (**5 points**)
- Vite `react-ts` project with **Oxlint**, **Oxfmt**, and **Husky** (pre-commit: lint+format).
- TypeScript throughout; no `any`, no `ts-ignore`.

### Feature 2: Layout, search input & units selector (**10 points**)
- A clear layout with a search area and a results area.
- The city search input is **controlled** via `useState`.
- A **units selector** (`metric` / `imperial`) sits next to the Search button; the chosen units apply to
  this search and are stored with the resulting saved location.

### Feature 3: Fetch, loading & error (**15 points**)
- On submit, fetch current weather for the entered city **in the selected units**.
- A **loading indicator** is shown while fetching and hidden when done.
- On failure, a **clear, human-readable error message** is shown; the console stays clean.

### Feature 4: Saved-locations list (**15 points**)
- Users can **add** the current result to a saved list, **remove** items, and **refetch** each item
  individually.
- Saved locations are displayed as a **list**; each stored item has this shape:

```ts
type Units = 'metric' | 'imperial';
type Status = 'idle' | 'loading' | 'success' | 'error';

interface SavedLocation {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  units: Units;                                                 // per-location, chosen at search time
  weather?: { tempC: number; code: number; fetchedAt: number }; // cached result
  status: Status;                                               // per-item fetch lifecycle
  error?: string;
}
```

- **`useReducer` is the recommended (optional) approach** for managing this collection together with the
  per-item fetch lifecycle (`idle → loading → success/error`); `useState` is allowed if you can justify
  it. Whichever you choose, keep the update logic **pure and testable** (Feature 8 tests it).

### Feature 5: Persistence via a custom `useLocalStorage` hook (**10 points**)
- Saved locations persist across reloads.
- Persistence is implemented in a reusable **custom hook** (`useLocalStorage`), not inline in a component.

### Feature 6: Data fetching via `useEffect` (**10 points**)
- Weather requests — the initial/search fetch and each per-item **refetch** — run through **`useEffect`**,
  driving the `loading → success/error` transitions.
- Effects **clean up** correctly (abort or ignore stale responses; no state updates after unmount; no
  duplicate requests).

### Feature 7: Error Boundary (**15 points**)
- An **Error Boundary** (class component) renders a **fallback UI** when a child throws.
- A **test button** triggers an error to demonstrate the boundary; the error is logged.

### Feature 8: Unit tests (**20 points**)
- Vitest + RTL tests for components, the custom hook, and the reducer.
- All external calls are **mocked** (Vitest mocks or MSW); no real network in tests.
- **≥80% statement** coverage; branch/function/line ≥50%.

## Technical Requirements

1. Fresh repository; first commit contains only `README.md`; work on a dedicated branch.
2. Stack: **Vite + React + TypeScript + Oxlint + Oxfmt + Husky + Vitest + RTL** (+ MSW optional).
3. Decompose the UI into components (e.g., `SearchBar`, `WeatherCard`, `SavedLocations`, `ErrorBoundary`).
4. Keep a `CHANGELOG.md` as described in "Working with AI".

## Penalties

- TypeScript not used: **-95** · each `any`: **-20** · each `ts-ignore`: **-20**.
- Class components other than the Error Boundary: **-50 each**.
- Direct DOM manipulation inside components: **-50 each**.
- Component libraries (MUI/AntD): **-100**.
- Coverage below thresholds: statements <80% (≥70%): **-10**; <70% (≥50%): **-30**; all metrics <50%: **-50**.
- Missing `CHANGELOG.md`: **-90**.

## FAQ

**Which weather API?** Open-Meteo is recommended (no key). Any key-free API works.
**Do I need a backend?** No — use a public API or a tiny local mock.
**Can the AI write the whole thing?** No. It coaches; you decide, implement with understanding, and log it.
