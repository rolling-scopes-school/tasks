## Модуль fs
Модуль fs (file system) нужен для работы с файлами и папками Он умеет создавать и удалять файлы и папки, переименовывать их, записывать данные, считывать данные.

Импортируем fs:
```js
const fs = require('fs')
```
Создадим папку Для этого есть два метода:
- асинхронный `fs.mkdir`
- синхронный `fs.mkdirSync`

Рекомендуется использовать асинхронные методы, которые не блокируют поток кода. Если папка или файл будут создаваться синхронно, выполнение кода остановится, пока они не будут созданы. Такие паузы в выполнении кода нежелательны. 

Создадим папку `notes` в текущей директории  
```js
const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'notes'), err => {
  if (err) throw err
  console.log('Папка была создана')
})
```

Создадим файл `mynotes.txt` внутри папки `notes`  
```js
fs.writeFile(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  'Hello world',
  (err) => {
    if (err) throw err
    console.log('Файл был создан')
})
```

Дополним файл, записать в него ещё какую-то информацию  
```js
fs.appendFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    ' From append file',
    err => {
    if (err) throw err
    console.log('Файл был изменен')
})
```

Прочитаем информацию из файла  
```js
fs.readFile(
  path.join(__dirname, "notes", "mynotes.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
```

Переименуем файл  
```js
fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
      if (err) throw err
      console.log('Файл переименован')
    }
  )
```

## Задание
[Приложение для заметок](../projects/notes.md)