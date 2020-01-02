| Deadline  | Folder name | Branch name |
|-----------|-------------|-------------|
| 23:59 08.01.2020 | simple-piskel-clone | simple-piskel-clone |

# Piskel-clone

## Functional requirements
You need to create a simplified clone of the https://www.piskelapp.com/, a web-based tool for Spriting and Pixel art.
An overview of the features can be found in this playlist: https://www.youtube.com/playlist?list=PLO3K3VFvlU6Akj3W29_nMLZFnwNOVbAzI

### Required functionality
#### Functional scope
- Canvas sizes: 32x32 / 64x64 / 128x128 user-defined units
- Tools
    - Pen. Required size is 1 unit. Other unit sizes (2, 3, 4) are optional.
    - Color select (Primary/Secondary)
    - Paint bucket should fill closed areas (flood fill)
    - Eraser
    - Stroke (to draw straight lines)
    - Paint all pixels of the same color
- Please use Tools in https://www.piskelapp.com/ as an ideal example of what should be done. Use only main functionality without keyboard modifiers (ALT or SHIFT keys)
- Preview
    - Small animation preview window in the top right corner 
    - Full screen mode
- Frames
    - Ability to add/delete a frame
    - Ability to reorder a frame via Drag and Drop
    - Ability to duplicate a frame
- Please use `Frames` and `Preview` components of https://www.piskelapp.com/ as an ideal example of what should be done.
- Export the final result 
    - to local file system in any format (.gif / .apng)
- User session 
  - Current session should be saved and be accessible when user opens up the page again.
- Landing page. This page should include the following information:
   - Screenshots
   - Animation examples
   - Implemented functionality overview
   - Link to the editor itself
   - Information about the author
- Keyboard shortcuts 
  - All actions should be available via keyboard shortcuts
    - tools
    - export
    - add / delete / create frame
  - Keyboard shortcuts should be available on hover 
  - Modal window to change keyboard shortcuts

## Technical requirements:
1) Browser support: latest version of Google **Chrome**.
2) Usage of **JS/ES2015+** or **TypeScript**.
3) You can use libraries and frameworks like React / Angular / Vue / jQuery / Bootstrap / Lodash / wrapper for file formats / API utilisation.
4) Final version of the editor should be **available via a link**. The easiest way to do so is to host your project on GitHub pages / Google Firebase / Heroku / Netlify / any other hosting.
5) Usage of Jest / any other tool for writing tests. You also need to setup test coverage output in the package.json by 'npm run coverage'. Your tests need cover the following code:
   1) Utilities, pure functions
   2) UI components
   3) Tools functionality (i.e. adding pixels, changing pixels, adding rectangle / circle)
6) Have to use browser's Canvas API to draw frames.

