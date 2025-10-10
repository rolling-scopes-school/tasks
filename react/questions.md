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

#### _React.createElement_ and virtual DOM basics

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
{
  isLoggedIn && <p>Welcome back!</p>;
}
```

If `isLoggedIn` is `true`, the `<p>` is rendered. If `false`, nothing is rendered.

Using ternary:

```jsx
{
  isLoggedIn ? <p>Welcome back!</p> : <button>Login</button>;
}
```

Renders one of two elements based on the condition.

**Pitfall:**  
If the left side of `&&` is a value like `0`, it will render `0` instead of nothing.  
Example:

```jsx
{
  count && <span>Count: {count}</span>;
} // If count is 0, 0 will be rendered
```

To avoid this, use explicit checks:

```jsx
{
  count > 0 && <span>Count: {count}</span>;
}
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
  name: "Guest",
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
  name: "Guest",
};
```

[A complete guide to React default props](https://blog.logrocket.com/complete-guide-react-default-props/)

#### _children_ prop

[Understanding React PropsWithChildren: A Comprehensive Guide](https://www.dhiwise.com/post/understanding-react-propswithchildren-a-comprehensive-guide)

#### Component composition

[Components Сomposition](https://medium.com/@karnikagupta1830/mastering-component-composition-in-react-a-comprehensive-guide-eb1ef8a740a3)

#### Component state

[State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
[What is the difference between props and state?](https://scrimba.com/articles/react-interview-questions/#what-is-the-difference-between-props-and-state)

#### Manipulating DOM directly using Refs

[Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs)
[What is the difference between refs and state variables?](https://scrimba.com/articles/react-interview-questions/#what-is-the-difference-between-refs-and-state-variables)

### 🟢 Hooks

#### _useState_

Example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}
```

