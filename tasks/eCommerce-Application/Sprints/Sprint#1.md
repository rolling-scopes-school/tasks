## Sprint 1: Repository Setup, Project Management, CommerceTools Integration, and Development Environment Configuration (110 points)

In the first sprint, the team will focus on setting up the project repository, establishing effective project management using a task board, integrating with CommerceTools to create the project and API client, and configuring the development environment with a bundler, TypeScript, ESLint, Prettier, Husky, and Jest for testing. The mentor will evaluate the team's progress and assign points based on achieving specific goals and milestones.

### Working with the Repository

- Create a `develop` branch from the `main` or `master` branch.
- For each task, create a new branch from the `develop` branch, make the changes, and create a pull request to merge the changes back into the `develop` branch after a code review. Multiple issues can be combined into a single pull request.
- At the end of the sprint, create a pull request from the `develop` branch to the `main` or `master` branch with a description in accordance with the requirements of rs-school.
- Share the pull request link with the mentor for review and evaluation.

### 1. Repository Setup (25 points)

- **(6 points)** Create a GitHub repository for the project, complete with a README file, .gitignore, and necessary dependencies. [RSS-ECOMM-01](./Sprint1/RSS-ECOMM-01.md)
- **(6 points)** Set up a clear and organized folder structure within the repository, ensuring a maintainable and scalable codebase. [RSS-ECOMM-02](./Sprint1/RSS-ECOMM-02.md)
- **(8 points)** Invite all team members and the mentor as collaborators, ensuring everyone has access to contribute to the repository. [RSS-ECOMM-03](./Sprint1/RSS-ECOMM-03.md)
- **(5 points)** Create a pull request template with a clear structure for describing proposed changes and the rationale behind them. [RSS-ECOMM-21](./Sprint1/RSS-ECOMM-21.md)

### 2. Task Board Setup (Trello, Jira, etc.) (20 points)

- **(6 points)** Create a project task board using a project management tool (e.g., Trello or Jira), organizing tasks into lists or columns corresponding to their status (e.g., To Do, In Progress, Done). [RSS-ECOMM-04](./Sprint1/RSS-ECOMM-04.md)
- **(8 points)** Break down project tasks into smaller, manageable subtasks and assign them to team members, ensuring a clear delegation of responsibilities. [RSS-ECOMM-05](./Sprint1/RSS-ECOMM-05.md)
- **(6 points)** Share the task board with the team members and the mentor, ensuring everyone can track progress and update the status of their tasks. [RSS-ECOMM-18](./Sprint1/RSS-ECOMM-18.md)

### 3. CommerceTools Project and API Client Setup (20 points)

- **(10 points)** Create the project in CommerceTools, setting up the necessary authorization, currencies, languages, and other configurations in the Merchant Center. [RSS-ECOMM-06](./Sprint1/RSS-ECOMM-06.md)
- **(10 points)** Create the API client for CommerceTools, enabling access to the platform's APIs and managing permissions and scopes required for the project. [RSS-ECOMM-07](./Sprint1/RSS-ECOMM-07.md)

### 4. Development Environment Configuration (40 points)

- **(6 points)** Set up and configure a bundler (e.g., Webpack, Vite, Parcel, or other) for the project, supporting both development and production build modes. [RSS-ECOMM-08](./Sprint1/RSS-ECOMM-08.md)
- **(6 points)** Configure TypeScript to enforce strong typing and improve code quality throughout the project. [RSS-ECOMM-09](./Sprint1/RSS-ECOMM-09.md)
- **(6 points)** Set up ESLint to enforce consistent coding styles and identify potential issues in the codebase. [RSS-ECOMM-10](./Sprint1/RSS-ECOMM-10.md)
- **(4 points)** Configure Prettier to automatically format code, ensuring a consistent and readable code style. [RSS-ECOMM-11](./Sprint1/RSS-ECOMM-11.md)
- **(4 points)** Initialize Husky to manage Git hooks, automating tasks such as code formatting and linting checks during the commit process. [RSS-ECOMM-12](./Sprint1/RSS-ECOMM-12.md)
- **(8 points)** Install and configure Jest as the testing framework for the project, enabling comprehensive testing of code functionality. [RSS-ECOMM-13](./Sprint1/RSS-ECOMM-13.md)

Note: In this sprint, we will also integrate a front-end framework (e.g., React, Angular, Vue) to facilitate efficient and organized development of the user interface, but it will not be part of the evaluation criteria for the sprint.

### 5. Development Scripts (20 points)

- **(8 points)** Create a script for running ESLint across the codebase, enabling quick and efficient identification of coding style issues and potential errors. [RSS-ECOMM-14](./Sprint1/RSS-ECOMM-14.md)
- **(6 points)** Create a script for running Prettier across the codebase, simplifying code formatting and ensuring uniform code style. [RSS-ECOMM-15](./Sprint1/RSS-ECOMM-15.md)
- **(6 points)** Create a script for running Jest tests, streamlining the process of executing tests and generating reports on test outcomes. [RSS-ECOMM-16](./Sprint1/RSS-ECOMM-16.md)

### 6. Comprehensive README (20 points)

- **(10 points)** Add a thorough README file in the repository, describing the project, its purpose, and the technology stack used. [RSS-ECOMM-17](./Sprint1/RSS-ECOMM-17.md)
- **(6 points)** Clearly document all available scripts (e.g., for running ESLint, Prettier, and Jest tests) and their usage in the README file. [RSS-ECOMM-19](./Sprint1/RSS-ECOMM-19.md)
- **(4 points)** Provide detailed instructions for setting up and running the project locally, ensuring newcomers and contributors can quickly get started. [RSS-ECOMM-20](./Sprint1/RSS-ECOMM-20.md)

#### Evaluation by the Mentor

During this sprint, the mentor will be the sole evaluator of the team's progress and efforts. They will assign points (up to a total of 115) based on the successful completion of the above tasks, collaboration, and overall organization of the project setup.

### Useful Links and Resources

To help the team understand the various tools and technologies used in this project, here's a list of helpful resources and guides:

1. [GitHub - Creating a new repository](https://help.github.com/en/articles/create-a-repo)
2. [Trello - Getting started](https://trello.com/guide/trello-101)
3. [Jira - Quick start guide](https://www.atlassian.com/software/jira/guides/getting-started/basics)
4. [CommerceTools - Getting started](https://docs.commercetools.com/docs)
5. [Webpack - Getting started](https://webpack.js.org/guides/getting-started/)
6. [React - Getting started](https://reactjs.org/docs/getting-started.html)
7. [Angular - Getting started](https://angular.io/guide/quickstart)
8. [Vue - Getting started](https://vuejs.org/v2/guide/)
9. [TypeScript - Getting started](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html)
10. [ESLint - Getting started](https://eslint.org/docs/user-guide/getting-started)
11. [Prettier - Getting started](https://prettier.io/docs/en/index.html)
12. [Husky - Getting started](https://github.com/typicode/husky#readme)
13. [Jest - Getting started](https://jestjs.io/docs/getting-started)
