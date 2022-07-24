# Week 5

## React. custom app state




!! The task should be done in the school's private repository!!
It is necessary to do the task on the base of the previous one.




What should be done:

1) Create a separate branch for this task
2) Create a state management using useReducer and Context API for search results and form data saving. Now, when switching between pages, all data should be saved.
3) Add to global state
    - **switches for sorting** (at least three sorting options). Select a parameter -> send a request to the API with the entered parameter -> the list of search results is updated
    - **switches for pagination.** It should be possible to select the number of results per page and the number of the page we are currently on, the total number of pages. Select a parameter -> send a request to the API with the entered parameter -> the list of search results is updated
4) The customer has changed the requirements for the output of parts: 
    - Now, when you click on each item from the search results, you do not need to open a modal, but open the information on a separate page. 
    - Also add a "Back" link on this page. 
    - Display the current position in the header. 
    - The detail page should take data from the global state.
    - If there is no data, then redirect to the home page.
### Criteria for evaluation

The task will be checked by the mentor during the first 6 weeks. Create a Pull Request to the branch of the previous task, for mentor's checking (**DO NOT MERGE**).


1) Custom State Management - **9 points**
2) Sorting and pagination - **3 points**
3) Search details in a separate page - **3 points**


If at least one of the requirements is not completed, then the task is evaluated as **0 points**.

### Repository requirements

- the task should be done in the school's **private repository** [How to work with a private repository](https://docs.rs.school/#/private-repository?id=Как-работать-с-приватным-репозиторием) [RU]
- create a branch with the name of the task in the school's private repository from the branch of the previous task. 
- The commit history should display the development process of the application. [Commit-name-requirements](https://www.conventionalcommits.org/en)
- after the development is completed, it is necessary to make a Pull Request from the application branch to the branch of the previous task [Requirements for a Pull Request](https://docs.app.rs.school/#/platform/pull-request-review-process). **You do not need to merge a Pull Request from the development branch to the branch of the previous task**

### Theory

- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [useContext() with Typescript](https://dev.to/madv/usecontext-with-typescript-23ln)
- [Using the useReducer Hook in React with TypeScript](https://dev.to/craigaholliday/using-the-usereducer-hook-in-react-with-typescript-27m1)
