# Week2

## React. Routing

The task should be based on the previous task. We're using [React Router v6.x ](https://reactrouter.com/en/main/start/overview) in this task.

### What should be done:

1. Create a separate branch for this task from the previous task's branch.
2. All components must be changed to **functional components**, except **Error Boundary** components, as error boundaries in React still need to be class components.
3. All logic should be split into components:
   - If you need an access either to the component's lifecycle or the state **use hooks**.
   - All data should be stored in the **component's state**.
4. Add routing to your application using **React Router**.
5. Add pagination:
   - Implement pagination for your existing item list
   - Display the current page in the browser URL using query parameters (e.g. ?page=2, e.g /search/2).
   - The pagination component should appear after receiving the list of all items.
   - If the user changes the number of items shown per page, make a new API call and display the results from the first page.
6. Main page displays search results. On item click page should be split into 2 section:
   - left section will continue to display search results;
   - right section should display details using Router Outlet (show loading indicator while making an additional call for details, add control for closing the section, also section should be closed when user clicks on the left section)
   - Reflect in the url that "Details" section has been opened for the selected item (e.g. /?frontpage=2&details=1).

### Questions:

You should use Discord as the primary means of communication.

Additionally, we will attempt to collect your questions regarding the 2nd Module using a special form, which will be provided via Discord at the beginning of the 2nd Module. Questions will be collected in the Module 02 section of the same spreadsheet.

Please **check the answers carefully before posting** a question, as your question might have already been answered. We will strive to hold a session for each module, providing answers to some of the questions.

### Score

The task will be checked during cross-check and cross-code-review.

#### Cross-code-review process

1. Clone the repository you are going to review.
2. Install all the necessary dependencies.
3. Run linting using the specified command in the package.json file; the output should not contain any errors or warnings.
4. Review the code. Pay attention to the following "code smells":
   - props drilling,
   - large and complex components (also known as "god" components),
   - direct DOM manipulation,
   - and so on.

When reviewing the code, try to pay attention to the following principles:

- Keep the code as simple as possible: KISS (Keep It Simple, Stupid).
- Avoid unnecessary repetition: DRY (Don't Repeat Yourself).
- Remove what is not necessary: YAGNI (You Ain't Gonna Need It).

We should also mention the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) and other [SOLID](https://en.wikipedia.org/wiki/SOLID) principles. For further guidance, please refer to [this article](https://dmitripavlutin.com/7-architectural-attributes-of-a-reliable-react-component/).

Last but not least, please check for the presence of comments in the code. Ideally, there should be no comments at all. Sometimes, people tend to comment code that is unnecessary. Thus, consider removing such comments entirely. Remember, if you ever need to refer to previous versions of the code, you can always consult the git history. Furthermore, keep in mind
that [comments can be misleading](https://blog.devgenius.io/code-should-be-the-one-version-of-the-truth-dont-add-comments-b0bcd8631a9a).

#### Cross-check process

Run the application and confirm the proper functioning of its features (cross-check).

### Points, Scoring

A student can achieve a maximum of 100 points.

#### Cross-check (score can be less if some parts of the functionality don't work)

- Conversion of class components to functional components with hooks - **20**
- Pagination is present in both URL and on the page - **30**
- User-initiated change of items per page triggers a new request, displaying the first page - **20**
- Upon clicking, open details panel on the right side of the page: - **5**
  - use router outlet, left side of the page should continue displaying the list of results - **10**
  - initiate an additional API call, display a loader, and update the URL - **5**
  - Details panel should be closed either on the "close" button click or on the main panel click - **10**

#### Penalties

- TypeScript isn't used: **-95 points**
- Usage of _any_: **-20 points per each**
- Usage of _ts-ignore_: **-20 points per each**
- Direct DOM manipulations inside the React components: **-50 points per each**
- Presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**
- Usage of Redux or other state management libraries: **-100 points**
- Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**
- Commits after the deadline: **-40 points**

### Repository Requirements

- The task should be completed in **your personal private repository**.
- In the repository, create a branch from the **previous task** branch using the task's name and work within this newly created branch.
- The commit history should reflect the process of creating the app. Refer to [Commit requirements](https://docs.rs.school/#/git-convention?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0%D0%BC-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B8%D1%82%D0%BE%D0%B2) [RU] for details.
- Once development is complete, you need to create a Pull Request from the current task branch to the previous task branch. Refer to [Pull Request requirements](https://docs.rs.school/#/pull-request-review-process?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-pull-request-pr) [RU] for details.
- After completing the module, private repository should be exposed for the duration of the cross-check (please check the schedule). When the cross-check is finished, repository should be made private again.

**Do not merge the Pull Request from the development branch to the `main` branch.**

### Theory:

- React Router: https://reactrouter.com/
- React Router 6 video tutorials
  - [React Router 6 Tutorial](https://www.youtube.com/watch?v=OMQ2QARHPo0&list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf)
  - [Build a Budgeting App with React Router](https://www.youtube.com/watch?v=VpzeeBeVWeg&list=PL4cUxeGkcC9iNnY07bh_UPaRIQZcJfARY)
- Examples https://github.com/remix-run/react-router/tree/dev/examples

Good luck with the assignment! If you have any further questions, feel free to ask.
