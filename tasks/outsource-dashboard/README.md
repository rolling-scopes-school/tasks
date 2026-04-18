# Employee & Project Dashboard 📋

## Application Overview 🎯

The **Employee & Project Dashboard** is a comprehensive management application for tracking employees, projects, and their assignments across different time periods. The application allows managers to:

- Manage a database of employees with positions and salaries
- Track projects with budgets and capacity requirements
- Assign employees to projects with flexible capacity allocation (0.0-1.5)
- Apply project fit coefficients to calculate effective capacity
- Track employee availability through a vacation calendar
- View financial projections including revenue, costs, and profits
- Maintain historical data through monthly snapshots
- Copy data between months for planning purposes

The application features a dual-view interface (Projects/Employees), collapsible sidebar navigation, real-time data calculations, and extensive filtering and sorting capabilities.

## Demo App [DashboardDemoApp](https://dashboard-demo-seven-fawn.vercel.app/)

## Main Functional Requirements ✅

### 📊 Data Architecture

The application uses a **monthly snapshot architecture**:

- Each month (e.g., "2026-0" for January 2026) stores a complete copy of all employees and projects
- Example Data structure: `{ "monthlyData": { "2026-0": { employees: [], projects: [] } } }`
- Vacation days are stored directly on employee objects within each month
- Historical data is preserved independently - deleting an item in one month doesn't affect other months
- Current viewing period is managed globally, affecting all data operations

### 🏠 Main Layout

The application consists of:

- **Collapsible sidebar** with:
  - Toggle button to hide/show sidebar
  - Month selector dropdown (January-December)
  - Year selector dropdown (2025-2027, default 2026)
  - Navigation menu (Projects/Employees tabs)
- **Main content area** displaying either Projects or Employees table
- **Slide-in panels** for adding new employees/projects
- **Period selector** that controls which month's data is displayed
- **Seed Data button** to copy data from another month

### 📁 Projects View

#### Project Table Display

The projects table shows:

- **Company Name** (sortable, filterable)
- **Project Name** (sortable, filterable)
- **Budget** (sortable, displayed as currency with 2 decimal places)
- **Employee Capacity** (sortable, displayed as "used/total", e.g., "2.5/3")
  - Used capacity is calculated as sum of all effective capacities (capacity × fit × vacation coefficient)
  - Over-capacity should be visually distinguished (e.g., different color)
- **Employees** - Button showing count (e.g., "Show Employees (3)")
- **Estimated Income** (sortable, color-coded: green for positive, red for negative)
- **Actions** - Delete button

#### Project Financial Calculations

**Revenue Calculation:**

- Capacity for revenue = max(project capacity, total effective capacity used)
- Revenue per effective capacity = budget ÷ capacity for revenue
- Total revenue = revenue per effective capacity × total effective capacity used

**Cost Calculation:**

- Employee cost = employee salary × max(0.5, assigned capacity)
- Minimum payment is 0.5 × salary (bench payment)
- Total cost = sum of all employee costs

**Estimated Income:**

- Project income = total revenue - total cost

**Total Estimated Income:**

- Sum of all projects' estimated income
- Minus bench payments for unassigned employees (0.5 × salary for each)
- Displayed below the projects table with color coding

#### Add New Project

Form with validation:

- **Project Name** (required, min 3 characters, alphanumeric)
- **Company Name** (required, min 2 characters, alphanumeric)
- **Budget** (required, positive number, 2 decimal places)
- **Employee Capacity** (required, integer, minimum 1)

Validation behavior:

- Real-time validation on input and blur events
- Submit button disabled until all fields are valid
- Error messages displayed below invalid fields
- Form accessible via slide-in panel from the right

#### Show Employees Details Popup

Clicking "Show Employees" button opens a popup displaying:

- Employee names (clickable links with action menu)
- Assigned capacity (2 decimal places)
- Project fit coefficient (2 decimal places)
- Vacation days in current month
- Effective capacity (3 decimal places = capacity × fit × vacation coefficient)
- Revenue (based on effective capacity)
- Cost (based on assigned capacity)
- Profit (revenue - cost, color-coded)
- Actions: Edit and Unassign buttons

Popup features:

- Backdrop overlay
- Close button (×)
- Click outside to close
- Empty state message when no employees assigned
- Sorted by employee name

#### Delete Project

