## Модуль events
Модуль Events предназначен для работы с событиями.

С событиями мы уже сталкивались раньше, когда читали файл  
```js
const stdin = process.stdin;
const stdout = process.stdout;
stdin.on('data', data => stdout.write(data));
```  
и когда выводили сообщение при завершении работы программы
```js
const stdout = process.stdout;
process.on('exit', () => stdout.write('Удачи в изучении Node.js!'));
```
Модуль Events позволяет создавать и генерировать свои собственные события.

Создадим класс `EventEmitter`
```js
const EventEmitter = require('events');
```  
На основе класса `EventEmitter` создадим объект `emitter`   
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
```  
У него есть два метода:
- `emit()` - прослушивание событий
- `on()` - выполнение действий при наступлении события

У метода `on()` два аргумента.  
Первый аргумент - название события. Его мы придумываем сами.  
Второй аргумент - функция, которая сработает, когда событие произойдёт  
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('start', () => console.log('Start'));
```  

Мы зарегистрировали событие `'start'` у объекта `emitter`. Теперь нам нужно сгенерировать событие, сказать программе, что событие произошло.  
Для этого вызываем метод `emit()`, аргументом которого указываем название события
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('start', () => console.log('Start'));
emitter.emit('start');
```  
Запускаем файл с кодом, в консоли видим надпись 'Start'.
Самостоятельно созданное событие работает.

При вызове события в методе `emit()` можно передать какое-то сообщение. Это сообщение будет передано в качестве аргумента в функцию, которая вызывается внутри метода `on()`:
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('start', message => console.log(message));
emitter.emit('start', 'Start message');
``` 

Событие можно вызвать несколько раз
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('start', message => console.log(message));
emitter.emit('start', 'Start message1');
emitter.emit('start', 'Start message2');
emitter.emit('start', 'Start message3');
``` 

Если хотим, чтобы событие вызывалось только один раз, используем метод `once()`
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.once('start', message => console.log(message));
emitter.emit('start', 'Start message1');
emitter.emit('start', 'Start message2');
emitter.emit('start', 'Start message3');
```  

Убрать всех слушателей позволяет метод `removeAllListeners()`
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.once('start', message => console.log(message));
emitter.emit('start', 'Start message1');
emitter.removeAllListeners();
emitter.emit('start', 'Start message2');
emitter.emit('start', 'Start message3');
``` 