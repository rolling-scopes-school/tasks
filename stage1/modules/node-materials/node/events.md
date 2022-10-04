## Модуль events
[HOME](../README.md)

Модуль `Events` предназначен для работы с событиями.

С событиями мы уже сталкивались раньше, когда читали файл  
```js
const { stdin, stdout } = process;
stdin.on('data', data => stdout.write(data));
```  
и когда выводили сообщение при завершении работы программы
```js
const { stdout } = process;
process.on('exit', () => stdout.write('Удачи в изучении Node.js!'));
```
Модуль `Events` позволяет создавать и генерировать свои собственные события.

Импортируем класс `EventEmitter` из модуля `events`
```js
const EventEmitter = require('events');
```  
Создадим экземпляр `EventEmitter` — объект `emitter`   
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
```  
У него есть два полезных метода:
- `emit(<event>)` - генерирует событие `event`, заставляя срабатывать обработчики этого события у подписчиков
- `on(<event>, <handler>)` - подписка на события (выполнение функции `handler` действий при наступлении события `event`

У метода `on(<event>, <handler>)` два аргумента:  
* `event` - название события.
* `handler` - обработчик события (функция, которая сработает, когда событие произойдёт)  
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('start', () => console.log('Start'));
```  

Мы подписались на событие `'start'` для объекта `emitter`. Теперь нам нужно сгенерировать это событие, чтобы сработал его обработчик
Для этого вызываем метод `emit()`, аргументом которого указываем название события
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('start', () => console.log('Start'));

emitter.emit('start');
```  
Запускаем файл с кодом, в консоли видим надпись 'Start'.
Самостоятельно созданное событие работает.

При вызове события в методе `emit()` можно передать какое-то дополнительное значение (`payload`). Это значение будет передано в качестве аргумента в функцию-обработчик
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('start', message => console.log(message));

emitter.emit('start', 'Start message');
``` 
Таких значение можно передать несколько
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('start', (first, second) => console.log(`${first} and ${second}`));

emitter.emit('start', 1, 2); // 1 and 2
``` 
При подписке на событие его обработчик ставится в очередь обработчиков. Одному и тому же событию можно назначить несколько обработчиков (по умолчанию **не больше 10**, но это не жесткий лимит). Обработчики срабатывают в том порядке, в котором они были назначены:
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

const handler1 = () => console.log(1);
const handler2 = () => console.log(2);

emitter.on('start', handler1);
emitter.on('start', handler2);

emitter.emit('start'); // выводит 1, затем 2
```
Поставить назначенный позже обработчик в начало очереди нам поможет метод `prependListener`
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

const handler1 = () => console.log(1);
const handler2 = () => console.log(2);
const handler3 = () => console.log(3);
const handler4 = () => console.log(4);

emitter.on('start', handler1);
emitter.on('start', handler2);
emitter.on('start', handler3);
emitter.prependListener('start', handler4); // назначет позже, сработает раньше

emitter.emit('start'); // выведет цифры в следующем порядке: 4 => 1 => 2 => 3
``` 
Один и тот же обработчик может быть назначен несколько раз:
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

const handler = () => console.log(1);

emitter.on('start', handler);
emitter.on('start', handler);
emitter.on('start', handler);

emitter.emit('start'); // выводит 1 трижды
``` 
Обработчик срабатывает на каждую генерацию события:
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('start', message => console.log(message));

emitter.emit('start', 'Hello'); // Hello
emitter.emit('start', 'from'); // from
emitter.emit('start', 'Node.js'); // Node.js
``` 
Если необходимо, чтобы обработчик срабатывал только один раз, для подписки используем метод `once()`
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.once('start', message => console.log(message));

emitter.emit('start', 'Hello'); // сработает только для этого вызова
emitter.emit('start', 'from');
emitter.emit('start', 'Node.js');
```  
Удалить из очереди одну функцию-обработчик определенного события позволяет метод экземпляра `EventEmitter` `off()` (или его алиас `removeListener`)
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

const handler = message => console.log(message);

emitter.on('start', handler);

emitter.emit('start', 'Hello'); // Hello

emitter.off('start', handler); // дальнейшие события не будут обработаны

emitter.emit('start', 'from'); 
emitter.emit('start', 'Node.js');
```
Иногда мы хотим, чтобы наш собственный класс имел API `EventEmitter`:
```js
const EventEmitter = require('events');

class User extends EventEmitter {
    constructor(name, password) {
        super();
        this.name = name;
        this.password = password;
    }

    sayHi() {
        console.log(`Hi! My name is ${this.name}`)
    }
}

const user = new User('Vasya', 12345);

user.on('greetings', user.sayHi);

user.emit('greetings'); // Hi! My name is Vasya
```
Заметили странность? Как правило, в случае передачи метода объекта для использования в качестве обработчика происходит потеря контекста. Но не в этом случае, так как `this` внутри функции-обработчика ссылается на экземпляр `EventEmitter` (в нашем случае объект `user`).