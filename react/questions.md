# React interview questions

## 🟢 Foundation

### 🟢 Core Concepts & JSX

Key questions:

- What is JSX and how does it transform to JavaScript?
- What does `React.createElement` return and why is the virtual DOM useful?
- Difference between `class` and `className` in JSX?
- How do you embed expressions and conditionals in JSX? (pitfalls with `&&`)

### 🟢 Components

Key questions:

- Functional vs class components: pros and cons, when to use each.
- How do `props` differ from `state`? When to use which?
- How does the `children` prop work and common composition patterns?
- How to use refs to manipulate DOM and when to avoid them?

### 🟢 Hooks

Key questions:

- What is the Rules of Hooks and why must hooks be called in the same order?
- `useState`, `useEffect`: common usage patterns and cleanup behavior.
- When to use `useRef`, `useMemo`, `useCallback` and what problems they solve?
- How and why to create custom hooks? Examples of useful custom hooks.

## 🟡 Intermediate

### 🟡 Lifecycle Methods & Effects

Key questions:

- Class lifecycle vs hooks: `componentDidMount`/`componentWillUnmount` vs `useEffect`.
- Dependency array pitfalls and how to avoid stale closures.
- How to perform cleanup in effects and cancel async work.

### 🟡 Event Handling and Forms

Key questions:

- Controlled vs uncontrolled components — tradeoffs and examples.
- How to handle form submission, validation and preventDefault.
- When to use form libraries (React Hook Form / Formik) and benefits of `useActionState` (React 19).

### 🟡 Lifting State, Data Flow

Key questions:

- What is prop drilling; how to lift state up and alternatives (context, state libs)?
- Techniques for passing values parent↔child and sibling communication patterns.

### 🟡 Lists, Keys, and Reconciliation

Key questions:

- Why keys are important in lists and what makes a stable key?
- How reconciliation works at a high level and common causes of unnecessary remounts.

### 🟡 Styling in React

Key questions:

- Pros/cons of inline styles, CSS modules, utility-first CSS, and styled-components.
- How to scope styles and avoid global leakage.

### 🟡 Testing in React

Key questions:

- How to test components with React Testing Library — queries and best practices.
- Unit vs integration tests; role of Jest and Vitest in Vite projects.
- How to mock API calls and simulate events in RTL.

## 🔴 Advanced concepts

### 🔴 Advanced Hooks & Patterns

Key questions:

- `useReducer` vs `useState` — when to choose `useReducer`.
- Lazy initialization and function updates pattern.
- Designing robust custom hooks and composition patterns.

### 🔴 Advanced Rendering Patterns

Portals & Error boundaries:

- What are Portals and common use-cases (modals, tooltips)?
- How event bubbling and focus management behave with portals?
- How to implement and test Error Boundaries; limitations (they don't catch event handlers).

### 🔴 Context API

Key questions:

- When to use Context vs a state management library?
- How to avoid unnecessary re-renders with context (value memoization, splitting contexts)?
- Providing defaults and testing components that consume context.

### 🔴 Performance Optimization

Key questions:

- Techniques: memoization (`React.memo`, `useMemo`, `useCallback`), virtualization, code-splitting.
- How to use React Profiler and DevTools to find bottlenecks.
- Impact of reconciliation and keys on performance; when to use `flushSync`.

### 🔴 Routing, SSR & Meta Frameworks

Key questions:

- React Router: declarative routes vs data-router approach; nested routes and loaders.
- Programmatic navigation and route params (`useNavigate`, `useParams`).
- SSR/SSG ideas: Next.js basics (`getStaticProps`, `getServerSideProps`) and React Server Components.

### 🔴 State Management Libraries

Key questions:

- Compare Redux Toolkit, Zustand, Jotai: tradeoffs and typical use-cases.
- How React Query / RTK Query differ from general state libraries (server-state vs client-state).
- How to structure stores and integrate with components (selectors, hooks, devtools).

### 🔴 Tooling & Setup

Key questions:

- Vite vs CRA vs custom bundler: benefits and when to choose each.
- Linting/formatting and pre-commit tooling (ESLint, Prettier, Husky, lint-staged).
- How to dockerize and add CI pipelines for React apps.

## Short practical prompts (coding tasks)

- Build a small form with validation using React Hook Form and show submission flow.
- Implement a modal with Portal and focus trap.
- Create a small list and optimize rendering for 10k items (virtualization).

---

Small coding task suggestion for interview: "Small react app: form, button, results list" (keeps original exercise).
