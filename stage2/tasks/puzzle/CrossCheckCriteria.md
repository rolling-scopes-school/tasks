# RSS Puzzle Evaluation Cross-Check Criteria (130 points): ✅

### User Name Entry Page Evaluation Criteria (Total Points: 20) 📋👤

#### 1. Implementation of Input Fields and Login Button (10 points) 📝✅

- **(10 points)** 🎯 Create two separate mandatory input fields on the user name entry page: one for the first name and one for the surname. Ensure each field is required for submission. Include a 'Login' button on the page to submit the entered information. [RSS-PZ-01](./stories/RSS-PZ-01.md)

#### 2. Comprehensive Field Validation (10 points) 🧐🔍🆙📏

- **(10 points)** 🎯 Implement comprehensive validation for the first name and surname input fields:
  - Restrict entries to only English alphabet letters and the hyphen ('-') symbol.
  - Validate that the first letter of each field is in uppercase.
  - Set and enforce a minimum length requirement: 3 characters for the first name and 4 characters for the surname. [RSS-PZ-02](./stories/RSS-PZ-02.md)

### Access and Session Management Evaluation Criteria (Total Points: 10) 🔐🔄

#### 1. Local Storage for User Credentials (5 points) 📦🔒

- **(5 points)** 🎯 Ensure that upon successful login, the user's first name and surname are saved in local storage. [RSS-PZ-03](./stories/RSS-PZ-03.md)

#### 2. Access Control and Logout Functionality (5 points) 🔐🚪🔚

- **(5 points)** 🎯 Design the application to grant access to main functionality only for logged-in users. Implement a logout functionality that deletes the user's name and surname from local storage and redirects to the login page. [RSS-PZ-04](./stories/RSS-PZ-04.md)

### Start Screen Evaluation Criteria (Total Points: 15) 🌐🎮

#### 1. Start Screen Content (10 points) 🖼️📖

- **(5 points)** 🎯 Design a start screen that includes the name of the application and a brief description of the game. [RSS-PZ-05](./stories/RSS-PZ-05.md)
- **(5 points)** 🎯 Display a personalized greeting with the user's first name and surname retrieved from local storage. [RSS-PZ-06](./stories/RSS-PZ-06.md)

#### 2. Navigation from Start Screen (5 points) 🚀🔘

- **(5 points)** 🎯 Include a 'Start' button on the start screen that navigates the user to the main game page. [RSS-PZ-07](./stories/RSS-PZ-07.md)

### Basic Game Functionality Evaluation Criteria (Total Points: 85) 🎮🧩

#### 1. Word Cards Randomization and Interaction (15 points) 🃏🔄

- **(15 points)** 🎯 Design the main game page to display word cards in a random order. Implement functionality so that clicking on word cards in the source data block moves them to the result block in the clicked order. [RSS-PZ-08](./stories/RSS-PZ-08.md)

#### 2. Dynamic Word Card Sizing (10 points) 📏🃏

- **(10 points)** 🎯 Ensure that the size of each word card dynamically adjusts to match the length of the word it represents, providing a visually consistent and responsive user experience. [RSS-PZ-09](./stories/RSS-PZ-09.md)

#### 3. Reordering and Returning Word Cards to Source Data Block (5 points) 🔄🔙

- **(5 points)** 🎯 Enable functionality where clicking on word cards in the result block moves them back to the source data block in the clicked order. This feature allows users to modify their sentence construction dynamically. [RSS-PZ-10](./stories/RSS-PZ-10.md)

#### 4. Sentence Transition and Round Completion (10 points) 🔜🎯

- **(10 points)** 🎯 Implement functionality that enables the player to transition to the next sentence upon clicking a button, given the current sentence is correctly assembled. If the current sentence is the last in the round, display the statistics page. This feature ensures a smooth progression through the game. [RSS-PZ-11](./stories/RSS-PZ-11.md)

#### 5. Sentence Assembly Verification (10 points) ✔️🔍

- **(10 points)** 🎯 Provide a 'Check' button that becomes available only when all words of a sentence are in the result block. This button allows players to verify which words are correctly positioned and which are not, offering immediate feedback on their sentence assembly. [RSS-PZ-12](./stories/RSS-PZ-12.md)

#### 6. 'Check' to 'Continue' Button Transformation (5 points) ✔️➡️

- **(5 points)** 🎯 Develop the game logic so that if a sentence is correctly assembled, the 'Check' button transforms into a 'Continue' button, indicating to the player that they can proceed to the next sentence or round. This feature enhances user experience by providing clear guidance on game progression. [RSS-PZ-13](./stories/RSS-PZ-13.md)

#### 7. Automatic Sentence Completion Functionality (10 points) 📝✅

- **(10 points)** 🎯 Implement a feature that, upon activating a specific button, automatically places all words in the result block in the correct order, completing the sentence for the player. [RSS-PZ-14](./stories/RSS-PZ-14.md)

#### 8. Drag-and-Drop Functionality (20 points) 🖱️↔️

- **(20 points)** 🎯 Implement drag-and-drop functionality to allow players to move words with a mouse between the result block and the source data block. Additionally, enable dragging words within the sentence being assembled in the result block for flexible sentence construction. [RSS-PZ-15](./stories/RSS-PZ-15.md)
