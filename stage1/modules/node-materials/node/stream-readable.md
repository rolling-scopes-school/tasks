## Readable Stream

[HOME](../README.md)

As the name suggests, a readable stream is used for reading data. The data source can be anything: user input, a file, an incoming user request being processed on the server, another stream, an asynchronous iterator, and so on.

Let's create a program that reads a fairly large file and outputs its contents to the console. To do this, we'll use the `fs` module, but instead of the `readFile()` method, we'll use the `createReadStream()` method, specifying the file name `source.txt` as its parameter, from which we will read information.

Since the file is in the same directory as the code file, it is not necessary to specify the path to the file:

```js
const fs = require("fs");
const readableStream = fs.createReadStream("source.txt");
```

A readable stream has a `data` event that is emitted when the stream has read a chunk of data and is ready to deliver it to the consumer of that data.  
When this event occurs, we will output the received part of the data to the console:

```js
const fs = require("fs");
const readableStream = fs.createReadStream("source.txt");
readableStream.on("data", (chunk) => console.log(chunk));
```

In the console, instead of text, there are `Buffer` objects. Previously, we solved this problem using the `data.toString()` method, but you can convert a `Buffer` to a string in another way by specifying the encoding `'utf-8'` as the second parameter of the `createReadStream()` method.

How can we be sure that the data is coming in chunks?  
Let's output to the console not the data itself, but the length of each incoming data chunk:

```js
const fs = require("fs");
const readableStream = fs.createReadStream("source.txt");
readableStream.on("data", (chunk) => console.log(chunk.length));
```

If the file with the data is large enough, you can see that it comes in chunks (chunks) of 64kB.

To collect all these parts together, let's define a variable `data`. We'll initialize it with an empty string. We'll concatenate each incoming data chunk to `data`:

```js
const fs = require("fs");
const stream = fs.createReadStream("source.txt", "utf-8");
let data = "";
stream.on("data", (chunk) => (data += chunk));
```

Since we are dealing with a data stream, we need to know when the stream will end. For this, the stream has an `end` event. This event is triggered when all the data has already been passed.

When the `end` event occurs, we'll output a message to the console and the length of the received data:

```js
const fs = require("fs");

const stream = fs.createReadStream("source.txt", "utf-8");

let data = "";

stream.on("data", (chunk) => (data += chunk));
stream.on("end", () => console.log("End", data.length));
```

Let's handle a possible error. If an error occurs, an `error` event will be generated.

When an error occurs, we'll output a message and the error text to the console. To trigger an error, specify a nonexistent file name:

```js
const fs = require("fs");

const stream = fs.createReadStream("source2.txt", "utf-8");

let data = "";

stream.on("data", (chunk) => (data += chunk));
stream.on("end", () => console.log("End", data));
stream.on("error", (error) => console.log("Error", error.message));
```
