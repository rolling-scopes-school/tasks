## Поток чтения-записи
Прекрасный и не очень сложный код из [предыдущей части](node/flow-write.md) - можно сделать ещё проще и ещё прекраснее.  
```js
  const fs = require('fs');

  const input = fs.createReadStream('data.txt', 'utf-8');
  const output = fs.createWriteStream('data.md');
  
  input.pipe(output);
```
Несмотря на то, что кода стало в разы меньше, работает он точно так же, как прежде.  
Метод `pipe()` соединяет поток чтения и записи между собой.

Особенность метода `pipe()` в том, что он не только записывает полученные данные в файл, но и возвращает их. Эти данные можно передать дальше.  
Эту особенность метода `pipe()` используют, например, для сжатия файлов

Импортируем стандартный метод `zlib`, который отвечает за сжатие файлов,  
создадим поток, который отвечает за сжатие файла `const gzip = zlib.createGzip();`  
соединим потоки сжатия и поток вывода `input.pipe(gzip).pipe(output);`  
```js
  const fs = require('fs');
  const zlib = require('zlib');

  const input = fs.createReadStream('data.txt', 'utf-8');
  const output = fs.createWriteStream('data.md.gz');
  const gzip = zlib.createGzip();
  
  input.pipe(gzip).pipe(output);
```

Поток `gzip` является трансформирующим потоком: получает одни данные, преобразует их и возвращаёт другие данные