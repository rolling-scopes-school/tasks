# English for kids

| Deadline         | Folder name| Branch name |
| ---------------- | ----------- | ----------- |
| 19.04.2020 23:59 | english-for-kids    | english-for-kids    |

**English for kids** - an application for learning English words for kids.

## Application Structure:
1. Main page
2. Category Page
3. Statistics Page

![screenshot](english-for.kids.data/img/screenshot.png)
### Demo
https://english-for-kids.netlify.com/ (version without Hacker scope)

## Examples of work
- https://marta-r-english-for-kids.netlify.app/
- https://zheromskyv-english-for-kids.netlify.app/
- https://xmelsky-english-for-kids.netlify.app/
- https://irinateln0va-english-for-kids.netlify.app/
- https://kotiknalune-english-for-kids.netlify.app/

## Description of Pages
1. The Main Page of the Application
- there are links to the pages with categories of words on the main page of the application
- the minimum number of categories is eight
- each link contains a thematic image and a category name
- links are duplicated in the animated sidebar menu, which appears and disappears by clicking the icon in the upper left corner of the page
- on the main page and category pages of the application, there is a Train / Play switch button

2. Category Page
- category page includes category name and word cards related to category theme
- the minimum number of word cards in each category is eight
- each card has a thematic picture and an English word
- when you click on the card, you will hear the pronunciation of the word in English
- each card has a button on the right bottom corner. When you click on the button, the card flips over. The back side of the card has a translation of the word. Clicking on the back side of the card does not trigger any events like the pronunciation of the word.
- a card is rotated back to the front side when the mouse cursor moves beyond the borders of the card

3. Statistics Page
- the page description is located in the evaluation criteria (Hacker scope)

## How Application should work
The application works in training and game modes.
The description of the application in these modes is located in the evaluation criteria (Basic scope and Advanced scope, respectively). When you load the application or reload the page, the application opens in training mode. Switching between training and playing modes is triggered by clicking the Train / Play switch button.

