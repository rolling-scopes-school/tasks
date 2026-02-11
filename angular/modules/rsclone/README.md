# RS Clone – Angular Final Project (Team of 3, 1 month)

## Goal

Build a production-quality Angular app in a team of 3. You have 1 month for implementation. Then you have 1 week for cross-check and for preparing your jury presentation. In the following week, your team presents to the jury (up to 30 minutes).

## Freedom of choice

- You may create a focused clone of any well-known web app or game you know (e.g., Trello/Notion/Twitter(X)/Spotify/Duolingo/Airbnb/GitHub Issues) — or build an original app with similar complexity.
- You choose the data layer: your own backend, **Firebase**, or **any public API**.
- You may use **Gen-AI** to help implement a backend or tooling.
- Presentation may be in **English or Russian**.

---

## Mandatory baseline (required, 0 points)

- **Angular 19+** with Standalone Components and the **new control flow** (`@if`, `@for`, `@switch`).
- Use **Signals** in at least one important feature.
- Use the **Angular Router** with lazy loading and at least one guard or resolver.
- **TypeScript `strict`** is on. **ESLint** is configured.
- **Tests** exist: unit tests for core logic and at least one **E2E** for a main user flow.
- **Basic accessibility**: keyboard navigation, focus visible, form labels.
- **CI** runs lint, unit tests, and build on every PR.
- Prefer **OnPush** for heavy screens when it helps (do not use blindly).
- Use `inject()` where it makes code simpler.

> The jury must see each mandatory item working in the demo and in the code.

---

## Scoring model - “pick and choose”

- You **pick features** from the catalog below and collect points.
- **Maximum claimable score is 600 points.** The catalog contains **more than 900 points**, so you will not do everything.
- Points are for **real product value**, not toy examples. The jury may reduce points for trivial or duplicate items.
- Aim for a **balanced** project - cover several areas.
- In your final PR, include a **self-assessment table** with links to code and a short demo note for each claimed item.

---

## Core focus areas

We strongly care about these: **Signals**, the **new Router**, **strict TypeScript**, and **Testing**.

### 1) Signals & Reactivity – up to 150 pts

**Idea**
You get points for two things:

1. a clear **baseline** (objective, easy to verify), and
2. **quality & integration** (signals improve the real user flow).

> **Important:** Count only items used in your **main user journey** (the one you demo). **Toy examples don’t count.**

#### A) Baseline (objective) — **90 pts**

- **Single source of truth with signals** for one **major feature** (e.g., board columns & cards, cart, player state). State lives in a service/store and components read it via signals. — **20 pts**
  _Major feature = 2+ screens or widgets, 3+ user actions, persistence (remote/local), and error handling._

- **3+ `computed` values** that are **used** in templates or logic for that feature (no duplicates). — **15 pts**

- **2+ `effect`** with clean-up (unsubscribe/teardown) that trigger a **real side effect** (navigation, storage, analytics, DOM/API). _Console.log-only doesn’t count._ — **15 pts**

- Bridge RxJS ↔ Signals: convert **3+ Observables with `toSignal`** (HTTP/realtime) and **use** the resulting signals in template/computed. — **15 pts**

- **Signal inputs** (`input()`) in **3+ components** to simplify component APIs (instead of `@Input()`), used in the main flow. — **10 pts**

- **Signal queries** (`viewChild`, `contentChild`) in **1+ component** where it simplifies logic (focus/measure/portal). — **5 pts**

- Use **`untracked()`** or a **custom equality** in **1+ place** to avoid extra updates; add a short code comment explaining why. — **10 pts**

**Evidence required (in PR):** links to code **+** **time codes** in demo video where each item is visible.

#### B) Quality & Integration — **60 pts** (6 × 10 pts)

1. **No reactive loops / leaks:** effects don’t re-trigger themselves; clean-up is visible in code/tests.
2. **Useful computed:** each computed helps (filtering, totals, flags) and is used in **≥2 places** or replaces heavy template logic.
3. **Clear boundaries:** signals for app/component state; RxJS stays where it fits (HTTP/streams). No duplicate state (Signal + Subject) without a reason.
4. **Performance awareness:** use `track` with `@for` or `trackBy` with `ngFor`; avoid unnecessary recomputes (note, profiler screenshot, or counter proof).
5. **Tested behavior:** unit test covers a computed/effect or a signals-based component; E2E covers state updates of the main journey.
6. **Short rationale:** in README (5–7 lines) explain where you chose signals vs RxJS and why (clarity, perf, simplicity).

