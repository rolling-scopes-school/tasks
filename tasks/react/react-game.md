# react-game

| Deadline         | Repo name  | Branch name |
| ---------------- | ---------- | ----------- |
| 03.03.2021 23:59 | react-game | react-game  |

В ходе выполнения задания вам необходимо создать игру с использованием библиотеки React.

## Тематика игры

1. Игру для реализации выбираете вы сами в зависимости от собственных интересов, уровня подготовки, наличия свободного времени и т.д. Это может быть один из [примеров](#примеры-игр), которые приведены в материалах к заданию, или другая игра. Важно, чтобы работая над ней вы смогли проявить свои сильные стороны, реализовать свои возможности, получить максимально качественный результат.
2. Убедитесь, что для выбранной игры возможно реализовать требования, описанные в [критериях оценки](#критерии-оценки)

## Требования к репозиторию

- разработка игры ведётся в личном приватном репозитории
- название репозитория: `react-game`, название ветки, в которой ведётся разработка - `react-game`, ветка `main` пустая, содержит только README.md
- в файл README.md нужно добавить инструкцию по запуску игры
- история коммитов должна отображать процесс разработки игры. [Требования к коммитам](https://rs.school/docs/ru/git-convention)
- демо-версия приложения размещается на `gh-pages`, `netlify`, `heroku` либо на другом подобном хостинге.  
  Для демоверсий, размещённых на `netlify` и `heroku`, название страницы дайте по схеме: имя гитхаб аккаунта - название таска
- после окончания разработки или при наступлении дедлайна, создайте pull request из ветки разработки в ветку `main`. [Требования к pull request](https://rs.school/docs/ru/pull-request-review-process#требования-к-pull-request-pr). **Мержить Pull Request не нужно**
- репозиторий, в котором велась работа над проектом, после наступления дедлайна нужно сделать публичным.

## Технические требования

- работа игры проверяется в браузере Google Chrome последней версии
- необходимо использовать React
- можно использовать [bootstrap](https://getbootstrap.com/), [material design](https://material.io/), css-фреймворки, html и css препроцессоры
- разрешается использовать jQuery только в качесте подключаемой зависимости для UI библиотек. Использование jQuery в основном коде приложения не допускается
- рекомендуется использовать TypeScript
- рекомендуется создать и использовать бекенд. Данная рекомендация связана с очень высоким спросом на фронтенд-разработчиков, знакомых хотя бы с основами node.js.
- запрещено копировать код других студентов, демо, примеров, которые приводятся в задании. Этот запрет касается html, css, js кода. Можно использовать небольшие фрагменты кода со Stack Overflow, других самостоятельно найденных источников в интернете, за исключением github-репозиториев студентов курса. Возле использованного чужого фрагмента кода в комментарии указывается ссылка на источник.

## Как сабмитить задание

- Задание сабмитится в rs app. Для этого зайдите в rs app <https://app.rs.school/>, выберите пункт Cross-Check: Submit, в выпадающем списке выберите название таска, в поле Solution URL добавьте ссылку на pull request, нажмите кнопку Submit. После сабмита задание можно продолжать выполнять до самого дедлайна.
- Убедитесь, что pull request доступен для проверки. Для этого откройте ссылку, которую сабмитите в rs app, в режиме инкогнито браузера.
- Если задание не засабмитить до дедлайна, оно не попадёт на распределение при кросс-чеке и за него не будут выставлены баллы.

## Требования к оформлению приложения

- для стандартных разрешений экрана монитора до 1024×768 включительно, игра полностью помещается в экран без появления полос прокрутки. При меньшем разрешении экрана может появиться вертикальная полоса прокрутки. Минимальная ширина страницы, при которой проверяется корректность отображения приложения - 500рх. Игру можно [развернуть во весь экран](https://html5.by/blog/fullscreen-javascript-api/)
- интерактивность элементов, с которыми пользователи могут взаимодействовать, изменение внешнего вида самого элемента и состояния курсора при наведении, использование разных стилей для активного и неактивного состояния элемента, плавные анимации
- в футере приложения есть ссылка на гитхаб автора, год создания приложения, [логотип курса](https://rs.school/_next/static/media/rss-logo.c19ce1b4.svg со [ссылкой на курс](https://rs.school/courses/reactjs)

## Критерии оценки

**Максимальный балл за задание: 100 баллов**.

В связи со свободным выбором темы создаваемой игры, проверяются и оцениваются только отдельные её элементы, указанные в критериях оценки.

Для удобства проверки необходимо записать и разместить на YouTube небольшое (2-3 мин) видео для проверяющих с объяснением как реализован каждый пункт из перечисленных в критериях оценки. Ссылку на видео можно добавить в описание pull request или в footer приложения добавить [иконку YouTube](https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg) со ссылкой на видео.

### Basic scope +30

- [ ] вёрстка, дизайн, UI. Выполняются требования к оформлению приложения +10
- [ ] эффекты анимации. Анимация ходов, перемещения фигур, допустимых и недопустимых ходов, начала и окончания игры, победы и поражения и т.д +10
- [ ] механика игры. Ходы, перемещения фигур, набранные баллы, окончание игры и т.д. подчиняются определённым свойственным игре правилам +10

### Advanced scope +50

- [ ] звуки и музыка. В игре есть звуки и музыка, и есть настройки звуков и музыки: возможность вкл/откл звуки, вкл/откл музыку, регулировать громкость звуков, регулировать громкость музыки +10
- [ ] настройки игры. Есть не меньше трёх настроек разных опций игры, например, внешний вид игрового поля и фигур, сложность игры, определение порядка ходов. Речь не про настройки звуков и музыки, которые проверялись и оценивались в предыдущем пункте. Это должны быть настройки разных опций, а не три параметра одной опции, например, размера игрового поля +10
- [ ] статистика. Пользователь информируется о состоянии игры, ведётся запись ходов, побед и поражений, времени игры, либо отображается другая статистика игры. Есть таблица рекордов, в которой сохраняются результаты предыдущих 10 игр +10
- [ ] сохранение состояния игры при перезагрузке страницы. Сохраняются все опции игры: ходы, набранные очки, положение фигур и т д. Состояние игры сохраняется без необходимости кликать по кнопке save. Есть кнопка new game для запуска новой игры +10
- [ ] возможность управления игрой с клавиатуры или не меньше пяти hot keys. Есть список горячих клавиш для управления игрой с клавиатуры +10

### Hacker scope +20

- [ ] автопроигрывание игры. Есть кнопка Autoplay запускающая игру в автоматическом режиме. Это может быть отдельная партия игры (крестики-нолики, шашки, шахматы, морской бой, судоку и т.д.). Для бесконечных игр (тетрис, Flappy Bird и т.д), игра зацикливается не раньше чем через 30 ходов. Речь не про автозавершение начатой игры, автопроигрывание игры начинает игру с пустого поля или стандартной раскладки и показывает как эта игра сама играет без пользователя +10
- [ ] дополнительная функциональность. Реализована достаточно сложная в реализации дополнительная функциональность, которая улучшает качество игры. В качестве дополнительной функциональности рекомендуется создать и использовать бекенд, например, для хранения счёта игры. Также может быть и другая дополнительная функциональность, например, 3d игра, написана логика для компьютерного противника, есть сетевой режим игры, и т.д +10

## Материалы

### Курсы по React

- [Официальное руководство](https://ru.reactjs.org/)
- [Уроки React JS от IT-KAMASUTRA](https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8)
- [Уроки React js для начинающих от Web Developer Blog](https://www.youtube.com/playlist?list=PLVfMKQXDAhGV90yI1FzsciwEi-11ILfAG)
- [React JS. Полный Курс 2020. Владилен Минин](https://youtu.be/xJZa2_aldDs)
- [React JS + TypeScript. Владилен Минин](https://youtu.be/OvLWWvjoi8s)
- [React Hooks - Полный Курс. Владилен Минин](https://youtu.be/9KJxaFHotqI)
- Юрий Бура. React + Redux - Профессиональная Разработка (курс платный)
- Воркшоп по React от Glo Academy. Пишем свой Инстаграм [День 1](https://youtu.be/IJvTV-8FaPI), [День 2](https://youtu.be/zxtDR-SFDfI), [День 3](https://youtu.be/-eSOiFGL2f0)

### Курсы по Node.js

- Теория
  - <https://metanit.com/web/nodejs/>
  - <https://nodejs-guide.netlify.app/>
- Вебинары Nikita Rudy
  - [node-js-and-npm-basics](https://youtu.be/CAvqa6Lj_Rg)
  - [node-js-introduction](https://youtu.be/TEuDTl8SdZo)
  - [node-js-networking](https://youtu.be/3Pp0K_rgk8U)
  - [slides](https://slides.com/nikitarudy#)
  - [код примеров](https://github.com/NikitaRudy/nodejs-lecture)

### Примеры игр

- [Сапёр](https://reactjsexample.com/minesweeper-game-written-with-react/)
- [Змейка](https://reactjsexample.com/a-simple-snake-game-created-with-the-react/)
- [Камень-ножницы-бумага](https://reactjsexample.com/a-rock-paper-scissors-game-built-with-react-scss/)
- [Крестики-нолики](https://reactjsexample.com/unbeatable-tic-tac-toe-game-using-react/)
- [2048](https://reactjsexample.com/a-2048-game-build-with-react/)
- [Teddy game](https://reactjsexample.com/react-app-with-cartoon-animations-and-games-for-kids/)
- [Memory game](https://reactjsexample.com/a-simple-memory-game-with-react-js/)
- [Шашки](https://reactjsexample.com/checkers-game-ai-opponent-in-react/)
- [Шахматы](https://reactjsexample.com/mobile-first-chess-with-react-js/)
- [Судоку](https://reactjsexample.com/sudoku-game-written-using-react-js/)
- [Flappy Bird](https://flappybacon.netlify.app/)

## Cross-check

- инструкция по проведению cross-check: <https://rs.school/docs/ru/cross-check-flow>
- cсылки на лучшие работы добавьте, пожалуйста, в эту форму: [https://forms.gle/M2J3zF2mXfvbSScP8](https://docs.google.com/forms/d/e/1FAIpQLSclryL395bH7V8t-7UriMrZsJSaoz5TQuWakQbwVPGJaBHvIQ/viewform?usp=sf_link)
