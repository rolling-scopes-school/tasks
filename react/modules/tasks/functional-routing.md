# React: Routing and Hooks

## 🧠 Task Description

In this task, you will refactor your class components to functional components with hooks and implement routing functionality. You'll add pagination, detailed views, and URL-based navigation.

## ⚠️ IMPORTANT NOTICE

Focus on routing and functional components.

## 🎯 Task Goals

- Convert class components to functional components using React hooks
- Implement React Router for navigation and URL management
- Create custom hooks for shared logic
- Add pagination with URL synchronization

## Functional Requirements (max **100 points**)

### Feature 1: Pagination (**30 points**)

**As a** user
**I want** to navigate through pages of search results
**So that** I can view more items and keep track of the viewed items

**Scenario:** Paginated Results with URL Synchronization

- **Given** I am viewing the item list
- **When** I navigate to a different page using pagination controls
- **Then** the current page is displayed in the URL as a query parameter (e.g., `?page=2` or `/:page`)
- **And** the pagination controls reflect the current page
- **And** pagination appears only after the list of items is loaded
- **And** when changing the input in the search bar, the page should reset to 1 and the URL should update accordingly

**Acceptance Criteria:**

- Pagination controls are visible after items are loaded. [10 points]
- Changing the page updates the URL with the correct `page` parameter. [10 points]
- The visible page matches the page in the URL at all times. [10 points]

### Feature 2: Master-Detail View (**45 points**)

**As a** user
**I want** to view item details alongside the search results
**So that** I can see more information without losing current position

**Scenario:** Split View with Details Panel

- **Given** I am on the main page with search results
- **When** I click an item
- **Then** the page splits into two sections:
  - The left section continues to show the search results
  - The right section displays the item details using React Router `<Outlet>`
- **And** a loading indicator is shown while details are being fetched
- **And** there is a close control to hide the details section
- **And** by default, no item is selected when the page first loads
- **And** the URL reflects both the current page and the selected item (e.g., `/?page=2&details=1` or `/:page/:detailsId?`)

**Acceptance Criteria:**

- Clicking an item opens a details panel on the right, using `<Outlet>`. [20 points]
- The left side always shows the list of results. [5 points]
- A loading indicator is visible while details are loading. [5 points]
- The details panel can be closed via a close button or by clicking the main panel. [5 points]
- The URL always reflects the current page and selected item. [5 points]
- On initial load, no item is selected and the details panel is closed. [5 points]

### Feature 3: About Page (**15 points**)

**As a** user
**I want** to view information about the application and its author
**So that** I can learn more about the app and its creators

**Scenario:** About Page Navigation

- **Given** I am using the application
- **When** I navigate to the About page
- **Then** I see author information and a link to the RS School React course
- **And** there is a navigation link to the About page from the main app

**Acceptance Criteria:**

- The About page displays author information and a link to the RS School React course. [8 points]
- The About page is accessible via a navigation link from the main application. [7 points]

### Feature 4: 404 Page (**10 points**)

**As a** user
**I want** to see a clear 404 page when I visit a non-existing route
**So that** I know the page does not exist and can navigate back to the app

**Scenario:** Display 404 for Unknown Routes

- **Given** I navigate to a non-existing route
- **When** the route does not match any defined page
- **Then** I see a 404 page with a message indicating the page was not found
- **And** there is a way to return to the main application

**Acceptance Criteria:**

- A 404 page is displayed for all unknown or non-existing routes. [3 points]
- The 404 page contains a clear message that the page was not found. [3 points]
- The 404 page provides a navigation option (e.g., button or link) to return to the main app. [4 points]

## Technical Requirements

1. **Branch Management**: Create branch from **"unit-testing"**. Branch name: **"hooks-and-routing"**

2. **Component Conversion**:
   - Convert ALL class components to **functional components** with hooks
   - **Exception**: Keep **Error Boundary** as class component
   - Create custom hook for localStorage operations

3. **Routing Setup**:

- Add routing in SPA mode using either **React Router** (choose "Data" or "Declarative" approach, see [API & mode availability](https://reactrouter.com/start/modes#api--mode-availability-table)) **or [TanStack Router](https://tanstack.com/router/latest/docs/guide/installation)**.
- Pick one router and follow its official documentation for setup and navigation.

### Penalties

- **1. TypeScript & Code Quality**
  - TypeScript isn't used: **-95 points**
  - Usage of _any_: **-20 points per each**
  - Usage of _ts-ignore_: **-20 points per each**
  - Presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**

- **2. Test Coverage**
  - Statement coverage below 80% (≥70%): **-10 points**
  - Statement coverage below 70% (≥50%): **-30 points**
  - All coverage metrics below 50%: **-50 points**

- **3. React Best Practices**
  - Direct DOM manipulations inside the React components: **-50 points per each**
  - Presence of class components (except Error Boundaries): **-50 points per each**
  - Absence of a custom hook for accessing localStorage: **-20 points**

- **4. External Dependencies**
  - Usage of Redux or other state management libraries: **-100 points**
  - Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**

- **5. Project Management**
  - Commits after the deadline: **-40 points**
  - Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://rs.school/docs/en/pull-request-review-process#pull-request-description-must-contain-the-following): **-10 points**

## 📚 FAQ (Frequently Asked Questions)

### ❓ Should the `page` parameter always be in the URL?

Yes. Even if no search term or details are selected, the current page should always be reflected in the URL, e.g., `?page=1`.

### ❓ Does "Pagination is present in both URL and on the page" mean synchronization?

Yes. The page number in the URL must match the visible pagination state. If the user clicks to go to page 3, the URL should change to `?page=3`.

### ❓ Should we use `<Outlet>` for the details section?

Yes. As described in the Master-Detail requirement, the details section should be implemented using React Router’s `<Outlet>`.

### ❓ What if the About page exists but is not linked anywhere?

It is considered partially implemented. For full points, the About page must exist **and** be accessible via a navigation link from the main app.

### ❓ My 404 page works on the deployed site, but not on localhost. Is that okay?

No. The 404 page must work **locally**, since cross-checking is done using `localhost`. GitHub Pages or other hosts may override your 404 behavior.

### ❓ Do I need to pass the search query in the URL?

Only if you want to. It's not required in the task, but you're free to include it as a `search` query param (e.g., `?page=1&search=pikachu`). It's not part of the scoring though.

### ❓ Can I use `useSearchParams` or `useParams`?

Yes. You can choose either or both depending on your routing strategy.

### ❓ What should I put in the `details` param?

You should pass the ID (or identifier) of the selected item from the search results, e.g., `?page=1&details=25`.

### ❓ My PR is merged into `main`. Is it a penalty?

No. As long as the original PR exists and your code is reviewable, there is no automatic penalty for merging.  
However, merging into `main` is **not recommended**, as it may complicate the review process for your mentor.
