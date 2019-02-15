# CodeJam "CSS Quick Draw Scoreboard"

- **Deadline:** 09-12-2018 23:00
- **Куда сдавать:** Приватный репозиторий, бранч "code-jam-scoreboard", папка "code-jam-scoreboard".
- **Where to submit:** Your private repository, branch "code-jam-scoreboard", folder "code-jam-scoreboard".
- **Требования к коммитам, репозитория и PR** - https://github.com/rolling-scopes-school/docs/blob/master/stage2-tasks-requirements.md
- **Requirements for the commits, PR, repository** - https://github.com/rolling-scopes-school/docs/blob/master/stage2-tasks-requirements.md 

- **Ограничение:**
- **Resctrictions:**
    - Должно работать в Chrome
    - Have to work in Chrome;
    - Активное использование https://lodash.com/ приветствуется 
    - Active use of https://lodash.com/ is welcome;
    - Можно гуглить, общаться между собой и пользоваться stackoverflow
    - You can google, communicate with each other, use stackoverflow;

- **Что сдавать / критерии оценки:**
- **What to submit / criteria for evaluation**
    - +5 баллов
    - **+5 points**
      - Создать пустую html страницу (Например, index.html). 
      - Create an empty html page (For example, index.html).
      - Добавить в index.html radio button для возможности переключения сессии, которую необходимо визуализировать.
      - Add a radio button to the index.html to enable switching the session to be visualized.
    - +55 баллов
    - **+55 points**
      - "Подготовить" любым способом дампы к визуализации (так как их нельзя просто так подключить к index.html).
      - "Prepare" dumps for visualization in any way (because they cannot be simply connected to index.html).
      - Построить таблицу, в которой первая колонка - GitHub Участника, а далее идут колонки с названием пазла и временем, затраченным участником для его решения. По ховеру на ячейку, показывающей время, должен появляться tooltip, показывающий селектор, который был введен участником при решении пазла. Названия пазлов в таблицы не должны быть захардкоданы, а получены из массива  `puzzles`. Пример таблицы смотрите ниже.
      - Build a table in which the first column is Participant's Github and then goes the columns with puzzle's name and time participant spent to solve it. When you hover over a cell showing the time, a tooltip should appear. Tooltip have to show the selector that the participant entered in solving the puzzle.
    - +5 баллов
    - **+5 points**
      - По переключению radio button - отображать соответсвующие сессии (`rsschool` или `rsschool-demo`).
      - Toggling the radio button - relevant sessions are displayed (`rsschool` or `rsschool-demo`)
    - +35 баллов
      - В таблицу добавить колонку "Comparison", которая будет содержать чекбоксы. "Чекнутые" строки будут отображаться в 
      виде Line Chart (например, http://www.chartjs.org/samples/latest/charts/line/basic.html). Одновременно может быть выбрано до 10 строк. Line Chart по оси Х отображает название пазла, по Y - время решения, в легенде чарта - гитхаб игрока.
      Можно использовать готовый компонент Line Chart. 
    - -50 баллов за нарушение https://github.com/rolling-scopes-school/docs/blob/master/stage2-tasks-requirements.md
    - +30 баллов Добавить возможность простмотреть участников, которые учились в прошлом наборе RSSchool (2018Q1), проходили CSS Quick Draw 2018Q1 и продолжают учиться сейчас. Построить любую сравнительную аналитику достигнутых ими результатов по сравнению с прошлым набором. Данные прошлого набора можно найти тут - https://github.com/rolling-scopes-school/tasks/blob/2018-Q1/tasks/codejam-scoreboard.md.
 
Пример таблицы:
  
| DisplayName Участника  | ${Название первого пазла} | ${Название второго пазла} | ${и т.д.} | Общее время |
|-----------|-------------|-------------|-------------|-------------|
| Alexander Gerasimov | 13 | 37 | 42 | 92 |
| Kiril Knysh | 5 | 25 | 125 | 155 |
| Dzmitry Varabei | 15 | 150 | 150 | 315 |  

### Пояснение
Дампы предыдущего CodeJam "CSS Quick Draw" лежат в папке:
https://drive.google.com/drive/folders/10XH1dNj4c7yOptjFblhc1Y74FmMJNUwQ

В файле sessions.json нужная сессия находится на строчке 34. 

Данные по каждому пазлу можно найти в поле `rounds`. Внутри каждого round’a есть хэшмэп `solutions`, где ключ — это id игрока из users.json (`uid`).

Solution каждого игрока — это последний полученный от игрока ввод.
Поэтому для каждого игрока из `users` в каждом раунде солюшен может быть Correct, Incorrect или его может не быть вообще
(если игрок не играл). В этом случае мы просто начисляем полное время пазла (для всех пазлов это 150 секунд).