### Requirements to the commits, PR, repository
* [stage2-tasks-requirements](https://github.com/rolling-scopes-school/docs/blob/master/ru/stage2-tasks-requirements.md)
* worklog of the project

#### Worklog

To show process of development it needs to describe small amount of time and what work was accomplish during that time.

##### Example

You need to provide high level, feature base (what need to score) description. 


| Start time  | End time | time spent | feature |
|-----------|-------------|-------------|-------------|
| May 27 | Jun 6 | 3h | base structure of the project |
| Jun 7 | Jun 7 | 12h | frame management implementation |
| Jun 7 | Jun 7 | 12h | preview animation implementation |
| Jun 8 | Jun 10 | 8h | keyboard shortcuts implementation |
| Jun 11 | Jun 12 | 5h | layers implementation |
| Jun 12 | Jun 12 | 10h | bug fixing |


Total: 50h

### Requirements to the quality of code
- Don't use nested SetTimeout, synchronization of code using timeouts etc. Use promises/async/await where it's possible.
- Don't use magic number instead of named constants.  
  For example, instead of  
  `if (event.keyCode === 32 || event.keyCode === 13) {….}`  
  use  
  `if (event.keyCode === KeyboardEvent.SPACE || key === KeyboardEvent.ENTER ) {….}` etc.
- Don't use functions that have more than 40 lines of code (excluding variable declarations).
- Minimal use of ternary operators.
- Use pure functions where it's possible. If you haven't heard this term before, you can start your acquaintance [here](https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c) or [here](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976) 
- Use meaningful names for variables. Avoid single characters for variable names (i, n, j, d, etc.), abstract or common names (obj, arr, num, item1, etc.)
- Use the eslint with airbnb for all js code 

### Project structure. Organization of files and folders (example):
Usage of webpack is mandatory! Components directories should include all the needed resources and styles. For example, by removing folder `modal-dialog` all styles related to this dialog will be removed as well.
    
    dist
    src
    ├── components                
    │   ├── loading
    │   ├── modal-dialog
    │   ├── frames-list
    ├── screens
    │   ├── canvas
    │   │   ├── images
    │   │   ├── index.html       # template
    │   │   ├── index.scss       # styles
    │   │   ├── index.js         # logic
    │   ├── preview
    │   ├── export
    ├── app.js                   # main entry point.
    webpack.config.js
    README.md                    # links to landing page

Notes for Webpack usage: 
- There is no point in putting your code inside an Immediately-invoked Function Expression.
- There is no point in applying 'use strict' mode.

### Score criteria:

Basic (80)  + Normal (180) + Extra (160) + Impossible (30) - **+450**

#### Basic scope 

Max - **+80**
- [ ] Usage of Webpack and required project structure: **+10 points.**
- [ ] Custom canvas size (32x32 / 64x64 / 128x128) - **+10**
- [ ] Tools
  - [ ] Pen. Required size is 1 unit. (**+5**)
  - [ ] Pen. Other unit sizes (2, 3, 4) .(**+10**)
  - [ ] Color select (color picker) (**+5**)
  - [ ] Paint bucket (**+5**)
  - [ ] Eraser (**+10**)
  - [ ] Paint all pixels of the same color **+5**
  - [ ] Stroke (to draw straight lines) **+5**

- Unit tests
  - [ ] Setup Jest + cover couple functions with at least 2 tests (utilities / pure functions for example) **+15**

### Normal scope 

Max - **+180**
- [ ] Landing Page is presented will all needed information: **+20 points.**
- [ ] `Frames` functionality
  - add frame - **+15**
  - delete a frame - **+15**
  - drag & drop (move) frame - **+20**
  - duplicate frame - **+20**
- [ ] `Preview` functionality
  - Ability to animate the created frames  - **+20**
  - Ability to change FPS rate from 1 to 24 per second - **20**
  - Ability to run the animation in Full screen mode - **+10**
- Keyboard shotcuts
  - [ ] All actions should be available via keyboard shortcuts **+10**
  - [ ] Modal window to change keyboard shortcuts **+10**
- [ ] Save user session in localstorage **+10**
- Unit tests
  - [ ] write 20 unit tests for utils functions and ui components **+10**


### Extra (additional) scope
Max - **+160**
- [ ] Login with one of the oAuth providers - Google / Facebook / VK / Twitter (**+20**)
- Export the final result
    - [ ] As .apng to file system **+15**
    - [ ] As .gif to file system **+15**
- Unit tests
  - [ ] Achieve good coverage  **+1** for every percent of coverage (max - **+100**)
    - it needs to measure number of covered lines for all js app files in the project
  - [ ] Achieve at least 40% coverage (for utilitiess / pure functions) **+10**

### Impossible scope

Max - **+30**

- Unit tests
  - [ ] Achieve at least 80% coverage (for utilitiess / pure functions & ui components) **+30**


### Fines
- [ ] General stage 2 requirements violation or inappropriate quality of the code: **-50 points** and more depending on the decision of the mentor. 
- [ ] **-10** very bad / ugly design of landing page / app itself
- [ ] **-30** if there is no a worklog.
- [ ] **-30** big & "spaghetti style" modules
- [ ] **-20** eslint is not configured or there is a lot of errors
- [ ] **-20** magic number

#### Useful links:
- piskel app source files - https://github.com/piskelapp/piskel (for information!)
- some canvas tricks
  - https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/drawImage
- animation
  - https://developer.mozilla.org/ru/docs/DOM/window.requestAnimationFrame
  - https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
  - https://learn.javascript.ru/js-animation
  - https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe ( thanks @fomenkogregory)
- login
  - google - https://firebase.google.com/docs/auth/web/google-signin#handle_the_sign-in_flow_with_the_firebase_sdk
- canvas libs
  - http://fabricjs.com/
- previous videos
  - animation player bootstrap - https://www.youtube.com/watch?v=KpvMSDQGmpY
- full screen - http://qnimate.com/full-screen-api-tutorial-with-demo/
- refactorings
  - [magic number](https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5))  
- unit tests

  - [full coverage](https://github.com/davojta/2019q1-base-project-bootstrap/commit/1c5a7d801d1475ddec7d2d18c3a265923dd12b73)

### Lecture materials from @davojta analyzing the common mistakes appearing in the process 
- https://github.com/rolling-scopes-school/lectures/blob/master/lectures/refactoring.md
