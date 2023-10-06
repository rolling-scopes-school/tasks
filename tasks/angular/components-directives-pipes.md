
# YouTube client app

[Figma mockup](https://www.figma.com/file/tS3Zqk138yXUmRxSWKDv4r/YouTube-client?node-id=0%3A1)

## Angular. Components. Directives & Pipes task

### Task requirements
The main goal of this task is to implement the main page of the YouTube client app.
You are to enrich previously generated components with necessary functionality and markup.

You can use any UI frameworks/libraries to simplify (facilitate) the creation of your markup. It's recommended to use Angular Material as it’s fully integrated with Angular.

**[YouTube client. Main page JPG](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/main.jpg)**

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
- Once a user is entered the app, The only **Header** component should be shown.
For now, you can enter whatever value which won't influence your search result.
Please note that the **Sorting criteria block** should be hidden
- By submitting the search form, the **Search results block** appears.
- Using the [response example](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/response.json), render cards with predefined data
    You can store the mocked data in the **Search results** component
    - The bottom border represents the publication date status. Create a directive to change background color of the border
        - If older than 6 months – Red
        - If from a month up to 6 months – Yellow
        - If from seven days up to a month – Green
        - If younger than 7 days – Blue
- By clicking on the **Settings button**, the **Filtering criteria block** should be toggled
    - It should be possible to sort search results by date or count of views
    - Sorting should work both in the direction of decreasing values and in the direction of increasing values
    - Using a pipe, filter search results by value that a user types in the input

#### Evaluation criteria
Maximum points - **100**

- [ ] Main layout is implemented (**+10**)
- [ ] Implemented a fake search functionality: by submitting the form on the **Header** component, search results are shown (**+20**)
- [ ] The **Search result item** component contains all the necessary data (**+10**)
- [ ] The **Filtering criteria block** toggle functionality is implemented (**+5**)
- [ ] The colorful border under the **Search result item** is implemented (**+15**)
- [ ] Search result sorting is implemented (Should work both in the direction of decreasing values, and in the direction of increasing values) (**+20**)
- [ ] Search result filtering by key words is implemented (**+20**)

Fines
- [ ] Failure to submit on time may lead to points lose according to the [Deadlines for Students requirements](https://docs.app.rs.school/#/platform/pull-request-review-process?id=deadlines-for-students)
- [ ] The app has wrong components structure (**-20**)
- [ ] The app doesn't work or has console errors (**-30**)
- [ ] ESLint warnings or errors are present (**-15**)

### Useful links
https://angular.io/tutorial

https://angular.io/tutorial/toh-pt1

https://angular.io/tutorial/toh-pt2

https://angular.io/tutorial/toh-pt3

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
