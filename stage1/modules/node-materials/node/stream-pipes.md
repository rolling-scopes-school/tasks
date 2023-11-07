## Объединение потоков чтения-записи

[HOME](../README.md)

Код из [предыдущей части](stream-writable.md) можно сделать ещё проще и лучше:

```js
const fs = require("fs");

const input = fs.createReadStream("source.txt", "utf-8");
const output = fs.createWriteStream("destination.txt");

input.pipe(output);
```

Несмотря на то, что кода стало меньше, работает он точно так же, как прежде.  
Метод `pipe()`, имеющийся у каждого потока, можно использовать для объединения одних потоков с другими. Такие цепочки могут объединять несколько потоков.

Эту особенность метода `pipe()` используют, например, для сжатия файлов.

Импортируем `zlib`, и используем ее стандартный метод, который отвечает за сжатие файлов. Поток `gzip` является трансформирующим потоком: получает одни данные, преобразует их и возвращаёт другие данные.  
После создания потока чтения создадим поток, который отвечает за сжатие файла:

```js
const gzip = zlib.createGzip();
```

затем чего соединим поток сжатия и поток вывода:

```js
input.pipe(gzip).pipe(output);
```

Полный код примера:

```js
const fs = require("fs");
const zlib = require("zlib");

const input = fs.createReadStream("source.txt", "utf-8");
const output = fs.createWriteStream("destination.txt.gz");
const gzip = zlib.createGzip();

input.pipe(gzip).pipe(output);
```

Есть довольно удобный способ объединения нескольких потоков, позволяющий использовать один обработчик ошибок — функция `pipeline`:

```js
const fs = require("fs");
const zlib = require("zlib");
const { pipeline } = require("stream");

const input = fs.createReadStream("source.txt", "utf-8");
const output = fs.createWriteStream("destination.txt.gz");
const gzip = zlib.createGzip();

pipeline(input, gzip, output, (err) => {
  if (err) {
    // обрабатываем ошибки
  }
});
```
