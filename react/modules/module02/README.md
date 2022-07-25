# Week 2


## React. Forms

!! Task should be implemented in the school’s private repository !!
You have to implement task using React.Components

### What should be done:

1) You should create a separate branch for this task from previous branch task.
2) You should create a separate route for forms.
3) You should  develop form using uncontrolled components
4) You should add functional to your app:
   +  Collect information through a form
   +  You can collect any type of information, but form has to include at least one control of the following types: input, date input, dropdown/select, checkbox, switcher, file upload (image)

    ````  
    **Example:** 
    input - name, surname, zip-code;
    date input - birthday, date of delivery;
    dropdown/select - list of countries, list of states (User can choose only one element from the list)
    checkbox - "I consent to my personal data" field, list of extra presents (User can choose several items from the list)
    switcher - male/female, "I want to receive notifications about promo, sales, etc." / "I don’t want to receive notifications about promo, sales, etc."
    file upload - profile picture
    ````  

    Validation should happen after the **Submit** button clicked. In case some field was filled incorrectly, then error messages should be displayed under it. The card mustn’t be created until the user fixes all errors.

    After changing value in input, then reset will happens only for one particular field (not all fields). 

    Submit button should be disabled at initialization (before the first typing), and until the user fixes all errors.

    After the Submit button is clicked, all data from the form has to be displayed as Card in the cards list below form. The confirmation message (with information that the data has been saved) should be displayed, after that form has to be cleared.

    In case the user filled in and submitted the form five times, then five cards have to be displayed under the form.

5) You should add tests.
6) All logic parts should be extracted into components.
   All data must be stored in a local state of the component.
   Components should not call API.
   Using redux or any other solutions for state management is prohibited.  
   **Using any libraries with components or form libraries is prohibited.**  


### Criteria for evaluation

The task will be checked by the mentor during the first 6 weeks. Create a Pull Request to the branch of the previous task, for mentor's checking (**DO NOT MERGE**).


1) Tests - **3 points**
2) Form + Cards - **12 points**


If at least one of the requirements is not completed, then the task is evaluated as **0 points**.
If case of direct DOM manipulation - **0 points**

### Repository requirements

- the task should be done in the school's **private repository** [How to work with a private repository](https://docs.rs.school/#/private-repository?id=Как-работать-с-приватным-репозиторием) [RU]
- create a branch with the name of the task in the school's private repository from the branch of the previous task.
- The commit history should display the development process of the application. [Commit-name-requirements](https://www.conventionalcommits.org/en)
- after the development is completed, it is necessary to make a Pull Request from the application branch to the branch of the previous task [Requirements for a Pull Request](https://docs.app.rs.school/#/platform/pull-request-review-process). 

**You do not need to merge a Pull Request from the development branch to the branch of the previous task** 

### Theory


Forms in React:

- https://reactjs.org/docs/forms.html
