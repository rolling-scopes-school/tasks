# CoreJS Interview #2

> **Important**: Passing the CoreJS Interview #2 is a prerequisite for receiving the RS School certificate.
> For rationale behind topic selection, see [interview-corejs-changelog.md](./interview-corejs-changelog.md).
> For the previous version, see [interview-corejs-legacy.md](./interview-corejs-legacy.md).

- **Interview Exclusion**: Students cannot be interviewed by their current mentors.
- **Open Registration**: Students without a mentor are also eligible to register for an interview.
- **Initiate Contact**: Students must initiate contact with the interviewer through the RS APP. _**Note:** Interviewers might be unavailable due to vacations, business trips, or other commitments, so early contact is recommended._
- **Interview Format**: Interviews may be conducted online or face-to-face at the mentor's discretion.
- **Duration**: Interviews typically last between 45 to 90 minutes.

During the interview, the mentor will:

- Pose questions.
- Listen to and evaluate answers.
- Provide corrections, explanations, or the correct answers as needed.

**Post-Interview**: Mentors are required to complete a feedback form via the RS APP > Interviews section.

> **Note for interviewers:** This document lists all possible topics. You are **not** expected to cover every topic — select the areas most relevant to the student's level. The coding section offers a pool of tasks; pick **1-2** for the interview.

## Interview Topics and Question Examples

### TypeScript

> _Stage 2 core topic: 19 hours of study + mandatory usage in all projects with strict mode._

- Basic types and type annotations.
- Enums.
- `type` vs `interface`: differences and when to use each.
- Interfaces with optional and read-only properties.
- Function types.
- Utility types: `Partial`, `Pick`, `Omit`, `Record`, `Required`, etc.
- Type guards: `typeof`, `instanceof`, type predicates.
- Type assertions and `const` assertions.
- Generic types: concept, constraints, generic functions.
- Understanding the module system in TypeScript (ES modules, resolution).

### Async Programming & Event Loop

> _Stage 2 core topic: 10 hours async programming + 4 hours Event Loop module._

#### **Event Loop**

- Call Stack, Web APIs, Callback Queue, Microtask Queue.
- Microtasks vs Macrotasks: execution order of `Promise.then` vs `setTimeout`.
- How the single-threaded model handles asynchronous operations.

#### **Promises**

- Creating and chaining promises.
- Error handling in promise chains (`.catch`, `.finally`).
- `Promise.all`, `Promise.race`, `Promise.allSettled`, `Promise.any`: differences and use cases.

#### **Async/Await**

- Syntax and relationship to promises.
- Error handling with `try/catch` in async functions.
- Parallel execution patterns (e.g., `Promise.all` with `await`).

#### **Garbage Collection** `(optional)`

- Mark-and-sweep algorithm basics.
- Common causes of memory leaks.
- `WeakMap` / `WeakSet` and their connection to garbage collection.

### Functional Programming

> _Stage 2 core topic: 10 hours dedicated module._

- Pure functions and side effects.
- Higher-order functions.
- Function currying and partial application.
- Function composition.
- Immutability concepts.

### Design Patterns

> _Stage 2 topic: 6 hours module._

- Creational patterns: Singleton, Factory Method.
- Structural patterns: Decorator, Adapter, Facade.
- Behavioral patterns: Observer, Strategy.
- SOLID principles and their application in project contexts.

### JavaScript in Browser

#### **Page Lifecycle**

- Parsing, reflow, repaint, and the critical rendering path.
- Optimizing rendering performance.

#### **Network Requests**

- Fetch API: usage, headers, error handling.
- Concepts of RESTful APIs: methods, status codes, resource design.

#### **Timers**

- Differences between `setTimeout` and `requestAnimationFrame`.

### Error Handling

- `try..catch..finally` and error propagation.
- Custom error classes.
- Error handling in asynchronous code (promises, async/await).

### Coding Task Examples

> **For interviewers:** Pick **1-2 tasks** from this pool. Each task typically takes 10-15 minutes.

#### **Polyfills**

1. **Function.prototype.bind Polyfill**
   - Implement a polyfill for `Function.prototype.bind`.

2. **Object.create Polyfill**
   - Implement a polyfill for `Object.create`.

#### **Functional Programming**

3. **Curried Addition Function**
   - Write a function that supports adding numbers in a curried form, such as `add(5)(9)(-4)(1)`.

4. **Debounce Implementation**
   - Implement a `debounce(fn, delay)` function that delays invoking `fn` until `delay` ms have elapsed since the last call.

#### **Working with Promises**

5. **Sequential Promise Execution**
   - Write a function to execute an array of async functions sequentially, ensuring each resolves before the next begins.

6. **Promise.all Polyfill**
   - Implement a function that behaves like `Promise.all`, resolving when all promises resolve or rejecting on the first failure.

7. **EventEmitter**
   - Implement a simple EventEmitter class with `on(event, handler)`, `off(event, handler)`, and `emit(event, ...args)` methods.
