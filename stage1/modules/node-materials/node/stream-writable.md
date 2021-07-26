## Поток записи (Writable stream)

Поток записи, является противоположностью потока чтения. Он используется для записи данных. Записывать данные можно, к примеру: в стандартный поток вывода, файл,  response при обработке на сервере, другой поток и т.д.

Если мы читаем данные по частям, логично записывать их тоже по частям.  
Для этого создадим поток записи `output`  
```js
const fs = require('fs');
const output = fs.createWriteStream('destination.txt');
```
Если не создать файл, который указан в качестве пункта назначения наших данных, `destination.txt`, перед началом записи он будет создан автоматически.  
Поток чтения назовём `input` и каждую часть данных, которую он отдает, будем записывать в файл при помощи метода `output.write()`

Сравните полученный код потока записи с кодом [потока чтения](stream-readable.md) - они создаются и используются сходным образом.
```js
const fs = require('fs');

const input = fs.createReadStream('source.txt', 'utf-8');
const output = fs.createWriteStream('destination.txt');

input.on('data', chunk => output.write(chunk));
input.on('error', error => console.log('Error', error.message));
```