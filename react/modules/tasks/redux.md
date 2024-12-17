# Redux. Redux Toolkit, RTK Query. Context api.

## Application Requirements

1. Selected items (Redux):
   - Each item on the dashboard should have a checkbox, information about which items have been selected should be stored in the store;
   - When user navigates to the next page, and then goes back, previously selected items should be shown (if there were any);
   - When user unselects an item, it should be removed from the store;
2. Downloading selected items (Redux):
   - When at least 1 item has been selected, the flyout element should appear at the bottom;
   - The flyout element should contain number of selected elements (e.g. "3 items are selected") and 2 buttons: "Unselect all" and "Download";
   - When "Unselect all" button is clicked, all the selected items should be unselected and the flyout should be removed from the page;
   - When "Download" button is clicked, you should save the list of selected items (e.g. name, description, details url, any other useful information) to the .csv file, name should contain the number of selected items (e.g. if you've selected "episode" endpoint of the Star Trek api and selected 15 items, the name might be "15_episodes.csv")
3. Custom theme (Context API):
   - Add button/radio buttons/dropdown on top of the application for theme selection;
   - User should have an option to select one of the 2 themes (e.g. light or dark);
   - Selected theme should affect the appearance of the whole application

## Technical requirements

1. Create a separate branch for this task from the previous branch task. Branch name: "app-state-management".
2. Redux Integration:
   - Integrate Redux into your application. You'll need to set up the Redux store and reducers using Redux Toolkit.
3. RTK Query integration:
   - RTK Query Implementation: Use Redux Toolkit Query (RTK Query) to make API calls and cache the results. This will modify your previous API call implementation;
   - Use RTK Query to show whether the data is being loaded. Avoid prop-drilling, if it is required to show indicator in child component, put the respective flag in the store;
   - Items returned for the current page should be stored in the store;
   - Currently selected item details should be stored in the store.
4. Context API:
   - Add context to control the application theme (light or dark).
5. Test Updates
   - Update your tests to accommodate the changes introduced by Redux and RTK Query.
   - Test the functionality related to Redux state and API calls.

## Points

A student can achieve a maximum of 200 points.

### Cross-check (score can be less if some parts of the functionality don't work)

- RTK query is used for api calls - **50**
- Selected items are managed through the redux store, selected items are persistent across pages - **50**
- Flyout component is showed/hidden based on the presence of selected items, displays the number of selected items - **20**
- "Unselect all" button and "Download" button work according to the requirements - **35**
- User can switch the theme of the application - **45**

### Penalties

- TypeScript isn't used: **-195 points**
- Test coverage below 80%: **-100 points**
- Usage of _any_: **-20 points per each**
- Usage of _ts-ignore_: **-20 points per each**
- Direct DOM manipulations inside the React components: **-50 points per each**
- Presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**
- Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**
- Commits after the deadline: **-40 points**
- Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://docs.rs.school/#/en/pull-request-review-process?id=pull-request-description-must-contain-the-following): **-10 points**
