#  GraphiQL

**GraphiQL** is a playground/IDE for graphQL requests.
PLEASE, READ TASK DESCRIPTION CAREFULLY UP TO THE END BEFORE STARTING THE TASK

## Theoretical Notes

GraphiQL is an open-source tool which you can use as an example (https://www.npmjs.com/package/@graphiql/react).
However, your app will also include authorization/authentication capabilities, to give access to the tool to only to authorized users.

## Building a team

- you should work in a team of 3 members
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
- teamwork nuances are described [here](https://github.com/rolling-scopes-school/tasks/tree/master/stage2/modules/final-task#%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%BD%D0%BE%D0%B9-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B)
- repo name **graphiql-app**. Branch name for develop - **develop**, **main** branch is empty and contains only README.md
- the commit history should display application development process. [Commit requirements](https://docs.rs.school/#/git-convention)
- the demo version of the application should be deployed on `gh-pages`, `netlify`, `heroku`, or another similar service
- after completing the task, create a pull request from **develop** to **main** branch. **Merging a Pull Request is not required**
- in case you will use proxy-service you need to include instructions on how to run it locally
- you should make your repo public after deadline

## Workflow/Branching strategy

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
- private routes, 404, error boundary
- using jQuery in the main application code is not allowed
- you must use React 18 + **suspense** feature
- you can use Vite (or any React framework you want, e.g. Gatsby, NextJS, Remix), css frameworks, any js/components libs you want, html and css pre-processors
- you MUST use Typescript
- ❗ it is forbidden to copy the code of other students or [GraphiQL](https://www.npmjs.com/package/@graphiql/react). This ban applies to html, css, and js code. You can use small code snippets from Stack Overflow, and other self-found sources on the Internet, except github repositories of course students.

## Application design requirements

- the application quality is characterized by the elaboration of details, attention to typography (no more than three fonts per page, font size of at least 14 px, optimal [font and background contrast](https://snook.ca/technical/colour_contrast/colour.html)), carefully selected content
- adaptive layout, the minimum page width of the application should be 320px
- interactivity of elements users can interact with; element hover effects; usage of different styles for the active and inactive state of the element; smooth animations
- the unity of styles of all pages of the application - the same fonts, button styles, indents, the same elements on all pages of the application have the same appearance and layout. Item colors and background images may vary. In this case, colors should be from the same palette, and background images from the same collection.

## Description of function blocks

### General requirements
- Errors from the api side - (Not found, unhandled rejection, etc) should be displayed in a user-friendly format (toast, pop-up, or something like this - up to your decision).

### Welcome page
- If user is not authorized, the page should contain a link to Sign In / Sign Up page
- If user is authorized, the page should contain a link to the Main page

### Header

- All Private routes should contain sticky header. Moment when it become sticky (if there is a scroll on a page) should be animated: color can be changed or it's height can become smaller. [Animated sticky header](https://www.youtube.com/watch?v=hR8UW5CvYgw)
- Sign Out button - signs user out

### Footer

- Footer should contain a link to the authors' github, the year the application was created, [course logo](https://rs.school/images/rs_school_js.svg) with [link to the course](https://rs.school/react/).
- Footer is displayed on all pages of the application.  

### Sign In / Sign Up

- For the authentication you should use Firebase with email option. Please, check this [article](https://blog.logrocket.com/user-authentication-firebase-react-apps/)
- Client-side validation should be implemented (email and password strength - minimum 8 symbols, at least one letter, one digit, one special character)
- Upon successful login, the user should be redirected to the Main page
- If the user is already logged in and tries to reach these routes, they should be redirected to the Main page

### Main page - GraphiQL
- Editor
- Variables section
- Headers section (optional. If you are making a CORS request each added header should be supported on the backend, please, consider that)
- Documentation section, should be visible only when app will receive a successfull response with the schema definition from the api
- Response section

## How to submit tasks

- Link to pull request in rs app is submitted only by **team leader** ❗
- Make sure the pull request is available for review ❗. To do this, open the link that you submit in rs app in incognito browser mode
- If the task is not submitted before the deadline, it will not be distributed during the cross-check and points will not be added to your score.
## Evaluation criteria

**Maximum available points for the task 120**
It contains:
- maximum 90 for crosscheck
- maximum 30 for your involvement into a project. Those points will be assigned by the mentor for each student.

## Cross-check criteria
For the convenience of verification, it is **necessary** to record and post on YouTube a short (5-7 min) video for reviewers with an explanation of how each of the items listed in the evaluation criteria is implemented. Add a link to the video to the pull-request.

[How to evaluate tasks in Cross check](https://docs.rs.school/#/cross-check-flow). In the comments to the assessment, it is necessary to indicate which items are not fulfilled or partially fulfilled.
### Welcome route - max 10 points

- [ ] The welcome page should contain general information about the developers, project, and course. **2 point**
- [ ] In the upper right corner there are 2 buttons: Sign In and Sign Up. **2 point**
- [ ] If login token is valid and unexpired, change the Sign In and Sign Up buttons to the "Go to Main Page" button. **2 points**
- [ ] When the token expires - the user should be redirected to the "Welcome page" automatically. **3 points**
- [ ] Pressing the Sign In / Sign up button redirects a user to the route with the Sign In / Sign up form. **1 point**

### Sign In / Sign Up  - max 20 points

- [ ] Buttons for Sign In / Sign Up / Sign Out are everywhere where they should be **5 points**
- [ ] Client-side validation should be implemented. **10 points**
- [ ] Upon successful login, the user should be redirected to the Main page **3 point**
- [ ] If the user is already logged in and tries to reach these routes, they should be redirected to the Main page. **2 point**

### GraphiQL route - max 50 points
- [ ] Working editor allowing to edit the query. **15 points**
- [ ] Working documentation explorer, should be visible only when sdl request will succeed. **15 points**
- [ ] Variables section. Added varibales will be used in the request. Should be closed/opened **10 points**
- [ ] Response section. **10 points**


### General requirements - max 10 points

- [ ] Localization **5 point**
- [ ] Sticky header **5 points**


### Penalties
- [ ] React default favicon **- 5 points**
- [ ] The presence of errors and warnings in the console **- 2 points** for each
- [ ] The presence in the console of the results of the console.log execution **- 2 points** for each
- [ ] @ts-ignore or any usage (search through github repo) **- 1 point** for each
- [ ] Making commits after the deadline **- 20 points**  
- [ ] The administration reserves the right to apply penalties for the use of incorrect repository or branch names.