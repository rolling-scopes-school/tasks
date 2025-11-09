# React: Unit Testing

## 🧠 Task Description

In this task, your goal is to write comprehensive unit tests for the class components created during **Week 1 - Class components**. The primary focus here is on testing, so it’s recommended to avoid modifying or refactoring the components this week. **Pay attention**: you are **not allowed to convert components** to functional ones at this stage.

You must use **Jest** or **Vitest** as the test runner and **React Testing Library (RTL)** for component testing to cover the key behaviors, rendering logic, and user interactions of your components.

## ⚠️ IMPORTANT NOTICE

🚨 The tests you write in this assignment MUST continue to work after refactoring components to functional components in the next week. Focus on testing **behavior and public API**, not implementation details like internal state or lifecycle methods!

## 🎯 Task Goals

- Gain experience in writing unit tests for React class components
- Understand how to test component behavior, props, events, and conditional rendering
- Learn to mock API calls and external dependencies
- Practice testing user interactions and component state changes
- Prepare a solid test foundation for future refactoring (**Week 3 - Functional Routing**)

## Functional Requirements (max **100 points**)

### Feature 1: Test Coverage (**20 points**)

**As a** developer
**I want** to ensure high test coverage
**So that** my components are reliably tested

**Scenario:** Achieve minimum coverage

- **Given** I have written tests for all components
- **Then** statement coverage is at least 80%
- **And** branch, function, and line coverage are at least 50%

**Acceptance Criteria:**

- The test suite achieves at least 80% statement coverage.
- Branch, function, and line coverage are each at least 50%.
- Coverage is measured and reported using Jest or Vitest coverage tools.

### Feature 2: No Implementation Changes (**10 points**)

**As a** developer
**I want** to test class components without modifying their logic
**So that** I preserve original behavior

**Scenario:** Write tests only

- **Given** existing class components
- **When** I write tests
- **Then** I do not change component implementation

**Acceptance Criteria:**

- No changes are made to the logic or structure of class components during testing.
- Refactoring or conversion to functional components is not performed.
- Only minor changes to improve testability (e.g., adding data-testid) are allowed, without altering behavior.

### Feature 3: Behavior-Focused Testing (**15 points**)

**As a** developer
**I want** to test component behavior and public API
**So that** tests remain valid after refactoring

**Scenario:** Focus on behavior

- **Given** a component
- **When** I write tests
- **Then** I test what the component does, not how it does it

**Acceptance Criteria:**

- Tests focus on user-visible behavior and component outputs, not internal implementation details.
- Tests remain valid after refactoring to functional components.

### Feature 4: API Mocking (**15 points**)

**As a** developer
**I want** to mock all external API calls
**So that** tests are isolated and fast

**Scenario:** Mock APIs

- **Given** a component that calls an API
- **When** I run tests
- **Then** all API calls are mocked

**Acceptance Criteria:**

- All external API calls are mocked using Jest, Vitest, or MSW.
- No real network requests are made during test execution.
- Tests cover both successful and error API responses using mocks.

### Feature 5: Error Handling (**20 points**)

**As a** developer
**I want** to test error scenarios
**So that** my components handle errors gracefully

**Scenario:** Test errors

- **Given** a component that can fail
- **When** an error occurs
- **Then** the error scenario is tested

**Acceptance Criteria:**

- Tests simulate error conditions (e.g., failed API calls, thrown errors in components).
- Error boundaries are tested to ensure they catch and handle errors as expected.

### Feature 6: User Interactions (**20 points**)

**As a** developer
**I want** to test all user interactions
**So that** my components respond correctly

**Scenario:** Test interactions

- **Given** a component with user input
- **When** the user interacts (clicks, submits, changes input)
- **Then** the interaction is tested

**Acceptance Criteria:**

- All user interactions (clicks, input changes, form submissions, etc.) are covered by tests.
- Tests verify that components respond correctly to user actions (e.g., updating state, calling callbacks, rendering changes).
- Edge cases and invalid inputs are tested to ensure robust handling of user interactions.

## Technical Requirements

1. **Branch Management**: Create a separate branch from "class-components". Branch name: **"unit-testing"**

2. **Test Runner Configuration**:
   - Configure **Jest** or **Vitest** with React Testing Library
   - Set up test coverage reporting with the following minimum thresholds:

   ```json
   {
     "coverageThreshold": {
       "global": {
         "statements": 80,
         "branches": 50,
         "functions": 50,
         "lines": 50
       }
     }
   }
   ```

3. **Coverage Configuration**:
   - This is an example of coverage configuration:

   ```js
   coverage: {
     include: ['src/**/*.{js,jsx,ts,tsx}'],
     exclude: [
       'src/**/*.test.{js,jsx,ts,tsx}',
       'src/**/*.spec.{js,jsx,ts,tsx}',
       'src/index.{js,jsx,ts,tsx}',
       'src/setupTests.{js,ts}',
       'src/**/*.d.ts'
     ]
   }
   ```

