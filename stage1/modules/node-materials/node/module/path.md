## Path Module

[HOME](../../README.md)

One of the standard modules in Node.js is `path`. The `path` module is designed to work with file paths in Node.js. It allows you to get the file name, file extension, folder name, and specify the path to the file.

To use `path`, you need to require it:

```js
const path = require("path");
```

You can find the information about the properties and methods of `path` in the [Node.js documentation](https://nodejs.org/docs/latest-v14.x/api/path.html).

Let's look at some of them:

- Retrieving file data
  ```js
  // for a file located at C:\Users\Admin\Desktop\nodejs-basic\index.js
  const path = require("path");
  console.log(path.basename(__filename)); // index.js - file name on Windows, full file path on POSIX systems
  console.log(path.dirname(__filename)); // C:\Users\Admin\Desktop\nodejs-basic - folder name
  console.log(path.extname(__filename)); // .js - file extension
  console.log(path.parse(__filename)); // returns an object specifying the disk root, folder name, file name, file extension, file name without extension
  ```
- Concatenating paths
  ```js
  // for a file located at C:\Users\Admin\Desktop\nodejs-basic\index.js
  const path = require("path");
  // returns C:\Users\Admin\Desktop\nodejs-basic\test\second.html
  console.log(path.join(__dirname, "test", "second.html"));
  ```
  `path.join()` concatenates the specified path segments together, using the separator for the specific platform (forward slash `/` for Linux, backslash `\` for Windows). The result is a relative path.
  ```js
  const path = require("path");
  console.log(path.resolve(__dirname, "./test", "/second.html"));
  ```
  `path.resolve()` converts a sequence of paths or path segments into an absolute path from right to left and normalizes it: if some path segments have slashes while others don't, it will still generate the correct path.
