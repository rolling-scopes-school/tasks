### Enable users to select different billing and shipping addresses during registration (15 points)

#### Description

During the registration process, give users the ability to provide different addresses for billing and shipping. Users may also have the option to use the same address for both billing and shipping. Once registration is successful, the chosen addresses should be saved in the user's profile.

#### Business Logic Solution Idea

- In the registration form, include separate input fields for billing and shipping addresses.
- Additionally, provide a checkbox that users can tick if they want to use the same address for both billing and shipping. If checked, the application should copy the values from one set of fields to the other.
- When the user submits the form, send a request to the commercetools API to create a new customer. Include the billing and shipping address information in the request body, as described in the [commercetools CustomerDraft documentation](https://docs.commercetools.com/api/projects/customers#ctp:api:type:CustomerDraft).

#### Visual Implementation Ideas

- Clearly label the input fields for billing and shipping addresses.
- Place the checkbox for using the same address for both purposes in a prominent location on the form.

#### Acceptance Criteria

- Users can enter separate addresses for billing and shipping during the registration process.
- Users can choose to use the same address for both billing and shipping.
- The chosen addresses are saved in the user profile upon successful registration.
- The user interface clearly distinguishes between input fields for billing and shipping addresses.
- Proper integration with the commercetools API for storing billing and shipping address information.
