# ⏱ Issue RSS-PZ-28: Reveal Background Image and Information on Round Completion (5 points)

## 📝 Description

Create a feature that, upon the correct assembly of all ten sentences in a round, gradually fades away the borders between word cards and the text on them. This action reveals the full background image that was pieced together on the cards. Additionally, display brief information about the revealed image, such as the author, title, and year of creation. This functionality adds both a visual reward and educational value to the game, enhancing player engagement and learning.

## 🔨 Implementation Details

1. **Image and Text Fade Effect:**

   - Implement a visual effect where, upon round completion, the borders and text on the word cards fade out to reveal the background image.
   - Ensure this transition is smooth and visually appealing.

2. **Background Image Reveal:**

   - Once the text and borders are faded, the background image on the cards should be fully visible, forming a complete picture.

3. **Displaying Image Information:**

   - Alongside the revealed image, display a pop-up or an information panel with details about the image, including the author, title, and year of creation.
   - Ensure this information is presented in a way that is easily readable and does not obscure the image.

4. **Smooth Transition to Next Round:**
   - Provide a clear and easy way to proceed to the next round after the image and information have been revealed.

## 🎨 Visual Implementation Ideas

1. **Elegant Fade Effects:**

   - Use CSS animations to create an elegant fade effect for the text and borders on the cards.

2. **Information Panel Design:**

   - Design the information panel to be visually appealing and complementary to the revealed image, perhaps using semi-transparent backgrounds or overlays.

## ✅ Acceptance Criteria

- Borders and text on word cards fade away upon correct assembly of all sentences in a round.
- The background image is fully revealed after the fade effect.
- Brief information about the image is displayed in a clear and interactive manner.
