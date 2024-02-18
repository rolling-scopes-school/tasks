# ⏱ Issue RSS-PZ-02: Implement Comprehensive Validation for First Name and Surname Input Fields (10 points)

## 📝 Description

This task focuses on adding advanced validation rules to the first name and surname input fields. The validation will include restrictions on acceptable characters, case sensitivity requirements, and minimum length enforcement. These rules are crucial for maintaining data consistency and integrity.

## 🔨 Implementation Details

1. **Character Restriction Validation:**

   - Ensure that both input fields only accept English alphabet letters and the hyphen ('-') symbol.
   - Implement a regex pattern in the input field validation to restrict unwanted characters.

2. **Uppercase First Letter Validation:**

   - Validate that the first letter of each field (first name and surname) is in uppercase.
   - This could be achieved through a custom validation script or regex.

3. **Minimum Length Requirement:**

   - Set a minimum length of 3 characters for the first name field and 4 characters for the surname field.
   - Ensure that the form validation checks and enforces these minimum lengths before allowing submission.

4. **Error Messaging:**
   - Create clear and concise error messages for each validation rule.
   - Display these messages near the respective input field when a validation error occurs.

## 🎨 Visual Implementation Ideas

1. **Validation Feedback:**

   - Use color coding (like red for errors) to highlight the input fields when validation fails.
   - Consider inline icons or symbols (like a warning sign) to draw attention to the specific issue.

2. **Error Message Display:**
   - Position error messages close to the respective input field for immediate association.
   - Ensure that the text is legible and contrasts well with the background.

## ✅ Acceptance Criteria

- The first name and surname input fields only accept English alphabet letters and the hyphen.
- The first letter of each input field is validated to be uppercase.
- The first name field requires a minimum of 3 characters, and the surname field requires at least 4 characters.
- Appropriate error messages are displayed for each validation failure.

## 🌐 Useful Links and Resources

- [Regex Patterns for Character Validation](https://www.regular-expressions.info/)
- [JavaScript Form Validation](https://www.w3schools.com/js/js_validation.asp)
- [CSS Techniques for Error Messaging](https://css-tricks.com/form-validation-ux-html-css/)
