# CV#3. CV. Cross-Check

| Start task | Deadline task        | Start cross-check | Deadline cross-check |
|------------|----------------------|-------------------|----------------------|
| 28.12.2021 | 03.01.2022 23:59 UTC | 04.01.2022        | 06.01.2022 23:59 UTC |

В этой части задания ставится задача сверстать CV.  
Основу содержания данной страницы составят данные, которые вы добавили в markdown-документ, созданный в ходе выполнения задания [CV#1. Markdown & Git](git-markdown.md)  
Кроме текста на страницу необходимо добавить ваше фото или аватарку.  

- [Описание и требования задания](cv.md)
- [Советы по выполнению задания](cv-stage0-hints.md)

## Требования к вёрстке
- вёрстка валидная. Для проверки валидности вёрстки используйте сервис https://validator.w3.org/
- вёрстка семантическая
- при написании кода рекомендуется следовать гайдлайну https://codeguide.academy/html-css.html
- контент размещается в блоке, который горизонтально центрируется на странице
- страница СV должна корректно отображаться в браузере Google Chrome последней версии
- в footer необходимо добавить ссылку на ваш гитхаб, год создания приложения, [логотип курса](https://rs.school/images/rs_school_js.svg) со [ссылкой на курс](https://rs.school/js/)

## Порядок работы
1. Работу ведёте в ветке `rsschool-cv-html` репозитория `rsschool-cv`.
2. Сверстайте страницу CV согласно требований. 
3. Самостоятельно оцените свою работу согласно предложенным [Критериям оценки](#критерии-оценки)
4. Создайте Pull Request из ветки `rsschool-cv-html` в ветку `main`  
Название Pull Request `CV. Cross-Check`  
[Описание Pull Request дайте по схеме](https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr).  
Мержить Pull Request из ветки `rsschool-cv-html` в ветку `main` не нужно.
5. В файл `README.md` ветки `main` добавьте две ссылки
- `https://GITHUB-USERNAME.github.io/rsschool-cv/cv`  
- `https://GITHUB-USERNAME.github.io/rsschool-cv/`
в которой вместо `GITHUB-USERNAME` укажите свой никнейм на сайте GitHub.  
По этим ссылкам должны открываться страницы CV в формате markdown и в виде свёрстанной страницы.  

## Критерии оценки

**Максимальный балл за задание +100**

- вёрстка валидная +10  
   - для проверки валидности вёрстки используйте сервис https://validator.w3.org/  
   - валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью.
   - если есть предупреждения - `warnings`, но нет ошибок - `errors`, выставляем половину баллов за пункт требований
- вёрстка семантическая +15  
  В коде странице присутствуют следующие элементы:
   - `<header>`, `<main>`, `<footer>` +5
   - только один заголовок `<h1>` +5
   - элемент `<nav>` +5
- в footer есть ссылка на гитхаб автора работы, год создания приложения, [логотип курса](https://rs.school/images/rs_school_js.svg) со [ссылкой на курс](https://rs.school/js/) +5
- для оформления СV используются css-стили +10
- при уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону +10
- на странице СV присутствует изображение, пропорции изображения не искажены, у изображения есть атрибут alt +10
- навигация, контакты для связи и перечень навыков оформлены в виде списка `ul > li` или `ul > li > a` +10
- Содержание CV +30  
  CV содержит:
   - имя и фамилию, краткую информацию о себе +5
   - контакты для связи +5
   - перечень навыков +5
   - пример кода +5
   - перечень выполненных учебных проектов со ссылками на исходный код или деплой +5
   - информацию об образовании и уровне английского +5
- CV выполнено на английском языке +10

Разница между максимальной оценкой за задание (100 баллов) и максимально возможным количеством баллов за выполнение всех пунктов требований (110 баллов) позволит сгладить возможные ошибки проверяющих в ходе кросс-чека, неточности в описании задания, разное понимание требований задания проверяющим и проверяемым.

## Cross-check
- инструкция по проведению cross-check: https://docs.rs.school/#/cross-check-flow

## Материалы
- [HTML5 Семантические элементы](https://html5css.ru/html/html5_semantic_elements.php)
- [Примеры оформления CV](https://www.freepik.com/free-photos-vectors/cv-template)
- [Примеры оформления CV](https://www.canva.com/resumes/templates/)
- [Figma Community. CV](https://www.figma.com/community/search?model_type=hub_files&q=cv)

## Примеры CV
- https://mserykh.github.io/rsschool-cv/
- https://petr9ra.github.io/rsschool-cv/
- https://estydaven.github.io/rsschool-cv/
- https://alexandrdrozdfd.github.io/rsschool-cv/
- https://yuriandev.github.io/rsschool-cv/
- https://annavoloshina.github.io/rsschool-cv/
- https://kryvetski-andrei.github.io/rsschool-cv/
- https://nikita-resh.github.io/rsschool-cv/
- https://themrcrowley.github.io/rsschool-cv/
- https://elvinyeka.github.io/rsschool-cv/
- https://mrks77.github.io/rsschool-cv/