[useState](https://react.dev/reference/react/useState)

#### _useRef_, _useMemo_, _useCallback_

[useRef](https://react.dev/reference/react/useRef)
[useMemo](https://react.dev/reference/react/useMemo)
[useCallback](https://react.dev/reference/react/useCallback)

**Comparison:**

- `useMemo` returns a **memoized value** (e.g., a computed result).
- `useCallback` returns a **memoized function** (e.g., a callback handler).
  Both help avoid unnecessary recalculations or recreations on re-render, but `useMemo` is for values, `useCallback` is for functions.

#### _useEffect_ basics

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

- Rules of Hooks:
- 1.  Only call hooks at the top level. Do not call hooks inside loops, conditions, or nested functions.
- 2.  Only call hooks from React function components or custom hooks. Do not call hooks from regular JavaScript functions.
- 3.  Custom hooks must also follow the rules of hooks.
- 4.  Hooks should always be called in the same order on every render.

[Rules of hooks](https://react.dev/warnings/invalid-hook-call-warning)

## 🟡 Intermediate

### 🟡 Lifecycle Methods & Effects

#### Lifecycle in class vs functional components

[React Class Component Lifecycle Methods – Explained with Examples](https://www.freecodecamp.org/news/react-component-lifecycle-methods/)
[React component lifecycle: React lifecycle methods & hooks](https://tsh.io/blog/react-component-lifecycle-methods-vs-hooks/)
[When is a class component rendered?](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

#### Cleanup functions in _useEffect_

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

#### _useActionState_

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
    { message: "" },
  );

  return (
    <form action={formAction}>
      <button type="submit" disabled={isPending}>
        Submit
      </button>
      <p>{state.message}</p>
    </form>
  );
}
```

[useActionState](https://react.dev/reference/react/useActionState)

### 🟡 Lifting State, Data Flow

#### Lifting state up, Props drilling

[What is prop drilling?](https://scrimba.com/articles/react-interview-questions/#what-is-prop-drilling)  
[How do you pass a value from sibling to sibling?](https://reactjs.org/docs/lifting-state-up.html#gatsby-focus-wrapper)

#### Passing values

[How do you pass a value from parent to child?](https://scrimba.com/articles/react-interview-questions/#how-do-you-pass-a-value-from-parent-to-child)
[How do you pass a value from child to parent?](https://scrimba.com/articles/react-interview-questions/#how-do-you-pass-a-value-from-child-to-parent)
[Can a child component modify its own props?](https://scrimba.com/articles/react-interview-questions/#can-a-child-component-modify-its-own-props)

### 🟡 Lists, Keys, and Reconciliation

#### Rendering lists with _.map_, the role and rules of _key_, avoiding unstable keys

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

#### _useReducer_ for complex state

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

#### Dependency memoization (_useCallback_, _useMemo_)

- `useCallback` memoizes and returns a **function**; use it to prevent unnecessary re-creation of functions (e.g., for passing stable callbacks to child components).
- `useMemo` memoizes and returns a **computed value**; use it when you want to avoid recalculating expensive values unless dependencies change.

[useCallback](https://react.dev/reference/react/useCallback)
[useMemo](https://react.dev/reference/react/useMemo)

#### _useLayoutEffect_

`useLayoutEffect` runs synchronously after all DOM mutations but before the browser paints, similar to how code inside `requestAnimationFrame` runs before the next repaint.  
This makes `useLayoutEffect` useful for reading layout or making DOM measurements and synchronously applying changes, ensuring the user doesn't see intermediate states.

[useLayoutEffect](https://react.dev/reference/react/useLayoutEffect)

#### _use_

The `use` hook lets you "await" promises directly inside components, also useful for async data fetching in React Server Components.
Unlike React Hooks, `use` can be called within loops and conditional statements like if. Like React Hooks, the function that calls `use` must be a Component or Hook.

[use](https://react.dev/reference/react/use)

### 🔴 Advanced Rendering Patterns

#### React Portal

A React Portal provides a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. Common use cases include modals, tooltips, dropdowns, and toast notifications. Even though the portal's content is rendered elsewhere in the DOM tree, it still behaves like a normal React child, meaning it can access context from the parent tree and events will bubble up to ancestors in the React tree, not the DOM tree.

[createPortal](https://react.dev/reference/react-dom/createPortal)

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

#### Memoization (_React.memo_, _useMemo_, _useCallback_)

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

#### Deoptimization using _flushSync_

flushSync is a method provided by React DOM (from react-dom) that allows you to force React to flush state updates synchronously, outside of React's normal batching behavior.

**Batching in React:**
Normally, React batches multiple state updates together for performance reasons. This means that if you call several setState functions in quick succession (such as inside event handlers), React will group them and perform a single re-render at the end. This improves efficiency but can sometimes delay updates in ways that aren't desirable for certain UI scenarios.

**What flushSync does:**
When you wrap a state update inside flushSync, React will immediately process that update and re-render the component before moving on. This is useful when you need to ensure the DOM is updated right away, such as when measuring layout or synchronizing with non-React code.

**When to use:**
When you need immediate DOM updates (e.g., for measurements or animations).
Use sparingly, as it can hurt performance if overused.

Example:

```jsx
import { flushSync } from "react-dom";

function handleClick() {
  flushSync(() => {
    setCount(count + 1); // This update is flushed immediately
  });
  // DOM is updated here
}
```

[flushSync](https://react.dev/reference/react-dom/flushSync)

### 🟡🔴 React Router (v7+)

#### Declarative mode. Routing

[Declarative routing](https://reactrouter.com/start/declarative/routing)
Example:

```jsx
<Routes>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />

  <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route>

  <Route path="concerts">
    <Route index element={<ConcertsHome />} />
    <Route path=":city" element={<City />} />
    <Route path="trending" element={<Trending />} />
  </Route>
</Routes>
```

#### Data mode. Routing using _createBrowserRouter_

`createBrowserRouter` is a data-driven API for defining routes and loaders in React Router v6+.  
It replaces the old `<Routes>`/`<Route>` JSX structure with a configuration object, enabling features like data loading, error boundaries, and nested routes outside of JSX.

Example:

```jsx
import { createBrowserRouter, RouterProvider } from "react-router";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
]);
function App() {
  return <RouterProvider router={router} />;
}
```

- **Old (declarative mode) style:** Routes defined in JSX with `<Routes>` and `<Route>`.
- **New (data mode) style:** Routes defined as objects, supporting advanced features and better data loading.

[createBrowserRouter docs](https://reactrouter.com/en/main/routers/create-browser-router)
[Routing](https://reactrouter.com/7.6.1/start/data/routing)

#### Nested routes

Routes can be nested inside parent routes through _children_.
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

#### Dynamic params

Example:

```jsx
import { useParams } from "react-router";
function User() {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
}
```

[Dynamic Route Params](https://reactrouter.com/en/main/route/route#dynamic-segments)

#### Redirects and navigation

Example:

```jsx
import { Navigate } from "react-router";
<Route path="/old" element={<Navigate to="/new" replace />} />;
```

[Redirects](https://reactrouter.com/en/main/components/navigate)

#### Programmatic navigation (useNavigate)

Example:

```jsx
import { useNavigate } from "react-router";
function GoHome() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/")}>Go Home</button>;
}
```

[useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)

#### Outlet

Example:

```jsx
import { Outlet } from "react-router";
function SomeParent() {
  return (
    <div>
      <h1>Parent Content</h1>
      <Outlet />
    </div>
  );
}
```

[Outlet](https://reactrouter.com/api/components/Outlet)

### 🔴 Error Handling

#### Error boundaries (class component pattern)

Error boundaries catch JavaScript errors in their child component tree and display a fallback UI.

```jsx
import React from "react";
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    /* log error */
  }
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
  const useStore = create((set) => ({
    count: 0,
    inc: () => set((s) => ({ count: s.count + 1 })),
  }));
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
    return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
  }
  ```
- **MobX:** Reactive state management using observables and decorators. Use `makeAutoObservable` and observer components.
  ```jsx
  import { makeAutoObservable } from "mobx";
  import { observer } from "mobx-react-lite";
  class Store {
    count = 0;
    constructor() {
      makeAutoObservable(this);
    }
    inc() {
      this.count++;
    }
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
    queryFn: () => fetch("/api/todos").then((res) => res.json()),
  });
  if (isLoading) return <span>Loading...</span>;
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
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
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos",
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
```

```jsx
// store.js
import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./api";

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
import { useGetTodosQuery } from "./api";

