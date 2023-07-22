The Payment page should provide a seamless and secure experience for users to finalize their order and submit payment information. This page should integrate with the commercetools API, a payment gateway, and any other necessary services to facilitate secure transactions. Users should be able to review their order details, shipping and billing addresses, select a shipping method, and input their payment information with ease.

The design should prioritize user experience, making it intuitive and straightforward for users to complete the payment process. Clearly outline each step, provide guidance, and ensure data is appropriately validated and securely transmitted.

### 1. Display Order Summary (10 points)

- **(10 points)** Use the commercetools API to fetch and display a summary of the user's order, including product details, quantities, prices, discounts (if applicable), shipping costs, and the total order cost.

### 2. Input Shipping and Billing Addresses (20 points)

- **(10 points)** Provide input fields for users to enter their shipping and billing addresses, automatically pre-filling fields with saved data from their user account or previous transactions (if available).
- **(5 points)** Validate user inputs to ensure address information is accurate and complete.
- **(5 points)** Offer an option to use the shipping address as the billing address, toggling the display of billing address input fields accordingly, and reducing redundancy for users.

### 3. Select Shipping Method (10 points)

- **(10 points)** Display available shipping methods and corresponding costs, retrieved from the commercetools API or a related shipping service. Allow users to choose their preferred shipping method.

### 4. Input Payment Information (20 points)

- **(10 points)** Provide secure input fields for users to enter their Mastercard or Visa credit card information, ensuring that sensitive data is securely transmitted and stored.
- **(5 points)** Implement validation to confirm that card numbers, expiration dates, and CVV codes are correctly formatted and complete. Consult resources like [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) and [Credit Card Validation with JavaScript](https://www.w3schools.blog/credit-card-validation-javascript-js) for guidance.
- **(5 points)** Indicate that Mastercard and Visa are the accepted payment methods, using recognizable payment icons and clear messaging to inform users of their options.

### 5. Save Payment Method to Payment Order and User Profile (10 points)

- **(5 points)** After successful payment, save the payment method information to the corresponding payment order using the commercetools API.
- **(5 points)** Display the saved payment method in the user's profile, allowing for easy reference and access in the future. Ensure sensitive information, such as full card numbers, is appropriately protected or masked.
