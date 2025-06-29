# Next.js. Server Side Rendering

## Technical requirements

1. Create a separate branch for this task from the previous branch task. Branch name: "nextjs-ssr".
2. Next.js App Router Integration:
   - [Migrate your application from vite to the Next.js by using App Router](https://nextjs.org/docs/app/guides/migrating/from-vite).
   - React-router should be removed. You must use file-based routing provided by next.js (App Router).
   - You may need to adapt some existing libraries to work with next.js if necessary. (E.g., Redux).

## Application Requirements

1. Application should function in accordance to the requirements provided in the previous modules, if they do not contradict with the new requirements provided in this module.
2. Add internationalization via [next-intl](https://next-intl.dev/). Your application must support at least 2 languages. The language can be changed via switcher on the client.
3. Add a shared layout for pages.
4. Add 404 page.
5. Images must be rendered via an Image component from next/image.
6. Links must be rendered via a Link component from the next-intl [createNavigation](https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#i18n-navigation) function. The "createNavigation" function is a wrapper on top on Next.js navigation with supporting locales.
7. All requests must be done from the server. [Example how to adopt searchParams to the next.js](https://nextjs.org/learn/dashboard-app/adding-search-and-pagination), [Fetching data](https://nextjs.org/docs/app/getting-started/fetching-data)
8. Move render of components to the server as much as possible. [E.g., static markup, components without state\hooks usage](https://nextjs.org/docs/app/getting-started/server-and-client-components).
9. Csv file from the Redux task must be compiled [on the server](https://nextjs.org/docs/app/guides/forms).

## Points

A student can achieve a maximum of 100 points.

### Cross-check (score can be less if some parts of the functionality don't work)

- Next.js App Router is used in "nextjs-ssr" branch. Pages render on the server with RSC - **20**
- The application supports at least two languages - **10**
- Shared layout is used at the root of application - **5**
- All images are rendered via the next/image component - **10**
- All links are rendered via the next-intl createNavigation function - **10**
- 404 error page implemented - **5**
- All network requests are done via the server - **20**
- CSV file compiled in the server action - **20**

### Penalties

- TypeScript isn't used: **-100 points**
- Usage of _any_: **-20 points per each**
- Usage of _ts-ignore_: **-20 points per each**
- Direct DOM manipulations inside the React components: **-50 points per each**
- Presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**
- Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**
- Commits after the deadline: **-40 points**
- Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://rs.school/docs/en/pull-request-review-process#pull-request-description-must-contain-the-following): **-10 points**
