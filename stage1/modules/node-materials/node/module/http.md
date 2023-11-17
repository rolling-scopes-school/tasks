## HTTP Module

[HOME](../../README.md)

In Node.js, the `http` module is used for working with servers and the HTTP protocol.

```js
const http = require("http");

const PORT = 3000;

const requestHandler = (request, response) => {
  const { method, url } = request;
  console.log(`Received ${method} request to ${url}`);
  response.write("Hello Node.js");
  response.end("Bye!");
};

const server = http.createServer(requestHandler);

server.listen(PORT, "localhost", () => {
  console.log(`Server is running on port ${PORT}`);
});
```

Let's go through this code.
We import the `http` module:

```js
const http = require("http");
```

Using its `createServer()` method, we create an HTTP server:

```js
const requestHandler = (request, response) => {
  const { method, url } = request;
  console.log(`Received ${method} request to ${url}`);
  response.write("Hello Node.js");
  response.end("Bye!");
};

const server = http.createServer(requestHandler);
```

This method takes a callback function `requestHandler` with two parameters, `request` and `response` (you can use any names).

- `request` holds information about the request
- `response` is responsible for sending the response

Our `requestHandler` logs the request method and the address of the requested resource to the console. It also sends the messages `Hello from Node.js` and `Bye!` as responses.  
The `response.write()` method writes the message to the response body, and `response.end()` informs the server that the headers and body of the response are written and it can be sent.  
Note that `response.end()` should terminate every response. Without it, the request processing will "hang" — the request will be received but not fully processed.

```js
const requestHandler = (request, response) => {
  const { method, url } = request;
  console.log(`Received ${method} request to ${url}`);
  response.write("Hello Node.js");
  response.end("Bye!");
};
```

The server's `listen` method starts it, and it begins to listen on the specified port for connections. It has multiple signatures; in our case, it takes three parameters: the local port, the local address, and a callback function that runs when it starts listening for connections.

```js
server.listen(PORT, "localhost", () => {
  console.log(`Server is running on port ${PORT}`);
});
```

Run the file with the code, open your browser, and go to the address `localhost:3000/some/page`.  
Note that to run the server with different code, you need to stop it and restart it. You already know how to terminate a Node.js process. Only one server can be running on a port at a time.

In the `write` and `end` methods, you can pass a string containing HTML tags with inline styles. These tags will be correctly processed by the browser.

```js
const http = require("http");

const PORT = 3000;

const requestHandler = (request, response) => {
  const { method, url } = request;
  const heading = `<h1 style="color: red">${url} page</h1>`;
  const content = `<div style="background-color: green; width: 100px; height: 100px">Green block 100px x 100px</div>`;
  console.log(`Received ${method} request to ${url}`);
  response.write(heading);
  response.end(content);
};

const server = http.createServer(requestHandler);

server.listen(PORT, "localhost", () => {
  console.log(`Server is running on port ${PORT}`);
});
```

By revisiting the page `localhost:3000/some/page`, you will see the rendered markup with inline styles received from the server.

## Project

[Github Application](../projects/github-app.md)
