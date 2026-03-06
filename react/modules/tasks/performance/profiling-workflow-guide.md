# Performance Profiling Workflow Guide

## Overview

This guide provides step-by-step instructions for profiling the unoptimized CO2 emissions application and measuring improvements.

## Using react-scan

The application includes the **react-scan** package, which highlights component updates in real-time. This tool helps visualize which components are re-rendering and can be invaluable for identifying unnecessary renders. It also shows which props, state, or context changes caused a component to re-render, helping you pinpoint the exact cause.

**To enable react-scan:**

1. Open [`performance-starter/src/main.tsx`](../performance-starter/src/main.tsx)
2. Change `enabled: false` to `enabled: true` in the `scan()` configuration:

```tsx
scan({
  enabled: false,
});
```

3. Refresh your application - you'll see colored overlays on components as they render
4. Use this visual feedback to identify components that re-render unnecessarily

---

## Create Performance Documentation

Before starting the profiling process, create a `PERFORMANCE.md` file in your project root with the following structure:

```markdown
# Performance Optimization Report

## Baseline Measurements

### Interaction A: Sort countries

- **Commit duration**: \_\_\_ s
- **Render duration**: \_\_\_ ms
- **Screenshot**: ![screenshot](image.png)

### Interaction B: Search countries

- **Commit duration**: \_\_\_ s
- **Render duration**: \_\_\_ ms
- **Screenshot**: ![screenshot](image.png)

### Interaction C: Change year

- **Commit duration**: \_\_\_ s
- **Render duration**: \_\_\_ ms
- **Screenshot**: ![screenshot](image.png)

### Interaction D: Toggle column

- **Commit duration**: \_\_\_ s
- **Render duration**: \_\_\_ ms
- **Screenshot**: ![screenshot](image.png)
```

## Phase 1: Initial Profiling (Baseline)

**Note:** Before starting, be ready to save your screenshots to the `performance-starter/screenshots/baseline/` directory.

### Step 1: Record Baseline Performance

#### Recording a Profiling Session

1. **Open React DevTools Profiler**
   - Press F12 to open DevTools
   - Click the "Profiler" tab
   - Click the "Start profiling" button (circle icon)

2. **Perform the Following Interactions** (one at a time, separate recordings):

   **Interaction A: Sort countries**
   - Click the sort button to sort by population
   - Wait for the render to complete
   - Click "Stop profiling"

   **Interaction B: Search countries**
   - Type "United" in the search bar
   - Wait for results to update
   - Click "Stop profiling"

   **Interaction C: Change Year**
   - Select a different year from the year selector
   - Wait for data to update
   - Click "Stop profiling"

   **Interaction D: Toggle column**
   - Open the column modal
   - Toggle a column on/off
   - Close the modal
   - Click "Stop profiling"

3. **Analyze Each Recording**

   For each interaction, capture:
   - Commit duration
   - Render duration
   - Flame chart

### Step 2: Document Baseline Results

Update your `PERFORMANCE.md` file with the baseline measurements you recorded.

---

## Phase 2: Apply Optimizations

## Phase 3: Final Profiling (Comparison)

### Step 1: Record Optimized Performance

Repeat the same interactions from Phase 1:

1. **Start Profiling**
2. **Perform Interaction A**: Sort countries
3. **Stop Profiling**
4. **Save Screenshots** to `performance-starter/screenshots/optimized/`

Repeat for Interactions B, C, and D.

### Step 2: Document Optimized Results

Update your `PERFORMANCE.md` file with the optimized measurements and comparison data.

```markdown
## Optimized Measurements

### Interaction A: Sort countries

- **Commit duration**: \_\_\_ s
- **Render duration**: \_\_\_ ms
- **Screenshot**: ![screenshot](image.png)

### Interaction B: Search countries

- **Commit duration**: \_\_\_ s
- **Render duration**: \_\_\_ ms
- **Screenshot**: ![screenshot](image.png)

### Interaction C: Change year

- **Commit duration**: \_\_\_ s
- **Render duration**: \_\_\_ ms
- **Screenshot**: ![screenshot](image.png)

### Interaction D: Toggle column

- **Commit duration**: \_\_\_ s
- **Render duration**: \_\_\_ ms
- **Screenshot**: ![screenshot](image.png)

## Summary of Improvements

| Interaction      | Baseline (ms) | Optimized (ms) | Improvement |
| ---------------- | ------------- | -------------- | ----------- |
| Sort countries   | \_\_\_        | \_\_\_         | \_\_\_%     |
| Search countries | \_\_\_        | \_\_\_         | \_\_\_%     |
| Change year      | \_\_\_        | \_\_\_         | \_\_\_%     |
| Toggle column    | \_\_\_        | \_\_\_         | \_\_\_%     |
| **Average**      | **\_\_\_**    | **\_\_\_**     | **\_\_\_%** |
```
