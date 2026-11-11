# [React](https://github.com/rolling-scopes-school/tasks/tree/master/react) Advanced Hooks & Patterns 🧩

## Module Overview 📚

The "Advanced Hooks & Patterns" module continues the [Hooks](../hooks/README.md) module. It covers the hooks you reach for when building **reusable, accessible components**: working with the DOM through refs, measuring layout before paint, generating stable ids, exposing imperative handles, keeping the UI responsive with concurrent features, and subscribing to external stores. It also introduces the **composition patterns** behind well-designed component APIs — compound components, the provider pattern, controlled vs uncontrolled components, and render props.

## Learning Objectives 🎯

Students will:

- Use `useRef` to hold mutable values and DOM nodes (focus management, measuring).
- Know when `useLayoutEffect` is needed instead of `useEffect` (measure/position before paint).
- Wire labels and ARIA attributes with `useId`.
- Expose a small imperative API with `useImperativeHandle` (and ref as a prop in React 19), and know when that is an anti-pattern.
- Keep the UI responsive with `useTransition` and `useDeferredValue`.
- Subscribe to an external store with `useSyncExternalStore`.
- Understand what `useMemo` and `useCallback` do and when they matter.
- Design component APIs with compound components, the provider pattern, and controlled/uncontrolled props.
- Read and understand render props (largely superseded by hooks).

## Approximate Module Completion Time ⏱️

- **6 hours**

## Theory 📖

Students are encouraged to explore the following resources:

1. **Refs and the DOM:**

   - [Referencing Values with Refs](https://react.dev/learn/referencing-values-with-refs)
   - [Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs)
   - [`useRef`](https://react.dev/reference/react/useRef)
   - [`useImperativeHandle`](https://react.dev/reference/react/useImperativeHandle)
   - [`ref` as a prop (React 19)](https://react.dev/blog/2024/12/05/react-19#ref-as-a-prop)

2. **Layout and identity:**

   - [`useLayoutEffect`](https://react.dev/reference/react/useLayoutEffect)
   - [`useId`](https://react.dev/reference/react/useId)

3. **Concurrent features:**

   - [`useTransition`](https://react.dev/reference/react/useTransition)
   - [`useDeferredValue`](https://react.dev/reference/react/useDeferredValue)

4. **External stores:**

   - [`useSyncExternalStore`](https://react.dev/reference/react/useSyncExternalStore)

5. **Memoization:**

   - [`useMemo`](https://react.dev/reference/react/useMemo)
   - [`useCallback`](https://react.dev/reference/react/useCallback)

   > Memoization is covered in depth (with profiling) in the **Performance** task. In the Advanced Hooks task
   > it is background knowledge only — don't build that task around it.

6. **Composition patterns:**

   - [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context) — the basis of compound components and providers
   - [Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context)
   - [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components) — controlled vs uncontrolled
   - [Advanced React Component Patterns](https://kentcdodds.com/blog/advanced-react-component-patterns) — compound components, render props
   - [Render props (legacy reference)](https://legacy.reactjs.org/docs/render-props.html)

7. **Accessible widgets:**
   - [WAI-ARIA Authoring Practices: Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
   - [WAI-ARIA Authoring Practices: Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
   - [WAI-ARIA Authoring Practices: Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)

## Additional Resources 📘

1. [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
2. [React Hooks reference](https://react.dev/reference/react/hooks)
3. [Testing Library: user-event (keyboard, focus)](https://testing-library.com/docs/user-event/intro)

By the end of this module, students will be able to build small, reusable components with clean APIs, correct focus and ARIA behavior, and a responsive UI, and explain why each advanced hook was the right tool where they used it.
