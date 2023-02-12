# Week 1

## React. Components

### What should be done:

1. Create a separate branch for this task.
2. We recommend using [Vite](https://vitejs.dev/guide/) with the template [*react-ts*](https://vite.new/react-ts), or you can use CRA with template *--typescript* (please, take a look at [this comment](https://github.com/reactjs/reactjs.org/pull/5487#issuecomment-1409720741) from Dan Abramov)
3. Set up eslint and prettier so that the project would not build if there are errors. Use [configs](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/module01/configs.md) [RU]
4. Add React-Router version 6. Add header which shows the current page. Also add pages “About Us”, “404”. If user will input unknown route into url – application should redirect to “404”.
5. Draw the following on the main page:
* Search Bar.\
examples:\
https://studio.uxpincdn.com/studio/wp-content/uploads/2020/09/BlogHeader_SearchBar_1200x600.png \
https://www.sliderrevolution.com/wp-content/uploads/2021/02/cssheader1.jpg \
Input value should be saved to LocalStorage during component’s unmount. During the initialization pick the value from LocalStorage and show it.
* Cards. The more details are on the card – the better.\
examples: \
https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/behance.jpg \
https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/rightmove.jpg \
https://www.webdesignerdepot.com/cdn-origin/uploads/2017/01/awwwards.jpg \
**In the situation when the access to life cycles of a component is needed or there is a necessity of state – use class components. Using hooks is forbidden at this stage.**
6. Add tests for components. Mock LocalStorage. Add test for one card, as well as tests for the list of all cards. You can use either React Testing Library or Enzyme, but only one of them. Preferr React Testing Library.

All logical parts should be set into separate components.
### Score
The task will be checked during cross-check and cross-code-review.
Student can get 15 points if the following requirements are met:
1. Eslint should not show any errors or warnings.
2. All the functionality should work.
3. Test coverage for the whole app should be not less than 40%.

The score might be less, if:
1. Part of functionality doesn't work.
2. Test coverage is below 40%.
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

*	[React. Components. Materials](https://docs.google.com/document/d/1WLWjBiVMjsVADf5FWFYfPObQOrLD1624h5etyafCfr8/edit)
*	CRA - [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html)
*	[Components - reactjs.org](https://reactjs.org/docs/components-and-props.html)
*	React-router [documentation + tutorial](https://reactrouter.com/docs/en/v6/getting-started/tutorial)
*	React-router [video course](https://www.youtube.com/watch?v=0auS9DNTmzE) [RU]
*	React Testing [Library documentation](https://testing-library.com/docs/react-testing-library/intro/)
*	React Testing Library course - [React Testing Library. Полный курс](https://www.youtube.com/watch?v=n79PMyqcCJ8&t=585s) [RU]

### React

*	Rolling Scopes School Lithuania. [React. Part 1](https://www.youtube.com/watch?v=L8CmtfCu9AI)
*	Rolling Scopes School Lithuania. [React. Part 2](https://www.youtube.com/watch?v=Rrg4D6AHc5A)
*	Rolling Scopes School Lithuania. [React. Part 3](https://www.youtube.com/watch?v=w9MvuGWVvkY)
*	Short course react + typescript - [React & TypeScript - Course for Beginners](https://www.youtube.com/watch?v=FJDVKeh7RJI)
*	Full tutorial: [Full React Course 2020 - Learn Fundamentals, Hooks, Context API, React Router, Custom Hooks](https://www.youtube.com/watch?v=4UZrsTqkcW4&t=8419s)
*	Additionally: [React JS фундаментальный курс от А до Я](https://www.youtube.com/watch?v=GNrdg3PzpJQ) [RU]
