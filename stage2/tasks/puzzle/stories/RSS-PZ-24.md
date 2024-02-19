# ⏱ Issue RSS-PZ-24: Hint State Persistence and Default Settings (5 points)

## 📝 Description

Implement a feature to save the state (enabled or disabled) of each hint in local storage, ensuring a personalized and consistent gameplay experience. When the game is initially started, all hints should be enabled by default. Additionally, ensure that the hint states are reset to their default settings upon user logout, maintaining a fresh start for each new game session.

## 🔨 Implementation Details

1. **Local Storage for Hint States:**

   - Utilize the browser's local storage to save the enabled/disabled state of each hint.
   - Update the local storage whenever a player toggles a hint's state.

2. **Default Hint State:**

   - Set all hints to be enabled by default when the game is first started or when no previous state is saved in local storage.

3. **Reset on Logout:**

   - Implement functionality to reset the hint states to their default settings (all enabled) when a user logs out.

4. **Retrieving State on Game Start:**

   - When the game is initiated or resumed, retrieve the hint states from local storage and apply them to the game settings.

5. **UI Synchronization:**
   - Ensure that the game's user interface reflects the hint states as stored in local storage, providing a seamless user experience.

## ✅ Acceptance Criteria

- The state of each hint (enabled/disabled) is saved in the browser's local storage.
- All hints are enabled by default for a new game or when no saved state exists.
- Hint states are reset to default upon user logout.

## 🌐 Useful Links and Resources

- [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
