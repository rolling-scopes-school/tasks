## Notes App

[HOME](../../README.md)

Let's write a simple console application called Notes for working with notes. The application needs to implement four methods:

- `create`
- `list`
- `view`
- `remove`

The `create` method creates a new note in the notes.json file. The `create` method has two arguments: the note's title and its content.  
The `list` method displays a list of notes.  
The `view` method outputs the content of a note whose title is passed as an argument.  
The `remove` method deletes a note whose title is passed as an argument.

To call these methods, they are specified as command-line arguments.

1. Import the `fs` module for file operations:

```js
const fs = require("fs");
```

2. Assign three arguments to constants — the method name, the note title, and the note content:

```js
const [command, title, content] = process.argv.slice(2);
```

3. Create a `switch` statement that calls the corresponding functions for different methods:

```js
switch (command) {
  case "list":
    list();
    break;
  case "view":
    view(title);
    break;
  case "create":
    create(title, content);
    break;
  case "remove":
    remove(title);
    break;
  default:
    console.log("Unknown command");
}
```

4. Write the `create()` function that creates a new note. The function has two parameters: the title of the note `title` and the content of the note `content`:

```js
function create(title, content) {
  const notes = { title, content };
  const json = JSON.stringify(notes);
  fs.writeFile("notes.json", json, (error) => {
    if (error) return console.error(error.message);
    console.log("Note created");
  });
}
```

The function works, but it doesn't add data; instead, it replaces them.

So, we need to:

- прочитать уже имеющиеся данные из файла `'notes.json'` при помощи метода `fs.readFile()`
- преобразовать полученные данные в массив при помощи метода `JSON.parse()`
- дополнить массив новыми данными при помощи метода `.push()`
- преобразовать массив в JSON при помощи метода `JSON.stringify()`
- записать данные в файл `'notes.json'` при помощи метода `fs.writeFile()`
- Read the existing data from the `notes.json` file using the `fs.readFile()` method
- Convert the received data into an array using the `JSON.parse()` method
- Add new data to the array using the `.push()` method
- Convert the array to JSON using the `JSON.stringify()` method
- Write the data to the `notes.json` file using the `fs.writeFile()` method

```js
function create(title, content) {
  fs.readFile("notes.json", (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    notes.push({ title, content });
    const json = JSON.stringify(notes);

    fs.writeFile("notes.json", json, (error) => {
      if (error) return console.error(error.message);
      console.log("Note created");
    });
  });
}
```

Run the file with the command:

```powershell
node index create title content
```

where `title` and `content` are the title and content of the note.

Note that if we were writing data in text format, it would be much easier to append new data using the `fs.appendFile()` method instead of the `fs.writeFile()` method.

Also, it is necessary to write a function `init()` that checks the existence of the `notes.json` file and, if the file does not exist, creates it with the content `[]`. Try to handle this on your own.

5. Write the `list()` function, which reads the `notes.json` document and outputs the titles of the notes:

```js
function list() {
  fs.readFile("notes.json", (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    notes.forEach((note, index) => console.log(`${index + 1} ${note.title}`));
  });
}
```

Since the `notes.json` file is in the same directory as the code file, there is no need to specify the path; it's enough to provide its name as the first argument to the `readFile()` method. The second argument of the method is a callback function that takes two parameters - an error (`error`) and the data read from the file (`data`).

Converting the received data into an array is done using the `JSON.parse(data)` method. We iterate through this array using the `forEach()` method and, for each element, print its index and the title of the note to the console, creating a numbered list. To start the list from one instead of zero, we add 1 to the index.

6. Write the `view()` function, which outputs the content of a note by its title

The function is similar to the `list()` function. It reads the document, converts the received data into an array, and then uses the `find()` method to find the note whose title matches the one specified when calling the function. If there is no such note, it prints a message that the note is not found; otherwise, it prints its content:

```js
function view(title) {
  fs.readFile("notes.json", (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    const note = notes.find((note) => note.title === title);
    if (!note) {
      console.log("Note not found");
      return;
    } else {
      console.log(note.content);
    }
  });
}
```

7. Write the `remove()` function, which deletes a note by its title

Just like in the previous functions, we read the file, convert the received data into an array, then use the `filter()` method to filter the data, leaving only those whose titles do not match the passed title. After that, we convert the array to JSON and write it to the file:

```js
function remove(title) {
  fs.readFile("notes.json", (error, data) => {
    if (error) return console.error(error.message);
    let notes = JSON.parse(data);
    notes = notes.filter((note) => note.title !== title);
    const json = JSON.stringify(notes);
    fs.writeFile("notes.json", json, (error) => {
      if (error) return console.error(error.message);
      console.log("Note deleted");
    });
  });
}
```

Application code: [Notes App](https://github.com/irinainina/node.js/tree/notes/notes)

P.S. The code of this application would look very good as a class with corresponding methods. You can practice and do it yourself.
