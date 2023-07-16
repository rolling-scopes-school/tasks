### RSS-ECOMM-62: Implement Password Change in User Profile Page (10 points)

#### Description
Users should have the capability to update their password within the application independently. This feature increases user autonomy and ensures they can maintain their account security up-to-date.

#### Implementation Details
1. **Separate Change Password Option:** Provide a distinct option for users to change their password independently from other personal information.
2. **Form Validation:** Ensure the updated password meets the necessary criteria (minimum length, complexity, etc.).
3. **Current Password Verification:** Confirm the user's current password before applying the change.
4. **Saving Changes:** Provide a mechanism to save changes made in the password change mode, ideally with a clear indication (such as a button) that signifies saving changes.
5. **Backend Integration:** Implement the password change by integrating with the commercetools platform, following the appropriate API guidelines.
6. **Re-authentication:** Trigger re-authentication if needed, according to the authentication/authentication flow requirements for commercetools applications.

#### Visual Implementation Ideas
1. **Change Password Button/Link:** Add a visible "Change Password" button or link within the user profile page or settings, indicating that the password can be changed independently.
2. **Password Change Modal or Page:** Display a modal or navigate to a separate page when the "Change Password" option is selected, showing required input fields (current password, new password, confirm new password).
3. **Save and Cancel Buttons:** Display "Save" and "Cancel" buttons on the password change screen, making it clear how users can save or discard changes.

#### Acceptance Criteria
- Users can change their password separately from their other personal information on the User Profile page.
- The system appropriately validates the new password based on the necessary criteria.
- The user can save the changes, and is given a clear indication of the success or failure of this operation.

#### Useful Links and Resources
1. [commercetools: Change password of Customer](https://docs.commercetools.com/api/projects/customers#change-password-of-customer)
2. [Form Validation with JavaScript](https://www.w3schools.com/js/js_validation.asp)
