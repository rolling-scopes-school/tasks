# React Forms

## 🧠 Task Description

In this task, you will implement form handling using two different approaches: uncontrolled components and React Hook Form. You'll create accessible modals using React Portals, implement comprehensive validation, and manage form data using state management libraries.

## Functional Requirements (max **100 points**)

### Feature 1: Modal with React Portals (**15 points**)

**As a** user  
**I want** to open forms in accessible modals  
**So that** I can fill out forms without leaving the main page

**Scenario:** Modal Display and Accessibility

- **Given** I am on the main page
- **When** I click a button to open a form
- **Then** a modal opens using React Portal
- **And** the modal is accessible (focus management, ESC key to close, click outside to close)
- **And** the same modal component can display both uncontrolled and React Hook Form implementations

**Acceptance Criteria:**

- A universal, reusable modal component is created using React Portal. [6 points]
- Modal is accessible with proper focus management. [3 points]
- ESC key support implemented. [3 points]
- Click-outside-to-close functionality has been implemented. [3 points]

### Feature 2: State Management (**15 points**)

**As a** developer  
**I want** to store form submissions in a state management library  
**So that** I can display submitted data on the main page

**Scenario:** Form Data Storage

- **Given** I have implemented forms using both uncontrolled and React Hook Form approaches
- **When** a form is successfully submitted
- **Then** the form data is stored in Redux or Zustand
- **And** all successful submissions are stored (history)
- **And** submitted data is displayed on the main page using tiles or cards

**Acceptance Criteria:**

- Redux Toolkit or Zustand is set up and configured. [5 points]
- Form data from Uncontrolled form is stored in the state management library. [3 points]
- Form data from React Hook Form is stored in the state management library. [3 points]
- All submissions are displayed on the main page. [4 points]

### Feature 3: Basic Form Fields (**15 points**)

**As a** user  
**I want** to fill out basic form fields  
**So that** I can provide my personal information

**Scenario:** Basic Form Input

- **Given** I have opened a form modal
- **When** I fill out the form
- **Then** I can enter my name, age, email, gender, and accept Terms and Conditions
- **And** all fields are properly labeled with connected labels (using `htmlFor`)

**Acceptance Criteria:**

- Name, age, email, gender picker, and Terms & Conditions checkbox are implemented for Uncontrolled form. [5 points]
- Name, age, email, gender picker, and Terms & Conditions checkbox are implemented for React Hook Form. [5 points]
- All fields collect data correctly. [3 points]
- Labels are properly connected to inputs using `htmlFor`. [2 points]

### Feature 4: Advanced Form Fields (**25 points**)

**As a** user  
**I want** to upload an image, set passwords, and select a country  
**So that** I can complete my profile

**Scenario:** Advanced Form Input

- **Given** I am filling out a form
- **When** I interact with advanced fields
- **Then** I can upload an image (validated for type and size, converted to base64)
- **And** I can set passwords with strength indicator
- **And** I can select a country from an autocomplete control

**Acceptance Criteria:**

- Image upload input is implemented for Uncontrolled form with validation (type: png/jpeg, size validation). [3 points]
- Image upload input is implemented for React Hook Form with validation (type: png/jpeg, size validation). [3 points]
- Image is converted to base64 and saved in the store. [4 points]
- Image is displayed on the main page after form submission. [3 points]
- Password fields (password and confirm password) are implemented for Uncontrolled form. [2 points]
- Password fields (password and confirm password) are implemented for React Hook Form. [2 points]
- Password strength indicator is displayed (shows: 1 number, 1 uppercase, 1 lowercase, 1 special character). [4 points]
- Country autocomplete is implemented for Uncontrolled form with countries stored in the state management library. [2 points]
- Country autocomplete is implemented for React Hook Form with countries stored in the state management library. [2 points]

### Feature 5: Form Validation (**15 points**)

**As a** user  
**I want** to see validation errors clearly  
**So that** I know what needs to be corrected

**Scenario:** Form Validation

- **Given** I am filling out a form
- **When** I enter invalid data or submit the form
- **Then** validation errors are displayed consistently
- **And** validation uses Yup or Zod schema
- **And** the React Hook Form submit button is disabled when there are errors (live validation)
- **And** the uncontrolled form validates only on submit

**Validation Rules:**

- Name: first letter must be uppercase
- Age: must be a number, no negative values
- Email: basic email validation (one @, non-empty local part, domain with at least one dot, no regex)
- Passwords: must match
- Image: validate size and extension (png, jpeg)
- Country: must exist in the stored countries list

**Acceptance Criteria:**

- Validation schema is implemented using Yup or Zod for Uncontrolled form. [3 points]
- Validation schema is implemented using Yup or Zod for React Hook Form. [3 points]
- Error messages are displayed consistently (above or below fields) without layout shifts. [3 points]
- React Hook Form submit button is disabled when there are validation errors (live validation). [3 points]
- Uncontrolled form validates only on submit (submit button does not need to be disabled). [3 points]

### Feature 6: Form Submission and Display (**10 points**)

**As a** user  
**I want** to submit forms and see my data displayed  
**So that** I can confirm my submission was successful

**Scenario:** Successful Form Submission

- **Given** I have filled out a form with valid data
- **When** I submit the form
- **Then** the modal closes
- **And** the form data is displayed on the main page
- **And** newly submitted data is visually indicated (e.g., different border or background color for a few seconds)

**Acceptance Criteria:**

- On successful submission, the modal closes and the form resets. [4 points]
- Submitted data is displayed on the main page. [3 points]
- Newly submitted data has a visual indication (e.g., colored border or background). [3 points]

