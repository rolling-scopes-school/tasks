# Неделя 3

## React. API




!! Задание выполняется в школьном приватном репозитории !!
Нужно выполнять задание на базе предыдущего

Что должно быть сделано:

1) Создать отдельную ветку для этого задания
2) Выбрать апи
Предлагается использовать следующие API(но можно использовать любое другое, которое вам нравится, если оно поддерживает поиск, пагинацию и сортировку): 
      - https://www.flickr.com/services/api/flickr.photos.search.html
      - https://the-one-api.dev/documentation
      - https://rickandmortyapi.com/documentation/
      - https://developers.themoviedb.org/3/getting-started/introduction
      - https://pipedream.com/apps/swapi
      - https://github.com/public-apis/public-apis
**Обязательно, чтобы апи поддерживало поиск, пагинацию и сортировку, хоть на этом этапе они не понадобятся, но велика вероятность что пригодятся позже**
2) Переписать страницу для поиска, разбить ее на 2 логических части:
    - **строка поиска.** Вводим текст -> нажимаем Enter -> отправляем запрос к API с введенным параметром -> список результатов поиска обновляется
    - **список результатов поиска**: отображаем данные которые вернул API запрос при помощи Cards. 
3) Кастомер решил что требования поменялись. Каждый элемент списка теперь должен отображать минимальную информацию. При клике на элемент - отображаем всю доступную информацию об этом элементе в модальном окне. Закрываться модальное окно должно по клику на крестик в верхнем правом углу или по нажатию на странизу за пределами модального окна. При открытии модального окна на страницу должен быть наложен overlay.
4) Сделать индикатор загрузки (компонент с анимацией или хотя бы строка - "Загружаем"). Расположение индикатора на свое чувство прекрасного.

Все логические части должны быть вынесены в компоненты.
**User friendly интерфейс с индекатором загрузки и сообщениями на случай если данные не найдены или что-то сломалось приветствуются.**
5) Добавить тесты, апи коллы в тестах замокать

### Оценка

Задание будет оцениваться ментором в течении первых 6 недель. Для удобства проверки создайте Pull Request(**МЕРЖИТЬ НЕ НАДО**).

1) Тесты - **3 балла**
2) App + API - **12 баллов**

Если хоть один из пунктов не выполнен, то задание оценивается в **0 баллов**.

### Требования к репозиторию

- задание выполняется в **приватном репозитории школы** [Как работать с приватным репозиторием](https://docs.rs.school/#/private-repository?id=Как-работать-с-приватным-репозиторием)
- в приватном репозитории школы от ветки предыдущего задания создайте ветку с названием задания
- история коммитов должна отображать процесс разработки приложения. [Требования к коммитам](https://docs.rs.school/#/git-convention?id=Требования-к-именам-коммитов)
- после окончания разработки необходимо сделать Pull Request из ветки приложения в ветку предыдущего задания [Требования к Pull Request](https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr). **Мержить Pull Request из ветки разработки в ветку предыдущего задания не нужно**

### Теория

- Fetching Data with Fetch API: [ReactJS: Fetching Data with Fetch API and ComponentDidMount
](https://www.youtube.com/watch?v=r40gtnaTe9s)
- [Full React Tutorial #17 - Fetching Data with useEffect](https://www.youtube.com/watch?v=qdCHEUaFhBk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=17)
- [Full React Tutorial #18 - Conditional Loading Message
](https://www.youtube.com/watch?v=qtheqr0jgIQ&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=18)
- [Full React Tutorial #19 - Handling Fetch Errors](https://www.youtube.com/watch?v=DTBta08fXGU&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=19)
- [React API - video](https://www.youtube.com/watch?v=W9czPM2N65Y&t=3495s)
- [Fetch Data from an API in React](https://www.youtube.com/watch?v=T3Px88x_PsA)
- React Testing Library - [Mock API Calls - Mock Service Worker](https://www.youtube.com/watch?v=oMv2eAGWtZU) 
