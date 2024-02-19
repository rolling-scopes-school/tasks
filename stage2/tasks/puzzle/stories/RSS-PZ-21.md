# ⏱ Issue RSS-PZ-21: Toggle Functionality for Pronunciation Hint Visibility (5 points)

## 📝 Description

Implement a toggle feature for the pronunciation hint in the game, allowing players to choose whether the audio icon or button for pronunciation is visible during gameplay. When the pronunciation hint is enabled via this toggle, the audio option should appear as soon as the sentence is available in the source data block. Conversely, if the hint is disabled, the audio option should only become visible after the sentence is correctly assembled, adding an element of challenge and choice to the gameplay.

## 🔨 Implementation Details

1. **Pronunciation Hint Toggle Control:**

   - Include a toggle control, such as a switch or a button, for players to enable or disable the pronunciation hint.
   - Clearly label the toggle to indicate its function.

2. **Conditional Audio Icon/Button Display:**

   - If the hint is enabled, display the audio icon or button immediately with the sentence in the source data block.
   - If disabled, show the audio option only after the sentence is correctly assembled.

3. **Seamless UI Integration:**

   - Integrate the toggle control within the game’s user interface in a non-intrusive yet easily accessible manner.

4. **Visual Feedback for Toggle State:**
   - Provide clear visual feedback indicating whether the pronunciation hint is enabled or disabled.

## 🎨 Visual Implementation Ideas

1. **Toggle/Button Design:**

   - Style the toggle/button to be visually cohesive with the game's theme, using clear on/off indicators.
   - Implement a design that easily conveys its purpose, such as a speaker icon for the audio toggle.

2. **Dynamic Appearance of Audio Icon/Button:**

   - Design the audio icon/button to appear or disappear smoothly, aligning with the toggle state.

## ✅ Acceptance Criteria

- The game includes a toggle or button to control the visibility of the pronunciation hint.
- The pronunciation hint behaves according to the toggle state: visible immediately with the sentence or only after correct assembly.
- Visual feedback clearly indicates the current state of the pronunciation hint.

## 🌐 Useful Links and Resources

- [Building Toggle Switches in CSS](https://www.w3schools.com/howto/howto_css_switch.asp)
