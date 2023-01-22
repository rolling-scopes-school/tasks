#  GraphiQL

**GraphiQL** is a playground/IDE for graphQL requests.
PLEASE, READ TASK DESCRIPTION CAREFULLY UP TO THE END BEFORE STARTING THE TASK

## Theoretical Notes

GraphiQL is an open-source tool which you can use as an example (https://www.npmjs.com/package/@graphiql/react).
However, your app will also include authorization/authentication capabilities, to give access to the tool to only to authorized users.

## Building a team

- you should work in a team of 3 members
- teams can be pre-defined there. (https://rss-teams.web.app/)
- All students should be registered there. (https://rss-teams.web.app/)
- All teams should be registered there. [RSSTeams](https://rss-teams.web.app/) 
- Teamwork guidelines [RSSchool Docs](https://docs.rs.school/#/teams)
## Application Prototype

Pay attention that we leave the final set of tools and design up to you to not limit your possibilities and imagination.

Design, prototype, as well as the implementation of the application are up to you.

## Backend
Application doesn't require a backend.
You can use any open GraphQL api which supports [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), or you can create a proxy service as part of your app and use it to make requests to any GraphQL api (even those which do not support CORS)

## Application structure

Your app must contain:

1. Welcome page
2. User auth
3. GraphiQL page with:
    - request editor
    - variables editor
    - headers editor (optional)
    - documentation explorer (should be lazy-loaded)
    - response section

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
- You can use create-react-app, vite, css frameworks, any js/components libs you want, html and css pre-processors
- You MUST use Typescript
- ❗ it is forbidden to copy the code of other students or [GrahiQL](https://www.npmjs.com/package/@graphiql/react). This ban applies to html, css, and js code. You can use small code snippets from Stack Overflow, and other self-found sources on the Internet, except github repositories of course students.

## Application design requirements

- you are not limited in creativity but limited by the user's capabilities
- the application quality is characterized by the elaboration of details, attention to typography (no more than three fonts per page, font size of at least 14 px, optimal [font and background contrast](https://snook.ca/technical/colour_contrast/colour.html)), carefully selected content
- adaptive layout. The minimum page width of the application is 320px
- interactivity of elements users can interact with. Element hover effects. Usage of different styles for the active and inactive state of the element. Smooth animations
- the unity of styles of all pages of the application - the same fonts, button styles, indents, the same elements on all pages of the application have the same appearance and layout. Item colors and background images may vary. In this case, colors should be from the same palette, and background images from the same collection.

## Description of function blocks

### Welcome page(route)


### Header

- All Privite routes should contain sticky header. Moment when it become sticky (if there is a scroll on a page) should be animated: color can be changed or it's height can become smaller. [Animated sticky header](https://www.youtube.com/watch?v=hR8UW5CvYgw)
- Sign Out button - sign user out.

### Footer

- footer should contain a link to the author's github, the year the application was created, [course logo](https://rs.school/images/rs_school_js.svg) with [link to the course](https://rs.school/react/).
- footer is displayed on all pages of the application.  

### Sign In / Sign Up

- Form fields should be implemented in consistency with the backend API of the application. Validation should be implemented.
- Errors from the BE side - (Not found, unhandled rejection, etc) should be displayed in a user-friendly format (toast, pop-up, or something like this - up to your decision).
- Upon successful login, the user should be redirected to the "Main route"
- If user already logged in and he try to reach this routes - he should be redirected to Main route.

### Main route - GraphiQL

## How to submit tasks

- Link to pull request in rs app is submitted only by **team leader** ❗
- Make sure the pull request is available for review ❗. To do this, open the link that you submit in rs app in incognito browser mode
- If the task is not submitted before the deadline, it will not be distributed during the cross-check and points will not be added to your score.
## Evaluation criteria

**Maximum available points for the task 120**
It contains:
- 60 for crosscheck
- 60 for your involvement into a project.  *Should we change this?*

## Cross-check criteria
For the convenience of verification, it is **necessary** to record and post on YouTube a short (5-7 min) video for reviewers with an explanation of how each of the items listed in the evaluation criteria is implemented. Add a link to the video to the pull-request.

[How to evaluate tasks in Cross check](https://docs.rs.school/#/cross-check-flow). In the comments to the assessment, it is necessary to indicate which items are not fulfilled or partially fulfilled.
### Welcome route - max 7 points

- [ ] The welcome page should contain general information about the developer, project, and course. **1 point**
- [ ] In the upper right corner there are 2 buttons: Sign In and Sign Up. **1 point**
- [ ] If login token is valid and unexpired, change buttons Sign In and Sign Up on "Go to Main Page" button. **2 points**
- [ ] When the token expires - the user should be redirected to the "Welcome page" automatically. **2 points**
- [ ] Pressing the Sign In / Sign up button redirects a user to the route with the Sign In / Sign up form. **1 point**

### Sign In / Sign Up  - max 8 points

- [ ] Buttons for Sign In / Sign Up / Sign Out are everywhere where they should be **2 points**
- [ ] Form fields should be implemented according to the backend API. Validation should be implemented. **4 points**
- [ ] Upon successful login, the user should be redirected to "Main route" **1 point**
- [ ] If user already logged in and he try to reach this routes - he should be redirected to Main route. **1 point**

### Main route - max ? points


### GraphiQL route - max ? points


### General requirements - max ? points

- [ ] Localization **1 point**
- [ ] Sticky header **2 points**
- [ ] Extra scope same complexity as Global search **2 points**


### Penalties
- [ ] React default favicon **- 1 points**
- [ ] The presence of errors and warnings in the console  **- 2 points** for each
- [ ] The presence in the console of the results of the console.log execution - **- 2 points** for each
- [ ] @ts-ignore or any usage (search through github repo) - **- 1 point** for each
- [ ] Making commits after the deadline - **- 20 points**  
