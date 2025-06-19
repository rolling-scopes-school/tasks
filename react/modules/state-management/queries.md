# [React](https://github.com/rolling-scopes-school/tasks/tree/master/react) Query Solutions 🌟

## Module Overview 📚

This module introduces students to modern data fetching and caching solutions in React applications. Based on their state management choice, students will learn either RTK Query (for Redux Toolkit users) or TanStack Query (for Zustand users). Both solutions provide powerful tools for managing server state, caching, and data synchronization.

## Learning Objectives 🎯

Students will:

- Understand the difference between client and server state
- Learn about data fetching, caching, and invalidation strategies
- Master either RTK Query or TanStack Query for API integrations
- Implement efficient data loading and error handling patterns
- Learn to manage loading and error states effectively

## Approximate Module Completion Time ⏱️

- **6 hours**

## Theory 📖

Students are encouraged to study the following resources based on their chosen query solution:

1. **RTK Query Path (for Redux Toolkit users):**

   - [RTK Query Overview](https://redux-toolkit.js.org/rtk-query/overview) - 1 hour
   - [RTK Query Quick Start](https://redux-toolkit.js.org/tutorials/rtk-query) - 1 hour
   - [RTK Query Usage Guide](https://redux-toolkit.js.org/rtk-query/usage/queries) - 2 hours
   - [RTK Query Mutations](https://redux-toolkit.js.org/rtk-query/usage/mutations) - 1 hour

2. **TanStack Query Path (for Zustand users):**

   - [TanStack Query Overview](https://tanstack.com/query/latest/docs/framework/react/overview) - 1 hour
   - [TanStack Query Quick Start](https://tanstack.com/query/latest/docs/framework/react/quick-start) - 1 hour
   - [TanStack Query Guide](https://tanstack.com/query/latest/docs/framework/react/guides/queries) - 2 hours
   - [TanStack Query Mutations](https://tanstack.com/query/latest/docs/framework/react/guides/mutations) - 1 hour

## Additional Resources 📘

### RTK Query Resources:

- [RTK Query Cache Behavior](https://redux-toolkit.js.org/rtk-query/usage/cache-behavior)
- [RTK Query Polling](https://redux-toolkit.js.org/rtk-query/usage/polling)
- [RTK Query Error Handling](https://redux-toolkit.js.org/rtk-query/usage/error-handling)

### TanStack Query Resources:

- [TanStack Query Caching](https://tanstack.com/query/latest/docs/framework/react/guides/caching)
- [TanStack Query Suspense](https://tanstack.com/query/latest/docs/framework/react/guides/suspense)
- [TanStack Query Testing](https://tanstack.com/query/latest/docs/framework/react/guides/testing)

### General Resources:

- [Data Fetching in React](https://react.dev/learn/synchronizing-with-effects#fetching-data)

## Comparison of Solutions

### RTK Query

Pros:

- Tight integration with Redux Toolkit
- Code generation for API endpoints
- Automatic cache management
- Built-in TypeScript support
- Consistent with Redux patterns

Cons:

- Requires Redux as a dependency
- More configuration required
- Larger bundle size when used with Redux

### TanStack Query

Pros:

- Framework agnostic
- Simpler setup
- Rich feature set
- Great development experience
- Excellent documentation

Cons:

- Manual endpoint definition
- Separate cache management
- Requires additional setup for some features

## Choosing the Right Solution

- Use **RTK Query** if:

  - You're already using Redux Toolkit
  - You want automatic code generation
  - You prefer a more opinionated approach

- Use **TanStack Query** if:
  - You're using Zustand or other state management
  - You want a more flexible solution
  - You prefer a simpler setup process
