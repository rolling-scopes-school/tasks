# YouTube client app

During the Angular course, you are to implement the YouTube client app. You can refer to the [Figma mockup](https://www.figma.com/file/tS3Zqk138yXUmRxSWKDv4r/YouTube-client?node-id=0%3A1)

## Angular. Intro task

### Getting started

- Install _@angular/cli_ package. It's highly recommended to use _SCSS_ as the default stylesheet
- Use the Angular CLI to create a new project with Angular v18 or later
- Don't recommend to use ESLint v9 or later (we suggest using ESLint v8)
- Explore the generated project structure

### Task requirements

Within this task, you are to start implementing the main page of the app.

**[YouTube client. Main page JPG](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/main.jpg)**

#### Project structure

The project structure can be organized in the following way:

```
    app
    ├── header
    │   ├── header
    ├── search
    │   ├── search-results
    │   ├── search-item
    |   |── search-response.model.ts
    │   ├── search-item.model.ts
    │   ...
    ├── app.component.html
    ├── app.component.scss
    ├── app.component.ts
    ├── app.component.spec.ts
    ├── app.module.ts
    ...
```

#### Task scope

- Generate a new Angular project using ng-cli
- Migrate Angular application to ESLint with rules [AirBnB](https://github.com/airbnb/javascript)
- Think about how to break down the whole app into smaller pieces.
- Generate all the necessary components using ng-cli. The search result list and each item should be represented as separate components
- Based on the mocked response which is stored in .json file, create necessary interfaces
  [YouTube client. Response example](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/response.json)

Please bear in mind that you don’t need to implement any logic or markup. The outcome of this task should contain only newly generated and empty components.

#### Evaluation criteria

Maximum score - **70**

- [ ] The app is generated. (**+5**)
- [ ] Added base project structure for components and models.(**+10**)
- [ ] ESLint is configured for TypeScript, the `no-explicit-any` rule is enabled. (**+10**)
- [ ] TypeScript is configured, the `strict: true` rule is enabled. (**+10**)
- [ ] All the necessary components were created. (**+15**)
- [ ] All the necessary models were created. Search result list and search item components contain declarations of necessary fields. (**+20**)

Fines

- [ ] Failure to submit on time may lead to points lose according to the [Deadlines for Students requirements].(https://docs.app.rs.school/#/platform/pull-request-review-process?id=deadlines-for-students)
- [ ] The app doesn't work or has console errors. (**-20**)
- [ ] ESLint warnings or errors are present. (**-15**)
- [ ] Using the `Any` type. (**-20**)
- [ ] Mandatory flag `strict: true` is not set in the TypeScript configuration file. (**-10**)
- [ ] The ESLint configuration file does not include the `no-explicit-any` rule. (**-10**)
- [ ] Failure to meet the [requirements](https://docs.rs.school/#/en/pull-request-review-process?id=pull-request-requirements-pr) when creating a `Pull Request`. (**-10**)
- [ ] Non-compliance with commit history and commit message [guidelines](https://docs.rs.school/#/en/git-convention?id=commit-requirements). (**-10**)

### Useful links

https://www.typescriptlang.org/docs/home.html </br>
https://www.typescriptlang.org/docs/handbook/basic-types.html </br>
https://www.typescriptlang.org/play/index.html </br>
https://angular.dev/tools/cli </br>
https://angular.dev/cli </br>
[Angular 18 Tutorial](https://angular.dev/tutorials/learn-angular) </br>
[Tour of Heroes Tutorial](https://v17.angular.io/tutorial/tour-of-heroes/toh-pt1)

NB Before the start of the first task - you have to create your private school repository in the Dashboard of rs-app https://app.rs.school/course/student/dashboard by clicking on the link in 'Your repository' block, then you perform all the tasks there, unless specified otherwise.
