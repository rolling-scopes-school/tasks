# API Querying in React

This task is a continuation of the state management task. In this task, you will implement proper data fetching and caching mechanisms using modern querying libraries.

## Application Requirements

1. API Integration:

   - Based on your state management choice from the previous task, implement one of the following:
     - For Redux users: Implement RTK Query for making API calls
     - For Zustand users: Implement TanStack Query (formerly React Query) for data fetching

2. Required Query Features:

   - Cache the results of API calls
   - Display loading states while data is being fetched
   - Handle error states appropriately
   - Implement proper data invalidation and refetching strategies
   - Add a manual cache invalidation control (e.g., a refresh button) that forces a new API call instead of using cached data
   - All previous API calls from your application should be converted to use the chosen query solution

3. Specific Requirements:
   - Data loading states should be visible to users (loading indicators)
   - Error states should be properly handled and displayed to users
   - The cached data should persist between page navigations

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

## Points

A student can achieve a maximum of 100 points.

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
