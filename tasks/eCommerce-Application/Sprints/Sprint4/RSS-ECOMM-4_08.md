### 🛒🗑️ Issue RSS-ECOMM-4_08: Remove Product from Cart Functionality (15 points)

#### 📋🔍 Description

To enhance user experience and give more control over their shopping cart 🛒, allow users to remove a product directly from the product page if it is already in their shopping cart.

#### 🔨🧰 Implementation Details

1. **Product Presence Check 🕵️‍♂️:** Check if the product is already present in the user's shopping cart.
2. **"Remove from Cart" Button ➖🛒:** If the product is already in the shopping cart, provide an active and clickable "Remove from Cart" button on the product page. Clicking this should remove the product from the user's shopping cart.
3. **API Integration 🔄💻:** Use the chosen API to manage the shopping cart and remove products from it.

#### ✅🎯 Acceptance Criteria

- The application correctly identifies whether a product is already in the user's shopping cart when viewing the product page.
- If the product is already in the shopping cart, a "Remove from Cart" button is visible and active on the product page.
- Clicking the "Remove from Cart" button triggers an API call to remove the corresponding product from the user's shopping cart.
- After successful removal, the user receives a confirmation message or visual cue.
- The application handles API errors gracefully, showing appropriate error messages if the removal operation fails.

#### 🌐🔗 Useful Links and Resources

1. [Commercetools API Documentation 📚](https://docs.commercetools.com/api)
2. [Commercetools Cart and Order API 🛒🧾](https://docs.commercetools.com/api/projects/carts)
3. [Update Cart Actions 🗑️🔢](https://docs.commercetools.com/api/projects/me-carts#update-actions)
4. [Commercetools Get Cart 🛒👀](https://docs.commercetools.com/api/projects/me-carts#get-active-cart)
