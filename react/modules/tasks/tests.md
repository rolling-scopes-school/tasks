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

## Application Requirements

1. **Test Coverage**: Achieve at least **80% statement coverage** for all components, with minimum 50% coverage for branches, functions, and lines.
2. **No Implementation Changes**: Write tests for existing class components without modifying their code
3. **Behavior-Focused Testing**: Test what components do, not how they do it
4. **API Mocking**: Mock all external API calls to ensure tests are isolated and fast
5. **Error Handling**: Test both success and error scenarios
6. **User Interactions**: Test all user interactions (clicks, form submissions, input changes)

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

   ```
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

## Points Distribution

### Student can get 100 points

- **Test Runner Setup** (Jest/Vitest configured with RTL, coverage reporting works) - **15 points**
- **Search Component Tests** (localStorage, user input, search functionality) - **20 points**
- **Results/CardList Component Tests** (rendering, data display, loading states) - **15 points**
- **Card Component Tests** (rendering) - **15 points**
- **Error Boundary Tests** (error catching, fallback UI, test error button) - **15 points**
- **API Integration Tests** (mocked API calls, success/error handling) - **15 points**
- **Husky Pre-push Hook** (tests run automatically before push) - **5 points**

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
