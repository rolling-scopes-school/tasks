### Allow users to set a default address during registration (10 points)

#### Description
When users enter their address information during registration, provide an option to save the address as their default address. This default address can be used for future transactions involving shipping or billing.

According to the [commercetools CustomerDraft documentation](https://docs.commercetools.com/api/projects/customers#ctp:api:type:CustomerDraft), the properties `defaultShippingAddress` and `defaultBillingAddress` can be used to store default addresses. You can either store individual address IDs or store the complete address information in these properties.

For example, if a user sets an address as their default shipping address during registration, you can either save the address ID to the `defaultShippingAddress` property, or save the full address details.

To implement this feature, consider the following steps:

- During registration, ensure that users can provide address information with the option to set an address as their default shipping and/or default billing address.
- Integrate the registration process with the commercetools API and update the customer resource with the provided address information and default address selection.
- Store the default address information according to the [commercetools CustomerDraft documentation](https://docs.commercetools.com/api/projects/customers#ctp:api:type:CustomerDraft).

#### Acceptance Criteria
- Users can set a default address while registering
- The default address is saved in the user profile upon successful registration
- Proper integration with the commercetools API for storing default address information