# React interview questions

## 🟢 Foundation

### 🟢 Core Concepts & JSX
#### JSX syntax and how it compiles

Example:  
JSX lets you write HTML-like code in your JavaScript:
```jsx
function Hello() {
  return <h1>Hello, world!</h1>;
}
```
This JSX is compiled to `React.createElement('h1', null, 'Hello, world!')` under the hood.

[What is JSX?](https://scrimba.com/articles/react-interview-questions/#what-is-jsx)  
[Is it possible to use React without JSX?](https://scrimba.com/articles/react-interview-questions/#can-you-write-react-without-jsx)

#### *React.createElement* and virtual DOM basics
Example:  
`React.createElement('h1', { className: 'greeting' }, 'Hello!')`  
returns a plain JavaScript object (the VDOM node) describing the element, which React uses to build and update the UI efficiently.

[createElement function](https://react.dev/reference/react/createElement)
[What is the virtual DOM in React?](https://blog.logrocket.com/the-virtual-dom-react/)

#### Differences between className and class
[React Classname Vs. Class](https://www.dhiwise.com/post/react-classname-vs-class-a-beginners-perspective)

#### Embedding expressions

You can embed any JavaScript expression in JSX by wrapping it in curly braces `{}`.  
Example:
```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

#### Conditional rendering (&&, ternary)

Examples:  
Using `&&`:
```jsx
{isLoggedIn && <p>Welcome back!</p>}
```
If `isLoggedIn` is `true`, the `<p>` is rendered. If `false`, nothing is rendered.

Using ternary:
```jsx
{isLoggedIn ? <p>Welcome back!</p> : <button>Login</button>}
```
Renders one of two elements based on the condition.

**Pitfall:**  
If the left side of `&&` is a value like `0`, it will render `0` instead of nothing.  
Example:
```jsx
{count && <span>Count: {count}</span>} // If count is 0, 0 will be rendered
```
To avoid this, use explicit checks:
```jsx
{count > 0 && <span>Count: {count}</span>}
```
[Conditional Rendering](https://react.dev/learn/conditional-rendering)

### 🟢 Components
#### Functional vs class components
[Component Definition (Class-based, Functional)](https://www.twilio.com/en-us/blog/react-choose-functional-components)

#### Props and defaultProps

**Functional component:**
```jsx
function Welcome({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}

// Or using defaultProps (legacy, not recommended for function components)
Welcome.defaultProps = {
  name: "Guest"
};
```

**Class component:**
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

Welcome.defaultProps = {
  name: "Guest"
};
```
[A complete guide to React default props](https://blog.logrocket.com/complete-guide-react-default-props/)

#### *children* prop
[Understanding React PropsWithChildren: A Comprehensive Guide](https://www.dhiwise.com/post/understanding-react-propswithchildren-a-comprehensive-guide)

#### Component composition
[Components Сomposition](https://medium.com/@karnikagupta1830/mastering-component-composition-in-react-a-comprehensive-guide-eb1ef8a740a3)


### 🟢 Hooks
#### *useState*

Example:
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}
```
[useState](https://react.dev/reference/react/useState)

#### *useRef*, *useMemo*, *useCallback*
[useRef](https://react.dev/reference/react/useRef)
[useMemo](https://react.dev/reference/react/useMemo)
[useCallback](https://react.dev/reference/react/useCallback)

**Comparison:**  
- `useMemo` returns a **memoized value** (e.g., a computed result).
- `useCallback` returns a **memoized function** (e.g., a callback handler).
Both help avoid unnecessary recalculations or recreations on re-render, but `useMemo` is for values, `useCallback` is for functions.

#### *useEffect* basics

Example:
```jsx
import { useEffect } from "react";

function Logger({ value }) {
  useEffect(() => {
    console.log("Value changed:", value);
    return () => {
      console.log("Cleanup for value:", value);
    };
  }, [value]); // effect runs when 'value' changes

  return <div>Current value: {value}</div>;
}
```
[useEffect](https://react.dev/reference/react/useEffect)

#### Rule of hooks

 * Rules of Hooks:
 * 1. Only call hooks at the top level. Do not call hooks inside loops, conditions, or nested functions.
 * 2. Only call hooks from React function components or custom hooks. Do not call hooks from regular JavaScript functions.
 * 3. Custom hooks must also follow the rules of hooks.
 * 4. Hooks should always be called in the same order on every render.
 
[Rules of hooks](https://react.dev/warnings/invalid-hook-call-warning)

## 🟡 Intermediate

### 🟡 Lifecycle Methods & Effects
#### Lifecycle in class vs functional components
[React Class Component Lifecycle Methods – Explained with Examples](https://www.freecodecamp.org/news/react-component-lifecycle-methods/)
[React component lifecycle: React lifecycle methods & hooks](https://tsh.io/blog/react-component-lifecycle-methods-vs-hooks/)

#### Cleanup functions in *useEffect*
[Understanding React’s useEffect cleanup function](https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/)

#### Dependency array pitfalls

Common pitfalls:
- **Missing dependencies:** Not including all variables used inside the effect can cause stale values or bugs.
- **Unnecessary dependencies:** Including objects/functions that change on every render can cause the effect to run too often.
- **Reference equality:** Dependencies like arrays, objects, or functions are compared by reference, so new instances will retrigger the effect.
- **Ignoring linter warnings:** Disabling the exhaustive-deps rule can hide real issues.

Example:
```jsx
useEffect(() => {
  // uses 'user' and 'fetchData'
}, [user, fetchData]); // Make sure all used variables are listed
```
[Specifying reactive dependencies](https://react.dev/reference/react/useEffect#specifying-reactive-dependencies)

### 🟡 Event Handling and Forms
#### Event binding in class components [legacy]

In React, event binding connects UI events (like clicks) to handler functions.  
For class components, you often need to bind methods to `this`:
```jsx
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // ...handle event...
  }
  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```
Or use class fields to avoid manual binding:
```jsx
class Button extends React.Component {
  handleClick = () => {
    // ...handle event...
  };
  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```
In function components, you can use inline arrow functions or reference handlers directly:
```jsx
function Button() {
  const handleClick = () => {
    // ...handle event...
  };
  return <button onClick={handleClick}>Click me</button>;
}
```

#### Controlled vs uncontrolled components
[Uncontrolled vs Controlled components in React](https://www.geeksforgeeks.org/controlled-vs-uncontrolled-components-in-reactjs/)

#### Preventing default and handling submission
[<form>](https://react.dev/reference/react-dom/components/form)
[The Role of preventDefault in React Applications](https://www.dhiwise.com/post/how-to-use-react-preventdefault-to-control-user-events#the-role-of-preventdefault-in-react-applications)

#### *useActionState*

`useActionState` is a React hook for managing state updates triggered by asynchronous actions, such as form submissions.  
It helps handle state transitions and pending states in forms, especially in React Server Components and concurrent features.

Example:
```jsx
import { useActionState } from "react";

function MyForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      // handle async logic, e.g. send formData to server
      return { message: "Submitted!" };
    },
    { message: "" }
  );

  return (
    <form action={formAction}>
      <button type="submit" disabled={isPending}>Submit</button>
      <p>{state.message}</p>
    </form>
  );
}
```

[useActionState](https://react.dev/reference/react/useActionState)

### 🟡 Lifting State, Data Flow, Dependency Injection in React
#### Lifting state up, Props drilling
[What is prop drilling?](https://scrimba.com/articles/react-interview-questions/#what-is-prop-drilling)  
[How do you pass a value from sibling to sibling?](https://reactjs.org/docs/lifting-state-up.html#gatsby-focus-wrapper)

### 🟡 Lists, Keys, and Reconciliation
#### Rendering lists with *.map*, the role and rules of *key*, avoiding unstable keys
[Rendering Lists](https://react.dev/learn/rendering-lists)

#### Reconciliation algorithm (VDOM diffing)
[React reconciliation: how it works and why should we care](https://www.developerway.com/posts/reconciliation-in-react)

### 🟡 Styling in React
#### Inline styles, CSS modules
[Styling React Using CSS](https://www.w3schools.com/react/react_css.asp)

#### Styled Components
[Using styled-components](https://styled-components.com/docs/basics)

### 🟡 Testing in React
#### Testing component logic with RTL
[React Testing Library API](https://testing-library.com/docs/react-testing-library/api)

#### Queries in RTL
[Overview](https://testing-library.com/docs/queries/about)

#### Firing events
[Firing Events](https://testing-library.com/docs/dom-testing-library/api-events/)

#### Testing Frameworks
[Jest](https://jestjs.io/docs/getting-started)
[Vitest](https://vitest.dev/guide/)

## 🔴 Advanced concepts

### 🔴 Advanced Hooks & Patterns
#### *useReducer* for complex state
[useReducer](https://react.dev/reference/react/useReducer)

#### Lazy initialization in hooks
[useState lazy initialization and function updates](https://kentcdodds.com/blog/use-state-lazy-initialization-and-function-updates)

#### Writing custom hooks

Rules for writing custom hooks:
- The hook name must start with `use` (e.g., `useMyHook`).
- Only call hooks at the top level of your custom hook (not inside loops, conditions, or nested functions).
- Custom hooks can use other hooks.
- Return only what is needed (state, functions, values).
- Follow the same rules as built-in hooks: only call from React function components or other custom hooks.

[Building Your Own Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

#### Dependency memoization (*useCallback*, *useMemo*)

- `useCallback` memoizes and returns a **function**; use it to prevent unnecessary re-creation of functions (e.g., for passing stable callbacks to child components).
- `useMemo` memoizes and returns a **computed value**; use it when you want to avoid recalculating expensive values unless dependencies change.

[useCallback](https://react.dev/reference/react/useCallback)
[useMemo](https://react.dev/reference/react/useMemo)

#### *useLayoutEffect*

`useLayoutEffect` runs synchronously after all DOM mutations but before the browser paints, similar to how code inside `requestAnimationFrame` runs before the next repaint.  
This makes `useLayoutEffect` useful for reading layout or making DOM measurements and synchronously applying changes, ensuring the user doesn't see intermediate states.

[useLayoutEffect](https://react.dev/reference/react/useLayoutEffect)



#### *use*
The `use` hook lets you "await" promises directly inside components, also useful for async data fetching in React Server Components.
Unlike React Hooks, `use` can be called within loops and conditional statements like if. Like React Hooks, the function that calls `use` must be a Component or Hook.

[use](https://react.dev/reference/react/use)

### 🔴 Context API
#### Creating and consuming contexts

Example:
```jsx
import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}
```
[Context](https://react.dev/reference/react/createContext)
[Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)

#### Providing default values

The value passed to `createContext(defaultValue)` is used if no Provider is found above in the tree.

Example:
```jsx
const MyContext = createContext("default");
function ShowValue() {
  const value = useContext(MyContext); // "default" if no Provider
  return <span>{value}</span>;
}
```

#### Avoiding unnecessary re-renders

- Place Providers as high as possible in the tree to minimize re-renders.
- Memoize context values (e.g., with `useMemo`) to avoid changing the value on every render.
- Split contexts if only some consumers need to update.

Example:
```jsx
const MyContext = createContext();

function MyProvider({ children }) {
  const [state, setState] = useState(0);
  const value = useMemo(() => ({ state, setState }), [state]);
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
```

#### Usecases
[Before you use context](https://react.dev/learn/passing-data-deeply-with-context#before-you-use-context)
[Use cases for context](https://react.dev/learn/passing-data-deeply-with-context#use-cases-for-context)

### 🔴 Performance Optimization
#### State collocation
[State Colocation will make your React app faster](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster)

#### Memoization (*React.memo*, *useMemo*, *useCallback*)

- `React.memo` is a higher-order component that memoizes a **component**; it prevents unnecessary re-renders if props haven't changed.
- `useCallback` memoizes and returns a **function**; use it to prevent unnecessary re-creation of functions (e.g., for passing stable callbacks to child components).
- `useMemo` memoizes and returns a **computed value**; use it when you want to avoid recalculating expensive values unless dependencies change.

[React.memo](https://react.dev/reference/react/memo)
[useCallback](https://react.dev/reference/react/useCallback)
[useMemo](https://react.dev/reference/react/useMemo)

#### React.lazy
[React.lazy](https://react.dev/reference/react/lazy)

#### Avoiding prop drilling
[What is prop drilling?](https://scrimba.com/articles/react-interview-questions/#what-is-prop-drilling)

#### Profiling with React DevTools
[React Developer Tools](https://react.dev/learn/react-developer-tools)

#### Avoiding unnecessary re-renders in large trees
- Use `React.memo` to prevent re-rendering of pure components when their props haven't changed.
- Split state and context to minimize the number of components affected by updates.
- Move state closer to where it's used (state colocation).
- Use stable function/prop references with `useCallback`/`useMemo`.
- Avoid passing new objects/arrays/functions as props unless necessary.
- Use keys carefully in lists to prevent unnecessary remounts.

### 🟡🔴 React Router (v7+)
#### Dynamic params

Example:
```jsx
import { useParams } from "react-router-dom";
function User() {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
}
```
[Dynamic Route Params](https://reactrouter.com/en/main/route/route#dynamic-segments)

#### Redirects and navigation

Example:
```jsx
import { Navigate } from "react-router-dom";
<Route path="/old" element={<Navigate to="/new" replace />} />
```
[Redirects](https://reactrouter.com/en/main/components/navigate)

#### Programmatic navigation (useNavigate)

Example:
```jsx
import { useNavigate } from "react-router-dom";
function GoHome() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/")}>Go Home</button>;
}
```
[useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)

#### *createBrowserRouter*

`createBrowserRouter` is a data-driven API for defining routes and loaders in React Router v6+.  
It replaces the old `<Routes>`/`<Route>` JSX structure with a configuration object, enabling features like data loading, error boundaries, and nested routes outside of JSX.

Example:
```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
]);
function App() {
  return <RouterProvider router={router} />;
}
```
- **Old style:** Routes defined in JSX with `<Routes>` and `<Route>`.
- **New style:** Routes defined as objects, supporting advanced features and better data loading.

[createBrowserRouter docs](https://reactrouter.com/en/main/routers/create-browser-router)
[Routing](https://reactrouter.com/7.6.1/start/data/routing)

#### Nested routes
Routes can be nested inside parent routes through *children*.
Example:
```jsx
createBrowserRouter([
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      { index: true, Component: Home },
      { path: "settings", Component: Settings },
    ],
  },
]);
```
[Nested Routes](https://reactrouter.com/7.6.1/start/data/routing#nested-routes)


### 🔴 Error Handling
#### Error boundaries (class component pattern)

Error boundaries catch JavaScript errors in their child component tree and display a fallback UI.
```jsx
import React from "react";
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { /* log error */ }
  render() {
    if (this.state.hasError) return <h1>Something went wrong.</h1>;
    return this.props.children;
  }
}
```
[Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)

#### Async errors in useEffect

Handle async errors in `useEffect` by catching them inside the effect:
```jsx
useEffect(() => {
  async function fetchData() {
    try {
      // await fetch...
    } catch (e) {
      // handle error
    }
  }
  fetchData();
}, []);
```
[Handling errors in Effects](https://react.dev/reference/react/useEffect#fetching-data-with-effects)

#### Fallback UI handling with Suspense and boundaries

Use `<Suspense>` to show a fallback UI while loading lazy components or data:
```jsx
import { Suspense, lazy } from "react";
const LazyComponent = lazy(() => import("./LazyComponent"));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```
[React Suspense](https://react.dev/reference/react/Suspense)

### 🔴 State Management Libraries
#### Redux (store, reducers, actions)
- **Single source of truth:** The state of your whole application is stored in an object tree within a single store.
- **State is read-only:** The only way to change the state is to emit an action, an object describing what happened.
- **Changes are made with pure functions:** To specify how the state tree is transformed by actions, you write pure reducers.

[Enumerate base principles](https://redux.js.org/understanding/thinking-in-redux/three-principles)  
[What is the typical flow of data in a React + Redux app?](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)  
[Benefits of Redux?](https://fintelics.medium.com/technical-benefits-of-using-redux-f7d345e7cc9c)

#### Redux Middleware
[Redux Middleware](https://redux.js.org/understanding/history-and-design/middleware)

#### Redux Toolkit
[Redux Toolkit](https://redux-toolkit.js.org/api/configureStore)

#### Zustand / Jotai / MobX

- **Zustand:** Minimal, unopinionated state management using hooks. Create a store and access/update state via custom hooks.
  ```jsx
  import { create } from "zustand";
  const useStore = create(set => ({ count: 0, inc: () => set(s => ({ count: s.count + 1 })) }));
  function Counter() {
    const { count, inc } = useStore();
    return <button onClick={inc}>{count}</button>;
  }
  ```
- **Jotai:** Primitive and flexible atomic state. Define atoms and use them with hooks.
  ```jsx
  import { atom, useAtom } from "jotai";
  const countAtom = atom(0);
  function Counter() {
    const [count, setCount] = useAtom(countAtom);
    return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
  }
  ```
- **MobX:** Reactive state management using observables and decorators. Use `makeAutoObservable` and observer components.
  ```jsx
  import { makeAutoObservable } from "mobx";
  import { observer } from "mobx-react-lite";
  class Store {
    count = 0;
    constructor() { makeAutoObservable(this); }
    inc() { this.count++; }
  }
  const store = new Store();
  const Counter = observer(() => (
    <button onClick={() => store.inc()}>{store.count}</button>
  ));
  ```
[Zustand](https://github.com/pmndrs/zustand)
[Jotai](https://jotai.org/)
[MobX](https://mobx.js.org/README.html)

#### React Query (server-state)

React Query manages **server state** (data fetched from APIs) by handling caching, background updates, and synchronization with the server.  
You use hooks like `useQuery` and `useMutation` to fetch and update data, reducing boilerplate for async logic.

Example:
```jsx
import { useQuery } from "@tanstack/react-query";
function Todos() {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetch("/api/todos").then(res => res.json())
  });
  if (isLoading) return <span>Loading...</span>;
  return <ul>{data.map(todo => <li key={todo.id}>{todo.text}</li>)}</ul>;
}
```

**Pitfalls compared to Redux/Zustand/etc:**
- React Query is not for managing local UI state or complex client-side state logic—it's focused on server data.
- State is not stored in a single store; you can't easily coordinate unrelated UI state.
- For global, non-server state (like theme, auth, UI toggles), use Redux, Zustand, Jotai, etc.

[React Query](https://tanstack.com/query/latest/docs/framework/react/overview)

#### Redux Toolkt Query
Redux Toolkit Query (RTK Query) simplifies data fetching and caching in Redux apps.

Example usage:
```jsx
// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => 'todos',
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
```
```jsx
// store.js
import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './api';

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
```
```jsx
// Todos.js
import { useGetTodosQuery } from './api';

