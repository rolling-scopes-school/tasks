# React: Routing and Hooks

## 🧠 Task Description

In this task, you will refactor your class components to functional components with hooks and implement routing functionality. You'll add pagination, detailed views, and URL-based navigation.

## ⚠️ IMPORTANT NOTICE

Focus on routing and functional components. Remove any button or functionality which throws exceptions unnecessarily.

## 🎯 Task Goals

- Convert class components to functional components using React hooks
- Implement React Router for navigation and URL management
- Create custom hooks for shared logic
- Add pagination with URL synchronization

## Application Requirements

1. **Pagination**:

   - Add pagination for your item list (search results)
   - Display current page in URL using query parameters (e.g., `?page=2`)
   - Pagination should appear after receiving the list of items

2. **Master-Detail View**:

   - Main page displays search results
   - On item click, split page into 2 sections:
     - **Left**: Continue displaying search results
     - **Right**: Display item details using React Router <Outlet>
   - Show loading indicator while fetching details
   - Add close control for details section
   - The details part should be optional — by default, no item is selected when the page first loads
   - Reflect page number and selected item in the URL (e.g., `/?page=2&details=1` or `/:page/:detailsId?`). Urls like `/1` or `/1/567` are valid.

3. **About Page**:
   - Create an About page with application author information
   - Include a link to the RS School React course
   - Add navigation to reach the About page from the main application

## Technical Requirements

1. **Branch Management**: Create branch from **"unit-testing"**. Branch name: **"hooks-and-routing"**

2. **Component Conversion**:

   - Convert ALL class components to **functional components** with hooks
   - **Exception**: Keep **Error Boundary** as class component
   - Create custom hook for localStorage operations

3. **Routing Setup**:
   - Add **React Router** in SPA mode using either "Data" or "Declarative" approach ([pick one](https://reactrouter.com/start/modes#api--mode-availability-table))
   - Add **404 page** for non-existing routes

## Points

A student can achieve a maximum of 100 points.

### Cross-check (score can be less if some parts of the functionality don't work)

- Custom hook to restore search query from LS - **20**
- Pagination is present in both URL and on the page - **20**
- Upon clicking, open details panel on the right side of the page: - **5**
  - Use router outlet, left side of the page should continue displaying the list of results - **10**
  - Initiate an additional API call, display a loader, and update the URL - **10**
  - Details panel should be closed either on the "close" button click or on the main panel click - **10**
- About page is implemented with author information and a link to the RS School React course - **5**
- 404 is implemented - **5**
- New tests are added for the new functionality - **15**

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

- **4. External Dependencies**

  - Usage of Redux or other state management libraries: **-100 points**
  - Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**

- **5. Project Management**
  - Commits after the deadline: **-40 points**
  - Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://rs.school/docs/en/pull-request-review-process#pull-request-description-must-contain-the-following): **-10 points**
