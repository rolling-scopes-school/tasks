# CoreJS Interview #2

> **Important**: Passing the CoreJS Interview #2 is a prerequisite for receiving the RS School certificate.

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

## Interview Topics and Question Examples

### JavaScript Topics:

#### **Modules in JavaScript**

- Purpose and concept of a module/module pattern.
- Types of modules (AMD, ES6, CommonJS, UMD).
- Syntax and common features (export default, named exports, exports as).
- Dynamic imports.

#### **Functional Patterns**

- Callbacks and IIFE.
- Limitations of callbacks (e.g., callback hell).
- Function currying and partial functions.

#### **Object-Oriented Programming (OOP)**

- `new` keyword functionality.
- Constructor functions and their properties.
- Public, private, and static members in OOP.

#### **ECMAScript Classes**

- Class declaration and syntax.
- Differences between `class` declarations and constructor functions.
- Usage of `super()`.

#### **Prototypal Inheritance**

- Properties like `__proto__` and `prototype`.
- Using [Object.create] to define prototypes explicitly.

#### **ECMAScript Advanced Data Types & Expressions**

- `Set/Map` and `WeakSet/WeakMap`.

#### **JavaScript Errors**

- Error handling techniques including `try..catch`.
- Understanding and implementing custom errors.

#### **ECMAScript Advanced**

- Promises, async/await, and the event loop.
- Garbage collection basics.

### JavaScript in Browser:

#### **Global object window**

- Understanding browser's location and history API.
- User agent parsing and platform/browser detection.

#### **Page Lifecycle**

- Parsing, reflow, repaint, and the critical rendering path.

#### **Network requests**

- Using `Fetch` and understanding `XMLHTTPRequest`.

#### **Timers**

- Differences between `setTimeout` and `requestAnimationFrame`.

### TypeScript:

- Writing efficient TypeScript using basic types, enums, interfaces, and generics:
  - basic types
  - enums
  - type / interface, differences between them
  - using interfaces with optional properties, read-only properties, etc...
  - function types
  - utitily types `(optional)`
  - typeguards `(optional)`
  - creating custom types
  - generic types (concept)
- Understanding the module system in ES6 and TypeScript.

### Design Patterns:

- Familiarity with Creational, Structural, and Behavioral Design Patterns.
- SOLID principles and design patterns in project contexts.

### Software Development Methodologies:

- Agile, Scrum, Kanban, and Waterfall methodologies.
- Project estimation techniques.

### Testing:

- Understanding different types of testing (Integration, E2E, Performance).
- Test Pyramid.
- Test-driven development (TDD) and behavior-driven development (BDD).

### Web Communication Protocols:

- Differences between HTTP and HTTPS.
- Understanding HTTP methods, headers, responses, and status codes.
- Concepts of RESTful APIs.

### Common Web-Security Knowledge:

- Basic security concepts including CORS, XSS, and OWASP Top 10.
- Authentication mechanisms (JWT, OAuth).

### Coding Task Examples:

#### **Polyfills and Extensions**

1. **Function.prototype.bind Polyfill**

   - Implement a polyfill for `Function.prototype.bind`.

2. **Object.create Polyfill**

   - Implement a polyfill for `Object.create`.

3. **Array.flat Polyfill**

   - Implement a polyfill for `Array.flat`.

4. **Array.reduce Polyfill**

   - Implement a polyfill for `Array.reduce`.

5. **String Repeating Function**

   - Create a method that allows a string to be repeated a certain number of times, similar to the native `String.prototype.repeat`.

6. **Custom Join Function**
   - Implement a function that constructs a string from an array of numbers, separated by a specified delimiter.

#### **Functional Programming Challenges**

7. **Functional Expressions**

   - Implement a series of functions that allow for functional expressions such as `five(plus(seven(minus(three()))))`.

8. **Curried Addition Function**

   - Write a function that supports adding numbers in a curried form, such as `add(5)(9)(-4)(1)`.

#### **Timing Functions**

9. **Periodic Output**

   - Write a function that logs the elapsed time in milliseconds at regular intervals.

10. **Extended Periodic Output**

- Implement a function that logs the elapsed time in milliseconds at intervals that increase incrementally.

#### **Working with Promises**

11. **Sequential Promise Execution**

- Write a function to execute an array of functions that return promises sequentially, ensuring each promise resolves before the next begins.

12. **Promise.all Polyfill**

- Implement a function that behaves like `Promise.all`.

13. **Race Condition Handling with Promises**

- Create a function to handle race conditions, resolving or rejecting with the value of the first promise that settles.

14. **Promise Chaining and Error Handling**

- Write a function that handles promise chaining and catches any errors, useful for data fetching scenarios.

15. **Promisify Node-style Callbacks**

- Convert traditional Node.js callback-style functions to return promises.