- Confirmation dialog with project name
- Unassigns all employees from the project automatically
- Deletes project from current month only
- Refreshes both tables after deletion

### 👥 Employees View

#### Employee Table Display

The employees table shows:

- **Name** (sortable, filterable)
- **Surname** (sortable, filterable)
- **Age** (sortable, calculated from date of birth)
- **Position** (sortable, filterable, inline editable dropdown: Junior/Middle/Senior/Lead/Architect/BO)
- **Salary** (sortable, inline editable, displayed as currency)
- **Estimated Payment** (sortable, calculated based on assignments)
- **Project** (filterable) - Button showing assignment count (e.g., "Show Assignments (2) 1.2/1.5")
  - Shows current capacity usage (e.g., "1.2/1.5")
- **Projected Income** (sortable, sum of all assignment profits, color-coded)
- **Actions**:
  - Availability button (opens vacation calendar)
  - Assign button (opens assignment popup, disabled if capacity ≥ 1.5)
  - Delete button

#### Employee Financial Calculations

**Estimated Payment:**

- If assigned: sum of (salary × max(0.5, capacity)) for each assignment
- If unassigned: salary × 0.5 (bench payment)

**Projected Income:**

- Sum of profits from all assignments
- Profit = revenue - cost
- Revenue based on effective capacity
- Cost based on assigned capacity (minimum 0.5)

#### Add New Employee

Form with validation:

- **Name** (required, min 3 characters, letters only)
- **Surname** (required, min 3 characters, letters only)
- **Date of Birth** (required, must be 18+ years old)
- **Position** (required, dropdown selection)
- **Salary** (required, positive number, 2 decimal places)

Validation behavior:

- Real-time validation with immediate feedback
- Age calculated and validated (18+ only)
- Submit button disabled until all fields valid
- Custom error messages for each field
- Form accessible via slide-in panel

#### Inline Editing

**Position Editing:**

- Click on position cell to activate dropdown
- Select new position from dropdown
- Saves on change or blur
- Updates both tables immediately

**Salary Editing:**

- Click on salary cell to activate input field
- Enter new salary (numeric, positive)
- Saves on blur or Enter key
- Cancels on Escape key
- Updates both tables and recalculates all financials

#### Assign Employee to Project

Clicking "Assign" button opens popup with:

- Current capacity display (e.g., "1.0/1.5")
- Available capacity display
- Project dropdown with availability info
- Capacity slider (0.0-1.5, 0.1 steps)
- Project fit slider (0.0-1.0, 0.1 steps)
- Real-time validation messages
- Project capacity information (used/total)
- Effective capacity display (capacity × fit)
- Predicted capacity after assignment

Features:

- Validates employee capacity limit (1.5 max)
- Warns if project capacity will be exceeded (allows over-capacity)
- Updates in real-time as sliders move
- Displays effective capacity calculation
- Positioned near button, adjusts to stay in viewport

#### Show Assignments Details Popup

Clicking "Show Assignments" button displays:

- Project names (clickable links with action menu)
- Assigned capacity per project
- Project fit coefficient
- Vacation days (same for all projects in current month)
- Effective capacity (capacity × fit × vacation coefficient)
- Revenue, cost, profit per project (color-coded)
- Actions: Edit and Unassign buttons

Popup features:

- Full backdrop overlay
- Centered positioning
- Close button and click-outside-to-close
- Empty state for employees with no assignments

#### Availability Calendar

Clicking "Availability" button opens a calendar popup showing:

**Calendar Grid:**

- Month/year header matching current viewing period
- Days of the week (Sun-Mon-Tue-Wed-Thu-Fri-Sat)
- Current date highlighted (if viewing current month)
- Weekends visually distinguished
- Vacation days marked with special styling
- Clickable days for selecting vacations

**Working Days Information:**

- Display: "Working Days: X/Y days"
- X = actual working days (total working days - vacation working days)
- Y = total working days (excluding weekends)
- Updates in real-time as vacation days are selected

**Vacation Days Display:**

- Shows selected days in formatted ranges
- Format: "DD.MM" for single days, "DD.MM-DD.MM" for ranges
- Consecutive days with only weekends between are shown as one range
- Example: "03.01-05.01, 10.01, 15.01-17.01"

**Functionality:**

