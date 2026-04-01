# React interview questions

## 🟢 Foundation

# React interview questions (revalidated)

## 🟢 Foundation

### 🟢 Core Concepts & JSX

Key questions:

- What is JSX and how does it transform to JavaScript?
- What does `React.createElement` return and why is the virtual DOM useful?
- Difference between `class` and `className` in JSX?
- How do you embed expressions and conditionals in JSX? (pitfalls with `&&`)

<details>
<summary>Example: `React.createElement` (expand)</summary>

```jsx
// JSX
const el = <h1>Hello</h1>;
// compiles to
React.createElement("h1", null, "Hello");
```

`React.createElement` returns a plain JS object (VDOM). React diffs VDOM objects and efficiently updates the real DOM.

</details>

<details>
<summary>Example: `className` (expand)</summary>

```jsx
// Correct
<div className="btn" />

// Wrong in JSX
<div class="btn" /> // `class` is a JS keyword
```

</details>

<details>
<summary>Example: conditional rendering pitfall (expand)</summary>

```jsx
// Beware: `0 && <span>{0}</span>` renders 0
{
  count && <span>{count}</span>;
}

// Safer
{
  count > 0 && <span>{count}</span>;
}
```

</details>

### 🟢 Components

Key questions:

- Functional vs class components: pros and cons, when to use each.
- How do `props` differ from `state`? When to use which?
- How does the `children` prop work and common composition patterns?
- How to use refs to manipulate DOM and when to avoid them?

<details>
<summary>Example: using refs (expand)</summary>

```jsx
import { useRef, useEffect } from "react";

function InputFocus() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return <input ref={ref} />;
}
```

Use refs for imperative actions (focus, integrating non-React libs). Prefer state for UI data.

</details>

### 🟢 Hooks

Key questions:

- What is the Rules of Hooks and why must hooks be called in the same order?
- `useState`, `useEffect`: common usage patterns and cleanup behavior.
- When to use `useRef`, `useMemo`, `useCallback` and what problems they solve?
- How and why to create custom hooks? Examples of useful custom hooks.

<details>
<summary>Example: basic useEffect (expand)</summary>

```jsx
useEffect(() => {
  const id = setInterval(() => setNow(Date.now()), 1000);
  return () => clearInterval(id);
}, []);
```

Cleanup functions prevent leaks and cancel timers/requests.

</details>

<details>
<summary>Example: simple custom hook (expand)</summary>

```jsx
import { useState } from "react";

function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  return [on, () => setOn((v) => !v)];
}
```

Custom hooks encapsulate reusable stateful logic (toggles, form helpers, fetch wrappers).

</details>

## 🟡 Intermediate

### 🟡 Lifecycle Methods & Effects

Key questions:

- Class lifecycle vs hooks: `componentDidMount`/`componentWillUnmount` vs `useEffect`.
- Dependency array pitfalls and how to avoid stale closures.
- How to perform cleanup in effects and cancel async work.

<details>
<summary>Example: cancelling async work in effect (expand)</summary>

```jsx
useEffect(() => {
  let cancelled = false;
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      if (!cancelled) setData(data);
    });
  return () => {
    cancelled = true;
  };
}, [url]);
```

Return a cleanup function to avoid calling setState on unmounted components.

</details>

### 🟡 Event Handling and Forms

Key questions:

- Controlled vs uncontrolled components — tradeoffs and examples.
- How to handle form submission, validation and preventDefault.
- When to use form libraries (React Hook Form / Formik) and benefits of `useActionState` (React 19).

<details>
<summary>Example: simple controlled form (expand)</summary>

```jsx
import { useState } from "react";

function Form() {
  const [val, setVal] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    // validate and submit
    alert(val);
  }
  return (
    <form onSubmit={onSubmit}>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
}
```

</details>

### 🟡 Lifting State, Data Flow

Key questions:

- What is prop drilling; how to lift state up and alternatives (context, state libs)?
- Techniques for passing values parent↔child and sibling communication patterns.

### 🟡 Lists, Keys, and Reconciliation

Key questions:

- Why keys are important in lists and what makes a stable key?
- How reconciliation works at a high level and common causes of unnecessary remounts.

<details>
<summary>Example: stable keys (expand)</summary>

```jsx
{
  items.map((item) => <li key={item.id}>{item.name}</li>);
}
```

Prefer a stable `id` over array index to avoid incorrect reorders/remounts.

</details>

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

<details>
<summary>Example: Portal (expand)</summary>

```jsx
import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root"),
  );
}
```

</details>

<details>
<summary>Example: Error Boundary (expand)</summary>

```jsx
import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err, info) {
    /* log */
  }
  render() {
    return this.state.hasError ? (
      <h1>Something went wrong</h1>
    ) : (
      this.props.children
    );
  }
}
```

</details>

### 🔴 Context API

Key questions:

- When to use Context vs a state management library?
- How to avoid unnecessary re-renders with context (value memoization, splitting contexts)?
- Providing defaults and testing components that consume context.

<details>
<summary>Example: memoize provider value (expand)</summary>

```jsx
const value = useMemo(() => ({ state, setState }), [state]);
<MyContext.Provider value={value}>{children}</MyContext.Provider>;
```

Memoizing the provider value prevents consumers re-rendering on every parent render.

</details>

### 🔴 Performance Optimization

Key questions:

- Techniques: memoization (`React.memo`, `useMemo`, `useCallback`), virtualization, code-splitting.
- How to use React Profiler and DevTools to find bottlenecks.
- Impact of reconciliation and keys on performance; when to use `flushSync`.

<details>
<summary>Example: memoization (expand)</summary>

```jsx
export default React.memo(function Item({ value }) {
  /* pure render */
});
const expensive = useMemo(() => compute(data), [data]);
```

</details>

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

## 🔴 Advanced concepts

### 🔴 Advanced Hooks & Patterns

Key questions:

- `useReducer` vs `useState` — when to choose `useReducer`.
<details>
<summary>Portal example (expand)</summary>

```jsx
import { createPortal } from "react-dom";
function Modal({ children }) {
  return createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root"),
  );

</details>

- Lazy initialization and function updates pattern.
- Designing robust custom hooks and composition patterns.

### 🔴 Advanced Rendering Patterns

Portals & Error boundaries:

<details>
<summary>Context tip (expand)</summary>

Memoize provider value: `<Provider value={useMemo(()=>({state, setState}),[state])}>` to avoid re-renders.

</details>

- What are Portals and common use-cases (modals, tooltips)?

### 🔴 Context API

Key questions:

<details>
<summary>Perf example (expand)</summary>

Wrap pure components: `export default React.memo(Component)`; use `useMemo` for expensive calcs.

</details>

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
```
