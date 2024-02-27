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

#### 1. User Authentication Page (+25)

- (+10) The authentication form validates the entered data based on at least two different criteria. Such as, for example, case sensitivity and the use of special characters. The selection of validation criteria and their display options is at the student's discretion and must be evaluated solely based on the quantity and functionality.
- (+5) The user is unable to submit an authentication request with data that has not passed validation.
- (+5) In case of an authentication error (based on the server response), a message indicating the corresponding error sent by the server must be displayed.
- (+5) User authentication is possible both by clicking the button with the mouse or by pressing the "Enter" key without the need to focus on the button.

#### 2. Main Page (+15)

- (+15) Access is granted only to authenticated users.

#### 3. Header (on the main page) (+10)

- (+3) Displays the current authenticated user's name.
- (+2) Displays the app's name.
- (+5) Includes a logout button which when pressed terminates the current session and opens the authentication form (window/page).

#### 4. Footer (on the main page) (+5)

- (+5) Includes the school's logo and name, the author's name, a link to the author's GitHub, and the year of the app creation.

#### 5. User List (on the main page) (+30)

- (+10) Displays all registered users and an indicator of each user's online status.
- (+5) The currently authenticated user is not in the list.
- (+5) Implements user search by name.
- (+10) Displays information about the number of unread messages from each user.

#### 6. User Dialogue (on the main page) (+75)

- (+5) Provides information about the user with whom the dialogue is open, as well as indicating whether that user is online.
- (+5) Provides a complete message history with the selected user, including messages from both the current user and the user with whom the dialogue is currently open.
- (+5) Arranges messages chronologically based on the time of sending. The latest message is displayed near the message input and send component.
- (+5) In the absence of message history, a message in the message history field indicates that this is the beginning of the dialogue.
- (+5) When sending a message to another user, the message history scrolls to the sent message (making the just-sent message visible to the user).
- (+5) When receiving a message from another user in an open dialogue, the message history scrolls to the received message (making the just-received message visible to the user).
- (+5) When opening a dialogue with unread messages, new messages are separated from the read messages by a dividing line, and the user can see the dividing line and at least one unread message.
- (+5) When new unread messages appear (before meeting the conditions to remove the dividing line), the line must always stay within the dialogue area and not hide in the scroll area.
- (+5) The dividing line between read and unread messages can be removed by each of the following actions: when scrolling the message history area, after clicking the message send button, or clicking inside the message history area.
- (+5) If no recipient is selected, the message send button and message input field must be inactive (or hidden), and there must be a message in the message history field indicating the need to select a recipient.
- (+5) Sending a message to a user is possible both by clicking the send button with the mouse or by pressing the "Enter" key without the need to focus on the send button.
- (+10) The user can delete their own previously sent messages.
- (+10) The user can edit the text of their own previously sent messages.

#### 7. Message Content (on the main page) (+25)

- (+15) Messages include the time of sending, sender's username, message delivery status, message text, and indication of whether the message has been edited.
- (+5) The message "delivered"/"read" status is visible only to the sender of the message.
- (+5) A user cannot send a message without any content (without text).

#### 8. Message Delivery and Read Status (on the main page) (+20)

- (+20) The status changes to "delivered" when the message recipient logs into the application or if the message is sent to the user who is online.
- (+20) The status changes to "read" when the message recipient opens a dialogue with unread messages and performs any of the following actions: scrolls in the message history area, sends a new message, or clicks inside the message history area.

#### 9. About Page (+10)

- (+10) Contains brief information about the application and its author. The content is at the student's discretion.

#### 10. Interface and Visual Design (+15)

- (+5) The browser tab must display the application icon.
- (+5) The interface elements with which the user will interact must be responsive and the cursor must change when they are hovered over.
- (+5) Responsive layout must be implemented for resolutions ranging from 1440 px to 380 px, inclusive.

#### 11. Server Connection (on all pages) (+20)

