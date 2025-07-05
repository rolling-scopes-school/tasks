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
   - Implement at least one optimistic update (e.g., when selecting/unselecting items)

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
   - Test optimistic updates if implemented

## Points

A student can achieve a maximum of 100 points.

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
  - Pull Request doesn't follow guideline: **-10 points**
