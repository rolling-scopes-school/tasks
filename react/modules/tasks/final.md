# REST/GraphiQL Client

You will be working on creating a light-weight versions of Postman and GrqphiQL combined in one app.
PLEASE, READ THE TASK DESCRIPTION CAREFULLY UP TO THE END BEFORE STARTING THE TASK

## Theoretical Notes

[**Postman**](https://www.postman.com/) is a rich platorm for using (and building) apis. However you can use any REST client as a reference.
It should support method selection, url, headers.
**GraphiQL** is a playground/IDE for graphQL requests. You can use [this project](https://www.npmjs.com/package/@graphiql/react) as an example.

Additional parts which your app will also include:

- Authorization and authentication capabilities, ensuring access to the tool is restricted to authorized users.
- History section, which will redirect user to a specific section for a previously executed requests.

## Building a team

- you should work in a team of 3 members
- you should select a team lead, who will be coordinating the development

## Application Prototype

You can use existing solutions like (https://graphql.github.io/swapi-graphql) and [Thunder Client for VSCode](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) as a source of inspiration.
However, pay attention that we leave the final decision about set of tools and design on you to not limit your possibilities and imagination.
Design, prototype, as well as implementation of the application, are up to you.

## Backend / API

- Application doesn't require a backend.
- Application should support any open, user-specified API (either RESTfull or GraphQL).
- You will use either NextJS or Remix to make calls to the endpoint through the server. So this is how you will avoid issues related to [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

## Application structure

Your app must contain:

1. Welcome page
2. User registration/authentication.
3. RESTfull client, which includes:
   - method selector
   - text input for the endpoint url
   - request editor
   - headers editor
   - response section
4. GraphiQL client, which includes:
   - text input for the endpoint url
   - request editor
   - variables editor
   - headers editor
   - text input for the endpoint which is used for getting the documentation (sdl)
   - documentation explorer
   - response section

## Repository requirements

- teamlead should create private repo in GitHub and invite other members
- repo name **graphiql-app**. Branch name for develop - **develop**, **main** branch is empty and contains only README.md
- the commit history should display the application development process. [Commit requirements](https://docs.rs.school/#/git-convention)
- the demo version of the application should be deployed on `gh-pages`, `netlify`, `heroku`, or another similar service
- after completing the task, create a pull request from **develop** to **main** branch. **Merging a Pull Request is not required**
- in case you will use proxy-service you need to include instructions on how to run it locally
- you should make your repo public after the deadline

## Workflow/Branching strategy

You are free to choose your own way of developing the project and the repository. Here are links to a description and analysis of popular practices.

[Patterns for Managing Source Code Branches](https://martinfowler.com/articles/branching-patterns.html)
[Gitflow Workflow](https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow)
[GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
[ThreeFlow](https://habr.com/ru/company/infopulse/blog/345826/)
[GitLab Flow VS Git flow VS GitHub flow](https://yapro.ru/article/6172)

## Technical requirements

- semantic layout
- the application should work at least in the latest version of the Google Chrome browser
- private routes, 404, error boundary
- using jQuery in the main application code is not allowed (might be a part of other libraries, so pay attention on what you are using)
- you MUST use React 18 and above
- you MUST use either NextJS or Remix with Vite
- you might use any css frameworks, any js/components libs you want, html and css pre-processors
- you MUST use Typescript
- tests should be present on the project (**test** command in the package.json ), and test coverage should be reported when running the command; test coverage should be at least 80%
- Eslint, prettier (**lint** and **prettier-fix** commands in the package.json)
- Husky hooks (run **lint** on pre-commit, **test** on pre-push)
- ❗ it is forbidden to copy the code of other students or [GraphiQL](https://www.npmjs.com/package/@graphiql/react). This ban applies to html, css, and js code. You can use small code snippets from Stack Overflow, and other self-found sources on the Internet, except GitHub repositories of course students.

## Application design requirements

- the application quality is characterized by the elaboration of details, attention to typography (no more than three fonts per page, font size of at least 14 px, optimal [font and background contrast](https://snook.ca/technical/colour_contrast/colour.html)), carefully selected content
- adaptive layout, the minimum page width of the application should be 320px
- interactivity of elements users can interact with; element hover effects; usage of different styles for the active and inactive state of the element; smooth animations
- the unity of styles of all pages of the application - the same fonts, button styles, indents, and the same elements on all pages of the application have the same appearance and layout. Item colors and background images may vary. In this case, colors should be from the same palette, and background images from the same collection.

## Description of function blocks

### General requirements

- Errors (Not found route, unhandled rejection, etc) should be displayed in a user-friendly format (toast, pop-up, or something like that - up to your decision).
- Internationalization (i18n) - at least 2 languages. User should be able to change the language by clicking on the toggler/select in the header.

#### Error handling

Application should gracefully handle errors and show meaningfull messages to the user.
Please, distiungush between errors on the application level and the valid HTTP error code.
CORS issues or network timeouts should be shown as errors, whereas 4xx and 5xx HTTP response codes should be displayed in the response section.

### Welcome page

- If the user is not authorized, the page should contain a link to Sign In / Sign Up page.
- If the user is authorized, the page should contain links to the RESTfull client, GraphiQL client, History routes.

#### Welcome page template. User is not signed in

```
+----------------------------------------------------+
|                      Header                        |
|  +---------------------------------------------+   |
|  | [Logo] | Language Toggle | [Sign In]        |   |
|  +---------------------------------------------+   |
+----------------------------------------------------+
|                                                    |
|   +--------------------------------------------+   |
|   |                                            |   |
|   |                Welcome!                    |   |
|   |                                            |   |
|   | [Sign In] [Sign Up]                        |   |
|   |                                            |   |
|   +--------------------------------------------+   |
|                                                    |
+----------------------------------------------------+
|                      Footer                        |
|    [GitHub Link] | Year | [Course Logo]            |
+----------------------------------------------------+
```

#### Welcome page template. User is signed in

```
+----------------------------------------------------+
|                      Header                        |
|  +---------------------------------------------+   |
|  | [Logo] | Language Toggle | [Sign Out]       |   |
|  +---------------------------------------------+   |
+----------------------------------------------------+
|                                                    |
|   +--------------------------------------------+   |
|   |                                            |   |
|   |         Welcome Back, [Username]!          |   |
|   |                                            |   |
|   +--------------------------------------------+   |
|                                                    |
|  +--------------------------------------------+    |
|  | REST Client | GraphiQL Client | History    |    |
|  +--------------------------------------------+    |
+----------------------------------------------------+
|                      Footer                        |
|    [GitHub Link] | Year | [Course Logo]            |
+----------------------------------------------------+
```

### Header

- The header should be sticky. The moment it becomes sticky (if there is a scroll on a page) should be animated: color can be changed or its height can become smaller. [Animated sticky header](https://www.youtube.com/watch?v=hR8UW5CvYgw)
- Link to Welcome page
- Control that allows user to switch the language
- Sign Out button - signs user out

### Footer

- Footer should contain a link to the authors' GitHub, the year the application was created, [course logo](https://rs.school/images/rs_school_js.svg) with [link to the course](https://rs.school/react/).
- Footer is displayed on all pages of the application.

### Sign In / Sign Up

- For the authentication you should use Firebase with the email/password sign-in method. Please, check this [article](https://blog.logrocket.com/user-authentication-firebase-react-apps/)
- Client-side validation should be implemented (email and password strength - minimum 8 symbols, at least one letter, one digit, one special character, Unicode passwords must be supported)
- Upon successful login, the user should be redirected to the RESTfull client
- If the user has been logged in already and tries to reach these routes, they should be redirected to the Main page

#### Sign up / Sign in template

```
+----------------------------------------------------+
|                      Header                        |
|  +---------------------------------------------+   |
|  | [Logo] | Language Toggle | [Sign Out] |     |   |
|  +---------------------------------------------+   |
+----------------------------------------------------+
|                                                    |
|   +--------------------------------------------+   |
|   |                                            |   |
|   |                Sign In / Sign Up           |   |
|   |                                            |   |
|   | [Email Input]                              |   |
|   | [Password Input]                           |   |
|   | [Submit Button]                            |   |
|   +--------------------------------------------+   |
|                                                    |
+----------------------------------------------------+
|                      Footer                        |
|    [GitHub Link] | Year | [Course Logo]            |
+----------------------------------------------------+

```

### RESTfull client

- This route should be private.
- Header should be visible.
- Method selector. Selected method should be reflected in the application url (e.g. http://restclient.com/GET), for more details, please, check the next section.
- Endpoint (url) input.
- Request body editor / JSON viewer. It will be used in the response section in read-only mode. Should support prettifying. Please, mind that request body editor should support at least JSON and the plain text. Support of the XML syntax is not mandatory.
- Variables editor section.
- Headers editor section.
- Response section. Should be read only. Should contain information about HTTP response code and the response status.

#### RESTfull client template

```
+----------------------------------------------------+
|                      Header                        |
|  +----------------------------------------------+  |
|  | [Logo] | Language Toggle | [Sign Out] |      |  |
|  +----------------------------------------------+  |
+----------------------------------------------------+
|                                                    |
|   +------------------- REST Client -------------+  |
|   | +-------------+ +--------------------------+ | |
|   | | Method      | | Endpoint URL             | | |
|   | +-------------+ +--------------------------+ | |
|   | Headers: [Add Header Button]                 | |
|   | +------------------------------------------+ | |
|   | | Header Key | Header Value                | | |
|   | +------------------------------------------+ | |
|   | Body: [JSON/Text Editor]                     | |
|   +---------------------------------------------+  |
|                                                    |
|   +----------------- Response -------------------+ |
|   | Status: [HTTP Status Code]                   | |
|   | Body: [Read-Only JSON Viewer]                | |
|   +---------------------------------------------+  |
+----------------------------------------------------+
|                      Footer                        |
|    [GitHub Link] | Year | [Course Logo]            |
+----------------------------------------------------+

```

#### Routing on RESTfull client

Route URL will be comprised of selected method as a route params, request url encoded in base64 as a route param, request body (if applicable) as stringified json also encoded in base64 as another optional route param, and each presented header as a query param.
Let's say we want to make a GET request to the `https://jsonplaceholder.typicode.com/posts/1`:

```curl
curl https://jsonplaceholder.typicode.com/posts/1
```

So the url might look so:
`http://localhost:5137/GET/aHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLzE=`
And we you want to make a POST request to the same endpoint, e.g.:

```curl
curl -d '{"title":"fakeTitle","userId":1,"body":"fakeMessage"}' https://jsonplaceholder.typicode.com/posts
```

Headers, specified in the editor, should be provided as url query parameters (mind that you need to url encode headers values):
`http://localhost:5137/POST/aHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3Rz/eyJ0aXRsZSI6ImZha2VUaXRsZSIsInVzZXJJZCI6MSwiYm9keSI6ImZha2VNZXNzYWdlIn0=?Content-Type=application%2Fjson`

### GraphiQL

- This route should be private.
- Header should be visible.
- Endpoint (url) input.
- SDL endpoint (url) input which will be used for the documentation. By default will duplicate the value provided in the main url input, and will add "?sdl" to the end. User should be able to modify this url if the api uses another endpoint for the documentation.
- Query editor. The query editor should support prettifying. You CAN use one editor for GraphiQL and the RESTfull client, but mind the support of the GraphQL syntax.
- Response section / JSON viewer. JSON viewer should be read-only, it will be used in the response section. Should contain information about HTTP response code and the response status. You SHOULD reuse the one from the RESTfull client.
- Variables editor section. You CAN reuse the one from the RESTfull client.
- Headers editor section (If you are making a CORS request each added header should be supported on the backend, please, consider that). You CAN reuse the one from the RESTfull client.
- Documentation section, should be visible only when the app receives a successfull response with the schema definition from the API.

#### GraphiQL template

```
+----------------------------------------------------+
|                      Header                        |
|  +----------------------------------------------+  |
|  | [Logo] | Language Toggle | [Sign Out] |      |  |
|  +----------------------------------------------+  |
+----------------------------------------------------+
|                                                    |
|   +------------------ GraphiQL Client -----------+ |
|   | Endpoint URL: [URL Input]                    | |
|   | SDL URL: [URL Input]                         | |
|   | Headers: [Add Header Button]                 | |
|   | +-----------------------------------------+  | |
|   | | Header Key | Header Value               |  | |
|   | +-----------------------------------------+  | |
|   | Query: [GraphQL Query Editor]                | |
|   | Variables: [Variables Editor]                | |
|   +----------------------------------------------+ |
|                                                    |
|   +----------------- Response -------------------+ |
|   | Status: [HTTP Status Code]                   | |
|   | Body: [Read-Only JSON Viewer]                | |
|   +--------------------------------------------+   |
|   Documentation: [Visible if SDL Response Success] |
+----------------------------------------------------+
|                      Footer                        |
|    [GitHub Link] | Year | [Course Logo]            |
+----------------------------------------------------+
```

#### Routing on GraphiQL client

Similar to the RESTfull client, the request infromation should be provided via the url, with the only exception - all the GraphQL queries are POST queries, so to distinguish it from the usual REST queries, you should use GRAPHQL as a first route parameter:
`http://localhost:5137/GRAPHQL/{endpointUrlBase64encoded}/{bodyBase64encoded}?header1=header1value&header2=header2value...`

### History

- This route should be private.
- History section should display request using links, on clicking on the link, user should be navigated to the respective section (RESTfull client or GraphiQL).
- All the requests should be saved in the local storage on submit, history section should show requests sorted by the time of their execution.
- After navigating to the respective section, all the functional fields (url, method selector, headers, body, values, sdl url for the GraphQL query) should be restored. Please, mind this when saving the request in the local storage to ensure that all the required data will be saved.
- If there are no requests in the local storage, show message to the user, e.g. "You haven't executed any requests yet", "It's empty here. Try those options:" and give links to the RESTfull and to the GraphiQL clients.

#### History template. No requests

```
+----------------------------------------------------+
|                      Header                        |
|  +---------------------------------------------+   |
|  | [Logo] | Language Toggle | [Sign Out]       |   |
|  +---------------------------------------------+   |
+----------------------------------------------------+
|                                                    |
|   +--------------------------------------------+   |
|   |                                            |   |
|   |      You haven't executed any requests     |   |
|   |            It's empty here. Try:           |   |
|   |                                            |   |
|   |   [REST Client]    [GraphiQL Client]       |   |
|   |                                            |   |
|   +--------------------------------------------+   |
|                                                    |
+----------------------------------------------------+
|                      Footer                        |
|    [GitHub Link] | Year | [Course Logo]            |
+----------------------------------------------------+
```

#### History template with requests

```
+----------------------------------------------------+
|                      Header                        |
|  +---------------------------------------------+   |
|  | [Logo] | Language Toggle | [Sign Out]       |   |
|  +---------------------------------------------+   |
+----------------------------------------------------+
|                                                    |
|   +--------------------------------------------+   |
|   |               History Requests             |   |
|   +--------------------------------------------+   |
|                                                    |
|  +----------------------------------------------+  |
|  | [GET https://api.example.com/resource/1]     |  |
|  | [POST https://api.example.com/resource]      |  |
|  | [GRAPHQL https://graphql.example.com/query]  |  |
|  +----------------------------------------------+  |
|                                                    |
+----------------------------------------------------+
|                      Footer                        |
|    [GitHub Link] | Year | [Course Logo]            |
+----------------------------------------------------+
```

## How to submit tasks

- Link to pull request in rs app is submitted only by **team leader** ❗
- Make sure the pull request is available for review ❗. To do this, open the link that you submit in rs app in incognito browser mode.
- If the task is not submitted before the deadline, it will not be distributed during the cross-check and points will not be added to your score.

## Evaluation criteria

**Maximum available points for the task are 400**

It contains:

- maximum 400 for crosscheck
- maximum 50 for your involvement in a project. Those points will be assigned by the mentor for each student.

## Cross-check criteria

For the convenience of verification, it is **necessary** to record and post on YouTube a short (5-7 min) video for reviewers with an explanation of how each of the items listed in the evaluation criteria is implemented. Add a link to the video to the pull-request.
[How to evaluate tasks in Cross check](https://docs.rs.school/#/en/cross-check-flow). In the comments to the assessment, it is necessary to indicate which items are not fulfilled or partially fulfilled.

### Welcome route - max 50 points

- [ ] The welcome page should contain general information about the developers, project, and course. - **10 points**
- [ ] In the upper right corner there are 2 buttons: Sign In and Sign Up. - **10 points**
- [ ] If the login token is valid and unexpired, the Sign In and Sign Up buttons are replaced with the "Main Page" button. - **10 points**
- [ ] When the token expires - the user should be redirected to the "Welcome page" automatically. - **10 points**
- [ ] Pressing the Sign In / Sign up button redirects a user to the route with the Sign In / Sign up form. - **10 points**

### Sign In / Sign Up - max 50 points

- [ ] Buttons for Sign In / Sign Up / Sign Out are everywhere where they should be. - **10 points**
- [ ] Client-side validation is implemented. - **20 points**
- [ ] Upon successful login, the user is redirected to the Main page. - **10 points**
- [ ] If the user is already logged in and tries to reach these routes, they should be redirected to the Main page. - **10 points**

### RESTfull client - max 120 points

- [ ] Functional editor enabling query editing and prettifying, request body provided in the url as base64-encoded on focus out. - **40 points**
- [ ] Functional read-only response section, with information about HTTP status and the code. - **30 mpoints**
- [ ] Method selector, shows all the valid HTTP verbs, value is provided in the url on change. - **10 points**
- [ ] Input for the url, entered value is provided in base64-encoded way on change. - **15 points**
- [ ] Variables section that can shown or hidden, specified variables are included in the body. - **15 points**
- [ ] Headers section, value is provided in the url on header add/change. - **20 points**

### GraphiQL route - max 80 points

- [ ] Functional editor enabling query editing and prettifying, request body provided in the url as base64-encoded on focus out. - **35 points**
- [ ] Read-only response section, with information about HTTP status and the code, reused from the RESTfull client. - **5 points**
- [ ] Operational documentation explorer, visible _only_ upon successful SDL request. - **20 points**
- [ ] Variables section that can shown or hidden, specified variables are included in the body. - **10 points**
- [ ] Header section that can be shown or hidden, value is provided in the url on header add/change. - **10 points**

### History route - max 50 points

- [ ] History shows informational message with links to the clients when there are no requests in the local storage. - **10 points**
- [ ] User can navigate to the previoulsy executed HTTP request to the RESTfull client, HTTP method, url, body, headers, variables are restored. **20 points**
- [ ] User can navigate to the previoulsy executed GraphQL request to the GraphiQL client, url, SDL url, body, headers, variables are restored. **20 points**

### General requirements - max 50 points

- [ ] Multiple (at lest 2) languages support / i18n. - **30 points**
- [ ] Sticky header. - **10 points**
- [ ] Errors are displayed in the user friendly format. - **10 points**

### Penalties

- [ ] Vite/NextJS default favicon **-50 points**
- [ ] HTTP 4xx and 5xx status codes displayed as errors not in the response section **-50 points**
- [ ] The presence of errors and warnings in the console **-20 points** for each
- [ ] The presence in the console of the results of the console.log execution **-20 points** for each
- [ ] @ts-ignore or any usage (search through GitHub repo) **-20 points** for each
- [ ] The presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections **-10 points per each**
- [ ] Making commits after the deadline **-100 points**
- [ ] Absence of tests **-250 points**
- [ ] Test coverage below 80% **-100 points**
- [ ] Absence of linting **-150 points**
- [ ] Absence of prettier **-100 points**
- [ ] Absence of husky git hooks **-100 points**
- [ ] Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://docs.rs.school/#/en/pull-request-review-process?id=pull-request-description-must-contain-the-following) **-10 points**
- [ ] The administration reserves the right to apply penalties for the use of incorrect repository or branch names