4. **Required Test Files**:
   - Create `.test.tsx` or `.spec.tsx` files for each component
   - Set up test utilities and mocks in a separate `__tests__` or `test-utils` directory

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
  - Usage of Redux or other state management libraries: **-100 points**
  - Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**

- **5. Project Management**
  - Commits after the deadline: **-40 points**
  - Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://rs.school/docs/en/pull-request-review-process#pull-request-description-must-contain-the-following): **-10 points**

## Suggested Test Scenarios

⚠️ You can use the following scenarios as a guide for writing your tests. Feel free to add more tests based on your components' specific behaviors and requirements. Your application may differ from these examples, so these scenarios are **suggestions only**. Strive for **80% test statement coverage** as your target milestone.

### 1. Search Component Tests

- **Rendering Tests**:
  - Renders search input and search button
  - Displays previously saved search term from localStorage on mount
  - Shows empty input when no saved term exists
- **User Interaction Tests**:
  - Updates input value when user types
  - Saves search term to localStorage when search button is clicked
  - Trims whitespace from search input before saving
  - Triggers search callback with correct parameters
- **LocalStorage Integration**:
  - Retrieves saved search term on component mount
  - Overwrites existing localStorage value when new search is performed

### 2. Results/CardList Component Tests

- **Rendering Tests**:
  - Renders correct number of items when data is provided
  - Displays "no results" message when data array is empty
  - Shows loading state while fetching data
- **Data Display Tests**:
  - Correctly displays item names and descriptions
  - Handles missing or undefined data gracefully
- **Error Handling Tests**:
  - Displays error message when API call fails
  - Shows appropriate error for different HTTP status codes (4xx, 5xx)

### 3. Card/Item Component Tests

- **Rendering Tests**:
  - Displays item name and description correctly
  - Handles missing props gracefully

### 4. Loading Component Tests

- **Rendering Tests**:
  - Renders loading indicator (spinner, skeleton, etc.)
  - Shows/hides based on loading prop
- **Accessibility Tests**:
  - Has appropriate ARIA labels for screen readers, if your loading indicator has `aria-label`

### 5. Error Boundary Tests

- **Error Catching Tests**:
  - Catches and handles JavaScript errors in child components
  - Displays fallback UI when error occurs
  - Logs error to console
- **Error Button Tests**:
  - Throws error when test button is clicked
  - Triggers error boundary fallback UI

### 6. Main App Component Tests

- **Integration Tests**:
  - Makes initial API call on component mount
  - Handles search term from localStorage on initial load
  - Manages loading states during API calls
- **API Integration Tests**:
  - Calls API with correct parameters
  - Handles successful API responses
  - Handles API error responses
- **State Management Tests**:
  - Updates component state based on API responses
  - Manages search term state correctly

### 7. API Integration Tests

- **Mocked API Calls**:
  - Use `jest.mock`, or `vi.mock`, or `MSW` to mock API calls
    - [Jest Mock Functions](https://jestjs.io/docs/mock-functions)
    - [Vitest Mocking](https://vitest.dev/guide/mocking)
    - [Mock Service Worker](https://mswjs.io/docs)
  - Test both success and error scenarios

### 8. Setup

- Lastly, update Husky to run tests on the pre-push hook, ensuring that tests are automatically executed before any code is pushed.

### 9. Submission Requirements

1. All tests must pass: `npm run test`
2. Coverage report must show ≥50% in all metrics and ≥80% in statements : `npm run test:coverage`
3. No console errors or warnings during test execution
4. Tests must be deterministic (no flaky tests)
5. All external dependencies must be properly mocked

## 📚 FAQ (Frequently Asked Questions)

### ❓ Am I allowed to modify existing components to make testing easier?

Yes — if necessary, you are allowed to modify the component code to improve testability. Just make sure you don’t change the logic or convert class components to functional ones.

### ❓ Can I add data-testid attributes?

Yes. You may add data-testid attributes if necessary, but prefer semantic queries such as getByRole, getByLabelText, or getByText, following Testing Library’s query priority.

### ❓ Can I use real API calls in tests?

No. You must test your code, not the backend. All API calls should be mocked using `jest.mock`, `vi.mock`, or tools like Mock Service Worker (MSW). Tests should not rely on external services.

### ❓ If one file has low coverage but overall project coverage is fine, will I lose points?

No. The rule applies to the total (global) coverage only.

### ❓ How do I set up coverage threshold?

In your test config (e.g., jest.config.js):

```
coverageThreshold: {
    global: {
        statements: 80,
        branches: 50,
        functions: 50,
        lines: 50,
    },
},
```

### ❓ Should I test main.tsx or App.tsx?

You don’t need to test main.tsx directly. Focus on components like App.tsx and everything rendered within it.

### ❓ Is deployment required for this task?

No, deployment is not mandatory for the unit testing task.  
That said, deploying your app (e.g., to GitHub Pages, Vercel, or Netlify) is highly recommended — it makes the review process easier and demonstrates good development practice.  
If you'd like to deploy, feel free to do so, but it won’t affect your score.
