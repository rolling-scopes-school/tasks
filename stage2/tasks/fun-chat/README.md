## Task «Fun Chat»

What could be better than chatting with your friends using a chat app?<br>
But what if the service owner deletes your messages? Or, on the contrary, they can store your chat history without your consent!<br>
You know how to create an outstanding design and functionality, right? Let's not delay and get down to work! Let's create our own chat.
We've found a ready-made [server application](https://github.com/rolling-scopes-school/fun-chat-server/tree/main) and got a [detailed description](https://github.com/rolling-scopes-school/fun-chat-server/tree/main#readme) for it.

## Task Objectives

- Familiarize yourself with the WebSocket connection protocol.
- Gain experience working with a connection where both the client and server applications can initiate sending messages.
- Refine and solidify your skills in asynchronous coding.
- Enhance and consolidate your skills in working with the Document Object Model (DOM) and creating markup using code.

## Useful Links

- [MDN: WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
- [MDN Quick Guide: Writing WebSocket client applications](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [WebSockets Specification](https://www.rfc-editor.org/rfc/rfc6455)

## Setting Up for Development / Preparing for Development

Before initiating the development of the client application, you have to clone the [server application](https://github.com/rolling-scopes-school/fun-chat-server/tree/main) to your local computer, launch the local server, and maintain the server application's operation as needed.

**Important!** If for any reason you have changed the port which your client application will use and it is different from the one suggested in the server application settings, be sure to notify your reviewers.

To complete the task in the school repository, create a separate branch and regularly commit your solutions to it.

You have complete freedom to implement any visual design for the application. You will find a sample of a possible app design [here](https://mikaleinik.github.io/chat-deploy).

## Functional Requirements (+250)

#### 1. User Authentication Page (+30)

1. (+5) The login field is checked by a validator. The validator must be different from the password applied in the field. The selection of validation criteria and their display options is at the student's discretion. An empty string validator is not acceptable.
2. (+5) The password field is checked by a validator. The validator must be different from the one used in the login field. The selection of validation criteria and their display options is at the student's discretion. An empty string validator is not acceptable.
3. (+5) The user is unable to submit an authentication request with data that has not passed validation.
4. (+5) In case of an authentication error (based on the server response), a message indicating the corresponding error sent by the server must be displayed. The message does not have to be a complete copy of the server's response.
5. (+5) User authentication is possible both by clicking the button with the mouse or by pressing the "Enter" key without the need to focus on the button.
6. (+5) Only not authenticated users have access to this page. If the user is authorized and tries to proceed to the Authentication page, they must be redirected to the Main page automatically.

#### 2. Main Page (+5)

1. (+5) Only authenticated users have access to this page. If the user is unauthorized and tries to proceed to the Main page, they must be redirected to the Authentication page automatically.

#### 3. Header (on the main page) (+15)

1. (+5) Displays the current authenticated user's name.
2. (+5) Displays the app's name.
3. (+5) Includes a logout button which when pressed terminates the current session and opens the authentication form (window/page).

#### 4. Footer (on the main page) (+5)

1. (+5) Includes the school's logo and name, the author's name, a link to the author's GitHub, and the year of the app creation.

#### 5. User List (on the main page) (+30)

1. (+10) Displays all registered users and an indicator of each user's online status.
2. (+5) The currently authenticated user is not in the list.
3. (+5) Implements user search by name. The search will be case sensitive or case-insensitive at the student's discretion.
4. (+10) Displays information about the number of unread messages from each user.

#### 6. User Dialogue (on the main page) (+75)

1. (+5) Provides information about the user with whom the dialogue is open, as well as indicating whether that user is online.
2. (+5) Provides a complete message history with the selected user, including messages from both the current user and the user with whom the dialogue is currently open.
3. (+5) Arranges messages chronologically based on the time of sending. The latest message is displayed near the message input and send component.
4. (+5) In the absence of message history, a message in the message history field indicates that this is the beginning of the dialogue.
5. (+5) When sending a message to another user, the message history scrolls to the sent message (making the just-sent message visible to the user).
6. (+5) When receiving a message from another user in an open dialogue, the message history scrolls to the received message (making the just-received message visible to the user).
7. (+5) When opening a dialogue with unread messages, new messages are separated from the read messages by a dividing line, and the user can see the dividing line and at least one unread message. When receiving new unread messages in an open dialogue, the line must always stay within the dialogue area and not hide in the scroll area until the conditions to remove it are met.
8. (+5) The dividing line between read and unread messages in an open dialogue can be removed by each of the following actions: when scrolling the message history area, after clicking the message send button, or clicking inside the message history area.
9. (+5) After the conditions for removing the dividing line have been met, when new messages appear, the line does not appear unless the user has selected another dialog.
10. (+5) If no recipient is selected, the message send button and message input field must be inactive (or hidden), and there must be a message in the message history field indicating the need to select a recipient.
11. (+5) Sending a message to a user is possible both by clicking the send button with the mouse or by pressing the "Enter" key without the need to focus on the send button.
12. (+10) The user can delete their own previously sent messages.
13. (+10) The user can edit the text of their own previously sent messages.

#### 7. Message Content (on the main page) (+25)

1. (+15) Messages include the time of sending, sender's username, message delivery status, message text, and indication of whether the message has been edited.
2. (+5) The message "delivered"/"read" status is visible only to the sender of the message.
3. (+5) A user cannot send a message without any content (without text).

#### 8. Message Delivery and Read Status (on the main page) (+20)

1. (+10) The status changes to "delivered" when the message recipient logs into the application or if the message is sent to the user who is online.
2. (+10) The status changes to "read" when the message recipient opens a dialog with unread messages and performs actions 6.8 or the recipient has a dialog with previously performed actions 6.8 open.

#### 9. About Page (+10)

1. (+5) Contains brief information about the application and its author. The content is at the student's discretion.
2. (+5) Access is granted to both authenticated and unauthorized users.

#### 10. Interface and Visual Design (+15)

1. (+5) The browser tab must display the application icon.
2. (+5) The interface elements with which the user will interact must be responsive and the cursor must change when they are hovered over.
3. (+5) Responsive layout must be implemented for resolutions ranging from 1440 px to 380 px, inclusive.

#### 11. Server Connection (on all pages) (+20)

1. (+10) If a sudden disconnection from the server occurs, a message must be displayed to the user, and an attempt to restore the connection must be made.
2. (+10) Upon reconnecting to the server, the application must perform the current user reauthorization without requiring user intervention.

## Technical Requirements (+160)

1. (+20) The application is divided into logical modules/layers, such as, for example, API interaction, user interface rendering, application state management, etc.
2. (+20) All HTML content is generated using JavaScript. `Body` must be empty. Either `head` or `body` can contain the only `<script> tag` (`body` containing only the `<script> tag` is considered to be empty).
3. (+20) The application is a Single Page Application (SPA) with implemented routing.
4. (+20) Input/output parameters of all methods are explicitly typed, and the `any` type is not used.
5. (+20) ESLint with the [TypeScript](https://typescript-eslint.io/getting-started) and [Unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) style guide is used, with the `noInlineConfig: true` rule enabled in the configuration. With the mentor's permission, it is acceptable to disable or tweak some rules as long as it does not conflict with penalties.
6. (+10) Prettier is used to automatically format code, ensuring a consistent and readable code style.
7. (+10) Husky is used to manage Git hooks, automating tasks such as code formatting and linting checks during the commit process.
8. (+10) Webpack or another module bundler is used.
9. (+10) Code is organized into small functions with clear names and purposes, with each function not exceeding 40 lines.
10. (+10) There is no code duplication.
11. (+10) The code does not contain magic numbers or strings.

## Cross-Check:

- Maximum 250 points.
- The application must be deployed on `gh-pages` or a similar service.
- Evaluation is performed only on a locally running server application.
- Assessment is based on [functional requirements](#functional-requirements-250).
- Check in the latest version of Google Chrome.

## Mentor Review:

- Maximum score: 160 points.
- A pull request with a description following the school's rules must be created for the assessment.
- Evaluation is based on [technical requirements](#technical-requirements-160).

## Penalties Cross-Check

- (-50%) Using alerts to show application messages or using alerts to replace application pages.
- (-15) For recurring application errors, a deduction is allowed only once for each distinct type of error.
- (-5) For layout issues where the elements overlap or cover each other, a deduction is allowed only once for each distinct type of issue.

## Penalties Mentor

- (-100%) Use of JavaScript libraries or frameworks such as JQuery, React, Angular, Vue, Lodash, etc.
- (-100%) If the application is not written in TypeScript.
- (-50%) If the entire content of the page is not generated using TypeScript (if index.html contains more than just the body tag).
- (-50) With remarks on code quality, readability.

## FAQ

_Question_ - Is the use of CSS framework allowed?

_Answer_ - Yes, it is allowed.

_Question_ - Is the use of style preprocessors such as SCSS, SASS, etc. allowed?

_Answer_ - Yes, it is allowed.

_Question_ - Is the appearance of the application evaluated?

_Answer_ - Only the criteria specified in the [interface section](#10-interface-and-visual-design-15) are assessed; students are free to choose every other aspect of the design themselves.

_Question_ - Is a validator that checks for an empty string on authorization allowed?

_Answer_ - No, it's not allowed. Your validation form must not submit blank fields and must additionally check any other criteria.

_Question_ - How should the task be assessed if the information in a particular element is not updated according to the actions of other users or the server?

_Answer_ - Elements containing current information must be promptly updated. Simply having such elements does not mean meeting the requirement. For example, user activity must always reflect their relevant current status. If component updates only occur after a page refresh, then the requirements clause is not met.

_Question_ - How should message statuses ("delivered"/"read") change when we have a large number of messages?

_Answer_ - Status changes must occur simultaneously for all relevant messages. For example, during authentication and fetching the list of messages, all previously undelivered messages must have their status changed to "delivered". Similarly, actions necessary for the "read" status must update all unread messages to "read."

_Question_ - If a user enters a very long name, how can the requirements of the interface points be met?

_Answer_ - It is not considered a layout issue if only the first 10 characters of a long username are displayed in the input field (or another element containing the username). However, elements overlay is not allowed. In case of disputed interpretation due to the varying width of uppercase and lowercase characters, you have to check this requirement by entering the value "0123456789".

_Question_ - If a user sends a very long message, how can the requirements of the interface points be met?

_Answer_ - The complete message must be displayed in the dialogue. If a new message is too long you should be able to see the beginning of the message and all the text that fits in the dialog area.

_Question_ - What pages are available to a non-authorized user?

_Answer_ - They have access to the Authentication and About pages.

_Question_ - How to check page access points if no routing is implemented?

_Answer_ - You perform any action to go to a page where the user is supposed to be not allowed to proceed according to the requirements. If you fail to do so, the requirements have been met. It is not allowed to modify the markup or inject your own scripts for transition attempts.

_Question_ - Is it necessary to clear the message entry field when selecting a dialog with another user?

_Answer_ - Yes, it's necessary to clean.

_Question_ - Should the message history be restored when reconnection is restored?

_Answer_ - No, message history is not restored after the connection is restored, only users authorized at the time of connection restoration.

_Question_ - How do I simulate a loss of connection to the server when performing a cross-check?

_Answer_ - Only by stopping the local server and restarting it.

_Question_ - Which message is considered empty?

_Answer_ - A message that contains nothing, not a single character. The length of such a message is zero characters.

_Question_ - Is it acceptable to replace the username in your posts with "you"?

_Answer_ - Yes.
