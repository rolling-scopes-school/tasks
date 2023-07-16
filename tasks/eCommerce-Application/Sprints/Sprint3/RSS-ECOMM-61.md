### RSS-ECOMM-61: Implement Personal Information Edit in User Profile Page (10 points)

#### Description
Users should have the capability to update their personal information. This feature increases user autonomy and lets users ensure their information is always up to date.

#### Implementation Details
1. **Edit Mode:** Utilize the "edit mode" previously implemented on the User Profile page.
2. **Updating Personal Information:** While in edit mode, users should be able to update their first name, last name, and date of birth.
3. **Form Validation:** Ensure the updated personal information meets the necessary criteria (non-empty name fields, valid date for date of birth, etc.).
4. **Modal Background:** When the modal opens, darken or blur the rest of the page behind the modal to help it stand out.
5. **Close Button:** Make sure the close button is easily visible and clearly indicates its purpose.


#### Visual Implementation Ideas
1. **In-place Editing:** Consider allowing users to edit the information directly on the page, avoiding the need to open a separate modal or page. This can lead to a more intuitive and streamlined user experience.
2. **Highlight Editable Fields:** When in edit mode, highlight or otherwise visually indicate the fields that the user can edit to guide their attention.
3. **Save Changes Button:** Make sure the "Save Changes" button is easily visible and clearly indicates its purpose.

#### Acceptance Criteria
- In the edit mode on the User Profile page, users can update their first name, last name, and date of birth.
- The system appropriately validates all changes.
- The user can save the changes, and is given a clear indication of the success or failure of this operation.

#### Useful Links and Resources
1. [commercetools: Update Customer by ID](https://docs.commercetools.com/api/projects/customers#update-customer-by-id)
2. [Form Validation with JavaScript](https://www.w3schools.com/js/js_validation.asp)
