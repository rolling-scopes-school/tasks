# React Performance

## Application Requirements

1. Fetch and Display Data

   - Fetch CO2 emissions data by countries from a large hierarchical JSON file (~100MB) ([JSON](https://nyc3.digitaloceanspaces.com/owid-public/data/co2/owid-co2-data.json), [co2-data](https://github.com/owid/co2-data)). Each country/region is a root-level key with an array of yearly data objects.
   - Use React Suspense for data loading. Show a fallback (spinner or skeleton) while loading or parsing data to keep the UI responsive.
   - Display a list of countries, showing name, population (latest year by default), and ISO code (if available). For each country, show a table of yearly data with required columns: year, population, co2, co2_per_capita. If a value is missing, display "N/A".
   - Add a modal widget that lets users select additional columns to display from the available yearly data fields (e.g., methane, oil_co2, temperature_change_from_co2, etc.).

2. Year Selection, Filtering, Sorting, and Search

   - Add a year selector at the top to choose which year to display for all countries/regions. When the year changes, briefly highlight updated data.
   - Filter countries by region using a dropdown menu.
   - Search countries by name using a search bar.
   - Sort countries by population (for the selected year) or by name (ascending/descending).

3. Performance Optimization
   - Use **useMemo** to memoize the filtered, searched, and sorted list of countries and selected columns.
   - Use **useCallback** to memoize event handler functions for filtering, searching, sorting, and column selection.
   - Use **React.memo** to wrap components like country cards and data tables to prevent unnecessary re-renders.
   - Use proper key props for lists and tables to avoid reconciliation issues.

## Technical Requirements

1. Create a separate branch for this task. Branch name: "performance". For this task, you will need to create a new application.
2. Follow the requirements for the project setup listed [here](./project-setup.md)

## Performance Profiling Task

1. **Initial Profiling with React Dev Tools Profiler**

   - Use the React Dev Tools Profiler to measure the performance of your application (e.g., sorting a column, searching a country, selecting another year, adding/removing columns).
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

- Fetch and display country data, including name, population (latest year), and ISO code (if available) - **10 points**
- Display a table of yearly data for each country with required columns (year, population, co2, co2_per_capita) - **10 points**
- Modal widget for selecting additional columns to display - **15 points**
- Year selector to change displayed year for all countries, with highlight on updated data - **15 points**
- Searching countries by name using a search bar - **10 points**
- Sorting countries by population (selected year) or name (asc/desc) - **10 points**
- Using useMemo to memoize filtered, searched, sorted countries and selected columns - **10 points**
- Using useCallback to memoize event handlers for filtering, searching, sorting, and column selection - **10 points**
- Using React Suspense for data loading and fallback UI - **10 points**

### Penalties

- **1. TypeScript & Code Quality**

  - TypeScript isn't used: **-95 points**
  - Usage of _any_: **-20 points per each**
  - Usage of _ts-ignore_: **-20 points per each**
  - Presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**

- **2. Project requirements**

  - Absence of the performance report in the app's `README.md` file: **-70 points**

- **3. External Dependencies**

  - Usage of component libraries, e.g., Material UI, Ant Design: **-100 points**

- **4. Project Management**
  - Commits after the deadline: **-40 points**
  - Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://rs.school/docs/en/pull-request-review-process#pull-request-description-must-contain-the-following): **-10 points**
