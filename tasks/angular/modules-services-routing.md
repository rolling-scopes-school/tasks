# YouTube client app

[Figma mockup](https://www.figma.com/file/tS3Zqk138yXUmRxSWKDv4r/YouTube-client?node-id=0%3A1)

## Angular: Modules, Services, Routing Task

The goal of this task is to implement new pages using modules, services, and routing features. After finishing, your app should include the following pages

- Login page. [Mockup (JPG)](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/login.jpg)
- 404 page. [Mockup (JPG)](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/404.jpg)
- Main page (which is implemented before). [Mockup (JPG)](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/main.jpg)
- Detailed information page. [Mockup (JPG)](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/details-page.jpg)

### Task requirements

To continue with the YouTube app, some structural refactoring is required.
First, your project can be reorganized into the following modules (final decision is on your mentor on how many modules to create if you're following standalone approach):

- **CoreModule:** This module is designated for global layout components such as Header and Footer, along with global services. It needs to be integrated within the **AppModule**
- **YoutubeModule:** This is a feature module for YouTube functionalities. It should contain the main page (previously implemented), the **Detailed Information Page**, and related models, services, etc.
- **AuthModule:** This module will contain the login page, login service, and corresponding components.
- **SharedModule (optional):** If implemented, this module should consist of shared components, directives, and pipes. It can be imported into each feature module as needed.

#### Important notes

- The **CoreModule** should be imported only **ONCE** into the AppModule to avoid any re-imports.
- **app.component** should **NOT** contain any logic at this stage of development.
- The **SharedModule**, if implemented, should **NOT** include services.

#### Project structure and technical requirements

The project structure can be organized in the following way:

```
    app
    ├── core
    │   ├── components
    │   ├── pages
    │   ├── services
    │   ├── guards
    ├── shared
    │   ├── components
    │   ├── directives
    │   ├── models
    │   ├── pipes
    ├── youtube
    │   ├── components
    │   ├── directives
    │   ├── models
    │   ├── pages
    │   ├── pipes
    │   ├── services
    ├── auth
    │   ├── components
    │   ├── models
    │   ├── pages
    │   ├── services
    ├── app.component.html
    ├── app.component.scss
    ├── app.component.ts
    ├── app.component.spec.ts
    ├── app.module.ts
```

All the feature modules (**YouTubeModule**, **AuthModule**) must be lazy-loaded which means that they are going to be imported by using routing features rather than the direct import into a module.

Pages directory contains components that represent individual pages (**Login page**, **Main page**, **Detailed information page**, etc) and used in the router configuration.

#### Functional requirements

- **404 page**
  - If the user entered an incorrect URL which is missing in the router configuration, the app should redirect him to the 404 page
- **Login page**
  - When the user isn't logged in, the app should prevent him/her from navigating to any pages other than the login page. A router guard would be helpful to implement such behavior.
  - There’s no user validation at this stage. You can enter arbitrary credentials and invoke login using an appropriate service.
  - Create a login service to enable the required login functionality.
  - Once the user has submitted the form, an appropriate method should be called in the login service that saves a fake auth token in _localStorage_. Then, the user should be redirected to the **Main page**. If the user gets logged out, he/she should be redirected to the initial login page and the auth token should be deleted from _localStorage_.
  - The login button in the Header component could remain inactive for now, because implementing its functionality requires some RxJS-based features (we’ll deal with it in the upcoming lesson and corresponding task). In order to implement the logout functionality, you can create a separate button that calls the logout method of the login service.
- **Main page**
  - Move the state and its methods from the Board component to a dedicated service.
  - By clicking the _More_ button, the **Detailed information** page should appear
- **Detailed information page**
  - Should contain information about the selected video.
  - To determine which video is selected, pass its id as a route param

#### Optional task (without points)

- Develop two logger services to handle logging differently for development and production modes. Use the logger service to log the message in the console after the user is logged in
  - DevLoggerService: This service should log messages with a [DEV] prefix. Example: _[DEV]: App is running in the development mode_
  - ProdLoggerService: This service should log messages with a [PROD] prefix. Example: _[PROD]: App is running in the production mode_
- You could place this services in the **CoreModule**
- For better implementetion you could create an abstract class LoggerService with a method logMessage that takes in a message and logs it. Both DevLoggerService and ProdLoggerService should extend this abstract class, providing their own prefix values.
- Provide one of the logger services for the entire app based on the mode it's running in.

_Note: You could use the isDevMode() function from Angular to check this. To check the implementation in the prod mode you can use **ng serve --configuration production** command_

#### Evaluation criteria

Maximum score - **100**

- [ ] The **404 page** and redirection logic is implemented (**+15**)
- [ ] The **Login page** functionality with necessary rules is implemented (**+30**)
- [ ] The **Detailed information page** is implemented (**+20**)
- [ ] The _app.component_ doesn't include any logic and used only for markup (**+15**)
- [ ] At least two services (**Login service** and **Youtube service**) are implemented (**+20**)

Fines

- [ ] Failure to submit on time may lead to points lose according to the [Deadlines for Students requirements](https://docs.app.rs.school/#/platform/pull-request-review-process?id=deadlines-for-students)
- [ ] The app has wrong project structure (**-20**)
- [ ] The app doesn't work or has console errors (**-20**)
- [ ] ESLint warnings or errors are present (**-15**)
- [ ] Using the `Any` type. (**-20**)
- [ ] Mandatory flags `noImplicitAny: true` and `strict: true` are not set in the TypeScript configuration file. (**-10**)
- [ ] The ESLint configuration file does not include the `no-explicit-any` rule. (**-10**)
- [ ] Failure to meet the [requirements](https://docs.rs.school/#/en/pull-request-review-process?id=pull-request-requirements-pr) when creating a `Pull Request`. (**-10**)
- [ ] Non-compliance with commit history and commit message [guidelines](https://docs.rs.school/#/en/git-convention?id=commit-requirements). (**-10**)

### Useful links

[Angular 18 Tutorial](https://angular.dev/tutorials/learn-angular)

[Tour of Heroes Tutorial](https://angular.io/tutorial/tour-of-heroes/toh-pt4)

[Importing and using components](https://angular.dev/guide/components/importing)
[NgModules](https://angular.dev/guide/ngmodules)
[NgModule FAQ](https://angular.dev/guide/ngmodules/faq)
https://angular.io/guide/architecture-services
[Dependency injection in Angular](https://angular.dev/guide/di)
[Configuring dependency providers](https://angular.dev/guide/di/dependency-injection-providers)
[DI in action](https://angular.dev/guide/di/di-in-action)
[Common Routing Tasks](https://angular.dev/guide/routing/common-router-tasks)
[api Router](https://angular.dev/api#router)
[api RouterLinkActive](https://angular.dev/api/router/RouterLinkActive)
[Lazy loading](https://angular.dev/guide/ngmodules/lazy-loading)

https://www.freelancermap.com/blog/using-forroot-and-forchild-to-configure-modules-in-angular/
