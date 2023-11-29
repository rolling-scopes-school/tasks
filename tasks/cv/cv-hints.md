## Советы по выполнению задания

Советы не являются частью задания. Следуйте советам только в той мере, в которой они могут вам помочь.

В данной статье, будут представлены советы по выполнению Markdown & Git и HTML, CSS & Git Basics. Данная статья является помощником в выполнении задания, но никак не примером для копирования.

- [Markdown & Git](git-markdown.md)
- [HTML, CSS & Git Basics](html-css-git.md)

## Начнём с первого задания Markdown & Git

1. Перейдите на https://github.com/ и зарегистрируйтесь. Скачайте GIT и установите себе на компьютер https://git-scm.com/ . Во время уставновки просто жмите постоянно `Next`.

2. В своём GitHub аккаунте создайте публичный репозиторий с названием `rsschool-cv`.
   Как это сделать: нажмите на плюс около аватара, в выпавшем окне выберите New repository, введите название репозитория, проверьте, чтобы он был публичным, и создайте README.md, нажав галочку.

![Image 1](https://i.ibb.co/2ZjkXSJ/image.png)

3. На компьютере в папку с проектами склонируйте репозиторий.
   Как это сделать: нажмите правую клавишу мыши и в выпавшем меню выберите `Открыть с помощью Code`, но можно и через Git Bash Here вводить команды в консоль (терминал).

![Image 2](https://i.ibb.co/TmdL7HH/image.png)

4. В VS Code откройте терминал `Terminal → New Terminal` или сочетанием клавиш `Ctrl + ~`.

![Image 3](https://i.ibb.co/NShcJ68/image.png)

5. Зайдите в созданный репозиторий на GitHub. Нажимаем `Code` и скопируйте `ссылку HTTPS`.

![Image 4](https://i.ibb.co/37yVsvR/image.png)

6. В терминал введите команду `git clone <ссылка HTTPS>`.

![Image 5](https://i.ibb.co/wr6Hgh5/image.png)

- В папке с проектами должна появиться папка `rsschool-cv` (репозитория), в которой будет скрытая папка `.git` и файл `README.md`.

![Image 6](https://i.ibb.co/vYF8NKB/image.png)

7. Нужно перейти в папку, в которой находится скрытая папка .git.
   Как это сделать: с помощью команды `cd .\rsschool-cv\`.

![Image 7](https://i.ibb.co/h7g2CTc/image.png)

8. Создайте новую ветку `gh-pages` от ветки `main` и перейдите в неё с помощью команды `git checkout -b gh-pages`.

![Image 8](https://i.ibb.co/6WVpC6z/image.png)

- Можно проверить в какой ветке сейчас вы находитесь с помощью команды `git branch`.

![Image 9](https://i.ibb.co/znnfXDF/image.png)

9. В ветке `gh-pages` создайте новый файл `cv.md`.

![Image 10](https://i.ibb.co/f02k32N/image.png)

10. Теперь необходимо из локального репозитория (компьютера) загрузить в удаленный репозиторий (на GitHub) изменения. Для начала пишите команду `git add .` _(обратите внимание на точку вконце)_ (файлы добавляются в stage changes). Можно проверить что изменилось от начального состояния и показать файл командой `git status`.
    > **Обратите внимание**: для успешной загрузки в удаленный репозиторий необходимо, чтобы изменённые файлы были сохранены. В редакторе кода при необходимости можно настроить автосохранение.

![Image 11](https://i.ibb.co/K9Dk0rg/image.png)

11. Далее фиксируйте изменения (_коммитим_) командой `git commit -m 'НАЗВАНИЕ КОММИТА'`.

- Обратите внимание на **требования** к коммитам [https://docs.rs.school/#/git-convention](https://docs.rs.school/#/git-convention). В ТЗ написано что должно быть не менее 3-х коммитов в ветку `gh-pages`. Коммиты должны начинаться с префиксов: `init:`, `feat:` , `fix:` , `refactor:` , `docs:`.

![Image 12](https://i.ibb.co/yWLXJM4/image.png)

12. Теперь можно пушить (отправить на GitHub с локальной машины) изменения. Но для начала проверьте, в какой ветке вы находитесь, командой `git branch`, а затем запуште изменения командой `git push origin <НАЗВАНИЕ ВЕТКИ>`. Вы должны написать `git push origin gh-pages`, чтобы запушить в ветку `gh-pages`.

![Image 13](https://i.ibb.co/bQzrF0C/image.png)

- Можно обновить страницу на GitHub в браузере и убедиться, что произошли изменения. Должна появиться новая ветка `gh-pages`, а в ней будет файл README.md и пустой файл `cv.md`. Так же можно зайти на страницу коммитов и просмотреть все коммиты, которые есть на данный момент в данной ветке.

13. Заполните `cv.md` в редакторе кода по правилам Markdown https://guides.hexlet.io/markdown/ и периодически пуште изменения на GitHub

![Image 14](https://i.ibb.co/N2XZ1sj/image.png)

- **Не забывайте про правильное название коммитов!**

14. В файл `README.md` добавьте ссылку вида `https://GITHUB-USERNAME.github.io/rsschool-cv/cv`, в которой вместо _GITHUB-USERNAME_ укажите свой _GitHub username_. После завершения работы по этой ссылке будет открываться страница CV.

![Image 15](https://i.ibb.co/gJmDFxF/image.png)

- **Запуште изменения на GitHub**

15. После того как вы напишите свой CV, укажете ссылку в README.md и запушите последние изменения, необходимо сделать `Pull Request`. Перед этим желательно проверить название коммитов. После заходите в репозиторий на GitHub, по центру находится кнопка `Pull Request`, жмите на нее. Затем на кнопку справа `New pull request`. Выберите _откуда (справа)_ и _куда (слева)_ будете делать pull request и нажмите зеленую кнопку `Create pull request`.

![Image 16](https://i.ibb.co/C1k1FqH/image.png)

![Image 17](https://i.ibb.co/xL7Ny67/image.png)

![Image 18](https://i.ibb.co/phRt9rB/image.png)

- Описание Pull Request дайте по схеме [https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr](https://docs.rs.school/#/pull-request-review-process?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-pull-request-pr). Название Pull Request дайте по названию задания

![Image 19](https://i.ibb.co/s5wnrSd/image.png)

- **Merge жать не нужно!**

![Image 20](https://i.ibb.co/mhSqNtb/image.png)

16. Зайдите в `RS App`, затем во вкладку `Auto-Test`. Выберите таск `Markdown & Git` и нажмите кнопку **Submit**.

![Image 21](https://i.ibb.co/rx18n8z/image.png)

## Переходим ко второму заданию HTML, CSS & Git Basics

Работу ведёте в репозитории rsschool-cv, созданном при выполнении предыдущего задания `Git & Markdown`.

1. От ветки `gh-pages` создайте ветку `rsschool-cv-html`. Проверьте, в какой ветке вы находитесь, командой `git branch`. Eсли в `gh-pages`, то создайте новую ветку `rsschool-cv-html` и перейдите в неё.

![Image 25](https://i.ibb.co/mzJ0V8Z/image.png)

2. Создайте файл `index.html`, в нём будете писать вёрстку для CV

После запуште изменения в ветку `rsschool-cv-html`.

![Image 26](https://i.ibb.co/rZpMP9Y/image.png)

3. Для красоты CV создайте файл `style.css`, в нём будете писать стили для данной вёрстки. После того, как создадите его, так же пуште изменения на GitHub. Также нужно будет добавить ваше фото или аватарку. И так же все изменения запушить в эту ветку.

4. В файле `README.md` в этой ветке нужно изменить содержимое. Если файла нет, создайте и добавьте ссылку `https://GITHUB-USERNAME.github.io/rsschool-cv/` в которой вместо `GITHUB-USERNAME` укажите свой никнейм на сайте GitHub. И так же все изменения запушить в эту ветку (`rsschool-cv-html`).

![Image 100](https://i.ibb.co/T8BhmwN/image.png)

5. Создайте `Pull Request` из ветки `rsschool-cv-html` в ветку `gh-pages`.

![Image 27](https://i.ibb.co/dfxdbsW/image.png)

6. Замержите Pull Request, нажав кнопку ниже `Merge pull request`, потом кнопку `Confirm merge`.

![Image 28](https://i.ibb.co/cX9rF2z/image.png)

![Image 29](https://i.ibb.co/R4qP0v8/image.png)

7. Зайдите в `RS App`, затем во вкладку `Auto-Test`. Выберите таск `HTML, CSS & Git Basics` и нажмите кнопку **Submit**.

![Image 32](https://i.ibb.co/x1XwQrD/image.png)
