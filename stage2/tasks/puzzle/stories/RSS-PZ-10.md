# ⏱ Issue RSS-PZ-10: Enable Reversible Interaction with Word Cards Between Blocks (5 points)

## 📝 Description

Enhance the interactivity of the main game page by enabling word cards in the result block to be clicked and moved back to the source data block. This functionality allows users to dynamically modify their sentence construction by rearranging or reconsidering their word choices.

## 🔨 Implementation Details

1. **Two-Way Interaction:**

   - Implement click functionality on word cards in the result block.
   - Allow cards in the result block to be moved back to the source block upon clicking.

2. **Maintaining Click Order:**

   - When a word card is moved back to the source block, it should be placed in the order it was clicked, relative to other returned cards.

3. **Handling Empty States:**

   - If all cards are moved back to the source block, ensure the result block handles the empty state gracefully.

4. **Consistent Card Behavior:**
   - Maintain consistency in the behavior and appearance of the word cards, regardless of which block they are in.

## 🎨 Visual Implementation Ideas

1. **Animation for Moving Cards:**

   - Implement a smooth animation for the transition of cards between the source and result blocks.

2. **Highlighting Selected Cards:**

   - Use subtle highlights or borders to indicate which cards have been selected for movement.

## ✅ Acceptance Criteria

- Users can click on word cards in the result block to move them back to the source data block.
- The order of returned cards in the source block is maintained based on the click sequence.
- Visual feedback is provided for interactions with the word cards.
- The feature enhances the overall interactivity and flexibility of the game.

## 🌐 Useful Links and Resources

- [JavaScript Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [CSS Transitions for Smooth Animations](https://www.w3schools.com/css/css3_transitions.asp)
