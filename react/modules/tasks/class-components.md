# React project setup. Class components. Error boundary.

## Application Requirements

1. Divide your page into at least two sections/components. The smaller section should be at the top, and the larger section should be at the bottom.
2. In the top section, place a _Search_ input and a "Search" button. The _Search_ component should look for a previously saved search term in the local storage (LS). If there isn't any, leave the input empty.
3. The bottom section should be used for displaying search results (name and a small description).
4. By default, the application makes a call to the selected API to get a list of items using the search term from the input (only the first page). If the input is empty, make a call to get all items.
5. When the user modifies the _Search_ input and clicks the "Search" button, the application makes a call to the API with the newly provided search term (the search term should not have any trailing spaces; process the input) to get the results (only the first page).
6. The provided search term should be saved to the LS. If the value exists, overwrite it.
7. If your application makes a request to the server API, this should be visible to the user. Implement a Spinner, Skeleton, Loading Bar, Blurring Content, or any other appropriate method in your UI to indicate this.
8. If the request didn't succeed (status code **4xx** or **5xx**), show the meaningful message. You can use [ModResponse](https://chromewebstore.google.com/detail/modresponse-mock-and-repl/bbjcdpjihbfmkgikdkplcalfebgcjjpm) or similar, to test this functionality.
9. Wrap the application in an error boundary to catch errors. Report an error to the console and show a fallback UI (use respective methods for this). Create a button that will throw an error on click to test the functionality.

## Template

This template represents the possible layout for your app, but you can create your app based on your own preferences.

Successful response.

```
+-------------------------------------------------------+
|                                                       |
|  +------------------ Top controls ------------------+ |
|  | +--------------------------+ +-----------------+ | |
|  | | [Search Input Field]     | | [Search Button] | | |
|  | +--------------------------+ +-----------------+ | |
|  +--------------------------------------------------+ |
|                                                       |
|  +-------------------- Results ---------------------+ |
|  | +----------------------------------------------+ | |
|  | | Item Name  | Item Description                | | |
|  | +----------------------------------------------+ | |
|  | | [Item 1]   | [Description 1]                 | | |
|  | | [Item 2]   | [Description 2]                 | | |
|  | | ...        | ...                             | | |
|  +--------------------------------------------------+ |
|                                       [Error Button]  |
+-------------------------------------------------------+
```

Non-successful response.

```
+-------------------------------------------------------+
|                                                       |
|  +------------------ Top controls ------------------+ |
|  | +--------------------------+ +-----------------+ | |
|  | | [Search Input Field]     | | [Search Button] | | |
|  | +--------------------------+ +-----------------+ | |
|  +--------------------------------------------------+ |
|                                                       |
|  +-------------------- Results ---------------------+ |
|  |                                                  | |
|  |                 Error description                | |
|  |                                                  | |
|  +--------------------------------------------------+ |
|                                       [Error Button]  |
+-------------------------------------------------------+
```

## Technical Requirements

1. Create a separate branch for this task. Branch name: "class-components".

2. Follow the requirements for the project setup listed [here](./project-setup.md)

3. Pick a RESTfull api which supports search and pagination (pagination might be referred as _offset_ and _limit_ params). E.g. https://pokeapi.co/, for Star Wars fans https://swapi.dev/api, for Star Trek fans https://stapi.co/api-documentation (OpenApi spec can be checked here https://editor.swagger.io/?url=https://stapi.co/api/v1/rest/common/download/stapi.yaml), or you can select another one complying with the requirements.

4. All logical parts should be set into separate components such as CardList, Card, Search, Header, Main etc.

5. **Use class components to get access to lifecycle events or state. Using hooks is forbidden at this stage. Patience, it won't last long.**

6. You can use CSS frameworks (e.g. Tailwind CSS).

## Points

### Student can get 100 points:

- Eslint is set up, when _lint_ command is run it doesn't produce any errors (if there are warnings score might be less) - **15 points**
- Prettier is set up, _format:fix_ command fixes issues - **15 points**
- Husky is set up, linting is run on pre-commit - **10 points**
- Page is split into at least two sections, top one has _Search_ input and "Search" button, main section displays the list of results from the selected api when page is opened for the first time (loader should be shown while app makes a call to the api) - **20 points**
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
