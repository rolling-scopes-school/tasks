| Deadline  | Folder name |
|-----------|-------------|
| 23:59 08.01.2019 | piskel-clone |

# Piskel-clone
## Functional requirements
You need to create simplified clone of the https://www.piskelapp.com/ web-based tool for Spriting and Pixel art.
Overview of features can be found on this playlist: https://www.youtube.com/playlist?list=PLO3K3VFvlU6Akj3W29_nMLZFnwNOVbAzI

### Minimal required functionality
- Canvas size 32x32 units
- Tools:
    - Pen. Required size is 1 unit. Other units (2,3,4) are optional.
    - Mirror Pen (Vertical | Horisontal | Both)
    - Color select (Primary/Secondary)
    - Paint Bucket 
    - Paint all pixels of the same color
- Preview
    - Small preview on the top of the right corner 
    - Full screen mode
- Frames
    - Ability to add/delete a frame
    - Ability to reorder a frame via Drag and Drop
    - Ability to duplicate a frame
- Layers
    - Ability to add/delete a layer
    - Ability to move up/down a layer
    - Ability to duplicate a frame
- Export the final result as a GIF image

## Technical requirements:
1) Browser support: latest version of Google **Chrome**
2) Usage of **JS/ES2015+** or **TypeScript**
3) You can use libraries and frameworks like react/angular/vue/jquery/bootstrap.
4) Final version of the editor should be **available by link**. The easiest way to realize it is to publish your project on Github pages
5) **Landing page**. This page should include the next information:
   - Screenshots
   - Animation examples
   - Link to open the editor
   - Information about the author
   
### Requirements to the commits, PR, repository
https://github.com/rolling-scopes-school/docs/blob/master/stage2-tasks-requirements.md

### Requirements to the quality of code
- Don't use nested SetTimeout, synchronization of code using timeouts etc. Use promises/async/await where it's possible.
- Don't use magic number instead of named constants.  
  For example, instead of  
  `if (event.keyCode === 32 || event.keyCode === 13) {….}`  
  use  
  `if (event.keyCode === KeyboardEvent.SPACE || key === KeyboardEvent.ENTER ) {….}` etc.
- Don't use functions, that have more than 40 lines of code (excluding variable declarations).
- Minimal use of ternary operators.
- Use pure functions where it's possible. If you haven't heard this term before, you can start acquaintance [here](https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c) or [here](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976) 
- Use meaningful names for variables. Avoid single characters for variable names (i,n,j,d etc.), abstract or common names (obj, arr, num, item1 etc.)

### Project structure. Organization of files and folders(example):
Using of webpack is a must! Components directories should include all needed resources and styles. For example, by removing folder `modal-dialog` all styles related to this dialog will be removed as well.
    
    dist
    src
    ├── components                
    │   ├── loading
    │   ├── modal-dialog
    │   ├── frames-list
    │   ├── layers-list
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
    README.md

Notes for webpack usage: 
- There is no sense to put your code inside of Immediately-invoked Function Expression.
- There is no sense to apply 'use strict' mode.

# Delivery process and score criteria
### Delivery process:
 - The final scoring and reviewing will be performed **NOT** by your mentor from stage#2. The list "*student - reviewer*" will be published after the deadline.
 - You'll have up to **30 min** to present your project.
 - Other students may attend / ask you questions.
 - It can be offline or online depending on the location/opportunities of the reviewers.

### Score criteria (TBD TBD TBD):
- Landing Page is presented: **+15 points.**
- Usage of Webpack and required project structure: **+15 points.**
- There is custom component "modal dialog", that is used for spell choosing, for game settings etc.: **+5 points.**
- There are several spell types (two or more) and their animation with audio effect: **+15 points.**
- There is autogeneration of Monsters (name and body): **+15 points.**
- There is Task screen **+15 points**. For the second one you get extra **+15 points**. For the third extra **+10**. For every next **+5 points**. Tasks which are not included in the list *Options of the Task screen* will cost **5 points** maximum. Maximum allowed number of different task types in the game is 15. Total: the maximum score for this item is **100 points**.
- There is screen with the High score list: **+10 points.**
- Possibility to play using only keyboard (without mouse/touchpad/cursor etc.): **+25 points.**
- There is reasonable number of unit tests: **+25 points.**
- Saving of the high score list is implemeted using node.js/express/mongodb: **+35 points.**
- Violation of the general requirements to the tasks performing in RSSchool stage#2 or the quality of the code: **-50 points** and more depending on the decision of the mentor. 

#### Useful links:
1) http://www.williammalone.com/articles/html5-canvas-javascript-paint-bucket-tool/

### Lecture materials from @davojta with analysis of the common mistakes, which appear during the task performing 
- https://github.com/rolling-scopes-school/lectures/blob/master/lectures/refactoring.md
