
| Deadline  | Folder name | Branch name |
|-----------|-------------|-------------|
| 02.06.2019 23:59 | animation-player | animation-player |



# Animation Player 

## Task
Your task is to implement Animation Player with `Frames` and `Preview` components and the functionalities described below. 
This task is the continuation of the [CodeJam Pallete](./codejam-pallete.md)

## Requirements
### Mock ups / UI prototype
* [Figma online](https://www.figma.com/proto/hieu0x13Znk8pzwej9oTrK/animation-player?node-id=1%3A2&scaling=min-zoom)
* Fig file [link](https://www.dropbox.com/s/g4tyu5u9gfk7jx9/animation%20player.fig?dl=0)

### Functionality

#### `Frames` component
- Ability to add a frame
- Ability to delete a frame
- Ability to duplicate a frame

#### `Preview` component
- Ability to animate the created frames  
- Ability to change FPS rate from 1 to 24 per second
- Ability to run the animation in Full screen mode

### Functional requirements
- 3*3 pixel field (canvas) could be used as base for animations. You also can expand that field fron 3*3 to 4*4 or even more. It is also possible to use canvas api to draw and interact with frame content. It is okey to utilize dom element to draw these pixels
- preview component should use canvas api for animation
- Please use `Frames` and `Preview` components of https://www.piskelapp.com/ as an ideal example of what should be done.
- Should work in Chrome

### Non-functional requirements
- Components source files should be stored in the folders with the component name.
- When you finalize one functionality you should commit you intermediate results. You can refactor and commit changes till deadline. For more details, please read - https://github.com/rolling-scopes-school/docs/blob/master/ru/stage2-tasks-requirements.md
- You CAN use jQuery only to work with DOM API (no widget / jquery ui)
- You CANNOT use any framework like Angular / React / Vue
- You CANNOT use any lib
- You CAN use Material design or Bootstrap
- You CAN use preprocessors 
  
### How to deliver
Your work should be based on your implementation of [CodeJam Pallete](./codejam-pallete.md).
At the beginning of the work create a branch from `codejam-dom-pallete` called `animation-player`.
Then please follow the [general requirements from stage 2](https://github.com/rolling-scopes-school/docs/blob/master/ru/stage2-tasks-requirements.md). 

### Evaluation
Maximum points - **100**
- `Frames` functionality
  - add frame - **15**
  - delete a frame - **15**
  - duplicate frame - **20**
- `Preview` functionality
  - Ability to animate the created frames  - **20**
  - Ability to change FPS rate from 1 to 24 per second - **20**
  - Ability to run the animation in Full screen mode - **10**

- *!NOTE!* You don't get points until the functionality is not fully done.
- *!NOTE!* You are given 7 days to fix all issues/bugs mentioned by the mentor. The counting of the days starts after mentor fully checks you initial Pull Request.  


#### Fines
- [Requirements to commits, repo and PR](https://github.com/rolling-scopes-school/docs/blob/master/ru/stage2-tasks-requirements.md) are not met - up to **-20**


## Who checks your task
Your mentor
