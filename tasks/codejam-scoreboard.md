# CodeJam "CSS Quick Draw Scoreboard"

- **Deadline:** 09-12-2018 23:00
- **Where to submit:** Your private repository, branch "code-jam-scoreboard", folder "code-jam-scoreboard".
- **Requirements for the commits, PR, repository** - https://github.com/rolling-scopes-school/docs/blob/master/stage2-tasks-requirements.md

- **Resctrictions:**

  - Have to work in Chrome;
  - Active use of https://lodash.com/ is welcome;
  - You can google, communicate with each other, use stackoverflow;

- **What to submit / criteria for evaluation**
  - **+5 points**
    - Create an empty html page (For example, index.html).
    - Add a radio button to the index.html to enable switching the session to be visualized.
  - **+55 points**
    - "Prepare" dumps for visualization in any way (because they cannot be simply connected to index.html).
    - Построить таблицу, в которой первая колонка - GitHub Участника, а далее идут колонки с названием пазла и временем, затраченным участником для его решения. По ховеру на ячейку, показывающей время, должен появляться tooltip, показывающий селектор, который был введен участником при решении пазла. Названия пазлов в таблицы не должны быть захардкоданы, а получены из массива `puzzles`. Пример таблицы смотрите ниже.
    - Build a table in which the first column is Participant's Github and then goes the columns with puzzle's name and time participant spent to solve puzzle. When you hover over a cell with time, a tooltip should appear. Tooltip have to show the selector that participant entered to solve the puzzle. The names of the puzzles shouldn't be hardcoded, but should be taken from the array of `puzzles`. Example of the table you can find below;
  - **+5 points**
    - Toggling the radio button - relevant sessions are displayed (`rsschool` or `rsschool-demo`);
  - **+35 points**
    - Add _"Comparison"_ column to your table which will contain checkboxes. "Checked" rows will be displayed in the form of _Line Chart_ (for example - http://www.chartjs.org/samples/latest/charts/line/basic.html). Up to 10 rows can be selected simultaneously. Line Chart displays the name of the puzzle on the _x-axis_, _y-axis_ - solution time, _legend_ contains github of the player.  
      You can use ready-made Line Chart component;
  - **+30 point**
    - Implement an opportunity to check participants from the previous training course (2018Q1), who passed _CSS Quick Draw 2018Q1_ but still studying now. Build any comparative analytics of the results achieved by them in comparison with the previous training course. Data from the previous training can be found here - https://github.com/rolling-scopes-school/tasks/blob/2018-Q1/tasks/codejam-scoreboard.md.
  - **-50 points** for violation https://github.com/rolling-scopes-school/docs/blob/master/stage2-tasks-requirements.md

#### Sample table

| ${Name of the Participant} | ${Name of the First Puzzle} | ${Name of the Second Puzzle} | ${etc.} | Total Time |
| -------------------------- | --------------------------- | ---------------------------- | ------- | ---------- |
| Alexander Gerasimov        | 13                          | 37                           | 42      | 92         |
| Kiril Knysh                | 5                           | 25                           | 125     | 155        |
| Dzmitry Varabei            | 15                          | 150                          | 150     | 315        |

### Clarification

Dumps of the previous CodeJam _"CSS Quick Draw"_ are in the folder:
https://drive.google.com/drive/folders/10XH1dNj4c7yOptjFblhc1Y74FmMJNUwQ

Session you need is in _sessions.json_ file on line 34.

Data on every puzzle can be found in the `rounds` field. Inside each round there is a `solutions` hashmap, where key is player's id from _users.json_ (`uid`).

The solution of each player is the last input received from the player.
Therefore, for each player from `users` in each round, the solution may be _Correct_, _Incorrect_, or it may not be at all (if the player has not played). In this case, we simply assign the total puzzle time (it is 150 seconds for all puzzles).
