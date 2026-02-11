# RSS Puzzle Evaluation Cross-Check Criteria (245 points): ✅

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

### Basic Game Functionality Evaluation Criteria (Total Points: 80) 🎮🧩

#### 1. Word Cards Randomization and Interaction (10 points) 🃏🔄

- **(10 points)** 🎯 Design the main game page to display word cards in a random order. Implement functionality so that clicking on word cards in the source data block moves them to the result block in the clicked order. [RSS-PZ-08](./stories/RSS-PZ-08.md)

#### 2. Dynamic Word Card Sizing (5 points) 📏🃏

- **(5 points)** 🎯 Ensure that the size of each word card dynamically adjusts to match the length of the word it represents, providing a visually consistent and responsive user experience. [RSS-PZ-09](./stories/RSS-PZ-09.md)

#### 3. Reordering and Returning Word Cards to Source Data Block (5 points) 🔄🔙

- **(5 points)** 🎯 Enable functionality where clicking on word cards in the result block moves them back to the source data block in the clicked order. This feature allows users to modify their sentence construction dynamically. [RSS-PZ-10](./stories/RSS-PZ-10.md)

#### 4. Sentence Transition and Round Completion (10 points) 🔜🎯

- **(10 points)** 🎯 Implement a feature that allows the player to proceed to the next sentence by clicking a button, provided the current sentence is correctly assembled. If the current sentence is the last one in the round and the background image completion feature ([RSS-PZ-28](./stories/RSS-PZ-28.md)) is implemented, then reveal the background image with its details. If [RSS-PZ-28](./stories/RSS-PZ-28.md) is not implemented, the player should automatically proceed to the next round. This design ensures a smooth and engaging progression through the game. [RSS-PZ-11](./stories/RSS-PZ-11.md)

#### 5. Sentence Assembly Verification (10 points) ✔️🔍

- **(10 points)** 🎯 Provide a 'Check' button that becomes available only when all words of a sentence are in the result block. This button allows players to verify which words are correctly positioned and which are not, offering immediate feedback on their sentence assembly. [RSS-PZ-12](./stories/RSS-PZ-12.md)

#### 6. 'Check' to 'Continue' Button Transformation (5 points) ✔️➡️

- **(5 points)** 🎯 Develop the game logic so that if a sentence is correctly assembled, the 'Check' button transforms into a 'Continue' button, indicating to the player that they can proceed to the next sentence or round. This feature enhances user experience by providing clear guidance on game progression. [RSS-PZ-13](./stories/RSS-PZ-13.md)

#### 7. Automatic Sentence Completion Functionality (5 points) 📝✅

- **(5 points)** 🎯 Implement a feature that, upon activating a specific button, automatically places all words in the result block in the correct order, completing the sentence for the player. [RSS-PZ-14](./stories/RSS-PZ-14.md)

#### 8. Drag-and-Drop Functionality (15 points) 🖱️↔️

- **(15 points)** 🎯 Implement drag-and-drop functionality to allow players to move words with a mouse between the result block and the source data block. Additionally, enable dragging words within the sentence being assembled in the result block for flexible sentence construction. [RSS-PZ-15](./stories/RSS-PZ-15.md)

#### 9. Puzzle-Like Word Card Design (15 points) 🧩🃏

- **(15 points)** 🎯 Design word cards to look like puzzle pieces, with interlocking shapes on their sides where the cards touch each other. This design should visually reinforce the concept of assembling sentences as putting together a puzzle. [RSS-PZ-16](./stories/RSS-PZ-16.md)

### Hint Functionality Evaluation Criteria (Total Points: 60) 💡🌐

#### 1. Translation Hint Implementation and Toggle Functionality (10 points) 🌍💬🔄

- **(5 points)** 🎯 Implement a translation hint feature that displays the translation of the sentence to be assembled. This hint provides players with a reference for the sentence structure they are working on. [RSS-PZ-17](./stories/RSS-PZ-17.md)
- **(5 points)** 🎯 Add toggle functionality for the translation hint, allowing players to choose whether it's visible or not. If the hint is enabled, the translation should appear as soon as the sentence is available in the source data block. Conversely, if the hint is disabled, the translation should only be displayed when the sentence is correctly assembled. [RSS-PZ-18](./stories/RSS-PZ-18.md)

#### 2. Pronunciation Hint Implementation and Interactive Audio Icon (20 points) 🗣️🔊💡

- **(5 points)** 🎯 Implement a pronunciation hint feature, allowing players to opt for hearing the pronunciation of the sentence being assembled. This auditory aid supports language learning and comprehension. [RSS-PZ-19](./stories/RSS-PZ-19.md)
- **(10 points)** 🎯 Design the audio icon in the hint block to change its style during pronunciation playback. This interaction visually indicates when the audio is playing, thereby enhancing the player's engagement with the game. [RSS-PZ-20](./stories/RSS-PZ-20.md)
- **(5 points)** 🎯 Add toggle functionality for the pronunciation hint. If the hint is enabled, the audio icon or button should appear immediately when the sentence is available in the source data block. If the hint is disabled, the audio option should only be displayed once the sentence is correctly assembled. [RSS-PZ-21](./stories/RSS-PZ-21.md)

#### 3. Background Image Puzzle Hint (25 points) 🧩🖼️

