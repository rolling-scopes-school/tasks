# CodeJam-dom Нотификации для пользователя

### Deadline: Sunday, November 11, 2018 23:59

## Задание
Вы должны реализовать UI компонент notifications с описаной функциональностью, js файл и css файл должны лежать в папке notifications. Как только вы реализовали одну из функций, вы коммитает файл. Далее реализовываете следующую функциональность и коммитаете и т.д. Можно рефакторить и коммитать исправления до дедлайна.  

### Описание компонента

Необходимо реализовать компонент, который будет показываться пользователю через 5 секунд после загрузки страницы в правом верхнем углу экрана и будет отображать заданную "полезную информацию". Компонент сохраняет свою позицию при скролинге страницы.  "Полезная информация" задается компоненту при его инициализации в виде массива строк.
![codejam-2-dom](http://varabei.com/public/codejam-2-dom.png)

Компонент должен содержать следующие элементы:  
- (1) Иконка закрытия. При клике на нее - компонент закрывается
- (2) Чекбокс отключения нотификации, выставляет флаг в локал сторадж. В данном случае компонент не будет показан при перезагрузке страницы. 
- Стрелки (3) и (4), которые переключают содержимое элемента (6) на предыдущую нотификацию или следующую нотификацию 
- (5) Номер нотификации - отображает текущую позицию нотификации.
- Поддержка клавиатуры. Компонент поддерживает управление с клавиатуры. Переключение вперед/назад, закрытие по крестику.

### Ограничения
    - Должно работать в Chrome
    - Нельзя использовать jQuery и другие библиотеки
    - Нельзя использовать Bootstrap и другие css фреймворки
    - Нельзя использовать Angular/React/Vue и другие фреймворки
    - Можно использовать CSS препроцессоры 
    - Можно гуглить,общаться между собой и пользоваться stackoverflow
    
### Как сдавать
    - Создать пустую html страницу (Например, index.html).
    - Добавить туда текст-"рыба" (Например, https://en.wikipedia.org/wiki/Lorem_ipsum)
    - Приступить к реализации компонента "Нотификация"
    - Сверстать статический компонент 
    - Реализовать необходимую функциональность
    - Комитать ваш код по ходу разработки.
        1. пустая страница
        2. верстка компонента
        3. функциональность 
        4. и т.д.
    - Рефакторить и коммитать исправления до дедлайна.
    
    
### Требования к репозиторию: 
1. Вам необходимо работать с ранее выданным приватным репозиторием.
2. Весь код должен находиться в бранче `codejam-dom`, папка `codejam-dom`. 
4. После выполнения задания вам необходимо открыть Pull Request `codejam-dom`->`master`.

### Требования к оформлению PR (Pull Request)
1. PR name should contains **the task name** and probably additional info.
2. Changes **must not contain commented code, unnecessary files, changes from other branches and generated files** like *.bundle.js. Please review your changes before contributing. .editorconfig, .gitignore, etc. can be included.
3. Comments in the PR are good practice.
4. [How to write the perfect Pull Request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request)

### Требования к коммитам
- Минимум 3 коммита
- Названия коммитов должны быть согласно гайдлайна - https://www.conventionalcommits.org/en/v1.0.0-beta.2/ 
Основные требования:
```
  * Allowed Types:
    * docs: - *documentation only changes*
    * feat: - *a new feature*
    * fix: - *a bug fix*
    * perf: - *a code change that improves performance*
    * refactor: - *a code change that neither fixes a bug nor adds a feature*
    * style: - *сhanges that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)*
    * ...
  * Use the present tense ("add feature" not "added feature")
  * Use the imperative mood ("move cursor to..." not "moves cursor to...")
  * Limit the first line to 72 characters or less
  * Reference issues and pull requests liberally after the first line
```

### Критерий оценки:
- Максимальный бал за задание - **100**
- Реализована верстка компонента (расположение в правом верхнем углу) **+15**
- Реализовано закрытие по клику на крестик **+5**
- Реализовано сохранение состояния в window.localStorage. Компонет не показывается при перезагрузке страницы, если пользователь его задизейблил **+20**
- Реализовано переключение по стрелке вперед и назад **+10**
- Реализован бесконечный цикл перемотки нотификаций (после последнего начинает с начала) **+15**
- Реализовано управление с клавиатуры **+15**
- Требования к репозиторию, коммитам и PR выполены **+10 баллов**
- В проекте создан файл `package.json`, подключен пакет `eslint` и `eslint-config-airbnb-base`, код написан согласно требований `eslint-config-airbnb-base` **+10 баллов**

## Кто выполянет проверку задания?
Ваш ментор.

## Разбор решения
- [Слайды](https://docs.google.com/presentation/d/1gH21NJrZlnQpigodbmDtJmozamkezPJ8B65gqqFQwRU/edit#slide=id.g383cf02937_1_1)
- [Видео](https://www.youtube.com/watch?v=UaCGsLvviCA&index=11&list=PLe--kalBDwjhdXudsOpKooP6q9bAl3rPG)

