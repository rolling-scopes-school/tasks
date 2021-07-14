### Установка модулей через npm.
Установим npm модуль colors. Для этого в терминале выполним команду  
```npm install colors```  
В папке проекта создадим файл `index.js` и напишем в нём код
```js
const colors = require('colors');
const text = 'Hello, world!';
console.log(text.rainbow);
```
Запустим файл, выполнив в терминале команду `node index`.