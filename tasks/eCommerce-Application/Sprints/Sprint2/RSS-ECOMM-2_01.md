### Implement client-side validation for login form (20 points)

#### Description

Implement client-side validation for the login form, including email and password fields. Ensure that input validation checks are performed in real-time when the user enters their information.

#### Email Validation Rules

- Email address must be properly formatted (e.g., user@example.com).
- Email address must not contain leading or trailing whitespace.
- Email address must contain a domain name (e.g., example.com).
- Email address must contain an '@' symbol separating local part and domain name.

#### Password Validation Rules

- Password must be at least 8 characters long.
- Password must contain at least one uppercase letter (A-Z).
- Password must contain at least one lowercase letter (a-z).
- Password must contain at least one digit (0-9).
- (Optional) Password must contain at least one special character (e.g., !@#$%^&\*).
- Password must not contain leading or trailing whitespace.

#### Show/Hide Password Functionality

- Provide a button or a checkbox to allow users to toggle the visibility of their password.
- When this option is activated, users should be able to see their password in plaintext.
- When this option is deactivated, the password should be replaced with asterisks or bullet points.

#### Acceptance Criteria

- Email field validation checks for a properly formatted email address according to the specified rules.
- Password field validation checks for meeting the length and complexity requirements.
- Show/hide password functionality allows users to toggle password visibility.
- Validation checks are performed as the user types.
