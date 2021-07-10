## Модуль http
Модуль http нужен для создания http-сервера 
```js
const http = require("http");

const server = http.createServer((request,response) => {
  response.end("Hello NodeJS!");
});

server.listen(3000, "127.0.0.1", () => {

console.log("Сервер начал прослушивание запросов на порту 3000");
});
```  
Рассмотрим код.  
Получаем модуль http 
```js
const http = require("http"); 
```  
Используя метод `createServer()` создаём сервер

В качестве коллбек-функции данный метод получает функцию с двумя параметрами `request` и `response`
- `request` хранит информацию о запросе
- `response` отвечает за отправку ответа

`response.end("Hello NodeJS!");` - ответ сервера - строка `"Hello NodeJS!"`

Можно написать иначе:  
```js
const server = http.createServer((request,response) => {  
    response.write('text 1');
    response.end('text 2');
})
```  
В ответе будут строки, переданные через `write` и через `end`  
В данных методах можно передать строку, которая содержит теги и инлайн стили для них. Эти теги будут обработаны браузером

Метод `listen` слушает ответ сервера Он принимает три параметра: локальный порт, локальный адрес (без него тоже работает) и коллбек-функцию, которая запускается при начале прослушивания подключений. Сайт открывается по адресу http://localhost:3000/

## Задание
[Приложение GitHub](../projects/notes.md)