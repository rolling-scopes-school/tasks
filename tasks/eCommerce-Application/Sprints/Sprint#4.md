## Sprint 4: Basket Page and Catalog Page Enhancements

In this sprint, the team will concentrate on building the Basket page and enhancing the Catalog page. These enhancements will include features like displaying a list of items added to the basket, increasing or decreasing the quantity of each item, removing items from the basket, displaying the subtotal and total prices, and a button for proceeding to the checkout page. For the Catalog page, we will implement interactive product cards and shopping cart integration. All these features should be built using the commercetools API for data retrieval and management. We will also implement performance optimization techniques such as lazy loading, pagination, or infinite scroll to handle a large number of products efficiently.

### Working with the Repository

- Create a new branch for the current sprint (e.g., `feat/sprint_4`) from the previous sprint's branch (`feat/sprint_3`).
- Merge all feature branches into the current sprint's branch.
- At the end of the sprint, create a pull request from the current sprint's branch (`feat/sprint_4`) to the previous sprint's branch (`feat/sprint_3`).
- Share the pull request link with the mentor for review and evaluation.

### Evaluation Criteria:

### CrossCheck Criteria (285 points):

### Catalog Page Enhancements (105 points - Total)

#### 1. Interactive Product Cards (10 points)

- **(5 points)** Include an "Add to Cart" button on each product card, enabling users to directly add the product to the shopping cart. [RSS-ECOMM-4_01](./Sprint4/RSS-ECOMM-4_01.md)

#### 2. Shopping Cart Integration (30 points)

- **(30 points)** Integrate the Catalog Product page with the chosen API (commercetools or any other simple API) to enable users to add products to their shopping cart directly from the product list. [RSS-ECOMM-4_02](./Sprint4/RSS-ECOMM-4_02.md)

#### 3. Performance Optimization (20 points)

- **(20 points)** Implement lazy loading, pagination, or infinite scroll to efficiently load and display a large number of products without significant delays or performance issues, leveraging the chosen API (commercetools or any other simple API) for product data retrieval. [RSS-ECOMM-4_03](./Sprint4/RSS-ECOMM-4_03.md)

#### 4. Modal Window with Image Slider (45 points)

- **(20 points)** Display a modal window with an image, product name, and description when a user hovers over a product image. [RSS-ECOMM-4_04](./Sprint4/RSS-ECOMM-4_04.md)
- **(15 points)** Allow users to navigate through all product images using the slider inside the modal window. [RSS-ECOMM-4_05](./Sprint4/RSS-ECOMM-4_05.md)
- **(10 points)** Include an "Add to Cart" button in the modal window, enabling users to directly add the product to the shopping cart. [RSS-ECOMM-4_06](./Sprint4/RSS-ECOMM-4_06.md)

### Detailed Product Page Implementation (40 points - Total)

#### 1. Add or Remove Product from Cart (30 points)

- **(15 points)** If the product is not already in the user's shopping cart, provide an "Add to Cart" button that adds the product with the selected options to their cart using the chosen API. [RSS-ECOMM-4_07](./Sprint4/RSS-ECOMM-4_07.md)
- **(15 points)** If the product is already in the user's shopping cart, provide a "Remove from Cart" button that allows users to remove the product from their cart using the chosen API. [RSS-ECOMM-4_08](./Sprint4/RSS-ECOMM-4_08.md)

#### 2. Quantity Selection (10 points)

- **(10 points)** Allow users to select the desired quantity of the product before adding it to their shopping cart. [RSS-ECOMM-4_09](./Sprint4/RSS-ECOMM-4_09.md)

### Basket Page Implementation (105 points - Total)

#### 1. Display Basket Items (25 points)

- **(25 points)** Use the commercetools API to fetch and display the list of items added to the basket along with essential details such as the name, image, and price. [RSS-ECOMM-4_10](./Sprint4/RSS-ECOMM-4_10.md)

#### 2. Modify Product Quantity (15 points)

- **(15 points)** Allow users to modify the quantity of each product in the cart, updating the corresponding data using the commercetools API and recalculating the total cost accordingly. [RSS-ECOMM-4_11](./Sprint4/RSS-ECOMM-4_11.md)

#### 3. Remove Product from Cart (15 points)

