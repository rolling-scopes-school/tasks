## Question examples:

### JavaScript:

- #### Advanced Expressions

  - Hoisting
  - Temporal dead zone

- #### Objects Built-in methods.

  - Know static Object methods
  - Property flags & descriptors (student is able to set property via Object. defineProperty)
  - Know how to create iterable objects, Symbol.iterator usage `(optional)`

- #### Object as Hash.

  - Be able to loop through Object keys

- #### Arrays Built-in methods

  - Know how to copy array part
  - Know how to flatten nested array

- #### Arrays Iterating, Sorting, Filtering

  - Be able to custom sorting for Array
  - Be able to filter Array elements

- #### Functional Scope

  - Know global scope and functional scope
  - Know variables visibility areas
  - Understand nested scopes and able work with them

- #### Functions Parameters / Arguments

  - Know how to define Function parameters
  - Know difference between parameters passing by value and by reference
  - Know how to handle dynamic amount of Function parameters

- #### ECMAScript Intermediate

  - Function default parameters
  - ECMA script modules
  - Know how to use spread operator for Function arguments
  - Be able to compare `arguments` and `rest parameters`
  - Spread operator for Array
  - Understand and able to use spread operator for Array concatenation
    Destructuring assignment
  - Be able to discover destructuring assignment concept
  - Understand variables and Function arguments destructuring assignment
  - String templates
  - Know how `for..of` loop works `(optional)`

- #### Advanced Functions

  - `this` in functions
  - Reference Type & losing `this`
  - Understand difference between function and method
  - Understand how `this` works, realize `this` possible issues
  - Manage `this`
  - Be able to replace `this` value
  - Be able to use `call` and `apply` Function built-in methods

- #### Functional Patterns

  - Immediately invoked functional expression `(IIFE)` `(optional)`
  - Know IIFE pattern `(optional)`
  - Callback (Function as argument)
  - Know callback pattern
  - Understand callback limitations (callback hell) `(optional)`
  - Binding, binding one function twice
  - Know how to bind `this` scope to function
  - Carrying and partial functions

- #### Network requests

  - `Fetch` (with usage)
  - `XMLHTTPRequest` (concept) `(optional)`
  - `WebSocket` (concept) `(optional)`

- #### Web components

  - Web components, shadow DOM (concept) `(optional)`

- #### Date & time

  - Timezones `(optional)`
  - Internationalization js (Intl) `(optional)`

- #### Closures Advanced

  - Context (lexical environment)
  - Understand function creation context (lexical environment)
  - Be able to explain difference between scope and context
  - Inner/outer lexical environment
  - Understand lexical environment traversing mechanism
  - Understand connection between function and lexical environment

- #### Object Oriented Programming

  - `new` keyword
  - Understand how `new` keyword works
  - Function constructor
  - Know function constructor concept
  - Able to create constructor functions
  - Public, private, static members
  - Know how to create public members
  - Know how to create private members
  - Know how to create static members
  - Understand OOP emulation patterns and conventions

- #### Prototypal Inheritance Basics

  - `__proto__` property
  - Understand `__proto__` object property
  - Able to use [Object.create] and define `__proto__` explicitly
  - Able to set / get object prototype `(optional)`
  - `prototype` property
  - Know function `prototype` property
  - Understand dependency between function constructor `prototype` and instance `__proto__`
  - Able to create 'class' methods using function `prototype` property 

- #### ECMAScript Classes

  - Class declaration
  - Know `class` declaration syntax
  - Understand difference between `class` and `constructor function`
  - Getter/setter
  - What does `super()` do and where we have to use it?

- #### ECMAScript Data Types & Expressions

  - Object `keys/values`
  - Object calculated props
  - `Set/Map` data types
  - `WeakSet/WeakMap` data types

- #### JavaScript Errors

  - `try..catch` statement
  - Know how to handle errors
  - Custom errors `(optional)`

