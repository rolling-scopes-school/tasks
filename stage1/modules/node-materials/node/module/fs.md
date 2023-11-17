## File System Module

[HOME](../../README.md)

The `fs` (file system) module is used for working with files and folders. It can create and delete files and folders, rename them, and read and write data.

Import `fs`:

```js
const fs = require("fs");
```

Let's create a folder. There are two methods for this:

- asynchronous `fs.mkdir`
- synchronous `fs.mkdirSync`

When working with the file system, it is recommended to use asynchronous methods that do not block the execution thread. If folders or files are created synchronously, the code execution will pause until they are created. Such pauses in code execution are undesirable.

Let's create a folder named `notes` in the current directory:

```js
const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "notes"), (err) => {
  if (err) throw err;
  console.log("Folder was created");
});
```

Now, let's create a file named `mynotes.txt` containing the text `Hello world` inside the `notes` folder:

```js
const fs = require("fs");
const path = require("path");

fs.writeFile(
  path.join(__dirname, "notes", "mynotes.txt"),
  "Hello world",
  (err) => {
    if (err) throw err;
    console.log("File was created");
  }
);
```

Let's add more information to the file:

```js
const fs = require("fs");
const path = require("path");

fs.appendFile(
  path.join(__dirname, "notes", "mynotes.txt"),
  " From append file",
  (err) => {
    if (err) throw err;
    console.log("File was modified");
  }
);
```

Let's read the information from the file:

```js
const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "notes", "mynotes.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
```

Let's rename the file:

```js
const fs = require("fs");
const path = require("path");

fs.rename(
  path.join(__dirname, "notes", "mynotes.txt"),
  path.join(__dirname, "notes", "notes.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed");
  }
);
```

### Project

[Note-taking Application](../projects/notes.md)