- **(20 points)** 🎯 Implement a background image feature for the word cards, where each card carries a piece of a larger image. This puzzle-like aspect adds a visual dimension to sentence assembly. [RSS-PZ-22](./stories/RSS-PZ-22.md)
- **(5 points)** 🎯 Provide a toggle option for this background image hint, allowing players to choose whether to display these images during gameplay. If the hint is enabled, the background images should be visible on the word cards in the source data block. If disabled, the images only become visible upon correct sentence assembly. [RSS-PZ-23](./stories/RSS-PZ-23.md)

#### 4. Hint State Persistence and Default Settings (5 points) 💾🔄

- **(5 points)** 🎯 Implement functionality to save the state (enabled or disabled) of each hint in local storage. By default, all hints should be enabled when the game is first started. Ensure that the hint states are reset to their default settings upon user logout. This feature provides a personalized and consistent gameplay experience. [RSS-PZ-24](./stories/RSS-PZ-24.md)

### Level and Round Selection Evaluation Criteria (Total Points: 25) 🎚️🔄

#### 1. Difficulty Level and Round Selection (10 points) 🌐🎲

- **(10 points)** 🎯 Develop a feature that allows players to select from six difficulty levels and various game rounds based on the level chosen and the data in the [source collection](https://github.com/rolling-scopes-school/rss-puzzle-data/tree/main/data). This functionality should enable a tailored gameplay experience according to player preference. [RSS-PZ-25](./stories/RSS-PZ-25.md)

#### 2. Visual Differentiation of Completed Rounds (10 points) 🎨🔢

- **(10 points)** 🎯 Implement visual indicators to distinguish between completed and pending rounds within each difficulty level. This feature enhances user orientation and progress tracking within the game. [RSS-PZ-26](./stories/RSS-PZ-26.md)

#### 3. Persistence and Continuation of Last Round (5 points) 💾🔄

- **(5 points)** 🎯 Ensure that the player's last completed round is saved in local storage. Upon restarting the game, it should automatically commence from the next round following the last completed one. This functionality provides a seamless continuation of gameplay across sessions. [RSS-PZ-27](./stories/RSS-PZ-27.md)

### Completion and Revelation of Background Image Evaluation Criteria (Total Points: 10) 🎨🖼️

#### 1. Background Image Revelation and Information Display (5 points) 🌅🔍

- **(5 points)** 🎯 Implement a feature where, upon correctly assembling all ten sentences in a round, the borders between word cards and the words themselves fade away, making the background image on the cards fully visible. Alongside the revealed image, display brief information about it, including the author, title, and year of creation. This functionality enhances the visual reward and educational value of the game. [RSS-PZ-28](./stories/RSS-PZ-28.md)

#### 2. Transition to Next Round or Results Screen (5 points) 🔜📊

- **(5 points)** 🎯 Ensure that a 'Results' button appears alongside the 'Continue' button upon successfully completing all ten sentences of a round. Clicking 'Continue' should lead to the next round, while 'Results' should display a summary of the player's performance in the completed round. This feature facilitates smooth progression and reflective learning in the game. [RSS-PZ-29](./stories/RSS-PZ-29.md)

### Statistics Page Evaluation Criteria (Total Points: 25) 📊🔍

#### 1. Navigation from Statistics Page (5 points) 🔜🎮

- **(5 points)** 🎯 Implement a 'Continue' button on the statistics page. Clicking this button should navigate the player to the next round of the game [RSS-PZ-30](./stories/RSS-PZ-30.md)

#### 2. Categorization of Sentences (10 points) 📝✅❌

- **(10 points)** 🎯 Create two distinct sections on the statistics page: 'Known' for sentences the player assembled correctly and 'Unknown' for sentences revealed using the 'I don't know' button. This categorization should reflect the player's performance regardless of the number of attempts or hints used. [RSS-PZ-31](./stories/RSS-PZ-31.md)

#### 3. Round Sentences and Audio Pronunciation Feature (5 points) 🔊📖

- **(5 points)** 🎯 Display all sentences from the round on the statistics page, each accompanied by an audio icon. Enable audio playback of each sentence's pronunciation upon clicking the corresponding sentence. This feature aids in auditory learning and reinforces language skills. [RSS-PZ-32](./stories/RSS-PZ-32.md)

#### 4. Miniature Artwork Display (5 points) 🎨🖼️

- **(5 points)** 🎯 Show a miniature of the artwork assembled in the current round on the statistics page. This visual element serves as a reward and a recap of the player's achievement in assembling the puzzle-like sentences. [RSS-PZ-33](./stories/RSS-PZ-33.md)

### Penalties for Cross-Check Evaluation

#### Non-Empty Body in index.html (Penalty: 0 points for the task) 🚫📄

- **(Penalty: 0 points for the task)** 🚫 If the `body` tag in the `index.html` file is not empty, indicating that the page content is not fully generated by TypeScript, the task will receive 0 points.

#### Responsive Design Requirement (Penalty: -50 points) 📐📲

- **(Penalty: -50 points)** 🚫 If the application does not support a minimum width of 768px or if any elements overlap, hide, or become inaccessible on smaller screens. It is acceptable to collapse elements into a menu for space management. Non-compliance with this requirement will result in a deduction of 50 points from the total score.
