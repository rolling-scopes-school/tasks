## Command Line Arguments

[HOME](../README.md)

In Node.js, you can run a file with specific command line arguments. When running a file, the arguments are passed after its name. For example, when running:

```powershell
node test 1 2 3
```

`1`, `2`, `3` are the arguments.  
How can you access the arguments passed when the file is launched within the code? This is done using the `process.argv` property of the global `process` object.

In the `test.js` file, let's write the code:

```js
console.log(process.argv);
```

In the terminal, execute the command `node test 1 2 3`.  
In the console, an array is displayed, the first two elements of which are the path to the node.exe file and the path to the executed file. After that come the passed arguments.

If you only need to get the arguments, execute the code:

```js
console.log(process.argv.slice(2));
```

The `process.argv.slice(2)` method returns a new array that starts from the element at index "2".

### Flags

To have the ability to send arguments in any order or skip some of them, you can mark command line arguments. For this purpose, flags are used. Flags are words or symbols indicating that a command line argument follows them. Flags are usually preceded by one or two dashes to avoid confusion with arguments. For example:

```powershell
node test -m Hello
```

To get the argument with the specified flag, write the code:

```js
const flagIndex = process.argv.indexOf("-m");
if (flagIndex !== -1) {
  const message = process.argv[flagIndex + 1];
  console.log(message);
}
```

You can transform this code into a function that takes the flag argument and returns its value:

```js
function getValue(flag) {
  const flagIndex = process.argv.indexOf(flag);
  return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
}
const message = getValue("-m");
console.log(message);
```

### Practical Usage

In practice, when you write code to handle command line arguments yourself, it is necessary to handle various situations correctly — an argument may be missing, a flag may not be passed, or it may be passed without a value. The mere presence of a flag can also be a boolean value, and so on.  
To make working with command line arguments more convenient and minimize the likelihood of errors, it is useful to use ready-made solutions such as [minimist](https://www.npmjs.com/package/minimist), [commander](https://www.npmjs.com/package/commander), [yargs](https://www.npmjs.com/package/yargs), and others.

### CLI Options

In addition to custom command line arguments, you can pass command line options (CLI options). Command line options are passed **before** the path to the executed file and modify the behavior of Node.js. For example, you can disable the use of the `__proto__` property. Thus, running a file with the following content:

```js
// test.js
const protoObj = {
  sayHi() {
    console.log("Hi!");
  },
};
const obj = {};
obj.__proto__ = protoObj;
obj.sayHi();
```

with the option `--disable-proto=throw`:

```powershell
node --disable-proto=throw test
```

will result in an error. You can view the full list of options in the [documentation](https://nodejs.org/dist/latest-v14.x/docs/api/cli.html#cli_options).

### Environment Variables

Sometimes we need to pass some value from the **outside** to our code, which will be used by our application. For example, we want to implement different behavior when the application is launched on a production server and during development. Environment variables can help us in this case.

Environment variables have a syntax like `variable_name=variable_value` and are placed before `node ....`. In Bash, for example, you can pass a variable that shows in which mode the application is currently running:

```bash
PRODUCTION=false node test
```

Or in PowerShell:

```powershell
$env:PRODUCTION="false"; node test
```

Access to such variables inside the code can be obtained through `process.env`:

```js
const productionMode = process.env.PRODUCTION === "true";
if (productionMode) {
  console.log("Application is running in production mode");
  // do production things
} else {
  console.log("Application is running in development mode");
  // do dev things
}
```

### Task

Write a program that prompts the user to enter two numbers, adds these numbers if launched with the `-s` flag, or multiplies them if launched with the `-m` flag, and then terminates. Use standard input/output for input and output. Here is an example of how it should work (user input starts with `>`):

```powershell
> node test.js -m
Enter 2 numbers
> 2 7
2 * 7 = 14
```

```powershell
> node test.js -s
Enter 2 numbers
> 2 7
2 + 7 = 9
```

<details>
<summary>Example Solution</summary>

```js
const { stdout, stdin, exit } = process;
const flag = process.argv[2];
const allowedFlags = ["-m", "-s"];
if (!allowedFlags.includes(flag)) {
  stdout.write("Try running the file again with the -s or -m flag");
  exit();
}
stdout.write("Please enter two numbers\n");
stdin.on("data", (data) => {
  const numString = data.toString();
  const numStringsArray = numString.split(" ");
  const hasIncorrectLength = numStringsArray.length !== 2;
  const hasIncorrectValues = numStringsArray.some((numStr) =>
    Number.isNaN(+numStr)
  );
  if (hasIncorrectLength || hasIncorrectValues) {
    stdout.write("You need to enter 2 numbers separated by a space");
    exit();
  }
  const [firstNum, secondNum] = numStringsArray.map((numStr) => +numStr);
  if (flag === "-s") {
    const sum = firstNum + secondNum;
    stdout.write(`${firstNum} + ${secondNum} = ${sum}`);
  } else {
    const mult = firstNum * secondNum;
    stdout.write(`${firstNum} * ${secondNum} = ${mult}`);
  }
  exit();
});
```

</details>
