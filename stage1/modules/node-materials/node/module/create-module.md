## Creating Custom Modules

[HOME](../../README.md)

Let's create a file called `user.js` and write the following code in it:

```js
const user = {
  name: "Ann",
  age: 23,
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  },
};
```

Suppose we want to use our `user` object in other modules. To do this, we need to **export** it from `user.js`. There are several ways to achieve this:

1. Assign the value as a property of the `exports` object or `module.exports`:

```js
// user.js
const user = {
  name: "Ann",
  age: 23,
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  },
};
// works the same as module.exports.user = user;
exports.user = user;

// otherFile.js
/* 
same as 
const userModuleExport = require('./user.js');
const user = userModuleExport.user;
*/
const { user } = require("./user.js");
user.sayHi(); // Hi! My name is Ann
```

2. Overwrite the `module.exports` object itself (in this case, it is necessary to use `module.exports`, as overwriting `exports` will not yield the desired result):

```js
// user.js
const user = {
  name: "Ann",
  age: 23,
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  },
};
// exports = user won't work
module.exports = user;

// otherFile.js
const user = require("./user.js");
user.sayHi(); // Hi! My name is Ann
```

Also, there is no need to assign the exported value to a variable if it is not used elsewhere:

```js
// user.js
module.exports = {
  name: "Ann",
  age: 23,
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  },
};

// otherFile.js
const user = require("./user.js");
user.sayHi(); // Hi! My name is Ann
```

You can overwrite `module.exports` not only with an object but also with a primitive:

```js
// a.js
module.exports = 42;

// otherFile.js
const answer = require("./a.js");
console.log(answer); //42
```

Externally, only the exported objects will be available for direct interaction. If the `user.js` file contains two objects but only the first one is exported, the second will be accessible only within that module. This enables independent development in each module and secure encapsulation of what should not be accessible externally.
