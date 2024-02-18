# ⏱ Issue RSS-PZ-13: Transform 'Check' Button to 'Continue' Upon Correct Sentence Assembly (5 points)

## 📝 Description

Incorporate a seamless transition in the game logic where the 'Check' button transforms into a 'Continue' button once a sentence is correctly assembled. This change signals to the player that they have successfully completed the current sentence and can proceed to the next one or the next round. This feature is pivotal for enhancing user experience by providing clear and intuitive guidance on game progression.

## 🔨 Implementation Details

1. **Button Transformation Logic:**

   - Initially, present the player with a 'Check' button to verify the sentence assembly.
   - Upon correct assembly of the sentence, programmatically transform this 'Check' button into a 'Continue' button.

2. **Verifying Sentence Correctness:**

   - Implement logic that determines the correctness of the sentence when the 'Check' button is pressed.
   - Only transform the button to 'Continue' if the sentence is assembled correctly.

3. **'Continue' Button Functionality:**

   - Once transformed, the 'Continue' button should allow the player to progress to the next sentence or redirect to the statistics page.
   - Ensure this transition is smooth and maintains the continuity of the game.

4. **Visual Feedback and Styling:**

   - Provide clear visual feedback during the button transformation to indicate the change in functionality.
   - Style both buttons consistently with the game's theme but with distinguishable features.

## ✅ Acceptance Criteria

- The 'Check' button transforms into a 'Continue' button upon the correct assembly of a sentence.
- The button transformation is accompanied by clear visual feedback.
- The 'Continue' button enables progression to the next sentence or redirect to the statistics page.
