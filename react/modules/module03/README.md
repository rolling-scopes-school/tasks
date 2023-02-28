# Week 3

## React. Hooks


!! Task should be implemented in the school’s private repository !!
It should be based on the previous task.

### What should be done:

1. Create a separate branch for this task
2. Retain the functionality and rewrite the main page with the hooks. All tests should be working in the end
3. Retain the functionality and rewrite the form with React Hook Form. All tests should be working in the end

### Questions
You should be using Discord as the main mean of the communication.
Also we will try to collect your questions regarding the 3rd Module using special form, which will be provided via the Discord with the 3rd Module start. Questions will be collected in Module 03 section of the same spreadsheet. Please, check answers carefully before posting the question, may be your question has been answered already.
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
#### Cross-check process
Run app and check that the functionality is working (cross-check)

#### Points
Student can get 15 points if the following requirements are met:
1. Eslint should not show any errors or warnings.
2. All the functionality should work.
3. Test coverage for the whole app should be not less than 60%.

The score might be less, if:
1. Part of functionality doesn't work.
2. Test coverage is below 60%.
3. Presence of the "god" components, check [this article](https://dmitripavlutin.com/7-architectural-attributes-of-a-reliable-react-component/) for reference


If there are direct DOM manipulations – **0 points**.
### Repository requirements

* the task should be done in the **private student's repository** 
* in private repository create branch with the name of the task from `main` branch and work in this (dev) created branch
* the commits history should reflect the process of app creating [Commits requirements](https://docs.rs.school/#/git-convention?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0%D0%BC-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B8%D1%82%D0%BE%D0%B2) [RU]
* after finishing development it’s necessary to make Pull Request from app’s branch to `main` branch [Pull Request requirements](https://docs.rs.school/#/pull-request-review-process?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-pull-request-pr) [RU]
* after completing the module, private repository should be exposed for cross-checks and cross-code-reviews for the duration of the next module (one week), after this week will end, repository should be made private again 
**Do not merge Pull Request from the development branch to the `main` branch**

### Theory

- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React hooks](https://www.youtube.com/watch?v=3-Zh_DAzCi0)
- React Course - [Beginner's Tutorial for React JavaScript Library](https://www.youtube.com/watch?v=bMknfKXIFA8)
- [react-hook-form](https://react-hook-form.com/api/)
- [react-hook-form tutorial](https://www.youtube.com/watch?v=bU_eq8qyjic)
- [React-Hooks](https://www.youtube.com/watch?v=FAhnawACrOg&list=PLzLiprpVuH8cuG8ijG_m0-y63B3suk4vu&index=4&ab_channel=RollingScopesSchool) + the link to the repo in the comments: 
