### 🔄 Issue RSS-ECOMM-4_02: Integrate Catalog Page with Commercetools API to Enable Adding Products to Cart (30 points)

#### 📝 Description

To make the 🛍️ shopping experience more interactive, integrate the Catalog Product page with the commercetools API. This integration will enable users to add products to their 🛒 shopping cart directly from the product list. It's important to note that the cart used in this case is the MyCart endpoint for logged-in users.

#### 🔨 Implementation Details

1. **API Integration:** Use the commercetools API to fetch product details and populate the product cards on the Catalog page. The product details should include at least the product name, price, and image.
2. **Add to Cart Functionality:** Once a product is added to the cart, the "Add to Cart" button on the product card should trigger an API call to update the user's shopping cart with the chosen product.
3. **Cart Management:** If the user does not yet have a cart, the API call should first create a new cart using the "MyCart" endpoint. If the user already has a cart, the API call should add the new product as a line item in the existing cart.

#### ✅ Acceptance Criteria

- Product cards on the Catalog page are populated with product details fetched from the commercetools API.
- The "Add to Cart" button on each product card triggers an API call to add the corresponding product to the user's shopping cart.
- If the user does not yet have a cart, the "Add to Cart" button triggers an API call to create a new cart using the "MyCart" endpoint.
- If the user already has a cart, the "Add to Cart" button triggers an API call to add the new product as a line item in the existing cart.

#### 🌐 Useful Links and Resources

1. [Commercetools API Documentation](https://docs.commercetools.com/api)
2. [Commercetools Cart and Order API](https://docs.commercetools.com/api/projects/carts)
3. [Commercetools Get Cart](https://docs.commercetools.com/api/projects/carts#get-cart-by-customer-id)
4. [Commercetools My Carts](https://docs.commercetools.com/api/projects/me-carts)
5. [Commercetools Create Cart](https://docs.commercetools.com/api/projects/carts#create-cart)
6. [Commercetools Add Line Item](https://docs.commercetools.com/api/projects/carts#add-lineitem)
