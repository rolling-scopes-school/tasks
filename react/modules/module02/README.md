# Week 2

## React. Forms

Task should be based on the previous task.

### What should be done:

1. Create a separate branch for this task from the previous branch task.
2. Create a separate route for forms.
3. Form should be implemented using uncontrolled components (with refs)
4. Add functionality to your app:
   +  Collect information through a form
   +  You can collect any type of information, but form has to include at least one control of the following types:
      + text input
      + date input
      + dropdown/select
      + checkbox
      + switcher
      + file upload (image)

   **Example:**
     ```
     text input - name, surname, zip-code;
     date input - birthday, date of delivery;
     dropdown/select - list of countries, list of states (User can choose only one element from the list)
     checkbox - "I consent to my personal data" field, list of extra presents (User can choose several items from the list)
     switcher - male/female, "I want to receive notifications about promo, sales, etc." / "I don’t want to receive notifications about promo, sales, etc."
     file upload - profile picture
     ```

   After the Submit button is clicked, all data from the form has to be displayed as Card in the cards list below the form. The confirmation message (with information that the data has been saved) should be displayed, after that form has to be cleared.
   
   The quantity of cards should equal the number of form submissions (if the user filled in and submitted the form five times, then five cards have to be displayed under the form).
   
   **Form validation**
   
   Validation should happen after the **Submit** button was clicked. In case some field was filled incorrectly, then error messages should be displayed under it. The card mustn’t be created until the user fixes all errors.
   
   After changing the value of erroneous input, the reset should happen only for this particular field, but not for the others.
   
   Submit button should be disabled at initialization (before the first typing), and until the user fixes all errors.

5. Add tests.
6. All logical parts should be extracted into components.
   
   All data must be stored in a local state of the component.
   
   Components should not make calls to APIs.

   The usage of Redux or any other solutions for state management is prohibited.
   
   **Use class components to get access to lifecycle events or state. Using hooks is forbidden at this stage.**

   **The usage of any libraries with components or form libraries is prohibited.**  

### Questions
You should be using Discord as the main mean of the communication.
Also we will try to collect your questions regarding the 2nd Module using special form, which will be provided via the Discord with the 2nd Module start. Questions will be collected in Module 02 section of the same spreadsheet. Please, check answers carefully before posting the question, may be your question has been answered already.
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
3. Test coverage for the whole app should be not less than 50%.

The score might be less, if:
1. Part of functionality doesn't work.
2. Test coverage is below 50%.
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
Forms in React:
- https://reactjs.org/docs/forms.html
