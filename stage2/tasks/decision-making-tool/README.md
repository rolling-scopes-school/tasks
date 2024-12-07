# Decision Making Tool

## Description

Your task is to implement a single page application (SPA) for decision making.  
This application is designed to help streamers, content makers, tabletop role-players to make random pick based on the weight of an option (it increases the chance of an option being picked).

The application consists of two parts: `List of Options` and `Decision Picker`.

The first part of the application (`List of Options`) allows you to edit the list of options, as well as to save it to a file and load it from a file. There is also a button to go to the second part of the application (`Decision Picker`).

The second part of the application (`Decision Picker`) allows you to visualize the previously created list. There is also an element for displaying the picked option, a button to start the picking process and a user-friendly option to return to the first part of the application (`List of Options`).

## Demo

> This is a demo of the app's functionality.  
> The app design is up to you as long as it meets the requirements of the assignment.

<https://er-dmt-demo.netlify.app/>

## Task Objectives

- Acquire or refine skills in creating, modifying, and deleting HTML elements dynamically using code.
- Practice storing user input between sessions _(e.g., via `Web Storage API`)_.
- Learn to collect and save user input data to a file.
- Learn to load and process data from a file _(e.g., via `File API`)_.
- Familiarize yourself with Canvas API.
- Practice with animations. _(e.g., via `Web API`'s `requestAnimationFrame`, `Animations API`, etc.)_
- Familiarize yourself with setting up project configurations.
- Familiarize yourself with writing clean code with strict rules.

## Repository and Submission Requirements

- Use a [private school repository](https://docs.rs.school/#/private-repository) to develop this application.
- Use the `decision-making-tool` branch as your development branch.
- Your commits in the development branch should reflect the development history. Commits must follow the [guideline](https://docs.rs.school/#/git-convention).
- Use the `gh-pages` branch as the deploy branch _(e.g. via the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package)_.
- Use the app **deploy link** to [submit](https://app.rs.school/course/student/cross-check-submit) the app to crosscheck in [app.rs](https://app.rs.school/course/student/cross-check-submit). **Make sure** your link is accessible to everyone by opening it in incognito mode.
- Create a Pull Request from the development branch into the `main` branch and format it according to [PR requirements](https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr). **Do not merge** the development branch into the `main` branch.
- Use the **PR link** to [submit](https://app.rs.school/course/student/dashboard) the app to mentor in [app.rs](https://app.rs.school/course/student/dashboard).

## General Requirements

- `<body>` in the `index.html` must be empty (only `<script>` tag is allowed). _(You can check this with the `View page source` option in the context menu in google chrome.)_
- App must be supported at `640px <= width <= 1280px` at least _(DOM elements should not go out of bounds of parent elements, overlap, etc.)_.
- The use of `alert`, `prompt`, `confirm` is prohibited.
- App must not have unexpected errors in the console.
- The app must be supported by at least the latest version of the “google chrome” browser.

## Technical Requirements (160 points total)

### General

- Language: Application written in TypeScript.
- Required: Prettier, ESLint, StyleLint and libraries for them.
- Required: Husky, lint-staged, commitlint.
- Required: Bundlers (webpack, vite). _(It is allowed to use bundler's plugins.)_
- Allowed: CSS modules, CSS Preprocessors (`Sass`, `Less`, `Stylus`, `PostCSS`), CSS in JS libraries (`tailwindcss`, `styled components`), `clsx`/`classnames` package.
- Prohibited: Frameworks like Angular, React, Vue, etc.
- Prohibited: jQuery.
- Prohibited: eslint-plugin-prettier.
- Prohibited: Third-party libraries not listed in the allowed libraries.

### Code Formatting and Linting (80 points)

#### TypeScript (12/80)

> TypeScript helps us avoid unnecessary code errors at runtime and helps the IDE give us relevant hints during development.

1. (+2) [TypeScript](https://www.typescriptlang.org/) must be installed to developer dependencies.
2. (+2) TypeScript configuration file is added to the project and used.
3. (+8) TypeScript configuration file must include the `strict` options enabled.

#### Prettier (8/80)

> The formatter allows us to be less distracted by manual indentation and comma spacing, allowing us to better focus on writing code.

1. (+2) [Prettier](https://prettier.io/) must be installed to developer dependencies.
2. (+2) Prettier configuration file is added to the project and used.
3. (+4) `package.json` must contain 2 scripts: `ci:format` for checking issues with CI and `format` for manually formatting project files. _The `prettier` command has many useful options, such as `--list-different` and `--ignore-unknown`._

#### ESLint (40/80)

> Linter allows us to keep our code clean. Clean code is more readable, maintainable, and reusable. And its auto-fixing of errors allows us to save time on refactoring.

1. (+2) [ESLint](https://eslint.org/) must be installed to developer dependencies.
2. (+2) ESLint configuration file is added to the project and used. _(both [`flat`](https://eslint.org/docs/latest/use/configure/configuration-files) and [`legacy`](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated) config formats are allowed.)_
3. (+8) ESLint configuration file must include the `noInlineConfig` and `reportUnusedDisableDirectives` options enabled.
4. (+8) ESLint configuration file must include all of the following rules included:

   ```json
   {
     "@typescript-eslint/consistent-type-imports": "error",
     "@typescript-eslint/explicit-function-return-type": "error",
     "@typescript-eslint/consistent-type-assertions": [
       "error",
       { "assertionStyle": "never" }
     ],
     "@typescript-eslint/explicit-member-accessibility": [
       "error",
       { "accessibility": "explicit", "overrides": { "constructors": "off" } }
     ],
     "@typescript-eslint/member-ordering": "error"
   }
   ```

5. (+16) ESLint configuration file must be configured with [`typescript-eslint`](https://typescript-eslint.io/) (with enabled [type checking rules](https://typescript-eslint.io/getting-started/typed-linting/)), [`eslint-config-airbnb-typescript`](https://www.npmjs.com/package/eslint-config-airbnb-typescript), [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) (do not confuse it with `eslint-plugin-prettier`. it is [not recommended](https://prettier.io/docs/en/integrating-with-linters.html#:~:text=generally%20not%20recommended) by the prettier documentation.) and the necessary dependencies for them to work.
   - _With the mentor's permission, it is acceptable to disable or tweak some rules (e.g. `import/prefer-default-export`, `no-underscore-dangle`, etc.) as long as it does not conflict with penalties._
   - _It is allowed to tweak the config to be stricter to make your code even cleaner (according to your or your mentor's preference)._
6. (+4) `package.json` must contain 2 scripts: `ci:lint` for checking issues with CI and `lint` for manually checking project files.

#### StyleLint (10/80)

> Linter allows us to keep our code clean. Clean code is more readable, maintainable, and reusable. And its auto-fixing of errors allows us to save time on refactoring.

1. (+2) [StyleLint](https://stylelint.io/) must be installed to developer dependencies.
2. (+2) StyleLint configuration file is added to the project and used.
3. (+2) StyleLint configuration file must be configured with [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) and [`stylelint-config-clean-order`](https://github.com/kutsan/stylelint-config-clean-order). _It is acceptable to disable or tweak some rules for better DX._
4. (+4) `package.json` must contain 2 scripts: `ci:stylelint` for checking issues with CI and `stylelint` for manually checking project files.

#### Husky (10/80)

> `husky` allows us to run some code during various git events using git hooks.  
> `lint-staged` allows us to run linters/formatters only on code that is prepared for commit.  
> `commitlint` keeps track of commit names and allows us to avoid unnecessary `git rebase -i`.

1. (+2) [`husky`](https://typicode.github.io/husky/), [`lint-staged`](https://github.com/lint-staged/lint-staged) and [`commitlint`](https://commitlint.js.org/) must be installed to developer dependencies.
2. (+2) `husky` must be configured to run `lint-staged` on the `pre-commit` hook.
3. (+2) `husky` must be configured to run `commitlint` on the `commit-msg` hook.
4. (+2) `lint-staged` must be configured to run `ci:` scripts at least for javascript/typescript and css/scss/etc. files.
5. (+2) `commitlint` must be configured with [`@commitlint/config-conventional`](https://www.npmjs.com/package/@commitlint/config-conventional).

### Code Quality (80 points)

> The use of innerHTML is prohibited. Use of DOM search methods is prohibited. ([there are good reasons for not using them](https://gist.github.com/TELEUZI/410d19772481d98b06e0b41ebf89fff1#naive-implementation-).)
>
> For creating elements that will need to be accessed by code, a great solution is to use `createElement` and variables. For clearing/replacing element content, `replaceChildren` may be useful. To add elements that will not need to be accessed by code, it is acceptable to use `insertAdjacentHTML`.
>
> This won't cause any pain if you at least just write a reusable function that takes in the necessary element settings (`tagName`, `className`, `textContent`, etc.) and returns a ready-to-use element.

#### Code Smells (4/80)

1. (+2) The code does not contain magic values.
2. (+2) Code contains minimal or no code duplication at all.

#### Bundling and Modularity (12/80)

1. (+4) HTML elements are generated using a utility function or class.
2. (+4) The code is logically divided into modules/layers. _(you can consult your mentor about architecture.)_.
3. (+4) The application is built by a bundler.

#### Clear and Reusable Functions (16/80)

1. (+8) The code is divided into small functions (≤ 40 lines each) with clear names and purposes. The same applies to classes and their methods. _(ESLint rule `max-lines-per-function` may be useful for this.)_
2. (+8) Arguments and return values of functions and methods are explicitly typed.

#### Care About Types (48/80)

> [There is no point in using TypeScript if you don’t care about types](https://javascript.plainenglish.io/there-is-no-point-to-use-typescript-in-your-project-if-you-dont-care-about-types-68131deeb43a)

1. (+16) The code does not contain any type assertions.
2. (+16) The code does not contain any explicit or implicit `any`.
3. (+16) The code contains and uses [type guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) _(e.g., type narrowing type predicates, assertion functions, etc.)_. _(small hint: functions to get data from a json file and/or localStorage are great places to apply type guards.)_

## Functional Requirements (256 points total)

### List of Options (92 points)

#### General (13/92)

1. (+1) Displays the app's name.
2. (+2) Displays the list of options.
3. (+2) In the `initial state`, the list of options contains 1 empty option _(id === `#1`, empty `title` and `weight`)_. _The `initial state` here means the state of the application when the user first encounters it (this can be simulated by pre-closing all current incognito tabs, if any, and opening a new one)_.
4. (+4) Current options must remain the same _(not reset, not shuffled)_ when reloading the page.
5. (+4) Current options must remain the same _(not reset, not shuffled)_ when closing a tab/window and opening it in a new one.

#### Option (28/92)

##### `id`

1. (+1) Each option's `id` must be displayed.
2. (+2) Each option's `id` must be unique.
3. (+2) Each option's `id` must be in `#n` format _(`#1`, `#2`, `#3`, and so on)_.
4. (+4) Each option's `id` must be generated programmatically at creation and the user has no possibility to change it manually.

##### `title`

1. (+1) Each option's `title` must be displayed.
2. (+2) Each option's `title` must be able to be edited by the user.

##### `weight`

1. (+1) Each option's `weight` must be displayed.
2. (+2) Each option's `weight` must be able to be edited by the user.
3. (+2) Each option's `weight` must take only numbers.

##### `delete button`

1. (+1) Each option's `delete button` must be displayed. The appearance of this button should clearly indicate its purpose _(contain appropriate text and/or icon. e.g., "delete", "remove", etc.)_.
2. (+4) Option's `delete button` click must delete the current option from the list.
3. (+2) When the last option is deleted _(if the list has become completely empty)_, the id count must be reset and empty "new option" with `id` `#1` should be added to the list _(as at `initial state`)_

##### Option columns

1. (+4) The width of the "columns" ([`id`](#id), [`title`](#title), [`weight`](#weight), [`delete button`](#delete-button)) should match in "rows" ([options](#option-2892)). _(`flex`/`grid`/`table` can be useful here. How you do it is up to you.)_

#### List Buttons (51/92)

##### New option

1. (+1) Displays a `add option button` next to the list of options for creating a "new option". The appearance of this button should clearly indicate its purpose _(contain appropriate text and/or icon. e.g., "add option", "new option", "+", etc.)_.
2. (+4) The `add option button` click must create a "new option".
3. (+2) "New option" must have a unique `id`.
4. (+2) "New option" must have an empty `title`.
5. (+2) "New option" must have an empty `weight`.
6. (+2) "New option" must have a `delete button`.
7. (+2) "New option" must meet the [#Option](#option-2892) requirements _([`id`](#id), [`title`](#title), [`weight`](#weight), [`delete button`](#delete-button) and [Option columns](#option-columns) requirements)_.

##### Clear list

1. (+1) Displays a `clear list button` next to the list of options for removing all options from the list. The appearance of this button should clearly indicate its purpose _(contain appropriate text and/or icon. e.g., "clear list", "reset list", etc.)_.
2. (+4) The `clear list button` click must remove all current options from the list.
3. (+2) In addition to clearing the list, an empty "new option" with `id` `#1` should be added to the list _(as at `initial state`)_.

##### Save list to file

1. (+1) Displays a `save list button` next to the list of options for saving all current options to the `.json` file. The appearance of this button should clearly indicate its purpose _(contain appropriate text and/or icon. e.g., "save list to file", "save list as json", etc.)_.
2. (+4) The `save list button` click must collect the current options data, convert it to a json object and save it to a `.json` file.
3. (+2) The `title` and `weight` values of options must be saved.
4. (+2) The order of options in the file must match the order of options in the app.

##### Load list from file

1. (+1) Displays a `load list button` next to the list of options for loading options from the `.json` file. The appearance of this button should clearly indicate its purpose _(contain appropriate text and/or icon. e.g., "load list from file", "load list from json", etc.)_.
2. (+2) The `save list button` click must open the interface to select the file.
3. (+2) The type of files to be selected must be limited to a single file of type `.json`.
4. (+2) The current list of options must be completely replaced by the list from the `.json` file you uploaded _(your app must be able to read and correctly parse the file created by your `save list button` click)_.
5. (+2) The order of options in the app must match the order of options in the file. The `id` of options must be newly generated.
6. (+2) Each "loaded option" must meet the [#Option](#option-2892) requirements _([`id`](#id), [`title`](#title), [`weight`](#weight), [`delete button`](#delete-button) and [Option columns](#option-columns) requirements)_.

##### Start

1. (+1) Displays a `start button` next to the list of options for displaying the `Decision Picker` generated by the data from the list of current options. The appearance of this button should clearly indicate its purpose _(contain appropriate text and/or icon. e.g., "start", "pick decision", "open decision picker", etc.)_.
2. (+4) The `start button` click must open `Decision Picker` modal window.
3. (+4) The list of current options passed to the modal window must be filtered and contain only valid options. An option is considered valid if its [`title`](#title) is not empty and its [`weight`](#weight) is greater than `0`.

### Decision Picker (164 points)

> Great place to get familiar with the `<dialog>` element, but the old-fashioned `div.modal>div.modal-content` pattern is ok too as long as it meets the requirements
>
> Briefly, the states mentioned below are:
>
> 1. `Decision Picker` modal window opened - the decision picker is in the `initial state`.
> 2. A successful start of picking process has been initiated - the decision picker is in the `picking state`.
> 3. The picking process has finished and the picked option has been determined - the decision picker is in the `picked state`.
>
> After that `picking state` and `picked state` cyclically change each other according to points 2 and 3.
>
> If the `Decision Picker` modal window was closed and reopened, the life cycle starts again with `initial state`.

#### General (6/164)

1. (+2) Displays the `Decision Picker` modal window if the number of valid options is two or more.
2. (+2) Displays a modal window asking to add at least 2 valid options if the number of valid options is less than two.
3. (+2) An opened modal window must block the page scrolling until the modal window is closed.

#### Wheel (75/164)

> Canvas API and requestAnimationFrame are very good for this part of the assignment.

##### General

1. (+1) Displays the `wheel` element in the `Decision Picker` modal window.

##### Option section

1. (+2) The `wheel` element must display options as sections of a circle.
2. (+4) The order of `option sections` on the `wheel` element must be randomized when the modal window is opened and not change until it is closed.
3. (+4) The fill color of each `option section` must be randomly generated when the modal window is opened and not change until it is closed.
4. (+8) The width (angle) of each `option section` must depend on the `weight` field of the option. _The main idea of this feature is that by setting the weight value of the option we can adjust the chance of that particular option being picked. That is, the higher the weight of the option, the wider its section, and therefore the higher the chance of being picked._
5. (+2) Each `option section` must have a visual boundary to distinguish it from other elements (e.g., adjacent sections, cursor, center element), even if their fill colors are similar. _(Additional stroke, shadow, fill can be useful here.)_

##### Option section title

1. (+2) Each `option section` must display the `title` value of the option as text (except in the case described in the next bullet point). The text should be placed in the section from the center of the wheel to the edge (or from the edge to the center).
2. (+4) Each `option section title` must not violate the boundaries of its section. If the width (angle) of the section is not wide enough to display the text, the text must not be displayed.
3. (+4) Each `option section title` must not violate the boundaries of wheel. If `title` is too long, it should be clipped and end with ellipsis _(e.g., `"some very very long title" -> "some very very long t…"`)_.
4. (+2) Each displayed `option section title` must have a visual boundary to distinguish it from the randomized `option section` fill color. _(Additional stroke, shadow, fill can be useful here.)_

##### Center element

1. (+2) In the center of the `wheel`, there must be a decorative element to hide the point of contact between all the option sections _(e.g., a small circle, star, image, etc.)_.
2. (+2) The `center element` must have a visual boundary to distinguish it from other elements (e.g., adjacent sections), even if their fill colors are similar. _(Additional stroke, shadow, fill can be useful here.)_

##### Cursor

1. (+4) The `wheel` element must display a `cursor` that points to the current option. It can be designed in the form of a triangle, arrow or any similar figure with a clearly defined pointer.
2. (+2) The `cursor` must be placed at any position on the edge of the `wheel` and not overlapped by other elements.
3. (+2) The `cursor` must have a visual boundary to distinguish it from other elements (e.g., adjacent sections, background), even if their fill colors are similar. _(Additional stroke, shadow, fill can be useful here.)_

##### Decision Picking

1. (+2) When decision picking is initiated, the wheel must start rotating and stop after a short duration.
2. (+4) The rotation duration must be specified by the `duration` element. That is, it should correspond to its value (in seconds) at the moment of rotation start. _Be loyal when crosschecking. A small inaccuracy is acceptable. There is no need to reduce points for a difference of a couple of seconds._
3. (+4) The rotation should have a non-linear velocity. Use a suitable easing _(e.g. `ease-in-out` or `ease-in-out-back' with a tiny magnitude)_.
4. (+4) The wheel must perform several full turns (minimum 5) and stop at a randomly picked option.
5. (+2) A `finish sound` must be played when `picking state` is changed to `picked state` if the app sound is not muted.
6. (+2) A `finish sound` must not be played if the app sound is muted.
7. (+4) In the `picking state`, `option sections` must not change their order, shape, color. _It means that visually the `option sections` shall rotate as an indivisible whole wheel._
8. (+4) In the `picking state`, each `option section title` shall not change its location relative to the boundaries of its `option section`. _It means that visually `option section title` and `option section` should rotate as an indivisible element._
9. (+2) In the `picking state`, the `cursor` must stay in its place and not rotate.

#### Picked option (13/164)

1. (+1) Displays a `picked option` element within the `Decision Picker` modal window.
2. (+2) In the `initial state`, `picked option` must display the `title` of the option currently pointed to by the wheel `cursor`.
3. (+4) In the `picking state`, `picked option` must **dynamically** display the `title` of the option currently pointed to by the wheel cursor.
4. (+2) In the `picked state`, `picked option` must display the `title` of the option currently pointed to by the wheel cursor.
5. (+2) In the `initial and picking states`, the `picked option` must not be highlighted.
6. (+2) In the `picked state`, the `picked option` must be highlighted.

#### Interactions (72/164)

##### Closing modal

1. (+1) Displays a `close button` in the upper right corner of modal window for returning to the [list of options](#list-of-options-92-points). The appearance of this button should clearly indicate its purpose _(contain appropriate text or icon. e.g., "⨉", "x", etc.)_.
2. (+4) The `close button` click must close `Decision Picker` modal window and return the user to the [list of options](#list-of-options-92-points).
3. (+4) The `Escape key press` must close `Decision Picker` modal window and return the user to the [list of options](#list-of-options-92-points).
4. (+4) The `outside click` must close `Decision Picker` modal window and return the user to the [list of options](#list-of-options-92-points).
5. (+4) Closing `Decision Picker` modal window must remove it from DOM.
6. (+2) In the `picking state`, `close button` must be temporarily visually disabled or hidden and must not be functioning.
7. (+2) In the `picking state`, the `Escape key press` functionality must be temporarily disabled.
8. (+2) In the `picking state`, the `outside click` functionality must be temporarily disabled.
9. (+2) In the `initial and picked states` `close button` returns to its original state and functions as it should.
10. (+2) In the `initial and picked states` `Escape key press` functions as it should.
11. (+2) In the `initial and picked states` `outside click` functions as it should.

##### Duration

1. (+1) Displays a `duration` `<input>` element within the `Decision Picker` modal window for setting the rotation duration in seconds. The appearance of this input should clearly indicate its purpose _(contain appropriate label and/or placeholder. e.g., "duration", "time", "seconds", etc.)_
2. (+2) `duration` element must be able to be edited by the user.
3. (+2) `duration` element must take only numbers.
4. (+2) `duration` element must have a default value, which should be between 5 and 30 seconds.
5. (+4) In the `picking state`, `duration` element must be temporarily visually disabled and must not be functioning.
6. (+4) In the `initial and picked states` `duration` element returns to its original state and functions as it should.

##### Pick

1. (+1) Displays a `pick button` within the `Decision Picker` modal window for start picking process. The appearance of this button should clearly indicate its purpose _(contain appropriate text and/or icon. e.g., "pick", "start", etc.)_.
2. (+4) The `pick button` click must attempt to initiate picking process.
   - If the `duration` input value is greater than five seconds inclusive, the `Decision Picker` should successfully initiate picking process.
   - Otherwise, the user should be notified of incorrect input _(the default form validation is enough, but you can implement a custom one if you want)_.
3. (+4) In the `picking state`, `pick button` must be temporarily visually disabled and must not be functioning.
4. (+4) In the `initial and picked states` `pick button` returns to its original state and functions as it should.

##### Sound

> Keeping or not keeping mute state between sessions is at your choice and is not evaluated on crosscheck.

1. (+1) Displays a `sound button` within the `Decision Picker` modal window for toggling sound on/off. The appearance of this button should clearly indicate its purpose _(contain appropriate text and/or icon. e.g., "sound: on", "sound: off", "🔊", "🔇", etc.)_.
2. (+4) The `sound button` click must toggle sound on/off.
3. (+2) The `sound button` appearance must correspond to the current mute state (dynamically). _This means that if the sound is muted, the button shows that it is muted and vice versa._
4. (+4) In the `picking state`, `sound button` must be temporarily visually disabled or hidden and must not be functioning.
5. (+4) In the `initial and picked states` `sound button` returns to its original state and functions as it should.

## Crosscheck Evaluation

- Submit app for crosscheck according to [Submission Requirements](#repository-and-submission-requirements).
- Evaluation is based on [Functional Requirements](#functional-requirements-256-points-total).
- Check on the latest version of the “google chrome” browser.

## Crosscheck Penalties (Up to -100%)

- (-100%) Non-empty `<body>` in the `index.html` (only `<script>` tag is allowed).
- (-50) The app is not supported at `640px <= width <= 1280px` at least _(e.g., DOM elements go out of the bounds of parent elements, overlap, etc.)_.
- (-100%) Using `alert`, `prompt`, `confirm`.
- (-10 per error) For repeated app errors, the deduction is only allowed once for each distinct kind of error.

## Mentor review Evaluation

- Submit app for mentor review according to [Submission Requirements](#repository-and-submission-requirements).
- Evaluation is based on [Technical Requirements](#technical-requirements-160-points-total).

## Mentor/Moderation Penalties (Up to -100%)

- (up to -100%) [Repository and Submission Requirements](#repository-and-submission-requirements) not met.
- (-100%) The application is not written in TypeScript.
- (-100%) Prohibited libraries are used.
- (-70%) Use of innerHTML or DOM search methods (querySelector*, getElement*, etc.).
- (-5 per error) Every error related to linters, TypeScript, or Prettier results in a 5 point penalty.
- (-5 per instance) Each use of any in a project results in a 5 point penalty.
- (-5 per instance) Each use of type assertion in a project results in a 5 point penalty.
- (up to -50) There are unresolved mentor comments on the quality of the code or the content of the configs.

## Useful links

- [Creating markup with JS](https://gist.github.com/TELEUZI/410d19772481d98b06e0b41ebf89fff1)
- [Comparing Methods for Appending and Inserting With JavaScript](https://css-tricks.com/comparing-methods-for-appending-and-inserting-with-javascript/)
- [MDN: \<dialog\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [MDN: Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [MDN: File API](https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications)
- [MDN: Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [JavaScript animations](https://javascript.info/js-animation)
- [Easings](https://easings.net/)
- [TS: Type Guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [There is no point in using TypeScript if you don’t care about types](https://javascript.plainenglish.io/there-is-no-point-to-use-typescript-in-your-project-if-you-dont-care-about-types-68131deeb43a)
- [Prettier: Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)

## Assignment Feedback

[Feedback](https://forms.gle/LZ8jYqKueJpCrqSR7) | [Q&A (form)](https://forms.gle/GvhN7VPSCGPyb6ad8) | [Q&A (answers)](https://docs.google.com/spreadsheets/d/1MZMyL9h9zK6flH3QGuX_7FkrXnRkMOZtbQw5ITsBp-g/pubhtml?gid=1977116421&single=true)
