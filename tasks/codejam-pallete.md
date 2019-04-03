# CodeJam-dom Pallete

### Deadline: Sunday, April 28, 2019 23:59

## Task

You need to implement 3 ui components (canvas, pallete, colors) with functionality described below. The js and css files should be in the folder with name "pallete".

As soon as you are completed one function you should commit the file. After that you proceed to the next part of functionality and commit it after compliting. You can refactor and commit changes till deadline.

### Components description

### UX proto

https://www.figma.com/file/EU8gNeqmJ8y57PUnCJ1UA3sL/pallete?node-id=0%3A1

### Pallete

It need to implement a component which will contain the following icons
- paint bucket tool
- choose color
- move tool
- transform tool


The behaviour should be the following
- paint bucket tool should color target figure into the current color by click
- choose color should set current color based on color of pixel where the click event happens
- move tool can drag figures to any place
- transform tool will change the target figure from squere to circle and back


### Colors

Colors component contains current, previous colors and predefined colors to use with paint bucket tool.
 

### Canvas

Canvas consist from 9 figures.

Can figure can be changed by tools from pallete component

### Limitations
    - Should work in Chrome
    - It is possible to use jquery but not jquery widgets
    - It is possible to use material ui / bootstrap
    - it is forbidden to use any framework like Angular / React / Vue
    - It is possible to use preprocessors 
    - it is allowed to communicate, chat, google and use stackoverflow
    
### How to deliver
    - Create an html with basic layout (menu, pallete, canvas) and css styles for it
    - Add tools and circle state for the figure from canvas 
    - Set current color to green 
    - Implement the bucket tool (click on 1 figure will change its color) 
    - Implement the choose color tool 
    - Commit your code during implementation
        1. empty html file
        2. basic layout with css 
        3. layout for canvas 
        4. and so on
    - Refactor and change the code till deadline
    
    
## Requirements for commits, PR, repository
[General requirements from stage 2](https://github.com/rolling-scopes-school/docs/blob/master/stage2-tasks-requirements.md).

### Evaluation

Maximum points - **140**

#### Basic scope (**30**):
- layout (palletes + canvas + menu) - **+10**
- paint bucket tool functionality - **+20**

#### Normal scope (include everything from basic) - **+100**:
- transform tool - **10**
- choose color tool - **+20**
- move tool - **+20**
- keyboard control - it is possible to choose the tool with keyboard shortcut - **+10**
- the `eslint` package is included to `package.json`, is setup with `eslint-config-airbnb-base` and all js code is validated - **+10** 

#### Extra scope (basic + normal are included)
- local storage: save current state of the app to restore it after reload  - **+20**
- drag and drop: it is possible to drag and drop with move tool on other figure and the figures with replace each other - **+20**


#### Fanes
- Requirements to commits, repo and PR are not met - up to **-20**


## Who checks
Your mentor
