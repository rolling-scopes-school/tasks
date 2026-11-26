# Mentor Code Review Session Plan: Task 1 Functional Components - Weather Dashboard

Running an online Code Review session requires clear regulations. The proposed interaction flow helps objectively assess code quality, engineering independence, and conscious use of AI tools, confirming that the student remains the owner of their codebase.

---

### Step 1. Theoretical Knowledge Evaluation

A deep understanding of React fundamentals is the key condition for building scalable architecture and preventing technical debt. A student's ability to provide concise, technically accurate answers based on official docs and primary sources demonstrates mature engineering thinking and professional communication skills.

### 1.1. React History

1. What is the fundamental React philosophy of "UI as a function of state," and who stood at the origins of the library?
2. Which key innovations and hooks were introduced in React 19?

### 1.2. React Hooks

1. What are the advantages of React Hooks over class components?
2. What is the purpose and basic syntax of the `useState` hook?
3. What role does `useEffect` play, and how should cleanup be implemented correctly?
4. How does the `useContext` hook help avoid prop drilling?
5. What is `useRef` used for, and how is it different from regular state?
6. In which scenarios is `useReducer` preferable to `useState`?
7. What are Custom Hooks, and what problem do they solve?
8. Name common mistakes when working with `useEffect`.
9. What are the new `useActionState` and `useFormStatus` hooks in React 19 for?
10. What is special about the experimental `use` API for working with resources?

### 1.3. Error Boundaries

1. What is an Error Boundary, and why are class components used for them?
2. Which lifecycle methods are used to catch errors and render fallback UI?
3. How does error propagation work in the React component tree?

### 1.4. Testing React Applications

1. Which tools are used to configure testing together with Vite?
2. What is the core principle of React Testing Library philosophy?
3. What is the difference between unit and integration testing in React?
4. Explain the AAA pattern and F.I.R.S.T. principles in unit testing.
5. What role does mocking (Vitest mocks / MSW) play when testing side effects?

---

### Step 2. Mentor's Preliminary Analysis of Deploy, PR Structure, and Penalty Criteria (can be done before the meeting or in parallel with steps 3-5 while the student demonstrates the app, answers questions, and performs live-coding)

- **Deploy and PR check:** The mentor opens the deployed live version of the app and checks the Pull Request structure in the repository (commits, branches, no conflicts).
- **Documentation review:** Check `CHANGELOG.md` for recorded development timeline, architectural decision points (for example, choosing between `useState` and `useReducer`, extracting logic into custom hooks), and a brief description of AI assistant usage without exposing sensitive data.

### Final Score Calculation Rules

- Maximum final score for the session: **100**.
- The final score is assigned at the mentor's discretion based on all session results.
- Recommended contribution split for the final score:
  - **40 points** - Step 1 (theoretical questions);
  - **40 points** - Step 4 (code inspection and deep-dive project review);
  - **20 points** - Step 5 (live-coding).
- Penalties from the checklist below are applied in addition to the block scores.
- The final score cannot be below **0** or above **100**.

### Mentor Checklist for Project Review and Penalty System

- [ ] **Deploy and PR:** The app is deployed (live version), the Pull Request is properly formatted, and the working branch is up to date with the target repository branch.
- [ ] **AI Documentation (`CHANGELOG.md`):** Presence of a log of decisions made and a brief description of AI usage without publishing sensitive data. _(Penalty: -90 points if `CHANGELOG.md` is missing)_.
- [ ] **No UI libraries:** Full rejection of MUI, Ant Design, and similar libraries. Code is written from scratch. _(Penalty: -100 points if present)_.
- [ ] **Architectural component purity:** No class components except ErrorBoundary. _(Penalty: -50 points for each extra class component)_.
- [ ] **No direct DOM manipulation:** No direct DOM manipulation (`document.getElementById`, `querySelector`, etc.). _(Penalty: -50 points per case)_.
- [ ] **TypeScript presence:** The project is implemented using TypeScript. _(Penalty: -95 points for absence of TypeScript)_.
- [ ] **TypeScript strictness:** Usage of `any` types and `@ts-ignore` directives is prohibited. _(Penalty: -20 points for each `any` or `@ts-ignore`)_.
- [ ] **Test coverage metrics (Vitest + RTL):** Statements coverage >= 80%, branches/functions/lines >= 50%. _(Penalty: statements < 80%: -10; statements < 70%: -30; all metrics < 50%: -50)_.
- [ ] **Quality tooling:** Oxlint, Oxfmt, and Husky are configured for automatic pre-commit checks.
- [ ] **State and network request handling:** Correct handling of `idle | loading | success | error`, protection from race conditions, and effect cleanup in `useEffect`.

