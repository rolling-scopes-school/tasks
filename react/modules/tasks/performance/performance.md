# React: Performance

## 🧠 Task Description

In this task, you will optimize a intentionally unoptimized React application that displays CO2 emissions data. The starter application **already includes all functional features**. Your task is to profile the application using React DevTools, identify performance bottlenecks, apply React optimization techniques, and measure the improvements.

## 🎯 Task Goals

- Learn to use React DevTools Profiler to identify performance bottlenecks
- Understand and apply React memoization techniques (useMemo, useCallback, React.memo)
- Learn to optimize list rendering with proper keys and virtualization
- Measure and document performance improvements before and after optimization

## 📋 Prerequisites

1. **Starter Code**: Clone the unoptimized starter application from https://github.com/rolling-scopes-school/react-performance
2. **React DevTools browser extension**:

- [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

## Performance Optimization Workflow

For detailed step-by-step instructions on how to profile the application, see the [Profiling Workflow Guide](./profiling-workflow-guide.md).

### Phase 1: Initial Profiling (Baseline) (**15 points**)

**As a** developer  
**I want** to profile the unoptimized application  
**So that** I can identify performance bottlenecks

**Scenario:** Measure Initial Performance

- **Given** I have the unoptimized starter application running
- **When** I use React DevTools Profiler to record the following interactions:
  - Sorting countries
  - Searching for a country
  - Selecting a different year
  - Toggling columns
- **Then** I capture the following metrics for each interaction:
  - Commit duration
  - Render duration
  - Flame chart
- **And** I document these findings with screenshots in `PERFORMANCE.md`

**Acceptance Criteria:**

- Initial profiling documented with screenshots for all required interactions. [15 points]

---

### Phase 2: Apply Optimizations (**70 points**)

**As a** developer  
**I want** to apply React performance optimizations  
**So that** the application renders more efficiently

**Scenario:** Implement Performance Optimizations

- **Given** I have identified performance bottlenecks from profiling
- **When** I apply React performance optimizations
- **Then** the application should have fewer unnecessary re-renders
- **And** the UI should feel more responsive

**Acceptance Criteria:**

- `useMemo` used for computed values. [12 points]
- `useCallback` used for event handlers. [12 points]
- `React.memo` used to prevent unnecessary component re-renders. [12 points]
- Proper key props used for all lists and tables. [12 points]
- Virtualization implemented for large country list. [22 points]

---

### Phase 3: Final Profiling (Comparison) (**15 points**)

**As a** developer  
**I want** to compare performance before and after optimization  
**So that** I can verify the improvements

**Scenario:** Measure Optimized Performance

- **Given** I have applied performance optimizations
- **When** I profile the same interactions again
- **Then** I capture the same metrics as baseline
- **And** I compare before/after results in `PERFORMANCE.md`
- **And** I document the improvements with screenshots
- **And** I calculate the percentage improvement for each metric

**Acceptance Criteria:**

- Final profiling documented with comparison to baseline. [15 points]

---

## Technical Requirements

### 1. Branch Management

Create a new branch for this task. Branch name: **"performance"**

---

## Penalties

### 1. Project Requirements

- Absence of the performance report in `PERFORMANCE.md`: **-100 points**

### 2. Project Management

- Commits after the deadline: **-40 points**
- Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://rs.school/docs/en/pull-request-review-process#pull-request-description-must-contain-the-following): **-10 points**

---

## 📚 FAQ (Frequently Asked Questions)

### ❓ Can I use 3rd party virtualization libraries?

Yes, you can use react-window, react-virtualized, or implement your own virtualization.

### ❓ What if my app is already fast enough?

The starter application is intentionally unoptimized, so you should see clear performance issues. If you're not seeing problems, double-check that you're using the correct starter code and profiling in development mode.

### ❓ Should I profile in development or production mode?

Profile in **development mode** for the most accurate component-level timing information. Production mode has different performance characteristics due to minification.

### ❓ How do I know if React.memo is working?

You can use the "Highlight updates when components render" feature in React DevTools (Profiler tab settings). Components that don't highlight when their parent updates are properly memoized.

### ❓ Can I use the React Compiler (automatic memoization)?

No, the goal of this task is to learn manual optimization techniques. Using the React Compiler would defeat the learning purpose.
