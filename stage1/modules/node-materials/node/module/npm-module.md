### Установка модулей через npm.
[HOME](../../README.md)

Установим `npm` модуль `colors`. Для этого в терминале выполним команду  
```powershell
npm install colors
```
В папке проекта создадим файл `index.js` и напишем в нём код:
```js
require('colors');
const text = 'Hello, world!';
console.log(text.rainbow);
```
Данный пакет по умолчанию работает за счет расширения `String.prototype`, поэтому нам не нужно записывать результат `require('colors')` в переменную, поскольку мы не используем его. Запустим файл, выполнив в терминале команду `node index`.