### Issue RSS-ECOMM-2_04: Implement error handling for failed authentication attempts using CommerceTools (20 points) 🚫

#### Description

Implement error handling for failed authentication attempts due to invalid login credentials when using the CommerceTools authentication service. Display user-friendly error messages to inform the user of the issue and guide them on how to proceed.

#### Failed Authentication Error Handling Tasks 🚧

- Determine how CommerceTools responds to authentication errors, such as incorrect email addresses or passwords (e.g., specific error codes or messages in the API response).
- Implement a function or module in the application to process and understand the error responses from the CommerceTools authentication service.
- Map the error responses from the CommerceTools API to user-friendly error messages that can be displayed in the login form.
- Ensure that the error messages are displayed in a consistent and user-friendly manner, as described in Issue RSS-ECOMM-2_02.

#### Visual Implementation Ideas 💡

- Display error messages directly below the respective input field (email, password) that caused the error.
- Highlight the input field in red to draw the user's attention.
- Use intuitive icons (e.g., a warning triangle) next to the error message to enhance the visibility.
- Ensure error messages disappear once the user corrects the input or starts typing in the respective field.

#### Acceptance Criteria ✅

- Clear error messages are shown when authentication fails due to incorrect email or password.
- Error messages are user-friendly and provide guidance on how to proceed.
- No sensitive information is exposed to the user in the error messages.
- The application handles CommerceTools authentication errors properly.

As Bon Jovi said in their song, "It's my life. It's now or never. I ain't gonna live forever. I just want to live while I'm alive." So let's make sure our users feel alive with a smooth and secure login process! 🤘🎸
