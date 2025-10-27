# Virtual Music Kit

## Task

### Description

The Virtual Music Kit is an interactive sound application inspired by real musical instruments such as a piano, drums, or **any other instrument of your choice**.
Users should be able to play sounds live (by clicking visual elements and/or by pressing assigned keyboard keys), or reproduce a sequence of available sounds of their choice.


### What you will learn

- DOM ­manipulation
- Event handling
- Audio playback in the browser


### UI requirements

1. The application's visual layout represents your chosen instrument (for example, piano keys, drum pads, guitar strings, etc.).  
   It is not required to reproduce the real-life appearance of the instrument. You can design it creatively, but it must be immediately clear to users which instrument the application simulates.

2. The application includes at least **7 distinct sounds (or notes)** related to the chosen instrument.
- Each sound and its corresponding visual element must be mapped to **one unique keyboard key** (for example: `A`, `S`, `D`, `F`, etc.).
- Only **English letter keys** can be used for this purpose.
- The default key assignments must **always remain the same** after a page refresh and must **not be generated randomly**.
- The same key must **not be assigned** to more than one sound.
- Multiple sounds may belong to the **same instrument type** (for example, in a drum kit: an open hi-hat, closed hi-hat, and pedal hi-hat count as three different sounds).
- The assigned keys must be **visibly displayed** on the screen and **clearly associated** with the corresponding instrument (or part of it) and sound.
- Each sound must be triggered **either by pressing** its assigned keyboard key **or by clicking** on the corresponding visual element.

3. There is an **edit button/icon** next to each key.
- When the user clicks an **edit button**, the selected key appears in a dedicated **input field** on the screen.
- The edit input field is displayed **only when** an edit button is clicked. Its exact position in the layout is not important, but it must be **clear and intuitive** for the user.
- After entering a new key and pressing **Enter**, the edit input disappears and the app updates the assigned key for that sound and visually refreshes the corresponding label on the interface.  
- No changes should occur **without confirming** via Enter.
- The app must prevent assigning the **same key to multiple sounds** when reassigning controls.
- Any changes made by the user are **temporary** and do **not persist after a page refresh**.

4. Every "playable" element must have **three visual states**: default, hover, and active.  
- Hover and active states can be implemented with any visual effect (for example: color change, animation, highlight, etc.).

5. When the user clicks a **visual element** or presses the corresponding **keyboard key**:
- The corresponding sound is **played once** (it must not repeat if the user keeps pressing the key or mouse).
- Pressing the **same key or visual element again** plays the corresponding sound **once more**.
- The visual element switches to its **active state**, which lasts as long as the user keeps pressing the key or mouse.
- A note is played **regardless of the keyboard layout** (Russian or English) and **Caps Lock** state.
- The combined interaction of **mouse and keyboard** (e.g., simultaneous actions) is **not tested or evaluated**.
- **Only one key** can be processed at a time. If the user attempts to press multiple keys simultaneously, the application should process only the **first key press detected** to prevent multiple inputs from being registered at the same moment.

6. There is an **input field** where the user can type a sequence of the assigned keys (for example: `ASDFG`).
- Only the keys **assigned to the app’s sounds** are allowed.
- Invalid characters should be **ignored or prevented**.
- Both **uppercase and lowercase** letters are accepted.
- The maximum number of characters in the input must be **twice the number of available sounds/keys**.
- Each key can appear **multiple times** in the sequence.

7. There is a **button** that allows the user to **play the sequence** entered in the input field. When clicked:
- The app plays the sounds **one by one**, in the order typed in the sequence.
- While each sound is playing, the corresponding visual element switches to its **active state**, which ends when the sound stops playing.
- There should be a short, consistent **delay between each step** in the sequence (for example, 300–500 ms) to avoid sound overlap.

8. During the **automatic playback**:
- The user cannot click or press any new keys (**interactions are disabled**).
- The input field and play button are **disabled until playback ends**. The disabled state must be **visually distinct** and indicate that the element is **temporarily inactive**.

9. After playback finishes, **interactivity is fully restored** (the user can again click, type, or play sounds normally).


### Main functional requirements

