| Deadline         | Repo name | Branch name |
| ---------------- | --------- | ----------- |
| 30.08.2020 23:59 | songbird  | songbird    |

# songbird

Songbird - одностраничное приложение, викторина для распознавания птиц по их голосам.

## Структура приложения

Игровое поле викторины состоит из четырёх блоков:

1. header
2. блок с текущим вопросом
3. блок с вариантами ответов
4. блок с описанием птицы

![screenshot](./songbird/screenshot_birds-quiz.png)

### Demo

https://birds-quiz.netlify.com/ (версия без Extra scope)

## Описание основных блоков

- header содержит название или логотип приложения, счёт игры, список вопросов.
- блок с вопросом содержит аудиоплеер с записью голоса птицы и заглушки на месте названия и изображения птицы. Когда игрок выбирает правильный ответ, в блоке с вопросом отображаются название и изображение птицы, голос которой звучал.
- блок с вариантами ответов содержит список с названиями шести разных птиц.
- блок с описанием птицы содержит данные о ней: изображение, русское и латинское название, аудиозапись голоса, короткая информация.

## Механизм игры

- птица в блоке с вопросом рандомно выбирается из списка с вариантами ответов
- при клике по одному из пунктов списка с вариантами ответов, в блоке с описанием птицы выводятся информация о ней
- если игрок выбрал правильный ответ, в блоке с вопросом выводится название и изображение птицы
- на старте игры score: 0. Если игрок дал правильный ответ с первой попытки, его счёт увеличивается на 5 баллов, каждая следующая попытка даёт на один балл меньше, если правильный ответ дан только с последней, шестой попытки, игрок получает за него 0 баллов
- для правильных и неправильных ответов игрока используется звуковая и цветовая индикация
- когда игрок дал правильный ответ, активируется кнопка "Дальше" и он получает возможность перейти к следующему вопросу
- после последнего вопроса выводится счёт игры: "Вы набрали **_ баллов из _** возможных.
- если набрано не максимально возможное количество баллов, игроку предлагается пройти викторину ещё раз
- если набрано максимально возможное количество баллов, выводится поздравление и уведомление об окончании игры.

## Технические требования

