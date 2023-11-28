# Week 6

## React. Forms

This task shouldn't be based on the previous 5 modules.

### What should be done:

1. Create a separate branch for this task, not based on previous ones.
2. Language Requirement
   - Use **TypeScript** for the project.
3. Project Setup
   - Initialize the project using [Vite](https://vitejs.dev/guide/) with the [_react-ts_ template](https://vite.new/react-ts).
4. Code Quality Tools
   1. ESLint
      - Set up ESLint to throw errors if TypeScript's _any_ type is used.
      - Follow the [configuration guide](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/module01/configs.md).
   2. Prettier
      - Integrate Prettier for code formatting.
   3. Husky
      - Add Husky and configure it to run linting on pre-commit.
   4. package.json commands
      - Add the following npm scripts:
        - `lint`: For running the lint command.
        - `fix`: For running Prettier's fix command.
5. Add **React Hook Form**, **Yup**, **Redux Toolkit** and **React Router** to the application.
6. Routing. There will be 3 routes:
   - Main, should have links to other 2 routes
   - Route for the form created using uncontrolled components approach
   - Route for the similar form, but created with the help of the **React Hook Form**
7. Redux. Use redux to store the data provided by both approaches on the Main route. You can use tiles to display data taken from each form.
8. Forms
   Both forms will collect the same data:
   - name (validate for first uppercased letter)
   - age (should be number, no negative values)
   - email (validate for email)
   - 2 passwords (should match, display the password strength: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character)
   - gender (you can use radio buttons or select control)
   - accept T&C (checkbox)
   - input control to upload picture (validate size and extension, allow png jpeg, save in redux store as base64)
   - autocomplete control to select country (all countries should be stored in the Redux store)
     Form should contain labels, which should be connected with inputs (look at **htmlFor**)
9. Validation
   Implement validation according to the inputs description from p. 8. Use **Yup** for validation. Show errors either above each component, or below (but stick with one approach everywhere). Block submitting the form before all the errors are fixed (disable submit button). Good UX assumes that there are no "jumps" when showing errors.
   - Uncontrolled components should implement validation on submit
   - Approach with **React Hook Form** should implement live validation
10. After submitting the form
    On successful form submission redirect user to the main route with all the previously entered data. Make an indication for a newly entered data on the main route (e.g. show border in a different color for a few seconds, or a different background color)

### Questions

You should be using Discord as the main mean of the communication.
Also, we will try to collect your questions regarding the 6th Module using special form, which will be provided via the Discord with the 6th Module start. Questions will be collected in Module 06 section of the same spreadsheet. 
We will try to conduct a session for each module providing answers for some questions.

Please **check the answers carefully before posting** a question, as your question might have already been answered. We will strive to hold a session for each module, providing answers to some of the questions.

### Score

The task will be checked during cross-check and cross-code-review.

#### Cross-code-review process

1. Clone the repository you are going to review
2. Install all the required dependencies
3. Run linting using special command in package.json file, output should not produce any errors or warnings
4. Review the code. Pay attention at the following "code smells": props drilling; large, complex components aka "god" components; direct DOM manipulation, etc.

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

- 3 routes (main and 2 routes for forms), Redux is set up and used to collect data from both forms, redirect to main route after submitting the form - **15 points**
- Validation works for both forms according to the requirements (error messages, blocking submit button), **Yup** is used for validation (10 points if works only for one form) - **20 points**
- Name, age, email, gender picker, accept T&C are implemented for both forms and collect data (if something doesn't work, score can be less) - **20 points**
- Input for image is implemented for both forms, image is saved as base64 and dispaly on the main route after redirect - **15 points**
- Passwords (with password strength) are implemented for both forms - **15 points**
- Autocomplete works for both forms - **15 points**
  **Max points should be assigned in case if the requirement has been implemented for both forms, if something doesn't work, score should be less**

##### Penalties:

- TypeScript isn't used: **-95 points**
- Usage of _any_: **-20 points per each**
- Usage of _ts-ignore_: **-20 points per each**
- Presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**
- Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**
- Validation is implemented without **Yup** - **-25 points**
- Commits after the deadline: **-40 points**

### Repository requirements

- The task should be completed in **your personal private repository**.
- In the repository, create a branch using the task's name and work within this newly created branch.
- The commit history should reflect the process of creating the app. Refer to [Commit requirements](https://docs.rs.school/#/git-convention?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0%D0%BC-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B8%D1%82%D0%BE%D0%B2) [RU] for details.
- Once development is complete, you need to create a Pull Request from the current task branch to the `main` branch. Refer to [Pull Request requirements](https://docs.rs.school/#/pull-request-review-process?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-pull-request-pr) [RU] for details.
- After completing the module, private repository should be exposed for the duration of the cross-check (please check the schedule). When the cross-check is finished, repository should be made private again.

  **Do not merge Pull Request from the development branch to the `main` branch**

### Theory

- [Uncontrolled components (old documentation)](https://legacy.reactjs.org/docs/uncontrolled-components.html)
- [Uncontrolled vs Controlled components in React](https://www.geeksforgeeks.org/controlled-vs-uncontrolled-components-in-reactjs/)
- [React Hook Form](https://www.react-hook-form.com/get-started/)
- [Using Yup with React Hook Form. 1](https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98)
- [Using Yup with React Hook Form. 2](https://medium.com/@msgold/creating-a-react-form-using-react-hook-form-and-yup-in-typescript-640168c5ed57)
- [Yup](https://github.com/jquense/yup)
