# RSS Puzzle Task Overview 🧩

## Introduction 🌟

**RSS Puzzle** is an interactive mini-game designed to enhance English language skills through assembling sentences from jumbled words. Inspired by Lingualeo's Phrase Constructor training, it combines fun 🎉 with education 📚.

## Prototype 🚀

- **Inspiration**: Lingualeo's Phrase Constructor training.
- **Testing**: Test after registering at [Lingualeo](https://lingualeo.com/ru/training/phrasePuzzle) and adding sentences from [recommended phrasebooks](https://lingualeo.com/ru/dictionary/sets-recommended-phrasebooks).

## Application Structure 🏗️

### Core Components

- **User Name Entry**: Enter first and last names for a personalized experience, stored in local storage 📝.
- **Global Toolbar**: Includes a logout option 🔙.
- **Start Screen**: Introduction and 'Start' button, accessible after name entry 🌐.
- **Main Page**: Central gameplay area with menu, hints, results, and data blocks, along with action buttons ⚙️🔊✍️📋.
- **Statistics Page**: Displays game statistics and artwork information 🖼️.

### Data Set 📚

A collection of 3600 English words, sorted by difficulty, with example sentences for gameplay.

## Functional Blocks 🧱

### User Interaction

- **User Name Entry**: Simplified access via name entry, stored in local storage 🔐.
- **Start Screen**: Features app name, brief instructions, and the 'Start' button 🌐.
- **Menu**: Allows selection of difficulty level and game round, toggling of auto-pronunciation, and choosing hints ⚙️.
- **Hint Block**: Contains sentence translation and audio icon 🔊.
- **Result Block**: Assembles sentences with a dedicated line for each sentence ✍️.
- **Data Block**: Randomly placed word cards for sentence assembly 📋.
- **Statistics Page**: Displays all round sentences with audio icons, miniature artwork, and artwork details 🖼️.

### Gameplay Mechanics

- **Sentence Assembly**: Interactive drag-and-drop of words to form sentences 👆.
- **Progressive Difficulty**: Six levels of difficulty, each with 60 rounds 📈.
- **Artwork Puzzle**: Word cards feature puzzle-like interlocking edges and form part of a larger image puzzle 🧩.

## Image Resources for Artwork Puzzles 🌠

- **Original Data**: Students can use the original image collection available at [this GitHub repository](https://github.com/valerydluski/Images).
- **Custom Collection**: Alternatively, students can build their own collection of images for the puzzles.

## Gameplay Workflow 🎮

1. **Name Entry**: Mandatory for accessing the game 🚪.
2. **Start Screen**: Introduction and transition to the main gameplay 🌐.
3. **Round Playthrough**: Sentence assembly, hint usage, and level progression 🔁.
4. **Results and Continuation**: Showcases artwork and offers statistical insights post-round 📈📉.

## Application Workflow

- **Login Page**: Required for both new registration and existing user login.
- **Single Login Session**: Users stay logged in even after page reloads.
- **Logout Functionality**: Redirects to the login page and stops the application.
- **Game Start**: Clicking 'Start' on the start screen opens the main application page.

## Conclusion 🎬

This task is about developing a puzzle game that blends language learning with interactive gaming. Focus on creating an engaging, functional, and user-friendly experience.

![Screenshot](./images/puzzle.png)
![Screenshot](./images/puzzle1.png)
![Screenshot](./images/puzzle2.png)
![Screenshot](./images/puzzle3.png)
![Screenshot](./images/puzzle4.png)
