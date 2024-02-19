# ⏱ Issue RSS-PZ-14: Implement 'Auto-Complete' Button for Sentence Assembly (5 points)

## 📝 Description

Develop an 'Auto-Complete' feature that, upon activation through a designated button, automatically arranges all words in the result block into their correct order, thus completing the sentence for the player. This feature serves as an aid for players who are stuck or wish to see the correct sentence assembly.

## 🔨 Implementation Details

1. **'Auto-Complete' Button Implementation:**

   - Introduce an 'Auto-Complete' button within the game interface.
   - This button, when clicked, should trigger the automatic arrangement of words into the correct sentence order.

2. **Correct Sentence Assembly Logic:**

   - Store the correct order of the sentence internally within the game logic.
   - Use this data to rearrange the words correctly in the result block when the 'Auto-Complete' button is activated.

3. **User Interaction and Feedback:**

   - Provide clear visual feedback when the 'Auto-Complete' function is in action, such as a brief animation of the words rearranging.
   - Once the sentence is auto-completed, provide an option for the player to move to the next sentence.

4. **Button Accessibility:**

   - Ensure that the button is easily accessible but positioned in a way that it's not triggered accidentally.

## 🎨 Visual Implementation Ideas

1. **Button Design:**

   - Style the 'Auto-Complete' button in a manner that is consistent with the game's theme but also stands out to indicate its special functionality.

2. **Animating the Auto-Completion:**

   - Use smooth transitions or animations as the words move into their correct positions to enhance user engagement.

3. **Indicators for Limitations:**
   - If there are usage limitations, display them clearly near the button, such as a counter for remaining uses.

## ✅ Acceptance Criteria

- An 'Auto-Complete' button is available in the game interface.
- Clicking the button automatically arranges words into the correct sentence order in the result block.
- The feature provides clear visual and interactive feedback during and after its activation.

## 🌐 Useful Links and Resources

- [Creating Interactive Buttons in HTML/CSS](https://www.w3schools.com/css/css3_buttons.asp)
- [Designing Animations for UI Feedback](https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9)
