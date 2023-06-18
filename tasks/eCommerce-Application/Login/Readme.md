The login page should provide a form for users to enter their email and password to sign in to the application. Upon successful authentication, users should be redirected to the main page of the application. If they are already logged in, they should also be redirected to the main page.

### 1. Input Validation (10 points)

- Implement client-side validation for the login form, including email and password fields.
- Display clear error messages indicating any validation issues, such as an improperly formatted email.

### 2. Integration with Authentication Service (20 points)

- Integrate the login form with a chosen authentication service, such as [commercetools](https://docs.commercetools.com/api/projects/customers#authenticate-sign-in-customer) or Firebase or other, to handle user authentication.
- Implement error handling for failed authentication attempts, such as incorrect email or password, and display user-friendly error messages.

### 3. State Management and Redirection (10 points)

- Maintain user authentication state and redirect users to the application's main page upon successful login.
- Redirect users who are already logged in to the main page if they try to access the login page.