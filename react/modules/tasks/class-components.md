# React project setup. Class components. Error boundary

## Functional Requirements (max **100 points**)

### Feature 1: Application Layout Structure (**5 points**)

**As a** user
**I want** to see a clearly organized page layout
**So that** I can easily interact with the search functionality and view results

**Scenario:** Page Layout Organization

- **Given** I am on the application page
- **Then** I should see two distinct sections:
  - A smaller search section at the top
  - A larger results section at the bottom

**Acceptance Criteria:**

- The page contains exactly two main sections: a search area and a results area.
- Both sections are visually distinct and clearly separated by layout or styling (e.g., spacing, borders, or background).

### Feature 2: Search Functionality with Local Storage (**15 points**)

**As a** user
**I want** to have a search interface that remembers my last search
**So that** I can continue my previous search session

**Scenario:** Initial Search Component Load

- **Given** I open the application
- **When** the search component loads
- **Then** it should check local storage for a previous search term
- **And** populate the search input if a term exists
- **Or** leave it empty if no previous term is found

**Acceptance Criteria:**

- When the application loads, the search component checks local storage for a previously saved search term:
  - If a saved search term exists, it is automatically displayed in the search input field.
  - If no saved search term exists in local storage, the search input field remains empty.

### Feature 3: Search Results Display (**10 points**)

**As a** user
**I want** to see search results clearly displayed
**So that** I can easily review the found items

**Scenario:** Results Display Format

- **Given** I am viewing the results section
- **Then** each result should display:
  - Item name
  - Item description

**Acceptance Criteria:**

- Search results are displayed in the results section after a search is performed.
- Each result item includes at least the following fields:
  - Name
  - Description
- Results are presented in a clear and readable format (consistent spacing, alignment, and typography).

### Feature 4: Initial Data Load (**10 points**)

**As a** user
**I want** to see relevant items when I first open the application
**So that** I can start browsing immediately

**Scenario:** Default Data Load

- **Given** I open the application
- **When** it initially loads
- **Then** it should fetch the first page of items based on:
  - The search term from input if it exists
  - All available items if no search term exists

**Acceptance Criteria:**

- On initial load, the application **sends a data request** according to the defined logic:
  - If a search term exists in the input, the request includes that term.
  - If no search term exists, the request retrieves all available items.
- The items **returned by the request** are correctly **displayed** in the results section.
- The displayed items **match the query** used in the request.

### Feature 5: Search Execution (**20 points**)

**As a** user
**I want** to search for specific items
**So that** I can find relevant content

**Scenario:** Perform Search

- **Given** I am on the search page
- **When** I enter a search term
- **And** click the "Search" button
- **Then** the system should:
  - Remove any trailing spaces from the input
  - Fetch the first page of matching results
  - Update the display with new results

**Acceptance Criteria:**

- When the **Search** button is clicked, if the input text hasn’t changed, **no new request** is made.
- **Extra spaces** at the start or end of the search text are **removed**.
- The app sends a **request for the first page** of results only.
- The **search term** is included in the request.
- The **results area** shows the items from the server response.

### Feature 6: Search Term Persistence (**5 points**)

**As a** user
**I want** my search terms to be saved
**So that** I can resume my search later

**Scenario:** Save Search Term

- **Given** I perform a search
- **When** I click the "Search" button
- **Then** the search term should be saved to local storage
- **And** overwrite any existing saved term

**Acceptance Criteria:**

- If the search text **has not changed**, nothing happens.
- If the text **has changed**, the **trimmed value** (without extra spaces) is **saved to local storage**, replacing the previous one.

### Feature 7: Loading State Indication (**10 points**)

**As a** user
**I want** to know when the application is loading data
**So that** I understand when to wait for results

**Scenario:** API Request Loading State

- **Given** I initiate any API request
- **Then** I should see a loading indicator (Spinner/Skeleton/Loading Bar/Blur)
- **And** the indicator should remain until data loads

**Acceptance Criteria:**

- A **loading indicator** (e.g., spinner, skeleton, or loading bar) appears **while data is being loaded**.
- The indicator **remains visible** until the data is fully received and displayed.
- Once loading is complete, the **indicator is hidden**.

### Feature 8: Error Handling (**10 points**)

**As a** user
**I want** to be informed when something goes wrong
**So that** I understand why my request failed

**Scenario:** Failed API Request

- **Given** I make a search request
- **When** the server returns an error (4xx or 5xx)
- **Then** I should see a meaningful error message

**Acceptance Criteria:**

- A **clear, human-readable error message** is shown to the user when the server returns an error (4xx or 5xx).
- The **console remains clean** — no uncaught errors or unnecessary error logs are displayed.

### Feature 9: Application Error Boundary (**15 points**)

**As a** user
**I want** the application to handle errors gracefully
**So that** I can still use the app even if parts of it fail

**Scenario:** Error Boundary Implementation

