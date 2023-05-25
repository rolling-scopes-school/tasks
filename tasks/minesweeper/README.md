# RSS Minesweeper

## Task

You are to implement a classic game — [Minesweeper](<https://en.wikipedia.org/wiki/Minesweeper_(video_game)>)

### Game rules

`In the game, mines are scattered throughout a board, which is divided into cells. Cells have three states: unopened, opened and flagged. An unopened cell is blank and clickable, while an opened cell is exposed. Flagged cells are unopened cells marked by the player to indicate a potential mine location; some implementations make flagged cells inoperable to reduce the risk of uncovering a suspected mine. A player selects a cell to open it. If a player opens a mined cell, the game ends in a loss. Otherwise, the opened cell displays either a number, indicating the number of mines diagonally and/or adjacent to it, or a blank tile (or "0"), and all adjacent non-mined cells will automatically be opened. Players can also flag a cell, visualized by a flag being put on the location, to denote that they believe a mine to be in that place.`

### Main functional requirements

`Basic (required):`

- initially, `body` in the index.html file must be empty (only script tag is allowed), **all necessary elements are generated using JS**
- the design should be adaptive (or responsive) from _(500px <= width)_. It is acceptable to change the appearance for the mobile version (for example, hide the buttons in the burger menu)
- the default size of the frame is 10x10 with 10 mines.
- the player should be able to click on cells to reveal them. If the cell contains a mine, the game is over. If the cell does not contain a mine, the number of mines in the surrounding cells should be displayed
- the game should end when the player reveals all cells that do not contain mines (win) or clicks on mine (lose). On a successful game solution, display the message: "Hooray! You found all mines in ## seconds and N moves!" or "Game over. Try again"

`Advanced:`

- mines are placed after the first move, so that user cannot lose the game on the first move
- the player should be able to flag cells to indicate that they suspect a mine is present
- the game should use color coding (using numbers and colors) to indicate the number of mines surrounding a revealed cell.
- the game can be restarted without reloading the page (for example, by clicking on button `New game`)
- display the game duration seconds and the number of clicks
- when user opens a square that does not touch any mines, it will be empty and the adjacent squares will automatically open in all directions until reaching squares that contain numbers

`Additional (to get extra points):`

- the game should include sound effects for events such as revealing a cell, flagging a cell, and game over (win and lose).
- the player should be able to select a difficulty level (easy, medium, hard) which changes the size of the game board and the number of mines
- the latest 10 results are saved in the high score table and can be viewed in any way (for example, by pressing a button)
- implement the functionality to save the game (for example, using localStorage), so that when the page is reloaded, a player can continue from where he left off
- dark/light themes of the game

Recommended usage of [eslint (eslint-config-airbnb-base)](https://eslint.org/), [webpack](https://webpack.js.org/) (this requirement is not checked)

## Repository requirements

- the work should be done in private school's repository
- create new branch `minesweeper` from main. Create folder `minesweeper` in the created branch where you will do source code
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

- the application is checked in the latest version of Google Chrome browser
- jQuery is not allowed
- you can not use Angular / React / Vue / Typescript
- you can use bootstrap, CSS frameworks, HTML and CSS preprocessors

## Criteria for evaluation:

**Maximum score for the task: 180 points**

### Basic scope +40

- [ ] layout, design, responsive UI: `+10`
- [ ] at the beginning state of the game, the frame has size 10x10 and is filled with unopened cells. Should be 10 mines on field by default: `+10`
- [ ] when user click on cells - it should be opened and marked as one of the following state: empty cell, cell with number, or cell with mine: `+10`
- [ ] the game should end when the player reveals all cells that do not contain mines (win) or clicks on mine (lose) and related message is displayed at the end of the game: `+10`

### Advanced scope +80

- [ ] mines are placed after the first move, so that user cannot lose on the first move. `+20`
- [ ] user can mark “mined” cells using flags so as not to accidentally open them displaying the number of mines remaining and displaying number of used flags: `+10`
- [ ] the game should use color coding (using numbers and colors) to indicate the number of mines surrounding a revealed cell: `+10`
- [ ] the game can be restarted without reloading the page: `+10`
- [ ] game duration and number of clicks are displayed: `+15`
- [ ] when user opens a square that does not touch any mines, it will be empty and the adjacent squares will automatically open in all directions until reaching squares that contain numbers: `+15`

### Hacker scope +60

- [ ] sound accompaniment (on/off) when clicking on cell and at the end of the game: `+10`
- [ ] implement ability to change the size (easy - 10x10, medium - 15x15, hard - 25x25) and number of mines for each size of the field (from 1 to 99): `+20`
- [ ] implemented saving the latest 10 results using LocalStorage: `+10`
- [ ] implemented saving the state of the game: `+10`
- [ ] option to choose different themes for the game board (dark/light themes): `+10`

### Penalties

- using JQuery - 0 points for the task
- using Angular / React / Vue / Typescript - 0 points for the task
- `body` in the index.html is not empty - 0 points for the task

## Cross-check instructions:

- You can check _index.html_ with DevTools -> Sources -> (index.html).
- If you check an application on cross-check and the `body` in the index.html is not empty - please fill in [this form](https://docs.google.com/forms/d/1WbuUQhq_J7TrrfxIInyTDjMsHsrVMpKF74jwoEsx19g/).
- **_Pay attention:_** You have to check an application anyway (even if the `body` in the index.html is not empty) and rate it according to _Criteria for evaluation point_.

## Useful links

- [Eslint](https://eslint.org/)
- [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
- [Local storage](https://learn.javascript.ru/localstorage)
- [How-to play in minesweeper](https://www.youtube.com/watch?v=7B85WbEiYf4)

[The form for students questions](https://docs.google.com/forms/d/1rl3fHYRJLAKpYo4T5t6wRrixxMChunSX6KnEkBSd170)  
[Please, provide the best apps from cross-check in the following form](https://docs.google.com/forms/d/1HR5K7fsIbLNCC0UNcJ_67OkOBptkEsIl4ndtzL63yvM/edit)
