# API Querying in React

This task is a continuation of the state management task. In this task, you will implement proper data fetching and caching mechanisms using modern querying libraries.

## Functional Requirements (max **100 points**)

### Feature 1: API Integration (**25 points**)

**As a** developer  
**I want** to use a modern query library for API calls  
**So that** my data fetching is efficient and maintainable

**Scenario:** Query Library Setup

- **Given** I have chosen a state management solution (Redux or Zustand)
- **When** I set up API querying
- **Then** I use RTK Query (for Redux) or TanStack Query (for Zustand) for all API calls

**Acceptance Criteria:**

- RTK Query or TanStack Query is integrated and configured. [10 points]
- All API calls are made using the chosen query library. [5 points]
- Proper cache invalidation strategies are implemented. [5 points]
- The cache TTL (time-to-live) is configurable via an environment variable. [5 points]

### Feature 2: Data Caching and Loading States (**25 points**)

**As a** user
**I want** data to be cached and see loading indicators
**So that** navigation is fast and I know when data is loading

**Scenario:** Data Caching and Loading

- **Given** I navigate between pages or open item details
- **When** data is being fetched
- **Then** a loading indicator is displayed
- **And** previously fetched data is cached and reused when possible

**Acceptance Criteria:**

- Loading indicators are shown while data is being fetched. [13 points]
- Data is cached and reused between navigations. [12 points]

### Feature 3: Error Handling (**20 points**)

**As a** user
**I want** to see clear error messages when API calls fail
**So that** I understand what went wrong

**Scenario:** Error State Display

- **Given** an API call fails
- **When** I am using the app
- **Then** a clear, human-readable error message is displayed

**Acceptance Criteria:**

- Error states are handled and displayed to users. [20 points]

### Feature 4: Manual Cache Invalidation (**10 points**)

**As a** user  
**I want** to manually refresh data  
**So that** I can ensure I have the latest information

**Scenario:** Manual Refresh

- **Given** I am viewing a list or details
- **When** I click a refresh button
- **Then** the cache is invalidated and a new API call is made

**Acceptance Criteria:**

- A new, custom refresh button is included, clicking what, it explicitly invalidates the cache for the relevant data. [10 points]

### Feature 5: Test Coverage for Querying (**20 points**)

**As a** developer
**I want** to have tests for querying features
**So that** I can ensure reliability and catch regressions

**Scenario:** Query Feature Tests

- **Given** I have implemented querying features
- **When** I run tests
- **Then** loading states, error states, and caching behavior are covered

**Acceptance Criteria:**

- Tests cover loading, error, and caching behavior for queries. [20 points]

## Technical Requirements

1. Create a separate branch for this task from the state management task branch. Branch name: "api-queries"

2. Library Integration:
   - For Redux users:
     - Implement RTK Query endpoints for all your API calls
     - Use RTK Query hooks in your components
     - Implement proper cache invalidation strategies
   - For Zustand users:
     - Set up TanStack Query with appropriate configuration
     - Create custom hooks for your queries using TanStack Query
     - Implement proper cache management

3. Data Management:
   - Items returned for the current page should be properly cached
   - Currently selected item details should be cached
   - Loading states should be tracked and displayed appropriately
   - Error states should be handled and displayed to users

4. Test Updates:
   - Update your tests to cover the new querying functionality
   - Test loading states, error states, and caching behavior

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
  - Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**

- **5. Project Management**
  - Commits after the deadline: **-40 points**
  - Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://rs.school/docs/en/pull-request-review-process#pull-request-description-must-contain-the-following): **-10 points**

- **6. API Call Migration**
  - Each API call not migrated or not implemented using the chosen query library: **-10 points per each**

## FAQ (Frequently Asked Questions)

### ❓ What does “Currently selected item details should be cached” mean?

It means that when a user opens a detail view for an item, the data fetched for that item should be cached so reopening it later won’t trigger another network request.

### ❓ How many “Refresh” buttons do I need?

The implementation is up to you:

- **One button** that invalidates both list and detail data is fine.
- **Two buttons** (one in the list view, one in the details view) are also fine.
  The key is that you demonstrate manual cache invalidation.

### ❓ What’s the difference between cache invalidation and refetching?

- **Refetch**: Re-requests the current query without clearing its cache key.
- **Invalidate**: Clears cache for a query so that the next access forces a fresh API call.

### ❓ Should I clear the browser’s disk cache?

No. This task is only about the in-memory cache of RTK Query or TanStack Query.
You are **not** expected to manage or bypass the browser’s own HTTP cache.

### ❓ How do I test “Cache invalidation and refetching work correctly”?

Example:

1. Open page 1 → request is made.
2. Open page 2 → request is made.
3. Return to page 1 → no request (data comes from cache).
4. Press “Refresh” → request is made again for page 1.
5. Repeat for search queries and detail pages.

### ❓ What if my pagination is server-side?

That’s fine — caching should still ensure that returning to a previously visited page does not trigger a new request unless you manually invalidate it.

### ❓ Can I fetch multiple items in parallel for CSV export?

Yes:

- In RTK Query — create an endpoint that takes an array and fetches items (possibly using `Promise.all` inside).
- In TanStack Query — use `useQueries` for parallel fetching.

### ❓ Do I need to set `staleTime` or similar options?

Not mandatory, but you may adjust them to control freshness. The main requirement is that navigation between already loaded pages should not make unnecessary API calls.

### ❓ Can I use React Query Devtools or Redux Devtools?

Yes. They are not considered UI libraries and will not result in penalties.

### Cross-check (score can be less if some parts of the functionality don't work)

- Query library (RTK Query or TanStack Query) is properly implemented - **25**
- All API calls are converted to use the query library - **20**
- Loading states are properly handled and displayed - **15**
- Error states are properly handled and displayed - **10**
- Cache invalidation and refetching work correctly - **20**
- Manual cache invalidation control works as expected - **10**