- для работы используйте собственный приватный репозиторий
- название репозитория: **songbird**, название ветки разработки: **songbird**
- работа приложения проверяется в браузере Google Chrome последней версии
- использование jQuery не допускается
- можно использовать Bootstrap и другие CSS фреймворки
- необходимо использовать React
- можно использовать CSS preprocessors
- демо-версия приложения размещается на `https://www.netlify.com/`, либо на другом подобном хостинге. Название демо-версии приложения даёте по схеме: никнейм пользователя - название таска
- история коммитов должна отображать процесс разработки приложения. [Требования к коммитам](https://rs.school/docs/ru/git-convention)
- после окончания разработки или при наступлении дедлайна, создайте и замержите pull request из ветки songbird в ветку master. [Требования к pull request](https://rs.school/docs/ru/pull-request-review-process#требования-к-pull-request-pr)
- как сабмитить своё решение: в поле Cross-Check: Submit https://app.rs.school/ добавьте ссылку на pull request

## Критерии оценки:

**Максимальный балл за задание: 240 баллов**

- **Вёрстка, дизайн, UI: (+30)**
  - минимальная ширина страницы, при которой приложение отображается корректно – 320 рх
  - внешний вид приложения полностью повторяет демо или является его улучшенной версией
- **Аудиоплеер: (+30)**

  - стандартный: (+10)
  - кастомный, такой же, как в демо приложения, может отличаться по цвету: (+10)
  - у кастомного аудиоплеера есть регулятор громкости звука: (+10)  
    Для кастомизации аудиоплеера можно использовать библиотеки

- **Контент: (+20)**

  - использование заранее подготовленных данных [birds data](./songbird/birds.js): ( 0 )
  - создание и использование собственной коллекции данных, либо использование подходящего API: (+20)

- **Header: (+20)**
  - правильное отображение текущего счета игры: (+10)
  - индикация текущего вопроса: (+10)
- **Блок с вопросом: (+20)**

  - подстановка дефолтного изображения и замена названия птицы на символы (\*\*\*), пока игрок не выберет правильный ответ: (+10)
  - при выборе правильного ответа появляется изображение и название птицы: (+10)

- **Блок с вариантами ответов (названия птиц): (+30)**

  - цветовая индикация правильного/неправильного ответа в виде индикаторов разного цвета рядом с названием птицы: (+20)
  - при клике по названию птицы в блоке с описанием птицы отображается информацию о ней: (+10)  
    Если правильный ответ уже дан, возможность просматривать описания птиц при клике по названию остаётся, цвет индикаторов при этом не изменяется.

- **Блок с описанием птицы: (+30)**
  - пока игрок не кликнул по названию птицы из списка, в блоке выводится короткий текст с предложением послушать плеер и выбрать название птицы, чей голос прозвучал: (+10)
  - при клике по названию птицы из списка, в блоке с описанием птицы появляется актуальная информация о ней: (+20)  
    Информация о птице включает:
    - изображение
    - название (на русском и на латыни)
    - аудиоплеер с записью голоса
    - дополнительное описание птицы.
- **Кнопка перехода к следующему вопросу: (+30)**
  - пока не выбран правильный ответ, кнопка не активна, нет возможности перейти к следующему заданию. Активное и неактивное состояние кнопки визуально отличаются, например, активная кнопка имеет зеленый, не активная - серый цвет: (+10)
  - после правильного ответа на последний вопрос, клик по кнопке скрывает блок с вопросом, блок с вариантами ответов и блок с описанием птицы. Появляется сообщение с поздравлением об окончании игры: (+20)  
    Сообщение содержит количество набранных баллов из максимально возможных и кнопку с предложение сыграть ещё раз.
- **Extra scope: (+30)**
  - звуковая индикация правильного/неправильного ответа: (+20)
    - при выборе правильного или неправильного ответа издаются разные звуковые сигналы
    - при выборе неправильного ответа проигрывание аудиоплеера не должно останавливаться
    - при выборе правильно ответа проигрывание аудиоплеера должно остановиться
  - Поздравление с абсолютной победой, если набрано максимально возможное количество баллов: (+10)  
    Здесь можно проявить свою фантазию. Это может быть все, что угодно. Например: картинка, анимация, видео, ссылка на что-то интересное, сертификат знатока птичьих голосов, слоган "теперь ты знаешь кто чирикнул" и т.д  
    Для удобства проверки правильные ответы выведите в консоль.

## Штрафы

- любой сбой/поломка приложения, связанная с действиями пользователя: -20  
  Неправильный подсчёт баллов, нет перехода на следующую страницу, выводится неверная информация и т.д. Этот пункт не касается ошибок в консоли.

## Материалы

### Информационные ресурсы

- голоса птиц - https://www.xeno-canto.org/
- ссылка для получения голоса птицы по её латинскому названию  
  `https://www.xeno-canto.org/api/2/recordings?query=BIRD NAME`
- изображения птиц - https://www.flickr.com/
- ссылка для получения изображения птицы по её названию (api_key укажите свой)
  `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f15ff623f1198a1f7f52550f8c36057&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=соловей`

### Cross-check

- инструкция по проведению cross-check: https://rs.school/docs/ru/cross-check-flow
- форма для проверки задания https://songbird-cross-check.netlify.app/
- если вам понравилась работа, ссылку на нее добавьте, пожалуйста, в эту форму: https://forms.gle/4UUyQ2214iD7zqYk8

### Документ для вопросов

- форма для вопросов, связанных с выполнением задания: https://docs.google.com/spreadsheets/d/1CKx6BcS7DgFHPhdaB3IUoaNLUcGDlqHqus3wms5b1V4/edit?usp=sharing
