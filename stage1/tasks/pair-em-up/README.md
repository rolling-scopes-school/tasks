# Pair 'em Up 🎮

## Table of Contents

- [Learning objectives](#learning-objectives-) 📚
- [Game objective](#game-objective-) 🎯
- [Game rules](#game-rules-) 📋
- [Main functional requirements](#main-functional-requirements-) ✅
- [Main technical requirements](#main-technical-requirements-) 💻
- [Repository requirements](#repository-requirements-) 📁
- [Evaluation criteria](#evaluation-criteria-) 📊
- [Useful Resources & Links](#useful-resources--links-) 📖

## Learning objectives 📚

By completing this comprehensive project, you will master:

### Core JavaScript & DOM Manipulation

- **Pure JavaScript development**: Build complex interactive applications using vanilla JavaScript without frameworks
- **Dynamic DOM manipulation**: Create, modify, and manage DOM elements programmatically for multi-screen applications
- **Event-driven architecture**: Implement sophisticated event handling for user interactions across different UI states

### Game Logic & Algorithm Implementation

- **Complex state management**: Handle multi-dimensional game grids, scoring systems, and win/lose conditions
- **Algorithm design**: Develop pair-matching algorithms and strategic game mechanics with multiple difficulty modes
- **Data structure manipulation**: Work with arrays, objects, and localStorage for persistent game states

### Responsive UI/UX Design

- **Adaptive layouts**: Create responsive designs working across 380px-1280px viewport range
- **Multi-screen applications**: Design and implement start screens, game interfaces, modals, and settings panels
- **Interactive feedback**: Build visual and audio feedback systems for enhanced user experience

### Modern Development Workflow

- **Build tools ecosystem**: Configure and use bundlers, linters, formatters, and automated quality tools
- **Version control mastery**: Apply Git workflow and conventional commit standards
- **Code quality assurance**: Implement pre-commit hooks for professional development practices

### Core Web Application Skills

- **Client-side persistence**: Master localStorage for saving game states, settings, and user statistics
- **Performance optimization**: Learn efficient DOM manipulation and memory management techniques
- **Deployment & hosting**: Experience complete project lifecycle from development to GitHub Pages deployment

## Game objective 🎯

**Pair 'em Up** is a strategic number-matching puzzle game where players must clear a 9×5 grid by finding and removing valid pairs of numbers. The goal is to score points by strategically matching number pairs while managing limited assist tools and resources. Players win by reaching or exceeding the target score of 100 points before running out of valid moves and available assists.

The game offers three distinct modes:

- **Classic mode**: Sequential numbers from 1-9 and 11-19 (excluding 10) arranged in order
- **Random mode**: Numbers from 1-9 and 11-19 (excluding 10) placed in random order
- **Chaotic mode**: Exactly 27 random numbers using only digits 1-9

## Game rules 📋

### ✅ Valid Pairs

A valid pair consists of exactly two numbers that meet one of the following criteria:

- **Identical numbers**: Two numbers that are exactly the same (e.g., 7 and 7)
- **Sum to 10**: Two numbers that add up to 10 (e.g., 3 and 7, 4 and 6)
- **Special case**: A pair of fives (5 and 5) awards bonus points

### 🎯 Pair Selection Rules

Numbers can be selected and removed following these connectivity rules:

- **Adjacent cells**: Numbers in vertically or horizontally adjacent cells can always be paired
- **Same row/column**: Numbers in the same row or column can be paired if the cells between them are empty
- **Row boundaries**: The last number of one row can pair with the first number of the next row

### ⚙️ Gameplay Mechanics

- **Cell removal**: When a valid pair is successfully matched, both cells become empty and the numbers are permanently removed from the grid
- **Invalid pairs**: Attempting to match an invalid pair provides visual/audio feedback but keeps the numbers in place
- **Grid management**: As cells are cleared, remaining numbers maintain their positions (no automatic shifting)

### 🏆 Scoring System

Points are awarded based on pair difficulty:

- **Identical pair**: +1 point (e.g., 7 + 7)
- **Sum-to-10 pair**: +2 points (e.g., 3 + 7)
- **Double five bonus**: +3 points (special case for 5 + 5)

### 🪄 Assist Tools

Players have access to limited-use assist tools to help overcome challenging board states:

- **Hints**: Shows the number of currently available valid moves (maximum display: "5+")
- **Revert**: Undoes the last move (single-step undo, can be used once after each move)
- **Add Numbers** (max 10 uses per game): The numbers are added to the grid one by one without empty cells in between
  - **Classic mode**: collects all remaining numbers and appends them to the grid in sequential order
  - **Random mode**: collects all remaining numbers and appends them to the grid in random order
  - **Chaotic mode**: appends as many new random numbers (1-9) to the grid as the number of remaining numbers
- **Shuffle**: Randomly rearranges existing numbers on the board (max 5 uses per game)
- **Eraser**: Removes any single number from the grid (max 5 uses per game)

### 🏅 Win/Lose Conditions

- **Win condition**: Reach or exceed the target score of 100 points
- **Lose condition** (either of the following must be true):
  - no valid moves remain and no shuffle uses are left and no add numbers uses remain
  - the 50-line grid limit has been reached

### ⏱️ Game Limits

- **Maximum grid size**: 50 lines total (when adding numbers repeatedly)
- **Assist caps**: Add numbers (10 uses), Shuffle (5 uses), Eraser (5 uses)
- **Undo history**: 1 step back (unlimited use per game)
- **Target score**: 100 points minimum to win

## Main functional requirements ✅

### 🌍 Game language

The game should be available in English.

### 🚀 Start Screen

The initial screen that players see when launching the application:

- **Game title**: "Pair 'em Up" prominently displayed
- **Author credit**: Author's GitHub username with a clickable link to their profile
- **Mode selection**: Buttons or interface to choose between Classic, Random, and Chaotic game modes
- **Continue game button**: Appears only when a saved game exists; allows resuming a previously saved game
- **Settings access**: Button to open the settings panel/modal
- **Results access**: Button to view game history and high scores

### 🎭 Game Modes

Three distinct difficulty modes with different number generation patterns:

- **Classic mode**: Sequential numbers from 1-9 and 11-19 (excluding 10) arranged in order. When adding new numbers with "Add numbers" button, they continue the sequential pattern.
- **Random mode**: Numbers from 1-9 and 11-19 (excluding 10) placed in random order initially. When adding new numbers with "Add numbers" button, they are also placed randomly.
- **Chaotic mode**: Exactly 27 random numbers using only digits 1-9. When adding new numbers with "Add numbers" button, appends as many new random numbers (1-9) to the grid as the number of remaining numbers.

### 🎨 Game Screen Layout

The main gameplay interface containing:

- **Mode selection info**: Information about the current mode (Classic, Random, Chaotic)
- **Game grid**: Initial 9×5 cell grid where numbers are displayed and interacted with
- **Score display**: Shows current score and target score (100 points); updates immediately after each successful pair match
- **Timer**: Running time display in MM:SS format, starts automatically when game loads
- **Control buttons**:
  - **Reset button**: Restarts the current game in the same mode with fresh numbers
  - **Save game button**: Preserves current game state (grid, score, timer, mode, undo history, assist tools uses)
  - **Continue game button**: Loads a previously saved game state
- **Assist buttons**: Five strategic tools (Hints, Revert, Add Numbers, Shuffle, Eraser) with usage counters
- **Settings button**: Quick access to game settings during play

### 👆 Player Interaction

Core gameplay mechanics for selecting and matching number pairs:

- **Cell selection**: Left-click or tap to select/deselect cells. Players can select exactly two cells to attempt a pair match.
- **Pair validation**:
  - **Valid pair**: Both numbers disappear, cells become empty, points are awarded, success feedback plays
  - **Invalid pair**: Numbers remain, visual/audio feedback indicates the invalid attempt
- **Selection feedback**: Clear visual indication of selected cells (highlighting, animation, etc.)
- **Game state persistence**: Automatic saving to localStorage for game continuation in case of page reload
- **Audio feedback**: Sound effects for key interactions (cell select/deselect, valid pair, invalid pair, assist usage, game start/end)

### 💡 Assist Buttons

Limited-use strategic aids to help players overcome difficult board positions:

- **Hints**: Displays current count of available valid moves (updates after each action; shows "5+" if there are 6 or more moves available)
- **Revert**: Undoes the most recent move (single-step undo; disabled after use until next move is made)
- **Add Numbers**: Appends new numbers to the grid following the current mode's rules (max 10 uses per game)
- **Shuffle**: Randomly rearranges all existing numbers on the board (max 5 uses per game)
- **Eraser**: Removes any single number from the grid (max 5 uses per game)

All assist tools display remaining uses and become disabled when depleted.

### 🏁 Game Outcomes

End-game conditions and result presentation:

- **Win condition**: Player reaches or exceeds the target score of 100 points
- **Lose conditions**:
  - No valid moves remain AND no shuffle uses left AND no add numbers uses remain
  - OR the 50-line grid limit has been reached (from repeated "Add Numbers" usage)
- **Result display**: Modal or screen showing final outcome (Win/Loss), user message, final score, and completion time (MM:SS format)
- **Post-game options**: Ability to play again (the same mode and settings), return to main menu, or view results

### 📜 Results and History

Game statistics tracking and high score system:

- **Game logging**: Each completed game saves: selected mode, final score, win/loss outcome, completion time, and total number of moves made
- **High score table**: Maintains the 5 latest games, sorted by completion time (MM:SS format)
- **Win indicators**: Visual markers (e.g., stars, trophies) for games that were won
- **Data persistence**: All results stored in localStorage for cross-session access

### 🔄 Page Reload Handling

Ensures game progress is never lost due to browser refreshes:

- **Automatic save**: Current game state (grid, score, timer, mode, undo history, assist tools uses) preserved before page unload
- **Seamless recovery**: Start screen displays with "Continue Game" button visible which allows to resume the game from the last saved state
- **Settings persistence**: User preferences (sound, theme) maintained across games and sessions

### ⚙️ Settings Panel

Customizable game preferences:

- **Audio controls**: Individual or group toggle(s) for sound effects:
  - Cell selection/deselection
  - Successful pair matching
  - Invalid pair attempts
  - Assist tool usage (add numbers, shuffle)
  - Game start and end events
- **Theme selection**: Complete visual theme switching between light and dark modes, affecting:
  - Background colors
  - Game grid and cell colors
  - UI element colors (buttons, counters, text)
  - All interactive elements and indicators

## Main technical requirements 💻

- Initially, the `body` in the `index.html` file must be empty (only a script tag is allowed). **All necessary elements must be generated using JavaScript.**

- The design should be adaptive/responsive within the range _(380px ≤ width ≤ 1280px)_. It is acceptable to modify the appearance for mobile devices (for example, hide some buttons in a burger menu).

- The application must be displayed correctly and function properly in the latest version of Google Chrome.

- It is **not allowed** to use:
  - JS frameworks (e.g., `Angular`, `React`, `Vue`, etc.)
  - `TypeScript`
  - Outdated libraries (e.g., `jQuery`, etc.)

- It is **allowed** to use:
  - CSS preprocessors: (e.g., [SASS](https://sass-lang.com/))
  - CSS frameworks: (e.g., [Tailwind](https://tailwindcss.com/))
  - [modern-normalize](https://www.npmjs.com/package/modern-normalize)

- It is **recommended** to use:
  - Linters: (e.g., [Biome](https://biomejs.dev/), [ESLint](https://eslint.org/))
  - Code formatters: (e.g., [Prettier](https://prettier.io/), [Biome](https://biomejs.dev/))
  - Bundlers: (e.g., [Vite](https://vite.dev/), [Bun](https://bun.com/docs/bundler))
  - [Husky](https://typicode.github.io/husky/)
  - [Commitlint](https://commitlint.js.org/)
  - [Lint-staged](https://www.npmjs.com/package/lint-staged)

## Repository requirements 📁

- The work should be done in the private school's repository
- Create a new branch `pair-em-up` from `main`. After creating and checking out the branch, create a folder `pair-em-up` in the repository where you will place the source code
- The **main** branch should remain empty (containing only files like README.md, .gitignore, or a .github folder)
- Commits should represent the complete work history
- Commit messages should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) guidelines
- Use GitHub Pages (_gh-pages_) for deployment
- Submit **a link to the deployed app** in the Cross-Check: Submit tab
- Once the work is finished, create a pull request from the `pair-em-up` branch to `main`. Do not merge this PR
- The pull request name to `main` should contain the task name
- The pull request description should follow the format described in the [RS School documentation](https://rs.school/docs/en/pull-request-review-process#pull-request-description-must-contain-the-following)

## Evaluation criteria 📊

### Maximum: 300 points

#### Core Game Logic (85 points)

- [ ] **Pair validation - identical numbers**: Correctly identifies pairs of same numbers (8 points)
- [ ] **Pair validation - sum to 10**: Correctly identifies pairs that sum to 10 (7 points)
- [ ] **Scoring - identical pairs**: Awards exactly 1 point for matching identical numbers (5 points)
- [ ] **Scoring - sum pairs**: Awards exactly 2 points for numbers summing to 10 (5 points)
- [ ] **Scoring - bonus pairs**: Awards exactly 3 points for pairs of fives (5 points)
- [ ] **Win condition detection**: Correctly ends game when score reaches 100+ (5 points)
- **Lose condition detection**:
  - [ ] **no moves**: Correctly ends game when no moves available and no assists left (5 points)
  - [ ] **grid limit**: Correctly ends game when the 50-line grid limit is reached (5 points)
- [ ] **Grid boundary rules**: Implements proper row boundary pair matching (last number of one row can pair with the first number of the next row) (5 points)
- [ ] **50-line limit enforcement**: Prevents adding numbers beyond grid limit (5 points)
- **Assist tools implementation**: All 5 tools work with correct usage limits
  - [ ] **Hints**: Shows the number of currently available valid moves (maximum display: "5+") (5 points)
  - [ ] **Revert**: Undoes the last move (single-step undo, limited to one use per turn) (5 points)
  - [ ] **Add Numbers**: Appends new numbers to the grid according to the current mode (max 10 uses per game) (10 points)
  - [ ] **Shuffle**: Randomly rearranges existing numbers on the board (max 5 uses per game) (5 points)
  - [ ] **Eraser**: Removes any single number from the grid (max 5 uses per game) (5 points)

#### Game Grid & Number Generation (32 points)

- [ ] **Classic mode - sequential placement**: Numbers 1-9, 11-19 in correct order (9 points)
- [ ] **Random mode - random placement**: Numbers 1-9, 11-19 placed randomly (9 points)
- [ ] **Chaotic mode - 27 numbers**: Exactly 27 random numbers from 1-9 (9 points)
- [ ] **Number regeneration**: Correct number generation according to the current mode (5 points)

#### User Interface Components (66 points)

- [ ] **Start screen - title display**: Game title prominently shown (4 points)
- [ ] **Start screen - author credit**: GitHub link displayed and functional (4 points)
- [ ] **Start screen - mode selection**: Three mode buttons functional (4 points)
- [ ] **Game screen - grid display**: Initial 9×5 grid properly rendered (6 points)
- [ ] **Game screen - score display**: Current and target score shown (5 points)
- [ ] **Game screen - timer display**: MM:SS format counting from start (5 points)
- **Control buttons**: Reset, Save, Continue buttons functional
  - [ ] **Reset button**: Restarts the current game in the same mode with fresh numbers (5 points)
  - [ ] **Save game button**: Preserves current game state (grid, score, timer, mode, undo history, assist tools uses) (5 points)
  - [ ] **Continue game button**: Loads a previously saved game state (5 points)
- [ ] **Assist tools UI**: All 5 tools displayed with usage counters (5 points)
- **Settings panel**: Complete audio and theme controls
  - [ ] Sound toggle(s) for sound effects (3 points)
  - [ ] Theme switching between light and dark modes (3 points)
- **Results screen**: Statistics and high scores table properly displayed
  - [ ] Statistics: Current game score, completion time, win/loss outcome (5 points)
  - [ ] High scores table: Latest 5 games sorted by time (4 points)
- [ ] **Screen navigation**: Proper transitions between all screens (3 points)

#### Responsive Design & Browser Support (25 points)

- [ ] **Proper display and touch functionality within 380px ≤ width ≤ 1280px viewport range**: for desktop and mobile devices (20 points)
- [ ] **Chrome browser support**: Proper implemented functionality in latest Chrome (5 points)

#### Game State Management (32 points)

- [ ] **Game initialization logic**: Proper setup for each game mode (7 points)
- [ ] **Cell selection mechanism**: Click/tap selection and deselection (6 points)
- [ ] **Move validation**: Pair checking and success/failure feedback (7 points)
- [ ] **Grid updates**: Proper cell clearing and number positions (6 points)
- [ ] **Timer accuracy**: Precise MM:SS countdown functionality (6 points)

#### Audio & Visual Feedback (25 points)

- [ ] **Cell selection sounds**: Audio feedback for cell interactions (4 points)
- [ ] **Valid pair sounds**: Success sound for correct matches (3 points)
- [ ] **Invalid pair sounds**: Error sound for incorrect attempts (3 points)
- [ ] **Visual cell highlighting**: Selected cells clearly indicated (5 points)
- [ ] **Animation effects**: Smooth transitions and visual feedback (5 points)
- [ ] **Theme switching**: Complete light/dark mode implementation (5 points)

#### Data Persistence & Settings (20 points)

- [ ] **Game state storage**: Grid, score, timer, mode, undo history, assist tools uses saved and can be resumed on page reload (10 points)
- [ ] **Settings persistence**: Audio and theme preferences saved (5 points)
- [ ] **High scores table**: Latest 5 games sorted by time stored and retrieved (5 points)

#### Code Quality & Functionality (15 points)

- [ ] **Error handling**: No JavaScript errors in browser console (5 points)
- [ ] **Edge case handling**: Game works properly in unusual scenarios (10 points)

### Penalties

- **Critical technical violations**:
  - `body` in the `index.html` file is not empty (only `script` tag is allowed): `-100%`
  - Using JS frameworks (`Angular`, `React`, `Vue`, etc.), `TypeScript`, or outdated libraries (`jQuery`, etc.): `-100%`

- **Responsive design violations**:
  - App is not supported at 380px ≤ width ≤ 1280px viewport range (e.g., DOM elements go out of bounds, overlap, etc.): `-50%`

- **User experience violations**:
  - Using `alert()`, `prompt()`, or `confirm()` functions: `-50%`

- **Functional errors**:
  - Game logic errors or broken features: `-10` to `-30` per major error
  - Minor UI/UX inconsistencies or incomplete features: `-5` to `-15` per issue

#### ⚠️ The administration reserves the right to deduct points or apply penalties for violations not explicitly listed in the task description if they affect the validity, fairness, or integrity of the assignment

## Useful Resources & Links 📖

Here are some helpful resources to assist you in developing the "Pair 'em Up" game:

### Core Web Technologies

- **[Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)** - Drawing graphics with Canvas (for advanced visual effects)

### Data Storage & State Management

- **[MDN Web Docs - Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)** - localStorage and sessionStorage guide
- **[Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)** - Practical examples and best practices
- **[JSON methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)** - Working with JSON data for storage

### Responsive Design & Layout

- **[MDN Web Docs - Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)** - Responsive design with CSS
- **[Responsive Web Design Fundamentals](https://developers.google.com/web/fundamentals/design-and-ux/responsive/)** - Google's guide to responsive design
- **[CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)** - Complete guide to CSS Grid layout
- **[Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)** - Complete guide to CSS Flexbox

### Audio & Multimedia

- **[Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)** - Advanced audio manipulation
- **[HTML Audio Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)** - Basic audio playback
- **[Playing Sounds with HTML5](https://www.w3schools.com/html/html5_audio.asp)** - Simple audio implementation guide

### Development Tools & Debugging

- **[Chrome DevTools](https://developer.chrome.com/docs/devtools/)** - Debugging and development tools
- **[Console API](https://developer.mozilla.org/en-US/docs/Web/API/Console)** - Debugging with console methods

### Design Inspiration

- **[Color Palette](https://coolors.co/)** - Color palette generator
- **[Pixabay](https://pixabay.com/)** - Stunning royalty-free images & royalty-free stock
- **[fffuel](https://www.fffuel.co/)** - Collection of color tools and free SVG generators for gradients, patterns, textures, shapes & backgrounds
- **[Glassmorphism](https://hype4.academy/tools/glassmorphism-generator)** - Glassmorphism generator

Remember to explore these resources as needed throughout your development process. Focus on understanding the core concepts rather than trying to use every tool available!
