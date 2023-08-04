### 🎯 Issue RSS-ECOMM-3_16: Implement Personal Information and Email Edit in User Profile Page (10 points)

#### 📋 Description

Users should have the capability to update their personal information 📝 and email address 📧. This feature increases user autonomy and lets users ensure their information is always up to date.

#### 🔨 Implementation Details

1. **Edit Mode:** Utilize the "edit mode" ✏️ previously implemented on the User Profile page.
2. **Updating Personal Information and Email:** While in edit mode, users should be able to update their first name, last name, date of birth, and email address.
3. **Email Validation:** Implement a check to ensure that the email address entered by the user is valid and appropriately formatted.
4. **Form Validation:** Ensure the updated personal information meets the necessary criteria (non-empty name fields, valid date for date of birth, etc.).

#### 🎨 Visual Implementation Ideas

1. **Highlight Editable Fields:** When in edit mode, highlight or otherwise visually indicate the fields that the user can edit to guide their attention.

#### ✅ Acceptance Criteria

- In the edit mode on the User Profile page, users can update their first name, last name, date of birth, and email address.
- The system appropriately validates all changes, including the validity of the email address.

#### 🔗 Useful Links and Resources

1. [commercetools: Update Customer by ID](https://docs.commercetools.com/api/projects/customers#update-customer-by-id)
2. [Form Validation with JavaScript](https://www.w3schools.com/js/js_validation.asp)
3. [Email Validation](https://www.w3schools.com/js/js_validation_api.asp)
