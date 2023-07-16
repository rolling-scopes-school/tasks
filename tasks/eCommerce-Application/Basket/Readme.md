The Shopping Cart page should create an enjoyable user experience focused on managing, reviewing, and updating the items in the users' shopping cart. The page should organize products in a visually appealing layout, displaying pertinent details such as product images, titles, prices, selected options, and quantities. Users should have the ability to modify each product's quantity, remove items from their cart, and proceed to the checkout process. Implement integration with the commercetools API for data retrieval and management, ensuring real-time synchronization with the user's shopping cart.

The design should enable users to effortlessly navigate, review, and update their shopping cart. It should incorporate features such as updating product quantities, recalculating the total cost, and removing items from the cart. Additionally, provide users with the option to apply a promo code to their order, offering discounts on eligible items. The cart should clearly indicate if it's empty, as well as offer a link to the product catalog, ensuring a seamless shopping experience.

### 1. Display Shopping Cart Products (20 points)

- **(10 points)** Use the commercetools API to fetch and display the products added to the user's shopping cart.
- **(10 points)** Present the products in an organized list or grid format, displaying product images, titles, prices, chosen options, and selected quantities.

### 2. Modify Product Quantity (10 points)

- **(10 points)** Allow users to modify the quantity of each product in the cart, updating the corresponding data using the commercetools API and recalculating the total cost accordingly.

### 3. Remove Product from Cart (10 points)

- **(10 points)** Provide a "Remove from Cart" button for each product, enabling users to delete items from the cart and updating the cart data using the commercetools API.

### 4. Recalculate Total Cost (10 points)

- **(10 points)** Automatically recalculate the total cost of the items in the shopping cart when users modify product quantities or remove items from the cart, using the updated data from the commercetools API.

### 5. Proceed to Checkout (10 points)

- **(10 points)** Implement a "Proceed to Checkout" button that directs users to the checkout process for the items in their shopping cart, utilizing the specified options and quantities obtained from the commercetools API.

### 6. Display Empty Cart Message and Link to Catalog (10 points)

- **(5 points)** When the shopping cart is empty, display a clear message indicating the cart is empty.
- **(5 points)** Provide a link to the catalog of products within the empty cart message, guiding users to easily continue shopping and explore other parts of the website.

### 7. Apply Promo Code and Display Updated Prices (15 points)

- **(10 points)** Implement a feature that allows users to apply a promo code to their order, offering discounts on eligible items, and updating the total cost of the cart accordingly using the commercetools API.
- **(5 points)** Display both the original price and the discounted price after applying the promo code, ensuring that the two prices are visually distinct.

### 8. Display Shipping Cost (10 points)

- **(10 points)** Retrieve and display the shipping cost for the items in the shopping cart, calculated based on the user's shipping location or provided zip code, using the commercetools API.

### 9. Save Cart for Later (10 points)

- **(10 points)** Implement a "Save for Later" function that enables users to save the current state of their shopping cart to their account for future reference. This feature requires integration with the commercetools API for saving and retrieving cart data.

### 10. Clear Shopping Cart (10 points)

- **(10 points)** Provide a "Clear Shopping Cart" button that removes all items from the user's shopping cart and updates the cart data using the commercetools API.

### 11. Display Individual and Total Product Prices (10 points)

- **(5 points)** Display the individual price of each product in the shopping cart.
- **(5 points)** Calculate and display the total price for each product, based on the selected quantity, ensuring that users understand the cost breakdown.