- Click days to toggle vacation selection
- Selected days highlighted
- "Set Vacation" button saves selections
- Saves even if empty (allows clearing vacations)
- Recalculates all capacity and profit metrics across tables
- Can only select weekends (they count as vacation but don't affect working days)

#### Delete Employee

- Confirmation dialog with employee name
- Automatically unassigns from all projects
- Deletes employee from current month only
- Refreshes both tables

### 🔄 Assignment Management

#### Edit Assignment

Available from employee assignments popup and project employees popup:

- Shows current capacity and fit values
- Sliders for adjusting both values
- Validates against available employee capacity
- Validates project fit range (0.0-1.0)
- Real-time validation feedback
- Saves and refreshes all relevant displays

#### Unassign Confirmation Popup

Shows detailed financial impact:

- Employee name, project name
- Assigned capacity
- Employee salary share (salary × capacity)
- Budget share (proportional budget allocation)
- Employee estimated income for this assignment
- Current project capacity (before/after)
- Project income (before/after)
- Color-coded positive/negative values
- Confirm/Cancel buttons

After confirming:

- Removes assignment
- Updates both tables
- Refreshes any open detail popups

### 🔍 Filtering & Sorting

#### Column Sorting

- Click sort icon (⇅) on sortable columns
- First click: ascending order (↑)
- Second click: descending order (↓)
- Active sort column highlighted
- Sorts: strings alphabetically, numbers numerically
- Works on both Projects and Employees tables

**Sortable Columns:**

- Projects: Company Name, Project Name, Budget, Employee Capacity, Estimated Income
- Employees: Name, Surname, Age, Position, Salary, Estimated Payment, Projected Income

#### Column Filtering

- Click filter icon (⌕) on filterable columns
- Opens filter popup near column header
- Text input for most columns
- Dropdown for Position column (Junior/Middle/Senior/Lead/Architect/BO)
- Apply/Cancel buttons
- Enter key to apply filter
- For dropdowns: auto-apply on selection

**Filterable Columns:**

- Projects: Company Name, Project Name
- Employees: Name, Surname, Position

#### Filter Chips

- Active filters displayed as chips above table
- Format: "Column: value"
- Click × on chip to remove individual filter
- "Clear Filters" chip appears when 2+ filters active
- Clicking "Clear Filters" removes all filters at once

### 🎨 Interactive Popups & Modals

#### Assignment Popup

- Positioned near the button that triggered it
- Adjusts position to stay within viewport boundaries
- Updates position on window scroll and resize
- Closes on click outside
- Closes on Cancel button
- Removes scroll/resize listeners on close

#### Details Popups (Employees/Assignments)

- Full-screen backdrop overlay
- Centered position
- Close button (×)
- Click backdrop to close
- Prevents event propagation on content
- Nested action menus for employee/project links

#### Action Menus

For employee/project name links in detail tables:

- Small popup with 2 buttons:
  - "See at Projects/Employees" - navigates to tab with filter
  - "Unassign" - opens unassignment confirmation
- Positioned relative to link
- Click outside to close
- Proper cleanup when in nested popup

#### Calendar Popup

- Fixed position, centered on screen
- Backdrop overlay
- Displays current viewing period (not today's date)
- Interactive day selection
- Real-time working days calculation
- Formatted vacation days display
- Prevents closing when clicking inside

### 📅 Period Management

#### Month/Year Selectors

- Dropdowns in sidebar
- Month: January-December (values 0-11)
- Year: 2025-2027
- Default: Current date's month and year
- Changing either selector:
  - Updates global current period
  - Loads data for selected month
  - Refreshes both tables
  - Maintains sort and filter state

#### Seed Data Feature

Clicking "Seed Data" button:

1. Opens popup showing all months with data (except current month)
2. For each month displays:
   - Year and month name
   - Number of projects
   - Number of employees
   - Total estimated income (color-coded)
   - "Seed" button
3. Clicking "Seed" button:
   - Confirms action with month names
   - Copies complete data to current month
   - Clears vacation days (month-specific)
   - Refreshes tables

### 🧭 Navigation & UI State

#### Sidebar Navigation

- Toggle button (☰) to collapse sidebar
- When collapsed: shows open button (→)
- Clicking open button restores sidebar
- Projects/Employees tabs switch main content
- Active tab highlighted
- Content areas show/hide based on selection

#### Navigation with Filters

From detail popups:

- "See at Projects" - switches to Projects tab, applies project name filter
- "See at Employees" - switches to Employees tab, applies name and surname filters
- Filters applied automatically
- Previous filters cleared

### 💾 Data Persistence

All data stored in localStorage under "monthlyData" key:

- Structure: `{ "YYYY-M": { employees: [], projects: [] } }`
- Automatic save after every data modification
- Load on page refresh maintains state
- Each month independent - changes don't affect other months

## Main Technical Requirements 💻

### 📐 Architecture & Code Organization

#### Code Organization

The application should be organized with clear separation of concerns. You are free to structure your code however you prefer (single file, multiple modules, classes, functions, etc.).

### 🎯 Technical Constraints

**Forbidden:**

- jQuery or other frameworks/libraries
- React, Vue, Angular, or any framework

### 📦 Data Storage Requirements

The application must store the following data in localStorage:

**Employee Data:**

- Unique identifier
- Name and surname
- Date of birth
- Position (Junior/Middle/Senior/Lead/Architect/BO)
- Salary
- Project assignments (with capacity 0.0-1.5 and fit 0.0-1.0 for each project)
- Vacation days for each month (day numbers 1-31)

**Project Data:**

- Unique identifier
- Project name
- Company name
- Budget
- Employee capacity

**Monthly Snapshots:**

- Data organized by month (e.g., January 2026, February 2026)
- Each month contains complete independent copy of employees and projects
- localStorage key: "monthlyData"

### 🧮 Calculation Formulas

**Vacation Coefficient:**

```javascript
workingDays = count of weekdays in month
vacationWorkingDays = count of vacation days that are weekdays
vacationCoefficient = (workingDays - vacationWorkingDays) / workingDays
```

**Effective Capacity:**

```javascript
effectiveCapacity = assignedCapacity × fit × vacationCoefficient
```

**Revenue Calculation:**

```javascript
usedEffectiveCapacity = sum of all employees' effective capacities
capacityForRevenue = max(projectCapacity, usedEffectiveCapacity)
revenuePerEffectiveCapacity = budget / capacityForRevenue
employeeRevenue = revenuePerEffectiveCapacity × employeeEffectiveCapacity
```

**Cost Calculation:**

```javascript
employeeCost = salary × max(0.5, assignedCapacity)
benchCost = salary × 0.5  // For unassigned employees
```

**Profit Calculation:**

```javascript
profit = revenue - cost
projectProfit = totalRevenue - totalCosts
employeeProfit = sum of profits from all assignments
```

### 📱 Responsive Behavior

**Assignment Popup:**

- Must stay within viewport boundaries (adjust position if would overflow screen)
- Must update position when user scrolls or resizes window

**Sidebar:**

- Must be collapsible and expandable

### Data Persistence

**Required:**

- All data persists in localStorage
- Data automatically saves after every modification
- Data loads correctly on page refresh
- If no data exists, initialize with sample data

## Repository Requirements 📁

### 📂 Repository Structure

You are free to organize your project structure as you prefer. A typical structure might include:

- HTML file(s)
- JavaScript file(s)
- CSS file(s)
- README.md

### 📝 README.md Requirements

Must include:

- Project title and description
- Features list
- Tech stack
- How to run the application
- Any special notes about implementation

### 🚫 .gitignore

Recommended to exclude:

- `node_modules/` (if using npm)
- `.DS_Store`
- IDE-specific files

### 🌐 Deployment

- Deploy to GitHub Pages or similar hosting
- All features must work in deployed version
- No console errors

## Evaluation Criteria 📊

This section provides a breakdown of evaluation points. **Points are awarded for working functionality only** - we evaluate whether features work correctly, not how the code is structured or styled.

### 1. Data Persistence & Monthly Snapshots (25 points)

- [ ] **5 pts** - Data persists in localStorage and loads on page refresh
- [ ] **5 pts** - Each month stores independent data (changes in one month don't affect others)
- [ ] **5 pts** - Month/Year selectors switch between different months' data correctly
- [ ] **5 pts** - Seed Data feature copies data from one month to another
- [ ] **5 pts** - Vacation days are cleared when copying data to new month

### 2. Employee CRUD Operations (15 points)

- [ ] **5 pts** - Add Employee form creates new employees with all fields
- [ ] **5 pts** - Delete Employee button removes employee and all their assignments
- [ ] **5 pts** - Inline editing works for Position (dropdown) and Salary (number input)

### 3. Project CRUD Operations (10 points)

- [ ] **5 pts** - Add Project form creates new projects with all fields
- [ ] **5 pts** - Delete Project button removes project and unassigns all employees

### 4. Assignment Management (20 points)

- [ ] **8 pts** - Assign button opens popup and successfully assigns employee to project with capacity and fit
- [ ] **7 pts** - Unassign confirmation popup shows financial details and successfully unassigns
- [ ] **5 pts** - Edit assignment popup successfully updates capacity and fit values

### 5. Financial Calculations (30 points)

- [ ] **8 pts** - Effective capacity calculated correctly: capacity × fit × vacation coefficient
- [ ] **7 pts** - Revenue calculations correct (per employee and per project)
- [ ] **7 pts** - Cost calculations correct (minimum 0.5 × salary, bench payments)
- [ ] **8 pts** - Profit/Income values correct and color-coded (green/red)

### 6. Forms & Validation (15 points)

- [ ] **5 pts** - Employee form validates all fields (name, surname, DOB 18+, position, salary)
- [ ] **5 pts** - Project form validates all fields (project name, company, budget, capacity)
- [ ] **5 pts** - Submit buttons disabled until all fields valid, error messages appear/disappear correctly

### 7. Tables Display (15 points)

- [ ] **4 pts** - Projects table displays all data correctly (capacity as "used/total", income color-coded)
- [ ] **4 pts** - Employees table displays all data correctly (age calculated, assignments count shown)
- [ ] **4 pts** - Total Estimated Income displayed below projects table with correct calculation
- [ ] **3 pts** - Assign button disabled when employee at max capacity (1.5)

### 8. Sorting (10 points)

- [ ] **5 pts** - Clicking sort icons sorts columns ascending/descending (both tables)
- [ ] **5 pts** - Sort icons update to show current state (↑ ↓ ⇅)

### 9. Filtering (10 points)

- [ ] **5 pts** - Filter popups work for text columns and Position dropdown
- [ ] **3 pts** - Filter chips display active filters and can be removed individually
- [ ] **2 pts** - "Clear Filters" appears when 2+ filters active

### 10. Details Popups (15 points)

- [ ] **5 pts** - "Show Employees" popup displays all employees on project with correct calculations
- [ ] **5 pts** - "Show Assignments" popup displays all employee assignments with correct calculations
- [ ] **3 pts** - Popups have close button and click-outside-to-close functionality
- [ ] **2 pts** - Empty state message shown when no data

### 11. Assignment Popup Positioning (5 points)

- [ ] **3 pts** - Assignment popup positioned near button and stays within viewport
- [ ] **2 pts** - Popup repositions on scroll and resize

### 12. Availability Calendar (20 points)

- [ ] **5 pts** - Calendar displays correct month/year from current viewing period
- [ ] **5 pts** - Weekends visually distinguished, today highlighted (if current month)
- [ ] **5 pts** - Click days to select vacations, working days count updates in real-time
- [ ] **5 pts** - Vacation days formatted correctly ("DD.MM" or "DD.MM-DD.MM" ranges)

### 13. Navigation & UI (10 points)

- [ ] **3 pts** - Projects/Employees tabs switch content correctly
- [ ] **3 pts** - Sidebar collapses/expands with toggle button
- [ ] **4 pts** - "See at Projects/Employees" links navigate and apply filters

---

## Total Points: **200 points**

### Grading Scale:

- **180-200 pts (90%+)**: Excellent - All features working perfectly
- **160-179 pts (80-89%)**: Very Good - All major features working
- **140-159 pts (70-79%)**: Good - Most features working
- **120-139 pts (60-69%)**: Satisfactory - Core features working
- **Below 120 pts (<60%)**: Needs Improvement - Missing significant functionality

## Useful Resources & Links 📖

### JavaScript References

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [MDN Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [MDN Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

### DOM Manipulation

- [MDN DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [Event Delegation](https://javascript.info/event-delegation)
- [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

### localStorage

- [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Working with localStorage](https://javascript.info/localstorage)

### Form Validation

- [MDN Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [HTML5 Constraint Validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation)

### Git & GitHub

- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [GitHub Pages Deployment](https://docs.github.com/en/pages)

---

**Good luck with your implementation! Focus on getting the JavaScript logic correct - that's what we're evaluating. The styling is already provided in the demo.**
