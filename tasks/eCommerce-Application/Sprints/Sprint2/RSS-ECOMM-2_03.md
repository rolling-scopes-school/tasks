### Integrate login form with CommerceTools authorization service (10 points)

#### Description
Integrate the login form with the CommerceTools authorization service to handle user authorization by submitting the email and password provided by the user. Set up and configure the CommerceTools API to work with the application to manage user authorization securely.

#### CommerceTools Integration Tasks
- Set up a CommerceTools project and configure the required API clients, scopes, and permissions for user authentication.
- Implement a function or module in your application to communicate with the CommerceTools API to submit user email and password for authorization ([authorization documentation](https://docs.commercetools.com/api/authorization#password-flow)).
- Handle the authentication response from the CommerceTools API, which includes receiving the access token, refresh token, and user data upon successful login ([Sign in response documentation](https://docs.commercetools.com/api/projects/customers#customersigninresult)).

#### Acceptance Criteria
- CommerceTools authentication service is set up and configured for the project.
- Login form communicates with the CommerceTools authentication service to sign in users by submitting email and password.
- Application can successfully receive access token, refresh token, and user data from the CommerceTools API.