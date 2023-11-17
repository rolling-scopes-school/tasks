## Github App

[HOME](../../README.md)

Let's create a console application that, as a command-line argument, will take a GitHub username and display a list of that user's repositories.

To achieve this, we'll use the GitHub API. The request `https://api.github.com/users/USERNAME/repos` returns a list of repositories for the user whose `USERNAME` is specified in the link.

1. Start by creating a new Node.js application

Create a folder named github-app, open it in VS Code, and run the following command in the terminal:

```
npm init -y
```

Create two files:

- `app.js` - the main application file
- `github.js` - the file where we write the logic for interacting with the API

2. Let's start with the `app.js` file

Import the `github` module into it. Since this is a manually created module, specify the path to the module code file as a parameter to the `require()` method:

```js
const github = require("./github");
```

Create a variable `username` to store the command-line argument passed when the program is launched:

```js
const username = process.argv[2];
```

Use the imported `github` object, which has a `getRepos()` property - a function that returns a list of user repositories.  
The parameters of the `getRepos()` function are `username` - the username and a callback function taking two parameters: `error` - an error, and `repos` - the received data, in our case, a list of repositories.
In the callback function, let's handle the error and print the names of the repositories to the console:

```js
github.getRepos(username, (error, repos) => {
  if (error) return console.error(error.message);

  repos.forEach((repo) => console.log(repo.name));
});
```

3. Move on to the `github.js` file

Our application will communicate with the server over the `https` protocol. For this, Node.js has a built-in `https module`, similar to the [HTTP Module](../module/http.md).

To send a request to the API, we'll use the `get()` method, which allows us to retrieve data from the server.
Import the `https` module and write the code for the `getRepos()` function. The function parameter is `username` - the GitHub username.
The `https.get()` method has two parameters: the URL to which the request is sent and a callback function taking one parameter - the server response, abbreviated as `res`.

The `res.statusCode` property returns the server response. A response of `200` indicates a successful connection, while any other response indicates a connection problem.
Export the `github` module as an object with a `getRepos` property and the value of `getRepos`:

