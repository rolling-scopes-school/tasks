
| Deadline  | Folder name | Branch name |
|-----------|-------------|-------------|
| 30.04.2019 23:59 | palette | codejam-dom-palette |
| without typo | palette | codejam-dom-palette |

Two variants are allowed )


# CodeJam-dom Palette

## Task

Your task is to implement 3 ui components (canvas, palette, colors) with the functionality described below. The js and css files should be in the folder named "palette".

As you complete one part of the functionality you should commit the files. After that you proceed to the next part of functionality and commit it after you've finished it, and so on. You can refactor and commit changes till deadline.

### Components description

### UX proto

https://www.figma.com/proto/EU8gNeqmJ8y57PUnCJ1UA3sL/pallete?node-id=1%3A2&scaling=min-zoom

https://www.dropbox.com/s/cddxz5gnpbl3gbz/pallete.fig?dl=0 - to open from file in online / desktop editor

### Palette

Should contain the following:
- paint bucket tool
- color picker
- move tool
- transform tool


The behaviour should be as follows:
- paint bucket tool should color target figure into the current selected color on click
- color picker should set the current color based on color of pixel where the click event happens
- move tool allows you to move the figures anywhere
- transform tool should change the target figure from square to circle and vice versa


### Colors

The colors component contains current, previous and predefined colors to use with the paint bucket tool.
 

### Canvas

Canvas consists out of 9 figures.

Any of the canvas figures can be changed by the tools from the palette component

### Limitations
    - Should work in Chrome
    - Usage of jQuery is allowerd, except for jQuery widgets
    - Usage of material design / bootstrap is allowed
    - You CANNOT use any of the frameworks like Angular / React / Vue
    - You can use preprocessors 
    - You can communicate, chat, google and use stackoverflow
    
### How to deliver
    - Create an html file with a basic layout (menu, palette, canvas) and css styles for it
    - Add the tools and a circle state for the figure from canvas 
    - Set the current color to green 
    - Implement the bucket tool (clicking on a figure will change its color) 
    - Implement the color picker tool 
    - Commit your code as you implement the features, i.e: 
        1. empty html file
        2. basic layout with css 
        3. layout for canvas 
        4. and so on
    - Refactor and change the code till deadline
    
    
## Requirements for commits, PR, repository

[General requirements from stage 2](https://github.com/rolling-scopes-school/docs/blob/master/ru/stage2-tasks-requirements.md).


### Evaluation

Maximum points - **140**

#### Basic scope (**30**):
- layout (palettes + canvas + menu) - **+10**
- paint bucket tool functionality - **+20**

#### Normal scope (include everything from basic) - **+100**:
- transform tool - **10**
- color picker tool - **+20**

*To mentor*: detect color by background color in predefined color area and inside canvas is enough  

- move tool - **+20**

*To mentor*: if a student has implemented drag and drop (swap) it will be enought for that point also 

- keyboard controls - it is possible to choose the tool with keyboard shortcuts - **+10**
- the `eslint` package is included in `package.json`, is setup with `eslint-config-airbnb-base` and all js code is validated - **+10** 

#### Extra scope (basic + normal are included)
- local storage: save current app state to restore it after the page reload - **+20**
- drag and drop: it is possible to drag and drop a figure (using a move tool) on top of another figure, making the figures swap places with each other - **+20**


#### Fines
- Requirements to commits, repo and PR are not met - up to **-20**


## Who checks your task
Your mentor

## FAQ
https://docs.google.com/spreadsheets/d/12JE8W0zVyjCNBVyEIrghmgZhwN2Ba_ApOonVNMtHncM
