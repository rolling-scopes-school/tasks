### 🧮💰 Issue RSS-ECOMM-4_13: Recalculate Total Cost Upon Cart Updates (15 points)

#### 📝📚 Description

To ensure that users always have accurate information about their purchases 💳, the total cost of the items in the shopping cart should be automatically recalculated 🔄🧮 whenever users modify product quantities or remove items from the cart. The updated data should be fetched from the commercetools API 🌐.

#### 💻🔧 Implementation Details

1. **Recalculate Total Cost 🔄🧮:** Every time a user modifies the quantity of a product or removes a product from the cart, the total cost should be recalculated to reflect these changes.
2. **Use API Data 🌐:** The updated total cost should be calculated using the most recent data from the commercetools API.

#### ✅🎯 Acceptance Criteria

- The total cost of the items in the shopping cart is automatically recalculated and updated every time a user modifies product quantities or removes items from the cart.
- The total cost reflects the most recent data from the commercetools API.

#### 🔗📚 Useful Links and Resources

1. [Commercetools API Documentation](https://docs.commercetools.com/api)
2. [Commercetools Cart and Order API](https://docs.commercetools.com/api/projects/carts)
3. [Commercetools My Carts](https://docs.commercetools.com/api/projects/me-carts)
