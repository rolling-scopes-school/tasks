# ⏱ Issue RSS-PZ-12: Implement 'Check' Button for Sentence Verification (10 points)

## 📝 Description

Introduce a 'Check' button in the game, which becomes active or visible only when all the words of a sentence have been moved to the result block. This button serves a critical function by enabling players to verify the correctness of their sentence assembly. It provides immediate feedback by indicating which words are correctly positioned and which are not, enhancing the learning and engagement aspects of the game.

## 🔨 Implementation Details

1. **Activation/Visibility of 'Check' Button:**

   - Include a 'Check' button on the game interface.
   - Keep the button disabled or hidden until all words of the sentence are placed in the result block.

2. **Sentence Assembly Verification:**

   - Once all words are in the result block and the 'Check' button is pressed, implement logic to verify the correctness of the word order.
   - Indicate to the player which words are correctly positioned and which need to be rearranged.

3. **Feedback Mechanism:**

   - Use visual cues like color coding, underlining, or icons next to each word to show correctness or errors.

## 🎨 Visual Implementation Ideas

1. **Button Styling:**

   - Design the 'Check' button to be visually consistent with the game's theme.
   - Use symbols or text that clearly convey its purpose.

2. **Visual Indicators for Feedback:**

   - Employ different colors or icons to indicate right or wrong placements of words.
   - Consider animations or highlights for added engagement.

3. **Responsive Button Behavior:**
   - The button should be visually responsive, changing state as it becomes active or inactive.

## ✅ Acceptance Criteria

- A 'Check' button is present and becomes active/visible only when all words are placed in the result block.
- Pressing the button activates a sentence verification process.
- Clear visual feedback is provided on the correctness of the word order in the sentence.
