# Week 2


## React. Forms

!! Task should be implemented in the school’s private repository !!
It should be based on the previous task.

### What should be done:

1. Create a separate branch for this task from previous branch task.
2. Create a separate route for forms.
3. Form should be implemented using uncontrolled components
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

   **The usage of any libraries with components or form libraries is prohibited.**  


### Score
The task will be checked during cross-check and cross-code-review.
Student can get 15 points if the following requirements are met:
1. Eslint should not show any errors or warnings.
2. All the functionality should work.
3. Test coverage for the whole app should be not less than 50%.

The score might be less, if:
1. Part of functionality doesn't work.
2. Test coverage is below 50%.
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
Forms in React:
- https://reactjs.org/docs/forms.html
