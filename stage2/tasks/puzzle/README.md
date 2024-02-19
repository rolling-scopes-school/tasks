# RSS Puzzle Task Overview 🧩

## Introduction 🌟

**RSS Puzzle** is an interactive mini-game designed to enhance English language skills through assembling sentences from jumbled words, inspired by Lingualeo's Phrase Constructor training.

## Prototype 🚀

- **Inspiration**: Lingualeo's Phrase Constructor training.
- **Testing**: Available at [Lingualeo](https://lingualeo.com/ru/training/phrasePuzzle) after registering and adding sentences from [recommended phrasebooks](https://lingualeo.com/ru/dictionary/sets-recommended-phrasebooks).

## Application Structure 🏗️

### Core Components

- **User Name Entry**: Enter first and last names for a personalized experience, stored in local storage 📝.
- **Global Toolbar**: Includes a logout option 🔙.
- **Start Screen**: Introduction and 'Start' button, accessible after name entry 🌐.
- **Main Page**: Central gameplay area with menu, hints, results, and data blocks, along with action buttons ⚙️🔊✍️📋.
- **Statistics Page**: Displays game statistics and artwork information 🖼️.

### Data Set 📚

- A collection of 3600 English words, sorted by difficulty, with example sentences for gameplay.
- **Word Collection**: Access the JSON collection of words [here](https://github.com/rolling-scopes-school/rss-puzzle-data/tree/main/data).

## Functional Blocks 🧱

### User Interaction

- **User Name Entry**: Simplified access via name entry, stored in local storage 🔐.
- **Start Screen**: Features app name, brief instructions, and the 'Start' button 🌐.
- **Menu**: Allows selection of difficulty level and game round, toggling of auto-pronunciation, and choosing hints ⚙️.
- **Hint Block**: Contains sentence translation and audio icon 🔊. Access audio files [here](https://github.com/rolling-scopes-school/rss-puzzle-data/tree/main/files).
- **Result Block**: Assembles sentences with a dedicated line for each sentence ✍️.
- **Data Block**: Randomly placed word cards for sentence assembly 📋.
- **Statistics Page**: Displays all round sentences with audio icons, miniature artwork, and artwork details 🖼️.

### Gameplay Mechanics

- **Sentence Assembly**: Interactive drag-and-drop of words to form sentences 👆.
- **Progressive Difficulty**: Six levels of difficulty 📈.
- **Artwork Puzzle**: Word cards feature puzzle-like interlocking edges and form part of a larger image puzzle 🧩.

## Image Resources for Artwork Puzzles 🌠

- **Original Data**: Available at [this GitHub repository](https://github.com/rolling-scopes-school/rss-puzzle-data/tree/main/images).
- **Custom Collection**: Students may build their own collection of images for the puzzles.

## Gameplay Workflow 🎮

1. **Name Entry**: Mandatory for accessing the game 🚪.
2. **Start Screen**: Introduction and transition to the main gameplay 🌐.
3. **Round Playthrough**: Sentence assembly, hint usage, and level progression 🔁.
4. **Results and Continuation**: Showcases artwork and offers statistical insights post-round 📈📉.

## Repository Rules 🗃️

- **Repository**: Work in the private school repository.
- **Branch**: Create a new branch `rss-puzzle` from `main` or `master`.
- **Commits**: Follow commit guidelines and maintain a clear history.

## Technical Requirements 🛠️

- **Language**: Application written in TypeScript.
- **Allowed**: Use of preprocessors and lodash.
- **Prohibited**: Frameworks like Angular, Vue, React, etc.
- **Prohibited**: jQuery.

## Submission Rules 📤

### Cross-Check

- **Deployment**: Submit the link to the deployed application.
- **Platform**: Submit on RS App, [Cross-Check Submit](https://app.rs.school/course/student/cross-check-submit?course=js-fe-2023Q4).

### Mentor Review

- **Pull Request**: Submit the link to the pull request with detailed description and self-assessment.
- **Platform**: Submit for mentor review on the student dashboard in RS App, [Student Dashboard](https://app.rs.school/course/student/dashboard?course=js-fe-2023Q4).

## Evaluation Criteria: 📋

### CrossCheck Criteria (245 points): ✅

[Cross-Check Criteria](./CrossCheckCriteria.md)

### Mentors Check Criteria (150 points): ✅

[Mentors Check Criteria](./MentorsCheckCriteria.md)

## 🌟 Final Goal

Upon completing these modules, you'll not only deepen your understanding of TypeScript but also have a personalized showcase of your learning journey. This documentation will serve as a valuable asset in your portfolio, demonstrating your commitment and expertise in TypeScript.

May you find the perfect sequence for your words as you navigate through the challenges of this puzzle game. Best of luck, and happy linguistic journey! 🎉🔍

![Screenshot](./images/puzzle.png)
![Screenshot](./images/puzzle1.png)
![Screenshot](./images/puzzle2.png)
![Screenshot](./images/puzzle3.png)
![Screenshot](./images/puzzle4.png)
