## Советы по выполнению задания

В данной статье, будут представлены советы по выполнению Markdown & Git и HTML, CSS & Git Basics. Данная статья является помощником в выполнении задания, но никак не примером для копирования.
- [Markdown & Git](git-markdown.md)
- [HTML, CSS & Git Basics](html-css-git.md)
- [HTML & CSS](html-css.md)

## Начнем с первого задания Markdown & Git

1. Перейдите на https://github.com/ и зарегистрируйтесь. Скачайте GIT и установите себе на компьютер https://git-scm.com/ . Во время уставновки просто жмите постоянно `Next`.

2. В своём GitHub аккаунте создайте публичный репозиторий с названием `rsschool-cv`.
Как это сделать: нажмите на плюс около аватара, в выпавшем окне выберите New repository, введите название репозитория, проверьте, чтобы он был публичным, и создайте README.md, нажав галочку.

![Image 1](https://i.ibb.co/yFsYLHQ/1.jpg)

3. На компьютере в папке с проектами склонируйте репозиторий. 
Как это сделать: нажмите правую клавишу мыши и в выпавшем меню выберите `Открыть с помощью Code`, но можно и через Git Bash Here вводить команды в консоль (терминал).

![Image 2](https://i.ibb.co/GJ1pQdF/3.jpg)

4. В VS Code откройте терминал `Terminal → New Terminal` или сочетанием клавиш `Ctrl+~`.

![Image 3](https://i.ibb.co/zf8kPfr/4.jpg)

5. Зайдите в созданный репозиторий на GitHub. Нажимаем `Code` и скопируйте `ссылку HTTPS`.

![Image 4](https://i.ibb.co/6P46PN2/5.jpg)

6. В терминал введите команду `git clone <ссылка HTTPS>`.

![Image 5](https://i.ibb.co/pR11Zjz/8.jpg)

- В папке с проектами должна появиться папка `rsschool-cv` (репозитория), в которой будет скрытая папка `.git` и файл `README.md`.

![Image 6](https://i.ibb.co/qWTXH3x/7.jpg)

7. В файл `README.md` добавьте ссылку вида `https://your-github-account.github.io/rsschool-cv/cv`, в которой вместо *your-github-account* укажите свой *GitHub username*. После завершения работы по этой ссылке будет открываться страница CV.

![Image 7](https://i.ibb.co/P4D7Rkd/9.jpg)

8. Нужно перейти в папку, в которой находится скрытая папка .git. 
Как это сделать: с помощью команды `cd .\rsschool-cv\`.

![Image 8](https://i.ibb.co/WnQ5V8b/10.jpg)

9. Теперь необходимо из локального репозитория (компьютера) загрузить в удаленный репозиторий (на GitHub) изменения. Для начала пишите команду `git add -A` (файлы добавляются в stage changes). Можно проверить что изменилось от начального состояния и показать файл командой `git status`.
> **Обратите внимание**: для успешной загрузки в удаленный репозиторий необходимо, чтобы изменённые файлы были сохранены. В редакторе кода при необходимости можно настроить автосохранение.

![Image 9](https://i.ibb.co/ncw4tpr/11.jpg)

10. Далее фиксируйте изменения (*коммитим*) командой `git commit -m 'НАЗВАНИЕ КОММИТА'`.
- Обратите внимание на **требования** к коммитам [https://docs.rs.school/#/git-convention](https://docs.rs.school/#/git-convention).

![Image 10](https://i.ibb.co/9tD040y/12.jpg)

11. Теперь можно пушить (отправить на GitHub с локальной машины) изменения. Но для начала проверьте, в какой ветке вы находитесь, командой `git branch`, а затем запуште изменения командой `git push origin <НАЗВАНИЕ ВЕТКИ>`.

![Image 11](https://i.ibb.co/0Y2kgyf/17.jpg)

12. Можно обновить страницу на GitHub и убедиться, что произошли изменения. Так же можно зайти на страницу коммитов и просмотреть все коммиты, которые есть на данный момент в данной ветке.

![Image 12](https://i.ibb.co/JBkyCzB/14.jpg)

![Image 13](https://i.ibb.co/zGSv810/15.jpg)

13. Создайте новую ветку `gh-pages` и перейдите в неё с помощью команды `git checkout -b gh-pages`, и опять можно проверить, в какой ветке сейчас находитесь с помощью команды `git branch`.

![Image 14](https://i.ibb.co/1m5H1vY/18.jpg)

14. Удалите файл `README.md` (можно через VS Code) и создайте новый файл `cv.md`. Запуште изменения на GitHub. Обратите внимание на команду `git push origin gh-pages`, т.к. вы пушите изменения в ветку `gh-pages`.

![Image 15](https://i.ibb.co/Fsk85Bc/19.jpg)

15. Если обновить страницу репозитория в браузере, то должна появиться новая ветка `gh-pages`, в которой будет один пустой файл `cv.md`.

![Image 16](https://i.ibb.co/DkqyC0k/20.jpg)

16. Заполните `cv.md` в редакторе кода по правилам Markdown https://guides.hexlet.io/markdown/ и периодически пуште изменения на GitHub

![Image 17](https://i.ibb.co/tMKvVDH/21.jpg)

- **Не забывайте про правильное название коммитов!**

![Image 18](https://i.ibb.co/bgzdP9V/22.jpg)

17. Когда закончите писать своё CV и запушите последние изменения, необходимо сделать `Pull Request`. Перед этим желательно проверить название коммитов. После заходите в репозиторий на GitHub, по центру находится кнопка `Pull Request`, жмите на нее. Затем на кнопку справа `New pull request`. Выберите *откуда (справа)* и *куда (слева)* будете делать pull request и нажмите зеленую кнопку `Create pull request`.

![Image 19](https://i.ibb.co/n1TrZT1/23.jpg)

![Image 20](https://i.ibb.co/CvVypr1/24.jpg)

![Image 21](https://i.ibb.co/6F1zc52/25.jpg)

- Описание Pull Request дайте по схеме [https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr](https://docs.rs.school/#/pull-request-review-process?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-pull-request-pr). Название Pull Request дайте по названию задания

![Image 22](https://i.ibb.co/fX5rSQm/26.jpg)

- **Merge жать не нужно!**

![Image 23](https://i.ibb.co/DwH43qn/27.jpg)

18. Зайдите в `RS App`, затем во вкладку `Auto-Test`. Выберите таск `Markdown & Git` и нажмите кнопку **Submit**.

![Image 24](https://i.ibb.co/hKqRBYg/28.jpg)

## Переходим ко второму заданию HTML, CSS & Git Basics

Работу ведёте в репозитории rsschool-cv, созданном при выполнении предыдущего задания `Git & Markdown`.

1. От ветки `gh-pages` создайте ветку `rsschool-cv-html`. Проверьте, в какой ветке вы находитесь, командой `git branch`. Eсли в `gh-pages`, то создайте новую ветку `rsschool-cv-html` и перейдите в неё.

![Image 25](https://i.ibb.co/5LB8R1v/1-1.jpg)

2. Создайте файл `index.html`, напишите вёрстку для CV:
- вёрстка валидная, семантическая;
- при написании кода следуйте гайдлайну [https://codeguide.co/](https://codeguide.co/);
- контент размещается в блоке, который горизонтально центрируется на странице;
- страница СV должна корректно отображаться в браузере Google Chrome последней версии;
- *рекомендуется учитывать критерии оценки для следующего задания* HTML & CSS [html-css.md](html-css.md);
После запуште изменения в ветку `rsschool-cv-html`.

![Image 26](https://i.ibb.co/Zz3vQPv/2.jpg)

3. Для красоты CV создайте файл `style.css` и напишите стили для данной вёрстки. После того, как сделаете это, так же пуште изменения на GitHub. Также нужно добавить ваше фото или аватарку. И так же все изменения запушить в эту ветку.

4. Создайте `Pull Request` из ветки `rsschool-cv-html` в ветку `gh-pages`.

![Image 27](https://i.ibb.co/pwHd1Ls/4-1.jpg)

5. Замержите Pull Request, нажав кнопку ниже `Merge pull request`, потом кнопку `Confirm merge`.

![Image 28](https://i.ibb.co/hXxfSZX/5-1.jpg)

![Image 29](https://i.ibb.co/CzTqhxJ/6.jpg)

6. Проверьте, в какой ветке вы сейчас находитесь (команда `git branch`). Вы должны быть в ветке `rsschool-cv-html`. Переключитесь в ветку `main` с помощью команды `git checkout main`. Опять проверьте, в какой вы ветке (точно ли переключились). Файлы `index.html`, `style.css` и др. должны *исчезнуть* (в vs code будет написано *delited*). Но появится файл `README.md`. Откройте его и измените ссылку.

![Image 30](https://i.ibb.co/8NMWYp1/7-1.jpg)

7. Далее *пуште* на GitHub (только в ветку `main`).

![Image 31](https://i.ibb.co/BVpcYnp/8-1.jpg)

8. Зайдите в `RS App`, затем во вкладку `Auto-Test`. Выберите таск `HTML, CSS & Git Basics` и нажмите кнопку **Submit**.

![Image 32](https://i.ibb.co/k0gMmqW/100.jpg)
