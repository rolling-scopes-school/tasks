
| Deadline  | Folder name | Branch name |
|-----------|-------------|-------------|
| 1.11.2019 23:59 | codejam-canvas | codejam-canvas |


# Codejam Canvas

## Task

Your task is to implement 3 html pages to show basic piskel clone interface (only markup) and canvas element drawing 2 color matrixes

- size 4*4, data in folder data/4x4.json
- size 32*32, data in folder data/32x32.json

## Extra functionality
* Show image on the canvas, the image could be found in data/image.png
* Dynamic canvas size switcher to switch to 4x4 or 32x32 or image
  * in that case it could be only 1 file

### UX proto
./data/rss-codejam-canvas.fig - to open from file in online / desktop editor

### Limitations
    - Should work in Chrome
    - Usage of material design is allowed
    - You CANNOT use any of the frameworks like Angular / React / Vue
    - You can use preprocessors 
    - You can communicate, chat, google and use stackoverflow
    - You can use lodash.js
    
### How to deliver
    - You can use your own private repo or public one
    - Create an files 4x4.html and implement drawing 4x4 matrix
    - Create an files 32x32.html and implement drawing 32x32 matrix
    - Implement additional functionality
    - Commit your code as you implement the features, i.e: 
        1. a base html file
        2. a basic layout with css 
        3. a layout for canvas 
        4. and so on
    - Deploy the code to github pages
    - Create a PR from your branch (codejam-canvas) to master
    
    
## Requirements for commits, PR, repository

[General requirements from stage 2](https://github.com/rolling-scopes-school/docs/blob/master/docs/stage2.md).

### Evaluation

Maximum points - **50**

#### Basic scope (**30**):
- [ ] Layout (menu, tools, canvas) - **10**
- [ ] Drawing color matrixes
  - [ ] 4x4 - **10**
  - [ ] 32x32 - **10**

#### Extra scope (only if basic is implemented)
- [ ] Show image on canvas **10**
- [ ] Dynamic canvas size switcher **10**


#### Fines
- Requirements to commits, repo and PR are not met - up to **-20**

## Additional info
* Expected time to accomplish - 2 - 6 hours
* https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
* https://graphicdesign.stackexchange.com/questions/49691/how-to-convert-an-array-of-html-colours-into-into-a-picture
* a very simple lessons about canvas - https://www.khanacademy.org/computing/computer-programming/programming/intro-to-programming/a/learning-programming-on-khan-academy
* Topics: arrays, canvas, markup


## Who checks your task
Your mentor
