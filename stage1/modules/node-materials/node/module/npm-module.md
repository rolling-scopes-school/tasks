### Installing Modules via npm

[HOME](../../README.md)

Let's install the `colors` module using `npm`. In the terminal, execute the command:

```powershell
npm install colors
```

In the project folder, create a file named `index.js` and write the following code:

```js
require("colors");
const text = "Hello, world!";
console.log(text.rainbow);
```

This package by default operates by extending `String.prototype`, so we don't need to assign the result of `require('colors')` to a variable since we're not using it. Run the file by executing the command `node index` in the terminal.
