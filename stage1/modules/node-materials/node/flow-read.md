## Поток чтения

Создадим программу, которая будет читать достаточно большой файл и выводить его содержимое в консоль. Для этого используем модуль `fs`, но вместо метода `readFile()` используем метод `createReadStream()`, параметром которого укажем название файла `data.txt`, с которого будем считывать информацию. Так как файл лежит в той же директории, что и файл с кодом, путь к файлу прописывать не оязательно.
```js
  const fs = require('fs');
  
  const stream = fs.createReadStream('data.txt');
```

У стрима есть событие `data`, которое наступает при поступлении порции данных.  
При наступлении этого события выведем поступившую часть данных в консоль:  
```js
  const fs = require('fs');

  const stream = fs.createReadStream('data.txt');

  stream.on('data', partData => console.log(partData));
```  
В консоли вместо текста объекты `Buffer`. Раньше эту проблему мы решали при помощи метода `data.toString()`, но преобразовать `Buffer` в строку можно и другим способом, указав вторым параметром метода `createReadStream()` кодировку `'utf-8'`.

Как убедиться, что данные приходят по частям?  
Выведем в консоль не сами данные, а длину каждой пришедшей части данных
```js
  const fs = require('fs');

  const stream = fs.createReadStream('data.txt');

  stream.on('data', partData => console.log(partData.length));
```  
Если файл с данными достаточно большой, видно, что приходят они чанками размером 64кБ.

Чтобы все эти части собрать вместе, определим переменную `date`. Её значением укажем пустую строку. Каждую пришедшую часть данных будем присоединять к `date`.
```js
  const fs = require('fs');

  const stream = fs.createReadStream('data.txt', 'utf-8');

  let data = '';

  stream.on('data', partData => data += partData);
```  

Так как мы имеем дело с потоком данных, нам нужно знать когда поток завершится. Для этого у стрима есть событие 'end'. Это событие срабатывает когда все данные уже переданы.  
При наступлении события 'end' выведем в консоль сообщение и длину полученных данных:
```js
  const fs = require('fs');

  const stream = fs.createReadStream('data.txt', 'utf-8');

  const data = '';

  stream.on('data', partData => data += partData);
  stream.on('end', () => console.log('End', data.length));
```
Обработаем возможную ошибку. Для обработки ошибок у стрима есть метод 'error'. При наступлении ошибки выведем в консоль сообщение и текст ошибки. Чтобы вызвать ошибку, укажем несуществующее имя файла
```js
  const fs = require('fs');

  const stream = fs.createReadStream('data2.txt', 'utf-8');

  const data = '';

  stream.on('data', partData => data += partData);
  stream.on('end', () => console.log('End', data.length));
  stream.on('error', error => console.log('Error', error.message));
```