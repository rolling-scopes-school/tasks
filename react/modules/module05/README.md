# Week 5

## React. Next.JS/SSR/SSG

### Disclaimer:

In this task you going to use Next.js Pages API instead of brand-new APP dir API. The main motivation of it is stability and wide community around this solution. Pages API still supportable by Next.JS team. This decision will help you avoid unnecessary problems and questions regarding server-side components. Anyway, if you are interested in deep dive into APP API you can read about it [here](https://nextjs.org/docs/app/building-your-application/routing) and [here](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md).

### What should be done:

1. Create a separate branch for this task from the previous branch task.
2. Migrate the app to the Next.JS retaining the functionality.
   - You must enable server-side rendering for all the pages.
3. Switch from react-router to Next.JS router (react-router lib must be removed).
4. Update tests to make it work with Next.JS.
5. You must use **Pages API** instead of **new APP API**.

### Questions

You should be using Discord as the main mean of the communication.
Also, we will try to collect your questions regarding the 5th Module using special form, which will be provided via the Discord with the 6th Module start. Questions will be collected in Module 06 section of the same spreadsheet. Please, check answers carefully before posting the question, may be your question has been answered already.
We will try to conduct a session for each module providing answers for some questions.

Please **check the answers carefully before posting** a question, as your question might have already been answered. We will strive to hold a session for each module, providing answers to some of the questions.

### Score

The task will be checked during cross-check and cross-code-review.

#### Cross-code-review process

1. Clone the repository you are going to review
2. Install all the required dependencies
3. Run linting using special command in package.json file, output should not produce any errors or warnings
4. Run tests using special command in package.json file, all tests should pass, test coverage should be shown after running all the tests
5. Review the code. Pay attention at the following "code smells": props drilling; large, complex components aka "god" components; direct DOM manipulation, etc.

When reviewing the code try pay attention at the following principles:

- Write code as simply as possible: KISS
- Avoid unnecessary repetition: DRY
- Delete what is not needed: YAGNI

We also need to mention the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) and other [SOLID](https://en.wikipedia.org/wiki/SOLID) principles
Please, check [this article](https://dmitripavlutin.com/7-architectural-attributes-of-a-reliable-react-component/) for reference
Last, but not least - check the presence of the comments. Ideally there shouldn't be any comments at all. Sometimes people just comment code which is not needed. So why not to remove it entirely? In case you will need to restore this code, you can always refer to the git history. And more - [comments are lies](https://blog.devgenius.io/code-should-be-the-one-version-of-the-truth-dont-add-comments-b0bcd8631a9a)

#### Cross-check process

Run app and check that the functionality is working (cross-check)

#### Points

##### Student can get 100 points:

- The app migrated to the Next.JS - **25 points**
- All retaining functionality works as expected from previous tasks - **25 points**
- Pages API has been used for all pages - **20 points**
- All pages with state receive it via getServerSideProps - **10 points**
- Tests had been modified to work with SSR - **20 points**

##### Penalties:

- TypeScript isn't used: **-95 points**
- Usage of _any_: **-20 points per each**
- Usage of _ts-ignore_: **-20 points per each**
- Direct DOM manipulations inside the React components: **-50 points per each**
- Presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**
- Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**
- Test coverage is less than 80%: **-30 points**
- Next.js isn't used: **-100 points**
- Usage of client state on page: **-20 points** per each
- Pages API isn't used: **-50 points**
- Commits after the deadline: **-40 points**

### Repository requirements

- the task should be done in **your personal private repository**
- in the repository create a branch from the **previous task** branch with the name of the task and work in the created branch
- the commits history should reflect the process of app creating [Commits requirements](https://docs.rs.school/#/git-convention?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0%D0%BC-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B8%D1%82%D0%BE%D0%B2) [RU]
- after finishing development it’s necessary to make Pull Request from app’s branch to `main` branch [Pull Request requirements](https://docs.rs.school/#/pull-request-review-process?id=%D0%A2%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-pull-request-pr) [RU]
- after completing the module, private repository should be exposed for the duration of the cross-check (please check the schedule), when the cross-check is finished, repository should be made private again
  **Do not merge Pull Request from the development branch to the `main` branch**

### Theory

- [SSR vs SSG](https://vercel.com/blog/nextjs-server-side-rendering-vs-static-generation)
- [Next.JS](https://nextjs.org/)
- [Pages API](https://nextjs.org/docs/pages)
- [RTK with server side rendering](https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering)
- [RTK Query + Next.JS example](https://github.com/phryneas/ssr-experiments/tree/main/nextjs-blog)
