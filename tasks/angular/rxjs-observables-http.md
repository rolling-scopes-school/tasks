# YouTube client app

[Figma mockup](https://www.figma.com/file/tS3Zqk138yXUmRxSWKDv4r/YouTube-client?node-id=0%3A1)

## Angular. RxJS & Observables. HTTP task

In the scope of the task, you are to implement some features using RxJS. In addition, the goal is to start using real
YouTube API for requesting data in the app.

### Task requirements

#### Samples of YouTube REST API requests:

    https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=js
    https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=nq4aU9gmZQk,REu2BcnlD34,qbPTdW7KgOg&part=snippet,statistics

- How to get an API key - [video](https://www.youtube.com/watch?v=JbWnRhHfTDA)
- You can find a more detailed documentation [here](https://developers.google.com/youtube/v3)

#### Functional requirements

- **Global search functionality**
  - remove the _Search_ button. Now we're going to invoke the search logic once the user types something
  - in order not to spam our API, create a new Observable in your component and emit changes until the user enters at
    least 3 characters
  - add debounce functionality to prevent API calls from being performed if the user is still typing.
- **Login block**
  - create a new Observable in the **Login service** that will emit a boolean which indicates whether the user is
    logged in or not.
  - show the "Login" and "Logout" button if the user is logged out / logged in
- **HTTP requests and YouTube API**
  - remove the mocked response from your project and use a service that is created in the **YouTube module**.
  - use the HTTP interceptor to shorten request URLs in your services and pass your access token.

#### Evaluation criteria

Maximum score - **100**

- [ ] Search input debounce is implemented (**+15**)
- [ ] Login block reflects the current login state (**+15**)
- [ ] Search functionality is integrated with the YouTube API (**+30**)
- [ ] Detailed information page uses a call to the YouTube API (**+30**)
- [ ] HTTP interceptor is used to pass the token and the base API URL (**+10**)

Fines

- [ ] Failure to submit on time may lead to points lose according to
      the [Deadlines for Students requirements](https://docs.app.rs.school/#/platform/pull-request-review-process?id=deadlines-for-students)
- [ ] The app still contains mocked data (**-20**)
- [ ] The app doesn't work or has console errors (**-20**)
- [ ] ESLint warnings or errors are present (**-15**)
- [ ] Using the `Any` type. (**-20**)
- [ ] Mandatory flags `noImplicitAny: true` and `strict: true` are not set in the TypeScript configuration file. (**-10**)
- [ ] The ESLint configuration file does not include the `no-explicit-any` rule. (**-10**)
- [ ] Failure to meet the [requirements](https://docs.rs.school/#/en/pull-request-review-process?id=pull-request-requirements-pr) when creating a `Pull Request`. (**-10**)
- [ ] Non-compliance with commit history and commit message [guidelines](https://docs.rs.school/#/en/git-convention?id=commit-requirements). (**-10**)

### Useful links

https://rxjs-dev.firebaseapp.com/api

http://rxmarbles.com/

https://www.learnrxjs.io/

https://www.npmjs.com/package/rxjs

https://angular.io/tutorial/toh-pt6

https://angular.dev/guide/http

https://angular.dev/api#common-http

https://angular.dev/api/common/http/HttpClient

https://angular.dev/api/common/http/HttpResponse

https://angular.dev/api/common/http/HttpHeaders

https://angular.dev/api/common/http/HttpParams

https://pazel.dev/how-to-keep-your-secrets-from-your-source-code-in-an-angular-project
