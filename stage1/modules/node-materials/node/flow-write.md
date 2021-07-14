## Поток записи
Читая данные по частям, логично записывать их тоже по частям.  
Для этого создадим поток записи `output`  
```js
  const fs = require('fs');
  
  const output = fs.createWriteStream('data.md');
```
Файл, в который будет вестись запись, `'data.md'`, создавать не обязательно: во время записи он создастся автоматически.  
Поток ввода назовём `input` и каждую часть данных, которую он возвращает, будем записывать в файл при помощи метода `output.write()`

Сравните полученный код потока записи с кодом [потока чтения](node/flow-read.md) - отличий между ними совсем немного.  
```js
  const fs = require('fs');

  const input = fs.createReadStream('data.txt', 'utf-8');
  const output = fs.createWriteStream('data.md');
  
  input.on('data', partData => output.write(partData));
  input.on('error', error => console.log('Error', error.message));
```