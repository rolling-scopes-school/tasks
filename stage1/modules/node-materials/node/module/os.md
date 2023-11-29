## Модуль os

[HOME](../../README.md)

Модуль `os` (operating system) предоставляет данные об операционной системе пользователя

```js
const os = require("os");

// Платформа
console.log(os.platform());

// Архитектура
console.log(os.arch());

// Информация о CPU
console.log(os.cpus());

// Общий объём памяти
console.log(os.totalmem());

// Объём свободной памяти
console.log(os.freemem());

// Корневая директория
console.log(os.homedir());

// Время работы системы
console.log(os.uptime());

// Символ окончания строки в данной системе
console.log(os.EOL);
```
