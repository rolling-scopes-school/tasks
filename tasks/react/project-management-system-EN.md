# Project Management System

**Project management system** is an application that helps a team or group of developers achieve their goals.
PLEASE READ TASK DESCRIPTION CAREFULLY UP TO THE END BEFORE CODING❗❗❗

## Theoretical Notes

There are many competitors on the market for our future application. Check out suggested analogs before start building your app: _Trello, Jira, Redmine, Bitrix24, Yandex Tracker, Asana, GanttPro, Github projects._

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

https://rss-pma.netlify.app/

https://pm-app-34.netlify.app/

https://management-app-dariija.netlify.app/

https://pma-olesiklesha.netlify.app/

https://tarasiukdima.github.io/project-management-app/

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
  Gitflow, workflow
  You are free to choose your own way of developing the project and the repository. Here are links to a description and analysis of popular practices.

[Patterns for Managing Source Code Branches](https://martinfowler.com/articles/branching-patterns.html)
[Gitflow Workflow](https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow)
[GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
[ThreeFlow](https://habr.com/ru/company/infopulse/blog/345826/)
[GitLab Flow VS Git flow VS GitHub flow](https://yapro.ru/article/6172)

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
- interactivity of elements users can interact with. Element hover effects. Usage of different styles for the active and inactive state of the element. Smooth animations
- the unity of styles of all pages of the application - the same fonts, button styles, indents, the same elements on all pages of the application have the same appearance and layout. Item colors and background images may vary. In this case, colors should be from the same palette, and background images from the same collection.

## Description of function blocks

### Welcome page(route)

- The welcome page should display general information about the developer, project, and course.
- In top right corner should be present 2 buttons Sign In and Sign up
- If login token is valid and unexpired, change buttons Sign In and Sign Up on "Go to Main Page" button.
- When the token expires - the user should be redirected to the "Welcome page" automatically.
- Pressing the Sign In / Sign Up button redirects the user to the route with the Sign In / Sign Up form.

### Header

- All Privite routes should contain sticky header. Moment when it become sticky (if there is a scroll on a page) should be animated: color can be changed or it's height can become smaller. [Animated sticky header](https://www.youtube.com/watch?v=hR8UW5CvYgw)
- There are buttons in the header for authenticated users: Edit profile, Sign Out, Create new board, toggler / select to change language.
- Edit profile button should redirect the user to a route with a form for edit profile. The requirements for the form are the same as for all forms in the application. There should be a 'Delete User' button. In case of this action => "confirmation modal" => then the user should be logged out, and the user should be removed from the database.
- Create a new board - opens a modal window with a form for creating a board. Requirements for the form are the same as for all forms in the application.
- Sign Out button - sign user out.

### Footer

- footer should contain a link to the author's github, the year the application was created, [course logo](https://rs.school/images/rs_school_js.svg) with [link to the course](https://rs.school/react/).
- footer is displayed on all pages of the application.

### Sign In / Sign Up

- Form fields should be implemented in consistency with the backend API of the application. Validation should be implemented.
- Errors from the BE side - (Not found, unhandled rejection, etc) should be displayed in a user-friendly format (toast, pop-up, or something like this - up to your decision).
- Upon successful login, the user should be redirected to the "Main route"
- If user already logged in and he try to reach this routes - he should be redirected to Main route.

### Main route

- Displays all created boards as a list.
- Boards are displayed with a small preview of the available information (title, description, etc.). By clicking on the element, the user redirects to the board item (Board route). There should be a button to remove the board.
- When a user tries to delete the board, he/she should receive a confirmation modal to verify if the user wants to delete the board (to avoid deleting the board by mistake). The confirmation modal should be a generic component (one for the application).
- Example of extra functionality (optional): global search. Search for a task by task number, name, users assigned to it, and by the text of the task description.

### Board route

- There should be a button to create a column.
- If there is at least one column on the board, you should display the task creation button.
- To create a task, you should display a form in the modal window.
- To create a column, you should display a form in the modal window.
- Requirements for the modal window and forms are described before. (same as in first 6 modules)
- A task must be linked to a column.
- The user can create multiple columns. The user can create an unlimited number of tasks. When overflowing with the number of tasks of the column - display scroll **inside** the column.
- If all columns do not fit on the screen, the page may have a horizontal scroll.
- This page should not have vertical scroll.
- The user can swap columns using drag-n-drop.
- The user can change the order of tasks in column using drag-n-drop.
- The user changes the belonging of the task to the column using drag-n-drop.
- ❗ It is recommended to use the existing library from React ecosystem to implement the drag-n-drop functionality ❗.
- Implement the ability to interact with the task in such a way that the user can comfortably view / change the data in the task (modal/separate route/editable fields etc.) . Note that 'click' can happen after MouseUp on d-n-d.
- Implement the ability to delete a task. The Delete task button should be located in a convenient place for the user. On click: Confirmation modal -> delete.
- At the top of the column should be Title. When you click on it, it should become an input, with Submit and Cancel buttons near it. After entering text in the input and clicking Submit - the Title of the column should change.
- The column should have a 'delete column' button. Clicking on 'delete column' should open the confirmation modal, only after the user confirms the deleting - delete the column.
- ATTENTION! Deleting a column removes the tasks associated with it from the BD automatically.
- There should be a "back" button to return to the Main route

## How to submit tasks

- Link to pull request in rs app is submitted only by **team leader** ❗
- Make sure the pull request is available for review ❗. To do this, open the link that you submit in rs app in incognito browser mode
- If the task is not submitted before the deadline, it will not be distributed during the cross-check and points will not be added to your score.

## Evaluation criteria

**Maximum available points for the task 120**
It contains:

- 60 for crosscheck
- 60 for your involvement into a project. (15 in a week)

## Cross-check criteria

For the convenience of verification, it is **necessary** to record and post on YouTube a short (5-7 min) video for reviewers with an explanation of how each of the items listed in the evaluation criteria is implemented. Add a link to the video to the pull-request.

[How to evaluate tasks in Cross check](https://docs.rs.school/#/cross-check-flow). In the comments to the assessment, it is necessary to indicate which items are not fulfilled or partially fulfilled.

### Welcome route - max 7 points

- [ ] The welcome page should contain general information about the developer, project, and course. **1 point**
- [ ] In the upper right corner there are 2 buttons: Sign In and Sign Up. **1 point**
- [ ] If login token is valid and unexpired, change buttons Sign In and Sign Up on "Go to Main Page" button. **2 points**
- [ ] When the token expires - the user should be redirected to the "Welcome page" automatically. **2 points**
- [ ] Pressing the Sign In / Sign up button redirects a user to the route with the Sign In / Sign up form. **1 point**

### Sign In / Sign Up - max 8 points

- [ ] Buttons for Sign In / Sign Up / Sign Out are everywhere where they should be **2 points**
- [ ] Form fields should be implemented according to the backend API. Validation should be implemented. **4 points**
- [ ] Upon successful login, the user should be redirected to "Main route" **1 point**
- [ ] If user already logged in and he try to reach this routes - he should be redirected to Main route. **1 point**

### Main route - max 8 points

- [ ] Board creation functionality **2 points**
- [ ] Displays all created boards as a list/grid **1 point**
- [ ] Each board in the list is displayed with a small preview of available information (title, description, etc). By clicking an element the user navigates to the board item (Board route). There's also a button for board deletion. **1 point**
- [ ] When trying to delete the board, we should receive a confirmation modal. The confirmation modal must be a generic component (one for the entire application). **1 points**
- [ ] The user profile editing functionality is implemented. **3 points**

### Board route - max 26 points

- [ ] Button for column creation is displayed **1 point**
- [ ] If a board contains at least one column - a button for task creation is displayed/become enabled as well **1 points**
- [ ] A modal windows with forms is displayed for column and task creations **3 points**
- [ ] A vertical scrollbar is displayed in the column when overflowing with the number of column tasks **2 points**
- [ ] The page itself on the current route doesn't have a vertical scrollbar **1 points**
- [ ] With the help of drag-n-drop, we can swap columns. **3 points**
- [ ] With the help of drag-n-drop, we can change the order of tasks within a column. **3 points**
- [ ] With the help of drag-n-drop, we can change the task belonging to the column. **5 points**
- [ ] The functionality of viewing and editing of the task has been implemented. **3 points**
- [ ] The task must have a delete task button. On click: confirmation modal -> delete. **1 points**
- [ ] At the top of the column should be Title. When you click on it, it should become an input, with Submit and Cancel buttons near it. After entering text in the input and clicking Submit - the Title of the column should change. **2 points**
- [ ] The column should have a delete button. By clicking -> confirmation modal -> when approving -> deleting. **1 points**

### General requirements - max 11 points

- [ ] Backend error handling - (Not found, unhandled rejection, etc) should be performed in a user-friendly way (toast, pop-up or anything else you implement). **4 points**
- [ ] Localization **1 point**
- [ ] Backend is deployed and publicly available **2 points**
- [ ] Sticky header **2 points**
- [ ] Extra scope same complexity as Global search **2 points**

### Penalties

- [ ] React default favicon **- 1 points**
- [ ] The presence of errors and warnings in the console **- 2 points** for each
- [ ] The presence in the console of the results of the console.log execution - **- 2 points** for each
- [ ] @ts-ignore or any usage (search through github repo) - **- 1 point** for each
- [ ] Making commits after the deadline - **- 20 points**

## Helpful links

- [Project management](https://ru.wikipedia.org/wiki/%D0%A3%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0%D0%BC%D0%B8)
- [What is a project?](<https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_(%D0%B2_%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9_%D0%B4%D0%B5%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8)>)
- [Kanban](<https://en.wikipedia.org/wiki/Kanban_(development)>)