---

### Step 3. Student Application Demonstration (Screen Sharing)

- **Functional requirements:** The student runs the app in dev mode and demonstrates city search, add/remove actions, and repeated data requests.
- **Edge cases:** Demonstration of loading indicators (`loading`), error states (`error states`), and unit switching (`metric / imperial`).

---

### Step 4. Source Code Inspection in IDE, Deep-Dive Review of the "Weather Dashboard" Project (10 Deep-Dive Project Questions)

Assessment of the student's understanding of architectural decisions made in the "Weather Dashboard" project and their ability to justify those decisions.

- **Joint review:** Analysis of UI decomposition, custom hook architecture, function/reducer cleanliness, TypeScript strictness, linter configuration, and test environment setup.

Below are 10 deep-dive questions that are part of the Step 4 score.

1. **Managing the saved locations collection state:**

Evaluate your choice between `useState` and `useReducer` for managing the collection of saved locations and the request lifecycle (`Status: idle | loading | success | error`). How is this choice documented in project documentation (for example, in `CHANGELOG.md`)?

2. **Custom `useLocalStorage` hook and edge cases:**

Analyze your implementation of the `useLocalStorage` hook. How does it handle edge cases for `localStorage` (invalid JSON parse errors, access issues in incognito mode, synchronization when the initial key changes)?

3. **Side effects, network requests, and race condition protection:**

Justify the structure of the `useEffect` used for Open-Meteo API requests. Does it include protection against race conditions (stale responses / race conditions) and duplicate requests during unmount or rapid parameter changes?

4. **Error Boundary architecture and testing mechanism:**

Analyze your implementation of the class-based `ErrorBoundary` component. How is the trigger button for testing its behavior organized, and how is logging of the captured error implemented?

5. **Type strictness and data contracts:**

Compare the proposed `SavedLocation` and `Units` interfaces with your implementation. Are `any` or `@ts-ignore` used? How is typing ensured for cached data (`fetchedAt`) and request status?

6. **Testing strategy and mocking external services:**

Evaluate the completeness of unit testing. How were asynchronous Open-Meteo API calls mocked with Vitest mocks or MSW when verifying UI behavior in `loading` and `error` states?

7. **Coverage threshold verification:**

Analyze the final test coverage metrics. Was the required threshold of >=80% for statements achieved, and what are the branch and function values?

8. **Code quality automation (Oxlint, Oxfmt, Husky):**

Justify the Oxlint, Oxfmt, and Husky pipeline setup. How does the pre-commit hook protect the repository from unformatted code or linter errors?

9. **Engineering autonomy and AI coaching:**

Compare the AI assistant's initial recommendations with the final project code. Which architectural decisions did you make fully on your own, rejecting AI-generated options?

10. **UI decomposition and absence of third-party UI libraries:**

By what principle was the UI decomposed into components (`SearchBar`, `WeatherCard`, `SavedLocations`)?

---

### Step 5. Live-coding (Practical Code Modification)

Assessment of the student's understanding of their own codebase, file navigation speed, and debugging skills.

### Live-coding Tasks (complete 1 task: either 1 from the list below, or a mentor task of equivalent complexity)

1. **Add a "Clear All" button (State & Storage):**

Add a "Clear list" button to the saved locations list component that fully resets saved locations state and clears the corresponding entry in `localStorage` on click.

2. **Local input validation in SearchBar (UI Validation):**

Implement local validation in the controlled `SearchBar` input field. If the user tries to submit an empty string or whitespace-only string, show a local inline error message ("Enter a city name") under the field without sending a network request.

3. **Serialization warning in `useLocalStorage` (Custom Hook Modification):**

Modify the `useLocalStorage` custom hook by adding a warning output (`console.warn`) in the save function's catch block if the passed value cannot be serialized with `JSON.stringify`.

4. **Add a test crash button for Error Boundary (Error Handling):**

Add a "Trigger error" button inside the weather card component (`WeatherCard`) that throws `throw new Error("Live Coding Test Error")` on click.

5. **Write a unit test for unit switching (Testing):**

Write one new unit test using Vitest and React Testing Library to verify that measurement units (`metric / imperial`) change correctly when clicking the corresponding switch.
