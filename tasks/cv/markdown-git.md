#  Markdown & Git

## Задание
Создайте CV с использованием markdown разметки. Оформите репозиторий согласно требованиям.

## Порядок работы

1. В своём GitHub аккаунте создайте публичный репозиторий с названием `rsschool-cv`.
2. В главной ветке данного репозитория (`main`) должен находиться только один файл `README.md`.
3. От ветки `main` создайте ветку `gh-pages`. В ветке `gh-pages` создайте файл `cv.md`. 
4. Используя markdown разметку в файле `cv.md` создайте своё CV. 
5. В ветке `gh-pages` должно быть не меньше 3-х коммитов.
6. После завершения работы откройте Pull Request из ветки `gh-pages` в ветку `main`.
7. Название Pull Request даётся по названию задания. В данном случае название Pull Request - `Markdown & Git`.
8. В описание PR добавьте ссылку вида `https://github-username.github.io/rsschool-cv/cv`, в которой вместо `github-username` укажите свой GitHub username. После завершения работы по этой ссылке будет открываться страница CV.
**Мержить Pull Request не нужно** 

## Требования к коммитам
- [Названия коммитов дайте согласно гайдлайну](https://docs.rs.school/#/git-convention).

## Требования к Pull Request
- [Описание Pull Request дайте по схеме](https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr).


## Критерии оценки
**Максимальный балл за задание +100**
- выполнены требования к репозиторию +50;
- выполнены требования к коммитам и Pull Request +50.

<details>
<summary>Уведомления об ошибках и их вероятные причины</summary>

1. 0 баллов и статус "Failed task requirements: No CV at ..."
   Отсутствует страница по адресу  `https://your-github-account.github.io/rsschool-cv/cv`.  
   Возможные причины: в вашем  github аккаунте нет репозитория "rsschool-cv" с веткой "gh-pages" и файлом "cv.md". Или в ветке master нет файла README.md.

3. 50 баллов и статус "Failed commit requirements: Less than 3 commits"  
   Ответ: В вашей ветке "gh-pages" менее 3 коммитов.  
   Вы можете проверить свои коммиты здесь: `https://github.com/your-github-account/rsschool-cv/commits/gh-pages`. Коммиты "Merge ..." или "Initial commit" игнорируются.

3. 50 баллов и статус "Failed commit requirements: Commits do no follow guideline ..."  
   Не все коммиты выполняются по правилам: https://docs.rs.school/#/en/git-convention Все коммиты, не отвечающие правилам, будут перечислены в статусе.   

4. 50 баллов и статус "Failed PR requirements: No Pull Request with task name (Markdown & Git)"  
   Вы не отправили Pull Request с `gh-pages` в `master`или название Pull Request не "Markdown & Git".  
   Увидеть свой PR, вы можете здесь: `https://github.com/your-github-account/rsschool-cv/pulls`.
</details>

## Материалы:
- [Что такое Markdown](https://guides.hexlet.io/markdown/).
- [Полезные команды для работы с Git](https://htmlacademy.ru/blog/boost/tools/useful-commands-for-working-with-git).

## Примеры CV
- https://annavoloshina.github.io/rsschool-cv/cv
- https://kryvetski-andrei.github.io/rsschool-cv/cv
- https://nikita-resh.github.io/rsschool-cv/cv
- https://themrcrowley.github.io/rsschool-cv/cv
- https://elvinyeka.github.io/rsschool-cv/cv
- https://mrks77.github.io/rsschool-cv/cv