function Todos() {
  const { data, error, isLoading } = useGetTodosQuery();
  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error!</span>;
  return (
    <ul>
      {data.map(todo => <li key={todo.id}>{todo.text}</li>)}
    </ul>
  );
}
```
[Redux Toolkit Query Docs](https://redux-toolkit.js.org/rtk-query/overview)

## 🔴 SSR & Meta Frameworks
#### Server-side rendering (Next.js)

#### getStaticProps, getServerSideProps

#### Client/server separation in React Server Components

### 🔴 Concurrent Features & Suspense
#### Suspense for lazy-loading

#### Concurrent rendering in React 18

#### *useTransition*, *startTransition*

`useTransition` lets you mark state updates as "transitions" so React can keep the UI responsive during expensive updates (like filtering large lists).

Example:
```jsx
import { useState, useTransition } from "react";

function SearchList({ items }) {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const filtered = items.filter(item => item.includes(query));

  function handleChange(e) {
    const value = e.target.value;
    startTransition(() => {
      setQuery(value);
    });
  }

  return (
    <div>
      <input onChange={handleChange} />
      {isPending && <span>Loading...</span>}
      <ul>
        {filtered.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
```
[useTransition](https://react.dev/reference/react/useTransition)

#### *useDeferredValue*

### 🟡🔴 Build Process / CI/CD / Tooling
#### CRA vs Vite vs custom Webpack

#### Babel basics

#### Linting, formatting, pre-commit hooks

#### Dockerizing React apps, CI/CD pipelines

## React DOM

[What is the virtual DOM? How does react use the virtual DOM to render the UI?](https://adhithiravi.medium.com/react-virtual-dom-explained-in-simple-english-fc2d0b277bc5#:~:text=React%20uses%20virtual%20DOM%20to,re%2Drendering%20of%20the%20UI.)  
[Is the virtual DOM the same as the shadow DOM?](https://scrimba.com/articles/react-interview-questions/#is-the-virtual-dom-the-same-as-the-shadow-dom)  
[What is the difference between the virtual DOM and the real DOM?](https://scrimba.com/articles/react-interview-questions/#what-is-the-difference-between-the-virtual-dom-and-the-real-dom)

## Render

[When is a component rendered?](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)  
[How not to render on props change?](https://reactjs.org/docs/react-api.html#reactmemo)  
[Is it OK to use arrow functions in render methods?](https://reactjs.org/docs/faq-functions.html#is-it-ok-to-use-arrow-functions-in-render-methods)
[Components rendering system](https://medium.com/@pnk.tanwar/react-ui-rendering-under-the-hood-2ff83d875fae)

## Interaction between components

[How do you pass a value from parent to child?](https://scrimba.com/articles/react-interview-questions/#how-do-you-pass-a-value-from-parent-to-child)  
[How do you pass a value from child to parent?](https://scrimba.com/articles/react-interview-questions/#how-do-you-pass-a-value-from-child-to-parent)  

[Can a child component modify its own props?](https://scrimba.com/articles/react-interview-questions/#can-a-child-component-modify-its-own-props)  


## Lifecycle and State

[What is the difference between props and state?](https://scrimba.com/articles/react-interview-questions/#what-is-the-difference-between-props-and-state)  
[How does state in a class component differ from state in a functional component?](https://scrimba.com/articles/react-interview-questions/#how-does-state-in-a-class-component-differ-from-state-in-a-functional-component)  
[What is the component lifecycle?](https://scrimba.com/articles/react-interview-questions/#what-is-the-component-lifecycle)  
[How do you update lifecycle in function components?](https://scrimba.com/articles/react-interview-questions/#how-do-you-update-lifecycle-in-function-components)
[Controlled/uncontrolled components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
[Statefull vs stateless components](https://dev.to/sidramaqbool/understanding-stateful-and-stateless-components-in-react-22oo#:~:text=Stateful%20Components%3A%20Use%20them%20when,not%20require%20any%20state%20management)

## Ref

[What is the difference between refs and state variables?](https://scrimba.com/articles/react-interview-questions/#what-is-the-difference-between-refs-and-state-variables)  
[When is the best time to use refs?](https://scrimba.com/articles/react-interview-questions/#when-is-the-best-time-to-use-refs)  
[What is the proper way to update a ref in a function component?](https://scrimba.com/articles/react-interview-questions/#what-is-the-proper-way-to-update-a-ref-in-a-function-component)

## Context

[What is the difference between the context API and prop drilling?](https://scrimba.com/articles/react-interview-questions/#what-is-the-difference-between-the-context-api-and-prop-drilling)  
[When shouldn't you use the context API?](https://scrimba.com/articles/react-interview-questions/#when-shouldn-t-you-use-the-context-api)

## Redux

[Async Redux flow](https://redux.js.org/tutorials/fundamentals/part-6-async-logic)

## State Management by managers

[Mobx](https://mobx.js.org/the-gist-of-mobx.html)
[Reflux](https://github.com/reflux/refluxjs/blob/master/README.md)

## Routing

[React Router](https://reactrouter.com/en/main/start/concepts)
[History](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API)

## Other

[Is it a good idea to use Math.random for keys?](https://reactjs.org/docs/lists-and-keys.html#keys)  
[What are the limitations of React?](https://scrimba.com/articles/react-interview-questions/#what-are-the-limitations-of-react)  
[What is a higher order component?](https://scrimba.com/articles/react-interview-questions/#what-is-a-higher-order-component)  
[What are uncontrolled and controlled components?](https://scrimba.com/articles/react-interview-questions/#what-are-uncontrolled-and-controlled-components)  
[React optimizations](https://www.codementor.io/blog/react-optimization-5wiwjnf9hj)

## Coding task

Small react app: form, button, results list

# Next.js Interview Questions

## General Questions:

[What is Next.js, and how does it differ from traditional React applications?](https://nextjs.org/docs)

[Explain the concept of server-side rendering (SSR) in Next.js](https://nextjs.org/docs/pages/building-your-application/data-fetching)

[How does Next.js handle client-side routing?](https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating)

What are the benefits of using Next.js for building React applications?

What is the purpose of the `getInitialProps` function in Next.js? How is it different from using `getStaticProps` or `getServerSideProps`?

How does Next.js handle automatic code splitting, and why is it important?

[What is the purpose of the `Link` component in Next.js, and how does it differ from traditional anchor (`<a>`) tags?](https://nextjs.org/docs/pages/api-reference/components/link)

[How can you configure routing in a Next.js application?](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)

## Data Fetching:

Compare and contrast `getStaticProps` and `getServerSideProps` in terms of use cases and performance considerations

[When would you choose to use `getStaticPaths` in Next.js, and how does it relate to dynamic routes?](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths)

## Advanced Topics:

[Describe the purpose and use cases of API routes in Next.js](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)

[Explain the concept of middleware in Next.js and its role in the application lifecycle](https://nextjs.org/docs/pages/building-your-application/routing/middleware)

[How does Next.js handle authentication in applications?](https://nextjs.org/docs/pages/building-your-application/authentication)
