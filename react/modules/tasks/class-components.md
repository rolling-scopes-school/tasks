# React project setup. Class components. Error boundary.

## Technical Requirements

1. Create a separate branch for this task. Branch name: "class-components".
2. Language Requirement
   - Use **TypeScript** for the project.
3. Project Setup
   - Initialize the project using [Vite](https://vitejs.dev/guide/) with the [_react-ts_ template](https://vite.new/react-ts).
4. Code Quality Tools
   1. ESLint
      - Set up ESLint to throw errors if TypeScript's _any_ type is used.
   2. Prettier
      - Integrate Prettier for code formatting.
   3. Husky
      - Add Husky and configure it to run linting on pre-commit.
   4. package.json commands
      - Add the following npm scripts:
        - `lint`: For running the lint command.
        - `format:fix`: For running Prettier's --write command.
5. Pick a RESTfull api which supports search and pagination (pagination might be reffered as _offset_ and _limit_ params). E.g. https://pokeapi.co/, for Star Wars fans https://swapi.dev/api, for Star Trek fans https://stapi.co/api-documentation (OpenApi spec can be checked here https://editor.swagger.io/?url=https://stapi.co/api/v1/rest/common/download/stapi.yaml), or you can select another one complying with the requirements.

## Application Requirements

1. Create a page comprised of 2 horizontal sections (a smaller top one, and a bigger bottom one).
2. On the top section put _Search_ input and the "Search" button. _Search_ component should look for a previously saved search term in the local storage (LS), if there isn't any - leave the input empty.
3. Bottom section should be used for displaying search results (name and a small description).
4. By default application makes a call to the selected api to get the list of the items with the search term from the input (only first page). If the input is empty make a call to get all the items.
5. When user modifies the _Search_ input and clicks on "Search" button, application makes a call to an api with the newly provided search term (search term should not have any trailing spaces, process the input) to get the results (only first page).
6. The provided search term should be saved to the LS, if the value exists overwrite it.
7. Wrap application to an error boundary to catch errors. Report an error to a console and show fallback UI (use respective methods for this). Create a button which will throw an error on click to test the functionality.

**Use class components to get access to lifecycle events or state. Using hooks is forbidden at this stage. Patience, it won't last long.**

All logical parts should be set into separate components.

## Points

### Student can get 100 points:

- Eslint is set up, when _lint_ command is run it doesn't produce any errors (if there are warnings score might be less) - **15 points**
- Prettier is set up, _format:fix_ command fixes issues - **15 points**
- Husky is set up, linting is run on pre-commit - **10 points**
- Page is split into 2 sections, top one has _Search_ input and "Search" button, main section displays the list of results from the selected api when page is opened for the first time (loader should be shown while app makes a call to the api) - **20 points**
- When user types something to the _Search_ input and clicks "Search" button, a loader is displayed and the list is changed according to the response results for a provided search term - **15 points**
- The search term typed into the _Search_ input is saved in the LS when user clicks on "Search" button (check it by closing the tab and open the app in the new one - the initial call should contain previously entered search term) - **15 points**
- Application is wrapped with ErrorBoundary, which logs error to a console and shows a fallback UI. There should be a button to throw an error - **10 points**

### Penalties

- TypeScript isn't used: **-95 points**
- Usage of _any_: **-20 points per each**
- Usage of _ts-ignore_: **-20 points per each**
- Direct DOM manipulations inside the React components: **-50 points per each**
- React hooks are used to get access to either state, or to the component lifecycle: **-70 points**
- Presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**
- Usage of Redux or other state management libraries: **-100 points**
- Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**
- Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://docs.rs.school/#/en/pull-request-review-process?id=pull-request-description-must-contain-the-following): **-10 points**
