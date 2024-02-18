# ⏱ Issue RSS-PZ-04: Restrict Main Functionality to Logged-In Users and Implement Logout Process (5 points)

## 📝 Description

This task involves designing the application in such a way that the main functionalities are accessible only to users who are logged in. Additionally, implement a logout feature that clears the user's first name and surname from local storage and redirects them to the login page.

## 🔨 Implementation Details

1. **Access Restriction:**

   - Check for the presence of the user's name in local storage as a criterion for being logged in.
   - If the user's name is not found, redirect them to the login page, thereby restricting access to main functionalities.

2. **Logout Functionality:**

   - Provide a logout option within the application, accessible to the user at any time.
   - Upon clicking the logout button, delete the user's first name and surname from local storage.

3. **Redirection After Logout:**

   - After clearing the user's information, redirect them to the login page.
   - Ensure that the redirection is immediate and seamless.

4. **User Interface Considerations:**
   - The logout option should be clearly visible and accessible.
   - For better user experience, provide a confirmation prompt or message before executing the logout process.

## 🎨 Visual Implementation Ideas

1. **Logout Button Design:**

   - Place a clearly labeled 'Logout' button in an easily accessible area of the interface, like the header or navigation menu.
   - Use a design that is consistent with the rest of the application but stands out enough to be easily located by the user.

2. **Redirection Animation or Loader:**
   - Implement a smooth transition or loading animation when redirecting from logout to the login page.

## ✅ Acceptance Criteria

- Main application functionalities are accessible only to users who have their name stored in local storage.
- A logout functionality is present and, upon use, deletes the user's name from local storage.
- After logout, the user is redirected to the login page.
- The user interface for logout is clear and intuitive.