- **(15 points)** Provide a "Remove from Cart" button for each product, enabling users to delete items from the cart and updating the cart data using the commercetools API. [RSS-ECOMM-4_12](./Sprint4/RSS-ECOMM-4_12.md)

#### 4. Recalculate Total Cost (15 points)

- **(15 points)** Automatically recalculate the total cost of the items in the shopping cart when users modify product quantities or remove items from the cart, using the updated data from the commercetools API. [RSS-ECOMM-4_13](./Sprint4/RSS-ECOMM-4_13.md)

#### 5. Display Empty Cart Message and Link to Catalog (10 points)

- **(5 points)** When the shopping cart is empty, display a clear message indicating the cart is empty. [RSS-ECOMM-4_14](./Sprint4/RSS-ECOMM-4_14.md)
- **(5 points)** Provide a link to the catalog of products within the empty cart message, guiding users to easily continue shopping and explore other parts of the website. [RSS-ECOMM-4_15](./Sprint4/RSS-ECOMM-4_15.md)

#### 6. Apply Promo Code and Display Updated Prices (15 points)

- **(10 points)** Implement a feature that allows users to apply a promo code to their order, offering discounts on eligible items, and updating the total cost of the cart accordingly using the commercetools API. [RSS-ECOMM-4_16](./Sprint4/RSS-ECOMM-4_16.md)
- **(5 points)** Display both the original price and the discounted price after applying the promo code, ensuring that the two prices are visually distinct. [RSS-ECOMM-4_17](./Sprint4/RSS-ECOMM-4_17.md)

#### 7. Clear Shopping Cart (10 points)

- **(10 points)** Provide a "Clear Shopping Cart" button that removes all items from the user's shopping cart and updates the cart data using the commercetools API. [RSS-ECOMM-4_18](./Sprint4/RSS-ECOMM-4_18.md)

### About Us Page Implementation (35 points - Total)

#### 1. Introduction to the Development Team (25 points)

- **(25 points)** Create a comprehensive introduction to the development team, highlighting each member's contributions to the project, their effective collaboration methods, as well as personal details such as names, roles, short bios, relevant photos, and GitHub profile links. [RSS-ECOMM-4_19](./Sprint4/RSS-ECOMM-4_19.md)

#### 2. RS School Logo and Link (10 points)

- **(10 points)** Feature and link the RS School logo on the "About Us" page, making it visible and recognizable, and allowing users to learn more about the educational program by linking it to the school's website. [RSS-ECOMM-4_20](./Sprint4/RSS-ECOMM-4_20.md)

### Routing Implementation (0 points)

- **(20 points)** Implement routing for navigation to Basket page from all other pages. [RSS-ECOMM-82](./Sprint4/RSS-ECOMM-82.md)

### Evaluation Criteria for Header (0 points)

- **(10 points)** Consistent header layout with necessary information like branding and user navigation across all the pages. [RSS-ECOMM-83](./Sprint4/RSS-ECOMM-83.md)
- **(10 points)** Basket link or button in the header, enabling navigation to Basket page. [RSS-ECOMM-84](./Sprint4/RSS-ECOMM-84.md)

### Mentor Evaluation Criteria (60 points - Total):

1. **Code Review Participation (10 points):** Students actively participate in code reviews, providing constructive feedback and suggestions to their peers.
2. **No Merges Without Approvals (10 points):** Pull requests are not merged without approvals from other team members, ensuring the quality of code contributions.
3. **Pull Request Descriptions (10 points):** Pull requests include detailed descriptions, outlining the changes made and the purpose of the changes, facilitating better understanding and review.
4. **Task Board Management (10 points):** Students maintain and regularly update a task board (e.g., Trello, Jira), ensuring that tasks are moved according to their progress and completion.
5. **Active Participation in Development Discussions (5 points):** Students take an active role in discussing the development process, sharing ideas, and collaborating on solutions and improvements.
6. **Unit Test Coverage (15 points):** The codebase has a minimum of 35% unit test coverage, ensuring the reliability and robustness of the implemented features.

### Here is the final points distribution:

- Catalog Page Enhancements: 105 points
- Detailed Product Page Enhancements: 40 points
- Basket Page Implementation: 105 points
- About Us Page Implementation: 35 points
- Routing Implementation: 0 points
- Evaluation Criteria for Header: 0 points
- Mentor Evaluation Criteria: 60 points
- Total points for Sprint 4: 345 points
