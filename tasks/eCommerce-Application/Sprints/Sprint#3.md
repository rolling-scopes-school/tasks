## Sprint 3: Catalog Product Page & Detailed Product Page Implementation

In this sprint, the team will focus on implementing the Catalog Product page and the Detailed Product page. This includes fetching and displaying a list of products with essential details, implementing filtering, sorting, and searching functionality, designing interactive product cards, and providing navigation between product categories. All these features should be built using the commercetools API, or any other simple API, for product data retrieval and management.

For the Detailed Product page, it should provide a comprehensive and user-friendly experience by displaying extensive product information, allowing users to choose between product variations and quantities, enabling them to add or remove products from their shopping cart or wishlist, and initiating the checkout process with a "Buy and Pay" button. The page should feature an image slider, a modal window for enlarged product images, breadcrumb navigation, and widgets for selecting product options.

All these features should be planned and implemented in a visually appealing and organized manner, ensuring a smooth user experience while browsing and interacting with the page. The integration with the chosen API should be seamless, providing real-time updates and data synchronization as users explore the product details, add or remove items from their shopping cart and wishlist, and customize their chosen products based on available options.

### Working with the Repository

- Create a new branch for the current sprint (e.g., `feat/sprint_3`) from the previous sprint's branch (`feat/sprint_2`).
- Merge all feature branches into the current sprint's branch.
- At the end of the sprint, create a pull request from the current sprint's branch (`feat/sprint_3`) to the previous sprint's branch (`feat/sprint_2`).
- Share the pull request link with the mentor for review and evaluation.

### Evaluation Criteria:

### CrossCheck Criteria (300 points):

### Catalog Page Implementation (175 points - Total)

#### 1. Display Product List (50 points)

- **(25 points)** Use the commercetools API, or any other simple API, to fetch a list of products with essential details, such as name, image, and description. [RSS-ECOMM-45](./Sprint3/RSS-ECOMM-45.md)
- **(25 points)** Display prices with and without discount for discounted products, ensuring that the discounted price is visually distinct and clearly indicates that it is the current price. [RSS-ECOMM-46](./Sprint3/RSS-ECOMM-46.md)

#### 2. Product Filtering, Sorting, and Searching (60 points)

- **(20 points)** Utilize the chosen API (commercetools or any other simple API) to offer robust filtering options for users to refine the product list based on attributes such as price range, brand, color, size, or other relevant characteristics. [RSS-ECOMM-47](./Sprint3/RSS-ECOMM-47.md)
- **(20 points)** Enable users to sort the product list by various properties, such as price and name. [RSS-ECOMM-48](./Sprint3/RSS-ECOMM-48.md)
- **(20 points)** Implement an efficient and user-friendly search feature that allows users to quickly find and display relevant products based on their search query using the chosen API. [RSS-ECOMM-49](./Sprint3/RSS-ECOMM-49.md)

#### 3. Interactive Product Cards (30 points)

- **(20 points)** Design product cards that change their appearance when the user hovers over them, enhancing the browsing experience. [RSS-ECOMM-50](./Sprint3/RSS-ECOMM-50.md)
- **(10 points)** Upon clicking a product card, redirect the user to a detailed product information page for the selected product. [RSS-ECOMM-51](./Sprint3/RSS-ECOMM-51.md)

#### 4. Category Navigation (35 points)

- **(20 points)** Implement easy-to-use and clear navigation options for users to explore and switch between different product categories or subcategories using the chosen API (commercetools or any other simple API). [RSS-ECOMM-52](./Sprint3/RSS-ECOMM-52.md)
- **(15 points)** Provide breadcrumb navigation or other navigational aids to help users understand and navigate the current category hierarchy. [RSS-ECOMM-53](./Sprint3/RSS-ECOMM-53.md)

### Routing Implementation (15 points - Total)

- **(15 points)** Implement routing for navigation between Catalog page, Product detail page. [RSS-ECOMM-54](./Sprint3/RSS-ECOMM-54.md)

### Detailed Product Page Implementation (110 points)

#### 1. Display Product Information (45 points)

- **(10 points)** Use the commercetools API or any other simple API to fetch and display the product name, description, and images on the Detailed Product page. [RSS-ECOMM-55](./Sprint3/RSS-ECOMM-55.md)
- **(25 points)** Implement an image slider for product images fetched from the chosen API, allowing users to view multiple images of the product. [RSS-ECOMM-56](./Sprint3/RSS-ECOMM-56.md)
- **(10 points)** Display the product price fetched from the chosen API, and if the product is on sale, display both the original and discounted prices. [RSS-ECOMM-57](./Sprint3/RSS-ECOMM-57.md)

#### 2. Enlarged Image Modal with Slider (25 points)

- **(15 points)** Allow users to click on the product image to open an enlarged version of the image in a modal window. [RSS-ECOMM-58](./Sprint3/RSS-ECOMM-58.md)
- **(10 points)** Enable users to navigate through all product images from the chosen API using a slider inside the modal window. [RSS-ECOMM-59](./Sprint3/RSS-ECOMM-59.md)


### Evaluation Criteria for Header (5 points - Total)

- **(5 points)** Navigation to the Catalog page for all users [RSS-ECOMM-60](./Sprint2/RSS-ECOMM-60.md)

### Mentor Evaluation Criteria (60 points - Total):

1. **Code Review Participation (10 points):** Students actively participate in code reviews, providing constructive feedback and suggestions to their peers.
2. **No Merges Without Approvals (10 points):** Pull requests are not merged without approvals from other team members, ensuring the quality of code contributions.
3. **Pull Request Descriptions (10 points):** Pull requests include detailed descriptions, outlining the changes made and the purpose of the changes, facilitating better understanding and review.
4. **Task Board Management (10 points):** Students maintain and regularly update a task board (e.g., Trello, Jira), ensuring that tasks are moved according to their progress and completion.
5. **Active Participation in Development Discussions (5 points):** Students take an active role in discussing the development process, sharing ideas, and collaborating on solutions and improvements.
6. **Unit Test Coverage (15 points):** The codebase has a minimum of 30% unit test coverage, ensuring the reliability and robustness of the implemented features.

### Useful Links and Resources

1. [Commercetools API](https://docs.commercetools.com/api)
