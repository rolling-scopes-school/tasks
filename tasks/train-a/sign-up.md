# Sign-Up Page

**Browser path**: _/signup_

**Score**: 50

**Access**: only for guests (run by guards)  

## Description

User is able to enter _email_ and _password_ into the relative fields and create new account to get personal service.

### Core elements

- **Email field:** Where users input their login credentials.
- **Password field:** For secure password entry.
- **Sign In button:** To initiate the register process.
- **Sign In link:** To navigate user to Sign Up page.

> [!IMPORTANT]
> Password recovery is not supported. If a user forgets their password, they will lose access to the system.

### Requirements

#### Requirement 1: User Registration

- The system must allow users to sign up using their email, password, and repeat password fields.

- The Sign Up page should include a "Register" button and a "Sign In" link for users who already have an account.

#### Requirement 2: Password Validation

- The system must ensure that the password consists of at least 8 symbols.

- The system must validate that the password and repeat password fields match.

#### Requirement 3: Error Handling

- The Sign Up page should display appropriate error messages if the password and repeat password fields do not match.

- The Sign Up page should display an error message if an account with the provided email already exists.

#### Requirement 4: User Experience

- The Sign Up page should be responsive and work on various devices (mobile, tablet, desktop).

- The Sign Up page should provide a clear and user-friendly interface.

### Acceptance Criteria

#### Acceptance Criteria 1: Access control

- User should be able to register with a valid email, password, and matching repeat password, and should be redirected to a [Sign In page](./sign-in.md) page upon successful registration.

#### Acceptance Criteria 2: Password Validation Error

- Display "_Passwords do not match_" error message when the password and repeat password fields do not match.

- Display "_Password must be at least 8 characters long_" error message when the password is less than 8 characters.

#### Acceptance Criteria 3: Email already exists error

- Display "_Account with this email already exists_" error message when the user tries to sign up with an email that is already registered.

#### Acceptance Criteria 4: Error message for empty field

- Display "_Required_" error message under the empty form fields **after** Register button is clicked first time. Error does not appear until user click button regardless of content.

#### Acceptance Criteria 5: Disabled Sign Up button

- Button "Register" is disabled until user fill valid email/password in. User cannot click it.

#### Acceptance Criteria 6: Responsive design

- The Sign Up page must display correctly and be fully functional on mobile, tablet, and desktop devices.

## API

### Sign Up User

> `(POST) /api/signup`

- Request (application/json)
  - Body (object)
    - email: `user@example.com` (string, required) - User's email address
    - password: `Password123` (string, required) - User's password

- Response 201 (application/json)
  - Attributes (object)

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
      - message: `Password is wrong` (string) - Error message
      - reason: `invalidPassword` (string) - Unique error type

- Response 400 (application/json)
  - Attributes (object)
    - error:
      - message: `User already exists` (string) - Error message
      - reason: `invalidUniqueKey` (string) - Unique error type

## Design example

> [!WARNING]
> All mockups should not be considered as final versions! We are providing an idea; you can come up with any design as long as it meets the functional requirements.

### Sign Up page example

![Sign Up page example](./desgins/signup.png)

## Next section

- [Sign In page](./sign-in.md)
