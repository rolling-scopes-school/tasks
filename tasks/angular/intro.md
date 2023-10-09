
# YouTube client app
During the Angular course, you are to implement the YouTube client app. You can refer to the [Figma mockup](https://www.figma.com/file/tS3Zqk138yXUmRxSWKDv4r/YouTube-client?node-id=0%3A1)

## Angular. Intro task 

### Getting started
- Install *@angular/cli* package. It's highly recommended to use *SCSS* as the default stylesheet
- Use ng-cli to create a new project
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
- [ ] TypeScript is configured, the `noImplicitAny: true` and `strict: true`. (**+10**)
- [ ] All the necessary components were created. (**+15**)
- [ ] All the necessary models were created. Search result list and search item components contain declarations of necessary fields. (**+20**)

Fines
- [ ] Failure to submit on time may lead to points lose according to the [Deadlines for Students requirements].(https://docs.app.rs.school/#/platform/pull-request-review-process?id=deadlines-for-students)
- [ ] The app doesn't work or has console errors. (**-20**)
- [ ] ESLint warnings or errors are present. (**-15**)
- [ ] Using the `Any` type. (**-20**)
- [ ] Mandatory flags `noImplicitAny: true` and `strict: true` are not set in the TypeScript configuration file. (**-10**)
- [ ] The ESLint configuration file does not include the `no-explicit-any` rule. (**-10**)

### Useful links
https://www.typescriptlang.org/docs/home.html
https://www.typescriptlang.org/docs/handbook/basic-types.html
https://www.typescriptlang.org/play/index.html
https://cli.angular.ios
https://angular.io/cli
https://angular.io/tutorial
