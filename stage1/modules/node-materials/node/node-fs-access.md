## File System Access

[HOME](../README.md)

Unlike browser-based JavaScript, Node.js has access to the file system.  
For example, we can easily determine the absolute path to the directory containing our file. To do this, open the `test.js` file and write the code:

```js
console.log(__dirname);
```

Open the terminal and run the file:

```powershell
node test
```

The console will output the absolute path to the directory with the `test.js` file.  
Now let's output the absolute path to the file. To do this, add the line in the `test.js` file:

```js
console.log(__filename);
```

Now the console displays the absolute path to the `test.js` file along with its name.

_To repeat the last entered command in the terminal, just press the "↑" key on the keyboard._

### Task

Write a program that returns the path to the folder if it is launched with the `-d` flag, or the path to the file if it is launched with the `-f` flag. If the file is launched without a flag or with a flag other than those specified in the task, a suggestion to run the program with the `-d` or `-f` flag is displayed.

<details>
  <summary>Example Solution</summary>

```js
const { stdout } = process;
const flag = process.argv[2];

if (flag === "-d") {
  stdout.write(__dirname);
} else if (flag === "-f") {
  stdout.write(__filename);
} else {
  stdout.write("Please run the program with the -d or -f flag");
}
```

</details>
