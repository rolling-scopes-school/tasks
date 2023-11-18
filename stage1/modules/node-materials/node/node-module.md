## Modules

[HOME](../README.md)

Node.js treats any file as a module.

Node.js currently uses two module systems: **CommonJS** (modules used by default in Node.js, appeared earlier) and **ECMAScript modules** (implementing functionality from ECMAScript 2015 specification). They have significant differences from each other. In this material, we only use **CommonJS** modules.

There are not many global variables in Node.js, such as `__dirname`, `__filename`, `process` ([check the list here](https://nodejs.org/dist/latest-v14.x/docs/api/globals.html#globals_global_objects)). The rest of the functionality is implemented as importable modules.

Advantages of using modules in Node.js:

- Better code organization — code divided into modules is much easier to understand, support, and test
- Code reuse facilitation — a correctly written and documented module can easily be used in multiple places within one project and in different projects
- Encapsulation — the contents of a module are encapsulated, i.e., available exclusively within the module. Developers decide what to import into the module and what to export beyond the module
- Thanks to [module caching](https://nodejs.org/dist/latest-v14.x/docs/api/modules.html#modules_caching), multiple imports of modules do not lead to additional performance overhead

To simplify, modules in Node.js can be divided into three types:

1. Core modules, which we get "out of the box" by installing Node.js on a computer.  
   Examples of core modules:

   - [path module](module/path.md)
   - [fs module](module/fs.md)
   - [os module](module/os.md)

2. [Packages](module/npm-module.md)
3. [Custom modules](module/create-module.md)

### Core Modules

They are already compiled into binary code and described in the documentation.  
[List of core modules](https://nodejs.org/dist/latest-v14.x/docs/api/)

Core modules are easy to include, and you can start working with them.

To include a module, the `require()` function is used.  
Examples of module inclusion:

```js
const path = require("path");
const fs = require("fs");
const os = require("os");
```

### Packages

Packages include folders with code described using the `package.json` file inside them.

Packages are convenient to work with using package managers such as `npm` or `yarn`. If we want to use modules already written by someone (a common way to use other developers' code), we need to install them, then include them, and then use them.

To install a package using `npm`, use the command:

```bash
npm install <module name>
```

### Custom modules

Creating a module starts with creating a separate JS file where the code is written. If the module needs to export something, this is done by writing the exported value as a property of the special `module.exports` object, or by overwriting it.

Values exported from one module can be imported into other modules. As with other types of modules, import is done using the `require()` function, but in this case, the path to the file is specified instead of the module name.

Let's start working with modules in Node.js by creating a Node.js application.

### Creating a Node.js Application

Let's create a new project. To do this, create a project folder, open it in VS Code, and in the terminal, execute the command:

```bash
npm init -y
```

The `-y` (Yes) parameter means that we agree with all project settings by default.  
A `package.json` file is created in the project folder, describing the created application.

### Installing Packages via npm

To install a module, use the command:

```bash
npm install <module name>
```

Install the `nodemon` module. To do this, execute the command in the terminal:

```bash
npm install nodemon
```

Removing a module:

```bash
npm uninstall nodemon
```

Installed modules are added to the `node_modules` folder, and information about them is added to the `package.json` file.  
Additionally, a `package-lock.json` file is automatically created, ensuring package identity among different users and performing other useful functions.

If you delete the `node_modules` folder and execute the `npm install` command, the `node_modules` folder will be restored along with all the added modules based on the records in the `package.json` file.

Node.js projects are added to GitHub without the `node_modules` folder but with the `package.json` and `package-lock.json` files.  
After downloading such a project, you need to execute the `npm install` command in the terminal to restore all modules installed through npm.
