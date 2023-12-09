## Input/Output Operations

[HOME](../README.md)

### I/O (Input/Output)

I/O stands for input/output.

- `input` - obtaining information from network resources, reading from disk or file, or keyboard input
- `output` - displaying information, such as saving to disk or writing to a file, or output to the console

These are the most time-consuming stages of a program's operation. Compare:
![](../node/images/io.png)

### Blocking I/O

Input/output operations occur synchronously, one after another:

```js
const connection = db.connect(); // connect to the database
const users = connection.query("SELECT * FROM users"); // make a query
console.log(users); // display information in the console
```

This is a simple implementation but a very time-consuming one: the program waits for **250 million processor cycles** until a connection to the database occurs.  
The second problem with synchronous I/O is that it is not fault-tolerant. If the program cannot connect to the database or if the requested information is not found in the database, the program will stop working.

Synchronous or blocking I/O in Node.js is used very rarely:

- When you need to get data without which the program cannot start. For example, information about settings
- It can be used in console applications with only one user

### Non-blocking I/O

Non-blocking I/O occurs asynchronously:

```js
db.connect((error, connection) => {
  if (error) throw error;
  connection.query("SELECT * FROM users", (users) => {
    console.log(users);
  });
});
```

In this example, the program calls `db.connect()`, puts its callback in the queue, and proceeds to execute the remaining synchronous part of the code. When all synchronous code is executed, the program returns to execute the `db.connect()` callback.

The first argument of the callback passed to `db.connect()` is an error. If an error occurs, in our example, an "exception forwarding" occurs, as a result of which this error will either be handled in the code above or will throw in the runtime, causing the application to crash.

If there is no error - `error === null` (in a logical context `false`) - the function proceeds to work with the database: performs `connection.query()` and `console.log()`.

Node.js is based on **non-blocking I/O** and **asynchrony**. Thanks to this, Node.js applications work quickly and can handle a large number of client requests in a unit of time.
