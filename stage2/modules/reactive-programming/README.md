# Introduction to Functional Reactive Programming

> Let's explore how the approaches to describing asynchronous dependencies in programs have evolved — from callbacks all the way to signals. We'll walk through several key primitives, understand what problems each one solves, and see how they all connect to one another.

---

## Contents

1. [Programs as dependency graphs](#1-programs-as-dependency-graphs)
2. [Function "colors": sync vs async](#2-function-colors-sync-vs-async)
3. [Callbacks](#3-callbacks)
4. [The Thenable pattern](#4-the-thenable-pattern)
5. [Pipe Operator](#5-pipe-operator)
6. [Promise](#6-promise)
7. [Future](#7-future)
8. [Observable](#8-observable)
9. [Signals](#9-signals)
10. [Async Signals and what's ahead](#10-async-signals-and-whats-ahead)

---

## 1. Programs as dependency graphs

There are many ways to think about a program:

- **A sequence of instructions** — line by line, top to bottom.
- **A collection of objects** exchanging messages.
- **A collection of functions** transforming data.
- **A collection of actions linked by dependencies** — and this is the perspective we'll focus on here.

All of these views are valid; they simply highlight different facets of the same thing.

Let's dwell on that last point. **A program is a set of actions (computations) with dependencies between them.** Action B depends on the result of action A. Action C depends on both B and D. Action E can only start after C and F have finished.

If we draw those dependencies, we get a graph. It's **directed** — because dependencies have a direction: A must complete _before_ B, not the other way around. And it's **acyclic** — because cycles would mean a deadlock: A waits for B, B waits for C, C waits for A — there's no way out. In real-world reactive systems cyclic dependencies do exist, but they're always broken by special mechanisms like initial values or feedback loops. The baseline model is a DAG (directed acyclic graph).

Throughout this text we'll refer to such a graph as an **FRP network**.

### Example

Imagine we need to load a user profile page. We have to fetch the user's data, then their orders and settings (both require the user's ID), and finally render the page once all the data is ready.

```
        fetchUser
        /       \
       ↓         ↓
 fetchOrders   fetchSettings
       \         /
        ↓       ↓
       renderPage
```

Four nodes, four edges. `fetchOrders` and `fetchSettings` don't depend on each other, so they can run in parallel. A runtime that "sees" the graph structure can take advantage of this. If we wrote the same logic as a sequence of imperative steps, that opportunity for parallelism would be lost.

This example will stay with us throughout. We'll keep coming back to it and see how each new primitive describes this network — and how naturally it does so.

> **Key takeaway.** Everything that follows is about the tools we have for describing the nodes and edges of an FRP network.

---

## 2. Function "colors": sync vs async

Before we get to specific tools, let's take a closer look at what synchronous and asynchronous actually mean. These terms are used everywhere, yet their meaning is surprisingly blurry. Let's try to arrive at a working definition.

### Synchronous code

**Synchrony is a property of code where the order of actions is known in advance and fully determined by the program itself.**

When we write `a(); b(); c();`, we know exactly what happens: `a` runs first, then `b`, then `c`. The order is dictated by the structure of the code and doesn't depend on anything external. Predictable, unambiguous, no surprises.

```typescript
function getUser(): User {
  return cache.get("user");
}

const user = getUser(); // 1. got the user
const orders = getOrders(user.id); // 2. got orders — guaranteed to come after
renderPage(user, orders); // 3. rendered — guaranteed to come after
```

### Asynchronous code

**Asynchronous code is code in which the order of actions is not fully determined in advance and depends on external events.**

A common way to describe asynchrony is "a function that will return its result sometime later." That's a misleading characterization — it gives the impression that an async function is simply a "slow synchronous one." The difference runs deeper than that: **in asynchronous code, part of the execution order is determined not by the program, but by the outside world**.

Think of it this way. A program with a big `switch` block that handles keystrokes is, in a sense, already asynchronous code. The order in which the `switch` branches execute is determined not by the program, but by the user. The program _reacts_ to external events.

More often, though, it's useful to think about asynchrony in a more specific sense: **asynchronous functions are a set of functions that another part of the program (or the runtime environment) calls in an order determined by external events.** We don't call them ourselves at the right moment — we register them ahead of time, and the environment decides when exactly to invoke them. A response arrives from the server — the environment calls one function. The user clicks — the environment calls another. A timer expires — a third one.

```typescript
// We don't call handleResponse ourselves — the environment will, when a response arrives
fetch("/api/user").then(handleResponse);

// We don't call handleClick ourselves — the browser will, when the user clicks
button.addEventListener("click", handleClick);

// We don't call tick ourselves — the environment will, after 1000ms
setTimeout(tick, 1000);
```

In all three cases the pattern is the same: we hand over a function, and _when_ it gets called is decided by something other than us.

### What async/await hides

At first glance, `async`/`await` makes asynchronous code look like synchronous code. That's convenient for reading, but it creates the misleading impression that nothing special is going on. In reality, there's significant machinery behind the syntax.

When we write:

```typescript
async function loadProfile(id: string) {
  const user = await fetchUser(id); // ← split point
  const orders = await fetchOrders(user.id); // ← another one
  return renderPage(user, orders);
}
```

The JavaScript engine **slices** this function into several parts — one at each `await` — building an implicit state machine. Each part is a separate chunk of code that can be executed independently. Between parts the function is _suspended_: control is handed back to the runtime, and the local variables are captured in a closure so the next part can pick up where the previous one left off.

In essence, here's what happens behind the scenes (simplified pseudocode):

```typescript
// Part 1: before the first await
function loadProfile_part1(id: string) {
  const userPromise = fetchUser(id);
  // save local variables (id) into the function's "frame"
  // register loadProfile_part2 as the continuation
  // return control to the runtime
}

// Part 2: runs when fetchUser resolves — the runtime passes the result as `user`
function loadProfile_part2(user: User) {
  const ordersPromise = fetchOrders(user.id);
  // save local variables into the function's "frame"
  // register loadProfile_part3 as the continuation
  // return control to the runtime
}

// Part 3: runs when fetchOrders resolves — the runtime passes the result as `orders`
function loadProfile_part3(orders: Order[]) {
  const user = /* restored from the saved frame */;
  return renderPage(user, orders);
}
```

So `async`/`await` is syntactic sugar that _slices_ our function into parts and hands execution of each subsequent part to another place (the event loop, a scheduler, an I/O subsystem), leaving a reference to the continuation in special internal runtime tables. We write one linear function, but the runtime sees a set of separate fragments connected to each other.

This isn't an abstract implementation detail — it directly affects program behavior. Between two `await`s, anything can happen: other code can run, state can change, other asynchronous operations can complete. Each `await` is a point where we _give up control_ and don't know when we'll get it back.

### Async/await as graph description

If we look at `async`/`await` through the lens of an FRP network, it becomes clear that this syntax is a way of describing a dependency graph:

```typescript
async function loadProfile(id: string) {
  const user = await fetchUser(id);
  // ↑ edge: loadProfile_part2 depends on fetchUser

  const orders = await fetchOrders(user.id);
  // ↑ edge: loadProfile_part3 depends on fetchOrders

  return renderPage(user, orders);
}
```

Each `await` is an edge in the graph: "the next fragment depends on the result of this operation." Sequential `await`s form a linear chain. But notice: in this code, `fetchOrders` only begins after `fetchUser` completes — even though, looking at our FRP diagram from section 1, `fetchOrders` and `fetchSettings` could run in parallel. Linear `await` _forces_ sequentiality where the dependency graph doesn't require it.

To express parallelism, we have to explicitly switch to a different pattern:

```typescript
async function loadProfile(id: string) {
  const user = await fetchUser(id);

  // launch both in parallel, await the combined result
  const [orders, settings] = await Promise.all([
    fetchOrders(user.id),
    fetchSettings(user.id),
  ]);

  return renderPage(user, orders, settings);
}
```

Here `Promise.all` is an explicit join node in the graph, and both calls run in parallel. But notice: the `await` syntax alone can't express this — we needed an additional primitive (`Promise.all`) to describe the branching.

### Asynchrony ≠ parallelism

An important distinction worth noting. Asynchronous code _separates_ calling a function from receiving its result — but that doesn't mean multiple operations run at the same time. A nice illustration of this is the approach taken by the Zig language, which recently reintroduced `async`/`await` in a redesigned form. Zig offers two distinct calls: `async` (separates the call from the return but doesn't guarantee simultaneous execution) and `concurrent` (explicitly requires parallel execution and returns an error if the environment can't provide it). This separation makes the programmer's intent explicit: "I want to defer the result" is one thing, "I need this to run simultaneously" is another.

JavaScript doesn't have this separation at the syntax level — `async`/`await` and `Promise.all` blend both ideas together. But understanding that asynchrony and parallelism are different things helps us design FRP networks more deliberately.

### "Colors" are a language design decision

There's a classic article by Bob Nystrom called [«What Color Is Your Function?»](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/). The metaphor goes like this: every function in a language is one of two "colors" — blue (sync) or red (async). The rule: you can only call a red function from another red function. If you need to call a red function from a blue one, you'll have to repaint the blue one red. Which means everyone calling _your_ function has to become red too. And so on, up the chain.

That's exactly what happens with `async`/`await` in JavaScript and TypeScript. Async is contagious: once `getUser` becomes asynchronous, the entire calling chain has to adapt.

But here's the thing: **function "colors" are a design decision at the language syntax level, not an inescapable law of nature.** Different languages handle this differently:

- **JavaScript/TypeScript** — two colors: `function` and `async function`. Async is contagious; you can't mix them transparently.
- **Go** — "colorless" functions. Goroutines look like ordinary calls; the language hides the distinction. The tradeoff is a runtime with a scheduler and goroutines.
- **Zig** — a single function syntax, with the choice between sync/async/concurrent made at the _call site_, not the declaration. The same function can be called synchronously or asynchronously — the caller decides. Switching the I/O backend (single-thread, multi-thread, io_uring) doesn't require rewriting code.
- **Rust** — `async fn` returns a `Future` that is lazy. Two-coloredness exists, but Futures don't start running when created — only on `.await`.

Each option is a tradeoff: between explicitness and convenience, between control and simplicity, between performance and generality. JavaScript chose the path of explicit colors — and that decision is what gives rise to the whole spectrum of primitives we explore below. Each one is an attempt to answer the question: how do we describe a dependency graph in which some nodes are synchronous and some are asynchronous?

---

## 3. Callbacks

**A callback is a function passed into another function to be called upon completion.** It's historically the first and most straightforward way to describe an edge in an FRP network: "when action A finishes — run action B."

### What it looks like

```typescript
readFile("/users/1.json", (err, data) => {
  if (err) {
    handleError(err);
    return;
  }
  parseJSON(data, (err, user) => {
    if (err) {
      handleError(err);
      return;
    }
    fetchOrders(user.id, (err, orders) => {
      if (err) {
        handleError(err);
        return;
      }
      renderPage(user, orders);
    });
  });
});
```

We've described the chain `readFile → parseJSON → fetchOrders → renderPage`. Each nested callback is an edge in the graph. It works. But there are some real problems.

### Problems

**Callback hell.** Each new node in the chain adds another level of nesting. The code drifts to the right. This is the most well-known issue, but it's actually the least serious one — it's essentially cosmetic.

**Loss of composability.** A linear chain is manageable. But try expressing our example graph with callbacks: `fetchOrders` and `fetchSettings` run in parallel, the render waits for both. You'll end up with a completion counter, mutable result variables, and manual checks for whether all responses have arrived. It gets fragile fast.

**Inversion of control.** We're passing our function _into_ someone else's code. That other code decides when to call our callback, how many times, and whether to call it at all. There's no contract, no guarantees.

**No standard error handling.** Node.js invented the `(err, result)` convention. Browser APIs use separate error callbacks. Some code throws exceptions that no one can catch in an asynchronous context. There's no unified approach.

### Even so

Callbacks are a foundational building block. Every abstraction we'll look at next — promises, futures, observables, signals — relies on callbacks under the hood in one way or another. We work at a higher level of abstraction, but at the base it's always the same mechanism: "hand over a function — it will get called."

---

## 4. The Thenable pattern

A thenable is an object with a `.then()` method. It's a pattern that standardizes the interface for "when done — call next" and turns callback hell into a chain.

### The key shift

When using callbacks, we pass our function _into_ the async operation — and lose control. Thenable flips this: the async function _returns an object_, and we, on the outside, call its `.then()` method.

```typescript
// Callbacks: we pass a function in (control is with the callee)
doSomething(myCallback);

// Thenable: we get an object back (control is with the caller)
const result = doSomething();
result.then(myCallback);
```

It seems like a small thing — we just moved where the callback is passed. But it's actually a fundamental shift. Control has returned to the calling code. We decide when to subscribe. We can store the thenable in a variable, pass it somewhere else, subscribe later.

### Chaining

If `.then()` returns a new thenable, we can build chains:

```typescript
fetchUser(id)
  .then((user) => fetchOrders(user.id))
  .then((orders) => renderPage(orders));
```

The same graph that used to be expressed with nested callbacks is now written linearly. It reads top to bottom, doesn't drift to the right.

### Thenable ≠ Promise

An important point: thenable is an _interface_, not a specific implementation. Any object with a `.then()` method qualifies as a thenable:

```typescript
interface Thenable<T> {
  then(onFulfilled?: (value: T) => any, onRejected?: (reason: any) => any): any;
}
```

It's a minimal contract for interoperability. Thanks to such a simple interface, different libraries and native implementations can work with each other seamlessly.

---

## 5. Pipe Operator

The TC39 Pipe Operator (`|>`) is a proposal for JavaScript that addresses the function composition problem at the language syntax level.

### The problem

Nested function calls read inside-out:

```typescript
render(format(capitalize(trim(input))));
//  4.     3.       2.       1.        ← execution order
```

To understand the order, you have to start from the innermost parentheses. That's unnatural — people are used to reading left to right, top to bottom.

### The solution

Pipe operator (Hack-style, the current TC39 favorite):

```typescript
input |> trim(%) |> capitalize(%) |> format(%) |> render(%)
// 1.      2.          3.             4.         ← execution order
```

`%` is a placeholder for the result of the previous step. The data flow reads exactly in execution order — like an FRP graph, left to right.

### Context

The pipe operator is primarily about composition: data flows left to right through a sequence of transformations. The same idea as thenable chains, but at the language syntax level.

The proposal is at Stage 2 in TC39 at the moment, still a long way from being the standard. However, the idea has already made its way into the ecosystem through libraries: RxJS `pipe()`, fp-ts `pipe()`, Ramda `pipe()`.

In other languages, the pipe operator is part of the syntax: Elixir (`|>`), F# (`|>`), OCaml (`|>`), Elm (`|>`).

---

## 6. Promise

Promise is arguably the most important asynchronous programming primitive in JavaScript. Let's look at it from three angles.

### Promise as a data structure

A promise is a container that, at any given moment, is in one of three states:

```text
                   ┌──→ fulfilled (value received)
    pending ───────┤
                   └──→ rejected  (error occurred)
```

The transition from `pending` to `fulfilled` or `rejected` is one-time and irreversible. Once a promise resolves with the value `42`, it holds `42` forever. It can't be overwritten, rolled back, or reset. **Immutable after settlement.**

### Promise as a contract

A set of guarantees that callbacks never had:

- The `.then()` callback is invoked **exactly once** — not zero, not two.
- The invocation is always **asynchronous** (via a microtask), even if the promise is already resolved at the time of subscription. This guarantees a predictable execution order.
- `.catch()` provides standardized error handling. An error not caught in one `.then()` propagates down the chain.
- `.finally()` provides cleanup logic, called regardless of outcome.

### Promise as an FRP network primitive

Let's return to our example graph:

```typescript
const userPromise = fetchUser(id);

const ordersPromise = userPromise.then((user) => fetchOrders(user.id));
const settingsPromise = userPromise.then((user) => fetchSettings(user.id));

Promise.all([ordersPromise, settingsPromise]).then(([orders, settings]) =>
  renderPage(orders, settings),
);
```

In graph terms:

- `.then()` — an edge: "action B depends on the result of action A."
- `Promise.all()` — a join node: "wait for all incoming edges to complete, then continue."
- `ordersPromise` and `settingsPromise` are independent of each other — the runtime runs them in parallel.

Other combinators:

| Combinator             | Semantics                                                          |
| ---------------------- | ------------------------------------------------------------------ |
| `Promise.all()`        | Wait for all. If any one rejects — everything rejects              |
| `Promise.race()`       | Whoever finishes first — that's the result (fulfilled or rejected) |
| `Promise.allSettled()` | Wait for all, including failures                                   |
| `Promise.any()`        | First successful one. If all reject — AggregateError               |

### Limitations

Promises have two fundamental limitations worth keeping in mind.

**Eagerness.** A promise starts executing the moment it's created. `new Promise((resolve) => { ... })` — the code inside the constructor runs immediately. You can't create a promise, set it aside, and start it later. There's no "start" button. This means describing the graph and running it aren't separated — each node starts the moment it's described.

**One-shot nature.** A promise can resolve exactly once with a single value. It can't emit a stream of values. For one-off operations (an HTTP request) that's fine, but for a stream of clicks, WebSocket messages, or timer ticks — it doesn't fit.

These limitations are deliberate design choices, not bugs. But they do motivate the existence of other primitives.

---

## 7. Future

A Future is conceptually the same as "a value that will be obtained in the future," but with one key difference: **laziness**. The computation doesn't begin until someone explicitly asks for it.

> **Note:** Future is **not** a native JavaScript construct. Unlike `Promise`, which is built into the language, Future comes from external libraries or other languages/platforms. The examples below use it as a conceptual contrast to Promise.

### Eager vs Lazy

```typescript
// Promise — eager: the request is already in flight
const p = new Promise((resolve) => {
  fetch("/api/user").then((r) => resolve(r.json()));
});
// ↑ by this point the request is in flight, even if the result isn't needed yet

// Future — lazy: so far it's just a recipe
const f = Future((resolve) => {
  fetch("/api/user").then((r) => resolve(r.json()));
});
// ↑ nothing has happened

f.run(); // ← now the request fires
```

### What laziness gives us

**Separation of description and execution.** You can fully describe the dependency graph — all nodes and edges — and only then run it. The runtime can analyze the entire graph before starting execution and optimize accordingly.

**Re-execution.** A promise is one-shot: once resolved, it holds that result forever. A Future is a recipe; it can be executed again. `f.run()` → a result. `f.run()` once more → a fresh result. This makes Future well suited for retry logic, polling, data refresh.

**Cancellation.** If a Future hasn't been started yet, there's nothing to cancel. If it has, the implementation can provide a cancellation mechanism. Promises have no native cancellation.

**Referential transparency.** A concept from functional programming: an expression is referentially transparent if it can be replaced by its value without changing program behavior. A promise is not referentially transparent because creating it has a side effect (it starts the computation). A Future is referentially transparent because creating it starts nothing.

### Comparison with Promise

| Property                 | Promise           | Future          |
| ------------------------ | ----------------- | --------------- |
| Execution                | Eager (immediate) | Lazy (deferred) |
| Re-execution             | Not possible      | Possible        |
| Cancellation             | No (natively)     | Yes             |
| Referential transparency | No                | Yes             |
| Number of values         | One               | One             |

### Ecosystem

- [Fluture](https://github.com/fluture-js/Fluture) — the most complete implementation for JS
- [fp-ts](https://gcanti.github.io/fp-ts/) — `Task` and `TaskEither` types
- Analogues in other languages: `IO` in Haskell, `Task` in Scala (cats-effect)

Future solves the eagerness problem but doesn't solve the one-shot problem. Like a promise, a Future describes a _single_ value. What if the data source produces a _stream_ of values over time?

---

## 8. Observable

Observable is one of the most elegant abstractions in programming. Its beauty lies in how remarkably powerful behavior emerges from such a simple structure.

> **Note:** Observable is **not** native to JavaScript. It is provided by libraries such as RxJS.

### Structure

Here's the entirety of an Observable:

```typescript
type Observer<T> = {
  next: (value: T) => void; // next value
  error: (err: any) => void; // error (terminal)
  complete: () => void; // completion (terminal)
};

type Observable<T> = {
  subscribe: (observer: Observer<T>) => Unsubscribe;
};
```

An Observable is an object with a single `subscribe` method that takes an observer (an object with three callbacks) and returns an unsubscribe function. Essentially — a function that accepts three callbacks and returns teardown logic. Recognize it? The very same callbacks we started with, wrapped in a standardized contract.

### Key properties

**Laziness.** Like a Future, an Observable is lazy. Until someone calls `subscribe()`, nothing happens. Subscribing _is_ starting.

**Multiple values.** Unlike Promise and Future, an Observable can emit 0, 1, 10, infinitely many values. It's a fundamentally different model: not "one value someday" but "a stream of values over time."

**Push model.** The source decides when to send the next value. The subscriber doesn't request data — it _receives_ it. (As opposed to the pull model, where the consumer asks for the next element, as with iterators.)

### Operators: nodes and edges of the FRP network

On top of the base structure, a set of operators is defined — functions that take an Observable and return a new Observable:

```typescript
const search$ = fromEvent(input, "keyup").pipe(
  map((e) => e.target.value), // transform: event → string
  debounceTime(300), // wait: 300ms of silence
  distinctUntilChanged(), // deduplication
  switchMap((q) => fromFetch(`/api/search?q=${q}`)), // nested async
  map((res) => res.items), // transform result
);

search$.subscribe((items) => render(items)); // start the network
```

Each operator describes a node or edge in the graph. The main ones:

| Operator        | What it does                                                            |
| --------------- | ----------------------------------------------------------------------- |
| `map`           | Transforms each value                                                   |
| `filter`        | Passes only matching values                                             |
| `mergeMap`      | Each value spawns a new Observable; results merge                       |
| `switchMap`     | Like `mergeMap`, but cancels the previous inner Observable on new input |
| `combineLatest` | Takes the latest values from multiple Observables and combines them     |
| `merge`         | Merges several streams into one                                         |
| `zip`           | Pairs values from multiple streams element by element                   |

### Emergence

From a single primitive (`subscribe`/`observer`) and a set of combinators (operators), the ability to describe _any_ FRP network emerges. HTTP requests, WebSocket streams, DOM events, timers, animations, state management, routing — all through a single primitive.

This is what complex systems theory calls emergence: from simple elements following simple rules, complex behavior arises that isn't obvious from the properties of the individual elements.

### Comparison table

|              | Promise | Future | Observable        |
| ------------ | ------- | ------ | ----------------- |
| Execution    | Eager   | Lazy   | Lazy              |
| Values       | 1       | 1      | 0..∞              |
| Model        | —       | —      | Push              |
| Cancellation | No      | Yes    | Yes (unsubscribe) |

### Observables describe actions, not state

An important point to keep in mind: an Observable describes a **set of actions** — discrete events that occur over time. Each `next()` is an action: "a click happened," "a message arrived," "the server responded." An Observable doesn't hold a "current value" — it records that _something happened_.

This is a great fit for events. But problems arise when Observables are used to model _state_ — something that "currently looks like this." Consider this example:

```typescript
const price$ = fromWebSocket("/prices"); // stream of prices
const quantity$ = fromInput("#quantity"); // stream of quantity input
const total$ = combineLatest([price$, quantity$]).pipe(
  map(([price, quantity]) => price * quantity),
);
```

`combineLatest` combines the latest values from two streams. But what does "latest value" mean for a stream of _events_? If `price$` updates while `quantity$` hasn't yet, `total$` recalculates with the new price and the _old_ quantity. That might be correct, or it might produce a **glitch** — a momentary inconsistent state.

### The glitch problem

A glitch occurs when a node in the FRP network recalculates before all of its dependencies have updated. Here's a simple example:

```typescript
const a$ = new BehaviorSubject(1);
const b$ = a$.pipe(map((a) => a * 2)); // b = a * 2
const c$ = combineLatest([a$, b$]).pipe(
  map(([a, b]) => a + b), // c = a + b, expecting a + a * 2 = 3a
);
```

When `a$` emits a new value (say, 2), here's what happens: `combineLatest` receives the new value of `a$` (2) and the _still-old_ value of `b$` (2, because `b$` hasn't recalculated yet). For a brief moment `c$` computes as 2 + 2 = 4, even though the correct answer is 2 + 4 = 6. That's a glitch: subscribers of `c$` will see a transient incorrect value.

Why does this happen? Because Observable models _actions_ (events), and we're trying to use it as _state_. Actions have no notion of "all dependencies should update synchronously" — each event is processed as it arrives. An Observable doesn't know the topology of the entire graph — each operator only sees its own immediate inputs.

This is a fundamental limitation of the push model that Observable operates in. And it's precisely what motivates the creation of Signals, which we'll look at next.

### Limitations

- Steep learning curve: "what's subscribed? when? how many subscribers? who unsubscribed?" — in complex chains, these questions can be hard to answer.
- Glitch updates when modeling state through event streams.
- Overkill for simple cases: a single HTTP request — Promise is simpler and sufficient.

### Ecosystem

- [RxJS](https://rxjs.dev/) — the most mature implementation (hundreds of operators)
- [TC39 Observable Proposal (Stage 1)](https://github.com/tc39/proposal-observable) — Observable may become native someday
- [Most.js](https://github.com/cujojs/most) — an alternative, higher-performance implementation

---

## 9. Signals

Signal is a reactivity primitive that has experienced a true renaissance in recent years. Angular moved to signals, Solid.js is built around them, Preact Signals exists, and Vue's `ref()`/`computed()` are essentially signals under a different name.

> **Note:** Signals are **not yet** native to JavaScript, though there is an active [TC39 proposal](https://github.com/tc39/proposal-signals) to add them to the language.

### What is a Signal

```typescript
interface Signal<T> {
  get value(): T; // synchronous access to the current value
}

interface WritableSignal<T> extends Signal<T> {
  set(value: T): void;
}

// Usage
const count = signal(0);
console.log(count.value); // 0
count.set(5);
console.log(count.value); // 5
```

A Signal is a container that **holds a current value** and **automatically notifies dependents** when it changes.

The key difference from Observable: an Observable has no current value. An Observable is a stream of events, and if you subscribe at some point, you only get _future_ events. A Signal always has a current value, available _synchronously_.

### Computed Signals

Derived (computed) signals are what makes signals a tool for describing FRP networks:

```typescript
const firstName = signal("John");
const lastName = signal("Doe");

const fullName = computed(() => firstName.value + " " + lastName.value);
// fullName.value === 'John Doe'

firstName.set("Jane");
// fullName.value === 'Jane Doe'  ← recalculated automatically
```

`fullName` is a node in the FRP graph that depends on `firstName` and `lastName`. The reactivity system _automatically_ tracks which signals were read inside the `computed`, and builds the dependency graph for us. This is called **automatic dependency tracking** — there's no need to explicitly declare dependencies; they're determined at execution time.

### Glitch-free updates

Imagine: there's a signal `a`, `b` depends on it, and `c` depends on both `a` and `b`. When `a` changes, `b` needs to update, then `c`. If `c` updated _before_ `b`, it would see the new value of `a` and the old value of `b` — an inconsistency known as a **glitch**.

Signals solve this through batching: updates are collected and applied in the correct topological order. `c` is guaranteed to recalculate only after `b`.

### Observable vs Signal

| Aspect          | Observable                     | Signal                          |
| --------------- | ------------------------------ | ------------------------------- |
| Model           | Push (event stream)            | Pull + push-notification        |
| Current value   | No (events only)               | Always available                |
| Glitch-free     | Depends on the operator        | Yes (batching)                  |
| Best suited for | Events, streams, async         | State, UI                       |
| Subscription    | Manual (subscribe/unsubscribe) | Automatic (dependency tracking) |

### Not a replacement — a complement

Observables and Signals aren't competitors. They cover two different aspects of reactivity:

**Observable** — for _events_: clicks, WebSocket messages, timers, HTTP responses. Discrete points in time. Between two events there may be no "current value."

**Signal** — for _state_: the current user, the selected theme, a form value, a cart counter. A current value is always there.

Together they cover both fundamental facets of reactivity: **events** and **state**. In modern frameworks you'll typically find both: signals for state, observable-like mechanisms for events and side effects.

### Ecosystem

| Framework / Library | Implementation                                               |
| ------------------- | ------------------------------------------------------------ |
| Angular             | `signal()`, `computed()`, `effect()`                         |
| Solid.js            | `createSignal()`, `createMemo()`, `createEffect()`           |
| Preact              | `@preact/signals`                                            |
| Vue                 | `ref()`, `computed()`, `watch()`                             |
| TC39                | [Signals Proposal](https://github.com/tc39/proposal-signals) |

---

## 10. Async Signals and what's ahead

The signals we looked at above are synchronous. Set a value — it updates instantly. Read a computed — it recalculates synchronously. That works beautifully for UI state. But in the real world, data comes from the network, from databases, from APIs — and all of those operations are asynchronous.

### The problem

```typescript
// ✗ Not possible — computed is synchronous
const user = computed(async () => await fetchUser(id.value));
```

`computed` has to return a value right now. Not a promise, not "later" — right now. And `fetchUser` is an asynchronous operation.

### The AsyncState pattern

The solution is a signal that holds not just `T`, but a loading state:

```typescript
type AsyncState<T> =
  | { status: "pending" } // loading
  | { status: "fulfilled"; value: T } // loaded
  | { status: "rejected"; error: Error }; // error

const user: Signal<AsyncState<User>> = asyncComputed(() => fetchUser(id.value));

// user.value.status === 'pending'   → show skeleton
// user.value.status === 'fulfilled' → render data
// user.value.status === 'rejected'  → show error
```

### How frameworks handle this today

| Framework | API                | Approach                                        |
| --------- | ------------------ | ----------------------------------------------- |
| Angular   | `resource()`       | Signal with loading/loaded/error states         |
| Solid.js  | `createResource()` | Resource with Suspense integration              |
| React     | `use()` + Suspense | Promise "unwrapped" through a Suspense boundary |

### Primitives converge

At the async signals level, all the primitives we've explored begin to _flow into each other_:

- An Observable stream from a WebSocket can **update a Signal**
- A Signal change can **spawn a Promise** (HTTP request)
- A Promise can **resolve the AsyncState** inside a Signal
- An Observable can **project into a Signal** via `toSignal()`

The boundaries between primitives aren't rigid. And there are reasons to expect that in the future, the boundary between synchronous and asynchronous reactivity will gradually blur at the level of language or framework primitives.

---

## Summary

We've walked through a spectrum of primitives, each offering its own way to describe an FRP network — a dependency graph between actions in a program.

Each successive primitive didn't replace the one before it — it added a new way to describe the nodes and edges of the network. Understanding the full spectrum lets you choose the right tool for a given task: not because one tool is "better," but because you understand which part of the graph you need to describe, and which primitive does it most naturally.

---

## Further reading

- Bob Nystrom — [«What Color Is Your Function?»](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/)
- André Staltz — [«The introduction to Reactive Programming you've been missing»](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
- Ryan Carniato — [«A Hands-on Introduction to Fine-Grained Reactivity»](https://dev.to/ryansolid/a-hands-on-introduction-to-fine-grained-reactivity-3ndf)
- [TC39 Observable Proposal](https://github.com/tc39/proposal-observable)
- [TC39 Signals Proposal](https://github.com/tc39/proposal-signals)
- [TC39 Pipe Operator Proposal](https://github.com/tc39/proposal-pipe-operator)
- [RxJS Documentation](https://rxjs.dev/guide/overview)
- [Fluture — Fantasy Land compliant Futures](https://github.com/fluture-js/Fluture)
- Charles Fonseca — [«Async/Await is finally back in Zig»](https://dev.to/barddoo/asyncawait-is-finally-back-in-zig-23hi) — on the distinction between async and concurrent, colorless functions
- Andrew Kelley — [«Zig's New Async I/O»](https://andrewkelley.me/post/zig-new-async-io-text-version.html) — the design of Zig's new async system by the language's creator