```js
const https = require("https");
function getRepos(username) {
  https.get(`https://api.github.com/users/${username}/repos`, (res) => {
    console.log(res.statusCode);
  });
}
module.exports = { getRepos };
```

Run the `app` file. Specify a well-known repository as a command-line argument when running the file:

```
node app goldbergyoni
```

The application returns a `403` error.  
The response code for the error status `HTTP 403 Forbidden` indicates that the server understood the request but refuses to authorize it.  
However, if we try to request the same data from the browser by visiting the link https://api.github.com/users/goldbergyoni/repos, we get the page with the data we need.

To make a request to the API, we need to specify the `User-Agent` header. While the browser adds this header automatically when navigating to a link, in a Node.js application, we need to specify it.

Before sending the request, create an `option` object that we'll send along with the request:

```js
const option = {
  hostname: "api.github.com",
  path: `/users/${username}/repos`,
  headers: {
    "User-Agent": "github-app",
  },
};
```

Use the `option` object as the first parameter in `the https.get` method. The application returns a `200` status, indicating a successful connection.

4. Handling incoming data

Almost everything in Node.js, including communication with the server, is implemented asynchronously, using events and streams. Information from the server comes in parts.  
The server response (`res`) has a `data` event, which fires when a part of the requested information comes from the server. Subscribe to this event and print the received data to the console:

```js
function getRepos(username) {
  const option = {
    hostname: "api.github.com",
    path: `/users/${username}/repos`,
    headers: {
      "User-Agent": "github-app",
    },
  };
  https.get(option, (res) => {
    res.on("data", (data) => console.log(data));
  });
}
```

In the console, you see several `Buffer` objects. You can convert the data to text either by using the `data.toString()` method or by using the `res.setEncoding('utf-8')` method.

To concatenate the data fragments, create a variable `body = ''`, and append all data fragments to it:

```js
function getRepos(username) {
  const option = {
    hostname: "api.github.com",
    path: `/users/${username}/repos`,
    headers: {
      "User-Agent": "github-app",
    },
  };
  https.get(option, (res) => {
    res.setEncoding("utf-8");
    let body = "";
    res.on("data", (data) => (body += data));
  });
}
```

The response (`res`) method has an `end` event, which triggers when the data transmission is complete.  
Upon the occurrence of this event, use the `JSON.parse(body)` method to convert the received data into an array:

```js
function getRepos(username) {
  let result;
  const option = {
    hostname: "api.github.com",
    path: `/users/${username}/repos`,
    headers: {
      "User-Agent": "github-app",
    },
  };
  https.get(option, (res) => {
    res.setEncoding("utf-8");
    let body = "";
    res.on("data", (data) => (body += data));
    res.on("end", () => {
      result = JSON.parse(body);
    });
  });
}
```

5. Passing data to the `app` module

To pass the obtained data to the `app` module, which imports the `github` module, note that the `app` module expects the `getRepos()` function with two parameters - `username` and a callback function that also has two parameters `(error, repos)`. This callback function needs to be specified as a parameter to the `getRepos()` function in the `github` module. Let's name it `done` - a standard name for such functions.

Inside the response method (`res`), upon the occurrence of the `end` event, call the `done(null, result)` function. The first parameter of the function is `null` - no error, and the second parameter is `result` - an array of repositories:

```js
function getRepos(username, done) {
  const option = {
    hostname: "api.github.com",
    path: `/users/${username}/repos`,
    headers: {
      "User-Agent": "github-app",
    },
  };
  https.get(option, (res) => {
    res.setEncoding("utf-8");
    let body = "";
    res.on("data", (data) => (body += data));
    res.on("end", () => {
      const result = JSON.parse(body);
      done(null, result);
    });
  });
}
```

6. Error Handling

- The application is launched without a username
- An error occurs when sending a request if a nonexistent username is specified
- An error occurs when receiving a response from the server
- An error occurs when converting the received data into an array

Handle errors in the `github` module and pass them to the `app` module, specifying them as the first parameter of the `done()` function.

1. To handle the error when the application is launched without a username, check if the `username` parameter is present in the `done()` function:

```js
if (!username) return done(new Error("Username is required"));
```

2. Request error - the `error` event of the `request` method.

Create a variable `request` and set its value to the `https.get()` method:

```js
req.on("error", (error) => done(new Error("Failed to send request")));
```

3. An error in receiving a response from the server is indicated by a response status other than `200`:

```js
if (res.statusCode !== 200)
  return done(new Error("Error working with the server"));
```

4. To handle errors in synchronous methods, including `JSON.parse()`, use the `try {} catch() {}` statement:

```js
try {
  const result = JSON.parse(body);
  done(null, result);
} catch (error) {
  done(new Error("Failed to process data"));
}
```

Here is the modified function with error handling:

```js
function getRepos(username, done) {
  if (!username) return done(new Error("Username is required"));
  const option = {
    hostname: "api.github.com",
    path: `/users/${username}/repos`,
    headers: {
      "User-Agent": "github-app",
    },
  };
  const req = https.get(option, (res) => {
    res.setEncoding("utf-8");
    if (res.statusCode === 200) {
      let body = "";
      res.on("data", (data) => (body += data));
      res.on("end", () => {
        try {
          const result = JSON.parse(body);
          done(null, result);
        } catch (error) {
          done(new Error("Failed to process data"));
        }
      });
    } else {
      done(
        new Error(
          `Error working with the server ${res.statusCode} ${res.statusMessage}`
        )
      );
    }
  });
  req.on("error", (error) => done(new Error("Failed to send request")));
}
```

Application code: [GitHub App](https://github.com/irinainina/node.js/tree/github.app/github-app)
