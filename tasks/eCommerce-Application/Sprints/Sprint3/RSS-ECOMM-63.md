### RSS-ECOMM-63: Manage Addresses in User Profile Page with commercetools API (20 points)

#### Description
Users should have the capability to manage their addresses within the application. This feature increases user autonomy and ensures they can maintain their address details up-to-date using the commercetools API. Users should also be able to set default billing and shipping addresses.

#### Implementation Details
1. **Address Management Option:** Provide a distinct option for users to access address management within their user profile.
2. **Adding New Addresses:** Allow users to add new addresses by entering all required address details (e.g., name, street, city, postcode, country).
3. **Deleting Existing Addresses:** Enable users to remove existing addresses.
4. **Updating Address Details:** Permit users to update existing address details with valid information.
5. **Set Default Billing and Shipping Addresses:** Allow users to choose their default billing and shipping addresses from the list of existing addresses.
6. **Form Validation:** Ensure the provided address details meet the necessary criteria (non-empty fields, valid format).
7. **Backend Integration:** Implement address management by integrating with the commercetools API for customers and addresses, following the appropriate API guidelines.

#### Visual Implementation Ideas
1. **Addresses List:** Display a list or card view of the user's existing addresses, with information organized neatly and clearly.
2. **Add Address Button:** Add a visible "Add Address" button above or below the addresses list, making it easy to create a new address.
3. **Edit and Delete Icons:** Place edit and delete icons next to each address, allowing users to quickly update or remove addresses as needed.
4. **Default Billing and Shipping Selection:** Include checkboxes or radio buttons next to each address, allowing users to select default billing and shipping addresses.
5. **Address Entry Modal:** Use a modal or dropdown to show address entry fields, ensuring a clean interface that saves space.

#### Acceptance Criteria
- Users can manage their addresses within the User Profile page using commercetools API, including adding new addresses, deleting existing ones, and updating address details.
- Users can set their default billing and shipping addresses.
- The system validates input address details according to the necessary criteria.
- The application properly integrates with the commercetools API for address management purposes.

#### Useful Links and Resources
1. [commercetools: Update customer](https://docs.commercetools.com/api/projects/customers#update-actions)