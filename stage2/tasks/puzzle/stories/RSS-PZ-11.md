# ⏱ Issue RSS-PZ-11: Implement 'Continue' Button for Sentence Transition and Round Completion (10 points)

## 📝 Description

Develop a 'Continue' button (or similar label) within the game interface, which activates only after a sentence is correctly assembled. This button facilitates progression to the next sentence or, upon completion of the last sentence in a round, transitions to revealing the background image with details ([RSS-PZ-28](./stories/RSS-PZ-28.md)) or to the next round if [RSS-PZ-28](./stories/RSS-PZ-28.md) is not implemented.

## 🔨 Implementation Details

1. **Conditional Activation of 'Continue' Button:**

   - Integrate a 'Continue' button in the game interface, initially inactive.
   - Activate the button only after verifying the correct assembly of the current sentence.

2. **Sentence Correctness Verification:**

   - Implement logic to assess the accuracy of the sentence constructed by the player.
   - Enable the button only when the sentence is confirmed to be correct.

3. **Progression Logic:**
   - When 'Continue' is clicked after correctly assembling a sentence, progress to the next sentence.
   - If it's the final sentence in a round, reveal the background image and its details as per [RSS-PZ-28](./stories/RSS-PZ-28.md), or proceed to the next round if [RSS-PZ-28](./stories/RSS-PZ-28.md) is not implemented.

## 🎨 Visual Implementation Ideas

1. **Button Design:**

   - Ensure the 'Continue' button aligns with the game's visual theme.
   - Consider adding progression-indicative icons, like forward arrows, for a clearer interface.

2. **Interactive Transitions:**
   - Introduce engaging animations or effects for transitions between sentences and to the background image reveal or next round.

## ✅ Acceptance Criteria

- The 'Continue' button is initially disabled or hidden, becoming active only after a sentence is correctly assembled.
- The game accurately verifies the sentence assembly before enabling the 'Continue' button.
- On clicking 'Continue', ensure seamless transitions either to the next sentence, the background image reveal, or to the next round, enhancing the overall user experience.
