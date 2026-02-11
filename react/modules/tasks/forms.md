# React Forms

## Application Requirements

1. **Portals**. Use React Portals to display forms in modals:
   - Main page should have buttons to open 2 different modals
   - **Shared modal component** that renders different content:
     - Form created using uncontrolled components approach
     - Similar form created using React Hook Form
   - Modals should be properly accessible (focus management, ESC key to close, click outside to close)

2. **State Management**. Use Redux or Zustand to store the data provided by both approaches on the Main route. You can use tiles to display data taken from each form.

3. **Forms**
   Both forms will collect the same data:
   - name (validate for first uppercased letter)
   - age (should be number, no negative values)
   - email (validate for email)
   - 2 passwords (should match, display the password strength: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character)
   - gender (you can use radio buttons or select control)
   - accept Terms and Conditions agreement (T&C, can be a checkbox)
   - input control to upload picture (validate size and extension, allow png jpeg, save in redux store as base64)
   - autocomplete control to select country (all countries should be stored in the Redux store)
     Form should contain labels, which should be connected with inputs (look at **htmlFor**)

4. **Validation**
   Implement validation according to the input descriptions in p. 3. Use **Yup** or **Zod** (but pick just one) as the validation schema. Show error messages consistently — either above or below each field, and stick with that placement throughout the form.
   - For the **React Hook Form** approach, the submit button should be **disabled** while there are validation errors (live validation).
   - The **uncontrolled form** should validate inputs only **on submit**, and does **not need to disable** the submit button.

   Avoid layout shifts when showing error messages to ensure a smooth user experience.

5. **After submitting the form**
   On successful form submission close the modal and display the newly entered data on the main page. Make an indication for a newly entered data on the main route (e.g. show border in a different color for a few seconds, or a different background color)

6. **Testing Requirements / Unit Testing**
   - **Form Components Testing**: Test both uncontrolled and React Hook Form implementations
     - Test form rendering with all required fields
     - Test field validation (name, age, email, passwords, etc.)
     - Test password strength calculation
     - Test form submission with valid/invalid data
     - Test error message display and clearing

   - **Modal Components Testing**:
     - Test modal opening/closing functionality
     - Test accessibility features (focus management, ESC key)
     - Test click outside to close behavior
     - Test portal rendering

   - **Redux Store Testing**:
     - Test actions and action creators
     - Test reducers with different action types
     - Test selectors
     - Test store state updates after form submissions

   - **Utility Functions Testing**:
     - Test password strength validation
     - Test image to base64 conversion
     - Test form validation helpers
     - Test country autocomplete filtering

## Technical Requirements

1. Create a separate branch for this task. Branch name: "forms". For this task you will need to create a new application.
2. Follow the requirements for the project setup listed [here](./project-setup.md)
3. Add **React Hook Form**, **Yup** or **Zod**, **Redux Toolkit** or **Zustand**, **Jest** or **Vitest** with React Testing Library to the application.

## Points

### Student can get 100 points

- Universal, single modal with React Portal (reusable for both controlled and uncontrolled forms) - **15 points**
- State Management set up with Redux or Zustand and used to collect data from both forms, proper modal behavior (accessibility, close on ESC/outside click) - **15 points**
- Validation works for both forms according to the requirements (error messages, blocking submit button), **Yup** or **Zod** is used for validation (10 points if works only for one form) - **15 points**
- Name, age, email, gender picker, accept T&C are implemented for both forms and collect data (if something doesn't work, score can be less) - **15 points**
- Input for image is implemented for both forms, image is saved as base64 and display on the main page after form submission - **15 points**
- Passwords (with password strength) are implemented for both forms - **15 points**
- Autocomplete works for both forms - **10 points**
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
  - Testing all coverage metrics below 50%: **-50 points**

- **3. External Dependencies**
  - Usage of component libraries, e.g. Material UI, Ant Design: **-100 points**

- **4. Validation**
  - Validation is implemented without **Yup** or **Zod** - **-25 points**

- **5. Project Management**
  - Commits after the deadline: **-40 points**
  - Pull Request doesn't follow guideline (including checkboxes in Score) [PR example](https://rs.school/docs/en/pull-request-review-process#pull-request-description-must-contain-the-following): **-10 points**

## FAQ (Frequently Asked Questions)

### Should the modal close and the form reset after a successful submit?

Yes. Close the modal and clear the form.

### Do we store only the latest submission or all submissions?

Store all successful submissions (a history), and display them on the main page.

### Is Tailwind or icon libraries (e.g., lucide-react) allowed?

Yes. They are not UI component libraries.

### Can I keep the countries list in Zustand instead of Redux?

Yes.

### What branch and PR target?

Work in `forms`, open a PR to `main`.

### What exactly is an uncontrolled form here?

Inputs are not driven by React state (value). Read values via FormData, form onSubmit/onChange, or refs.

### In the uncontrolled form, do I need to disable the submit button?

No. Validate on submit only.

### May I attach onChange handlers in the uncontrolled form?

Yes, as long as you don’t set the input value programmatically.

### Should the uncontrolled form be implemented without React Hook Form?

Yes. Uncontrolled = without RHF; the other form = with RHF.

### In the RHF form, should the submit button be disabled when there are errors?

Yes, live (real-time) validation should disable submit.

### Is the image upload required?

Treat it as required and validate type/size, then store as base64.

### How do I convert the uploaded image to base64?

Use FileReader.readAsDataURL and save the result to the store.

### Is <input list> with <datalist> acceptable for country autocomplete?

Yes, but the countries list must live in the store and the value should be validated against it.

### Must the autocomplete accept only values from the list?

Yes, validate that the chosen value exists in the stored list.

### After reopening a modal, should fields be prefilled with previous data?

No. After a successful submit, reopen as empty.

### What accessibility is required for modals?

Focus trap, return focus to trigger, close on ESC, and close on outside click.

### Do I still need useEffect for loading/error states?

No. Use the form library/state and schema errors; no manual value control.

### How do I test file uploads?

Use userEvent.upload with a File instance in RTL tests.

### Must every required field render in both forms?

Yes. Both forms collect the same data and validate according to the schema.

### Do both forms have to use the same validation schema (Yup or Zod)?

Yes. Apply the chosen schema to both forms.

### How strict should email validation be in this task?

Keep it deliberately minimal. At this learning stage, validate only basic structure:

- exactly one @
- non-empty local part before @
- domain with at least one dot (e.g., example.com)
- Avoid regular expressions. Do not validate with regex. Implement clear, step-by-step checks that you and reviewers can read (split by @, verify non-empty parts, ensure the domain has a dot, etc.).

### How to validate password vs confirmPassword with Zod in real time?

Use refine/superRefine with watch to compare fields.

### Does password strength block submission?

Not required. Only mismatched passwords (and other schema errors) must block.

### How to show password strength in the uncontrolled form?

Show an indicator via form/input onChange, or show a summary after submit errors.

### Can I implement password strength as text instead of a progress bar?

Yes. Any clear indicator is acceptable.
