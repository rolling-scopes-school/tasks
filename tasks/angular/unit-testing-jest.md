# YouTube Client App

## Angular. Unit testing with Jest.

In this coding task, you will attempt to integrate Jest into the Angular application and develop unit tests for services and components.

#### Task scope

- Migrate Angular application from Karma and Jasmine to Jest.
- Write unit test cases for services.
- Write unit test cases for components.

#### Evaluation criteria

Maximum score - **100**

- [ ] Uninstall Karma and Jasmine packages from the Angular project. (**+5**)
- [ ] Remove the 'test' object from the angular.json file. (**+5**)
- [ ] Install Jest with types and preset for Angular. (**+5**)
- [ ] Create setup-jest.ts file in root folder. (**+5**)
- [ ] Create jest.config file. (**+5**)
- [ ] Add jest configuration on package.json. (**+5**)
- [ ] Create unit test cases (tests, not test suites), with each case valued at 2 points:
  - [ ] 10 unit test cases for services (**+20**)
  - [ ] 10 unit test cases for components (**+20**)
  - [ ] 10 unit test cases for NGRX store (**+20**)
- [ ] Add screenshots of the coverage from the console and from the browser, of all your unit tests in the Pull Request. (**+10**)

Fines

- [ ] Failure to submit on time may lead to points lose according to the [Deadlines for Students requirements].(https://docs.app.rs.school/#/platform/pull-request-review-process?id=deadlines-for-students)
- [ ] The app doesn't work or has console errors. (**-20**)
- [ ] ESLint warnings or errors are present. (**-15**)
- [ ] For each unit test case that fails. (**-20**)
- [ ] Didn't migrate the application completely from Karma and Jasmine to Jest. (**-20**)
- [ ] Using the `Any` type. (**-20**)
- [ ] Mandatory flags `noImplicitAny: true` and `strict: true` are not set in the TypeScript configuration file. (**-10**)
- [ ] The ESLint configuration file does not include the `no-explicit-any` rule. (**-10**)
- [ ] Failure to meet the [requirements](https://docs.rs.school/#/en/pull-request-review-process?id=pull-request-requirements-pr) when creating a `Pull Request`. (**-10**)
- [ ] Non-compliance with commit history and commit message [guidelines](https://docs.rs.school/#/en/git-convention?id=commit-requirements). (**-10**)

### Useful links

- [Angular unit testing with Jest 2023](https://medium.com/@megha.d.parmar2018/angular-unit-testing-with-jest-2023-2676faa2e564)
