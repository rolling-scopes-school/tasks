# CodeJam-DOM User Notifications

### Deadline: Sunday, November 11, 2018 23:59

## Task

Your task is to implement UI component for notifications with the functionality described below. JS and CSS files should be located in the `notifications` folder. As soon as you have implemented one of the features, commit the file. Then you should implement next feature and commit it. You can refactor code and commit changes before deadline.

### Component description

You need to implement the component that appears in the upper right corner of the screen 5 seconds after the page loads. The component displays given "useful information" and saves its position while scrolling the page. The "useful information" must be preset to the component as an array of strings during its initialization.

![codejam-2-dom](https://raw.githubusercontent.com/amoebiusss/rss-tasks-assets/master/codejam-2-dom.jpg)

Component must contain the following elements:

- (1) Closing icon. Click on it closes the component.
- (2) Checkbox that disables notification and sets a flag into local storage. If the flag is set, component won't be shown when the page reloads.
- Arrows (3) and (4) that switch the contents of element (6) to the previous and the next notification respectively.
- (5) Notification number that shows current notification position.
- Keyboard support. Component supports keyboard control: switching back and forward, closing by clicking on the cross.

### Restrictions

    - Must work in Chrome
    - Using of jQuery and other libraries is not allowed
    - Using of Bootstrap and other CSS frameworks is not allowed
    - Using of Angular/React/Vue and other frameworks is not allowed
    - You can use CSS preprocessors
    - You can google, communicate with each other and use stackoverflow

### How to submit the task

    - Create an empty HTML page (for example, `index.html`)
    - Add some dummy text to this page (for example, [lorem ipsum](https://en.wikipedia.org/wiki/Lorem_ipsum))
    - Start implementing the notification component
    - Create layout of the static component
    - Implement the required functionality
    - Commit changes in your code during development:
        1. empty page
        2. component layout
        3. functionality
        4. ...and so on
    - You can refactor code and commit fixes before deadline

### Repository requirements

1. You need to work with your private repository (you were invited to this repo before).
2. All the code must be in the `codejam-dom` branch and in the `codejam-dom` folder.
3. After completing the task you must open a Pull Request `codejam-dom`->`master`.

### PR (Pull Request) requirements

1. PR name should contain **the task name** and probably additional info.
2. Changes **must not contain commented code, unnecessary files, changes from other branches and generated files** like \*.bundle.js. Please review your changes before contributing. .editorconfig, .gitignore, etc. can be included.
3. Comments in the PR are good practice.
4. [How to write the perfect Pull Request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request)

### Commit requirements

- At least 3 commits
- Commit naming must follow the guideline: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)

Basic requirements:

```
  * Allowed Types:
    * docs: - *documentation only changes*
    * feat: - *a new feature*
    * fix: - *a bug fix*
    * perf: - *a code change that improves performance*
    * refactor: - *a code change that neither fixes a bug nor adds a feature*
    * style: - *сhanges that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)*
    * ...
  * Use the present tense ("add feature" not "added feature")
  * Use the imperative mood ("move cursor to..." not "moves cursor to...")
  * Limit the first line to 72 characters or less
  * Reference issues and pull requests liberally after the first line
```

### Evaluation

- Maximum score for the task - **100 points**
- Component layout is implemented (and the component is located in the upper right) **+15 points**
- Closing by clicking on the cross is implemented **+5 points**
- State saving to `window.localStorage` is implemented. The component is not shown when page reloads, if the user has disabled it **+20 points**
- Switching notifications back and forward when clicking on arrows is implemented **+10 points**
- An endless rewind cycle is implemented (it starts from the beginning after the last notification) **+15 points**
- Keyboard control is implemented **+15 points**
- Requirements for the commits, repo and PR are met **+10 points**
- The `package.json` file is created in the project, `eslint` and `eslint-config-airbnb-base` packages are added, code is written according to the requirements of `eslint-config-airbnb-base` **+10 points**

## Who checks the task

Your mentor.

## Solution explanation

- [Slides](https://docs.google.com/presentation/d/1gH21NJrZlnQpigodbmDtJmozamkezPJ8B65gqqFQwRU/edit#slide=id.g383cf02937_1_1)
- [Video](https://www.youtube.com/watch?v=UaCGsLvviCA&index=11&list=PLe--kalBDwjhdXudsOpKooP6q9bAl3rPG)
