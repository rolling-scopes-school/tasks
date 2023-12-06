## Node.js

![Node.js logo](node/images/node-logo.jpg)

**Node.js** — среда выполнения JavaScript вне браузера.

В основе Node.js — виртуальная машина V8. Она была создана компанией Google для браузера Chrome. V8 умеет выполнять JavaScript быстрее и экономнее, чем любая другая.

Node.js используется для создания веб-серверов, самостоятельных приложений, программ для компьютеров и мобильных устройств, а также программирования микроконтроллеров.

У Node.js только одна платформа, в которой в результате постоянного улучшения появляется поддержка новейших возможностей Javascript. В отличие от браузерного JS, не нужно заботиться о поддержке устаревших браузеров, практически никогда не нужно транспилировать код под старые версии платформы (однако, как и в случае с браузерным JS, перед использованием новейших возможностей языка рекомендуется проверить, что они уже поддерживаются выбранной версией Node.js).

Компании выбирают Node.js за скорость и простоту разработки, возможность использовать один язык при создании фронтенда и бэкенда, скорость работы созданных приложений, кроссплатформенность, экономию ресурсов.

К относительным недостаткам Node.js можно отнести то, что он несколько хуже подходит для решения задач, требующих интенсивных вычислений (хотя с появлением `worker threads` ситуация значительно улучшилась).

## Содержание

1. [Начало работы](node/node-introduction.md)
2. [Операции ввода/вывода](node/node-io.md)
3. [Стандартные потоки ввода/вывода](node/node-stdio.md)
4. [Аргументы командной строки](node/node-argv.md)
5. [Доступ к файловой системе](node/node-fs-access.md)
6. [Модули](node/node-module.md)
   - [модуль path](node/module/path.md)
   - [модуль fs](node/module/fs.md)
   - [модуль os](node/module/os.md)
   - [модуль http](node/module/http.md)
   - [модули, устанавливаемые через npm](node/module/npm-module.md)
   - [создание собственных модулей](node/module/create-module.md)
7. [События](node/events.md)
8. [Потоки](node/stream.md)
   - [поток чтения](node/stream-readable.md)
   - [поток записи](node/stream-writable.md)
   - [объединение потоков](node/stream-pipes.md)
9. [Проекты](node/projects/projects.md)
   - [приложение для заметок](node/projects/notes.md)
   - [приложение Таймер](node/projects/timer.md)
   - [приложение Github](node/projects/github-app.md)

## Материалы

- [Введение в node.js](http://imnotgenius.com/vvedeniya-v-node-js/)
- [Гайд по Node.js](https://nodejsdev.ru/guide/)
- [Скринкаст по Node.js](https://learn.javascript.ru/screencast/nodejs)
- [Создание первого приложения на Node](https://webref.ru/dev/first-node-app)
- [Руководство по Node.js - metanit](https://metanit.com/web/nodejs/)
- [Пишем API на Node.js](https://www.youtube.com/playlist?list=PLY4rE9dstrJzrDaSPKOrhNgQ19GhVl19u)
- [Герман Волков. Node.js](https://youtu.be/qZ5xzkEdkhg) - [Презентация](https://drive.google.com/file/d/1P3mRxOQISJHEatmAEv5X_f1Qk8OEr9rZ/view)
