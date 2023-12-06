## Приложение Таймер

[HOME](../../README.md)

Непосредственное создание объектов на основе класса `EventEmitter` используется крайне редко.  
Чаще всего интерфейс для работы с событиями добавляют другим объектам. Это делается благодаря наследованию.  
Создадим класс `Timer`, который будет наследовать от `EventEmitter`, и, как следствие, его экземпляры будут иметь методы `emit()` и `on()`

```js
const EventEmitter = require("events");

class Timer extends EventEmitter {
  constructor(total, interval) {
    super();
    this.total = total;
    this.interval = interval;
    this.ticks = 0;
  }

  _tick() {
    this.ticks += 1;
    if (this.ticks <= this.total) {
      this.emit("tick", this.ticks);
    } else {
      this.end();
    }
  }

  start() {
    this.intervalId = setInterval(() => this._tick(), this.interval);
    this.emit("start");
  }

  end() {
    clearInterval(this.intervalId);
    this.emit("end");
  }
}
```

Конструктор класса `Timer` принимает 2 аргумента:

- `total` — общее количество срабатываний таймера
- `interval` — интервал между срабатываниями

Экземпляр класса `Timer` содержит три метода:

- `start()` — запускает наш таймер
- `_tick()` — внутренный метод таймера
- `end()` — завершает работу таймера

У метода `start()` есть переменная `intervalId`, содержащая идентификатор таймера, установленного при помощи `setInterval()`, который каждую секунду вызывает метод `tick()`. Также метод `start()` генерирует событие `'start'`.  
Метод `tick()` увеличивает переменную `ticks` на единицу и проверяет, не достигнуто ли значение, указанное в свойстве конструктора `total`.  
Если не достигнуто, метод `tick()` генерирует событие `tick`, payload которого выступает текущее значение переменной `ticks`.  
Если значение `total` достигнуто, метод `tick()` вызывает метод `end()`.  
Метод `end()` очищает таймер `setInterval()` и генерирует событие `end`.

Создадим экземпляр класса `Timer`

```js
// таймер на 10 срабатываний с интервалом 500 мс
const timer = new Timer(10, 500);
```

Подпишемся на его события

```js
timer.once("start", () => console.log("Start"));
timer.on("tick", (tick) => console.log(tick));
timer.once("end", () => console.log("End"));
```

Запустим таймер

```js
timer.start();
```

Таймер работает.

Работа большинства объектов в Node.js основана на событиях, работа с которыми происходит за счет того, что эти объекты наследуют API `EventEmitter`.
