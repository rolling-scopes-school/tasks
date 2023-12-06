| Deadline         | Folder name | Branch name     |
| ---------------- | ----------- | --------------- |
| 11.11.2019 23:59 | palette     | codejam-palette |

# Codejam Palette

## Task

Your task is to implement drawing tools (pencil, fill bucket, color picker) with the functionality described below. Also, you need to save the current user session and restore it after a page reload. The code should be checked with `eslint` tool. There is an extra scope in the task which should be done after a normal scope implementation.

### UX prototype

Here is the file to open in figma editor - ./data/codejam-palette.fig

Online version- https://www.figma.com/proto/anAQsgXvKyEgijDvhZD7pJ/codejam-palette?node-id=0%3A1&scaling=min-zoom

The palette editor consiste of the following blocks:

- tool component with different tools which possible to apply to the canvas
- palette area with the current color button, the previous color button and set of predefined colors
- 512 x 512 pixel size canvas element with 4x4 field. The size of one field item is 512/4=128px. The all drawing will happen on that component. You can also used 16x16 or 32x32 field.
- menu component with codejam title is just static html without functionality

### Canvas

Canvas should dispay matrix 4 _ 4 on 512 _ 512 pixel sized dom element and apply tools to matrix 4 x 4.

### Tools

Page should start with pencil as selected tool.

The current selected tool should have status active on ui (changed background).

The general behaviour of the tool:

- the user selects the tool by left click on the icon
- the tool should be highlighted in the panel with tools
- the user can apply the tool to the canvas
  - fill the canvas with fill bucket tool
  - draw pixels with pencil tool
  - select the color with color picker

#### Fill bucket tool

The fill bucket tool should color the whole canvas into the current selected color on click.

To earn additional score, you as developer need to implement fill by current color inside closed area.

![Example from Sonic](https://cdn.discordapp.com/attachments/642271813870551040/642438943832539197/unknown.png).

Left bottom area only should be filled.

#### Pencil tool

If the user presses a left mouse button, the pencil should draw pixel under the current mouse position.

[Video example from @Sonic](https://cdn.discordapp.com/attachments/642271813870551040/642349595875344403/Screencast_2019-11-08.mp4)

#### Color picker

The color picker component contains the current, the previous and predefined colors to use with the fill bucket and the pencil tools.

The user should be able to choose the color by

- clicking on current color and using color input functionality
- clicking on one of predefined colors (red or blue)
- selecting color picker tool and clicking on any pixel on the canvas (or even on the page)

Prev color button should contain information about previous state of current color button. If the user clicks on prev color button - its color will become the current.

### Keyboard shortcuts

You as developer need to activate (choose) the tool by pressing keyboard button

- `b` to select fill **b**ucket
- `p` to select **p**encil
- `c` to activate **c**olor picker

### User session

The user should have possibility to refresh the page and be able to see previous canvas content. That feature should be implemented with localStorage API.

### Non functional requirements

#### eslint

`eslint` should be configured

- `eslint` included in `package.json`,
- you should use `eslint-config-airbnb-base` config
- all code should be checked
- eslint check is run by `npm run lint`

#### Limitations

- Should work in Chrome
- Usage of material design or bootstrap is allowed
- You CANNOT use any of the frameworks like Angular / React / Vue
- You can use preprocessors
- You can communicate, chat, google and use stackoverflow
- You can use lodash.js

### How to deliver

The js and css files should be in the folder named "palette" (codejam-palette is also okey). You can organise the code inside the folder as you want.

- create a git branch
- create a folder
- Create an html file with a basic layout and css styles for it in the folder. Or just copy your html from codejam-canvas.
- Implement basic functionality to manipulate the canvas
  - initialise the canvas
  - fill
- Set the current color to green
- Add the fill bucket tool
- Add the pencil bucket tool
- Implement the color picker tool
- Commit your code as you implement the features, i.e:
  1. empty html file
  2. basic layout with css
  3. layout for canvas
  4. and so on
- If you have time, start working on extra scope
- Refactor and change the code till deadline

The mentor can leave a comments during the review, and you as a student can fix the problems achieve more bigger score.

## Requirements for commits, PR, repository

[General requirements from stage 2](https://github.com/rolling-scopes-school/docs/blob/master/docs/stage2.md).

## Evaluation

Maximum points - **120**

### Normal scope:

- [ ] **+10** - pencil tool functionality
- [ ] **+10** - fill bucket tool functionality
- [ ] **+20** - color picker tool functionality
- [ ] **+10** - keyboard controls: it is possible to choose the tool with keyboard shortcuts
- [ ] **+20** - local storage: save current app state to restore it after the page reload

Total: **70**

### Extra scope (include everything from basic)

- [ ] **+10** - the fill bucket tool is fill closed area not all the canvas
- [ ] **+20** - the pencil tool is implemented with Bresenham's line algorithm

- [ ] **+10** - the `eslint` is configured
- [ ] **+10** - at least 1 unit test is implemented (using `jest` or `mocha`) and it is possible to run it by `npm test`

Total: **50**

### Fines

- Requirements to commits, repo and PR are not met - up to **-20**
- No indication for the current selected tool - **-10**

## Who checks your task

Your mentor

## Additional info

- Expected time to accomplish - 4 - 8 hours without extra scope
- color input - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
- Project: A Pixel Art Editor - https://eloquentjavascript.net/19_paint.html
- Video with canvas drawing - https://www.youtube.com/watch?v=8ZGAzJ0drl0&feature=youtu.be
- Local storage - https://tproger.ru/articles/localstorage/
- Local storage on mdn - https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
- eslint setup - https://youtu.be/ofJdXbf11w0?list=PLe--kalBDwjj81fKdWlvpLsizajSAK-lh&t=171
- jest setup - https://github.com/davojta/2019q1-base-project-bootstrap/commits/add-unit-tests
- jest setup video - https://youtu.be/OyMf8ZlUfW8?list=PLe--kalBDwjj81fKdWlvpLsizajSAK-lh&t=438

- Topics: dom, canvas, local storage, algorithms, unit tests, lint tools

## Gratitude

- @abyss-soft to review and propose improvements to that task!
