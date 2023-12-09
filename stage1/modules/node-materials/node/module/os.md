## Operating System Module

[HOME](../../README.md)

The `os` (operating system) module provides information about the user's operating system

```js
const os = require("os");

// Platform
console.log(os.platform());

// Architecture
console.log(os.arch());

// CPU Information
console.log(os.cpus());

// Total Memory
console.log(os.totalmem());

// Free Memory
console.log(os.freemem());

// Home Directory
console.log(os.homedir());

// System Uptime
console.log(os.uptime());

// End of Line Symbol in the Current System
console.log(os.EOL);
```
