### Modify Quantity of Products in Cart (15 points)

#### Description

To give users flexibility in managing their shopping cart, implement a feature that allows them to modify the quantity of each product in their cart. This feature should also integrate with the commercetools API to update the corresponding data and recalculate the total cost accordingly.

#### Implementation Details

1. **Quantity Modification Interface:** Include an interface element (like an input box or spinner) that allows users to change the quantity of a product in their cart.
2. **Data Updating:** When a user changes the quantity of a product, the application should make the necessary API call to update the cart data in the backend.
3. **Total Cost Recalculation:** After the cart data is updated, recalculate the total cost of the cart and update the total cost displayed to the user.

#### Acceptance Criteria

- Users can modify the quantity of each product in their cart.
- The application updates the cart data using the commercetools API when the quantity of a product is modified.
- The application recalculates and displays the updated total cost when the quantity of a product is modified.

#### Useful Links and Resources

1. [Commercetools API Documentation](https://docs.commercetools.com/api)
2. [Commercetools Cart and Order API](https://docs.commercetools.com/api/projects/carts)
3. [Commercetools Update Cart](https://docs.commercetools.com/api/projects/carts#update-cart)
4. [Commercetools My Carts](https://docs.commercetools.com/api/projects/me-carts)
5. [Commercetools Change LineItem Quantity](https://docs.commercetools.com/api/projects/carts#change-lineitem-quantity)
