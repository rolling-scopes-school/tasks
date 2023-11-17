# GraphiQL

**GraphiQL** is a playground/IDE for graphQL requests.
PLEASE, READ THE TASK DESCRIPTION CAREFULLY UP TO THE END BEFORE STARTING THE TASK

## Theoretical Notes

GraphiQL is an open-source tool that you can use as an example (https://www.npmjs.com/package/@graphiql/react).
However, your app will also include:
- Authorization and authentication capabilities, ensuring access to the tool is restricted to authorized users.
- Work with a user-specified open GraphQL endpoint.

## Building a team

- you should work in a team of 3 members
- you should select a team lead, who will be coordinating the development

## Application Prototype

You can use [existing solutions](https://graphql.github.io/swapi-graphql) as a source of inspiration.
However, pay attention that we leave the final set of tools and design up to you to not limit your possibilities and imagination.
Design, prototype, as well as implementation of the application, are up to you.

## Backend / API

- Application doesn't require a backend.
- Application should support any open, user-specified GraphQL API that supports [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). You can create a proxy service as part of your app and use it to make requests to any GraphQL API (even those that do not support CORS).

## Application structure

Your app must contain:

1. Welcome page
2. User auth
3. GraphiQL page with:
   - request editor (query editor / JSON viewer)
   - variables editor
   - headers editor
   - documentation explorer (should be lazy-loaded)
   - response section (query editor / JSON viewer)
   - possibility to change to a different user-specified API endpoint

## Repository requirements

- teamlead should create private repo in GitHub and invite other members
- repo name **graphiql-app**. Branch name for develop - **develop**, **main** branch is empty and contains only README.md
- the commit history should display the application development process. [Commit requirements](https://docs.rs.school/#/git-convention)
- the demo version of the application should be deployed on `gh-pages`, `netlify`, `heroku`, or another similar service
- after completing the task, create a pull request from **develop** to **main** branch. **Merging a Pull Request is not required**
- in case you will use proxy-service you need to include instructions on how to run it locally
- you should make your repo public after the deadline

## Workflow/Branching strategy

You are free to choose your own way of developing the project and the repository. Here are links to a description and analysis of popular practices.

[Patterns for Managing Source Code Branches](https://martinfowler.com/articles/branching-patterns.html)
[Gitflow Workflow](https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow)
[GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
[ThreeFlow](https://habr.com/ru/company/infopulse/blog/345826/)
[GitLab Flow VS Git flow VS GitHub flow](https://yapro.ru/article/6172)

## Technical requirements

- semantic layout
- the application should work at least in the latest version of the Google Chrome browser
- private routes, 404, error boundary
- using jQuery in the main application code is not allowed
- you must use React 18 + **suspense** feature
- you can use Vite (or any React framework you want, e.g. Gatsby, NextJS, Remix), css frameworks, any js/components libs you want, html and css pre-processors
- you MUST use Typescript
- tests should be present on the project (**test** command in the package.json ), and test coverage should be reported when running the command. Test coverage should be at least 80%
- Eslint, prettier (**lint** and **prettier-fix** commands in the package.json)
- Husky hooks (run **lint** on pre-commit, **test** on pre-push)
- ❗ it is forbidden to copy the code of other students or [GraphiQL](https://www.npmjs.com/package/@graphiql/react). This ban applies to html, css, and js code. You can use small code snippets from Stack Overflow, and other self-found sources on the Internet, except GitHub repositories of course students.

## Application design requirements

- the application quality is characterized by the elaboration of details, attention to typography (no more than three fonts per page, font size of at least 14 px, optimal [font and background contrast](https://snook.ca/technical/colour_contrast/colour.html)), carefully selected content
- adaptive layout, the minimum page width of the application should be 320px
- interactivity of elements users can interact with; element hover effects; usage of different styles for the active and inactive state of the element; smooth animations
- the unity of styles of all pages of the application - the same fonts, button styles, indents, and the same elements on all pages of the application have the same appearance and layout. Item colors and background images may vary. In this case, colors should be from the same palette, and background images from the same collection.

## Description of function blocks

### General requirements

- Errors from the API side (Not found, unhandled rejection, etc) should be displayed in a user-friendly format (toast, pop-up, or something like that - up to your decision).
- Localization (at least 2 languages). You should be able to change the language by clicking on the toggler/select in the header. Localization should be implemented using Context API. No 3rd party / open-source solutions are allowed.

### Welcome page

- If the user is not authorized, the page should contain a link to Sign In / Sign Up page.
- If the user is authorized, the page should contain a link to the Main page.

### Header

- All Private routes should be present in a sticky header. The moment it becomes sticky (if there is a scroll on a page) should be animated: color can be changed or its height can become smaller. [Animated sticky header](https://www.youtube.com/watch?v=hR8UW5CvYgw)
- Sign Out button - signs user out

### Footer

- Footer should contain a link to the authors' GitHub, the year the application was created, [course logo](https://rs.school/images/rs_school_js.svg) with [link to the course](https://rs.school/react/).
- Footer is displayed on all pages of the application.

### Sign In / Sign Up

- For the authentication you should use Firebase with the email/password sign-in method. Please, check this [article](https://blog.logrocket.com/user-authentication-firebase-react-apps/)
- Client-side validation should be implemented (email and password strength - minimum 8 symbols, at least one letter, one digit, one special character, Unicode passwords must be supported)
- Upon successful login, the user should be redirected to the Main page
- If the user is already logged in and tries to reach these routes, they should be redirected to the Main page

### Main page - GraphiQL

- Query editor / JSON viewer. The query editor should support prettifying. Any 3rd party / open-source solution is forbidden, you should implement it on your own. JSON viewer should be read-only, it will be used in the response section.
- Variables section.
- Headers section (optional. If you are making a CORS request each added header should be supported on the backend, please, consider that).
- Documentation section, should be visible only when the app receives a successful response with the schema definition from the API.
- Response section. Should be represented by the same Query editor / JSON viewer component. Should be read only.
- Change Endpoint button - allows the user to switch to an arbitrary GraphQL endpoint.

## How to submit tasks

- Link to pull request in rs app is submitted only by **team leader** ❗
- Make sure the pull request is available for review ❗. To do this, open the link that you submit in rs app in incognito browser mode.
- If the task is not submitted before the deadline, it will not be distributed during the cross-check and points will not be added to your score.

## Evaluation criteria

**Maximum available points for the task are 400**

It contains:

- maximum 350 for crosscheck
- maximum 50 for your involvement in a project. Those points will be assigned by the mentor for each student.

## Cross-check criteria

For the convenience of verification, it is **necessary** to record and post on YouTube a short (5-7 min) video for reviewers with an explanation of how each of the items listed in the evaluation criteria is implemented. Add a link to the video to the pull-request.
[How to evaluate tasks in Cross check](https://docs.rs.school/#/en/cross-check-flow). In the comments to the assessment, it is necessary to indicate which items are not fulfilled or partially fulfilled.

### Welcome route - max 50 points

- [ ] The welcome page should contain general information about the developers, project, and course **10 points**
- [ ] In the upper right corner there are 2 buttons: Sign In and Sign Up **10 points**
- [ ] If the login token is valid and unexpired, the Sign In and Sign Up buttons are replaced with the "Main Page" button **10 points**
- [ ] When the token expires - the user should be redirected to the "Welcome page" automatically **10 points**
- [ ] Pressing the Sign In / Sign up button redirects a user to the route with the Sign In / Sign up form **10 points**

### Sign In / Sign Up - max 50 points

- [ ] Buttons for Sign In / Sign Up / Sign Out are everywhere where they should be **10 points**
- [ ] Client-side validation is implemented **20 points**
- [ ] Upon successful login, the user is redirected to the Main page **10 points**
- [ ] If the user is already logged in and tries to reach these routes, they should be redirected to the Main page **10 points**

### GraphiQL route - max 200 points

- [ ] Functional editor enabling query editing and prettifying **60 points**
- [ ] Operational documentation explorer, visible _only_ upon successful SDL request **50 points**
- [ ] Variables section that can shown or hidden **30 points**
- [ ] Header section that can be shown or hidden **20 points**
- [ ] Response section with an editor in read-only as a JSON viewer **40 points**

### General requirements - max 50 points

- [ ] Localization **30 points**
- [ ] Sticky header **10 points**
- [ ] Errors from API side are displayed in the user friendly format **10 points**

### Penalties

- [ ] React default favicon **-50 points**
- [ ] The presence of errors and warnings in the console **-20 points** for each
- [ ] The presence in the console of the results of the console.log execution **-20 points** for each
- [ ] @ts-ignore or any usage (search through GitHub repo) **-20 points** for each
- [ ] The presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**
- [ ] Making commits after the deadline **-100 points**
- [ ] Absence of tests **-250 points**
- [ ] Test coverage below 80% **-100 points**
- [ ] Absence of linting **-150 points**
- [ ] Absence of prettier **-100 points**
- [ ] Absence of husky git hooks **-100 points**
- [ ] Usage 3rd party / open source libraries for prettifying, i18n **-150 points**
- [ ] The administration reserves the right to apply penalties for the use of incorrect repository or branch names
