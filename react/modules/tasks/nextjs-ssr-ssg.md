# Next.js. Server Side Rendering

## Technical requirements

1. Create a separate branch for this task from the previous branch task. Branch name: "nextjs-ssr-pages-api".
2. Next.js Pages API Integration:
   - Migrate your application from vite to next.js by using Pages folder API. You'll need to adapt existing libraries to work with next.js.
3. Next.js App Router API Integration:
   - Create a separate branch for this point from "nextjs-ssr-pages-api" branch. Branch name: "nextjs-ssr-app-router-api".
   - Migrate from Pages Api to App Folder Api.
4. Remix Integration:
   - Create a separate branch for this point from the previous branch task. Branch name: "remix-ssr".
   - Add Remix framework to your vite config
   - Migrate your application to ssr with Remix
5. Tests: TBD

## Application Requirements

1. Application must work in the same way as it was before this task

## Points

A student can achieve a maximum of 150 points.

### Cross-check (score can be less if some parts of the functionality don't work)

- Next.js Pages API is used in "nextjs-ssr-pages-api" branch. Pages render on the server - **50**
- Next.js App Router API is used in "nextjs-ssr-app-router-api" branch. Pages render on the server with RSC - **50**
- Remix is used in "remix-ssr" branch. Pages render on the server - **50**

### Penalties

- Remix implemented without Next.js implementation before: **-150 points**
- TypeScript isn't used: **-145 points**
- Usage of _any_: **-20 points per each**
- Usage of _ts-ignore_: **-20 points per each**
- Direct DOM manipulations inside the React components: **-50 points per each**
- Presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**
- Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**
- Commits after the deadline: **-40 points**
- Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://docs.rs.school/#/en/pull-request-review-process?id=pull-request-description-must-contain-the-following): **-10 points**