### Feature 7: Test Coverage (**5 points**)

**As a** developer  
**I want** to have comprehensive tests for forms and modals  
**So that** I can ensure reliability and catch regressions

**Scenario:** Form and Modal Testing

- **Given** I have implemented forms and modals
- **When** I run tests
- **Then** form components, modal components, state management, and utility functions are covered

**Acceptance Criteria:**

- Form components are tested (rendering, validation, submission). [2 points]
- Modal components are tested (opening/closing, accessibility, portal rendering). [1 point]
- State management is tested (actions, reducers, selectors). [1 point]
- Utility functions are tested (password strength, image conversion, validation helpers). [1 point]

## Technical Requirements

1. Create a separate branch for this task. Branch name: "forms". For this task you will need to create a new application.

2. Follow the requirements for the project setup listed [here](./project-setup.md)

3. Add **React Hook Form**, **Yup** or **Zod**, **Redux Toolkit** or **Zustand**, **Jest** or **Vitest** with React Testing Library to the application.

### Cross-check (score can be less if some parts of the functionality don't work)

**Max points should be assigned in case if the requirement has been implemented for both forms, if something doesn't work, score should be less**

### Penalties

- **1. TypeScript & Code Quality**
  - TypeScript isn't used: **-95 points**
  - Usage of _any_: **-20 points per each**
  - Usage of _ts-ignore_: **-20 points per each**
  - Presence of _code-smells_ (God-object, chunks of duplicate code), commented code sections: **-10 points per each**

- **2. Test Coverage**
  - Testing statement coverage below 80% (≥70%): **-10 points**
  - Testing statement coverage below 70% (≥50%): **-30 points**
  - All coverage metrics below 50%: **-50 points**

- **3. React Best Practices**
  - Direct DOM manipulations inside the React components: **-50 points per each**

- **4. External Dependencies**
  - Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**

- **5. Validation**
  - Validation is implemented without **Yup** or **Zod**: **-25 points**

- **6. Project Management**
  - Commits after the deadline: **-40 points**
  - Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://rs.school/docs/en/pull-request-review-process#pull-request-description-must-contain-the-following): **-10 points**

## 📚 FAQ (Frequently Asked Questions)

### ❓ Should the modal close and the form reset after a successful submit?

Yes. Close the modal and clear the form.

### ❓ Do we store only the latest submission or all submissions?

Store all successful submissions (a history), and display them on the main page.

### ❓ Is Tailwind or icon libraries (e.g., lucide-react) allowed?

Yes. They are not UI component libraries.

### ❓ Can I keep the countries list in Zustand instead of Redux?

Yes.

### ❓ What branch and PR target?

Work in `forms`, open a PR to `main`.

### ❓ What exactly is an uncontrolled form here?

Inputs are not driven by React state (value). Read values via FormData, form onSubmit/onChange, or refs.

### ❓ In the uncontrolled form, do I need to disable the submit button?

No. Validate on submit only.

### ❓ May I attach onChange handlers in the uncontrolled form?

Yes, as long as you don't set the input value programmatically.

### ❓ Should the uncontrolled form be implemented without React Hook Form?

Yes. Uncontrolled = without RHF; the other form = with RHF.

### ❓ In the RHF form, should the submit button be disabled when there are errors?

Yes, live (real-time) validation should disable submit.

### ❓ Is the image upload required?

Treat it as required and validate type/size, then store as base64.

### ❓ How do I convert the uploaded image to base64?

Use FileReader.readAsDataURL and save the result to the store.

### ❓ Is <input list> with <datalist> acceptable for country autocomplete?

Yes, but the countries list must live in the store and the value should be validated against it.

### ❓ Must the autocomplete accept only values from the list?

Yes, validate that the chosen value exists in the stored list.

### ❓ After reopening a modal, should fields be prefilled with previous data?

No. After a successful submit, reopen as empty.

### ❓ What accessibility is required for modals?

Focus trap, return focus to trigger, close on ESC, and close on outside click.

### ❓ Do I still need useEffect for loading/error states?

No. Use the form library/state and schema errors; no manual value control.

### ❓ How do I test file uploads?

Use userEvent.upload with a File instance in RTL tests.

### ❓ Must every required field render in both forms?

Yes. Both forms collect the same data and validate according to the schema.

### ❓ Do both forms have to use the same validation schema (Yup or Zod)?

Yes. Apply the chosen schema to both forms.

### ❓ How strict should email validation be in this task?

Keep it deliberately minimal. At this learning stage, validate only basic structure:

- exactly one @
- non-empty local part before @
- domain with at least one dot (e.g., example.com)
- Avoid regular expressions. Do not validate with regex. Implement clear, step-by-step checks that you and reviewers can read (split by @, verify non-empty parts, ensure the domain has a dot, etc.).

### ❓ How to validate password vs confirmPassword with Zod in real time?

Use refine/superRefine with watch to compare fields.

### ❓ Does password strength block submission?

Not required. Only mismatched passwords (and other schema errors) must block.

### ❓ How to show password strength in the uncontrolled form?

Show an indicator via form/input onChange, or show a summary after submit errors.

### ❓ Can I implement password strength as text instead of a progress bar?

Yes. Any clear indicator is acceptable.

### ❓ How should focus management be handled in forms (e.g., using Tab to iterate over inputs)?

Ensure that all interactive form elements (inputs, selects, buttons) are reachable and navigable using the Tab key. The tab order should follow the logical sequence of the form fields. Avoid removing elements from the tab order (e.g., via tabIndex={-1}) unless necessary for accessibility. This allows users to efficiently navigate and interact with the form using only the keyboard.
