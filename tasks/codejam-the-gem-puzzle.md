# RSS Игра в пятнашки

| Deadline | Repository name | Branch name |
| -------- | --------------- | ----------- |
|          | gem-puzzle      | develop     |

## Задание

Вам нужно реализовать классическую игру [пятнашки](https://ru.wikipedia.org/wiki/Игра_в_15)

### Правила игры

`Игра представляет собой набор одинаковых квадратных костяшек с нанесёнными числами, заключённых в квадратную коробку. Длина стороны коробки в четыре раза больше длины стороны костяшек для набора из 15 элементов, соответственно в коробке остаётся незаполненным одно квадратное поле. Цель игры — перемещая костяшки по коробке, добиться упорядочивания их по номерам, желательно сделав как можно меньше перемещений`

### Приблизительный внешний вид

![](https://i.imgur.com/AFOXNmG.png)

### Основные функциональные требования

`Базовые (обязательные):`

- дизайн на свое усмотрение, но должен быть адаптивный (декстоп, планшет, мобильный), при переходе между версиями все должно отображаться корректно, должен присутствовать весь функционал, ничего не должно пропадать, уезжать за пределы экрана. Допустимо изменить внешний вид для мобильной версии (например, спрятать кнопки в бургер-меню)
- изначально `body` в файле index.html должен быть пустой, все необходимые элементы генерируются с использованием JS (это требование не проверяется)
- размер поля по умолчанию 4х4
- состояние игрового поля генерируется случайным образом забивается числами при запуске новой игры цифры перемешиваются
- при клике по фишке, стоящей рядом с пустой клеткой, фишка перемещается на место пустой клетки
- фишки можно перетягивать на пустое место при помощи мышки
- игру можно начать заново без перезагрузки страницы
- реализовать отображение продолжительности игры в минутах и секундах "##:##" и количество ходов
- использование [eslint (eslint-config-airbnb-base)](https://eslint.org/), [webpack](https://webpack.js.org/) (это требование не проверяется)
- реализовать возможности сохранения игры (например, с помощью localStorage), чтобы при перезагрузке страницы иметь возможность продолжить с того же места где остановился

`дополнительные (для получения дополнительных баллов):`

- реализовать возможность выбора размера поля: от 3х3 до 8х8
- реализовать анимация перемещение пятнашек на поле
- при решении игры надо выводить сообщение «Ура! Вы решили головоломку за #:## и N ходов»
- лучших 10 результатов сохраняется в таблицу рекордов и их можно каким-либо образом посмотреть (например, по нажатию кнопки)

## Требования к репозиторию

- для разработки приложения используйте собственный приватный репозиторий
- название репозитория: **gem-puzzle**, название ветки, в которой ведётся разработка - **develop**, ветка **master** пустая, содержит только README.md
- история коммитов должна отображать процесс разработки приложения. [Требования к коммитам](https://rs.school/docs/ru/git-convention)
- демо-версия приложения размещается на `https://www.netlify.com/`, либо на другом подобном хостинге
- после окончания разработки или при наступлении дедлайна, создайте pull request из ветки develop в ветку master. [Требования к pull request](https://rs.school/docs/ru/pull-request-review-process#описание-pull-request-должно-содержать-следующую-информацию). Мержить pull request не нужно
- код приложения, коммиты, pull request не проверяются и не оценивается
- приложение проверятся только в ходе кросс-чека
- для проверки ссылку на демо-версию приложения необходимо будет добавить в rss-app

## Технические требования

- работа приложения проверяется в браузере Google Chrome последней версии
- использование jQuery не допускается
- нельзя использовать Angular/React/Vue
- можно использовать bootstrap, css фреймворки, html и css препроцессоры

## Критерии оценки:

**Максимальный балл за задание: 100 баллов при кросс-чеке / проверка ментором не предусмотрена**

### Basic scope +30

- [ ] вёрстка, дизайн, UI: `+10`
- [ ] состояние игрового поля генерируется случайным образом: `+10`
- [ ] при клике по фишке, стоящей рядом с пустой клеткой, фишка перемещается на место пустой клетки: `+10`

### Advanced scope +50

- [ ] игру можно начать заново без перезагрузки страницы: `+10`
- [ ] отображается время игры и количество ходов: `+10`
- [ ] фишки можно перетягивать мышкой: `+10`
- [ ] реализовано сохранение состояния игры и сохранение 10 лучших результатов с использованием LocalStorage: `+10`
- [ ] реализован выбор размера поля: `+10`

### Hacker scope +20

- [ ] анимация перемещения пятнашек на поле: `+10`
- [ ] когда игра закончилась, выводится сообщение «Ура! Вы решили головоломку за ##:## и N ходов»: `+10`

## Cross-Check

[Проверить функционал приложения gem puzzle](https://rolling-scopes-school.github.io/checklist/)

## Полезные ссылки

- [Drag-end-drop](https://learn.javascript.ru/mouse-drag-and-drop)

- [Eslint](https://eslint.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Canvas](https://developer.mozilla.org/en/docs/Web/API/Canvas_API/Tutorial)
- [Game Canvas](https://www.w3schools.com/graphics/game_canvas.asp)
- [Node.js](https://nodejs.org/en/), [Express](http://expressjs.com/), [Mongodb](https://www.mongodb.com/)
- [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/)
- [Стрим YouTube Bootstrap( пример подключения webpack, eslint, написания unit-tests)](https://www.youtube.com/watch?v=1Nk09Z4ca4A&list=PLe--kalBDwjj81fKdWlvpLsizajSAK-lh&index=32)
- [Стрим RSS live coding: game boostrap](https://www.youtube.com/watch?v=pz9SihVxjo8&list=PLe--kalBDwjiBYlF6OivjURvvJg58tYY2&index=8)
