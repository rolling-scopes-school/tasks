# museum

## Описание проекта

Задание Museum - задание, в ходе выполнения которого вам необходимо сверстать landing page Лувра, добавить ему адаптивность и реализуемый через JavaScript функционал.

## Этапы работы над проектом:

- [фиксированная вёрстка](museum-fixed.md) - 1 неделя
- [адаптивная вёрстка](museum-adaptive.md) - 1 неделя
- [добавление JavaScript](museum-dom.md) - 2 недели

Каждый этап проверяется в ходе кросс-чека.
Кросс-чек стартует в 00:00 UTC в понедельник и закрывается в четверг в 23:59 UTC.

## Ключевые навыки:

- валидная семантическая адаптивная вёрстка
- легкоподдерживаемый читаемый код
- экспорт стилей и графики из Figma
- использование JavaScript для реализации указанного в задании функционала

<kbd>[![screenshot](../images/museum1-prev.jpg)](https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/images/museum1.jpg)</kbd>

[Макет Museum](https://www.figma.com/file/xkP6mIaq7uG1Uru7CpasXq/Museum-04.09)  
[Папка assets с изображениями и видео](https://github.com/rolling-scopes-school/stage1-tasks/tree/museum)  
[Используемые в макете ссылки](https://github.com/rolling-scopes-school/stage1-tasks/blob/museum/README.md)  
[Советы по выполнению задания. Часть 1 #1](museum-hints.md)  
[Советы по выполнению задания. Часть 1 #2](museum-hints-advanced.md)  
[Советы по выполнению задания. Часть 2](museum-hints-adaptive.md)

## Создание собственной копии макета:

- авторизуемся в [figma](https://www.figma.com/)
- открываем макет
- нажимаем на стрелку рядом с названием макета на панели вверху, выбираем пункт "Duplicate to your drafts"
- слева вверху открываем настройки, выбираем "Back to files"
- открываем копию макета рядом с которой есть надпись "In Drafts"

## Рекомендации по качеству кода

Рекомендации предлагаются для ознакомления, их строгое соблюдение на этапе stage#0 не предполагается и не проверяется

- легкоподдерживаемый читаемый качественный код:
  - при написании кода следуйте гайдлайну https://codeguide.academy/html-css.html
- следуйте требованиям Руководства по качеству кода, если они не противоречат гайдлайну
  - [общие принципы](../../stage1/modules/clean-code/materials/generic-principles.md)
  - [HTML и CSS рекомендации - начальный уровень](../../stage1/modules/clean-code/materials/html-and-css.md)
  - [HTML и CSS рекомендации - продвинутый уровень](../../stage1/modules/clean-code/materials/html-and-css-extended.md)

## Технические требования

1. вёрстка валидная, семантическая, соответствующая макету
2. приложение корректно отображается и работает в браузере Google Chrome последней версии
3. запрещается использование CSS-фреймворков (`bootstrap`)
4. допускается использование `normalize.css`
5. не рекомендуется использовать сброс стилей при помощи `reset.css`
6. рекомендуется использование Sass, при условии, что у вас уже есть опыт вёрстки
7. рекомендуется использование Webpack, при условии, что у вас уже есть опыт вёрстки
8. запрещено добавление вёрстки картинкой, когда делается скрин части макета и вставляется в вёрстку. Для вёрстки используйте теги и символы, картинками можно добавлять изображения и иконки, а не элементы вёрстки (кнопки, блоки, секции)

## Требования к репозиторию

- задание выполняется в приватном репозитории школы. [Как работать с приватным репозиторием школы](https://rs.school/docs/ru/private-repository)
- от ветки `main` создайте ветку `museum` в ней создайте папку `museum`, в ней разместите файлы проекта
- для деплоя используйте `gh-pages` [Как сделать деплой задания из приватного репозитория школы](https://rs.school/docs/ru/private-repository#как-сделать-деплой-задания-из-приватного-репозитория-школы)
- при невозможности использовать `gh-pages`, используйте для деплоя https://app.netlify.com/drop. Название страницы дайте по схеме: имя гитхаб аккаунта - название таска
- так как задача делится на три части, museum будет иметь три версии:
  1.  ветка `museum` будет содержать первую часть задания, приступая ко второй части создайте ветку `museum-adaptive` от ветки `museum` что позволит продолжить с того же места, на котором вы остановились в первой части
  2.  по завершении выполнения второй части задания создайте Pull Request из ветки `museum-adaptive` в ветку `museum`, проверьте на конфликты и сделайте Merge
  3.  для третьей части выполнить первые 2 пункта еще раз но с другим названием ветки (`museum-dom`)
  4.  обратите внимание: Pull Request с последующем мержем выполняется только из ветки текущий разработки в начальную ветку этого таска. Мерж в ветку `main` не производится!

## Требования к коммитам

- История коммитов должна отображать процесс разработки приложения.
- [Названия коммитов дайте согласно гайдлайну](https://rs.school/docs/ru/git-convention)

## Требования к Pull Request

- Название Pull Request дайте по названию задания
- [Описание Pull Request дайте по схеме](https://rs.school/docs/ru/pull-request-review-process#требования-к-pull-request-pr)  
  **Мержить Pull Request из ветки разработки в ветку `main` не нужно**.

## Чтобы получить баллы за задание необходимо:

- Выполнить задание \*
- Засабмитить задание т.е. отправить его на проверку \*\*
- Проверить все присланные на проверку работы и засабмитить результаты проверки до дедлайна кросс-чека \*\*\*

\* _Весь код проекта вам необходимо написать самостоятельно, только так можно чему-то научиться.  
Копирование чужого кода (`Ctrl + C`, `Ctrl + V`) на курсе запрещено._  
\*\* _Засабмитить задание можно только до дедлайна таска, после дедлайна сабмит недоступен_  
\*\*\* _Если хотя бы одна работа не будет проверена - оценку за работу вы не получите_

## Как сабмитить задание

До наступления дедлайна зайдите в rs app https://app.rs.school/, выберите **Cross-Check: Submit**, в выпадающем списке выберите `museum`, в поле **Solution URL** добавьте ссылку на задеплоенную версию созданного вами сайта, нажмите кнопку **Submit**.

## Рекомендации по сабмиту

- Засабмитить задание рекомендуется как можно раньше, как только в rs app появится такая возможность. После сабмита задание можно продолжать выполнять до самого дедлайна
- Так как проект выполняется в приватном репозитории, сабмитить ссылку на репозиторий или pull request нет смысла - проверяющий его не увидит. Приватный репозиторий школы видите только вы сами, админы курса, и увидят ваши менторы, когда они появятся
- Убедитесь, что задеплоенная вами ссылка открывается в режиме инкогнито браузера
- Сделайте скриншот засабмиченной ссылки и сохраняйте его у себя до старта кросс-чека. Если вам не придут работы на проверку, скриншот послужит доказательством, что вы вовремя засабмитили ссылку на работу. В таком случае вашу работу проверят в ходе апелляции

## Проверка задания

- задание будет проверяться посредством кросс-чека.
- инструкция по проведению cross-check: https://rs.school/docs/ru/cross-check-flow

## Материалы

1. Работа в Figma
   - [Старт в Figma для верстальщика](https://htmlacademy.ru/blog/soft/figma)
   - [Инструкция по работе в Figma для верстальщика](https://breezzly.ru/guides/start-v-figma-dlya-verstalshhika)
   - [Верстка сайта с нуля из Figma](https://www.youtube.com/playlist?list=PL5_s7xdj2Vsw-bCx5nOZJMFIiHwRgok--)
2. Адаптивная верстка
   - [Верстка сайта с нуля для начинающих | Адаптивная верстка](https://youtu.be/rc5Iauhat8s)
3. Качество кода
   - [Как писать чистый код: обзор лучших практик JavaScript](https://techrocks.ru/2019/08/27/writing-clean-code-in-javascript/)
   - [Пишем чистый и масштабируемый JavaScript-код](https://habr.com/ru/company/ruvds/blog/452562/)
   - [Рекомендации по написанию чистого кода на JavaScript](https://habr.com/ru/company/ruvds/blog/454520/)
4. Создание собственного слайдера
   - [Swiper & Slider Examples (carousel live coding)](https://youtu.be/rkz6LURkbBw) - [код](https://www.dropbox.com/s/0g5c0qz69keig6s/carusel-swiper.zip?dl=0)
   - [Делаем слайдер на чистом JavaScript с нуля](https://youtu.be/K3E1OfQuJ0Q) - [код и демо](https://github.com/Eremeow138/wayup-slider-js)
   - [Infinite pure Javascript slider](https://medium.com/@claudiaconceic/infinite-plain-javascript-slider-click-and-touch-events-540c8bd174f2) - [код и демо](https://codepen.io/cconceicao/pen/PBQawy)
5. Библиотеки для создания слайдера
   - [Tiny Slider](http://ganlanyuan.github.io/tiny-slider/demo/) - [Документация](https://github.com/ganlanyuan/tiny-slider#tiny-slider-2)
   - [Swiper](https://swiperjs.com/demos) - [Документация](https://swiperjs.com/swiper-api)
   - [Slick Slider](https://kenwheeler.github.io/slick/) - [Документация](https://github.com/kenwheeler/slick#slick)
6. Кастомный видеоплеер
   - [Custom HTML5 Video Player](https://youtu.be/yx-HYerClEA)
7. Слайдер сравнения изображений
   - [Как сделать - Ползунок сравнения изображений](https://html5css.ru/howto/howto_js_image_comparison.php)
8. Анимация при прокрутке
   - [Slide In on Scroll](https://youtu.be/uzRsENVD3W8)
9. Sass
   - [Документация на русском](https://sass-scss.ru/)
   - [Более полная документация на английском](https://sass-lang.com/)
10. Webpack
    - [Webpack JS/FE 2021Q1 [RU]](https://www.youtube.com/watch?v=bozzyi8Tok0)
    - [Документация](https://webpack.js.org/concepts/)
    - [Сборка для студентов](https://www.npmjs.com/package/create-rss-app)

## Вебинары RS School

- вебинары Сергея Шаляпина
  - [Stream 11.02.2020](https://youtu.be/UQavTWiTpnA)
  - [Stream 03.03.2020](https://youtu.be/PhRVJC0kBGE)
  - [Stream 10.03.2020](https://youtu.be/_5f0kznOM_A)
  - [Stream 17.03.2020](https://youtu.be/0M9Rz-wXYas)
  - [Stream 26.03.2020](https://youtu.be/fFDw7AH2OXo)
  - [Stream 07.04.2022. SCSS (Sass) Basics. Flex vs Grid Layout [RU]](https://youtu.be/MOrQRgP8kbo)
  - [Stream 12.04.2022. Media queries. Responsive vs Adaptive. [RU]](https://youtu.be/CbtdP2vGOI8)
  - [Stream 20.04.2022. JS DOM & Events. Simple carousel example [RU]](https://youtu.be/2xP-HahCtio)
- вебинары Виктории Ворожун
  - [Friday Live Coding. Part 1](https://youtu.be/ZAde-IJAHzo)
  - [Friday Live Coding. Part 2](https://youtu.be/BJENQIX2e2o)
  - [Friday Live Coding. Part 3](https://youtu.be/fooyYgIuZe8)
  - [Friday Live Coding. Part 4](https://youtu.be/Qk2UGlFNKPE)
  - [Friday Live Coding. Part 5](https://youtu.be/ouZnGUefneQ)
  - [Репозиторий с кодом](https://github.com/ViktoriyaVorozhun/friday-live-coding/tree/develop)
  - [Макет в figma](https://www.figma.com/file/fw0GA18nmpVjTBzjtiEK2L/Friday_Live_Coding?node-id=0%3A1)
  - [Preprocessors. SASS](https://www.youtube.com/watch?v=JO8DvVZbxDw)
