# Final game refactoring

| Deadline  | Folder name |
|-----------|-------------|
| 23:59 08.07.2018 | game-refactoring |

## Области рефакторинга

### Качество кода
- Не писать весь код в одном js файле. :slightly_smiling_face:
- Убрать вложенные SetTimeout, синхронизацию кода на тайм-аутах и т.д. Использовать промисы/async/await где это возможно.
- Заменить magic number на именованные константы.
Например, вместо `if (event.keyCode === 32 || event.keyCode === 13) {….}` использовать `if (event.keyCode === KeyboardEvent.SPACE || key === KeyboardEvent.ENTER ) {….}` и т.д.
- Разделить функции, которые длиннее 30 строк (без учета объявления переменных). Хотябы минимальный single responsibility.

### Cтуктура проекта. Пример организации файлов и папок:
    
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
    ├── scenes
    │   ├── home
    │   │   ├── index.html       # scene template
    │   │   ├── index.scss       # scene related styles
    │   │   ├── index.js         # scene logic
    │   ├── login
    │   ├── score
    ├── app.js                   # main entry point. 
                        
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
    4. Реализовать несколько примеров использования.
 
 ### Коммиты
 - Каждый делает рефакторинг своего проекта один (даже если изнальную игру делали вдвоем).
 - Все коммиты делаем в выданный вам стандарный приватный репозиторий в бранч "final-game-refactoring"
 - Требования к наименованию - https://github.com/rolling-scopes/rsschool-ui/blob/master/CONTRIBUTING.md#git-commit-messages
 
