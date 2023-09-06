# Week 3

## React. Tests/Context API

The task should be based on the previous task.

### What should be done:

1. Create a separate branch for this task from the previous task's branch.
2. Implement custom state management using the Context API.
   - Utilize the created context to store both the value entered in the Search component and the list of items received from the API;
   - Ensure that all components that need to access this data use the context.
3. Add and configure test runner: Jest or Vitest. Add testing library: React Testing Library. You should add tests for the several scenarios keeping in mind that mocked data should be used instead of real API calls.
4. Tests for the Card List component:
   - Verify that the component renders the specified number of cards;
   - Check that an appropriate message is displayed if no cards are present.
5. Tests for the Card component:
   - Ensure that the card component renders the relevant card data;
   - Validate that clicking on a card opens a detailed card component;
     - Check that clicking triggers an additional API call to fetch detailed information;
     - Check that a loading indicator is displayed while fetching data.
6. Tests for the Detailed Card component:
   - Make sure the detailed card component correctly displays the detailed card data;
   - Ensure that clicking the close button hides the component.
7. Tests for the Pagination component:
   - Make sure the component updates URL query parameter when page changes.
8. Tests for the Search component:
   - Verify that clicking the Search button saves the entered value to the local storage;
   - Check that the component retrieves the value from the local storage upon mounting.
9. Tests for the 404 Page component:
   - Ensure that the 404 page is displayed when navigating to an invalid route.
10. Lastly, update Husky to run tests on the pre-push hook, ensuring that tests are automatically executed before any code is pushed.

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

- Custom state management using the Context API is implemented - **5 points**
- The Search component value is stored in the context - **5 points**
- The list of items received from the API is stored in the context - **5 points**
- The context is used in components that need access to the data - **5 points**
- React Testing Library and Jest are added and configured - **10 points**
- Test cases - **60 points** (5 points per each)
- Husky runs tests on pre-push - **10 points**

##### Penalties:

- TypeScript isn't used: **-95 points**
- Usage of _any_: **-20 points per each**
- Usage of _ts-ignore_: **-20 points per each**
- Direct DOM manipulations inside the React components: **-50 points per each**
- Presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**

### Repository requirements

- the task should be done in **your personal private repository**
- in the repository create a branch from the **previous task** branch with the name of the task and work in the created branch
- the commits history should reflect the process of app creating [Commits requirements](https://docs.rs.school/#/git-convention?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0%D0%BC-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B8%D1%82%D0%BE%D0%B2) [RU]
- after finishing development it’s necessary to make Pull Request from app’s branch to `main` branch [Pull Request requirements](https://docs.rs.school/#/pull-request-review-process?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-pull-request-pr) [RU]
- after completing the module, private repository should be exposed for cross-checks and cross-code-reviews for the duration of the next module (one week), after this week will end, repository should be made private again
  **Do not merge Pull Request from the development branch to the `main` branch**

### Useful links

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Vitest](https://vitest.dev/guide/)
- [Jest](https://jestjs.io/docs/getting-started)
- [Mock Service Worker](https://mswjs.io/docs/)
- [Pattern for writing good tests](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/)
