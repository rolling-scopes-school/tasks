# Simon Says

## Task

### Description

The task is a variant of the classical [Simon Says](https://en.wikipedia.org/wiki/Simon_says) game, where players must remember and reproduce sequences of keyboard symbols. In this task, ‘symbols’ refer **only to letters and numbers**.

### Task objective

To practice event handling, such as clicks and keyboard inputs.

### Game rules

- The game consists of **5 rounds** and **3 levels of difficulty**. In each round, the user must repeat **a sequence of keyboard symbols** based on the level of difficulty.
- The levels of difficulty are:
  - **Easy**: only numbers (0-9);
  - **Medium**: only letters (A-Z);
  - **Hard**: letters (A-Z) and numbers (0-9).
- The same symbol can be used **multiple times** in a sequence.
- For the letters, both upper and lower case letters **are allowed** and are treated as **the same symbol** _(e.g. if the sequence has the letter "a", it is also possible to type "A")_.
- The first round starts with **2 symbols** based on the level of difficulty.
- Each new round presents a new **randomly generated** sequence based on the level of difficulty, with the sequence length **increasing by two symbols** each round (culminating in a 10-symbol sequence by the 5th round).
- The user can use both **virtual** _(by clicking keys on the screen)_ and **physical** keyboards _(by pressing keys on their keyboard)_ to play the game.
- Handling NumPad events **is not required**. NumPad inputs can be ignored during the game.
- Pressing keys with symbols that are not part of the current difficulty level **must be ignored** during the game _(e.g. for the "Medium" level, pressing any not letter key must be ignored)_.

##### Initial game screen

- The initial game screen displays:
  - The “Start” button.
  - An option to choose the level of difficulty (e.g., a switcher, a drop-down menu, etc.). If the user hasn’t played the game before, the “Easy” level is preselected by default.
  - A virtual keyboard displaying only the symbols corresponding to the selected difficulty level: numbers 0-9 for the “Easy” level, letters A-Z for the “Medium” level, and both numbers and letters for the “Hard” level. The symbols can be arranged in a random order and layout (there is no need to reproduce the look and feel of a real keyboard).
- If the user changes the level of difficulty, the virtual keyboard is updated accordingly.

##### Starting the game

- To start the first round, the user clicks the “Start” button.
- After clicking the "Start" button:
  - It is not possible to change the level of difficulty.
  - An indicator of the current level of difficulty is always visible on the game screen.
  - There is a rounds counter that displays the current round number.
  - The “Start” button disappears.
  - The “Repeat the sequence” and “New game” buttons are displayed.
  - There is a non-editable input that reflects the sequence typed by the user.
- The “Repeat the sequence” button is always enabled at the beginning of each new round.
- Only after clicking the “Start” button is the first sequence shown by simulating the typing of the corresponding symbols on the virtual keyboard. The typing simulation should be clear: the symbols are “typed” one after another, and the corresponding keys are highlighted for at least 0.3 seconds.
- No user input (clicking or pressing keys) is allowed during the typing simulation, and all buttons are disabled.
- Once the typing simulation is finished, the buttons are enabled and user input is allowed. If the user has already clicked the “Repeat the sequence” button, this button remains disabled.

##### User interaction

- When the user answers by clicking keys on the virtual keyboard, the clicked keys are momentarily highlighted upon clicking to provide visual feedback. Only one key at a time can be highlighted.
- When answering by pressing keys on the physical keyboard, the corresponding keys on the virtual keyboard are briefly highlighted upon pressing to provide visual feedback. Only one key at a time can be highlighted.
- Each symbol entered by the user is immediately displayed in a dedicated, non-editable input field. The input must reflect all the symbols inserted by the user, in the order they were entered.
- A correct answer is automatically recognized after the user presses **the last key in the sequence**. No additional submit action is required.
- An incorrect answer is immediately detected upon the **first wrong key press** in the sequence.
- Once the answer is detected as correct or incorrect, handling any new user input on virtual or physical keyboards **is not allowed**.
- The user can click the “Repeat the sequence” button **only once per round**. After clicking on "Repeat the sequence" button:
  - The “Repeat the sequence” button becomes disabled until the next round (if the user successfully completes the current round).
  - The same sequence is reproduced one more time.
  - The round is reset by clearing the input with previously inserted sequence (if it's not empty), so that the user can start typing the sequence again from its beginning.
  - If the user has already made an incorrect attempt in the current round, the corresponding feedback message is removed.
- The user is allowed only **one incorrect attempt per round**. After a second incorrect attempt in the same round, the game is considered over and the “Repeat the sequence” button, if still enabled, becomes disabled.
- At any moment (except during the typing simulation), the user can click the “New game” button to restart the game from the **initial game screen** _(see "Initial game screen" section above for details)_. The preselected level of difficulty will remain the same as in the last game (e.g., if the last choice was “Medium”, this option is preselected by default).

##### Feedback and Progression

- Clear feedback is provided after each answer, whether correct or incorrect. This can be implemented through a message, sound, or visual cue.
- Feedback for an incorrect answer should appear immediately after **the first incorrectly clicked or pressed key**, while feedback for a correct answer should only be displayed after **the entire sequence has been repeated correctly**.
- If feedback messages are displayed in page:
  - Feedback for an incorrect answer should disappear as soon as the user clicks the “Repeat the sequence” (if still enabled) or "New game" buttons.
  - Feedback for a correct answer should disappear as soon as the user clicks the “Next” or "New game" buttons.
- If feedback messages are displayed as separate popups/dialogs:
  - There should be a "Close" or any similar button (e.g. "Ok", "X", etc.) that allows the user to close the message.
  - Any interaction with the page is disabled when the message is displayed.
- When the user answers correctly, the “Repeat the sequence” button is immediately replaced by the “Next” button, allowing the user to proceed to the following round.
- After clicking the “Next” button, the new round starts by immediately reproducing the next sequence, and the rounds counter is updated accordingly. The "Next" button is replaced by the "Repeat the sequence" button.
- The sequence is **randomly generated** for each new round according to the selected level of difficulty, meaning a **completely new** combination is created each time the user clicks the “Next” button. The sequence length increases by two symbols each round without simply appending new symbols to the previous sequence. Just adding two new symbols to the previous sequence **is not allowed**.
- Upon successfully completing the 5th round, feedback is provided (through a message, sound, or visual cue) to indicate that the game is over, and the “Repeat the sequence” button, if still enabled, becomes disabled.
- The user can play again by clicking the “New game” button, which restarts the game from the **initial game screen** _(see "Initial game screen" section above for details)_. The preselected level of difficulty should be the same as in the last game (e.g., if the last choice was “Medium”, this option is preselected by default).

### Main functional requirements

- Initially, `body` in the index.html file should be empty (only script tag is allowed).
- All necessary elements must be generated using `createElement()` function. No `html` injection is allowed.
- The design is **adaptive (or responsive)**, that includes desktop(1440px <= width), tablet(768px <= width < 1440px) and mobile(360px <= width < 768px). When resizing, all elements must adjust proportionally without abrupt switching, ensuring correct display, full functionality, and no hidden or off-screen content.
- The design is **at your discretion**.
- The sequence is **randomly generated** for each new round.
- Hiding and displaying additional elements must not cause the main elements to shift or move **(e.g. hiding the feedback message must not move the keyboard ensuring that the player can easily follow the sequence)**.
- Using `window.location.reload` to restart the game when it's over **is not allowed**.
- The selected difficulty level persists only for the duration of the browser session. Saving it in the localStorage **is not required**.
- The application should be done **in English**.
- The use of `alert`, `prompt`, `confirm` **is prohibited**.
- The app **must not have** unexpected errors in the console.

## Repository requirements

- The task should be done in private school's repository.
- The code should be committed to a separate branch **named (`simon-says`)**.
- The **main** (or **master**) branch should be empty (contain only files like README.md, .gitignore or .github folder)
- Commits should represent the work history. Commit messages should follow the [guideline](https://www.conventionalcommits.org/en/v1.0.0/)
- Once the work is finished, create a pull request from a development branch to main (or master). This PR doesn't need to be merged.
- The pull request name should contain **the task name**.
- The pull request description should contain the following information:
  - link to the task
  - screenshot of your application (one would be enough)
  - link to your application
  - date of completion/deadline
  - your self-check with a preliminary evaluation that is based on the evaluation criteria from the task
- Submit **a link to deploy** in Cross-Check: Submit tab.

## Technical requirements

- The application is checked in the latest version of Google Chrome browser.
- It is **not allowed** to use:
  - JS frameworks (e.g., `Angular`, `React`, `Vue`, etc.),
  - Outdated libraries (e.g. `JQuery`, etc.),
  - Any JS libraries which are not devDependencies (e.g. `lodash`),
  - `TypeScript`.
- You **can** use bootstrap, CSS frameworks, HTML and CSS preprocessors, and `normalize.css` or `modern-normalize`.
- JS code **must not be minified** to facilitate the cross-check process.
- It is strongly recommended to use `eslint` and `prettier`.

## CrossCheck Criteria (150 points)

_It is recommended to print the right answer for each round in the browser's console to facilitate the cross-check process._

- [ ] The game includes 5 rounds, and the rounds counter accurately displays the current round number and updates it after each successful round completion: `+5`
- [ ] The initial game screen is implemented correctly (presents the "Start" button, the possibility to choose the level of difficulty and a virtual keyboard) and the virtual keyboard updates accordingly when the difficulty is changed: `+10`
- [ ] Clicking the “Start” button initiates the first round with a sequence of 2 symbols and disables the ability to change the difficulty after starting the game: `+5`
- [ ] When the first rounds starts, there is an indicator of the current level of difficulty and a rounds counter, an input that reflects the sequence typed by the user, as well as the "Repeat the sequence" and "New game" buttons. The "Start" button disappears: `+5`
- [ ] Each sequence is shown by simulating the typing of the corresponding symbols on the virtual keyboard. Each symbol in the sequence is accurately simulated by highlighting its corresponding key on the virtual keyboard for at least 0.3 seconds: `+5`
- [ ] The “Repeat the sequence” button is always enabled at the beginning of each new round, can be clicked only once per round and becomes disabled after a single use: `+5`
- [ ] The “Repeat the sequence” button reproduces the current sequence when clicked, the feedback message, if any, is removed, and the input with previously inserted sequence (if it's not empty) is cleared so that the user can start typing the sequence again from the beginning: `+10`
- [ ] While the sequence is being displayed through the typing simulation, no user input (clicking or pressing keys) is possible, and all buttons are disabled. After the typing simulation completes, all buttons are re-enabled and user input is permitted. However, if the user has previously clicked the “Repeat the sequence” button during the current round, that button stays disabled: `+5`
- [ ] The user can play the game by using the virtual keyboard, and the corresponding keys are highlighted upon clicking: `+20`
- [ ] The user can play the game by using the physical keyboard, and the corresponding virtual keys are briefly highlighted upon pressing: `+20`
- [ ] Each symbol entered by the user is immediately displayed in a dedicated, non-editable input field. The input reflects all the symbols inserted by the user, in the order they were entered: `+5`
- [ ] Only one incorrect attempt per round is allowed, and after a second incorrect attempt, the “Repeat the sequence” button becomes disabled (if it's not already): `+5`
- [ ] The "New game" button is always accessible (except during the typing simulation), allowing the user to restart the game from the initial game screen at any moment: `+5`
- [ ] A correct answer is automatically recognized after the user presses **the last key in the sequence**, while an incorrect one is immediately detected upon the **first wrong key press** in the sequence: `+10`
- [ ] There is clear feedback after each answer, whether correct or incorrect. Feedback for an incorrect answer appears immediately after the first incorrectly clicked or pressed key, while feedback for a correct answer is displayed after the entire sequence has been repeated correctly.: `+5`
- [ ] Upon a correct answer, the “Repeat the Sequence” button is replaced with a “Next” button to proceed to the following round: `+5`
- [ ] Clicking the “Next” button starts the next round with a new, randomly generated sequence that is two symbols longer than the previous one. The "Next" button is replaced by the "Repeat the sequence" button: `+5`
- [ ] After successfully completing the 5th round, there is final feedback indicating the game is over and the “Repeat the sequence” button, if still enabled, becomes disabled: `+5`
- [ ] The user’s last chosen difficulty level is saved and preselected by default when the user starts a new game: `+5`
- [ ] The app is supported at the requested width (desktop _1440px <= width_, tablet _768px <= width < 1440px_ and mobile _360px <= width < 768px_) (e.g., no DOM elements overlap, disappear, etc.):: `+10`

## Penalties

- Unexpected errors in the console (the deduction is only allowed once for each distinct kind of error): `-10 per error`
- Feedback messages displayed in page do not disappear when the user clicks the “Repeat the sequence” (if still present and enabled)/"Next" or "New game" buttons: `-10`
- Feedback messages displayed as separate popups/dialogs do not have a closing button, or the interaction with the page is not disabled when the message is displayed: `-10`
- More than one key at a time is highlighted when guessing the sequence: `-10`
- The symbols that are not part of the current difficulty level are not ignored: `-20`
- Upper and lower case letters are not treated as the same symbol: `-20`
- Once the answer is detected as correct or incorrect, the application still handles new user input on virtual or physical keyboards: `-20`
- Hiding and displaying additional elements cause the main elements to shift or move: `-20`
- The sequence is not **randomly generated** for each new round and/or the two new symbols are simply added to the previous sequence: `-50`
- `window.location.reload` is used to restart the game when it's over: `-50`
- The application is not done **in English**: `-150`
- Anything mentioned as **not allowed** in the 'Technical requirements' section is used: `-150`
- `body` in the `index.html` is not empty (can contain only `script` tag). _This requirement can be checked by pressing `Ctrl+U` (Windows) or `Option(⌥)+Command(⌘)+U` (Mac)_: `-150`
- Not all elements elements are generated using `createElement()` function or JS code is minified, not allowing to check this requirement: `-150`
- Using `alert`, `prompt`, `confirm`: `-150`

## Useful links:

- [DOM](http://learn.javascript.info/document)
- [Event](http://learn.javascript.info/event-details)
- [An Introduction To DOM Events](https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/)
- [Keyboard events](https://learn.javascript.info/keyboard-events)
