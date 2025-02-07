# RSS Nonograms

## Task

You are to implement a classic game — [Nonograms](https://en.wikipedia.org/wiki/Nonogram)  
Here you can learn [how to solve the nonogram](https://nonograms-katana.fandom.com/wiki/Tips_for_solving)

### Game rules

`Nonograms is a puzzle game to reveal a hidden picture by looking at the number clues. The clues are given at the top and left side of the grid. Each number in these clue defines a block of black cell. A number indicates an unbroken line of black cells, and they are in the same order as the lines. These puzzles are often black and white—describing a binary image—but they can also be colored.`

**In the current task you have to implement only binary version of the game**

### Main functional requirements

`Basic (required):`

- initially, `body` in the index.html file must be empty (only script tag is allowed), **all necessary elements are generated using JS**
- the design should be adaptive (or responsive) from _(width => 500px)_. When resizing, all elements must adjust proportionally without abrupt switching, ensuring correct display, full functionality, and no hidden or off-screen content. It is acceptable to change the appearance for the mobile version (for example, hide the buttons in the burger menu). The application should be done in English.
- the default size of the frame is 5x5. The clues are given at the top and left sides of the grid. The sequence of numbers must be logically arranged to help the player solve the nonogram. Nonograms that have empty rows or columns with zero values as clues should not be used.
- for the game field: every 5 cells in rows and columns should be divided by a divider (bold line). For clues: every 5 cells in **rows** should be divided by a divider (for left clues); every 5 cells in **columns** should be divided by a divider (for top clues). Clues should be divided from game field by bold line.
- a player is able to fill in a cell in the grid, using left mouse-click. On a click event, trigger the functionality of changing the color of the grid to dark (black). When player clicks on dark cell - it will change to empty (white).
- game ends when player fills all the **black** (dark) cells correctly according to the clues and board can no longer be interacted with. Upon a successful solution solution, display "Great! You have solved the nonogram!" (in case the stop-watch implementation was skipped).
`Advanced:`

- the game should have at least 5 templates for easy level (5x5). Players should be able to choose the picture they wish to solve, possibly through a list of items. You might implement it in three ways: (1) a list of possible templates with images (solved puzzles), (2) a list using template names (without pictures), or (3) a combination of both images and names. The user should easily understand the difficulty level of the image.
- a player is able to fill in a cell in the grid changing the color of the grid to crossed-cell(X) using right mouse-click. Context menu should not appear. Filling empty cells with X is not obligatory to win the game.
- the game can be reset (restarted) without reloading the page (for example, by clicking on button `Reset game`). After clicking the button, the level of the game and template (picture) should remain unchanged - only the filled cells will be reset. Either implementation, resetting or not resetting the timer, is correct. The player can change the game template or game level (for example, you could implement menu with options) without reloading the page at any time.
- display the game duration in XX:XX format (minutes:seconds). The stop-watch starts after first click on the field (not on the clues) and stops when the game ends. After winning, if the duration was less than one minute, display 'Great! You have solved the nonogram in ## seconds!'; if it's one minute or more, display 'Great! You have solved the nonogram in ## minutes and ## seconds!'. If right-click (crossing-cell) is implemented, it should also start the stopwatch.
- the game should include different sound effects for each event: marking the cell dark, flagging the cell with an X, flagging the cell as empty, and winning the game. There should also be the possibility to turn off all the sound effects simultaneously.
- the staging of the current game is saved (for example, using localStorage) by clicking on button "Save game". This saves only one game, overwriting any previously saved game. When the player clicks 'Continue Last Game,' they can resume playing from where they left off. Crossed-cells (if implemented) are considered part of game staging.

`Additional (to get extra points):`

- dark/light themes of the game. Changing the theme implies a change in the entire color scheme of the application, including the background color, cell colors, counter, buttons etc.
- implement three levels of difficulty in the game: easy (5x5), medium (10x10), and hard (15x15). Each level should vary in the size of the game board and the complexity of the main template (pictures).
- the latest 5 win results are saved in the high score table. The table is sorted by time of the game using XX:XX format (for example, using LocalStorage). Every line should include: solved puzzle (either naming, or picture, or both); difficulty; stop-watch result.
- implement а "Random game" button. When the player clicks the button, a random template that is not equal to the current one appears (both template and level must be chosen randomly by algorithm).
- implement "Solution" button near the field. When the player clicks the button, the field is filled with the correct positions of the dark cells. Flagging the remaining cells with an X is not a mistake. Using this button ends the current game but does not count as a win and should not be recorded in the winning table.

Recommended usage of [eslint (eslint-config-airbnb-base)](https://eslint.org/), [webpack](https://webpack.js.org/) or any other bundler (this requirement is not checked)

## Repository requirements

- the work should be done in private school's repository
- create new branch `nonograms` from main. Create folder `nonograms` in the created branch where you will do source code
- the **main** (or **master**) branch should be empty (contain only files like README.md, .gitignore or .github folder)
- commits should represent the work history. Commit messages should follow the [guideline](https://www.conventionalcommits.org/en/v1.0.0/)
- once the work is finished, create a pull request from a development branch to main (or master). This PR doesn't need to be merged
- the pull request name should contain **the task name**
- the pull request description should contain the following information:
  - link to the task
  - screenshot of your application (one would be enough)
  - link to your application
  - date of completion/deadline
  - your self-check with a preliminary evaluation that is based on the evaluation criteria from the task
- use _gh-pages_ for deployment
- submit **a link to deploy** in Cross-Check: Submit tab

## Technical requirements

- the application is checked in the latest desktop version of Google Chrome browser
- jQuery is not allowed
- you can not use Angular / React / Vue / Typescript or other JS frameworks
- you can use bootstrap, CSS frameworks, HTML and CSS preprocessors
- using `alert`, `prompt`, `confirm` is not allowed

## Criteria for evaluation:

**Maximum score for the task: 250 points**

### Basic scope +80 points

- [ ] adaptive (or responsive) UI in English: `+20`
- [ ] at the beginning state of the game, the frame has size 5x5. The sequence of numbers is logically arranged and help the player solve the nonogram: `+20`
- [ ] cells and clues are divided by dividers as described in Basic block: `+5`
- [ ] when user clicks on cells using mouse left-click - it should be mark as dark. When user click on dark cell - it should be mark as empty (white) cell: `+15`
- [ ] the game should end when the player reveals all **black** cells correctly and related message is displayed at the end of the game: `+20`

### Advanced scope +90 points

- [ ] the game should have at least 5 templates for easy level (5x5) and the player is able to choose what picture they want to solve. `+15`
- [ ] a player is able to fill in a cell in the grid changing the color of the grid to crossed-cell(X) using right mouse-click. Context menu doesn't appear: `+20`
- [ ] the game can be restarted without reloading the page: `+15`
- [ ] game duration is displayed, stop-watch will start after first click on field (not on clues) and related message is displayed at the end of the game: `+10`
- [ ] sound accompaniment for every event and on/off functionality (see **Advanced** block): `+15`
- [ ] implemented saving the state of the latest game and "Continue last game" button: `+15`

### Hacker scope +80 points

- [ ] option to choose different themes for the game (dark/light themes): `+15`
- [ ] ability to change the size (5x5, 10x10, 15x15) is implemented and there are least 5 templates for each level: `+20`
- [ ] implemented saving the latest 5 win results with sorting: `+15`
- [ ] "random game" button is implemented. When player clicks on button - the random template appears (both template and level must be chosen randomly by algorithm): `+15`
- [ ] "Solution" button is implemented. When player clicks on button - the field is filled in cells with right solution. Such games is not recorded into winning table: `+15`

### Penalties

- using JQuery - 0 points for the task
- using Angular / React / Vue / Typescript - 0 points for the task
- `body` in the index.html is not empty - 0 points for the task
- `alert`, `prompt`, `confirm` used - 0 points for the task

## Cross-check instructions:

- You can check _index.html_ with DevTools -> Sources -> (index.html)
- If you like the app which you reviewed on cross-check, please fill in the [Form](https://docs.google.com/forms/d/e/1FAIpQLScQZgKqy1nmXOrCWOMBth6-19RSKedeNunJ31lVj4ycj8b2dA/viewform?usp=sf_link)

## Useful links

- [Eslint](https://eslint.org/)
- [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
- [Local storage](https://learn.javascript.ru/localstorage) - RU
- [Local storage](https://javascript.info/localstorage) - EN
- [How-to solve nonogram](https://www.youtube.com/watch?v=TCqZ5p0dmC0)

### Table with your questions and answers [here](https://docs.google.com/spreadsheets/d/1iWoq1KK2DQnLR9SNmSeUjURQ_OlKMXfVNwDTV6AUJp4/edit?usp=sharing)
