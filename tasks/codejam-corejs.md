# CodeJam-3 CoreJS

### Deadline: 28-10-2018 21:00

## Задание
Вы должны реализовать 3 функции. Каждый функцию необходимо сохранить в отдельном файле с именем функции (Например make.js). Как только вы реализовали одну из функций, вы коммитает файл. Далее решаете и коммитаете следующий и т.д. Можно рефакторить и коммитать исправления до дедлайна.  

Когда задание будет выполнено, бросьте, пожалуйста, ссылку на ваш Pull Request вот сюда - 
https://docs.google.com/forms/d/e/1FAIpQLSdLn54O77NlrwH4Z5tViX0qMJGwdrpY--stBEdFpMH7E2rd0A/viewform

### Функция #1 "sumOfOther".

Реализуйте функцию  `sumOfOther`, которая получает на вход массив, например, `[2, 3, 4, 1]`, а возращает, `[8, 7, 6, 9]`. Входной массив - одномерный, целочисленный, произвольной длины. 
В результирующем массиве каждый элемент по индексу `i` - это сумма остальных элементов оригинального массива. 

### Функция #2 "make".

Реализовать функцию make, которую можно вызвать следующим образом:

```javascript
make(15)(34, 21, 666)(41)(sum); // return 777

function sum(a, b) {
    return a + b;
}

```
Пока переданный аргумент не функция, запоминаем значения аргументов (способы перечислены ниже), затем применяем функцию к аргументам по принципу `Array.prototype.reduce`, возвращаем полученное значение

Step | a    | b    | result
---- | ---- | ---- | ----
  0  |  15  |  34  |  49
  1  |  49  |  21  |  70
  2  |  70  |  666 |  736
  3  |  736 |  41  |  777

нельзя использовать глобальные переменные, сохранять промежуточные значения в `make.smth` или в `make.prototype`

Cпособы:
* через замыкание
* частичное применение (google: "partial application javascript")
* рекурсия (для гиков :smirk_cat:)

### Функция #3 "recursion"
Реализовать функцию recursion, которая получает на вход дерево представленное объектом следующей структуры:
```
                     100
        90                             120
70         99                   110          130
```
```
let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};

let array = recursion(tree);
console.log(array); // [[100], [90, 120], [70,99,110,130]]
```
и преобразует его в массив вида `[[100], [90, 120], [70,99,110,130]]`.   
Для решения должна использоваться рекурсия! 

### Требования к репозиторию: 
1. Вам необходимо создать публичный репозиторий c названием  `rsschool-codejam` на вашем GitHub аккаунте.
2. В `master` бранче должен быть только один файл - `readme.md`. 
3. Весь код должен находиться в бранче `codejam-3`. 
4. После выполнения задания вам необходимо открыть Pull Request `codejam-3`->`master`.

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

### Требования к оформлению PR (Pull Request)
1. PR name should contains **the task name** and probably additional info.
2. Changes **must not contain commented code, unnecessary files, changes from other branches and generated files** like *.bundle.js. Please review your changes before contributing. .editorconfig, .gitignore, etc. can be included.
3. Comments in the PR are good practice.
4. [How to write the perfect Pull Request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request)

## Критерии оценки:
- Реализована функция `sumOfOther` **+10 баллов**
- Реализована функция `make` **+20 баллов**
- Реализована функция `recursion` **+20 баллов**
- Требования к репозиторию, коммитам и PR выполены **+20 баллов**
- В проекте создан файл `package.json`, подключен пакет `eslint` и `eslint-config-airbnb-base`, код написан согласно требований `eslint-config-airbnb-base` **+20 баллов**
- В проект подключен пакет - https://mochajs.org/. Функции покрыты тестами. **+20 баллов**
- Все критерии выполенны за отведенное время (до 28-10-2018 21:00) **+10 баллов**

## Кто выполянет проверку задания?
Ваш ментор.
