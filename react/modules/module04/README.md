# Week 4

## Redux. RTK.

Task should be based on the previous task.

### What should be done:

1. Create a separate branch for this task from the previous branch task.
2. Redux Integration
   - Integrate Redux into your application. You'll need to set up the Redux store and reducers using Redux Toolkit.
3. Connect Components. Connect the relevant components to the Redux store. Components should be able to access and modify the following data:
   - Save search value on CTA (Call to Action) button click.
   - Save items per page.
   - Save view mode value.
   - RTK Query Implementation: Use Redux Toolkit Query (RTK Query) to make API calls and cache the results. This will modify your previous API call implementation.
4. Loading Flags
   - Implement separate loading flags in the Redux store for the main page and details page. These flags should indicate whether data is being loaded.
5. Test Updates
   - Update your tests to accommodate the changes introduced by Redux and RTK Query. 
   - Test the functionality related to Redux state and API calls.
### Questions
You should be using Discord as the main mean of the communication.
Also we will try to collect your questions regarding the 4th Module using special form, which will be provided via the Discord with the 4th Module start. Questions will be collected in Module 04 section of the same spreadsheet. Please, check answers carefully before posting the question, may be your question has been answered already.
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

##### Student can get 100 points:

- Redux is integrated to the app with the help of Redux Toolkit - **25 points**
- Search is saved in the store - **5 points**
- Items per page is saved in the store - **5 points**
- View mode is saved in the store - **10 points**
- Loading indicators are shown, loading flags are saved in the store,  - **10 points**
- When either search or items per page is changed, application makes a new call using RTK Query to fetch the data - **25 points**
- Tests had been modified to test the functionality using Redux and RTK Query - **20 points**

##### Penalties:

- TypeScript isn't used: **-95 points**
- Usage of *any*: **-20 points per each**
- Usage of *ts-ignore*: **-20 points per each**
- Direct DOM manipulations inside the React components: **-50 points per each**
- Presence of *code-smells* (God-object, chunks of duplicate code), commented code sections: **-10 points per each**
- Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**
- Test coverage is less than 80%: **-30 points**
- Commits after the deadline: **-40 points**

### Repository requirements

* the task should be done in **your personal private repository** 
* in the repository create a branch from the **previous task** branch with the name of the task and work in the created branch
* the commits history should reflect the process of app creating [Commits requirements](https://docs.rs.school/#/git-convention?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0%D0%BC-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B8%D1%82%D0%BE%D0%B2) [RU]
* after finishing development it’s necessary to make Pull Request from app’s branch to `main` branch [Pull Request requirements](https://docs.rs.school/#/pull-request-review-process?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-pull-request-pr) [RU]
* after completing the module, private repository should be exposed for the duration of the cross-check (please check the schedule), when the cross-check is finished, repository should be made private again 
**Do not merge Pull Request from the development branch to the `main` branch**

### Theory

- Redux Toolkit Docs - [Start with configureStore](https://redux-toolkit.js.org/api/configureStore)
- RTK Query - [Overview](https://redux-toolkit.js.org/rtk-query/overview)
- [Redux - Writing tests](https://redux.js.org/usage/writing-tests)
- [How to test RTK Query with react testing library](https://dev.to/ifeanyichima/-testing-components-with-a-request-for-rtk-query-using-msw-and-react-testing-library-5a8n)
- React Testing Library - [Mock API Calls - Mock Service Worker](https://www.youtube.com/watch?v=oMv2eAGWtZU) 
