# Неделя 1

## React. Components

Что должно быть сделано:

1) Создать отдельную ветку для этого задания
2) Использовать CRA с темплейтом --typescript
3) Настроить eslint, prettier так, чтобы проект не собирался при наличие ошибок. Для eslint использовать минимум "eslint:recommended" и "plugin:react/recommended"
4) Добавить React-Router версии 6. Добавить хедер который показывает текущую страницу, добавить страницы "About Us", "404". Если в адресной строке попытаться ввести неизвестный роут, приложение должно перенаправлять на "404".
5) Отрисовать следующее на главной странице:
  - Search Bar. 
  (примеры: https://studio.uxpincdn.com/studio/wp-content/uploads/2020/09/BlogHeader_SearchBar_1200x600.png, https://www.sliderrevolution.com/wp-content/uploads/2021/02/cssheader1.jpg)

  Введенное значение сохранять в LocalStorage при анмаунте компонента. При инициализации его смотреть значение LocalStorage и отображать его.

  - Cards. Чем больше деталей на карточке, тем лучше.  
  (примеры: https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/behance.jpg, https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/rightmove.jpg, https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/awwwards.jpg).
  **В случаях, где нужен доступ к жизненным циклам компонента, или необходим стейт - использовать классовые компоненты. Использование хуков на данном этапе запрещено**
6) Добавить тесты на компоненты. LocalStorage замокать, добавить тесты как на одну карту, так и на список всех карт.
Можно использовать как Testing Library React, так и Enzyme, но только что-то одно. Предпочтение Testing Library React.
  
Все логические части должны быть вынесены в отдельные компоненты.

### Оценка

Задание будет оцениваться ментором в марте. Для удобства проверки создайте Pull Request(**МЕРЖИТЬ НЕ НАДО**).

1) Тесты - **4 балла**
2) eslint, prettier - **2 балла**
3) React App + компоненты и роутер - **9 баллов**

Если хоть один из пунктов не выполнен, то задание оценивается в **0 баллов**.
Если присутсвует прямая манипуляция с DOM - **0 баллов**

### Требования к репозиторию

- задание выполняется в **приватном репозитории школы** [Как работать с приватным репозиторием](https://docs.rs.school/#/private-repository?id=Как-работать-с-приватным-репозиторием)
- в приватном репозитории школы от ветки `main` создайте ветку с названием задания, в ней создайте папку с названием задания, в папке разместите файлы проекта
- история коммитов должна отображать процесс разработки приложения. [Требования к коммитам](https://docs.rs.school/#/git-convention?id=Требования-к-именам-коммитов)
- после окончания разработки необходимо сделать Pull Request из ветки приложения в ветку `main` [Требования к Pull Request](https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr). **Мержить Pull Request из ветки разработки в ветку `main` не нужно**


### Теория
https://docs.google.com/document/d/1WLWjBiVMjsVADf5FWFYfPObQOrLD1624h5etyafCfr8/edit

CRA: https://reactjs.org/docs/create-a-new-react-app.html
Components: https://reactjs.org/docs/components-and-props.html
React-router documentation + tutorial: https://reactrouter.com/docs/en/v6/getting-started/tutorial
React-router video course: https://www.youtube.com/watch?v=0auS9DNTmzE
React Testing Library documentation: https://testing-library.com/docs/react-testing-library/intro/
React Testing Library course: https://www.youtube.com/watch?v=n79PMyqcCJ8&t=585s

React:
https://www.youtube.com/watch?v=L8CmtfCu9AI
https://www.youtube.com/watch?v=Rrg4D6AHc5A
https://www.youtube.com/watch?v=w9MvuGWVvkY
short course react + typescript: https://www.youtube.com/watch?v=FJDVKeh7RJI
full tutorial: https://www.youtube.com/watch?v=4UZrsTqkcW4&t=8419s

Дополнительно: https://www.youtube.com/watch?v=GNrdg3PzpJQ
