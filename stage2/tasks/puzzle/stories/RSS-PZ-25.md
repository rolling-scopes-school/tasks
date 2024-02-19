# ⏱ Issue RSS-PZ-25: Difficulty Levels and Game Rounds Selection Feature (10 points)

## 📝 Description

Develop a feature that enables players to choose from six difficulty levels, with the number of game rounds based on the chosen level and the data available in the [source collection](https://github.com/rolling-scopes-school/rss-puzzle-data/tree/main/data). This functionality aims to provide a tailored gameplay experience, allowing players to select a challenge that suits their preference and skill level.

## 🔨 Implementation Details

1. **Difficulty Level Selection:**

   - Introduce an interface element (like a dropdown menu or a set of buttons) for players to select from six difficulty levels.

2. **Determining Game Rounds:**

   - Based on the chosen difficulty level, calculate the number of game rounds. This calculation should take into account the available data in the source collection.
   - Ensure that the complexity and length of the game rounds are appropriately scaled with the difficulty level.

3. **Data Integration from Source Collection:**

   - Integrate sentence data from the source collection to populate the game rounds corresponding to the selected difficulty level.

4. **User Interface for Selection:**

   - Design the difficulty selection interface to be user-friendly and visually appealing, seamlessly fitting into the overall game design.

5. **Immediate Game Restart with New Level:**
   - Upon selection of a difficulty level or round, immediately restart the game with the new data for the selected level.

## 🎨 Visual Implementation Ideas

1. **Difficulty Selection Controls:**

   - Use visually distinct elements for each difficulty level, such as color-coded buttons or icons.

2. **Adaptive Game Interface:**

   - Design the game interface to adapt dynamically based on the selected difficulty level, altering aspects like layout, color scheme, or typography.

3. **Animations and Transitions:**
   - Implement engaging animations or transitions when the player selects a difficulty level, enhancing the interactive experience.

## ✅ Acceptance Criteria

- Players can choose from six distinct difficulty levels.
- The number of game rounds is determined based on the selected difficulty level or round and source collection data.
- The game interface adapts accordingly to reflect the chosen level and round.
- Upon selection, the game immediately restarts with the new difficulty appropriate data for the level and round.
