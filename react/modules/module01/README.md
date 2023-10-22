# Week 1

## React. Components

### What should be done:

1. Create a separate branch for this task.
2. Language Requirement
   - Use **TypeScript** for the project.
3. Project Setup
   - Initialize the project using [Vite](https://vitejs.dev/guide/) with the [*react-ts* template](https://vite.new/react-ts).
4. Code Quality Tools
    1. ESLint
       - Set up ESLint to throw errors if TypeScript's *any* type is used.
       - Follow the [configuration guide](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/module01/configs.md).
    2. Prettier
       - Integrate Prettier for code formatting.
    3. Husky
       - Add Husky and configure it to run linting on pre-commit.
    4. package.json commands
       - Add the following npm scripts:
           - `lint`: For running the lint command.
           - `format:fix`: For running Prettier's --write command.
5. Pick a RESTfull api which supports search and pagination (pagination might be reffered as *offset* and *limit* params). E.g. https://pokeapi.co/, for Star Wars fans https://swapi.dev/api, for Star Trek fans https://stapi.co/api-documentation (OpenApi spec can be checked here https://editor.swagger.io/?url=https://stapi.co/api/v1/rest/common/download/stapi.yaml), or you can select another one complying with the requirements.
6. Implement the following requirements:
   - Create a page comprised of 2 horizontal section (a smaller top one, and a bigger bottom one);
   - On the top section put *Search* input and the "Search" button. *Search* component should look for a previously saved search term in the local storage, if there isn't any - leave the input empty;
   - Bottom section should show be used for displaying search results (name and a small description);
   - By default application makes a call to the selected api to get the list of the items with the search term fron the input (only first page). If the input is empty make a call to get all the items;
   - When user modifies the *Search* input and clicks on "Search" button, application makes a call to an api with the newly provided search term (search term should not have any trailing spaces, process the input) to get the results (only first page);
   - The provided search term should be saved to the local storage, if the value exists overwrite it;
7. Wrap application to an error boundary to catch errors. Report an error to a console and show fallback UI (use respective methods for this). Create a button which will throw an error on click to test the functionality.

**Use class components to get access to lifecycle events or state. Using hooks is forbidden at this stage. Patience, it won't last long.**

All logical parts should be set into separate components.

### Questions
You should be using Discord as the main mean of the communication.
Also we will try to collect your questions regarding the 1st Module using special form, which will be provided via the Discord with the 1st Module start. Questions will be collected in Module 01 section spreadsheet, which also will be provided via the Discord with the 1st Module start. Please, check answers carefully before posting the question, may be your question has been answered already.
We will try to conduct a session for each module providing answers for some questions.

### Quiz
During the module duration you will be able to pass a theoretical quiz. Please, check the announcements in Discord.

### Score
The task will be checked during cross-check and cross-code-review.

#### Cross-code-review process
1. Clone the repository you are going to review
2. Install all the required dependencies
3. Run linting using special command in package.json file, output should not produce any errors or warnings
4. Run prettier using special command in package.json file, make sure that fix commands fixes issues
5. Review the code. Pay attention at the following "code smells":
   - props drilling;
   - large, complex components aka "god" components;
   - direct DOM manipulation - methods like `appendChild`, `setAttribute`, `innerHTML`, and other - anything that makes React to lose track of the DOM changes. Argument of `createRoot` is an exception;
   - etc.

When reviewing the code try pay attention at the following principles:
- Write code as simply as possible: KISS
- Avoid unnecessary repetition: DRY
- Delete what is not needed: YAGNI

We also need to mention the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) and other [SOLID](https://en.wikipedia.org/wiki/SOLID) principles
Please, check [this article](https://dmitripavlutin.com/7-architectural-attributes-of-a-reliable-react-component/) for reference
Last, but not least - check the presence of the comments. Ideally there shouldn't be any comments at all. Sometimes people just comment code which is not needed. So why not to remove it entirely? In case you will need to restore this code, you can always refer to the git history. And more - [comments are lies](https://blog.devgenius.io/code-should-be-the-one-version-of-the-truth-dont-add-comments-b0bcd8631a9a)

#### Cross-check process
Run app and check that the functionality is working (cross-check)

#### Points
##### Student can get 100 points:
- Eslint is set up, when *lint* command is run it doesn't produce any errors (if there are warnings score might be less) - **15 points**
- Prettier is set up, *format:fix* command fixes issues - **15 points**
- Husky is set up, linting is run on pre-commit - **10 points**
- Page is split into 2 sections, top one has *Search* input and "Search" button, main section displays the list of results from the selected api when page is opened for the first time (loader should be shown while app makes a call to the api) - **20 points**
- When user types something to the *Search* input and clicks "Search" button, a loader is displayed and the list is changed according to the response results for a provided search term - **15 points**
- The search term typed into the *Search* input is saved in the local storage when user clicks on "Search" button (check it by closing the tab and open the app in the new one - the initial call should contain previously entered search term) - **15 points**
- Application is wrapped with ErrorBoundary, which logs error to a console and shows a fallback UI. There should be a button to throw an error - **10 points**

##### Penalties:
- TypeScript isn't used: **-95 points**
- Usage of *any*: **-20 points per each**
- Usage of *ts-ignore*: **-20 points per each**
- Direct DOM manipulations inside the React components: **-50 points per each**
- React hooks are used to get access to either state, or to the component lifecycle: **-70 points**
- Presence of *code-smells* (God-object, chunks of duplicate code), commented code sections: **-10 points per each**

### Repository requirements

- the task should be done in **your personal private repository** 
- in the repository create a branch from the `main` branch with the name of the task and work in the created branch
- the commits history should reflect the process of app creating [Commits requirements](https://docs.rs.school/#/git-convention?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0%D0%BC-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B8%D1%82%D0%BE%D0%B2) [RU]
- after finishing development it’s necessary to make Pull Request from app’s branch to `main` branch [Pull Request requirements](https://docs.rs.school/#/pull-request-review-process?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-pull-request-pr) [RU]
- after completing the module, private repository should be exposed for cross-checks and cross-code-reviews for the duration of the next module (one week), after this week will end, repository should be made private again 

**Do not merge Pull Request from the development branch to the `main` branch**

### Theory

- [Class component](https://react.dev/reference/react/Component)
- [Class component's state](https://react.dev/reference/react/Component#state)
- [componentDidMount()](https://react.dev/reference/react/Component#componentdidmount)
- [componentWillUnmount()](https://react.dev/reference/react/Component#componentwillunmount)
- [ErrorBoundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- Setting up vite, React, TypeScript, eslint, prettier, vitest, testing-library and react-router - [video tutorial](https://www.youtube.com/watch?app=desktop&v=cchqeWY0Nak)

### React

- Rolling Scopes School Lithuania. [React. Part 1](https://www.youtube.com/watch?v=L8CmtfCu9AI)
- Rolling Scopes School Lithuania. [React. Part 2](https://www.youtube.com/watch?v=Rrg4D6AHc5A)
- Rolling Scopes School Lithuania. [React. Part 3](https://www.youtube.com/watch?v=w9MvuGWVvkY)
- Short course react + typescript - [React & TypeScript - Course for Beginners](https://www.youtube.com/watch?v=FJDVKeh7RJI)
- Full tutorial: [Full React Course 2020 - Learn Fundamentals, Hooks, Context API, React Router, Custom Hooks](https://www.youtube.com/watch?v=4UZrsTqkcW4&t=8419s)
- Additionally: [React JS фундаментальный курс от А до Я](https://www.youtube.com/watch?v=GNrdg3PzpJQ) [RU]