- Initially, `body` in the index.html file should be empty (only script tag is allowed).
- All necessary elements must be generated using `createElement()` function. No `html` injection is allowed.
- The design is **adaptive (or responsive)**, that includes desktop(1440px <= width), tablet(768px <= width < 1440px) and mobile(360px <= width < 768px). When resizing, all elements must adjust proportionally without abrupt switching, ensuring correct display, full functionality, and no hidden or off-screen content.
- The design is **at your discretion**.
- The application should be done **in English**.
- The app **must not have** unexpected errors in the console. This rule applies only to errors caused by the application itself (errors resulting from installed browser extensions or antiviruses should be ignored).


## Repository requirements

- The task should be done in private school's repository.
- The code should be committed to a separate branch **named (`virtual-music-kit`)**.
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

- [ ] The app’s layout correctly represents the chosen instrument (piano, drums, etc.) and it is visually clear which instrument it simulates: `+10`
- [ ] The application includes **at least 7 distinct sounds (or notes)** related to the chosen instrument: `+5`
- [ ] Each sound is mapped to **one unique English letter key**, displayed on the screen and associated with a specific instrument element: `+5`
- [ ] The same key is not used for more than one sound: `+5`
- [ ] Clicking an **edit button** displays an input field with the corresponding key already filled in: `+10`
- [ ] Pressing **Enter** hides the input field and updates the assigned key for that sound: `+10`
- [ ] Each "playable" element has **default, hover, and active states** that are visually distinct: `+10`
- [ ] Clicking a visual element or pressing the corresponding keyboard key **plays the associated sound**: `+10`
- [ ] On click or key press, the sound is **played once only**, even if the key or mouse button remains pressed: `+5`
- [ ] On click or key press, the corresponding element switches to its **active state** for the duration of the press: `+5`
- [ ] Sounds play **regardless of the keyboard layout** (Russian / English) and **Caps Lock** state: `+10`
- [ ] There is an **input field** where the user can type a sequence of the assigned keys: `+5`
- [ ] The input accepts both **uppercase and lowercase** letters: `+5`
- [ ] The input **ignores or prevents keys** that are not assigned to a sound: `+10`
- [ ] The input field **limits its length** to twice the number of available sounds/keys: `+5`
- [ ] Each key can appear **multiple times** in the sequence: `+5`
- [ ] There is a **button** that allows the user to **play the sequence** typed into the input field: `+5`
- [ ] When the play button is clicked, each sound is played **one by one**, in the order typed in the sequence, with **consistent short delays** (e.g. 300–500 ms): `+10`
- [ ] During automatic playback, **all user interactions (keyboard and mouse)** are disabled: `+10`
- [ ] The input field and play button are **disabled and visually reflect** their disabled state during playback: `+5`
- [ ] After playback finishes, **interactivity is fully restored**: `+5`


## Penalties

- Unexpected errors in the console caused by the application(the deduction is only allowed once for each distinct kind of error): `-10 per error`
- Sounds overlap during sequence playback: `-10`
- More than one key is highlighted or processed at the same time: `-10`
- Input field accepts characters that are not assigned to any sound: `-20`
- Input field allows more characters than the number of available sounds: `-20`
- The **default** key assignments **do not remain the same** after a page refresh: `-50`
- The changes made by the user to the key assignments **persist after a page reload**: `-50`
- The app doesn't prevent assigning the **same key to multiple sounds** when reassigning controls: `-50`
- The same key is assigned to more than one sound: `-50`
- The application is not done **in English**: `-50`
- Anything mentioned as **not allowed** in the 'Technical requirements' section is used: `-150`
- `body` in the `index.html` is not empty (can contain only `script` tag). _This requirement can be checked by pressing `Ctrl+U` (Windows) or `Option(⌥)+Command(⌘)+U` (Mac)_: `-150`
- Not all elements are generated using `createElement()` function or JS code is minified, not allowing to check this requirement: `-150`


## Useful links:

- [DOM](https://javascript.info/document)
- [Event](https://javascript.info/event-details)
- [An Introduction To DOM Events](https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/)
- [Keyboard events](https://javascript.info/keyboard-events)