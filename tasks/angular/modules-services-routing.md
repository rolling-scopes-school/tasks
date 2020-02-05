| Deadline         |
|------------------|
| 23:59 27.02.2020 |

# YouTube client app

[Figma mockup](https://www.figma.com/file/tS3Zqk138yXUmRxSWKDv4r/YouTube-client?node-id=0%3A1)

## Angular. Modules & Services. Routing task
The objective of the task is to implement new pages using modules, services and routing features. So, your app will contain the following pages:
- Login page
- 404 page
- Main page (which is implemented before)
- Detailed information page

**[YouTube client. Login page JPG](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/login.jpg)**

**[YouTube client. 404 page JPG](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/404.jpg)**

**[YouTube client. Main page JPG](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/main.jpg)**

**[YouTube client. Detailed information page JPG](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/details-page.jpg)**

### Task requirements
To continue with the YouTube app, some structural refactoring is required.
First, your project should be reorganized into the following modules:
- **CoreModule** (global layout components: Header, Footer, global services). Should be imported **ONCE** in **AppModule**
- **YoutubeModule** (YouTube feature module. Includes the main page implemented before, the **Detailed information page**, models, services, etc.)
- **AuthModule** (login page, login service, etc.)
- (optionally) **SharedModule** for shared components, directives, and pipes. Should **NOT** include services. It could be imported into each feature module.

Please bear in mind that the *app.component* shouldn’t contain any logic at this stage.

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
    - Once the user has submitted the form, an appropriate method should be called in the login service that saves a fake auth token in *localStorage*. Then, the user should be redirected to the **Main page**. If the user gets logged out, he/she should be redirected to the initial login page and the auth token should be deleted from *localStorage*.
    - The login button in the Header component could remain inactive for now, because implementing its functionality requires some RxJS-based features (we’ll deal with it in the upcoming lesson and corresponding task). In order to implement the logout functionality, you can create a separate button that calls the logout method of the login service.
- **Main page**
    - Move the state and its methods from the Board component to a dedicated service.
    - By clicking the *More* button, the **Detailed information** page should appear
- **Detailed information page**
    - Should contain information about the selected video.
    - To determine which video is selected, pass its id as a route param

#### Evaluation criteria
Maximum points - **100**

- [ ] The **404 page** and redirection logic is implemented (**+15**)
- [ ] The **Login page** functionality with necessary rules is implemented (**+30**)
- [ ] The **Detailed information page** is implemented (**+20**)
- [ ] The *app.component* doesn't include any logic and used only for markup (**+15**)
- [ ] At least two services (**Login service** and **Youtube service**) are implemented (**+20**)

Fines
- [ ] Failure to submit on time may lead to points lose according to the [Stage #2 requirements](https://docs.rs.school/#/stage2?id=%d0%94%d0%b5%d0%b4%d0%bb%d0%b0%d0%b9%d0%bd%d1%8b)
- [ ] The app has wrong project structure (**-20**)
- [ ] The app doesn't work or has console errors (**-20**)
- [ ] TSLint warnings or errors are present (**-15**)

### Useful links
https://angular.io/tutorial/toh-pt4

https://angular.io/tutorial/toh-pt5

https://angular.io/guide/architecture-modules

https://angular.io/guide/ngmodules

https://angular.io/guide/ngmodule-faq

https://angular.io/guide/architecture-services

https://angular.io/guide/dependency-injection

https://angular.io/guide/dependency-injection-providers

https://angular.io/guide/dependency-injection-in-action

https://www.freelancermap.com/freelancer-tips/12255-forroot-forchild-angular

https://angular.io/guide/router

https://angular.io/api/router

https://angular.io/api/router/RouterLinkActive
