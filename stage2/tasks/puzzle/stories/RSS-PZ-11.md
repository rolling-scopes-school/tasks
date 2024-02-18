# ⏱ Issue RSS-PZ-11: Implement 'Continue' Button for Validated Sentence Progression (10 points)

## 📝 Description

Introduce a 'Continue' button (or a similar label) in the game, which becomes functional only after the player correctly assembles the current sentence. This button allows players to proceed to the next sentence or, if they are on the final sentence of a round, navigate to the statistics page. This feature ensures that the progression through the game is contingent on successful sentence assembly.

## 🔨 Implementation Details

1. **Conditional Activation of 'Continue' Button:**

   - Place a 'Continue' button on the game interface, but keep it inactive initially.
   - Activate the button only after the current sentence is correctly assembled.

2. **Sentence Correctness Verification:**

   - Implement logic to check the accuracy of the sentence assembled by the player.
   - Enable the button upon verifying that the sentence is assembled correctly.

3. **Next Sentence Transition:**

   - When the 'Continue' button is clicked, and the sentence is correct, transition to the next sentence.
   - Ensure smooth and logical transitions within the game flow.

4. **End-of-Round Transition:**

   - Detect the completion of the final sentence in a round.
   - Direct the player to the statistics page upon clicking 'Continue' after the last sentence.

## 🎨 Visual Implementation Ideas

1. **Button Design:**

   - Style the 'Continue' button to be visually aligned with the game’s theme.
   - Consider using progression-indicative icons or symbols, like forward arrows.

2. **Animation for Transitions:**

   - Implement engaging animations for transitions between sentences and to the statistics page.

## ✅ Acceptance Criteria

- The 'Continue' button is initially disabled or not visible, becoming functional and/or visible only upon correct sentence assembly.
- The correctness of the sentence assembly is verified before enabling the button.
- Smooth transitions are ensured between sentences and to the statistics page.
