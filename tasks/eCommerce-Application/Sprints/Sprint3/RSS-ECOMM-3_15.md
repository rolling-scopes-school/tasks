### Implement Edit Mode for Updating User Details on Profile Page (20 points)

#### Description

It's essential for users to have the ability to update their personal information, including personal details and addresses. To facilitate this, provide a user-friendly interface that allows users to switch to an "edit mode" on the User Profile page. This edit mode could be implemented as inline editing within the existing page layout or as a modal pop-up window.

#### Implementation Details

1. **Edit Mode Toggle:** Implement a clear and intuitive way for users to enter and exit the edit mode. This could be a button, a link, or any other interactive element.
2. **Edit Mode Design:** The edit mode could take the form of inline editing or a modal pop-up window. In either case, it should be visually distinct from the regular view mode.
3. **Saving Changes:** Provide a clear way to save changes made in the edit mode. Inform the user of the success or failure of the update operation.

#### Visual Implementation Ideas

1. **Inline Edit Mode:** If implementing inline editing, consider changing the background color of editable fields or providing visual cues such as an edit icon. Changes could be saved on a field-by-field basis or all at once using a "Save Changes" button.
2. **Modal Edit Mode:** If using a modal window for editing, ensure that the window is large enough to comfortably display all editable fields. It should also be clear how to close the window and save changes.
3. **Save Changes Button:** Make sure the "Save Changes" button is easily noticeable and accessible. You could place it at the bottom of the page or next to each editable field.
4. **Update Notifications:** Use a noticeable color and place the update notifications (success or failure) in a spot where they are easily visible. You could use green for success messages and red for failure messages.

#### Acceptance Criteria

- Users can switch to an edit mode on the User Profile page, either through inline editing or a modal window.
- Changes made in the edit mode can be saved.
- User is informed of the success or failure of the update operation.

#### Useful Links and Resources

1. [commercetools: Update Customer by ID](https://docs.commercetools.com/api/projects/customers#update-customer-by-id)
2. [toastify-js](https://github.com/apvarun/toastify-js#readme)
