### Implement client-side validation for required fields in the registration form (10 points)

#### Description
Implement client-side validation for all required fields in the registration form using JavaScript or a front-end library. The fields include:
- Email: A properly formatted email address (e.g., example@email.com)
- Password: Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number
- First name: Must contain at least one character and no special characters or numbers
- Last name: Must contain at least one character and no special characters or numbers
- Date of birth: A valid date input ensuring the user is above a certain age (e.g., 13 years old or older)
- Address fields:
  - Street: Must contain at least one character
  - City: Must contain at least one character and no special characters or numbers
  - Postal code: Must follow the format for the country (e.g., 12345 or A1B 2C3 for the U.S. and Canada, respectively)
  - Country: Must be a valid country from a predefined list or autocomplete field

Ensure that the chosen validation approach is compatible with CommerceTools or the chosen platform.

#### Acceptance Criteria
- Each required field in the registration form has validation rules
- Registration form submission is prevented if the input doesn't meet the requirements