function Todos() {
  const { data, error, isLoading } = useGetTodosQuery();
  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error!</span>;
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

[Redux Toolkit Query Docs](https://redux-toolkit.js.org/rtk-query/overview)

### 🔴 SSR & Meta Frameworks

#### Server-side rendering and Server-side generation

- **Server-side rendering (SSR):** HTML is generated on each request at runtime, enabling dynamic content and SEO.
- **Static site generation (SSG):** HTML is generated at build time, resulting in fast, cacheable pages.

[SSR vs SSG](https://strapi.io/blog/ssr-vs-ssg-in-nextjs-differences-advantages-and-use-cases)

#### Next.JS. Pages router

The traditional file-based routing system in Next.js (`pages/` directory). Each file becomes a route.
Example:

```sh
pages/
  index.js        // route: /
  about.js        // route: /about
  blog/[id].js    // dynamic route: /blog/123
```

[Pages Router](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)

#### Next.JS. _getStaticProps_, _getStaticPaths_, _getServerSideProps_

- `getStaticProps`: Fetch data at build time for static generation.
- `getStaticPaths`: Specify dynamic routes to pre-render at build time.
- `getServerSideProps`: Fetch data on each request for SSR.

```js
// pages/posts/[id].js
export async function getStaticProps({ params }) {
  // fetch post data
  return { props: { post } };
}
export async function getStaticPaths() {
  // fetch all post ids
  return { paths: [{ params: { id: "1" } }], fallback: false };
}
```

[getStaticProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props)  
[getStaticPaths](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths)  
[getServerSideProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props)

#### Next.JS. App router

The new routing system in Next.js (`app/` directory) supporting layouts, nested routes, and React Server Components.
Example:

```sh
app/
  layout.js       // root layout
  page.js         // route: /
  about/page.js   // route: /about
```

[How to create layouts and pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages)
[Linking and Navigating](https://nextjs.org/docs/app/getting-started/linking-and-navigating)

#### Next.JS. Route Handlers and Middleware in App router

Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.
[Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

Middleware runs before a request is completed, allowing you to modify the request/response, handle redirects, authentication, etc.
Example:

```js
// middleware.js
export function middleware(request) {
  // logic here
  return NextResponse.next();
}
```

[Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)

#### NextJS. Fetching data

[How to fetch data and stream](https://nextjs.org/docs/app/getting-started/fetching-data)

#### Next.JS. Client/server separation in React Server Components

- **Server Components:** Run only on the server, can fetch data directly, and never send code to the client.
- **Client Components:** Run in the browser, can use state/effects, and interact with the DOM.
  Mark a file as client with `"use client"` at the top.

Example:

```jsx
// app/page.js (Server Component by default)
import ClientButton from "./ClientButton";
// ClientButton.js
("use client");
export default function ClientButton() {
  /* ... */
}
```

[React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#client-and-server-components)

#### React Router Framework

React Router Framework mode enables full-stack routing for React apps, supporting client, server, and static rendering with data loading and mutations.
[Installing React Router in framework mode](https://reactrouter.com/7.6.1/start/framework/installation)

#### React Router Framework. Routing

Define routes in a `routes` directory or with a route config. Supports loaders, actions, and error boundaries.

```ts
// app/routes.ts
import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("./home.tsx"),
  route("about", "./about.tsx"),

  layout("./auth/layout.tsx", [
    route("login", "./auth/login.tsx"),
    route("register", "./auth/register.tsx"),
  ]),

  ...prefix("concerts", [
    index("./concerts/home.tsx"),
    route(":city", "./concerts/city.tsx"),
    route("trending", "./concerts/trending.tsx"),
  ]),
] satisfies RouteConfig;
```

[React Router framework Routing](https://reactrouter.com/start/framework/routing)

#### React Router Framework. Client, Server and Static Data Loading

- **Client:** Data is fetched in the browser using loaders.
- **Server:** Data is fetched on the server and sent with the HTML.
- **Static:** Data is fetched at build time for static export.

Example loader:

```jsx
export async function loader() {
  const data = await fetch("/api/data").then((res) => res.json());
  return { data };
}
```

[Data Loading](https://reactrouter.com/start/framework/data-loading)

#### TanStack Start

TanStack Start is a full-stack React framework powered by TanStack Router. It provides a full-document SSR, streaming, server functions, bundling, and more using tools like Nitro and Vite.
[TanStack Start Overview](https://tanstack.com/start/latest/docs/framework/react/overview)

#### Waku

Waku is a minimal React framework focused on simplicity and fast developer experience, ideal for small to medium projects. It emphasizes minimal configuration and fun, modern workflows for building with React Server Components.
[Waku](https://waku.gg/)

### 🔴 Concurrent Features & Suspense

#### Suspense for lazy-loading

#### Concurrent rendering in React 18

#### _useTransition_, _startTransition_

`useTransition` lets you mark state updates as "transitions" so React can keep the UI responsive during expensive updates (like filtering large lists).

Example:

```jsx
import { useState, useTransition } from "react";

function SearchList({ items }) {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const filtered = items.filter((item) => item.includes(query));

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
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

[useTransition](https://react.dev/reference/react/useTransition)

#### _useDeferredValue_

[useDeferredValue](https://react.dev/reference/react/useDeferredValue)

### 🟡🔴 Build Process / CI/CD / Tooling

#### CRA vs Vite vs custom Webpack

- **CRA (Create React App):** [DEPRECATED] Old way to create React applications with zero-config React setup. Was considered to be good for beginners and quick prototypes, but less flexible for advanced needs.
  ```sh
  npx create-react-app my-app
  ```
  [CRA Docs](https://create-react-app.dev/)
  **Do not use it today!**
- **Vite:** Fast build tool and dev server. Uses native ES modules, instant HMR, and supports React out of the box.
  ```sh
  npm create vite@latest my-app -- --template react-ts
  ```
  [Vite Docs](https://vitejs.dev/guide/)
- **Custom Webpack:** Full control over build process, plugins, and optimizations. More setup and maintenance required.
  [Webpack Docs](https://webpack.js.org/concepts/)

#### Linting, formatting, pre-commit hooks

- **Linting:** Use ESLint to catch code issues.
  ```sh
  npx eslint src/
  ```
  [ESLint](https://eslint.org/)
- **Formatting:** Use Prettier for consistent code style.
  ```sh
  npx prettier --write src/
  ```
  [Prettier](https://prettier.io/)
- **Pre-commit hooks:** Use Husky or lint-staged to run checks before commits.
  ```sh
  npx husky-init && npm install
  # Add a hook: .husky/pre-commit
  npx husky add .husky/pre-commit "npx lint-staged"
  ```
  [Husky](https://typicode.github.io/husky/#/)
  [lint-staged](https://github.com/okonet/lint-staged)

#### Dockerizing React apps, CI/CD pipelines

- **Dockerizing:** Use a Dockerfile to build and serve your React app.

  ```dockerfile
  # Dockerfile
  FROM node:18 AS build
  WORKDIR /app
  COPY . .
  RUN npm install && npm run build

  FROM nginx:alpine
  COPY --from=build /app/build /usr/share/nginx/html
  ```

  [Dockerizing React](https://thedkpatel.medium.com/dockerizing-react-application-built-with-vite-a-simple-guide-4c41eb09defa)

- **CI/CD:** Automate build, test, and deploy with tools like GitHub Actions, GitLab CI, or Jenkins.
  ```yaml
  # .github/workflows/ci.yml
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - uses: actions/setup-node@v3
        - run: npm ci
        - run: npm run build
  ```
  [GitHub Actions](https://docs.github.com/en/actions)
  [GitLab CI](https://docs.gitlab.com/ee/ci/)
  [Jenkins](https://www.jenkins.io/doc/)

## Coding task

Small react app: form, button, results list
