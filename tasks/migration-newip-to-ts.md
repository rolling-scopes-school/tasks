# News API

**[News API](https://newsapi.org/)** is a simple HTTP REST API for searching and retrieving news from across the Internet.

## Key skills

- JavaScript Classes
- Modules in JavaScript
- Webpack
- TypeScript

## Source

[Original app](https://github.com/rolling-scopes-school/news-JS/)

### Proxy

- News API no longer allows calling the API from other sources except localhost.
- Proxy News API server for use in the deployed version:
  - https://rss-news-api.onrender.com/ - has additional mocks endpoints - `/mocks/sources` and `/mocks/everything` - that return static data to help prevent exhausting API key requests limit during the developing process.

## Task Requirements

- Create your own copy of the application.
- Add [TypeScript](https://www.typescriptlang.org/) to the project.
- Set up [ESLint](https://eslint.org/) to work with TypeScript.
- Configure [Webpack](https://webpack.js.org/) to work with TypeScript.
- Migrate the application from JavaScript to TypeScript, using:
  - Enums
  - Interfaces
  - Types
  - Generics
  - Union Types
  - Access modifiers (`private`, `public`)
  - Utility Types (`Partial`, `Pick`, `Readonly`)
- Make the layout adaptive with a design at your discretion.

**The usage of `any` type is STRICTLY PROHIBITED!**

## Requirements for Layout and Application Design

- The appearance of the application matches the proposed sample or is an improved version of it.
- The layout is adaptive. The minimum page width at which the correctness of the application display is checked is `320px`, and the maximum page width is `1920px`.
- The application's footer includes a link to the author's GitHub, the year of the application's creation, and the [course logo](https://rs.school/_next/static/media/rss-logo.c19ce1b4.svg) with a [link to the course](https://rs.school/courses/javascript).

## Technical Requirements

- Application functionality is tested in the latest version of the Google Chrome browser.

## Task Execution Sequence

### Step 1: Bootstrap the Application

During this step, we've achieved the following:

- Integrated TypeScript into the project by adding the TypeScript npm package.
- Created the `tsconfig.json` file.
- Configured ESLint and Webpack to seamlessly collaborate with TypeScript.
- Implemented the [typescript-eslint/recommended](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) plugin in ESLint.
- Successfully got your version of the application up and running.

### Step 2: Prepare for Code Migration to TypeScript

The outcome of completing this step includes:

- Renaming files with the extension `*.js` to files with the extension `*.ts`.
- Creating necessary interfaces for data exchange with [News API](https://newsapi.org/).

### Step 3: Migration of Code to TypeScript

The result of completing this step is as follows:

- Code is strictly typed, including:
  - Declaration of types for all variables.
  - Typing parameters for functions and methods, and appropriately handling cases where functions do not return a value.
  - Typing used classes.
  - Previously created interfaces are used in the code.
  - Enums, generics, utility types, etc., are created and utilized.
- The TypeScript configuration file includes the following flags:
  - `"noImplicitAny": true`
  - `"strict": true`
- ESLint has the `no-explicit-any` rule enabled.

### Step 4: Adaptive Layout

The result of completing this step is:

- The layout maintains stability during scaling, ensuring that elements adapt responsively without overlapping or hiding outside the viewport.

## Mentor Evaluation Criteria (170 points) 🎯

### 1. Repository Setup (20 points)

- **(10 points)** Pull request is made in accordance with the [Pull Request Requirements](https://docs.rs.school/#/en/pull-request-review-process?id=pull-request-requirements-pr)
- **(10 points)** Commit history is maintained, and commit names are given according to the [Commit Requirements](https://docs.rs.school/#/en/git-convention)

### 2. Code Quality (100 points)

- **(50 points)** The application is fully migrated to TypeScript:
  - **(10 points)** Everyday Types and Enums are used
  - **(10 points)** Generics are used
  - **(10 points)** Object Types are used
  - **(10 points)** Classes and access modifiers (`private`, `public`) are used
  - **(10 points)** [Function Types](https://www.typescriptlang.org/docs/handbook/2/functions.html) are used
- **(10 points)** ESLint is configured for TypeScript, the `no-explicit-any` rule is enabled, and there are no errors
- **(10 points)** The `any` type isn't used anywhere
- **(20 points)** The TypeScript configuration file includes the flags `"noImplicitAny": true` and `"strict": true`
- **(10 points)** Webpack is configured to work with TypeScript

### 3. Design and Application Functionality (50 points)

- **(10 points)** Adaptive layout is implemented
- **(20 points)** Your own design or improvements to the existing design are added (details should be described in the Pull Request)
- **(20 points)** No remarks from the mentor regarding the design

## Penalties 🚓

- **(-20 points)** Use of the `any` type
- **(-20 points)** Code is not fully covered with types
- **(-20 points)** Mandatory flags `"noImplicitAny": true` and `"strict": true` are not set in the TypeScript configuration file
- **(-10 points)** The ESLint configuration file does not include the `no-explicit-any` rule **-10**
- **(-10 points)** ESLint errors

## Repository Requirements

- The task is performed in the **school's private repository**.
- In the school's private repository, create a branch with the name of the task (e.g. `news-api`) from the `main` branch. In it, create a folder with the name of the task, and place the project files in the folder.
- For deployment, use `gh-pages`.
- If it isn't possible to use gh-pages, use [Netlify Drop](https://app.netlify.com/drop) for deployment.  
  Name the page according to the scheme: `GitHub-account-name`-`task-name` (e.g. `octocat-news-api`).
- Commit history should reflect the development process of the application. Commit messages should be composed in accordance with the [Commit Requirements](https://docs.rs.school/#/en/git-convention).
- After development is complete, create a Pull Request from the application branch to the `main` branch. Follow [Pull Request Requirements](https://docs.rs.school/#/en/pull-request-review-process?id=pull-request-requirements-pr).  
  **Do not merge the Pull Request from the development branch to the `main` branch!**
- Send the <u>link to the pull request</u> for mentor review in the `Dashboard -> Mentor's Check` via the `Submit Task` button.

## Useful Resources

- [TSConfig Reference](https://www.typescriptlang.org/tsconfig)
- [no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any/)
- [TypeScript Guide for Webpack](https://webpack.js.org/guides/typescript/)
- [The Difference Between Responsive and Adaptive Design](https://css-tricks.com/the-difference-between-responsive-and-adaptive-design/)