- (+10) If a sudden disconnection from the server occurs, a message must be displayed to the user, and an attempt to restore the connection must be made.
- (+10) Upon reconnecting to the server, the application must perform the current user reauthorization without requiring user intervention.

## Technical Requirements (+160)

- (+20) The application is divided into logical modules/layers, such as, for example, API interaction, user interface rendering, application state management, etc.
- (+20) All HTML content is generated using JavaScript. `Body` must be empty. Either `head` or `body` can contain the only `<script> tag` (`body` containing only the `<script> tag` is considered to be empty).
- (+20) The application is a Single Page Application (SPA) with implemented routing.
- (+20) Input/output parameters of all methods are explicitly typed, and the `any` type is not used.
- (+20) ESLint with the Airbnb style guide is used, with the `noInlineConfig: true` rule enabled in the configuration.
- (+10) Prettier is used to automatically format code, ensuring a consistent and readable code style.
- (+10) Husky is used to manage Git hooks, automating tasks such as code formatting and linting checks during the commit process.
- (+10) Webpack or another module bundler is used.
- (+10) Code is organized into small functions with clear names and purposes, with each function not exceeding 40 lines.
- (+10) There is no code duplication.
- (+10) The code does not contain magic numbers or strings.

## Cross-Check:

- Maximum 250 points.
- The application must be deployed on `gh-pages` or a similar service.
- Evaluation is performed only on a locally running server application.
- Assessment is based on [functional requirements](#functional-requirements-250).

## Mentor Review:

- Maximum score: 160 points.
- A pull request with a description following the school's rules must be created for the assessment.
- Evaluation is based on [technical requirements](#technical-requirements-160).

## Penalties Cross-Check

- (-100%) Use of libraries or frameworks such as JQuery, React, Angular, Vue, Lodash, Material Design, etc.
- (-100%) If the application is not written in TypeScript.
- (-15) For recurring application errors, a deduction is allowed only once for each distinct type of error.
- (-5) For layout issues where the elements overlap or cover each other, a deduction is allowed only once for each distinct type of issue.

## Penalties Mentor

- (-100%) Use of libraries or frameworks such as JQuery, React, Angular, Vue, Lodash, Material Design, etc.
- (-100%) If the application is not written in TypeScript.
- (-50%) If the entire content of the page is not generated using TypeScript (if index.html contains more than just the body tag).
- (-50) With remarks on code quality, readability.

## FAQ

_Question_ - Is the use of style preprocessors such as SCSS, SASS, etc. allowed?

_Answer_ - Yes, it is allowed.

_Question_ - Is the appearance of the application evaluated?

_Answer_ - Only the criteria specified in the [interface section](#10-interface-and-visual-design-15) are assessed; students are free to choose every other aspect of the design themselves.

_Question_ - How should the task be assessed if the information in a particular element is not updated according to the actions of other users or the server?

_Answer_ - Elements containing current information must be promptly updated. Simply having such elements does not mean meeting the requirement. For example, user activity must always reflect their relevant current status.

_Question_ - How should message statuses ("delivered"/"read") change when we have a large number of messages?

_Answer_ - Status changes must occur simultaneously for all relevant messages. For example, during authentication and fetching the list of messages, all previously undelivered messages must have their status changed to "delivered". Similarly, actions necessary for the "read" status must update all unread messages to "read."

_Question_ - If a user enters a very long name, how can the requirements of the interface points be met?

_Answer_ - It is not considered a layout issue if only the first 10 characters of a long username are displayed in the input field (or another element containing the username). However, elements overlay is not allowed. In case of disputed interpretation due to the varying width of uppercase and lowercase characters, you have to check this requirement by entering the value "0123456789".

_Question_ - If a user sends a very long message, how can the requirements of the interface points be met?

_Answer_ - The complete message must be displayed in the dialogue.

_Question_ - What pages are available to a non-authorized user?

_Answer_ - They have access to the Authentication and About pages.
