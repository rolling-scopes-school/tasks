# React project setup. Class components. Error boundary.

## Technical Requirements

1. Create a separate branch for this task. Branch name: "class-components".
2. Language Requirement
   - Use **TypeScript** for the project.
3. Project Setup

   - Initialize the project using [Vite](https://vitejs.dev/guide/) with the [_react-ts_ template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).
     ```sh
     # npm 7+, extra double-dash is needed:
     npm create vite@latest rs-react-app -- --template react-ts
     ```

4. Code Quality Tools

   1. ESLint
      - ESlint v.9 is already a part of the _react-ts_ setup.
   2. Prettier

      - Integrate Prettier for code formatting.
        You can execute the following command to add missing plugins:

      ```sh
      npm install -D eslint-plugin-react eslint-plugin-prettier eslint-config-prettier eslint-plugin-react-compiler@beta
      npm install -D --save-exact prettier
      ```

      Now, add a new file `.prettierrc` to the root of the project:

      ```json
      {
        "trailingComma": "es5",
        "tabWidth": 2,
        "semi": true,
        "singleQuote": true
      }
      ```

      And this is how your `eslint.config.js` should look like:

      ```js
      import js from "@eslint/js";
      import globals from "globals";
      import reactHooks from "eslint-plugin-react-hooks";
      import reactRefresh from "eslint-plugin-react-refresh";
      import react from "eslint-plugin-react";
      import tseslint from "typescript-eslint";
      import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
      import reactCompiler from "eslint-plugin-react-compiler";

      export default tseslint.config(
        { ignores: ["dist"] },
        {
          extends: [
            js.configs.recommended,
            ...tseslint.configs.strict,
            eslintPluginPrettier,
          ],
          files: ["**/*.{ts,tsx}"],
          languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
          },
          plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "react-compiler": reactCompiler,
          },
          rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": [
              "warn",
              { allowConstantExport: true },
            ],
            "react-compiler/react-compiler": "error",
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
          },
          settings: {
            react: {
              version: "detect",
            },
          },
        },
      );
      ```

   3. Husky
      - Add Husky and configure it to run `lint` command on pre-commit.
      ```sh
      npm install --save-dev husky
      ```
      You can follow the official [Husky documentation](https://typicode.github.io/husky/get-started.html)
   4. package.json commands
      - Add the following npm scripts:
        - `format:fix`: For running Prettier's --write command.
        ```json
            "format:fix": "prettier --write ."
        ```
        You can check the final setup [here](https://github.com/kravaring/rs-react-app).

5. Pick a RESTfull api which supports search and pagination (pagination might be reffered as _offset_ and _limit_ params). E.g. https://pokeapi.co/, for Star Wars fans https://swapi.dev/api, for Star Trek fans https://stapi.co/api-documentation (OpenApi spec can be checked here https://editor.swagger.io/?url=https://stapi.co/api/v1/rest/common/download/stapi.yaml), or you can select another one complying with the requirements.

## Application Requirements

1. Divide your page into at least two sections/components. The smaller section should be at the top, and the larger section should be at the bottom.
2. In the top section, place a _Search_ input and a "Search" button. The _Search_ component should look for a previously saved search term in the local storage (LS). If there isn't any, leave the input empty.
3. The bottom section should be used for displaying search results (name and a small description).
4. By default, the application makes a call to the selected API to get a list of items using the search term from the input (only the first page). If the input is empty, make a call to get all items.
5. When the user modifies the _Search_ input and clicks the "Search" button, the application makes a call to the API with the newly provided search term (the search term should not have any trailing spaces; process the input) to get the results (only the first page).
6. The provided search term should be saved to the LS. If the value exists, overwrite it.
7. If your application makes a request to the server API, this should be visible to the user. Implement a Spinner, Skeleton, Loading Bar, Blurring Content, or any other appropriate method in your UI to indicate this.
8. Wrap the application in an error boundary to catch errors. Report an error to the console and show a fallback UI (use respective methods for this). Create a button that will throw an error on click to test the functionality.

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
