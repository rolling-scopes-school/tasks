# RSS Gem Puzzle

## Task

You are to implement a classic game — [Gem Puzzle](https://en.wikipedia.org/wiki/15_puzzle)

### Game rules

`Game is a sliding puzzle that consists of a frame of numbered square tiles in random order with one tile missing. The puzzle also exists in other sizes, particularly the smaller 8-puzzle. If the size is 3×3 tiles, the puzzle is called the 8-puzzle or 9-puzzle, and if 4×4 tiles, the puzzle is called the 15-puzzle or 16-puzzle named, respectively, for the number of tiles and the number of spaces. The object of the puzzle is to place the tiles in order by making sliding moves that use the empty space.`

### Approximate appearance

![](https://i.imgur.com/yaunqVV.png)

### Main functional requirements

`Basic (required):`

- the design is up to you, but it should be responsive (desktop, tablet, mobile). When switching between versions everything should be displayed correctly, all functionality should be present, nothing should disappear or leave beyond the screen. It is acceptable to change the appearance for the mobile version (for example, hide the buttons in the burger menu)
- initially, `body` in the index.html file should be empty, all necessary elements are generated using JS
- the default size of the frame is 4x4
- at the beginning state of the game, the frame is filled with randomly generated numbers, when starting a new game, numbers are re-shuffled
- when you click on a tile next to an empty cell, the tile moves to the empty cell
- tiles can be dragged to an empty cell with the help of mouse
- the game can be restarted without reloading the page
- display the game duration in minutes and seconds "##:##" and the number of moves
- usage of [eslint (eslint-config-airbnb-base)](https://eslint.org/), [webpack](https://webpack.js.org/) (this requirement is not checked)
- implement the functionality to save the game (for example, using localStorage), so that when the page is reloaded, a player can continue from where he left off

`additional (to get extra points):`

- implement functionality to choose frame size: from 3х3 to 8х8
- implement animations for sliding/movement of tiles
- on a successful game solution, display the message: «Hurray! You have solved the puzzle in #:## and N moves»
- the top 10 results are saved in the high score table and can be viewed in any way (for example, by pressing a button)

## Repository requirements

- the work should be done in your private repository
- source code should be committed to a separate branch
- the **master** branch should be empty (contain only files like README.md or .gitignore)
- commit messages should follow the [guideline](https://www.conventionalcommits.org/en)
- once the work is finished, create a pull request from a development branch to master
- the pull request name should contain **the task name**
- the pull request description should contain the following information:
    - link to the task
    - screenshot of your application (one would be enough)
    - link to your application
    - date of completion/deadline
    - your self-check with a preliminary evaluation that is based on the evaluation criteria from the task

Example:

```
1. Task:
   Link to the current is here
2. App screenshot:
   Your screenshot is here
3. Deploy:  
   A link to your deployed application is here
4. Done 19.04.20 (deadline 19.04.20)
5. Score: 200 / 200
- [x] Minimal scope
    - [x] Feature 1 is implemented (+10)
    - [x] Feature 2 is implemented (+10)
- [x] Basic scope
    - [x] Feature 3 is implemented (+10)
    - [x] Feature 4 is implemented (+10)
- [x] Extra scope
    - [x] Feature 5 is implemented (+10)
    - [x] Feature 6 is implemented (+10)
- [x] Technical requirements
    - [x] ESLint is used (+10)
    - [x] ES6 features are used (+10)
    - [x] Requirements to the repository, commits and pull request are met (+10)
- [x] Penalties
    - [x] Errors while app's working. (-10 for each, but no more than the total number of points for requirement implementation)
    - [x] Not comply with the requirements for Pull Request, repository, commits names (-10) scores by mentor
```

## Technical requirements

- the application is checked in the latest version of Google Chrome browser
- jQuery is not allowed
- you can not use Angular / React / Vue
- you can use bootstrap, CSS frameworks, HTML and CSS preprocessors

## Criteria for evaluation:

**Maximum score for the task: 100 points**

### Basic scope +30

- [ ] layout, design, UI: `+10`
- [ ] at the beginning state of the game, the frame is filled with randomly generated numbers: `+10`
- [ ] on click on a tile next to an empty cell, the tile moves to the empty cell: `+10`

### Advanced scope +50

- [ ] the game can be restarted without reloading the page: `+10`
- [ ] game duration and number of moves are displayed: `+10`
- [ ] tiles can be dragged with use of mouse: `+10`
- [ ] implemented saving the state of the game and saving the top 10 results using LocalStorage: `+10`
- [ ] implemented selection of different sizes for frame: `+10`

### Hacker scope +20

- [ ] animation of tiles' movement on frame: `+10`
- [ ] when the game is finished, the following message is displayed "Hooray! You solved the puzzle in ##:## and N moves ". `+10`

## Useful links

- [Drag-end-drop](https://learn.javascript.info/mouse-drag-and-drop)

- [Eslint](https://eslint.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Canvas](https://developer.mozilla.org/en/docs/Web/API/Canvas_API/Tutorial)
- [Game Canvas](https://www.w3schools.com/graphics/game_canvas.asp)
- [Node.js](https://nodejs.org/en/), [Express](http://expressjs.com/), [Mongodb](https://www.mongodb.com/)
- [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/)
