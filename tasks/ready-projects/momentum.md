# momentum

| Deadline         | Folder name | Branch name |
| ---------------- | ----------- | ----------- |
| 25.10.2020 23:59 | momentum    | momentum    |

В первую очередь ознакомьтесь с [инструкцией к заданию](introduction.md)

## Task 2. Momentum

![screenshot](images/momentum.png)

Momentum - аналог [одноимённого приложения](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=ru) интернет-магазина Chrome. Приложение показывает время и имя пользователя, его цель на текущий день. Фоновое изображение меняется в зависимости от времени суток. Для хранения данных приложение использует локальное хранилище - local storage. Автор - Brad Traversy - известен качеством своих туториалов. Именно этот — довольно короткий, и достаточно простой. Выполняя проект вы научитесь работать с датой и временем, создавать часы, сохранять данные в local storage и, самое главное, на конкретных примерах познакомитесь с асинхронными запросами.

- Видео: https://youtu.be/fSTQzlprGLI (35:10)
- Код: https://github.com/irinainina/ready-projects/tree/momentum/momentum (113 lines js-code)
- Demo: https://irinainina.github.io/ready-projects/momentum/

Чтобы склонировать проект выполните команду:

`git clone https://github.com/irinainina/ready-projects/ -b momentum`

## Критерии оценки

**Максимальный балл за задание +50**

- Базовая функциональность +12
  - воспроизводится функциональность исходного проекта: отображается время; можно ввести имя пользователя и его цель, эти данные сохраняются в local storage и отображаются после обновления страницы, фоновое изображение и приветствие изменяются в зависимости от времени суток. Отличия от исходного проекта: 1) выводится не только время, но и день недели, дата, месяц, например: "Пятница, 25 сентября"; 2) время выводится в 24-часовом формате 3) при клике в поле ввода текст, который там был, исчезает, если пользователь ничего не ввёл или ввёл пустую строку, текст восстанавливается 4) четыре времени суток: утро 6:00-12:00, день 12:00-18:00, вечер 18:00-24:00, ночь 24:00-6:00.
