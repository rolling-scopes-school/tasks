## Приложение Таймер
Непосредственное создание объектов на основе класса `EventEmitter` используется крайне редко.  
Чаще всего события добавляют другим объектам. Это делается благодаря наследованию.  
Создадим класс `Timer`, который будет наследовать метод `EventEmitter`, и, как следствие, будет иметь методы `emit()` и `on()`  
```js
const EventEmitter = require('events');

class Timer extends EventEmitter {
  constructor(total) {
    super();
    this.total = total;
    this.ticks = 0;
  }

  start() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.emit('start');
  }

  tick() {
    this.ticks += 1;
    if(this.ticks <= this.total) {
      this.emit('tick', this.ticks)
    } else {
      this.end();
    }
  }

  end() {
    clearInterval(this.interval);
    this.emit('end')
  }
}
```
В классе `Timer` определили три метода: 
- `start()`
- `tick()`
- `end()`
У метода `start()` есть переменная `interval`, которой присвоена функция `setInterval()` каждую секунду вызывающий метод `tick()`. Так же метод `start()` генерирует событие 'start'.  
Метод `tick()` увеличивает переменную `ticks` на единицу и проверяет не достигнуто ли значение, указанное в свойстве конструктора `total`.  
Если не достигнуто, метод `tick()` генерирует событие `tick`, вторым параметром которого выступает текущее значение переменной `ticks`.  
Если значение `total` достигнуто, метод `tick()` вызывает метод `end()`.  
Метод `end()` очищает `setInterval()` и генерирует событие `end`.

Создадим екземпляр класса `Timer`
```js
const timer = new Timer(10)
```

И создадим для него события 
```js
timer.once('start', () => console.log('Start'));
timer.on('tick', tick => console.log(tick));
timer.once('end', () => console.log('End'));
```

Запустим таймер
```js
timer.start();
```
Таймер работает.

Работа большинства объектов в Node.js основана на событиях. Это означает, что эти объекты наследуют метод `EventEmitter`