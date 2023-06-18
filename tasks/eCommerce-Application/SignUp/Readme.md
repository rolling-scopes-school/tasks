The registration page should provide a form for users to enter their email, password, first name, last name, and date of birth to create an account in the application. Upon successful account creation, users should be redirected to the main page of the application. The registration process should also store user profile information using a service such as commercetools SDK, an alternative service, or through your own custom implementation.

### 1. Input Validation (10 points)

- Implement client-side validation for all required fields in the registration form, such as email, password, first name, last name, and date of birth.
- Display clear error messages indicating any validation issues, such as an improperly formatted email or a weak password.

### 2. Integration with Authentication Service (20 points)

- Integrate the registration form with a chosen authentication service, such as commercetools or Firebase, to handle user registration.
- Implement error handling for failed registration attempts, and display user-friendly error messages.

### 3. State Management and Redirection (10 points)

- Ensure proper user registration state management and successful account creation.
- Redirect users to the application's main page upon successful account creation.

### 4. Integration with commercetools (or alternative) for User Profiles and Addresses (30 points)

- Leverage a back-end service, such as commercetools SDK, an alternative solution, or your own custom implementation, to manage user data and profile information upon registration, including first name, last name, date of birth, and multiple addresses (e.g., home, work, or other address types).
- Allow users to set a default address during registration.
- Enable users to select different billing and shipping addresses or choose a single address for both billing and shipping during the registration process.