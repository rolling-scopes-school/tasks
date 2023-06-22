## Sprint 2: Login and Registration Pages Implementation

In the second sprint, the team will focus on implementing both the login and registration pages, including input validation, integration with an authentication service, managing user authentication state, saving the authentication token, providing a button to navigate between the login and registration pages, and implementing routing for proper navigation. The team's progress will be evaluated through a cross-check process, where other students will assign points based on achieving specific goals and milestones. The mentor will also evaluate the team's progress using separate evaluation criteria.

### Working with the Repository

- Create a new branch for the current sprint (e.g., `feat/sprint_2`) from the previous sprint's branch (`develop`).
- Merge all feature branches into the current sprint's branch.
- At the end of the sprint, create a pull request from the current sprint's branch (`feat/sprint_2`) to the previous sprint's branch (`develop`).
- Share the pull request link with the mentor for review and evaluation.

### CrossCheck Criteria (225 points):

### Routing Implementation (30 points - Total)
- **(15 points)** Implement routing for navigation between login, registration, and main pages. [RSS-ECOMM-43](./Sprint2/RSS-ECOMM-43.md)
- **(15 points)** Implement a 404 (Not Found) page for invalid route requests. [RSS-ECOMM-44](./Sprint2/RSS-ECOMM-44.md)

### Login Page Implementation (80 points - Total)

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

### Registration Page Implementation (95 points - Total)

#### Requirements

##### 1. Input Validation (20 points)
- **(10 points)** Implement client-side validation for all required fields in the registration form, such as email, password, first name, last name, date of birth, and address fields (e.g., street, city, postal code, and country) for proper use with CommerceTools. [RSS-ECOMM-31](./Sprint2/RSS-ECOMM-31.md)
- **(10 points)** Display clear error messages indicating any validation issues, such as an improperly formatted email or a weak password. [RSS-ECOMM-32](./Sprint2/RSS-ECOMM-32.md)

##### 2. Integration with Authentication Service (20 points)
- **(10 points)** Integrate the registration form with a chosen authentication service, such as commercetools, to handle user registration. [RSS-ECOMM-33](./Sprint2/RSS-ECOMM-33.md)
- **(10 points)** Implement error handling for failed registration attempts, and display user-friendly error messages. [RSS-ECOMM-34](./Sprint2/RSS-ECOMM-34.md)

##### 3. State Management, Automatic Login, and Redirection (30 points)
- **(15 points)** Upon successful account creation, automatically log in the user, save the authentication token securely, and maintain the user authentication state within the application. [RSS-ECOMM-35](./Sprint2/RSS-ECOMM-35.md)
- **(15 points)** Redirect users to the application's main page upon successful account creation and automatic login. [RSS-ECOMM-36](./Sprint2/RSS-ECOMM-36.md)

##### 4. Integration with commercetools (or alternative) for User Profiles and Addresses (20 points)
- **(10 points)** Allow users to set a default address during registration. [RSS-ECOMM-37](./Sprint2/RSS-ECOMM-37.md)
- **(10 points)** Enable users to select different billing and shipping addresses or choose a single address for both billing and shipping during the registration process. [RSS-ECOMM-38](./Sprint2/RSS-ECOMM-38.md)

##### 5. Navigation to Login Page (5 points)
- **(5 points)** Add a button or link on the registration page that allows users to navigate to the login page. [RSS-ECOMM-39](./Sprint2/RSS-ECOMM-39.md)

### Evaluation Criteria for Header (20 points - Total)

- **(10 points)** Navigation to login and registration pages for unauthorized users [RSS-ECOMM-40](./Sprint2/RSS-ECOMM-40.md)
- **(5 points)** Ability to access the main page for all users [RSS-ECOMM-41](./Sprint2/RSS-ECOMM-41.md)
- **(5 points)** Logout functionality for authorized users [RSS-ECOMM-42](./Sprint2/RSS-ECOMM-42.md)

### Mentor Evaluation Criteria (45 points - Total):

1. **Code Review Participation (10 points):** Students actively participate in code reviews, providing constructive feedback and suggestions to their peers.
2. **No Merges Without Approvals (10 points):** Pull requests are not merged without approvals from other team members, ensuring the quality of code contributions.
3. **Pull Request Descriptions (10 points):** Pull requests include detailed descriptions, outlining the changes made and the purpose of the changes, facilitating better understanding and review.
4. **Task Board Management (10 points):** Students maintain and regularly update a task board (e.g., Trello, Jira), ensuring that tasks are moved according to their progress and completion.
5. **Active Participation in Development Discussions (5 points):** Students take an active role in discussing the development process, sharing ideas, and collaborating on solutions and improvements.

During this sprint, the team of students will implement the login and registration pages with form validation, proper error handling, and integration with an authentication service. Additionally, they will maintain user authentication state, saving the authentication token, handle redirections based on login status, and provide a button for navigating between the login and registration pages. The team should regularly communicate their progress, review each other's code, and integrate their work through the version control system (e.g., Git). The project will be evaluated through a cross-check process by other students.