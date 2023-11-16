## Timer App

[HOME](../../README.md)

Directly creating objects based on the `EventEmitter` class is extremely rare.
More often, the interface for working with events is added to other objects. This is done through inheritance.
Let's create a class called `Timer` that will inherit from `EventEmitter`, and, as a result, its instances will have the `emit()` and `on()` methods:

```js
const EventEmitter = require("events");

class Timer extends EventEmitter {
  constructor(total, interval) {
    super();
    this.total = total;
    this.interval = interval;
    this.ticks = 0;
  }

  _tick() {
    this.ticks += 1;
    if (this.ticks <= this.total) {
      this.emit("tick", this.ticks);
    } else {
      this.end();
    }
  }

  start() {
    this.intervalId = setInterval(() => this._tick(), this.interval);
    this.emit("start");
  }

  end() {
    clearInterval(this.intervalId);
    this.emit("end");
  }
}
```

The constructor of the `Timer` class takes 2 arguments:

- `total` — the total number of timer triggers
- `interval` — the interval between triggers

An instance of the `Timer` class has three methods:

- `start()` — starts the timer
- `_tick()` — an internal method of the timer
- `end()` — stops the timer

The `start()` method has a variable `intervalId` containing the timer identifier set by `setInterval()`, which calls the `tick()` method every second. Also, the `start()` method emits a `start` event.   
The `tick()` method increments the ticks variable by one and checks if the value specified in the constructor's property `total` has been reached.   
If it hasn't been reached, the `tick()` method emits a `tick` event, with the current value of the `ticks` variable as the payload.   
If the `total` value is reached, the `tick()` method calls the `end()` method.   
The `end()` method clears the `setInterval()` timer and emits an `end` event.

Let's create an instance of the `Timer` class:

```js
// a timer for 10 triggers with an interval of 500 ms
const timer = new Timer(10, 500);
```

Let's subscribe to its events:

```js
timer.once("start", () => console.log("Start"));
timer.on("tick", (tick) => console.log(tick));
timer.once("end", () => console.log("End"));
```

Let's start the timer:

```js
timer.start();
```

The timer is running.

The operation of most objects in Node.js is based on events, and they work with events because these objects inherit the `EventEmitter` API.
