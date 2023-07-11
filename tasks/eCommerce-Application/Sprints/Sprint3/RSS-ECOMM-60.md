### RSS-ECOMM-60: Implement Edit Mode for Updating User Details on Profile Page (20 points)

#### Description
It's essential for users to have the ability to update their personal information, including personal details and addresses. To facilitate this, provide a user-friendly interface that allows users to switch to an "edit mode" on the User Profile page.

#### Implementation Details
1. **Edit Mode Toggle:** Implement a clear and intuitive way for users to enter and exit the edit mode. This could be a button, a link, or any other interactive element.
2. **Edit Personal Details:** While in edit mode, users should be able to update their first name, last name, date of birth. 
3. **Edit Addresses:** Users should also be able to add, modify, or delete their saved addresses.
4. **Form Validation:** Implement appropriate form validation to ensure that updated information meets necessary criteria (non-empty name fields, etc.).
5. **Saving Changes:** Provide a clear way to save changes made in the edit mode. Inform the user of the success or failure of the update operation.

#### Acceptance Criteria
- Users can switch to an edit mode on the User Profile page.
- In edit mode, users can update their first name, last name, date of birth.
- In edit mode, users can add, modify, or delete their saved addresses.
- Changes made in the edit mode can be saved.
- User is informed of the success or failure of the update operation.

#### Useful Links and Resources
1. [commercetools: Update Customer by ID](https://docs.commercetools.com/api/projects/customers#update-customer-by-id)
1. [toastify-js](https://github.com/apvarun/toastify-js#readme)
