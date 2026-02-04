# Next.js. Server Side Rendering

## Technical requirements

1. Create a separate branch for this task from the previous branch task. Branch name: "nextjs-ssr".
2. Next.js App Router Integration:
   - [Migrate your application from vite to the Next.js by using App Router](https://nextjs.org/docs/app/guides/migrating/from-vite).
   - React-router should be removed. You must use file-based routing provided by next.js (App Router).
   - You may need to adapt some existing libraries to work with next.js if necessary. (E.g., Redux).

## Functional Requirements (max **100 points**)

### Feature 1: Application Rebuild in Next.js with Preserved Behavior (**10 points**)

**As a** developer  
**I want** to rebuild the application using a fresh Next.js App Router setup  
**So that** all existing functionality and behavior are preserved while fully adopting the Next.js architecture

**Scenario:** Rebuild with Behavioral Parity

- **Given** I create a new Next.js application using the official Next.js tooling (e.g., `create-next-app`) and App Router
- **And** I port over the existing functionality and modules from the previous implementation (excluding the standalone forms module, e.g., Formik/React Hook Form integration)
- **When** previous requirements do not contradict new ones
- **Then** all existing behaviors and features are preserved and work correctly in the rebuilt Next.js application using file-based routing and server/client components as appropriate

**Acceptance Criteria:**

- Application is migrated to Next.js using the App Router and file-based routing while it still continues to meet all non-conflicting requirements from previous modules. [10 points]

### Feature 2: Internationalization (**10 points**)

**As a** user
**I want** to use the application in at least two languages
**So that** I can interact with the UI in my preferred language

**Scenario:** Language Switching

- **Given** I am using the application
- **When** I select a language from the language switcher
- **Then** the UI updates to the selected language using next-intl

**Acceptance Criteria:**

- Application uses next-intl for internationalization. [5 points]
- Language can be changed via a client-side switcher. [5 points]

### Feature 3: Shared Layout (**5 points**)

**As a** user
**I want** a consistent layout across all pages
**So that** navigation feels seamless and unified

**Scenario:** Shared Layout

- **Given** I navigate between pages
- **Then** a shared layout is used at the root of the pages

**Acceptance Criteria:**

- Shared layout is implemented and used for all pages. [5 points]

### Feature 4: 404 Page (**5 points**)

**As a** user
**I want** to see a clear 404 page for non-existing routes
**So that** I know when a page does not exist

**Scenario:** 404 Error Handling

- **Given** I navigate to a non-existing route
- **Then** a 404 error page is displayed

**Acceptance Criteria:**

- 404 error page is implemented and shown for unknown routes. [5 points]

### Feature 5: Image Rendering (**10 points**)

**As a** user
**I want** all images to be rendered using Next.js best practices
**So that** images are optimized and performant

**Scenario:** Image Component Usage

- **Given** the application displays images
- **Then** all images are rendered via the next/image component

**Acceptance Criteria:**

- All images use next/image. [10 points]

### Feature 6: Link Rendering (**10 points**)

**As a** user
**I want** all navigation links to support localization
**So that** navigation works correctly in all languages

**Scenario:** Localized Navigation

- **Given** I navigate using links
- **Then** all links are rendered via the next-intl createNavigation function

**Acceptance Criteria:**

- All links use next-intl createNavigation. [10 points]

### Feature 7: About Page as a Statically Generated Server Component (**10 points**)

**As a** user
**I want** the About page to be statically generated as a server component
**So that** I get fast, SEO-friendly static content without extra client logic or runtime data fetching

**Scenario:** About Page Server Rendering

- **Given** I navigate to the About page
- **Then** the About page content is produced entirely by a statically generated server component

**Acceptance Criteria:**

- About page content is implemented as a server component only (no client components required for core content). [5 points]
- The About page is implemented as a statically generated server component (SSG); no client-side data fetching is used. [5 points]

### Feature 8: Server-Side CSV Generation with Server Actions (**15 points**)

**As a** user
**I want** CSV files to be generated on the server
**So that** downloads are fast and secure

**Scenario:** Server CSV Compilation with Server Actions

- **Given** I request a CSV export
- **Then** the CSV file is compiled and served from the server using a Next.js server action or route handler (e.g., via useActionState)

**Acceptance Criteria:**

- CSV file is generated and served from the server using server actions or route handlers. [15 points]

### Feature 9: Search Results Page with Server Components and Initial SSR (**15 points**)

**As a** user
**I want** the search results page (list + details panel shell) to be rendered on the server using server components
**So that** I see initial data quickly and benefit from SEO-friendly markup

**Scenario:** Search Results Page Server Rendering

- **Given** I navigate to the main search results page (with current page and optional query parameters)
- **Then** the list of results and layout (including the empty details panel area) are rendered on the server using server components

**Acceptance Criteria:**

- Initial load of the search results page (with current page and query parameters) is rendered on the server. [8 points]
- The search results list and layout (including the container for the details panel) are implemented using server components. [7 points]

### Feature 10: Server Actions for Search, Filtering, and Detail Selection (**10 points**)

**As a** user
**I want** my interactions on the search results page (search, filter, select item) to be handled on the server
**So that** I always see up-to-date data with minimal client-side logic

**Scenario:** Server-Driven Interactions on Search Page

- **Given** I am on the search results page
- **When** I submit a search or filter form
- **Then** a Next.js server action (e.g., using `useActionState` or form actions) handles the request and returns updated server-rendered results
- **And** when I select an item, the server-driven details panel component receives the selected ID and fetches data on the server

**Acceptance Criteria:**

- Search and filter submissions are wired through server actions or server functions, not ad-hoc client-only fetch calls. [5 points]
- Selecting an item for the details panel triggers server-side data fetching for that item (via server component or server function). [5 points]

### Cross-check (score can be less if some parts of the functionality don't work)

- Next.js App Router is used in "nextjs-ssr" branch. Pages render on the server with RSC - **20**
- The application supports at least two languages - **10**
- Shared layout is used at the root of application - **5**
- All images are rendered via the next/image component. If your API doesn't support images, then you receive 10 points automatically. - **10**
- All links are rendered via the next-intl createNavigation function - **10**
- 404 error page implemented - **5**
- All static requests are done via the server - **20**
- CSV file compiled in the server action - **20**

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

### ❓ How do I implement internationalization in Next.js?

Use the [next-intl](https://next-intl.dev/) library to add internationalization. Your application must support at least two languages, and users should be able to switch languages via a client-side switcher. You do not need to translate API data — only UI and navigation elements.

### ❓ How do I use the createNavigation function for links?

The [createNavigation](https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#i18n-navigation) function from next-intl is a wrapper around Next.js navigation that supports locales. Use it to render all navigation links so that they work correctly with internationalization.

### ❓ Where should I perform static and dynamic data requests in Next.js?

All static (invariant) requests should be performed on the server using Next.js server components or server-side fetch. Dynamic requests (those depending on search params or user interaction) can still be performed on the client using RTK Query, TanStack Query, or similar libraries.

### ❓ When should I use server components in Next.js?

Move as much rendering as possible to the server. Components that do not require state or React hooks should be implemented as server components for better performance and SEO. See the [Next.js docs on server and client components](https://nextjs.org/docs/app/getting-started/server-and-client-components) for guidance.

### ❓ How do I generate and serve CSV files on the server?

CSV files (such as those generated for downloads in the Redux task) must be compiled and served from the server using a server action or route handler. See the [Next.js guide on server actions and forms](https://nextjs.org/docs/app/guides/forms) for implementation details.

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
