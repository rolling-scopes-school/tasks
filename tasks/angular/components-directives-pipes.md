
# YouTube client app

[Figma mockup](https://www.figma.com/file/tS3Zqk138yXUmRxSWKDv4r/YouTube-client?node-id=0%3A1)

## Angular. Components. Directives & Pipes task

### Task requirements
The main goal of this task is to implement the main page of the YouTube client app.
You are to enrich previously generated components with necessary functionality and markup.

You can use any UI frameworks/libraries to simplify (facilitate) the creation of your markup. It's recommended to use Angular Material as it’s fully integrated with Angular.

**[YouTube client. Main page](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/main.jpg)**

#### Components structure
- Header
    - Logo
    - Search input with submit button
    - Settings button
    - Login information block
- Filtering criteria block
    - Buttons that represent each sort criterion
    - Input that is related to the "by word or sentence" criterion which is used for filtering results
- Search results block
    - Search result item
        - Video thumbnail
        - Views count
        - Likes count
        - Dislikes count
        - Comments count
        - Video title
        - "More button"

#### Functional requirements
- When user opens the app, only the **Header** section should be shown
- After submitting the search form, the **Search results block** appears.
- Show cards of videos populated with mocked data (use data from [response example](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/response.json) file). You can store the mocked data in the **Search results** component
    - The bottom border represents the publication date status. The following border colors should be used:
        - 🟥 if older than 6 months
        - 🟨 if between 1 and 6 months
        - 🟩 if between 7 days and 1 month
        - 🟦 if newer than 7 days
- By clicking the **Settings** button, the **Filtering criteria block** should be toggled on/off
    - It should be possible to sort search results by date or view count
    - Sorting should work in both ascending and descending directions of the values
    - Filter search results by the value that user types in the input

#### Evaluation criteria
Maximum score - **100**

- [ ] Main layout is implemented (**+10**)
- [ ] Fake search functionality is implemented: by submitting the form in the **Header** component, search results are shown (**+20**)
- [ ] The **Search result item** component contains all the necessary data (**+10**)
- [ ] The **Filtering criteria block** toggle functionality is implemented (**+5**)
- [ ] The colored border under the **Search result item** is implemented using a `Directive` (**+15**)
- [ ] Search result sorting is implemented (both ascending and descending directions) (**+15**)
- [ ] Search result filtering by key words is implemented using a `Pipe` (**+15**)
- [ ] Custom Button component is implemented and used across the application. The component utilizes [Content projection](https://angular.io/guide/content-projection) to display the button text (**+5**)
- [ ] One of the components is implemented as [standalone](https://angular.io/guide/standalone-components). Strong recommendation to choose a simple presentational component and not a "Smart" container component for this task (**+5**)

Fines
- [ ] Failure to submit on time may lead to points lose according to the [Deadlines for Students requirements](https://docs.app.rs.school/#/platform/pull-request-review-process?id=deadlines-for-students)
- [ ] The app has wrong components structure (**-20**)
- [ ] The app doesn't work or has console errors (**-30**)
- [ ] ESLint warnings or errors are present (**-15**)
- [ ] Using the `Any` type. (**-20**)
- [ ] Mandatory flags `noImplicitAny: true` and `strict: true` are not set in the TypeScript configuration file. (**-10**)
- [ ] The ESLint configuration file does not include the `no-explicit-any` rule. (**-10**)
- [ ] Failure to meet the [requirements](https://docs.rs.school/#/en/pull-request-review-process?id=pull-request-requirements-pr) when creating a `Pull Request`. (**-10**)
- [ ] Non-compliance with commit history and commit message [guidelines](https://docs.rs.school/#/en/git-convention?id=commit-requirements). (**-10**)

### Useful links
https://angular.io/tutorial

https://angular.io/tutorial/tour-of-heroes/toh-pt1

https://angular.io/tutorial/tour-of-heroes/toh-pt2

https://angular.io/tutorial/tour-of-heroes/toh-pt3

https://angular.io/guide/architecture-components

https://angular.io/guide/displaying-data

https://angular.io/guide/template-syntax

https://angular.io/guide/lifecycle-hooks

https://angular.io/guide/component-interaction

https://angular.io/guide/cheatsheet

https://angular.io/guide/attribute-directives

https://angular.io/guide/structural-directives

https://angular.io/guide/pipes

https://angular.io/api/core/Directive

https://angular.io/api/core/Pipe

https://github.com/pavelrazuvalau/angular-lectures/tree/master/angular-components

https://github.com/NataliaLoginova/angular-course/tree/main/angular-directives-pipes/src

https://medium.com/javascript-everyday/encapsulate-common-behaviors-with-the-aid-of-angular-directives-223ace0cd0ca

https://levelup.gitconnected.com/the-power-of-angular-directives-a-comprehensive-guide-f9f929404b6b

https://levelup.gitconnected.com/what-is-a-pipe-in-angular-how-do-you-use-angular-pipes-650d7ff6d103

https://towardsdev.com/the-unknown-angular-built-in-pipes-you-need-to-start-using-a8fb1dec2ac1
