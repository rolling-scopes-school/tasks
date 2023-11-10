# Final game refactoring

| Deadline         | Folder name      |
| ---------------- | ---------------- |
| 23:59 08.07.2018 | game-refactoring |

## Области рефакторинга

### Качество кода

- Убрать вложенные SetTimeout, синхронизацию кода на тайм-аутах и т.д. Использовать промисы/async/await где это возможно.
- Заменить magic number на именованные константы.
  Например, вместо `if (event.keyCode === 32 || event.keyCode === 13) {….}` использовать `if (event.keyCode === KeyboardEvent.SPACE || key === KeyboardEvent.ENTER ) {….}` и т.д.
- Разделить функции, которые длиннее 40 строк (без учета объявления переменных). Хотябы минимальный single responsibility.
- Минимальное использование тернарных операторов.
- Использовать чистые функции (pure functions), где это возможно. Если не раньше не слышали, можно начать знакомство [тут](https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c) или [тут](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
- Использовать осмысленные имена переменных. Избегать однобуквенных имен (i,n,j,d и т.д), абстрактных названий (obj, arr, num, item1 и т.д.)

### Cтуктура проекта. Пример организации файлов и папок:

Использование webpack - обязательно! Директории компонентов хранят все необходимые ресурсы и стили. Например, при удалении папки `modal-dialog` будут удалены стили относящееся к данному диалогу.

    dist
    src
    ├── components
    │   ├── loading
    │   ├── modal-dialog
    │   ├── tasks
    │   │   ├── engToRu
    │   │   │   ├── index.html   # component template
    │   │   │   ├── index.scss   # component related styles
    │   │   │   ├── index.js     # component logic
    │   │   ├── simpleMath
    │   │   │   ├── index.html
    │   │   │   ├── index.scss
    │   │   │   ├── index.js
    ├── screens
    │   ├── home
    │   │   ├── images
    │   │   ├── index.html       # home screen template
    │   │   ├── index.scss       # home screen styles
    │   │   ├── index.js         # home screen logic
    │   ├── login
    │   ├── battle
    │   ├── score
    ├── app.js                   # main entry point.
    webpack.config.js
    README.md

Замечания по использованию webpack:

- нет смысла оборачивать код в Immediately-invoked Function Expression.
- нет смысла использовать 'use strict'.

### Реюзабельные компоненты и примеры их использования

- Модальный диалог.
  1. Создать страницу modal.html
  2. Текстом описать возможности использования компонента.
  3. Реализовать несколько примеров использования.
- Loading screen.
  1. Создать страницу loading-screen.html
  2. Реализовать минимальные функциональные требования
  - Показать Loading-screen на всю страницу + заданный текст или html
  - Спрятать Loading-screen
  3. Текстом описать возможности использования компонента.
  4. Реализовать несколько примеров использования

Реюзабельные компонент не должены содержать логику приложения.  
 Для проектов написанных на React, можно использовать https://github.com/storybooks/storybook

### Коммиты

- Каждый делает рефакторинг своего проекта один (даже если изнальную игру делали вдвоем).
- Все коммиты делаем в выданный вам стандарный приватный репозиторий в бранч "final-game-refactoring"
- Требования к наименованию - https://github.com/rolling-scopes/rsschool-ui/blob/master/CONTRIBUTING.md#git-commit-messages
- Папку node_modules коммитать её тоже не надо! Она должна быть указанна в файле .gitignore

### Критерии оценки

Такие же, как в таске "final game". При условии, что рефакторинг был произведен в полном объеме.