- **Given** an error occurs in the application
- **Then** the error should be logged to the console
- **And** a fallback UI should be displayed
- **And** there should be a test button to simulate errors

**Acceptance Criteria:**

- A **test button** is available to simulate an application error.
- Clicking the test button **triggers an error** that is **logged in the console**.
- A **fallback UI** is displayed when an error occurs.

## Template

This template represents the **possible layout** for your app, but you can create your app based on your own preferences. Feel free to customize it — your creativity is not limited, and **you can design the UI** your users truly deserve.
Successful response.

```text
+-------------------------------------------------------+
|                                                       |
|  +------------------ Top controls ------------------+ |
|  | +--------------------------+ +-----------------+ | |
|  | | [Search Input Field]     | | [Search Button] | | |
|  | +--------------------------+ +-----------------+ | |
|  +--------------------------------------------------+ |
|                                                       |
|  +-------------------- Results ---------------------+ |
|  | +----------------------------------------------+ | |
|  | | Item Name  | Item Description                | | |
|  | +----------------------------------------------+ | |
|  | | [Item 1]   | [Description 1]                 | | |
|  | | [Item 2]   | [Description 2]                 | | |
|  | | ...        | ...                             | | |
|  +--------------------------------------------------+ |
|                                       [Error Button]  |
+-------------------------------------------------------+
```

Non-successful response.

```text
+-------------------------------------------------------+
|                                                       |
|  +------------------ Top controls ------------------+ |
|  | +--------------------------+ +-----------------+ | |
|  | | [Search Input Field]     | | [Search Button] | | |
|  | +--------------------------+ +-----------------+ | |
|  +--------------------------------------------------+ |
|                                                       |
|  +-------------------- Results ---------------------+ |
|  |                                                  | |
|  |                 Error description                | |
|  |                                                  | |
|  +--------------------------------------------------+ |
|                                       [Error Button]  |
+-------------------------------------------------------+
```

## Technical Requirements

1. Create a separate branch for this task. Branch name: "class-components".

2. Follow the requirements for the project setup listed [here](./project-setup.md)

3. Pick a RESTfull api which supports search and pagination (pagination might be referred as _offset_ and _limit_ params). E.g. <https://pokeapi.co/>, for Star Wars fans <https://swapi.dev/api>, for Star Trek fans <https://stapi.co/api-documentation> (OpenApi spec can be checked here <https://editor.swagger.io/?url=https://stapi.co/api/v1/rest/common/download/stapi.yaml>), or you can select another one complying with the requirements.

4. All logical parts should be set into separate components such as CardList, Card, Search, Header, Main etc.

5. **Use class components to get access to lifecycle events or state. Using hooks is forbidden at this stage. Patience, it won't last long.**

6. You can use CSS frameworks (e.g. Tailwind CSS).

### Penalties

- **1. Project setup**
  - Project has been set up without using [Vite](https://vitejs.dev/guide/) with the [_react-ts_ template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts): **-95 points**

- **2. TypeScript & Code Quality**
  - TypeScript isn't used: **-95 points**
  - Usage of _any_: **-20 points per each**
  - Usage of _ts-ignore_: **-20 points per each**
  - Presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**

- **3. React Best Practices**
  - Direct DOM manipulations inside the React components: **-50 points per each**
  - React hooks are used to get access to either state, or to the component lifecycle: **-70 points**

- **4. External Dependencies**
  - Usage of Redux or other state management libraries: **-100 points**
  - Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**

- **5. Project Management**
  - Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://rs.school/docs/en/pull-request-review-process#pull-request-description-must-contain-the-following): **-10 points**

- **6. Technical Requirements**
  - React setup files are located in the `main` branch: **-100 points**
  - Missing dedicated branch named `class-components`: **-100 points**
  - Usage of React hooks: **-100 points**
  - Lack of component decomposition (everything in one file or poorly structured): **-50 points**

## FAQ (Frequently Asked Questions)

### ❓ Does the search input require an exact name match?

Yes. You can implement full-name matching. Partial match is optional.

### ❓ What if the search input is empty?

Fetch the full list (or first page) of items from the API.

### ❓ How to simulate a failed request?

Use MockResponse or set an invalid endpoint to trigger a 4xx/5xx response.

### ❓ How to see the loader during a request?

In your browser’s **Developer Tools → Network** tab, you can **throttle the network speed** to observe the loading indicator.

### ❓ My loader is not visible — API is too fast. What to do?

Wrap the API call in a short setTimeout (e.g. 200–300ms) to simulate loading.

### ❓ I committed to the school repo. What now?

Change the remote URL to your private GitHub repo and push again.
Also, make sure your project is placed in the **root** of the repository, not inside a subfolder.

### ❓ I updated code after submitting a PR. Do I need to resubmit?

No. The PR will update automatically as long as it's not merged.

### ❓ I used function components instead of class components. Is that allowed?

Function components are allowed, but **state and lifecycle functionality must be implemented using class components**.
Hooks are not permitted in this task.
