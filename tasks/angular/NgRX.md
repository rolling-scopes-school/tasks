

# YouTube Client App (Admin page)

[Figma mockup](https://www.figma.com/file/tS3Zqk138yXUmRxSWKDv4r/YouTube-client?node-id=0%3A1)

## Angular. NgRX
The objective of the task is to implement `Admin page`. So, your entire app will contain the following pages:
- Login page
- 404 page
- Main page
- Detailed information page
- Admin page

Here you can find an example: [Admin page reference](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/admin.jpg).

### Task

1. Connect the NgRX library and create a storage (state).
2. Create Admin page that allow user to add custom cards.

#### Requirements

1. NgRX storage must contain:
    - data about custom cards;
    - data about video from API YouTube.

2. NgRX storage must only be changed  in the following cases:
    - new response from the YouTube API is received;
    - new card is added using Admin page.

3. Custom cards must contain the following information:
    - title
    - description
    - link to the image
    - link to video
    - creation date (current date)

4. Information about custom cards must be saved until your application is reloaded even if you perform requests to YouTube API.

#### Project structure
The project structure must be organized in the following way:

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
    ├── redux
    │   ├── actions
    │   ├── effects
    │   ├── reducers
    │   ├── selectors
    │   ├── state.models.ts
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

#### Evaluation criteria
Maximum points - **100**

- [ ] **Admin page** is implemented (**+10**)
- [ ] The **Admin page** functionality with necessary rules is implemented (**+10**)
- [ ] NgRX library is used and storage is created (**+20**)
- [ ] Custom cards are saved in the store (**+30**)
- [ ] Saving data received from the YouTube API is implemented using NgRX library (**+30**)

Fines
- [ ] Failure to submit on time may lead to points lose according to the [Deadlines for Students requirements](https://docs.app.rs.school/#/platform/pull-request-review-process?id=deadlines-for-students)
- [ ] The app has wrong project structure (**-20**)
- [ ] The app doesn't work or has console errors (**-20**)
- [ ] ESLint warnings or errors are present (**-15**)

### Useful links
https://ngrx.io  
https://ngrx.io/guide/store/configuration/runtime-checks  
https://ngrx.io/guide/store/actions  
https://ngrx.io/guide/store/reducers  
https://ngrx.io/guide/effects  