#  Project Management System

**Project management system** is an application that helps a team or group of developers achieve their goals.
PLEASE READ TASK DESCRIPTION CAREFULLY UP TO THE END BEFORE CODING❗❗❗

## Theoretical Notes

There are many competitors on the market for our future application. Check out suggested analogs before start building your app: *Trello, Jira, Redmine, Bitrix24, Yandex Tracker, Asana, GanttPro, Github projects.*
## Building a team

- you should work in a team of 3 members
- teams can be pre-defined there. (https://rss-teams.web.app/)
- All students should be registered there. (https://rss-teams.web.app/)
- All teams should be registered there. [RSSTeams](https://rss-teams.web.app/) 
- Teamwork guidelines [RSSchool Docs](https://docs.rs.school/#/teams)
## Application Prototype

Pay attention that we leave the final set of tools and design up to you to not limit your possibilities and imagination.

Design, prototype, as well as the implementation of the application are up to you.

Here's the list of examples of working prototypes:

https://comfy-klepon-a13665.netlify.app/

https://project-management-appl.herokuapp.com/

https://pma-angular.netlify.app/

https://project-management-app-group14.netlify.app/

https://project-management-team7.netlify.app/

## Backend

Use https://github.com/vitaly-sazonov/kanban-rest or https://github.com/rolling-scopes-school/final-task-backend/pull/1 as a backend.
There is a description of the steps to get started, as well as a list of available requests in the repository.

- You will need to deploy the backend yourself to demonstrate the working application.
- During the implementation of an application, you may run the backend in any environment that is convenient for you, for example, a local machine.

## Application structure

Your app must contain:

- welcome page
- user auth
- boards list page
- selected board management page
Your app could contain:
- additional functionality (for example, the ability to view all the tasks of the selected user)

## Repository requirements

- teamlead should create private repo in github and invite other members 
- teamwork nuances described there [Teamwork](https://github.com/rolling-scopes-school/tasks/tree/master/stage2/modules/final-task#%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%BD%D0%BE%D0%B9-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B)
- repo name **project-management-app**. Branch name for develop - **develop**, **main** branch is empty and contains only README.md
- the commit history should display application development process. [Commit requirements](https://docs.rs.school/#/git-convention)
- the demo version of the application should be deployed on `gh-pages`, `netlify`, `heroku`, or another similar service.
- after completing the task, create a pull request from **develop** to **main** branch. **Merging a Pull Request is not required**
- describe in PR how to run your backend locally if you didn't deploy backend.
- you should make your repo public after deadline

## Technical requirements

- localization (at least 2 languages). You should be able to change the language by clicking on the toggler/select in header.
- semantic layout
- the application should work at least in the latest version of the Google Chrome browser
- you must use React 18 + **suspense** feature.(Gatsby, NextJS, Remix, etc. are not prohibited)
- Private routes, 404, error boundary
- Using jQuery in the main application code is not allowed.
- You can use create-react-app, css frameworks, any js/components libs you want, html and css pre-processors
- You must use Typescript
- it is necessary to use the backend for the correct operation of the application and the interaction between several users
- ❗ it is forbidden to copy the code of other students, demos, or examples that are given in the assignment. This ban applies to html, css, and js code. You can use small code snippets from Stack Overflow, and other self-found sources on the Internet, except github repositories of course students.

## Application design requirements

- you are not limited in creativity but limited by the user's capabilities
- the application quality is characterized by the elaboration of details, attention to typography (no more than three fonts per page, font size of at least 14 px, optimal [font and background contrast](https://snook.ca/technical/colour_contrast/colour.html)), carefully selected content
- adaptive layout. The minimum page width of the application is 320px
- interactivity of elements users can interact with, changing the appearance of the element itself and the type of the cursor on hover, using different styles for the active and inactive state of the element, smooth animations
- the unity of styles of all pages of the application - the same fonts, button styles, indents, the same elements on all pages of the application have the same appearance and layout. Item colors and background images may vary. In this case, colors should be from the same palette, and background images from the same collection.

## Description of function blocks

### Welcome page(route)

- The welcome page should display general information about the developer, project, and course.
- In the upper right corner should be present 2 buttons Login and Sign up
- If there is an unexpired token, the user should be redirected to the "Main route" of the application automatically.
- When the token expires - the user should be redirected to the "Welcome page" automatically.
- Pressing the Login / Sign up button redirects the user to the route with the Login / Sign up form automatically.

### Header
- There are buttons in the header for authenticated users: edit profile, logout, create new board, and localization switcher.
- Edit profile should redirect the user to a route with a form for edit profile. The requirements for the form are the same as for all forms in the application. There should be a 'Delete User' button. In case of this action should be shown as a  "confirmation modal" then the user should be logged out, and the user should be removed from the database.
- Create a new board - opens a modal window with a form for creating a board. Requirements for the form are the same as for all forms in the application.

### Footer

- footer should contain a link to the author's github, the year the application was created, [course logo](https://rs.school/images/rs_school_js.svg) with [link to the course](https://rs.school/react/).
- footer is displayed on all pages of the application.  

### Login / Sign up

- Form fields should be implemented in consistency with the backend API of the application. Validation should be implemented.
- Errors from the BE side - (Not found, unhandled rejection, etc) should be displayed in a user-friendly format (toast, pop-up, or something like this - up to your decision).
- Upon successful login, the user should be redirected to the "Main route"

### Main route

- Displays all created boards as a list.
- Boards are displayed with a small preview of the available information (title). By clicking on the element, the user redirects to the board item (Board route). There should be a button to remove the board.
- When a user tries to delete the board, he/she should receive a confirmation modal to verify if the user wants to delete the board (to avoid deleting the board by mistake). The confirmation modal should be a generic component (one for the application).
- global search (optional): search for a task by task number, name, users assigned to it, and by the text of the task description.

### Board route

- There should be a button to create a column.
- If there is at least one column on the board, you should display the task creation button.
- To create a column and a task, you should display a form in the modal window.
- Requirements for the modal window and forms are described before.
- A task cannot be standalone and should be always bound to a column.
- The user can create multiple columns. The user can create an unlimited number of tasks. When overflowing with the number of tasks of the column - display scroll inside the column.
- If all columns do not fit on the screen, the page may have a horizontal scroll.
- The user can swap columns using drag-n-drop.
- The user can change the order of tasks columns using drag-n-drop.
- The user changes the belonging of the task to the column using drag-n-drop.
- ❗ It is recommended to use the existing library to implement the drag-n-drop functionality ❗.
- By clicking on the task, you should open a modal window with the edit task form. The requirements for the form and window are the same everywhere.
- There should be a 'delete task' button on the task. By clicking the 'delete task' the confirmation modal should be displayed, only after a user confirms the deletion - delete the task.
- At the top of the column should be displayed the title. When you click on it, it should convert text into input, there should be 'cancel' and 'submit' buttons to the left of input. After entering text in the input and clicking submit - the title of the column should be updated with the entered text.
- The column should have a 'delete column' button. Clicking on 'delete column' should open the confirmation modal, only after the user confirms the deleting - delete the column.
- ATTENTION! Deleting a column removes the tasks associated with it from the BD automatically.
- There should be a "back" button to return to the main route

## Evaluation criteria

**Maximum available points for the task 620**

## Check criteria

### Welcome route - max 70 points

- [ ] The welcome page should contain general information about the developer, project, and course. **10 points**
- [ ] In the upper right corner there are 2 buttons: login and sign up. **10 points**
- [ ] If there is an unexpired token, the user should be redirected to the "Main route" of the application automatically. **20 points**
- [ ] When the token expires - the user should be redirected to the "Welcome page" automatically. **20 points**
- [ ] Pressing the Login / Sign up button redirects a user to the route with the Login / Sign up form. **10 points**

### Login / Sign up  - max 80 points

- [ ] Login/log out should be present on all pages **20 points**
- [ ] Form fields should be implemented according to the backend API. Validation should be implemented. **50 points**
- [ ] Upon successful login, the user should be redirected to "Main route" **10 points**

### Main route - max 100 points

- [ ] Board creation functionality **20 points**
- [ ] Displays all created boards as a list **10 points**
- [ ] Each board in the list is displayed with a small preview of available information (title, description, etc). By clicking an element the user navigates to the board item (Board route). There's also a button for board deletion. **10 points**
- [ ] When trying to delete the board, we should receive a confirmation modal. The confirmation modal must be a generic component (one for the entire application). **10 points**
- [ ] Global search: search for a task by a task number, name, users who participate in it, and by the text of the task description. **20 points**
- [ ] The user profile editing functionality is implemented. **30 points**

### Board route - max 260 points

- [ ] Button for column creation is displayed **10 points**
- [ ] If a board contains at least one column - a button for task creation is displayed as well **10 points**
- [ ] A modal window with form is displayed for column and task creation  **30 points**
- [ ] A vertical scrollbar is displayed in the column when overflowing with the number of column tasks  **20 points**
- [ ] The page itself on the current route doesn't have a vertical scrollbar **10 points**
- [ ] With the help of drag-n-drop, we can swap columns. **30 points**
- [ ] With the help of drag-n-drop, we can change the order of tasks within a column.  **30 points**
- [ ] With the help of drag-n-drop, we can change the task belonging to the column.  **50 points**
- [ ] by clicking on the task, we open a modal window with the edit task form. The requirements for the form and window are the same as everywhere else. **30 points**
- [ ] The task must have a delete task button. On click: confirmation modal -> delete.  **10 points**
- [ ] The top of a column should always display the column title. By clicking the title the test should turn into a form with cancel and submit buttons. After typing a text into the input and clicking the submit button the tile of the column should be updated. **20 points**
- [ ] The column should have a delete button. By clicking -> confirmation modal -> when approving -> deleting. **10 points**

### General requirements - max 80 points

- [ ] Backend error handling - (Not found, unhandled rejection, etc) should be performed in a user-friendly way (toast, pop-up or anything else you implement). **50 points**
- [ ] Localization **20 points**
- [ ] Backend is deployed and publicly available **10 points**

### Additiona functionality - 30 points

- [ ] Implemented additional functionality that is not provided for by current requirements **30 points**

### Penalties

- [ ] The presence of errors and warnings in the console  **- 20 points**
- [ ] The presence in the console of the results of the console.log execution - **- 20 points**
- [ ] Making commits after the deadline - **- 100 points**
