# Задача "Чистый код S1E1"

| Дата выдачи | Deadline        | Folder name     | Branch name     |
| ----------- | --------------- | --------------- | --------------- |
| *.03.2021   | *.03.2021 23:59 | clean-code-s1e1 | clean-code-s1e1 |

Даты выдачи и дедлайны тасков находятся в [расписании](https://docs.google.com/spreadsheets/d/1oM2O8DtjC0HodB3j7hcIResaWBw8P18tXkOl1ymelvE/edit#gid=1646898206)

## Task 2. Описание: 

![image](../images/clean-code.png)

Перед вами небольшое одностраничное [веб-приложение TODO-list](https://github.com/ViktoryiaYatskova/clean-code-s1e1).
Ваша задача - это навести порядок внутри файлов кода (_рефакторинг_) согласно следующим руководствам:
 [тут](stage1/tasks/clean-code/guidelines/html-and-css.md)
 и [тут](stage1/tasks/clean-code/guidelines/html-and-css-extended.md) (только html и css файлы). 
При этом функционал приложения должен остаться все еще рабочим после ваших изменений.

## Требования к выполнению

**Внимание!** Задача не может быть принята, если все условия ниже не выполнены:

- Используйте личный ПУБЛИЧНЫЙ репозиторий в GitHub для выполнения данного задания.
 Сделайте fork существующего проекта или просто создайте пустой проект и скопируйте туда файлы.
- Один git-коммит должен содержать изменения согласно одному пункту из руководств.
(можно несколько коммитов на 1 пункт руководства, но не наоборот).
Обязательно укажите, какой пункт покрывают изменения в данном коммите.
- Покрытие коммитом двух правил допустимо, если соблюдение одного правила автоматом гарантируем соблюдение другого.
В этом случае оба правила должны быть указаны в commit message.
- Коммит-сообщения должны быть составлены согласно [следующим правилам](stage1/tasks/clean-code/guidelines/commits.md)
- Изменения делайте в ветке `clean-code-s1e1` созданной от `master`
- После создайте Pull Request ветки `clean-code-s1e1` в `master`. Ссылку на PR отправить на cross-check. ВНИМАНИЕ: если вы сделали fork проекта, то при создании Pull Request GitHub автоматически предложит вам сделать Pull Request в `master` репозитория автора задания. Пожалуйста, не забудьте поменять репозиторий на свой.
- Для проверки задания достаточно открыть его у себя локально. Вы можете задеплоить свое приложение через `gh-pages` для упрощения проверки его кросс-ревьюером,
 но это необязательно.
 - На данном этапе не предполагается использование автоматических инструментов по форматированию кода.
 Изучите и используйте максимально возможности вашей IDE для рефакторинга (ниже есть ссылки для VS Code)

_Пример:_
```
fix: add Html5 DOCTYPE tag according to rule 2.2 in html-and-css.md
refactor: adjust HTML-formatting according to rule 2.1 in html-and-css.md
```

- Весь функционал приложения должен исправно работать после ваших изменений, а именно:

    - Добавление нового элемента в список задач "TODO"
    - Редактирование элемента в списке задач "TODO"
    - Удаление элемента из списка задач "TODO"
    - Установка элемента в статус завершенного и перенос в список "COMPLETED" через checkbox

    - Удаление элемента из списка "COMPLETED"
    - Редактирование элемента из списка "COMPLETED"
    - Установка элемента в статус незавершенного и перенос в список "TODO" через checkbox

    - Внешний вид приложения не изменился
    - Анимация на кнопке удаления работает

## Критерии оценки

**Максимальный балл за задание +45**

- Каждый из 15 пунктов [первого](stage1/tasks/clean-code/guidelines/html-and-css.md) руководства соблюден:
    - +2 за каждое ПОЛНОСТЬЮ выполненное правило
    (т.е. правило должно быть соблюдено для всего документа, а не только для кусочка кода)
- Каждый из 3 пунктов [расширенного руководства](stage1/tasks/clean-code/guidelines/html-and-css-extended.md) соблюден: 
    - +5 за каждое ПОЛНОСТЬЮ выполненное правило

Внимание! Аккуратно выполняйте переименование атрибутов, не пропустив ни единного их вхождения, включая JS файлы.

## Ключевые навыки
- Написание чистого, читабельного кода

## Материалы:
- [Руководство по качеству кода](stage1/tasks/clean-code/guidelines/generic-principles.md)
- "Чистый код", Роберт Мартин
- [Википедия: Coding Conventions](https://en.wikipedia.org/wiki/Coding_conventions)
- [Git commit editing](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History)
    - [Как использовать Vim или поменять editor для Git](https://www.tempertemper.net/blog/changing-editor-for-git-on-the-command-line)
- [Refactoring code with VS Code](https://code.visualstudio.com/docs/editor/refactoring)
- [Key bindings in VS Code](https://code.visualstudio.com/docs/getstarted/keybindings)

[Документ для вопросов](https://docs.google.com/spreadsheets/d/1lgzmc72mKCmYvHimvqBNENgKJuXMON8q1f1s4GEnEVI/edit?usp=sharing)

## Cross-check
- форма для проверки задания: https://rolling-scopes-school.github.io/checklist/ (пункт "Clean code S1E1")
- инструкция по проведению cross-check: https://docs.rs.school/#/cross-check-flow
