#  Markdown & Git

Ваша задача - создать своё CV в формате markdown.  

## Порядок работы

1. В своём GitHub аккаунте создайте публичный репозиторий с названием `rsschool-cv`
2. В главной ветке данного репозитория (`main`) должен находиться только один файл `README.md`
3. От ветки `main` создайте ветку `gh-pages`. В ветке `gh-pages` создайте файл `cv.md`. 
4. Используя markdown-разметку в файле `cv.md` создайте своё CV. 
5. В файл `README.md` добавьте ссылку вида `https://github-username.github.io/rsschool-cv/cv`, в которой вместо `github-username` укажите свой GitHub username. После завершения работы по этой ссылке будет открываться страница CV
6. После завершения работы откройте Pull Request из ветки `gh-pages` в ветку `main`. **Мержить Pull Request не нужно** 

## Дополнительная информация. Деплой на GitHub Pages

Если вы верно выполнили все пункты инструкции, ваше CV задеплоилось на GitHub Pages. Такая страница создаётся автоматически при создании ветки `gh-pages`, если в корне этой ветки находится файл в формате .md или .html.  

Страница задеплоенного на GitHub Pages приложения доступна по адресу
>  `https://github-username.github.io/repository-name`

здесь
- `github-username` - username пользователя GitHub 
- `repository-name` - название репозитория

Составить ссылку на GitHub Pages можно вручную, но удобнее и проще её найти настройках репозитория. Для этого откройте настройки репозитория (кнопка с надписью Settings справа вверху) и прокрутите страницу с настройками до блока GitHub Pages). Там вы увидете надпись "Your site is published at ..." и ссылку на GitHub Pages.

Если в ветке `gh-pages` на верхнем уровне находится файл в формате .html, ссылка на GitHub Pages, которая находится в настройках репозитория, откроет html-страницу, созданную на основе этого файла. Если в ветке `gh-pages` на верхнем уровне находится файл в формате .md, к окончанию ссылки, которая находится в настройках репозитория, нужно добавить имя этого файла. 

## Требования к коммитам

- В ветке `gh-pages` должно быть не меньше 3-х коммитов.
- [Названия коммитов дайте согласно гайдлайну](https://docs.rs.school/#/git-convention)

## Требования к Pull Request

- Название Pull Request дайте по названию задания. В данном случае название Pull Request - `Markdown & Git`
- [Описание Pull Request дайте по схеме](https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr)

## Как сабмитить задание

Markdown & Git - автопроверяемый таск.  
После окончания работы над заданием зайдите в rs app https://app.rs.school/, выберите **Auto-Test**, в выпадающем списке выберите **Markdown & Git**, нажмите кнопку **Submit**. Справа отобразится результат проверки.

Сабмитить задание можно сколько угодно раз, каждый следующий сабмит перезаписывает предыдущий.

## Критерии оценки

**Максимальный балл за задание +100**

- выполнены требования к репозиторию +50
- выполнены требования к коммитам и Pull Request +50

<details>
<summary>Уведомления об ошибках и их вероятные причины</summary>

1. 0 баллов и статус "Failed task requirements: No CV at ..."
   Отсутствует страница по адресу  `https://your-github-account.github.io/rsschool-cv/cv`.  
   Возможные причины: в вашем  github аккаунте нет репозитория "rsschool-cv" с веткой "gh-pages" и файлом "cv.md". Или в ветке master нет файла README.md.

3. 50 баллов и статус "Failed commit requirements: Less than 3 commits"  
   Ответ: В вашей ветке "gh-pages" менее 3 коммитов.  
   Вы можете проверить свои коммиты здесь: `https://your-github-account.github.io/rsschool-cv/commits/gh-pages`. Коммиты "Merge ..." или "Initial commit" игнорируются.

3. 50 баллов и статус "Failed commit requirements: Commits do no follow guideline ..."  
   Не все коммиты выполняются по правилам: https://docs.rs.school/#/en/git-convention Все коммиты, не отвечающие правилам, будут перечислены в статусе.   

4. 50 баллов и статус "Failed PR requirements: No Pull Request with task name (Markdown & Git)"  
   Вы не отправили Pull Request с `gh-pages` в `master`или название Pull Request не "Markdown & Git".  
   Увидеть свой PR, вы можете здесь: `https://your-github-account.github.io/rsschool-cv/pulls`
</details>

## Материалы:

- [Что такое Markdown](https://guides.hexlet.io/markdown/)
- [Полезные команды для работы с Git](https://htmlacademy.ru/blog/boost/tools/useful-commands-for-working-with-git)
