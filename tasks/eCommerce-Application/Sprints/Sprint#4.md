## Sprint 4: Basket Page Implementation

In this sprint, the team will concentrate on building the Basket page. This will include features like displaying a list of items added to the basket, increasing or decreasing the quantity of each item, removing items from the basket, displaying the subtotal and total prices, and a button for proceeding to the checkout page. All these features should be built using the commercetools API for data retrieval and management. 

### Working with the Repository

- Create a new branch for the current sprint (e.g., `feat/sprint_4`) from the previous sprint's branch (`feat/sprint_3`).
- Merge all feature branches into the current sprint's branch.
- At the end of the sprint, create a pull request from the current sprint's branch (`feat/sprint_4`) to the previous sprint's branch (`feat/sprint_3`).
- Share the pull request link with the mentor for review and evaluation.

### Evaluation Criteria:

### CrossCheck Criteria (220 points):

### Basket Page Implementation (200 points - Total)

#### 1. Display Basket Items (50 points)

- **(30 points)** Use the commercetools API, or any other simple API, to fetch and display the list of items added to the basket along with essential details such as the name, image, and price. [RSS-ECOMM-68](./Sprint4/RSS-ECOMM-68.md)
- **(20 points)** Display the quantity of each item in the basket. [RSS-ECOMM-69](./Sprint4/RSS-ECOMM-69.md)

#### 2. Basket Management (80 points)

- **(30 points)** Allow users to remove items from the basket. Removing an item should immediately update the basket's total price. [RSS-ECOMM-71](./Sprint4/RSS-ECOMM-71.md)
- **(25 points)** Implement functionality that allows users to increase or decrease the quantity of each item in the basket. This should instantly update the subtotal price for the item and the total price for the basket. [RSS-ECOMM-72](./Sprint4/RSS-ECOMM-72.md)
- **(25 points)** Display the total price for the basket, calculated by adding up the subtotal prices of all items in the basket. [RSS-ECOMM-73](./Sprint4/RSS-ECOMM-73.md)

#### 3. Navigation to Checkout (50 points)

- **(25 points)** Include a button on the Basket page that, when clicked, navigates the user to the Checkout page. [RSS-ECOMM-74](./Sprint4/RSS-ECOMM-74.md)
- **(25 points)** The Checkout button should be disabled when the basket is empty and enabled when there are one or more items in the basket. [RSS-ECOMM-75](./Sprint4/RSS-ECOMM-75.md)

### Routing Implementation (20 points)

- **(20 points)** Implement routing for navigation to Basket page from all other pages. [RSS-ECOMM-76](./Sprint4/RSS-ECOMM-76.md)

### Evaluation Criteria for Header (20 points)

- **(10 points)** Consistent header layout with necessary information like branding and user navigation across all the pages. [RSS-ECOMM-77](./Sprint4/RSS-ECOMM-77.md)
- **(10 points)** Basket link or button in the header, enabling navigation to Basket page. [RSS-ECOMM-78](./Sprint4/RSS-ECOMM-78.md)

### Mentor Evaluation Criteria (60 points - Total):

1. **Code Review Participation (10 points):** Students actively participate in code reviews, providing constructive feedback and suggestions to their peers.
2. **No Merges Without Approvals (10 points):** Pull requests are not merged without approvals from other team members, ensuring the quality of code contributions.
3. **Pull Request Descriptions (10 points):** Pull requests include detailed descriptions, outlining the changes made and the purpose of the changes, facilitating better understanding and review.
4. **Task Board Management (10 points):** Students maintain and regularly update a task board (e.g., Trello, Jira), ensuring that tasks are moved according to their progress and completion.
5. **Active Participation in Development Discussions (5 points):** Students take an active role in discussing the development process, sharing ideas, and collaborating on solutions and improvements.
6. **Unit Test Coverage (15 points):** The codebase has a minimum of 35% unit test coverage, ensuring the reliability and robustness of the implemented features.

### Here is the final points distribution:

- Basket Page Implementation: 200 points
- Routing Implementation: 20 points
- Evaluation Criteria for Header: 20 points
- Mentor Evaluation Criteria: 60 points
- Total points for Sprint 4: 300 points