**What does not count**

- Effects that only log to console.
- Computed that duplicate a trivial template expression without reuse.
- Converting Observables to signals but **not using** them.
- Sprinkling signals in tiny, unrelated components just to hit a number.

### 2) Routing & Navigation – up to 110 pts

- Functional routes with lazy **`loadComponent`** - **25 pts**
- **Guards/resolvers** with typed data - **20 pts**
- **`withComponentInputBinding()`** to map params to inputs - **15 pts**
- Data prefetch or custom **preloading strategy** - **20 pts**
- Error route and **404 page**, safe redirects - **10 pts**
- Deep linking: keep query params, restore scroll, good loading UX - **20 pts**

### 3) Testing – up to 130 pts

- **Unit tests** for key components/services/pipes with edge cases - **50 pts**
- **E2E tests** for main flows (happy path + one error path) - **50 pts**
- Mock HTTP, test interceptors and error states - **20 pts**
- Use a component testing library/harness where it helps - **10 pts**

### 4) TypeScript & Typing – up to 40 pts

- `strict: true` without ignored errors in prod code - **20 pts**
- Good domain models with **generics** and **type guards** - **15 pts**
- `satisfies` and utility types (Pick, Partial, Omit) where helpful - **5 pts**

---

## Feature catalog – choose what fits your app

### 5) Architecture & Components – up to 90 pts

- Feature-sliced structure (core/shared/ui/features) - **30 pts**
- Reusable components with clear inputs/outputs, content projection - **20 pts**
- Useful attribute or structural directives - **20 pts**
- DI patterns: injection tokens for config, clean boundaries - **10 pts**
- Well-designed pure pipes with strong typing - **10 pts**

### 6) HTTP & Data – up to 80 pts

- Typed HttpClient layer, **interceptors** for auth/headers - **25 pts**
- Consistent **error handling** with user-friendly messages and safe retry policy - **20 pts**
- **Cancel** in-flight requests on navigation, avoid races - **20 pts**
- Local **cache** with invalidation - **15 pts**

### 7) Forms (Reactive Forms) – up to 80 pts

- Complex form with custom validators (sync + async), clear error UX - **40 pts**
- Dynamic fields with **FormArray** - **15 pts**
- Save draft and **restore** form state - **15 pts**
- Keyboard access, labels, `aria-describedby` for errors - **10 pts**

### 8) UI, Styling & Theming – up to 70 pts

- Design tokens with **CSS custom properties**, **theme switch** (dark/light) saved to storage - **25 pts**
- Responsive layout (BreakpointObserver or modern CSS) - **15 pts**
- **Angular animations** that improve UX - **10 pts**
- Good empty/loading/error states, skeletons - **20 pts**

### 9) Content & Templates – up to 40 pts

- Content projection with selectors, meaningful slots - **20 pts**
- `ngTemplateOutlet`, `ng-container`, new control flow to simplify DOM - **20 pts**

### 10) Performance – up to 60 pts

- Code-splitting and lazy loading for heavy parts - **20 pts**
- Image lazy loading and **virtual scroll** for large lists - **20 pts**
- Performance budget in README + measured Lighthouse gains - **20 pts**

### 11) Backend & Data Persistence – up to 80 pts

- Your own backend (NestJS/Express) **or** Firebase (Firestore/Auth/Storage) with docs - **40 pts**
- Auth with JWT/OAuth2, protected routes - **20 pts**
- Realtime features (WebSocket or Firestore realtime) - **20 pts**

### 12) Accessibility (a11y) – up to 40 pts

- Keyboard navigation and focus management across main screens - **20 pts**
- Proper semantics and ARIA for forms, dialogs, menus - **20 pts**

### 13) DevOps, CI & Docs – up to 60 pts

- CI pipeline: lint + unit tests + build + preview - **20 pts**
- Clear **README** with run steps, env variables, architecture diagram - **20 pts**
- Release notes/changelog and issue templates - **10 pts**
- Error monitoring (for example, Sentry) or remote logging - **10 pts**

### 14) Internationalization – up to 20 pts

- Two languages using Angular i18n or ngx-translate - **20 pts**

