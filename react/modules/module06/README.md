# Week 6

## React. SSR/SSG


!! Task should be implemented in the school’s private repository !!
It should be based on the previous task.

### What should be done:

1. Create a separate branch for this task.
2. Move your application to the server and enable server side rendering.
3. Hydrate your application on FE side.
4. Adopt Redux for SSR.
5. Add e2e tests for your application via cypress.

### Score

The task will be checked by the mentor during the first 6 weeks. Create a Pull Request to the branch of the previous task, for mentor's checking (**DO NOT MERGE**).

1. Eslint should not show any errors or warnings. 
2. All the functionality should work.
3. No console errors in browser.
4. renderToPipeableStream method haven't been used.
5. Redux doesn't work.
6. Tests weren't added or don't work.

If at least one of the requirements is not completed, then the task is evaluated as **0 points**.

### Repository requirements

- the task should be done in the school's **private repository** [How to work with a private repository](https://docs.rs.school/#/private-repository?id=Как-работать-с-приватным-репозиторием) [RU]
- create a branch with the name of the current task in the school's private repository from the branch of the previous task.
- the commit history should display the development process of the application. [Commit-name-requirements](https://docs.rs.school/#/git-convention?id=Требования-к-именам-коммитов) [RU]
- after the development is completed, it is necessary to make a Pull Request from the application branch to the branch of the previous task [Requirements for a Pull Request](https://docs.app.rs.school/#/platform/pull-request-review-process). **DO NOT MERGE this Pull Request from the development branch into the previous task branch**

### Theory

SSR:
 - [Rendering types](https://dexlock.com/blog/frontend-rendering-ssg-vs-ssr-vs-csr-vs-isr/)
 - [React.renderToPipeableStream](https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream)
 - [React Hydration](https://beta.reactjs.org/reference/react-dom/client/hydrateRoot#hydrating-an-entire-document)
 - [Redux SSR](https://redux.js.org/usage/server-rendering)
 - [React SSR with Express.js](https://dev.to/juhanakristian/basics-of-react-server-side-rendering-with-expressjs-phd)

Cypress:
- [What is e2e testing?](https://circleci.com/blog/what-is-end-to-end-testing/)
- [How to write e2e tests](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test)

Extra:
 - [NEXT.js](https://nextjs.org/)
 - [Remix](https://remix.run/)
 - [Gatsby.js](https://www.gatsbyjs.com/why-gatsby)