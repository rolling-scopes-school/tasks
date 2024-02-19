# ⏱ Issue RSS-PZ-15: Implement Drag-and-Drop for Interactive Sentence Assembly (15 points)

## 📝 Description

Introduce drag-and-drop functionality to enhance the interactivity of the game. This feature allows players to move words between the source data block and the result block using a mouse. Additionally, it enables the rearrangement of words within the result block itself, offering players a more flexible and intuitive way to construct sentences.

## 🔨 Implementation Details

1. **Draggable Word Cards:**

   - Make each word card draggable. Players should be able to click and drag words from the source block to the result block and vice versa.

2. **Droppable Areas:**

   - Designate the source data block and the result block as droppable areas where words can be placed.

3. **Internal Sentence Rearrangement:**

   - Allow for the dragging and rearranging of words within the result block to facilitate sentence construction.

4. **Drag-and-Drop Feedback:**

   - Provide visual cues during the drag-and-drop process, such as highlighting the drop area or changing the cursor.

5. **Mobile Responsiveness:**

   - Ensure that the drag-and-drop functionality is also accessible and functional on touch devices.

6. **Error Handling:**
   - Implement error handling for invalid drops (e.g., dropping a word outside of any droppable area).

## 🎨 Visual Implementation Ideas

1. **Interactive Card Design:**

   - Style the word cards with subtle shadows or lift effects to suggest they are draggable.
   - Change the appearance of the card (like a slight size increase or border color change) when it's being dragged.

2. **Highlighting Drop Areas:**

   - Temporarily highlight or change the appearance of drop areas when a word card is hovered over them.

3. **Drag-and-Drop Animations:**
   - Implement smooth animations for the movement of word cards to enhance the user experience.

## ✅ Acceptance Criteria

- Word cards are draggable and can be moved between the source data block and the result block.
- Players can rearrange words within the result block by dragging them.
- Visual feedback is provided throughout the drag-and-drop process.
- Words return to their original position if dropped in an invalid location.

## 🌐 Useful Links and Resources

- [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [JavaScript Touch Events for Mobile Devices](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- [Drag'n'Drop with mouse events](https://javascript.info/mouse-drag-and-drop)