> Do not claim the same feature twice (no double counting).

---

## Mentoring & team rules

- Teams are formed by students. Each team must have a **Team Lead**.
- Students may invite a **Mentor** to guide the project - give advice, review code, help with processes.
- **Mentors must not write code.** They help with architecture, best practices, team organization, and tools.
- If a team includes students from different mentors, mentors should **coordinate together** and support the same team.

---

## Public APIs and Gen-AI usage

- You may use **any public API**. Respect terms of use, rate limits, and privacy. Provide fallback data or mocks for the demo.
- You may use **Gen-AI** to help implement a backend or tools.
  - You must **review and own** the code - security, secrets, licenses.
  - Do not commit secrets or API keys.
  - Note AI-assisted parts in README (one short paragraph is enough).

---

## Team process & jury presentation – up to 40 pts

- **Board + worklog + dailies** - keep a shared board (GitHub Projects/Trello), short daily updates, and a per-member worklog - **20 pts**
- **Code reviews** - small PRs, clear commit messages, review checklist - **10 pts**
- **Jury presentation** - up to **30 minutes** per team. Recommended split: **18 min live demo**, **7 min architecture & Angular choices**, **5 min Q\&A**. Prepare a **2–3 min backup video** - **10 pts**

---

## Branding requirement (footer/about)

In the app footer (for a game - in the About/Help section) add:

- links to GitHub profiles of all authors,
- the year of creation,
- the **RS School logo** and a link to the **Angular course**.
  Use accessible images (alt text) and clear links.
  Logo: [https://rs.school/\_next/static/media/rss-logo.c19ce1b4.svg](https://rs.school/_next/static/media/rss-logo.c19ce1b4.svg)
  Course: [https://rs.school/courses/angular](https://rs.school/courses/angular)

---

## Submission - cross-check process

- This task uses **group cross-check**.
- The **Team Lead** submits the team **PR link** in **RS App**. The system assigns groups for review.
- Review is done by teams - the Team Lead may split which parts each teammate checks.
- The app is scored by cross-check. The **jury** scores the presentation.
- App, video, and slides may be in **English or Russian**.
- Make sure your PR is accessible - open it in an incognito browser to verify.

---

## Repository rules

- The Team Lead creates a GitHub repository and invites all teammates.
- Development happens in branch **`develop`**. The **`main`** branch stays with README until release.
- Keep **commit history** clean and follow the RS School commit convention.
- Deploy to GitHub Pages, Netlify, Vercel, Render, or similar.
- After the deadline, open a **PR from `develop` to `main`**.
- In the PR description include:
  - the **feature list** with **your points** for each item (total **must not exceed 600**),
  - the **deploy link**. If there is no deploy - explain why and add a **video** that shows all features,
  - for teams with a backend: add a backend folder in the repo or a link to its repository.

- After the deadline, **make the repository public** if it was private.

---

## Deliverables

- Public repository after the deadline.
- Deployed app link + optional short video.
- Final PR with:
  - self-assessment table with points and links,
  - architecture diagram,
  - screenshots,
  - test coverage and Lighthouse numbers.

**Self-assessment table example**

| Area               | Item                                                                                                                                                                                                    | Points | Evidence                                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----: | ------------------------------------------------------------------------------------------------------------- |
| Signals (Baseline) | Major feature store with signals (cart); 3 computeds (total, itemsCount, hasDiscount); 2 effects (persist to storage, analytics); 3 `toSignal` for HTTP; 3 signal inputs; 1 signal query; 1 `untracked` |     90 | Code: links to store, components, effects; Demo: `01:20–03:10` (add to cart), `05:05–05:30` (persist/restore) |
| Signals (Quality)  | Met 6/6 quality checks (no loops, useful computeds, clear boundaries, perf track, tests, README rationale)                                                                                              |     60 | README section “Why Signals”, perf note + screenshot; Tests: links; Demo: `06:10–06:40` (perf)                |
| Router             | Lazy `loadComponent` + resolver for product page; 404 route                                                                                                                                             |     35 | Routes file link; Demo: `03:15–03:50`                                                                         |
| Testing            | E2E for create/edit order flow (happy + error)                                                                                                                                                          |     40 | E2E spec link; CI run link                                                                                    |
| UI                 | Theme switch with CSS tokens (saved to storage)                                                                                                                                                         |
