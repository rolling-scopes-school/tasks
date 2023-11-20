## Консольное приложение Notes

[HOME](../../README.md)

Напишем простое консольное приложение Notes для работы с заметками.  
У приложения необходимо реализовать четыре метода

- `create`
- `list`
- `view`
- `remove`

Метод `create` создаёт новую заметку в файле `notes.json`. У метода `create` два аргумента - название заметки и её содержание.  
Метод `list` выводит список заметок.  
Метод `view` выводит в консоль содержимое заметки, название которой передано в качестве аргумента.  
Метод `remove` удаляет заметку, название которой передано в качестве аргумента.  
Для вызова методов они указываются в качестве аргументов командной строки.

1. Импортируем модуль `fs` для работы с файлами

```js
const fs = require("fs");
```

2. Передадим в константы три аргумента - название метода, название заметки, содержание заметки

```js
const [command, title, content] = process.argv.slice(2);
```

3. Создадим переключатель `switch`, который будет вызывать соответствующие функции для разных методов.

```js
switch (command) {
  case "list":
    list();
    break;
  case "view":
    view(title);
    break;
  case "create":
    create(title, content);
    break;
  case "remove":
    remove(title);
    break;
  default:
    console.log("Неизвестная команда");
}
```

4. Напишем функцию `create()` которая создаст новую заметку.  
   У функции два параметра - название заметки `title` и содержание заметки `content`

```js
function create(title, content) {
  const notes = { title, content };
  const json = JSON.stringify(notes);
  fs.writeFile("notes.json", json, (error) => {
    if (error) return console.error(error.message);
    console.log("Заметка создана");
  });
}
```

Функция работает, но она не добавляет данные, а заменяет их.

То есть нам нужно:

- прочитать уже имеющиеся данные из файла `'notes.json'` при помощи метода `fs.readFile()`
- преобразовать полученные данные в массив при помощи метода `JSON.parse()`
- дополнить массив новыми данными при помощи метода `.push()`
- преобразовать массив в JSON при помощи метода `JSON.stringify()`
- записать данные в файл `'notes.json'` при помощи метода `fs.writeFile()`

```js
function create(title, content) {
  fs.readFile("notes.json", (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    notes.push({ title, content });
    const json = JSON.stringify(notes);

    fs.writeFile("notes.json", json, (error) => {
      if (error) return console.error(error.message);
      console.log("Заметка создана");
    });
  });
}
```

Запустим файл командой

```powershell
node index create title content
```

где вместо `title` и `content` - название и содержание заметки.

Обратите внимание, если бы мы записывали данные в текстовом формате, дополнить файл новыми данными можно было бы значительно проще, использовав вместо метода `fs.writeFile()` метод `fs.appendFile()`.

Также необходимо написать функцию `init()`, которая проверяет наличие файла `'notes.json'` и, если такого файла нет, создаёт его с содержимым `[]`. С этим постарайтесь справиться самостоятельно.

5. Напишем функцию `list()`, которая читает документ `notes.json` и выводит названия заметок

```js
function list() {
  fs.readFile("notes.json", (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    notes.forEach((note, index) => console.log(`${index + 1} ${note.title}`));
  });
}
```

Так как файл `notes.json` лежит в той же директории, что и файл с кодом, можно не прописывать к нему путь, достаточно указать его название первым аргументов метода `readFile()`. Второй аргумент метода - функция обратного вызова, которая принимает два параметра - ошибку `error` и прочитанные из файла данные `data`.  
Преобразовать полученные данные в массив позволяет метод `JSON.parse(data)`.  
Идём по этому массиву при помощи метода `forEach()` и для каждого элемента выводим в консоль его индекс и название заметки, так что в консоль выводится нумерованный список. Чтобы список начинался не с нуля, а с единицы, к индексу прибавим 1.

6. Напишем функцию `view()`, которая выводит содержание заметки по её названию. Функция похожа на функцию `list()`. В ней также происходит чтение документа и преобразование полученных данных в массив. Затем мы используем метод `find()`, чтобы найти заметку, название которой совпадает с указанным при вызове функции. Если не таких нет, выводим сообщение, что заметка не найдена, иначе выводим её содержание.

```js
function view(title) {
  fs.readFile("notes.json", (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    const note = notes.find((note) => note.title === title);
    if (!note) {
      console.log("Заметка не найдена");
      return;
    } else {
      console.log(note.content);
    }
  });
}
```

7. Напишем функцию `remove()`, которая удаляет заметку по её названию.  
   Точно так же как в предыдущих функциях мы прочитали файл, преобразовали полученные данные в массив, затем, используя метод `filter()` отфильтровали данные, оставив в массиве только те, заголовки которых не совпадают с переданным, преобразовали массив в JSON и записали его в файл.

```js
function remove(title) {
  fs.readFile("notes.json", (error, data) => {
    if (error) return console.error(error.message);
    let notes = JSON.parse(data);
    notes = notes.filter((note) => note.title !== title);
    const json = JSON.stringify(notes);
    fs.writeFile("notes.json", json, (error) => {
      if (error) return console.error(error.message);
      console.log("Заметка удалена");
    });
  });
}
```

Код приложения https://github.com/irinainina/node.js/tree/notes/notes

P.S. Код данного приложения очень хорошо выглядел бы в виде класса с соответствующими методами. Вы можете потренироваться и сделать это самостоятельно.
