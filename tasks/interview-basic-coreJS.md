# CoreJS Interview #1 Overview

The CoreJS Interview #1 is a crucial step in the Rolling Scopes School curriculum, designed to evaluate students' understanding of JavaScript and related technologies. Successfully passing this interview is a prerequisite for obtaining the RS School certificate.

## Key Information

- **Mandatory Requirement**: Passing this interview is essential for certification.
- **Mentor Restrictions**: Students cannot be interviewed by their current mentors.
- **Open to All Students**: Even those without a mentor can register for the interview.
- **Student's Responsibility**: Students must initiate contact with the interviewer, using details available on the RS APP.
  - **Important Note**: Interviewers might have other commitments (vacations, business trips, heavy workloads). It's advised to contact them early.
- **Interview Format**: Can be conducted online or face-to-face, depending on the mentor's preference.
- **Duration**: Ideally between 45 to 90 minutes.

## Interview Process

During the interview, the mentor will:

- Ask various questions.
- Listen to the student's answers.
- Provide corrections, explanations, or the correct answers when necessary.

Post-interview, the mentor is required to fill in a feedback form available under RS APP > Interviews.

## Sample Questions

### JavaScript Topics:

#### Advanced Expressions

- Understanding `Object.is` (optional).
- Differences between `let`, `var`, and `const`.
- Exploring the Temporal Dead Zone.
- Concepts of Hoisting.
- The role of polyfills.

#### Functions

- Differences and uses of arrow functions, function expressions, and function declarations.

#### Functional Scope

- Global scope vs. functional scope.
- Variable visibility areas.
- Working with nested scopes.

#### Functions Parameters / Arguments

- Defining function parameters.
- Differences in parameters passing by value and by reference.
- Handling a dynamic amount of function parameters.

#### Closures Advanced

- Understanding context and lexical environments.
- Differences between scope and context.
- The mechanism of lexical environment traversal.
- Connection between function and its lexical environment.

- #### Advanced Functions

  - `this` in functions
  - Reference Type & losing `this`
  - Understand difference between function and method
  - Understand how `this` works, realize `this` possible issues
  - Manage `this`
  - Be able to replace `this` value
  - Be able to use `call` and `apply` Function built-in methods
  - Know how to bind `this` scope to function
  - Binding, binding one function twice

#### ECMAScript Intermediate

- Function default parameters.
- Using spread operator for function arguments.
- Comparing `arguments` and `rest parameters`.
- Array concatenation with spread operator.
- Destructuring assignments for variables and function arguments.
- `for..of` loop (optional).

#### Objects Built-in Methods

- Utilizing `Object.keys` and `Object.values`.
- Working with static Object methods.
- Property flags and descriptors.
- Creating iterable objects and using `Symbol.iterator` (optional).

#### ECMAScript Data Types & Expressions

- Working with Object computed properties.
- Iterating through Object keys.

#### Arrays Built-in Methods

- Copying and modifying arrays.
- Flattening nested arrays.

#### Arrays Iterating, Sorting, Filtering

- Sorting and custom sorting arrays.
- Filtering array elements.

### JavaScript in Browser:

#### Global Object Window

- Understanding the Document Object Model (DOM).

#### Events Basics

- Types of DOM Events.
- Working with Mouse and Keyboard Events.
- Handling Form and Input Events.
- Event Listeners.
- Event Phases and their differences.
- Custom events (optional).

#### Events Propagation / Preventing

- Event propagation cycle.
- Stopping event propagation.
- Preventing default browser behavior.
- Event delegation and its pros/cons.

#### Timers

- Usage of `setTimeout` / `setInterval`.
- Clearing timers with `clearTimeout` / `clearInterval`.

#### Web Storage API & Cookies

- Differences between LocalStorage, SessionStorage, and Cookies.

#### Date & Time (optional)

- Working with the Date object.
- Timezones and Internationalization in JavaScript (Intl).

### Design Patterns

#### Intermediate Knowledge

- Understanding and applying KISS, DRY, and YAGNI principles.

### Coding tasks:

### Coding Tasks Examples

- **`Array.flat` Polyfill**: Implement a polyfill for the `Array.flat` method. This method should flatten an array up to the specified depth, handling cases where the depth is not provided (default to 1) or when it's an infinite depth.
- **`Array.reduce` Polyfill**: Write a polyfill for the `Array.reduce` method. Ensure your implementation handles all the functionalities of the native `reduce` method, including the accumulator and current value parameters, as well as the optional initial value.
- **String Repeater**: Create a method that extends the String prototype to repeat a given string a specified number of times. For example, calling `'hello world'.repeating(3)` should return `'hello world hello world hello world'`. The method should handle edge cases like non-integer repeat times and negative numbers.
- **`String.prototype.padStart` Polyfill**: Write a polyfill for the `String.prototype.padStart` method. It should pad the current string from the start with another string (multiple times if necessary) until the resulting string reaches the given length.
- **Custom `setTimeout` Implementation**: Implement a custom version of `setTimeout` using only `Date` and a `while` loop, without using the native `setTimeout` function.
- **Memoization Function**: Create a function that implements memoization to cache and return the results of expensive function calls.
- **Currying Logger**: Develop a `curryLogger` function that takes a logging function and returns a curried version of this function.
- **Arguments Reverser**: Implement a function that reverses the order of arguments it receives, returning a new function with reversed arguments.
- **Private Counter Closure**: Craft a function that uses closures to create a private counter, which can only be modified through specific methods.
- **Rest Parameters Sum**: Write a function that uses rest parameters to calculate and return the sum of an indefinite number of arguments.
- **Object Freeze Deep**: Create a function that deeply freezes an object, ensuring all nested objects are also frozen.
- **Array Chunker**: Develop a function that divides an array into chunks of a specified size and returns them.
- **Custom Array Filter**: Implement your own version of the array filter function without using the built-in `Array.prototype.filter` method.
- **DOM Element Selector**: Write a function for selecting DOM elements with a specific data attribute and applying a given callback function to them.

The CoreJS Interview #1 offers a comprehensive platform for students to showcase their JavaScript skills, ensuring they are well-prepared for real-world challenges in software development.
