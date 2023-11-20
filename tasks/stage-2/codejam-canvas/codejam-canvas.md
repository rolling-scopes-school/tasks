| Deadline         | Folder name    | Branch name    |
| ---------------- | -------------- | -------------- |
| 27.10.2019 23:59 | codejam-canvas | codejam-canvas |

# Codejam Canvas

## Task

Your task is to implement 2 html pages to demonstrate basic [piskel clone](https://www.piskelapp.com/) interface (markup only) and the canvas element (size 512x512) used to draw 2 color matrixes.

- size 4x4, data can be found in the `data/4x4.json` file
- size 32x32, data can be found in the `data/32x32.json` file

The data should scale to the canvas size.

The following gif shows an example of possible result (with extra scope implemented)
![gif with codejam-canvas](https://cdn.discordapp.com/attachments/636801685288648724/636930783180750849/codejam-canvas.gif)

Thanks Victor (@MitskevichVS) for the gif!

## Extra functionality

- Show image on the canvas. The image can be found in `data/image.png`
- Dynamic canvas size switcher to switch to 4x4 or 32x32 or an image
  - in that case it can be only 1 file

### UX prototype

`./data/rss-codejam-canvas.fig`. You can open this file in [Figma](https://figma.com) online / desktop editor.

### Limitations

    - Should work in Chrome
    - Usage of Material UI or Bootstrap is allowed
    - You CANNOT use any of the frameworks like Angular / React / Vue
    - You can use preprocessors
    - You can communicate, chat, google and use Stack Overflow
    - You can use lodash.js
    - You can just copy data from json file and insert it directly to your js file

### How to deliver

    - You can use your own private repo or a public one
    - Create `4x4.html` file, copy data from json into js file and implement 4x4 matrix drawing
    - Create `32x32.html` file, copy data from json into js file and implement 32x32 matrix drawing
    - Implement additional functionality
    - Commit your code as you implement the features, i.e:
        1. base html file
        2. basic layout with css
        3. layout for canvas
        4. and so on
    - Deploy code to (GitHub Pages)[https://pages.github.com/] / [Netlify](https://www.netlify.com/) / [surge](https://surge.sh/) / other hosting and provide link in pull request
    - Create a PR from your branch (codejam-canvas) to master branch

## Requirements for commits, PR, repository

[General requirements from stage 2](https://github.com/rolling-scopes-school/docs/blob/master/docs/stage2.md).

### Evaluation

Maximum amount of points - **50**

#### Basic scope (**30**):

- [ ] Layout (menu, tools, canvas) — **10**
- [ ] Drawing color matrixes
  - [ ] 4x4 - **10**
  - [ ] 32x32 - **10**

#### Extra scope (only if the basic scope is implemented)

- [ ] Show image on canvas **10**
- [ ] Dynamic canvas size switcher **10**

#### Fines

- Requirements for commits, repo and PR are not met — up to **-20**

## Additional info

- Expected time to accomplish task — 4–8 hours
- https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
- https://graphicdesign.stackexchange.com/questions/49691/how-to-convert-an-array-of-html-colours-into-into-a-picture
- very simple canvas course — https://www.khanacademy.org/computing/computer-programming/programming/intro-to-programming/a/learning-programming-on-khan-academy
- https://www.youtube.com/watch?v=8ZGAzJ0drl0 — video about how to draw on canvas

- Topics: `arrays`, `canvas`, `markup`, `json`

## Who checks your task

Your mentor

## FAQ

https://docs.google.com/spreadsheets/d/1b1L9Lr339MP0qLSlZ47IBLE93LW1gyTqJNEz08jmvaA/edit
