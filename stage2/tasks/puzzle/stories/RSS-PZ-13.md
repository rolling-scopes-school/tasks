# ⏱ Issue RSS-PZ-13: Transform 'Check' Button to 'Continue' Upon Correct Sentence Assembly (5 points)

## 📝 Description

Enhance the game's user interface by transforming the 'Check' button into a 'Continue' button after correctly assembling a sentence. This transition should indicate to the player that they are ready to proceed either to the next sentence or to the background image revelation screen ([RSS-PZ-28](./stories/RSS-PZ-28.md)) if the feature is implemented. If not, the button should lead to the next round. This enhancement aims to provide a seamless and intuitive gaming experience.

## 🔨 Implementation Details

1. **Button Transformation Logic:**

   - Start with a 'Check' button for players to verify sentence assembly.
   - Upon correct assembly, change the 'Check' button to a 'Continue' button.

2. **Sentence Correctness Verification:**

   - Develop logic to determine the accuracy of the assembled sentence.
   - Enable the 'Continue' button only after the sentence is confirmed to be correct.

3. **Navigational Functionality of 'Continue' Button:**

   - If the background image revelation feature ([RSS-PZ-28](./stories/RSS-PZ-28.md)) is implemented and the sentence is the final one in the round, direct the player to the image revelation screen.
   - Otherwise, allow the player to advance to the next round.

4. **Visual Feedback and Consistency:**
   - Provide clear visual cues during the button's transformation to indicate its changed function.
   - Ensure the design of both buttons is consistent with the overall game aesthetic.

## ✅ Acceptance Criteria

- The 'Check' button becomes a 'Continue' button after the player assembles a sentence correctly.
- Visual feedback clearly indicates the button's transformation.
- The 'Continue' button leads to either the background image revelation screen ([RSS-PZ-28](./stories/RSS-PZ-28.md)) or the next round, based on game progression and feature implementation.
