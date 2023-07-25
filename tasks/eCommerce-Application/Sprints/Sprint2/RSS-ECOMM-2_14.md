### Issue RSS-ECOMM-2_14: Allow users to set a default address during registration (15 points) 📍

#### Description

When users enter their address information during registration, provide an option to save the address as their default address. This default address can be used for future transactions involving shipping or billing. 📦💼

According to the [commercetools CustomerDraft documentation](https://docs.commercetools.com/api/projects/customers#ctp:api:type:CustomerDraft), the properties `defaultShippingAddress` and `defaultBillingAddress` can be used to store default addresses. You can either store individual address IDs or store the complete address information in these properties. 🗂️

For example, if a user sets an address as their default shipping address during registration, you can either save the address ID to the `defaultShippingAddress` property, or save the full address details. 🏠

#### Business Logic Solution Idea

- Include a checkbox or a toggle switch next to the address input fields during the registration process. The checkbox could read 'Set as default address' to make it clear for the user. ☑️
- In the backend, ensure the process of setting a default address occurs simultaneously with the creation of the user account. When a user sets an address as the default, use the commercetools API to store this information by making a POST request to the `customers` endpoint with the `defaultShippingAddress` and/or `defaultBillingAddress` properties set in the request body. ⏩

#### Visual Implementation Ideas

- Provide clear labeling next to the checkbox or toggle switch indicating that this will set the address as the default for future transactions. 🏷️
- If possible, visually separate the default address selection from other fields to draw the user's attention. 👁️

#### Acceptance Criteria

- Users can set a default address while registering. 🖱️
- The setting of a default address happens simultaneously with user account creation. 🔄
- The default address is saved in the user profile upon successful registration. 💾
- Proper integration with the commercetools API for storing default address information. 🔗
- The user interface clearly distinguishes the default address selection during registration. 🔍

In the spirit of rock music, let's keep in mind the words of Scorpions - "Time, it needs time to win back your love again." So let's make it easy for our users to save time by setting their default addresses! 🎸🎶
