# React Performance

## Application Requirements

1. Fetch and Display Data
   - Fetch country data from the [REST Countries API](https://restcountries.com/v3.1/all).
   - Display a list of countries, including their name, population, region, and flag.
2. Add Filtering and Sorting
   - Filter: Allow users to filter countries by region using a dropdown menu.
   - Search: Add a search bar for users to search countries by name.
   - Sort: Include an option to sort countries by population or name (ascending/descending).
3. Optimize the App for Performance (mind the _Performance Profiling Task_ details)
   - useMemo: Use useMemo to memoize the filtered, searched, and sorted list of countries.
   - useCallback: Use useCallback to memoize event handler functions for filtering, searching, and sorting.
   - React.memo: Wrap components like individual country cards in React.memo to prevent unnecessary re-renders.
   - key: Ensure proper use of key props for lists to avoid reconciliation issues.
4. Highlight countries visited by the user (you can store visited countries in the local storage).

## Technical Requirements

1. Create a separate branch for this task. Branch name: "performance". For this task, you will need to create a new application.
2. Follow the requirements for the project setup listed [here](./project-setup.md)

## Performance Profiling Task

1. **Initial Profiling with React Dev Tools Profiler**

   - Use the React Dev Tools Profiler to measure the performance of your application (e.g., sorting a column).
   - Record interactions and analyze the results.
   - Put a brief description of the app performance, including screenshots from the Profiler, in the app's `README.md` file.
   - **Parameters to Check:**
     - **Commit Duration:** Time taken for React to render the committed updates.
     - **Render Duration:** Time taken for individual components to render.
     - **Interactions:** User interactions that triggered the renders.
     - **Flame Graph:** Visual representation of component render times.
     - **Ranked Chart:** Sorted list of components by render duration.

2. **Update the App with React.memo and useMemo**
   - Optimize your application by using `React.memo` and `useMemo` to prevent unnecessary re-renders and memoize values.
   - Perform the same profiling again using the React Dev Tools Profiler.
   - Update the `README.md` file with the updated results and screenshots from the Profiler.
   - **Parameters to Check:**
     - **Commit Duration:** Compare the time taken for React to render the committed updates before and after optimization.
     - **Render Duration:** Compare the time taken for individual components to render before and after optimization.
     - **Interactions:** Analyze if the number of interactions triggering renders has decreased.
     - **Flame Graph:** Compare the visual representation of component render times before and after optimization.
     - **Ranked Chart:** Compare the sorted list of components by render duration before and after optimization.

## Points

### Student can get 100 points:

- Fetch and display country data, including name, population, region, and flag - **10 points**
- Filtering by region using a dropdown menu - **10 points**
- Searching countries by name using a search bar - **10 points**
- Sorting countries by population or name (ascending/descending) - **10 points**
- Using useMemo to memoize the filtered, searched, and sorted list of countries - **10 points**
- Using useCallback to memoize event handler functions for filtering, searching, and sorting - **10 points**
- Wrapping components like individual country cards in React.memo to prevent unnecessary re-renders - **10 points**
- Highlighting countries visited by the user - **10 points**
- Profiling the application performance before and after optimization, and updating the README.md file with results - **20 points**

### Penalties

- Usage of component libraries, e.g., Material UI, Ant Design: **-100 points**
- TypeScript isn't used: **-95 points**
- Usage of _any_: **-20 points per each**
- Usage of _ts-ignore_: **-20 points per each**
- Presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**
- Commits after the deadline: **-40 points**
- Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://docs.rs.school/#/en/pull-request-review-process?id=pull-request-description-must-contain-the-following): **-10 points**
