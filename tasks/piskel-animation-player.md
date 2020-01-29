
| Deadline  | Folder name | Branch name |
|-----------|-------------|-------------|
| 02.06.2019 23:59 | animation-player | animation-player |



# Animation Player

## Task
Your task is to implement Animation Player with `Frames` and `Preview` components and the functionalities described below.
This task is the continuation of the [CodeJam Pallete](./codejam-pallete.md) and should help with starting piskel clone work.

## Requirements
### Mock ups / UI prototype
* [Figma online](https://www.figma.com/proto/hieu0x13Znk8pzwej9oTrK/animation-player?node-id=1%3A2&scaling=min-zoom)
* Fig file [link](https://www.dropbox.com/s/g4tyu5u9gfk7jx9/animation%20player.fig?dl=0)
* [piskel](https://www.piskelapp.com/) should be used as reference

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
- drawing field for creating separate frames for animation
  - could be reused from palette codejam (be 3x3 field on div)
  - it's possible to use field with size 4x4 or even more
  - it is also possible to use canvas api to draw and interact with frame content
- preview component should use
  - canvas api for animation
  - or use the method from piskel app (change background image with frame rate)
- Please use `Frames` and `Preview` components of https://www.piskelapp.com/ as an ideal example of what should be done.
- Should work in Chrome

### Non-functional requirements
- Components source files should be stored in the folders with the component name.
- When you finalize one functionality you should commit you intermediate results. You can refactor and commit changes till deadline. For more details, please read - https://github.com/rolling-scopes-school/docs/blob/master/docs/stage2.md
- You CAN use Material design or Bootstrap
- You CAN use preprocessors
- the tech requirements are same as for piskel clone
  - Usage of JS/ES2015+ or TypeScript.
  - You can use libraries and frameworks like React / Angular / Vue / jQuery /Bootstrap / Lodash / wrapper for file formats / API utilisation.
  - Final version of the animation player could be available via a link. The easiest way to do so is to host your project on GitHub pages / Google Firebase / Heroku / Netlify / any other hosting.

### How to deliver
Your work
- could be based on your implementation of [CodeJam Pallete](./codejam-pallete.md)
- could be based on your piskel clone work
- could be done from scratch as foundation for piskel clone

At the beginning of the work create a branch from `codejam-dom-pallete` / 'piskel-clone' / master called `animation-player`.

Then please follow the [general requirements from stage 2](https://github.com/rolling-scopes-school/docs/blob/master/docs/stage2.md).

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
- [Requirements to commits, repo and PR](https://github.com/rolling-scopes-school/docs/blob/master/docs/stage2.md) are not met - up to **-20**


## Who checks your task
Your mentor
