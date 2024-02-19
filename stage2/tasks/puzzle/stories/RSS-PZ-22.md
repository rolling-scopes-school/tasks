# ⏱ Issue RSS-PZ-22: Implement Background Image Feature for Word Cards as Part of a Larger Puzzle (20 points)

## 📝 Description

Introduce a background image feature for the word cards, where each card carries a segment of a larger image. This puzzle-like aspect adds a visually engaging dimension to the sentence assembly task. Each sentence in the game corresponds to a different segment of the bigger picture, enhancing the players' experience by combining language learning with visual puzzle-solving.

## 🔨 Implementation Details

1. **Image Segmentation:**

   - Divide a larger image into segments, with each segment being the background of a word card.
   - Ensure that the complete set of word cards for a sentence forms a coherent part of the larger image.

2. **Sentence-to-Image Correspondence:**

   - Assign each sentence in the game to a specific segment of the larger image.
   - As players progress through sentences, they gradually reveal different parts of the image.

3. **Card Design:**

   - Design the word cards to ensure that text readability is maintained against the background image.
   - Use a translucent overlay or text shadow to enhance text visibility if necessary.

4. **Dynamic Image Assembly:**
   - As players move word cards, the segments should align to gradually form the larger image.

## 🎨 Visual Implementation Ideas

1. **Puzzle-Like Layout:**

   - Arrange the word cards so that when placed in the correct order, the segments form a recognizable part of the larger image.

2. **Visual Harmony:**
   - Maintain a balance between the visual complexity of the images and the clarity of the text on the cards.

## ✅ Acceptance Criteria

- Word cards feature segments of a larger background image.
- Each sentence corresponds to a different segment of the larger image, gradually revealing it as players progress.
- The design of the word cards ensures that the text is readable against the image background.
- The assembly of word cards in the correct order visually aligns the segments to form a coherent part of the larger image.