- #### ECMAScript Advanced

  - Garbage collector (concept) `(optional)`
  - Promises
  - Promise states
  - Promise Chaining
  - Promise static methods
  - Be able to compare promise and callback patterns `(optional)`
  - Be able to handle errors in promises
  - event loop
  - async/await

### JavaScript in Browser:

- #### Global object window

  - Location
  - Know browser location structure
  - History API (Global object window)
  - Know browser History APIconcept
  - Be able to navigate within browser history
  - Be able to use history state `(optional)`
  - Navigator `(optional)`
  - Know how to parse user agent `(optional)`
  - Know how to discover client platform, browser
  - Cookies

- #### Page Lifecycle

  - Parsing
  - Reflow
  - Repaint

- #### Events Basics

  - Be able to explain difference between capturing and bubbling
  - Know Event concept
  - Custom events `(optional)`

- #### Events Propagation / Preventing

  - Know Event propagation cycle
  - Know how to stop Event propagation
  - Know how to prevent Event default browser behavior
  - Delegating
  - Understand Event delegating concept
  - Understand Event delegating benefits and drawbacks

- #### Timers

  - `clearTimeout`
  - `requestAnimationFrame` `(optional)`
  - Be able to explain difference between `setTimeout` and `requestAnimationFrame` `(optional)`

- #### Web Storage API & cookies

  - Cookies (concept)
  - Difference between localStorage, sessionStorage, session and cookies

### Typescript:

- #### Ability to write concise TypeScript code using its constructs
  - understanding TS(ES6) module system
  - describing variables with primitive data types.
  - using interfaces with optional properties, read-only properties, etc...
  - creating custom types.
  - types/interface differences `(optional)`
  - function types.
  - utitily types `(optional)`
  - typeguards `(optional)`
  - generic types (concept)

### Design patterns:

- #### Intermediate knowledge of patterns and best practices:

  - design patterns used on his project, and able to compare these patterns `(optional)`
  - KISS, DRY, YAGNI
  - The meaning behind SOLID principles. 

### Web Communication Protocols: `(optional)`

- #### HTTP vs HTTPS vs HTTP/2
- #### RESTful API 
- #### HTTP methods
- #### HTTP status codes groups

### Common web-security knowledge `(optional)`

- #### Basic understanding of most common security terms (CORS, XSS) `(optional)`

  - XSS
  - CORS
  - OWASP Top 10
  - Auth (JWT, OAuth, Basic, etc.)

### Coding tasks:

- `Function.prototype.bind` implement polyfill
- `Object.create` implement polyfill
- `Array.flat` implement polyfill
- `Array.reduce` implement polyfill
- `'hello world'.repeating(3)` -> 'hello world hello world hello world'. How to implement?
- `myFunc('!', 4, -10, 34, 0)` -> '4!-10!34!0`. How to implement?
- `five(plus(seven(minus(three()))))` -> 9. How to implement?
- add(5)(9)(-4)(1) -> 11. How to implement?
- `periodOutput(period)` method should output in the console once per every period how mach time has passed since the first function call.
  Example:
  `periodOutput(100) -> 100(after 100 ms), 200(after 100 ms), 300(after 100 ms), ...`
- `extendedPeriodOutput(period)` method should output in the console once per period how mach time has passed since the first function call and then increase the period. Example: `// extendedPeriodOutput(100) -> 100(after 100 ms), 200(after 200 ms), 300(after 300 ms)`

#### Passing the interview

1. You should contact the mentor personally. Contact details will be announced through Discord.
2. At the request of the mentor, the interview can take place online or face-to-face.
3. During the interview mentor:

- asks questions;
- gets answers;
- adds/corrects/explains/gives the right answer, if necessary.

**Note:** preferable interview duration is 40-90 minutes. Also, it would be great to create a calendar appointment or let a student know in advance how much time the interview will take.

#### Take into account that mentor can be busy (vacation, business trip, workload and etc.), so contact him as soon as possible.
