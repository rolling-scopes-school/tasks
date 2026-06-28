# Not Fight Club

## Skills

`vanilla JavaScript` `DOM manipulation` `state management` `event handling` `localStorage` `game logic` `randomization` `UI components`

## Our Handbook

👉 [Open Handbook](https://autocubes.site/junior-notes/rs-bootcamp-2026/readme) 👈

This handbook is currently in a test phase.
If you notice any issues or have suggestions, feel free to contact me on Discord: `@OreskaG`

## Task Description

Build a turn-based browser fighting game with customizable player, opponent pool, attack/defense mechanics, critical hits, and a battle log.

[Live demo](https://turn-them-all-down.vercel.app)

The game is inspired by the combat mechanics of the old browser game "Fight Club" (Бойцовский клуб). A complete project lets the player create a character, pick an avatar, and fight battles against a pool of opponents.

The ceiling is your imagination - the list below is the **required** functionality and how points are awarded for it.

> The demo uses client-side routing. **Routing is not required** for this task.

## Requirements

The project consists of several screens and a battle system. The full list of required features is described in the [Scoring Criteria](#scoring-criteria) section below - each feature there is also a requirement.

### Screens overview

1. **Registration screen** - single input for the player's name.

   ![Registration](https://github.com/user-attachments/assets/04a96b9d-addb-4b56-93cc-7e8fe9f0426b)

2. **Home screen** - start button that creates a new battle.

   ![Home](https://github.com/user-attachments/assets/008d3f4b-8b0b-4c31-8149-8ceae774e7c7)

3. **Character page** - avatar, name, win/loss record, ability to change the avatar.

   ![Character](https://github.com/user-attachments/assets/96a6f81e-a599-49eb-bfd0-521bebc4bbfa)
   ![Avatar picker](https://github.com/user-attachments/assets/0e4bf010-7a9d-4088-8e7d-2805185843f5)

4. **Settings page** - change the player's name.

   ![Settings](https://github.com/user-attachments/assets/7fff3b64-1b5e-4b0d-9ceb-3be53284a0f2)

5. **Battle page** - the core gameplay: player vs. opponent, health bars, attack/defense selection, battle log.

   ![Battle](https://github.com/user-attachments/assets/b5ef4a0b-db51-4382-98e9-3939c7351ac0)

### Battle mechanics

- The game has a set of **attack zones** and **defense zones** (e.g. head, body, legs).
- Each turn the **player** picks **one** zone to attack and **two** zones to defend. Until the player picks the correct number of zones, the game must prevent them from attacking (e.g. the attack button stays disabled).
- After the player confirms, both sides exchange blows simultaneously.
- Each **opponent** has its own attack/defense profile. The demo, for example, has 3 opponents - a spider that attacks two zones and blocks one, a troll that attacks one zone and blocks three, and so on. Your opponent pool must include **at least 2 opponents with different profiles**.
- The opponent's choices each turn are **random** within its profile. Random zones must not repeat within the same turn (e.g. the spider can't attack the legs twice in one turn).
- Damage is dealt only where attack zones do **not** overlap defense zones. If the player attacked the head and the opponent blocked the head - no damage. The same applies the other way around.
- After the exchange, each side's health is reduced by the unblocked damage they received.
- **Critical hits**: both player and opponent have a chance to land a critical hit. A critical hit deals extra damage (the demo uses ×1.5). A critical hit also breaks through a block - if the target was defending the zone, the hit still lands and deals critical damage.
- **Balance rule**: every fighter's HP must be **at least 3× their base damage**, so that no fight can end in one turn.

### Battle log

Every action in a turn produces one log entry. If the player attacks one zone and the opponent attacks two, that turn produces **three** log entries.

Each entry must contain:

- **WHO** attacked
- **WHOM** they attacked
- **WHERE** they hit (which zone)
- **HOW MUCH** damage was dealt (including whether it was blocked / critical)

The exact wording is up to you, but those four facts must be present.

### Technical requirements

1. The player's name, avatar, and win/loss record must persist across page reloads.
2. The list of opponents and their profiles are hardcoded in the project (no backend).
3. No console errors during normal use.
4. The game must work in the latest version of Chrome.

## Submission

1. Work in a **public repository on your personal GitHub account** named `not-fight-club`.
2. Deploy your work to `gh-pages`. If `gh-pages` is not available, use <https://app.netlify.com/drop> with the naming scheme `<github-username>-not-fight-club`.
3. Open a Pull Request from your working branch into `main`. Name the PR after the task. Write the description following the [PR description schema](https://rs.school/docs/short-track/pull-request-requirements). **Do not merge** the PR into `main`.
4. Use the [Git commit convention](https://rs.school/docs/git-convention) for your commit messages. The commit history must reflect the actual development process.
5. Submit the deployment link in [rs app](https://app.rs.school/) → **Cross-Check: Submit**.
6. After the deadline, complete the cross-check (3 days) in **Cross-Check Review**.

## Cross-check

This task is reviewed via the [cross-check process](https://rs.school/docs/cross-check-flow).

The reviewer plays through the deployed app and awards points only for features that actually work. Features that cannot be verified (broken deploy, runtime errors blocking the flow) score 0 for that block.

## Scoring Criteria

**Maximum score: 300 points**

### 1. Registration screen (20 points)

- An input lets the player enter their name; the entered name is reused on every other screen and persists across reloads **+20**

### 2. Home screen (10 points)

- A start button creates a new battle and opens the battle page **+10**

### 3. Character page (45 points)

- The page shows the character's avatar **+10**
- The page shows the player's name and the win/loss record **+10**
- The player can choose a new avatar from a set of images, and the chosen avatar is reflected everywhere it's shown **+25**

### 4. Settings page (20 points)

- The player can change their name; the new name is reflected on every other screen and persists across reloads **+20**

### 5. Battle page (175 points)

- The page shows the player and the opponent with interactive HP bars that update according to the battle logic **+35**
- When a battle is created, the opponent is picked from a predefined pool of at least 2 opponents with different attack/defense profiles **+10**
- Full working battle mechanics per the [Battle mechanics](#battle-mechanics) section - zone selection, attack/defense matching, simultaneous resolution, opponent randomization within profile, no repeated zones in a single turn **+25**
- Critical hits are implemented: a random chance to deal extra damage; a critical hit also breaks through a block **+10**
- A battle log shows every action of every turn with the required fields (**WHO**, **WHOM**, **WHERE**, **HOW MUCH**) **+85**
- Log entries visually highlight key pieces of information (different styles for names, zones, damage values), as shown in the demo **+10**

### 6. Bonus - full persistence (30 points)

- All game data is persisted, so that after a page reload the player can continue with the same character, keep their win/loss record, **and** resume an in-progress battle in the exact same state (HP, current turn, log) **+30**

### Penalties

- A fight can end in a single turn because HP is not at least 3× the base damage **-35**
- A UI framework (React, Vue, Angular, Svelte, etc.) is used **-300**
- Console errors during normal use **-15**

## Learning Resources

- [JavaScript DOM - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [Introduction to Events - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [Window.localStorage - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [`Math.random()` - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Game Programming Patterns - Robert Nystrom (free online book)](https://gameprogrammingpatterns.com/)
- [Designing Turn-Based Combat - Game Developer](https://www.gamedeveloper.com/design/designing-turn-based-combat)
- [State Management in Vanilla JS - DEV](https://dev.to/jacobwicks/simple-state-management-in-vanilla-javascript-3e29)