## Repository requirements
- to develop the application use school’s private repository. [How to work with a private repository](https://docs.rs.school/#/stage2?id=Как-работать-с-приватным-репозиторием)
- the commit history should reflect the application development process. [Commit Requirements](https://docs.rs.school/#/git-convention)
- the demo version of the application should be available at  `https://www.netlify.com/`, or on another similar hosting. For demos hosted on netlify.com, the name of the site should in the following format: name of the github account - name of the task.
- after the end of development process or just before the deadline, create a pull request from the english-for-kids branch to the master branch. [Pull request requirements.](https://docs.rs.school/#/stage2?id=Описание-pull-request-должно-содержать-следующую-информацию). Do not merge the pull request.
- application is checked by mentor and other students (cross-check)
- a link to the demo version of the application has to be added to rs-app to let other student asses the application during the cross-check

## Technical requirements
- the application is checked in the latest version of Google Chrome
- use of jQuery is not allowed
- you are not allowed to use Angular / React / Vue
- you are allowed to use bootstrap or any other CSS frameworks
- you are allowed to use HTML and CSS preprocessors
- you decide whether to use a single-page (SPA) or multi-page (MPA) application development approach, as well as the implementation of navigation between pages
  - if you choose a single-page application (SPA) approach, you do not have to implement all the features of this approach (for example, routing) if they are not critical

## Application Design Requirements
- minimum width at which the application is displayed correctly is 320 px
- since the application is intended for kids, including those who aren't able to read, all labels should be accompanied by pictures or icons if possible
- smooth animation, interesting and relevant design, large and user-friendly buttons, colorful icons, beautiful pictures, light, and bright colors are desirable
- all user interface elements in the demo should be present in your application. However, the proposed design is not mandatory and you can make changes to it for improvement purposes

- the design of the final application should look holistic: the look corresponds to user expectations, the pictures for word cards and categories are of good quality and they have the same size and the correct proportions (there are no distortions), all user interface elements function properly, markup does not fall apart when resolution is changed
- take care of interactivity of clickable elements - hovering the elements changes the appearance of it along with the state of the cursor. Use different styles for active and inactive states of the element

## Evaluation criteria:
**The maximum score for the task: 170 points for a cross-check / 200 points when checked by a mentor**

### Basic scope +50/+80

- **Layout, design, UI of the main page of the application: (+10)**
  - [ ] all elements specified in the task are present on both the mobile and desktop versions
  - [ ] all described application design requirements are met

- **Layout, design, UI of interactive menu: (+10)**
  - [ ] all described application design requirements are met
  - [ ] menu links are functional and lead to corresponding categories page of words
  - [ ] active link is styled differently
  - [ ] the interactive menu is present on all pages of the application
  - [ ] smooth animation of the interactive menu
  - [ ] the menu is closed by clicking on the cross icon, by clicking on the link in the menu, by clicking anywhere in the application, except the menu itself

- **Layout, design, UI of categories page: (+10)**
  - [ ] all the elements specified in the task are present on both mobile and desktop versions
  - [ ] all described application design requirements are met

- **Training Mode: (+20)**
  - [ ] when you click on the card, the word is pronounced in English: (+10)
  - [ ] each card has a button on the right bottom corner, when you click on that button the card flips over. The back side of the card has a translation of the word. Card is rotated back to the front side when the mouse cursor moves beyond the borders of the card: (+10)

- **Code quality requirements are met (+30)** (evaluated by mentors only)
  - [ ] code duplication is kept to minimum: (+10)
  - [ ] js-code is divided into modules: (+10)
  - [ ] webpack, eslint, eslint-config-airbnb-base and babel are used: (+10)

### Advanced scope +80

- **Game Mode: (+80)**
  - [ ] the game mode is activated by toggling the Train/Play switch button. Features described above for the training mode are disabled for the game mode. The button that flips the card and the text on the card are both hidden. The "Start game" button is displayed. Card size does not change. Only the image remains on the card, which occupies the card's entire area (if this does not contradict your design): (+10)
  - [ ] after clicking on the "Start game" button, the random word from those on the page is pronounced. For each page, and for each game, random words are generated anew: (+10)
  - [ ] after the first click on the "Start game" button, the button changes to the "Repeat" icon. When you click on the "Repeat" button, the word is pronounced again: (+10)
  - [ ] the sound signal "error" is played if the user clicks on the wrong active card: (+10)
  - [ ] the sound signal “correct” is played if the user clicks on the correct active card. After that a new random word from those that have not yet been played is heard: (+10)
  - [ ] a card with correctly guessed word becomes inactive, and its style is changed. Clicks on inactive cards are not accompanied by any sound effects, and they do not affect the game score: (+10)
  - [ ] after the start of the game, each click on the active card is displayed in the form of stars (or other symbols). The correct answer is displayed with one colored star and the wrong answer is displayed with a different colored star. If there are too many stars and there is no space, the previous stars are hidden, and the new ones are added: (+10)
  - [ ] when the game is over: (+10)
    - if all words are guessed correctly, the “success” signal is played, cards with words are removed, and a joyful emoticon (or another picture) is displayed on the page
    - if there were errors while guessing the words, the “failure” signal is played, cards with words are removed, and a sad emoticon (or other picture) with the number of mistakes is displayed on the page.
    - afterward, the application automatically redirects to the main page with a list of categories

### Hacker scope +40

- **Statistics Page: (+40)**
  - [ ]  statistics page contains a list of all categories, all words in each category, and a translation of each word. The minimum width at which statistics page is displayed correctly is 320 px. The presence of a scrollbar in a table with statistics is not considered to be an error: (+10)
  - [ ] statistics is displayed next to each word - how many times a card with a given word was clicked in training mode, how many times this word was guessed in game mode, how many mistakes were made, the percentage of correct answers for each word in game mode. After restarting the application, statistics are saved: (+10)
  - [ ] it is possible to sort the data alphabetically, for numerical data ​​- by their value. Sorting can occur in ascending and descending order and should cover the entire data range: (+10)
  - [ ] there are "Repeat difficult words" and "Reset" buttons on statistics page. The "Reset" button resets statistics. Clicking on the "Repeat difficult words" button opens a page similar to the category page with most frequent words guessed wrong. The page "Repeat difficult words" can have from zero to eight words, depending on how many words were guessed wrong in play mode. After clicking on the "Reset" button, the number of words on the "Repeat difficult words" page is set to zero: (+10)
  - [ ] additional functionality outside of the scope of the task is implemented. This part is not evaluated, but if you can do better, then why not.

## Penalty Points
- [ ] less than eight categories, less than eight words in each category, data for the last two categories is copied from the demo, and not prepared independently: -10 points
- [ ]  requirements for pull request, repository, and commit names are not met: -10 points (evaluated by mentors only)
- [ ] source code requirements are not met: -10 points or more (evaluated by mentors only)

## Video explaining the task description
- Task overview: https://youtu.be/xXBce4ZLcCQ
- Task Q & A: https://youtu.be/ctpBIPygV4k
- Task review https://youtu.be/PdHjLvcOLQw

## Resources
- [Folder with data](./english-for.kids.data)  for six categories of words (American pronunciation is used). For the other two missing categories, you should collect the data independently using Internet resources
- [Bootstrap themes](https://bootswatch.com/)
- [Localstorage](https://learn.javascript.ru/localstorage)

### Information resources
- [forvo.com](https://forvo.com/) - get English pronunciation of the word (several pronunciation options are offered)
- [dictionary.cambridge.org](https://dictionary.cambridge.org/) - get English pronunciation of the word

### Cross-check
- cross-check instructions: [docs.rs.school/#/cross-check-flow](https://docs.rs.school/#/cross-check-flow)
- feedback form: [cross-check-english-for-kids.netlify.com](https://cross-check-english-for-kids.netlify.com/)

### Document for questions