- Смена фонового изображения +10
  - фоновые изображения можно выбрать из [коллекции изображений](https://github.com/irinainina/ready-projects/tree/momentum/momentum/assets/images) самого задания, или использовать другой источник. Фоновые изображения меняются каждый час, их содержание соответствует времени суток (утро, день, вечер, ночь). Есть кнопка, при клике по которой можно пролистать все фоновые изображения за сутки. Изображения пролистываются в том же порядке, в котором они менялись бы в реальном времени. Основное требование - плавная смена фоновых изображений. Пример плавной смены фонового изображения есть в материалах к заданию.
- Цитата дня +6
  - при загрузке приложения выводится цитата или другой короткий текст (высказывание, шутка, анекдот и т.д.). При перезагрузке страницы или клике на предназначенную для этого кнопку цитата заменяется на другую. Источником цитаты может быть подходящее бесплатное API (предпочтительный вариант) или собственный файл с данными. Язык цитаты русский или английский, на ваше усмотрение. Пример получения цитаты есть в материалах к заданию.
- Прогноз погоды +12
  - В приложении выводится прогноз погоды для указанного пользователем города. Прогноз погоды включает в себя иконку погоды, данные о температуре, относительной влажности воздуха, скорости ветра. Пример получения прогноза погоды с объяснением кода есть в материалах к заданию.
- Адаптивный дизайн +10
  - приложение корректно отображается как на компьютере, так и на мобильных устройствах. В качестве образца оформления можно взять [приложение Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=ru) или создать свой собственный улучшенный оригинальный дизайн.

## Instruction to cross-check

- каждый выполненный пункт - +2 балла
- Обратите внимание. Если прогноз погоды или смена цитаты не работают, посмотрите в консоль браузера. Код ошибки 403 или 501 говорит о проблеме с доступом к API. В таком случае приложение следует проверить позже - через несколько часов или на следующий день. Баллы при этом снижать не нужно, это проблема сервиса, а не приложения. Чтобы избежать подобных проблем, авторам работ не рекомендуется выкладывать их в общий доступ до окончания кросс-чека.

- **Базовая функциональность**
  - время выводится в 24-часовом формате, обновляется каждую секунду
  - выводится день недели, дата, месяц, например: "Пятница, 25 ноября"
  - можно ввести имя пользователя и его цель. Для ввода данных используется клавиша Enter
  - имя пользователя и его цель сохраняются в local storage и отображаются после обновления страницы
  - фоновое изображение и приветствие изменяются в зависимости от времени суток (утро, день, вечер, ночь)
  - при клике в поле ввода текст, который там был, исчезает, если пользователь ничего не ввёл или ввёл пустую строку, текст восстанавливается
- **Смена фонового изображения**
  - фоновые изображения меняются каждый час и выбираются в зависимости от времени суток (утро, день, вечер, ночь)
  - есть кнопка, при клике по которой можно пролистать все фоновые изображения за сутки
  - изображения пролистываются в том же порядке, в котором они менялись бы в реальном времени (утро, день, вечер, ночь), начиная с того, которое соотвествует текущему времени суток
  - при обновлении страницы формируется новый список фоновых изображений на текущие сутки
  - при клике по кнопке для обновления фонового изображения происходит плавная смена фоновых изображений, нет ситуации, когда пользователь видит частично загрузившееся изображение
- **Цитата дня**
  - при загрузке приложения выводится цитата или другой короткий текст (высказывание, шутка, анекдот и т.д.)
  - при перезагрузке страницы цитата заменяется на другую
  - есть кнопка, при клике по которой меняется цитата
- **Прогноз погоды**
  - в приложении есть возможность указать город
  - для указанного пользователем города выводится прогноз погоды
  - указанный пользователем город сохраняется в local storage и отображается при обновлении страницы. Также отображается прогноз погоды для него
  - прогноз погоды включает в себя данные о температуре, относительной влажности воздуха, скорости ветра
  - прогноз погоды включает в себя иконку погоды
  - если пользователь вводит пустую строку, данные не меняются, отображается прежний прогноз погоды. Если пользователь вводит данные, для которых API погоды не возвращает результат, выводится уведомление об ошибке в человекочитаемом формате
- **Адаптивный дизайн**
  - элемены приложения оптимально занимают площадь страницы
  - приложение корректно отображается как на компьютере, так и на мобильных устройствах. Отсутствует горизонтальная полоса прокрутки. Минимальное разрешение экрана, при котором проверяем корректность отображения приложения - 320px
  - при смене даты и времени, смене цитаты, смене фонового изображения, содержание страницы не дёргается, размеры блоков остаются прежними, кнопки для смены цитаты и смены фонового изображения остаются на своих местах
  - шрифт достаточного размера (не меньше 14рх) и контрастности [Colour contrast checking tool](https://www.bl2.ru/programing/colourcontrastcheck.html), хорошо читается на любом фоне. Можно использовать полупрозрачный overlay (есть в [коллекции изображений](https://github.com/irinainina/ready-projects/tree/momentum/momentum/assets/images)) или другой способ, позволяющий обеспечить читаемость текста.
  - интерактивность кликабельных элементов не сводится к свойству cursor:pointer. Стили при наведении, фокусе, клике меняются плавно (используйте свойство transition или @keyframes)

## Материалы

- Дата и время https://learn.javascript.ru/date
- Window.localStorage https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage
- LocalStorage на пальцах https://tproger.ru/articles/localstorage/
- Поймут даже дети: простое объяснение async/await и промисов в JavaScript https://habr.com/ru/post/474726/
- JavaScript. Как работает Async, Await https://youtu.be/SHiUyM_fFME
- Вебинар: Асинхронность в JavaScript https://youtu.be/Ih6Q7ka2eSQ

## Примеры кода

- Плавная смена фоновых изображений https://codepen.io/irinainina/pen/abzwapy
- Пример получения цитаты https://codepen.io/irinainina/pen/LYNqmQd
- Прогноз погоды в 20 строк https://github.com/irinainina/ready-projects/blob/weather/README.md

## API с цитатами

- https://favqs.com/api/qotd
- https://type.fit/api/quotes
- https://api.adviceslip.com/advice
- https://api.chucknorris.io/jokes/random
- https://programming-quotes-api.herokuapp.com/quotes
- https://quote-garden.herokuapp.com/api/v2/quotes/random
- https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand

Документ для вопросов: https://docs.google.com/spreadsheets/d/1dMDLBC4-1XPaVMehZB6DqetToXZhq4x0PiZtj-jvLRc/

## Cross-check

- инструкция по проведению cross-check: https://rs.school/docs/ru/cross-check-flow
- форма для проверки задания: https://momentum-cross-check.netlify.app/
- ссылки на лучшие работы добавьте, пожалуйста, в эту форму https://forms.gle/Xc9RVjEWTTGF6ubK8
