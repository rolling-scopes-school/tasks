## Модуль fs

[HOME](../../README.md)

Модуль `fs` (file system) нужен для работы с файлами и папками. Он умеет создавать и удалять файлы и папки, переименовывать их, записывать и считывать данные.

Импортируем `fs`:

```js
const fs = require("fs");
```

Создадим папку. Для этого есть два метода:

- асинхронный `fs.mkdir`
- синхронный `fs.mkdirSync`

При работе с файловой системой рекомендуется использовать асинхронные методы, которые не блокируют поток выполнения. Если папка или файл будут создаваться синхронно, выполнение кода остановится, пока они не будут созданы. Такие паузы в выполнении кода нежелательны.

Создадим папку `notes` в текущей директории

```js
const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "notes"), (err) => {
  if (err) throw err;
  console.log("Папка была создана");
});
```

Создадим файл `mynotes.txt`, содержащий текст `Hello world` внутри папки `notes`

```js
const fs = require("fs");
const path = require("path");

fs.writeFile(
  path.join(__dirname, "notes", "mynotes.txt"),
  "Hello world",
  (err) => {
    if (err) throw err;
    console.log("Файл был создан");
  },
);
```

Дополним файл, записав в него ещё какую-то информацию

```js
const fs = require("fs");
const path = require("path");

fs.appendFile(
  path.join(__dirname, "notes", "mynotes.txt"),
  " From append file",
  (err) => {
    if (err) throw err;
    console.log("Файл был изменен");
  },
);
```

Прочитаем информацию из файла

```js
const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "notes", "mynotes.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  },
);
```

Переименуем файл

```js
const fs = require("fs");
const path = require("path");

fs.rename(
  path.join(__dirname, "notes", "mynotes.txt"),
  path.join(__dirname, "notes", "notes.txt"),
  (err) => {
    if (err) throw err;
    console.log("Файл переименован");
  },
);
```

### Задание

[Приложение для заметок](../projects/notes.md)
