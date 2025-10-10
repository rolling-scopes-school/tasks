# State Management and Context API

## Application Requirements

1. State Management Solution:

   - Students must choose between Redux (with Redux Toolkit) or Zustand as their state management solution.
   - The following functionality must be implemented using the chosen state management solution:

2. Selected Items Management:
   - Each item on the dashboard should have a checkbox
   - Information about selected items should be stored in the application state
   - When user navigates to the next page, and then goes back, previously selected items should be shown (if there were any)
   - When user unselects an item, it should be removed from the state
3. Downloading Selected Items:

   - When at least 1 item has been selected, the flyout element should appear at the bottom
   - The flyout element should contain number of selected elements (e.g. "3 items are selected") and 2 buttons: "Unselect all" and "Download"
   - When "Unselect all" button is clicked, all the selected items should be unselected and the flyout should be removed from the page
   - When "Download" button is clicked, you should save the list of selected items (e.g. name, description, details url, any other useful information) to the .csv file, name should contain the number of selected items (e.g. if 15 items are selected, the name might be "15_items.csv")

4. Custom Theme (Context API):
   - Add button/radio buttons/dropdown on top of the application for theme selection
   - User should have an option to select one of the 2 themes (e.g. light or dark)
   - Selected theme should affect the appearance of the whole application

## Technical Requirements

1. Create a separate branch for this task from the previous branch task. Branch name: "app-state-management"

2. State Management Setup:

   - If using Redux:
     - Integrate Redux into your application using Redux Toolkit
     - Set up the Redux store and reducers using Redux Toolkit
     - Store selected items and their state in Redux store
   - If using Zustand:
     - Set up Zustand store
     - Create appropriate store slices for managing selected items state
     - Implement selectors if needed

3. Context API:

   - Add context to control the application theme (light or dark)

4. Test Updates:
   - Update your tests to accommodate the changes introduced by the chosen state management solution
   - Test the functionality related to state management

## Points

A student can achieve a maximum of 100 points.

## FAQ (Frequently Asked Questions)

### ❓ Can I manipulate DOM directly?

Direct DOM manipulation is only allowed for toggling theme-related attributes on `document.documentElement` inside a `useEffect`. All other DOM manipulations inside React components are **prohibited** and will be penalized.

### ❓ Do I need to use localStorage to remember the selected theme?

Using the **Context API is mandatory** for implementing theme switching.  
If you want to **persist the user's choice across sessions**, you may additionally use `localStorage`, but it is not required by default.

### ❓ Do I need to persist selected items in localStorage?

No. The selected items only need to persist in memory (application state) across page navigations within the session. There's no requirement to store them in localStorage or across reloads.

### ❓ Can I use a library to download the .csv file?

No. **Using any external libraries for downloading files is strictly prohibited.**  
You must implement the download functionality using **native browser APIs** (e.g. `Blob`, `URL.createObjectURL`, `a.download`) without relying on third-party packages.

### Cross-check (score can be less if some parts of the functionality don't work)

- State management is properly implemented with either Redux Toolkit or Zustand - **35**
- Selected items are managed through the state store, selected items are persistent across pages - **25**
- Flyout component is showed/hidden based on the presence of selected items, displays the number of selected items - **15**
- "Unselect all" button and "Download" button work according to the requirements - **10**
- User can switch the theme of the application using Context API - **15**

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

  - Direct DOM manipulations inside the React components (except toggling theme-related classes/attributes on document.documentElement within a useEffect hook): **-50 points per each**

- **4. External Dependencies**

  - Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**

- **5. Project Management**
  - Commits after the deadline: **-40 points**
  - Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://rs.school/docs/en/pull-request-review-process#pull-request-description-must-contain-the-following): **-10 points**
