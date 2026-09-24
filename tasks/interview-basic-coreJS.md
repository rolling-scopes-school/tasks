# CoreJS Interview #1

> **Important**: Passing the CoreJS Interview #1 is a prerequisite for receiving the RS School certificate.
> For rationale behind topic selection, see [interview-basic-coreJS-changelog.md](./interview-basic-coreJS-changelog.md).
> For the previous version, see [interview-basic-coreJS-legacy.md](./interview-basic-coreJS-legacy.md).

- **Mentor Restrictions**: Students cannot be interviewed by their current mentors.
- **Open to All Students**: Even those without a mentor can register for the interview.
- **Student's Responsibility**: Students must initiate contact with the interviewer through the RS APP. _**Note:** Interviewers might be unavailable due to vacations, business trips, or other commitments, so early contact is recommended._
- **Interview Format**: Can be conducted online or face-to-face, depending on the mentor's preference.
- **Duration**: Ideally between 45 to 90 minutes.

During the interview, the mentor will:

- Ask various questions.
- Listen to the student's answers.
- Provide corrections, explanations, or the correct answers when necessary.

**Post-Interview**: Mentors are required to complete a feedback form via the RS APP > Interviews section.

> **Note for interviewers:** This document lists all possible topics. You are **not** expected to cover every topic — select the areas most relevant to the student's level. Items marked **(advanced)** can be skipped for weaker students or used to challenge stronger ones.

### Recommended Interview Flow

| Phase   | Time       | What to do                                                                                                                                                  |
| ------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Warm-up | ~3 min     | Ask the student about their recent project — what they built, what was challenging. This reduces nervousness and gives you context for follow-up questions. |
| Theory  | ~45-55 min | Pick 5-7 sections based on the student's level. Start with simpler topics (Variables, Functions) and progress to harder ones (OOP, `this`).                 |
| Coding  | ~15-20 min | Pick 1-2 tasks. Give an easy task to a struggling student; give a hard one to a strong student.                                                             |
| Wrap-up | ~5 min     | Share feedback, highlight strengths, suggest areas for improvement.                                                                                         |

## Interview Topics and Question Examples

### Variables, Types & Expressions

> _Stage 1 Week 2: JS Basics (4 hours) + ES6+ (3 hours)._

- Differences between `let`, `var`, and `const`.
- Temporal Dead Zone.
- Hoisting: variables and functions.
- Spread operator and destructuring (arrays, objects, function parameters).
- `for..of` loop **(optional)**.

### Functions & Scope

> _Stage 1 Week 2: Functions module (4 hours)._

- Arrow functions vs function expressions vs function declarations.
- Global scope vs functional scope vs block scope.
- Nested scopes and variable visibility.
- Parameters: passing by value vs by reference, rest parameters.

### Closures

> _Stage 1 Week 2: Functions module (closures section)._

- Lexical environment and its connection to functions.
- Scope vs context.
- Practical use cases for closures.

### `this` & Function Context

> _Stage 1 Week 2: Functions module (this, call/apply/bind section)._

- How `this` works in different contexts (function, method, arrow function).
- Losing `this` — common pitfalls.
- `call`, `apply`, `bind` — differences and usage.
- Binding a function twice **(advanced)**.

### OOP, Classes & Prototypes

> _Stage 1 Week 11: OOP Basics (6 hours) + Classes & Prototypes (6 hours)._

- `new` keyword: what happens when a constructor is called.
- Class syntax: declaration, `constructor`, `super()`, `extends`.
- Differences between `class` and constructor functions.
- Public, private, and static members.
- Prototypal inheritance: `__proto__`, `prototype`, prototype chain.
- `Object.create` and explicit prototype setup **(advanced)**.

### Objects & Arrays

> _Stage 1 Week 2: JS Basics + ES6+._

- `Object.keys`, `Object.values`, `Object.entries`.
- Property flags and descriptors **(optional)**.
- Array methods: copying, flattening, sorting, filtering.
- `Map` vs plain Object: when to use which. `Set` for unique values **(advanced)**.

### DOM & Events

> _Stage 1 Week 4: DOM API (2 hours) + Events (2 hours)._

- DOM tree navigation and element selection.
- Creating, modifying, and removing elements.
- Event listeners: adding, removing.
- Event propagation: bubbling, capturing.
- Event delegation and its pros/cons.
- Preventing default browser behavior.

### Web Storage

> _Stage 1 Week 4+: used in projects._

- Differences between LocalStorage, SessionStorage, and Cookies.
- Storage limits and data format (string serialization).
- When to use which: session data vs persistent data vs server-sent data.

### HTTP Basics

> _Stage 1 Week 10: Client-Server Communication (7 hours)._

- HTTP methods: GET, POST, PUT, DELETE — when to use which.
- HTTP status codes: 2xx, 3xx, 4xx, 5xx — what they mean.
- What is CORS and why it exists **(advanced)**.

### Clean Code Principles

> _Stage 1 Week 6: Clean Code (10 hours)._

- KISS, DRY, YAGNI — understanding and examples from own code.
- Meaningful naming: variables, functions, classes.
- Why small, single-purpose functions matter.

### Coding Task Examples

> **For interviewers:** Pick **1-2 tasks** from this pool. Difficulty and estimated time are indicated for each task. Use easy tasks as a warm-up or for struggling students; use hard tasks to challenge strong students.

#### **Polyfills**

1. **Custom Array.filter** — Easy (~5 min)
   - Implement your own version of `Array.prototype.filter`.

2. **Array.reduce Polyfill** — Medium (~10 min)
   - Implement a polyfill for `Array.reduce`, including the optional initial value.

3. **Array.flat Polyfill** — Hard (~15 min)
   - Implement a polyfill for `Array.flat`. Handle default depth of 1 and infinite depth.

#### **Closures & Scope**

4. **Private Counter** — Easy (~5 min)
   - Create a function using closures that returns an object with `increment()`, `decrement()`, and `getValue()` methods.

5. **Memoization Function** — Hard (~15 min)
   - Implement a function that caches results of expensive function calls.

#### **Objects & Recursion**

6. **Object.freeze Deep** — Medium (~10 min)
   - Create a function that deeply freezes an object, including all nested objects.

7. **DOM Element Selector** — Easy (~5 min)
   - Write a function that selects DOM elements by a data attribute and applies a callback to each.
