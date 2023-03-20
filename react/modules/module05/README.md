# Week 5

## React. Redux

Task should be based on the previous task.

### What should be done:

1. Create a separate branch for this task from the previous branch task.
2. Rewrite the state management to Redux using [RTK](https://redux-toolkit.js.org/). Store will contain:
    - search text (remove it from the Local Storage)
    - search results
    - all the form submissions (check Module 02)
With those changes you should be able to navigate between routes (Search and Form) and all the information will remain
3. Api requests should be moved to thunks

### Questions
You should be using Discord as the main mean of the communication.
Also we will try to collect your questions regarding the 5th Module using special form, which will be provided via the Discord with the 5th Module start. Questions will be collected in Module 05 section of the same spreadsheet. Please, check answers carefully before posting the question, may be your question has been answered already.
We will try to conduct a session for each module providing answers for some questions.

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
3. Test coverage for the whole app should be not less than 80%.

The score might be less, if:
1. Part of functionality doesn't work.
2. Test coverage is below 80%.
3. Presence of the code smells.
4. Lots of unnessecary, redundant or obvious comments.


If there are direct DOM manipulations – **0 points**.
### Repository requirements

* the task should be done in **your personal private repository** 
* in the repository create a branch from the **previous task** branch with the name of the task and work in the created branch
* the commits history should reflect the process of app creating [Commits requirements](https://docs.rs.school/#/git-convention?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0%D0%BC-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B8%D1%82%D0%BE%D0%B2) [RU]
* after finishing development it’s necessary to make Pull Request from app’s branch to `main` branch [Pull Request requirements](https://docs.rs.school/#/pull-request-review-process?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-pull-request-pr) [RU]
* after completing the module, private repository should be exposed for cross-checks and cross-code-reviews for the duration of the next module (one week), after this week will end, repository should be made private again 
**Do not merge Pull Request from the development branch to the `main` branch**

### Theory

Redux:
- Redux Essentials, [Part 1: Redux Overview and Concepts](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
- [Getting Started with Redux](https://redux.js.org/introduction/getting-started)
- React. Redux.Rolling Scopes School - [video](https://www.youtube.com/watch?v=bEHW-Mkdchc&t=1662s)
 
