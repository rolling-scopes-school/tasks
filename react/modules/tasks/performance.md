# React Performance

## Application Requirements

1. Fetch and Display Data
   - Fetch country data from the [REST Countries API](https://restcountries.com/v3.1/all).
   - Display a list of countries, including their name, population, region, and flag.
2. Add Filtering and Sorting
   - Filter: Allow users to filter countries by region using a dropdown menu.
   - Search: Add a search bar for users to search countries by name.
   - Sort: Include an option to sort countries by population or name (ascending/descending).
3. Optimize the App for Performance
   - useMemo: Use useMemo to memoize the filtered, searched, and sorted list of countries.
   - useCallback: Use useCallback to memoize event handler functions for filtering, searching, and sorting.
   - React.memo: Wrap components like individual country cards in React.memo to prevent unnecessary re-renders.
   - key: Ensure proper use of key props for lists to avoid reconciliation issues.
4. Highlight countries visited by the user (you can store visited countries in the local storage).

## Technical Requirements

1. Create a separate branch for this task. Branch name: "performance". For this task, you will need to create a new application.
2. Follow the requirements for the project setup listed [here](./project-setup.md)

## Points

### Student can get 100 points:

- Fetch and display country data, including name, population, region, and flag - **10 points**
- Filtering by region using a dropdown menu - **10 points**
- Searching countries by name using a search bar - **10 points**
- Sorting countries by population or name (ascending/descending) - **10 points**
- Optimization using useMemo, useCallback, React.memo, and proper use of key props - **50 points**
- Highlighting countries visited by the user, stored in local storage - **10 points**

### Penalties

- Usage of component libraries, e.g., Material UI, Ant Design: **-100 points**
- TypeScript isn't used: **-95 points**
- Usage of _any_: **-20 points per each**
- Usage of _ts-ignore_: **-20 points per each**
- Presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**
- Commits after the deadline: **-40 points**
- Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://docs.rs.school/#/en/pull-request-review-process?id=pull-request-description-must-contain-the-following): **-10 points**
