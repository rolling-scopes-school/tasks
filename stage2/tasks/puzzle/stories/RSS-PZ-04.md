# ⏱ Issue RSS-PZ-04: Restrict Main Functionality to Logged-In Users and Implement Logout Process (5 points)

## 📝 Description

This task focuses on ensuring the application's core features are accessible solely to logged-in users. It necessitates the implementation of a logout mechanism that erases the user's first name and surname from local storage, subsequently redirecting them to the login page. Crucially, if a user is already logged in, they should be directly navigated to the start screen, bypassing the login interface.

## 🔨 Implementation Details

1. **Access Control:**

   - Ascertain logged-in status by verifying the presence of the user's name in local storage.
   - Redirect users lacking this criterion to the login page, effectively restricting access to the application's primary features.

2. **Direct Navigation for Logged-In Users:**

   - Automatically direct users with stored login credentials to the start screen, ensuring immediate access to the application's functionalities.

3. **Logout Mechanism:**

   - Integrate a prominently accessible logout option within the application.
   - Clicking the logout button should remove the user's credentials from local storage.

4. **Post-Logout Redirection:**

   - Following credential clearance, navigate the user back to the login interface.
   - This redirection should be executed seamlessly and without delay.

5. **Logout Interface Design:**
   - Ensure the logout option is conspicuously positioned and easy to interact with.
   - Consider incorporating a confirmation step prior to logout completion to enhance the user experience.

## 🎨 Visual Design Suggestions

1. **Logout Button Aesthetics:**

   - Situate a clearly marked 'Logout' button within a prominent section of the UI, such as the header or navigation bar.
   - Design the button to align with the application's overall aesthetic while still being distinct for easy identification.

2. **Redirection Feedback:**
   - Employ a graceful transition effect or loading indicator during the shift from the logout action to the login page, augmenting user experience.

## ✅ Acceptance Criteria

- Only users verified through local storage credentials gain access to the main application features, with logged-in users immediately proceeding to the start screen.
- Logout functionality effectively erases user data from local storage and redirects to the login interface.
- The logout process is user-friendly, featuring an intuitive and easily navigable interface.
