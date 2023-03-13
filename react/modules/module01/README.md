# Week 1

## React. Components

### What should be done:

1. Create a separate branch for this task.
2. You have to use Typescript! We recommend using [Vite](https://vitejs.dev/guide/) with the template [*react-ts*](https://vite.new/react-ts). Alternatively you can use CRA with the template *--typescript* (please, take a look at [this comment](https://github.com/reactjs/reactjs.org/pull/5487#issuecomment-1409720741) from Dan Abramov).
3. Set up eslint and prettier so that the project would not build if there are errors. Use [configs](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/module01/configs.md). Add command to you package.json file to run linting command.
4. Add React-Router version 6. Add header which shows the current page. Also add pages “About Us”, “404”. If user will input unknown route into url – application should redirect to “404”.
5. Draw the following on the main page:
* Search Bar.\
examples:\
https://studio.uxpincdn.com/studio/wp-content/uploads/2020/09/BlogHeader_SearchBar_1200x600.png \
https://www.sliderrevolution.com/wp-content/uploads/2021/02/cssheader1.jpg \
Input value should be saved to LocalStorage during component’s unmount. During the initialization pick the value from LocalStorage and show it.
* Cards. The more details are on the card – the better.\
examples: \
https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/behance.jpg \
https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/rightmove.jpg \
https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/awwwards.jpg \
**Use class components to get access to lifecycle events or state. Using hooks is forbidden at this stage. Patience, it won't last long.**
6. Setup test runner if necessary. You can use either [Jest](https://jestjs.io/docs/getting-started) or [Vitest](https://vitest.dev/guide/)
Add tests for components. Add test for one card, as well as tests for the list of all cards. You can use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Some time ago [Enzyme](https://enzymejs.github.io/enzyme/) was an alternative, but it is not compatible with the latest version of React.
When ran, tests should show the coverage (you will be gradually increasing test coverage during next modules)
Add command to your package.json file to run tests.
Snapshot testing is forbidden in all modules (you can check [the documentation of what is snapshot testing with Jest](https://jestjs.io/docs/snapshot-testing))

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
4. Run tests using special command in package.json file, all tests should pass, test coverage should be shown after running all the tests
5. Review the code. Pay attention at the following "code smells": props drilling; large, complex components aka "god" components; direct DOM manipulation, etc.

When reviewing the code try pay attention at the following principles:
* Write code as simply as possible: KISS
* Avoid unnecessary repetition: DRY
* Delete what is not needed: YAGNI

We also need to mention the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) and other [SOLID](https://en.wikipedia.org/wiki/SOLID) principles
Please, check [this article](https://dmitripavlutin.com/7-architectural-attributes-of-a-reliable-react-component/) for reference
Last, but not least - check the presence of the comments. Ideally there shouldn't be any comments at all. Sometimes people just comment code which is not needed. So why not to remove it entirely? In case you will need to restore this code, you can always refer to the git history. And more - [comments are lies](https://blog.devgenius.io/code-should-be-the-one-version-of-the-truth-dont-add-comments-b0bcd8631a9a)
#### Cross-check process
Run app and check that the functionality is working (cross-check)

#### Points
Student can get 15 points if the following requirements are met:
1. Eslint should not show any errors or warnings.
2. All the functionality should work.
3. Test coverage for the whole app should be not less than 40%.

The score might be less, if:
1. Part of functionality doesn't work.
2. Test coverage is below 40%.
3. Presence of the code smells.
4. Lots of unnessecary, redundant or obvious comments.
5. The project is not written on Typescript.


If there are direct DOM manipulations – **0 points**.
### Repository requirements

* the task should be done in **your personal private repository** 
* in the repository create a branch from the `main` branch with the name of the task and work in the created branch
* the commits history should reflect the process of app creating [Commits requirements](https://docs.rs.school/#/git-convention?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0%D0%BC-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B8%D1%82%D0%BE%D0%B2) [RU]
* after finishing development it’s necessary to make Pull Request from app’s branch to `main` branch [Pull Request requirements](https://docs.rs.school/#/pull-request-review-process?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-pull-request-pr) [RU]
* after completing the module, private repository should be exposed for cross-checks and cross-code-reviews for the duration of the next module (one week), after this week will end, repository should be made private again 
**Do not merge Pull Request from the development branch to the `main` branch**
### Theory

*	[React. Components. Materials](https://docs.google.com/document/d/1WLWjBiVMjsVADf5FWFYfPObQOrLD1624h5etyafCfr8/edit)
*	[Components - reactjs.org](https://reactjs.org/docs/components-and-props.html)
*	React-router [documentation + tutorial](https://reactrouter.com/docs/en/v6/getting-started/tutorial)
*	React-router [video course](https://www.youtube.com/watch?v=0auS9DNTmzE) [RU]
*	React Testing [Library documentation](https://testing-library.com/docs/react-testing-library/intro/)
*	React Testing Library course - [React Testing Library. Полный курс](https://www.youtube.com/watch?v=n79PMyqcCJ8&t=585s) [RU]
*   Setting up vite, React, TypeScript, eslint, prettier, vitest, testing-library and react-router - [video tutorial](https://www.youtube.com/watch?app=desktop&v=cchqeWY0Nak)
*   How to setup Vitest with React Testing Library - [video tutorial](https://www.youtube.com/watch?v=zU_RZ5SCUzs)
*   React Testing Tutorial with React Testing Library and Jest - [video tutorial](https://www.youtube.com/watch?v=Flo268xRpV0)

### React

*	Rolling Scopes School Lithuania. [React. Part 1](https://www.youtube.com/watch?v=L8CmtfCu9AI)
*	Rolling Scopes School Lithuania. [React. Part 2](https://www.youtube.com/watch?v=Rrg4D6AHc5A)
*	Rolling Scopes School Lithuania. [React. Part 3](https://www.youtube.com/watch?v=w9MvuGWVvkY)
*	Short course react + typescript - [React & TypeScript - Course for Beginners](https://www.youtube.com/watch?v=FJDVKeh7RJI)
*	Full tutorial: [Full React Course 2020 - Learn Fundamentals, Hooks, Context API, React Router, Custom Hooks](https://www.youtube.com/watch?v=4UZrsTqkcW4&t=8419s)
*	Additionally: [React JS фундаментальный курс от А до Я](https://www.youtube.com/watch?v=GNrdg3PzpJQ) [RU]
