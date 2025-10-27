# Next.js. Server Side Rendering

## Technical requirements

1. Create a separate branch for this task from the previous branch task. Branch name: "nextjs-ssr".
2. Next.js App Router Integration:
   - [Migrate your application from vite to the Next.js by using App Router](https://nextjs.org/docs/app/guides/migrating/from-vite).
   - React-router should be removed. You must use file-based routing provided by next.js (App Router).
   - You may need to adapt some existing libraries to work with next.js if necessary. (E.g., Redux).

## Application Requirements

1. Application should function in accordance to the requirements provided in the previous modules, if they do not contradict with the new requirements provided in this module.
2. Add internationalization via [next-intl](https://next-intl.dev/). Your application must support at least 2 languages. The language can be changed via switcher on the client. There is no need to translate the data that comes from the API.
3. Add a shared layout for pages.
4. Add 404 page.
5. Images must be rendered via an Image component from next/image.
6. Links must be rendered via a Link component from the next-intl [createNavigation](https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#i18n-navigation) function. The "createNavigation" function is a wrapper on top on Next.js navigation with supporting locales.
7. All static requests must be done from the server. [Example how to adopt searchParams to the next.js](https://nextjs.org/learn/dashboard-app/adding-search-and-pagination), [Fetching data](https://nextjs.org/docs/app/getting-started/fetching-data). Dynamic requests (depends on search params for example) still can be done from the client via rtk-query\tanstack-query etc.
8. Move render of components to the server as much as possible. [E.g., static markup, components without state\hooks usage](https://nextjs.org/docs/app/getting-started/server-and-client-components).
9. Csv file from the Redux task must be compiled [on the server](https://nextjs.org/docs/app/guides/forms).
10. The first loading page should come from the server, and saving requests from previous task can be left as is (no need to migrate).

### Cross-check (score can be less if some parts of the functionality don't work)

- Next.js App Router is used in "nextjs-ssr" branch. Pages render on the server with RSC - **20**
- The application supports at least two languages - **10**
- Shared layout is used at the root of application - **5**
- All images are rendered via the next/image component. If your API doesn't support images, then you receive 10 points automatically. - **10**
- All links are rendered via the next-intl createNavigation function - **10**
- 404 error page implemented - **5**
- All static requests are done via the server - **20**
- CSV file compiled in the server action - **20**

## Points

A student can achieve a maximum of 100 points.

## FAQ (Frequently Asked Questions)

### ❓ Do I need to rewrite the project from scratch or migrate?

You should continue working in the same project and **migrate it** to Next.js App Router.
Create a new branch `nextjs-ssr`, replace `react-router` with file-based routing, and adjust the existing functionality so it works in the new environment — keeping everything from previous modules that doesn’t conflict with the new requirements.

### ❓ Where should I deploy? Is GitHub Pages allowed?

You can deploy the project wherever you prefer — GitHub Pages, Netlify, Vercel, or any other hosting platform.
The main goal is to explore different deployment options and understand how they work.

Keep in mind that **Vercel** is developed by the same team that builds Next.js and has a deep integration with it, so it might be worth getting to know its features and deployment workflow more closely.

### ❓ Do I need to translate API data?

**No.** Localize **UI and navigation** (interface texts, headings, labels).
Leave **API data as-is** if the API doesn’t support multiple languages.

### ❓ What about images and `next/image`?

- All images must be rendered with `next/image` (if your API doesn’t have images, you automatically get the points per the spec).
- For external URLs, configure `images.domains` or `images.remotePatterns` in `next.config.mjs`.
- Avoid custom loaders unless strictly necessary.

### ❓ Where should requests be made?

- **Static/invariant requests** (not dependent on user actions) → **server** (RSC/Server Components, `fetch` in server code).
- **Dynamic requests** (depend on `searchParams` or user interaction) → client (RTK Query / TanStack Query allowed).
- Move as many stateless components as possible to **Server Components**.

### ❓ CSV must now be generated on the server. How?

Use a **Server Action** or server route handler to create the CSV and send it with proper headers.

### ❓ Can I use a library for theme switching (e.g., `next-themes`)?

Please **do not** use external libraries for theme switching.
Implement your own solution by hand:

- Keep theme state in **React Context**.
- Optionally persist the choice with **localStorage**.

### Penalties

- **1. TypeScript & Code Quality**
  - TypeScript isn't used: **-100 points**
  - Usage of _any_: **-20 points per each**
  - Usage of _ts-ignore_: **-20 points per each**
  - Presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**

- **2. React Best Practices**
  - Direct DOM manipulations inside the React components: **-50 points per each**

- **3. External Dependencies**
  - Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**

- **4. Project Management**
  - Commits after the deadline: **-40 points**
  - Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://rs.school/docs/en/pull-request-review-process#pull-request-description-must-contain-the-following): **-10 points**
