# ⏱ Issue RSS-PZ-23: Toggle Option for Background Image Hint on Word Cards (5 points)

## 📝 Description

Introduce a toggle feature in the game that allows players to control the visibility of background images on the word cards. When this option is enabled, each word card in the source data block displays a piece of a larger image, adding a visual puzzle element to the sentence assembly process. Conversely, if the hint is disabled, these images should only become visible once the sentence is correctly assembled, thus maintaining an element of challenge for players.

## 🔨 Implementation Details

1. **Background Image Hint Toggle:**

   - Implement a toggle control, such as a switch or button, for players to enable or disable the background image hint.
   - Ensure the toggle is clearly labeled and intuitive to use.

2. **Conditional Image Visibility:**

   - If the hint is enabled, display the background images on the word cards immediately as the sentence appears in the source data block.
   - If disabled, reveal the images only after the sentence is correctly assembled.

3. **Integration into Game UI:**

   - Seamlessly incorporate the toggle control within the game interface, ensuring it does not detract from the gameplay experience.

4. **Feedback for Toggle State:**
   - Provide immediate visual feedback on the toggle's state, indicating whether the image hint is active.

## 🎨 Visual Implementation Ideas

1. **Toggle/Button Design:**

   - Style the toggle/button to match the game's aesthetic, using clear visual cues for its on/off states.
   - Consider using icons or graphics that represent the background image feature.

2. **Background Image Presentation:**

   - Design the word cards so that the images are visually appealing and contribute to the puzzle-like aspect of the game.

## ✅ Acceptance Criteria

- A toggle option is available for players to control the visibility of background images on word cards.
- The background images on word cards are displayed based on the toggle state - immediately visible or only after sentence assembly.
- Clear feedback is provided to indicate the current state of the background image hint.
