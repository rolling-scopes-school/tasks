# Week 4

## React. API


!! Task should be implemented in the school’s private repository !!
It should be based on the previous task.

### What should be done:

1. Create a separate branch for this task.
2. Choose an API.
   There are several recommended APIs. But you may choose any other API that you prefer if it supports search, pagination and sorting.
   - https://www.flickr.com/services/api/flickr.photos.search.html
   - https://the-one-api.dev/documentation
   - https://rickandmortyapi.com/documentation/
   - https://developers.themoviedb.org/3/getting-started/introduction
   - https://pipedream.com/apps/swapi
   - https://github.com/public-apis/public-apis
   - https://unsplash.com/documentation
  
     **The API should support searching, pagination and sorting. Although you don’t need it at this stage, but there’s a good chance it might come in handy later.**
3. Rewrite the search page, and split it into 2 logical parts:
   - **Search bar.** Enter text -> Press Enter -> Send the request to API with the searching parameters -> the list of results is updating
   - **The result list of searching**: display the data that the API query returned using Cards.
4. A customer decided to change requirement. Now every element of the list has to show a small piece of information. After the click on the element we have to show all the  available information about the element in the modal window. The modal window should be closed by clicking on the cross button in the upper right corner or by clicking on a page outside the modal window. When we open a modal window the page should be covered with overlay.
5. Creat a download indicator ( a component with animation, or at least with the string - ‘Downloading’). You should place this indicator with your own sense of beauty.

All the logical parts must be in separated components.
**User-friendly interface with the downloading indicator and with notification messages in a case if something goes wrong or some information cannot be found is warmly welcome.**
6. Add tests. All the api-calls should be mocked in the tests.

### Questions
You should be using Discord as the main mean of the communication.
Also we will try to collect your questions regarding the 4th Module using special form, which will be provided via the Discord with the 4th Module start. Questions will be collected in Module 04 section of the same spreadsheet. Please, check answers carefully before posting the question, may be your question has been answered already.
We will try to conduct a session for each module providing answers for some questions.

### Score
The task will be checked during cross-check and cross-code-review.
#### Cross-code-review process
1. Clone the repository you are going to review
2. Install all the required dependencies
3. Run linting using special command in package.json file, output should not produce any errors or warnings
4. Run tests using special command in package.json file, all tests should pass, test coverage should be shown after running all the tests
5. Review the code. Pay attention at the following "code smells": props drilling; large, complex components aka "god" components; direct DOM manipulation, etc.

When reviewing the code try pay attention at the following principles:
* Write code as simply as possible: KISS
* Avoid unnecessary repetition: DRY
* Delete what is not needed: YAGNI

We also need to mention the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) and other [SOLID](https://en.wikipedia.org/wiki/SOLID) principles
Please, check [this article](https://dmitripavlutin.com/7-architectural-attributes-of-a-reliable-react-component/) for reference
Last, but not least - check the presence of the comments. Ideally there shouldn't be any comments at all. Sometimes people just comment code which is not needed. So why not to remove it entirely? In case you will need to restore this code, you can always refer to the git history. And more - [comments are lies](https://blog.devgenius.io/code-should-be-the-one-version-of-the-truth-dont-add-comments-b0bcd8631a9a)
#### Cross-check process
Run app and check that the functionality is working (cross-check)

#### Points
Student can get 15 points if the following requirements are met:
1. Eslint should not show any errors or warnings.
2. All the functionality should work.
3. Test coverage for the whole app should be not less than 70%.

The score might be less, if:
1. Part of functionality doesn't work.
2. Test coverage is below 70%.
3. Presence of the code smells.
4. Lots of unnessecary, redundant or obvious comments.


If there are direct DOM manipulations – **0 points**.
### Repository requirements

* the task should be done in the **private student's repository** 
* in private repository create branch with the name of the task from `main` branch and work in this (dev) created branch
* the commits history should reflect the process of app creating [Commits requirements](https://docs.rs.school/#/git-convention?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0%D0%BC-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B8%D1%82%D0%BE%D0%B2) [RU]
* after finishing development it’s necessary to make Pull Request from app’s branch to `main` branch [Pull Request requirements](https://docs.rs.school/#/pull-request-review-process?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-pull-request-pr) [RU]
* after completing the module, private repository should be exposed for cross-checks and cross-code-reviews for the duration of the next module (one week), after this week will end, repository should be made private again 
**Do not merge Pull Request from the development branch to the `main` branch**

### Theory

- Fetching Data with Fetch API: [ReactJS: Fetching Data with Fetch API and ComponentDidMount
  ](https://www.youtube.com/watch?v=r40gtnaTe9s)
- [Full React Tutorial #17 - Fetching Data with useEffect](https://www.youtube.com/watch?v=qdCHEUaFhBk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=17)
- [Full React Tutorial #18 - Conditional Loading Message
  ](https://www.youtube.com/watch?v=qtheqr0jgIQ&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=18)
- [Full React Tutorial #19 - Handling Fetch Errors](https://www.youtube.com/watch?v=DTBta08fXGU&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=19)
- [React API - video](https://www.youtube.com/watch?v=W9czPM2N65Y&t=3495s)
- [Fetch Data from an API in React](https://www.youtube.com/watch?v=T3Px88x_PsA)
- React Testing Library - [Mock API Calls - Mock Service Worker](https://www.youtube.com/watch?v=oMv2eAGWtZU) 
