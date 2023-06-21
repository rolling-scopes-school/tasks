## Sprint 2: Login and Registration Pages Implementation (175 points)

In the second sprint, the team will focus on implementing both the login and registration pages, including input validation, integration with an authentication service, managing user authentication state, saving the authentication token, and providing a button to navigate between the login and registration pages. The team's progress will be evaluated through a cross-check process, where other students will assign points based on achieving specific goals and milestones.

### Login Page Implementation

#### Requirements

#### 1. Input Validation (20 points)
- **(10 points)** Implement client-side validation for the login form, including email and password fields. [RSS-ECOMM-22](./Sprint2/RSS-ECOMM-22.md)
- **(10 points)** Display clear error messages indicating any validation issues, such as an improperly formatted email. [RSS-ECOMM-23](./Sprint2/RSS-ECOMM-23.md)

#### 2. Integration with Authentication Service (20 points)
- **(10 points)** Integrate the login form with a chosen authentication service (e.g., CommerceTools, Firebase, etc.) to handle user authentication. [RSS-ECOMM-24](./Sprint2/RSS-ECOMM-24.md)
- **(10 points)** Implement error handling for failed authentication attempts, such as incorrect email or password, and display user-friendly error messages. [RSS-ECOMM-25](./Sprint2/RSS-ECOMM-25.md)

#### 3. State Management and Redirection (30 points)
- **(10 points)** Maintain user authentication state within the application. [RSS-ECOMM-26](./Sprint2/RSS-ECOMM-26.md)
- **(10 points)** Redirect users to the application's main page upon successful login. [RSS-ECOMM-27](./Sprint2/RSS-ECOMM-27.md)
- **(10 points)** Redirect users who are already logged in to the main page if they try to access the login page. [RSS-ECOMM-28](./Sprint2/RSS-ECOMM-28.md)

#### 4. Save Authentication Token (5 points)
- **(5 points)** Save the authentication token securely after a successful login attempt, allowing for seamless user authentication across the application. [RSS-ECOMM-29](./Sprint2/RSS-ECOMM-29.md)

#### 5. Navigation to Registration Page (5 points)
- **(5 points)** Add a button or link on the login page that allows users to navigate to the registration page. [RSS-ECOMM-30](./Sprint2/RSS-ECOMM-30.md)

### Registration Page Implementation

#### Requirements

##### 1. Input Validation (20 points)
- **(10 points)** Implement client-side validation for all required fields in the registration form, such as email, password, first name, last name, date of birth, and address fields (e.g., street, city, postal code, and country) for proper use with CommerceTools.
- **(10 points)** Display clear error messages indicating any validation issues, such as an improperly formatted email or a weak password.

##### 2. Integration with Authentication Service (20 points)
- **(10 points)** Integrate the registration form with a chosen authentication service, such as commercetools, to handle user registration.
- **(10 points)** Implement error handling for failed registration attempts, and display user-friendly error messages.

##### 3. State Management, Automatic Login, and Redirection (30 points)
- **(10 points)** Ensure proper user registration state management and successful account creation.
- **(10 points)** Upon successful account creation, automatically log in the user, save the authentication token securely, and maintain the user authentication state within the application.
- **(10 points)** Redirect users to the application's main page upon successful account creation and automatic login.

##### 4. Integration with commercetools (or alternative) for User Profiles and Addresses (20 points)
- **(10 points)** Allow users to set a default address during registration.
- **(10 points)** Enable users to select different billing and shipping addresses or choose a single address for both billing and shipping during the registration process.

##### 5. Navigation to Login Page (5 points)
- **(5 points)** Add a button or link on the registration page that allows users to navigate to the login page.

During this sprint, the team of students will implement the login and registration pages with form validation, proper error handling, and integration with an authentication service. Additionally, they will maintain user authentication state, saving the authentication token, handle redirections based on login status, and provide a button for navigating between the login and registration pages. The team should regularly communicate their progress, review each other's code, and integrate their work through the version control system (e.g., Git). The project will be evaluated through a cross-check process by other students.