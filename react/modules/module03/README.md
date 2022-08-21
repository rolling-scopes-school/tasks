# Week 3

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
     **The API should support searching, pagination and sorting. Although you don’t need it at this stage, but there’s a good chance it might come in handy later.**
3. Rewrite the search page, and split it into 2 logical parts:
   - **Search bar.** Enter test -> Press Enter -> Send the request to API with the searching parameters -> the list of results is updating
   - **The result list of searching**: display the data that the API query returned using Cards.
4. A customer decided to change requirement. Now every element of the list has to show a small piece of information. After the click on the element we have to show all the  available information about the element in the modal window. The modal window should be closed by clicking on the cross button in the upper right corner or by clicking on a page outside the modal window. When we open a modal window the page should be covered with overlay.
5. Creat a download indicator ( a component with animation, or at least with the string - ‘Downloading’). You should place this indicator with your own sense of beauty.

All the logical parts must be in separated components.
**User-friendly interface with the downloading indicator and with notification messages in a case if something goes wrong or some information cannot be found is warmly welcome.**
6. Add tests. All the api-calls should be mocked in the tests.

### Score

The task will be checked by the mentor during the first 6 weeks. Create a Pull Request to the branch of the previous task, for mentor's checking (**DO NOT MERGE**).


1. Tests - **3 points**
2. App + API - **12 points**

If at least one of the requirements is not completed, then the task is evaluated as **0 points**.

### Repository requirements

- the task should be done in the school's **private repository** [How to work with a private repository](https://docs.rs.school/#/private-repository?id=Как-работать-с-приватным-репозиторием) [RU]
- create a branch with the name of the  current task in the school's private repository from the branch of the previous task.
- The commit history should display the development process of the application. [Commit-name-requirements](https://www.conventionalcommits.org/en)
- after the development is completed, it is necessary to make a Pull Request from the application branch to the branch of the previous task [Requirements for a Pull Request](https://docs.app.rs.school/#/platform/pull-request-review-process). **DO NOT MERGE this Pull Request from the development branch into the previous task branch**


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
