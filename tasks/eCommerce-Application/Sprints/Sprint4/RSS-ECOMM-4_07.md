### 🛒 Issue RSS-ECOMM-4_07: Add Product to Cart Functionality for Non-Duplicated Products (15 points)

#### 📋 Description

To prevent duplication and increase user convenience, only allow a product to be added to the shopping cart if it is not already present in it. If the product is not already in the user's shopping cart, provide an "Add to Cart" button that adds the product with the selected options to their cart.

#### 🔨 Implementation Details

1. **Product Duplication Check:** Before adding a product to the shopping cart, verify whether the product is already present in the user's shopping cart.
2. **"Add to Cart" Button:** If the product is not already in the shopping cart, the "Add to Cart" button should be active and clickable. When clicked, this button should add the product with the selected options to the shopping cart.
3. **API Integration:** Use the commercetools to manage the shopping cart and add products to it.

#### ✅ Acceptance Criteria

- The application checks whether a product is already in the user's shopping cart before adding it.
- If the product is not already in the shopping cart, the "Add to Cart" button is active and can add the product to the cart.
- If the product is already in the shopping cart, the "Add to Cart" button is inactive or provides a relevant notice.

#### 🌐 Useful Links and Resources

1. [Commercetools API Documentation](https://docs.commercetools.com/api)
2. [Commercetools Cart and Order API](https://docs.commercetools.com/api/projects/carts)
3. [Commercetools Get Cart](https://docs.commercetools.com/api/projects/carts#get-cart-by-customer-id)
4. [Commercetools My Carts](https://docs.commercetools.com/api/projects/me-carts)
5. [Commercetools Create Cart](https://docs.commercetools.com/api/projects/carts#create-cart)
6. [Commercetools Add Line Item](https://docs.commercetools.com/api/projects/carts#add-lineitem)
