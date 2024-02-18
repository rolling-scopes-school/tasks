# ⏱ Issue RSS-PZ-03: Save User's First Name and Surname in Local Storage After Login Form Submission (5 points)

## 📝 Description

This task is aimed at storing the user's first name and surname in the browser's local storage immediately after the submission of the login form. This functionality enhances user experience by retaining user information for future sessions, even in the absence of a server-side component.

## 🔨 Implementation Details

1. **Capture User Input:**

   - On the submission of the login form, capture the values entered in the first name and surname input fields.

2. **Use of Local Storage:**

   - Utilize the `localStorage` JavaScript API to store the captured first name and surname.
   - Store the names as separate items or as a single JSON object in local storage.

3. **Data Structuring:**

   - Format the data appropriately before storing it. If using a JSON object, ensure proper JSON formatting.

4. **Handling Page Reloads:**

   - Make sure that the stored names persist even after the page is reloaded or the browser is reopened.

5. **Security Note:**
   - Be aware that local storage is accessible in the client's browser and is not a secure way to store sensitive information.

## 🎨 Visual Implementation Ideas

1. **No direct visual implementations are necessary for this functionality as it is a background process.**

## ✅ Acceptance Criteria

- The user's first name and surname are captured and stored in local storage upon form submission.
- The data persists in local storage across page reloads and browser sessions.

## 🌐 Useful Links and Resources

- [Understanding Local Storage in JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [JavaScript LocalStorage API](https://www.w3schools.com/jsref/prop_win_localstorage.asp)
