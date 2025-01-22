# Next.js. Server Side Rendering

## Technical requirements

1. Create a separate branch for this task from the previous branch task. Branch name: "nextjs-ssr-pages-api".
2. Next.js Pages Api Integration:
   - Migrate your application from vite to next.js by using Pages folder API.
   - React-router should be removed. You must use file-based routing provided by next.js (Pages Api).
   - You may need to adapt some existing libraries to work with next.js if necessary.
3. Next.js App Router Api Integration:
   - Create a separate branch for this point from "nextjs-ssr-pages-api" branch. Branch name: "nextjs-ssr-app-router-api".
   - You must use file-based routing provided by next.js (App Router)
   - [Migrate from Pages Api to App Router](https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration).
4. [Optional] React Router 7 Integration:
   - Create a separate branch for this point from the previous branch task. Branch name: "react-router-ssr".
   - [Update routing](https://reactrouter.com/start/framework/routing)
   - Migrate your application to SSR with React Router 7: data fetching should be done via loaders on the server-side

## Application Requirements

1. Application in each branch should function in accordance to the requirements provided in the previous modules, if they do not contradict with the new requirements provided in this module.
2. All the tests should pass, test coverage should be >= 70%.

## Points

A student can achieve a maximum of 100 points (+50 optional).

### Cross-check (score can be less if some parts of the functionality don't work)

- Next.js Pages API is used in "nextjs-ssr-pages-api" branch. Pages render on the server - **50**
- Next.js App Router API is used in "nextjs-ssr-app-router-api" branch. Pages render on the server with RSC - **50**
- [Optional] React Router 7 is used in "react-router-ssr" branch. Pages render on the server - **50**

### Penalties

- React Router 7 part implemented without Next.js implementation before: **-150 points**
- Test coverage less than 80%: **-30 points per each branch**
- TypeScript isn't used: **-145 points**
- Usage of _any_: **-20 points per each**
- Usage of _ts-ignore_: **-20 points per each**
- Direct DOM manipulations inside the React components: **-50 points per each**
- Presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**
- Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**
- Commits after the deadline: **-40 points**
- Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://docs.rs.school/#/en/pull-request-review-process?id=pull-request-description-must-contain-the-following): **-10 points**
