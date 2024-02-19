# ⏱ Issue RSS-PZ-08: Design Main Game Page with Interactive Word Cards (10 points)

## 📝 Description

The main game page should display individual word cards, each representing a word from a given sentence. These cards will be initially presented in a random order within a source data block. Players will interact with these cards by clicking on them to sequentially move them to a result block, aiming to reconstruct the original sentence.

## 🔨 Implementation Details

1. **Sentence Breakdown into Word Cards:**

   - Break down a provided sentence into individual words.
   - Each word becomes a separate card displayed in the source data block.

2. **Randomizing Word Cards:**

   - Arrange these word cards in a random order every time the game is initiated.
   - Ensure that the randomness is effective, providing a unique experience in each session.

3. **Interactive Card Movement:**

   - Implement click functionality on each word card.
   - Upon clicking, the card should move from the source block to the result block, maintaining the clicked order.

## 🎨 Visual Implementation Ideas

1. **Word Card Styling:**

   - Style the cards with distinct borders and a background color that makes the text easily readable.
   - Consider adding a hover effect to indicate when a card is selectable.

2. **Animating Card Movement:**

   - Apply a smooth animation effect when cards move from the source block to the result block.

## ✅ Acceptance Criteria

- Word cards representing individual words of a sentence are displayed in a random order in the source data block.
- Users can click on these cards to move them to the result block in the order they are clicked.
