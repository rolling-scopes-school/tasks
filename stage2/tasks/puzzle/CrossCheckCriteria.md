# RSS Puzzle Evaluation Cross-Check Criteria (50 points): ✅

### User Name Entry Page Evaluation Criteria (Total Points: 20) 📋👤

#### 1. Implementation of Input Fields and Login Button (10 points) 📝✅

- **(10 points)** 🎯 Create two separate mandatory input fields on the user name entry page: one for the first name and one for the surname. Ensure each field is required for submission. Include a 'Login' button on the page to submit the entered information. [RSS-PZ-01](./stories/RSS-PZ-01.md)

#### 2. Comprehensive Field Validation (10 points) 🧐🔍🆙📏

- **(10 points)** 🎯 Implement comprehensive validation for the first name and surname input fields:
  - Restrict entries to only English alphabet letters and the hyphen ('-') symbol.
  - Validate that the first letter of each field is in uppercase.
  - Set and enforce a minimum length requirement: 3 characters for the first name and 4 characters for the surname. [RSS-PZ-02](./stories/RSS-PZ-02.md)

### Access and Session Management Evaluation Criteria (Total Points: 10) 🔐🔄

#### 3. Local Storage for User Credentials (5 points) 📦🔒

- **(5 points)** 🎯 Ensure that upon successful login, the user's first name and surname are saved in local storage. [RSS-PZ-03](./stories/RSS-PZ-03.md)

#### 4. Access Control and Logout Functionality (5 points) 🔐🚪🔚

- **(5 points)** 🎯 Design the application to grant access to main functionality only for logged-in users. Implement a logout functionality that deletes the user's name and surname from local storage and redirects to the login page. [RSS-PZ-04](./stories/RSS-PZ-04.md)
