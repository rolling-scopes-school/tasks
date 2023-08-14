# Week2

## React.Routing

The task should be based on the previous task.

### What should be done:

1. Create a separate branch for this task from the previous task's branch.
2. Rewrite components from class components to functional components using hooks.
3. Add routing to your application using **React Router**.
4. Add pagination:
   - Display the current page using router parameters.
   - The pagination component should appear after receiving the list of all items.
   - If the user changes items on the page, make a new API call and display the results from the first page.
5. When clicking on each item in the list, open a "Details" component with additional information about the item. Create a new route for this using `Router Outlet`.
6. When opening the "Details" component, make an additional API call to get detailed information about the item. Show a loading indicator while the item is being downloaded.
7. The main list with the selected item (visually distinguished) should be visible on the left.

### Note:

- All logic should be split into components.
- All data should be stored in the component's state.
- Use functional components with hooks for accessing state or lifecycle events.
- The usage of Redux or other state management solutions is prohibited.
- The usage of libraries for components or forms is prohibited.

### Questions:

You should use Discord as the primary means of communication. Additionally, we will attempt to collect your questions regarding the 2nd Module using a special form, which will be provided via Discord at the beginning of the 2nd Module. Questions will be collected in the Module 02 section of the same spreadsheet. Please check the answers carefully before posting a question, as your question might have already been answered. We will strive to hold a session for each module, providing answers to some of the questions."


### Score

The task will be checked during cross-check and cross-code-review.

#### Cross-code-review process

1. Clone the repository you are going to review.
2. Install all the necessary dependencies.
3. Run linting using the specified command in the package.json file; the output should not contain any errors or warnings.
4. Run tests using the specified command in the package.json file; all tests should pass, and the test coverage should be displayed after running all the tests.
5. Review the code. Pay attention to the following "code smells": 
   - props drilling,
   - large and complex components (also known as "god" components),
   - direct DOM manipulation,
   - and so on.
   
When reviewing the code, try to pay attention to the following principles:

- Keep the code as simple as possible: KISS (Keep It Simple, Stupid).
- Avoid unnecessary repetition: DRY (Don't Repeat Yourself).
- Remove what is not necessary: YAGNI (You Ain't Gonna Need It).

We should also mention the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) and other [SOLID](https://en.wikipedia.org/wiki/SOLID) principles. For further guidance, please refer to [this article](https://dmitripavlutin.com/7-architectural-attributes-of-a-reliable-react-component/).

Lastly, but certainly not least, please check for the presence of comments in the code. Ideally, there should be no comments at all. Sometimes, people tend to comment code that is unnecessary. Thus, consider removing such comments entirely. Remember, if you ever need to refer to previous versions of the code, you can always consult the git history. Furthermore, keep in mind that [comments can be misleading](https://blog.devgenius.io/code-should-be-the-one-version-of-the-truth-dont-add-comments-b0bcd8631a9a).

#### Cross-check process

Run the app and verify that the functionality is working (cross-check).


### Points, Scoring

A student can earn up to 100 points.

Cross-code review:

* Successful linting without errors or warnings - 10 points.
* Running tests and achieving a test coverage of 50% or higher - 20 points.

#### Cross-check:

@TODO

### Repository Requirements

* The task should be completed in **your personal private repository**.
* In the repository, create a branch from the **previous task** branch using the task's name and work within this newly created branch.
* The commit history should accurately reflect the process of creating the app. Refer to [Commit requirements](https://docs.rs.school/#/git-convention?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0%D0%BC-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B8%D1%82%D0%BE%D0%B2) [RU] for details.
* Once development is complete, you must create a Pull Request from the app's branch to the `main` branch. Refer to [Pull Request requirements](https://docs.rs.school/#/pull-request-review-process?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-pull-request-pr) [RU] for details.
* After completing the module, make your private repository accessible for cross-checks and cross-code-reviews for the duration of the next module (one week). After this week concludes, the repository should be set to private once again.
  **Do not merge the Pull Request from the development branch to the `main` branch.**

### Theory:

- React Router: https://reactrouter.com/
- React Router 6 video tutorials
  + [React Router 6 Tutorial](https://www.youtube.com/watch?v=OMQ2QARHPo0&list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf)
  + [Build a Budgeting App with React Router](https://www.youtube.com/watch?v=VpzeeBeVWeg&list=PL4cUxeGkcC9iNnY07bh_UPaRIQZcJfARY)
  + [React Router in Depth](https://www.youtube.com/watch?v=OMQ2QARHPo0&list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf)
- Examples https://github.com/remix-run/react-router/tree/dev/examples


Good luck with the assignment! If you have any further questions, feel free to ask.
