## Events

[HOME](../README.md)

The `Events` module is designed to work with events.

We have already encountered events earlier when reading a file:

```js
const { stdin, stdout } = process;
stdin.on("data", (data) => stdout.write(data));
```

and when displaying a message upon the program's completion:

```js
const { stdout } = process;
process.on("exit", () => stdout.write("Good luck learning Node.js!"));
```

The `Events` module allows you to create and generate your own events.

Let's import the `EventEmitter` class from the `events` module:

```js
const EventEmitter = require("events");
```

Now, let's create an instance of `EventEmitter` called `emitter`:

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();
```

It has two useful methods:

- `emit(<event>)` - generates the event, causing the event handlers for this event to be triggered for subscribers
- `on(<event>, <handler>)` - subscribes to events (executes the `handler` function when the `event` occurs)

The `on(<event>, <handler>)` method has two arguments:

- `event` - the name of the event
- `handler` - the event handler (the function that will run when the event occurs)

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("start", () => console.log("Start"));
```

We subscribed to the `start` event for the `emitter` object. Now we need to generate this event to trigger its handler. To do this, we call the `emit()` method, specifying the event name as an argument:

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("start", () => console.log("Start"));

emitter.emit("start");
```

When we run the code file, we see the 'Start' message in the console. The custom event works.

When calling the `emit()` method for an event, you can pass some additional value (`payload`). This value will be passed as an argument to the handler function:

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("start", (message) => console.log(message));

emitter.emit("start", "Start message");
```

You can pass multiple values as well:

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("start", (first, second) => console.log(`${first} and ${second}`));

emitter.emit("start", 1, 2); // 1 and 2
```

When subscribing to an event, its handler is added to the handler queue. Multiple handlers (by default, **no more than 10**, but this is not a strict limit) can be assigned to the same event. Handlers are triggered in the order they were assigned:

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();

const handler1 = () => console.log(1);
const handler2 = () => console.log(2);

emitter.on("start", handler1);
emitter.on("start", handler2);

emitter.emit("start"); // outputs 1, then 2
```

To place a handler assigned later at the beginning of the queue, the `prependListener` method is used:

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();

const handler1 = () => console.log(1);
const handler2 = () => console.log(2);
const handler3 = () => console.log(3);
const handler4 = () => console.log(4);

emitter.on("start", handler1);
emitter.on("start", handler2);
emitter.on("start", handler3);
emitter.prependListener("start", handler4); // assigned later, triggered earlier

emitter.emit("start"); // outputs numbers in the following order: 4 => 1 => 2 => 3
```

The same handler can be assigned multiple times:

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();

const handler = () => console.log(1);

emitter.on("start", handler);
emitter.on("start", handler);
emitter.on("start", handler);

emitter.emit("start"); // outputs 1 three times
```

The handler is triggered for each event generation:

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("start", (message) => console.log(message));

emitter.emit("start", "Hello"); // Hello
emitter.emit("start", "from"); // from
emitter.emit("start", "Node.js"); // Node.js
```

If you want the handler to be triggered only once, use the `once()` method for subscription:

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.once("start", (message) => console.log(message));

emitter.emit("start", "Hello"); // works only for this call
emitter.emit("start", "from");
emitter.emit("start", "Node.js");
```

To remove a specific event handler function from the queue, the `off()` method of the `EventEmitter` instance (or its alias `removeListener`) is used:

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();

const handler = (message) => console.log(message);

emitter.on("start", handler);

emitter.emit("start", "Hello"); // Hello

emitter.off("start", handler); // further events will not be handled

emitter.emit("start", "from");
emitter.emit("start", "Node.js");
```

Sometimes, we want our custom class to have the `EventEmitter` API:

```js
const EventEmitter = require("events");

class User extends EventEmitter {
  constructor(name, password) {
    super();
    this.name = name;
    this.password = password;
  }

  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const user = new User("Vasya", 12345);

user.on("greetings", user.sayHi);

user.emit("greetings"); // Hi! My name is Vasya
```

Notice anything strange? Usually, when passing an object's method for use as an event handler, the context is lost. But not in this case because `this` inside the event handler function refers to the `EventEmitter` instance (in our case, the `user` object).
