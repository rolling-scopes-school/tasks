## Getting Started

[HOME](../README.md)

### Installing Node.js

Download link: https://nodejs.org/en

Download and install the latest LTS version (Recommended For Most Users)

Check what you have installed. To do this, check the version of Node.js.  
Open Git Bash: right-click on the desktop, choose `Git Bash Here` from the context menu. If this option is not available, download and install Git https://git-scm.com/downloads.

Execute the command `node -v`.  
If the Node.js version is displayed, then we have successfully completed the first step, and Node.js is installed.

### Possible Installation Issues

Sometimes, after installing Node.js, commands in the terminal starting with `node` may cause errors like `'node' is not recognized as an internal or external command, operable program or batch file`.  
In this case, you need to add the correct path to the Node.js directory to the `PATH`.  
[Example solution](https://love2dev.com/blog/node-is-not-recognized-as-an-internal-or-external-command/).

### Where to Write Code

Neither writing code in the terminal, nor is Notepad is very convenient. Let's choose VS Code, open the terminal (tab `Terminal` on the top panel, item `Create Terminal`), check that the terminal is working. To do this, execute the command `node -v`.

### REPL Mode

You can write and execute code directly in the terminal.  
This mode is called `REPL` (Read-Eval-Print-Loop).

To enter it, execute the command `node` in the terminal.  
Now you can write code directly in the terminal, and REPL will evaluate the entered expression and display the result. For example, if you enter `2 + 2` and press Enter, REPL will output `4`.

You can also make explicit console output using the familiar methods. For example, you can write:

```js
console.log("Hello, world!");
```

REPL has some useful commands, information about which can be obtained by sending the `.help` command.  
To exit REPL mode, send the `.exit` command (also, for a more forceful process termination, you can use the standard key combination for the terminal used, such as `Ctrl + C`).  
Clear the terminal using commands like `cls` (for the standard Windows Command Prompt and PowerShell) or `clear` (for Bash).

### How to Run a File

The REPL mode is used relatively rarely. Typically, Node.js is used to run code located in files.

Let's create a file `test.js` and write the command in it:

```js
console.log("Hello, world!");
```

Open this file with VS Code, in the terminal execute the command:

```bash
node test.js
```

Note:

- You don't have to specify the file extension, i.e., it is enough to write `node test`
- If an error occurs, make sure the terminal is open in the same directory where the `test.js` file is located

## Task

1. Output the string `Hello, Node.js!` to the console using REPL mode
2. Output the string `Hello, Node.js!` by running a file with Node.js

<details>
<summary>Example Solution</summary>

```js
console.log("Hello, Node.js!");
```

</details>
