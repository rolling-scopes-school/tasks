# State Management and Context API

## Functional Requirements (max **100 points**)

### Feature 1: State Management Solution (**35 points**)

**As a** developer
**I want** to use a modern state management solution  
**So that** my application state is predictable and scalable, users can personalize the application's appearance with light and dark themes, and the application's reliability and maintainability are ensured through at least 80% unit test coverage

**Scenario:** State Store Setup

- **Given** I am starting the application
- **When** I choose a state management solution (Redux Toolkit or Zustand)
- **Then** the application is set up to use the chosen solution for managing state

**Acceptance Criteria:**

- Redux Toolkit or Zustand is integrated into the application. [15 points]
- State store is properly configured and used for managing application state. [10 points]
- Selected items and their state are stored in the state store. [10 points]

### Feature 2: Selected Items Management (**25 points**)

**As a** user
**I want** to select items on the dashboard and have my selections persist across navigation
**So that** I can manage and review selected items easily

**Scenario:** Item Selection Persistence

- **Given** I am viewing items on the dashboard
- **When** I select or unselect items using checkboxes
- **Then** my selections are stored in the application state
- **And** when I navigate between pages, my selections persist

**Acceptance Criteria:**

- Each item has a checkbox for selection. [10 points]
- Selected items are stored in the state and persist across page navigation. [10 points]
- Unselecting an item removes it from the state. [5 points]

### Feature 3: Flyout Component for Selected Items (**15 points**)

**As a** user
**I want** to see a summary of my selected items and have quick actions available
**So that** I can manage selections and download them easily

**Scenario:** Flyout Actions

- **Given** I have selected at least one item
- **When** the flyout appears at the bottom of the page
- **Then** it displays the number of selected items
- **And** provides "Unselect all" and "Download" buttons

**Acceptance Criteria:**

- Flyout appears when at least one item is selected. [5 points]
- Flyout displays the number of selected items. [5 points]
- "Unselect all" and "Download" buttons work as described. [5 points]

### Feature 4: Downloading Selected Items as CSV (**10 points**)

**As a** user
**I want** to download my selected items as a CSV file
**So that** I can save and use the data externally

**Scenario:** CSV Download

- **Given** I have selected items
- **When** I click the "Download" button in the flyout
- **Then** a CSV file is generated containing the selected items' details
- **And** the file name reflects the number of selected items (e.g., "15_items.csv")

**Acceptance Criteria:**

- Download functionality uses native browser APIs (Blob, URL.createObjectURL, a.download). [5 points]
- CSV file contains name, description, details URL, and other useful info. [3 points]
- File name includes the number of selected items. [2 points]

### Feature 5: Theme Selection with Context API (**15 points**)

**As a** user
**I want** to switch between light and dark themes
**So that** I can personalize the application's appearance

**Scenario:** Theme Switching

- **Given** I am using the application
- **When** I select a theme using a button, radio, or dropdown
- **Then** the application's appearance updates to the selected theme

**Acceptance Criteria:**

- Theme selection is implemented using Context API. [8 points]
- Theme affects the appearance of the whole application. [5 points]
- Theme selection control is available at the top of the app. [2 points]

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

### Penalties

- **1. TypeScript & Code Quality**
  - All source files must use `.ts` or `.tsx` extensions. Using `.js` or `.jsx` files: **-20 points per file**
  - TypeScript isn't used: **-95 points**
  - Usage of _any_: **-20 points per each**
  - Usage of _ts-ignore_: **-20 points per each**
  - Presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**
  - ESLint or similar static analysis violations (errors, not warnings): **-5 points per violation**

- **2. Test Coverage**
  - Statement coverage below 80% (≥70%): **-10 points**
  - Statement coverage below 70% (≥50%): **-30 points**
  - All coverage metrics below 50%: **-50 points**

- **3. React Best Practices**
  - Direct DOM manipulations inside React components (except toggling theme-related classes/attributes on `document.documentElement` within a `useEffect` hook, and creating a temporary link to download CSV file): **-50 points per each**
  - Direct mutation of state in Redux or Zustand stores: **-20 points per occurrence**

- **4. External Dependencies**
  - Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**

- **5. Project Management**
  - Commits after the deadline: **-40 points**
  - Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://rs.school/docs/en/pull-request-review-process#pull-request-description-must-contain-the-following): **-10 points**

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
