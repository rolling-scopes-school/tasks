# User login

**Browser path**: _/signin_

**Score**: 50

**Access**: only for guests (run by guards)

## Description

User can enter _email_ and _password_ into relative form fields and be granted to use personal functions.

### Core elements

- **Email field:** Where users input their login credentials.
- **Password field:** For secure password entry.
- **Sign In button:** To initiate the login process.
- **Sign Up link:** To navigate user to Sign Up page.

> [!IMPORTANT]
> Password recovery is not supported. If a user forgets their password, they will lose access to the system.

### Requirements

#### Requirement 1: User Authentication

- The system must allow users to sign in using their email and password.
- The system should securely authenticate users based on the credentials provided.
- The sign-in page should have fields for email and password input.

#### Requirement 2: User Experience

- The sign-in page should display appropriate error messages for incorrect email/password combinations.
- The sign-in page should be responsive and work on various devices (mobile, tablet, desktop).

#### Requirement 3: Response & Token

- User can click "Sign In" button only once during http-request execution. If authentication was successful - browser receives token, save it into `localStorage` and follow the [instructions](./readme.md#authorization-token).

### Acceptance Criteria

#### Acceptance Criteria 1: Access control

- User should be authenticated and redirected to the homepage upon entering valid email and password.

- Once signed in, the user should not be able to access the Sign In page again until they log out.

- If an authenticated user tries to access the Sign In page directly via the browser URL, they should be redirected to the [Homepage](./home.md).

- After successful authentication each following http-requests must comply with [Authorization record](./readme.md#authorization-token)

#### Acceptance Criteria 2: Error message for incorrect password

- Display "_Incorrect email or password_" error message when user enters a valid email but incorrect password.

- User can fill in any symbols in any languages.

- Password has to be not less 8 symbols excluding space around.

#### Acceptance Criteria 3: Error message for email

- Display "_Incorrect email or password_" error message when user enters a non-existent email.

- Display "_Incorrect email_" error message under email field if content of email field does not match _^[\w\d\_]+@[\w\d\_]+\.\w{2,7}$_ regular expression.

#### Acceptance Criteria 4: Error message for empty field

- Display "_Required_" error message under the empty form fields **after** Sign In button is clicked first time. Error does not appear until user click button regardless of content.

#### Acceptance Criteria 5: Disabled Sign In button

- Button "Sign In" is disabled until user fill valid email/password in. User cannot click it.

#### Acceptance Criteria 6: Responsive design

- The sign-up page must display correctly and be fully functional on mobile, tablet, and desktop devices.

<!-- #### Acceptance Criteria 7: Permanent login

- Active checkbox "Remember me" allows user close the browser, open it again and be still authenticated. -->

## API

### Sign In User

> `(POST) /api/signin`

- Request (application/json)
  - Body (object)
    - email: `user@example.com` (string, required) - User's email address
    - password: `Password123` (string, required) - User's password

- Response 201 (application/json)
  - Attributes (object)
    - token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (string, required) - Authentication token

- Response 400 (application/json)
  - Attributes (object)
    - error:
      - message: `Fields are empty` (string) - Error message
      - reason: `invalidFields` (string) - Unique error type

- Response 400 (application/json)
  - Attributes (object)
    - error:
      - message: `Email is wrong` (string) - Error message
      - reason: `invalidEmail` (string) - Unique error type

- Response 400 (application/json)
  - Attributes (object)
    - error:
      - message: `User is not found` (string) - Error message
      - reason: `userNotFound` (string) - Unique error type

- Response 400 (application/json)
  - Attributes (object)
    - error:
      - message: `Authorization error` (string) - Error message
      - reason: `alreadyLoggedIn` (string) - Unique error type

## Design example

> [!WARNING]
> All mockups should not be considered as final versions! We are providing an idea; you can come up with any design as long as it meets the functional requirements.

### Sign In page example

![Sign In page example](./desgins/signin.png)

## Next Section

- [Profile page](./profile.md)
