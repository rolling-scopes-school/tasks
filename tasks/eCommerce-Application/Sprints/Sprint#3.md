## Sprint 3: Catalog Product Page, Detailed Product Page & User Profile Page Implementation 📚🔍👥

In this sprint, the team will focus on implementing the Catalog Product page 📖, the Detailed Product page 🔍, and the User Profile page 👥. This includes fetching and displaying a list of products with essential details, implementing filtering, sorting, and searching functionality, designing interactive product cards, and providing navigation between product categories. All these features should be built using the commercetools API, or any other simple API, for product data retrieval and management.

For the Detailed Product page, it should provide a comprehensive and user-friendly experience by displaying extensive product information. The page should feature an image slider 🖼️, a modal window for enlarged product images, breadcrumb navigation, and widgets for selecting product options.

The User Profile page should present the user's personal information, including their first name, last name, date of birth, and a list of their addresses. Additionally, it should provide a user-friendly interface for users to switch to an edit mode, where they can update their personal details, email, and addresses.

### Working with the Repository 📂

### 🔧 Working with the Repository

- 📌 Create a new branch for the current sprint (e.g., `release/catalog-product-profile`) from the previous sprint's branch (`develop`).
- 🔄 Merge all feature branches into the current sprint's branch.
- 🎁 At the end of the sprint, create a pull request from the current sprint's branch (`release/catalog-product-profile`) to the previous sprint's branch (`develop`).
- ✅ Once the pull request has been reviewed and approved, merge the `release/catalog-product-profile` branch into the `develop` branch.
- 📧 Share the pull request link with the mentor for review and evaluation.

### Evaluation Criteria: 📋

### CrossCheck Criteria (370 points): ✔️

---

### Catalog Page Implementation (150 points - Total) 📚

#### 1. Display Product List (45 points) 📋

- **(25 points)** Use the commercetools API to fetch a list of products with essential details, such as name, image, and description. [RSS-ECOMM-3_01](./Sprint3/RSS-ECOMM-3_01.md) 💻
- **(20 points)** Display prices with and without discount for discounted products, ensuring that the discounted price is visually distinct and clearly indicates that it is the current price. [RSS-ECOMM-3_02](./Sprint3/RSS-ECOMM-3_02.md) 💵

#### 2. Product Filtering, Sorting, and Searching (65 points) 🔍

- **(30 points)** Utilize the commercetools API to offer robust filtering options for users to refine the product list based on attributes such as price range, brand, color, size, or other relevant characteristics. [RSS-ECOMM-3_03](./Sprint3/RSS-ECOMM-3_03.md) 🗂️
- **(15 points)** Enable users to sort the product list by various properties, such as price and name. [RSS-ECOMM-3_04](./Sprint3/RSS-ECOMM-3_04.md) 🔄
- **(20 points)** Implement an efficient and user-friendly search feature that allows users to quickly find and display relevant products based on their search query using the chosen API. [RSS-ECOMM-3_05](./Sprint3/RSS-ECOMM-3_05.md) 🔎

#### 3. Interactive Product Cards (15 points) 🃏

- **(10 points)** Design product cards that change their appearance when the user hovers over them, enhancing the browsing experience. [RSS-ECOMM-3_06](./Sprint3/RSS-ECOMM-3_06.md) 👆
- **(5 points)** Upon clicking a product card, redirect the user to a detailed product information page for the selected product. [RSS-ECOMM-3_07](./Sprint3/RSS-ECOMM-3_07.md) 🖱️

#### 4. Category Navigation (25 points) 🧭

- **(25 points)** Implement easy-to-use and clear navigation options for users to explore and switch between different product categories or subcategories using the commercetools API. [RSS-ECOMM-3_08](./Sprint3/RSS-ECOMM-3_08.md) 🗺️

### Detailed Product Page Implementation (100 points - Total) 🔎

#### 1. Display Product Information (65 points) 📝

- **(25 points)** Use the commercetools API to fetch and display the product name, description, and images on the Detailed Product page. [RSS-ECOMM-3_09](./Sprint3/RSS-ECOMM-3_09.md) 🖼️
- **(25 points)** Implement an image slider for product images fetched from the chosen API, allowing users to view multiple images of the product. [RSS-ECOMM-3_10](./Sprint3/RSS-ECOMM-3_10.md) 🎞️
- **(15 points)** Display the product price fetched from the chosen API, and if the product is on sale, display both the original and discounted prices. [RSS-ECOMM-3_11](./Sprint3/RSS-ECOMM-3_11.md) 💰

#### 2. Enlarged Image Modal with Slider (35 points) 🖼️🔍

- **(20 points)** Allow users to click on the product image to open an enlarged version of the image in a modal window. [RSS-ECOMM-3_12](./Sprint3/RSS-ECOMM-3_12.md) 🔍
- **(15 points)** Enable users to navigate through all product images from the commercetools API using a slider inside the modal window. [RSS-ECOMM-3_13](./Sprint3/RSS-ECOMM-3_13.md) 🚀

### User Profile Page Implementation (70 points - Total) 👥

#### 1. Display User Profile Information (30 points) 📋

- **(10 points)** Present the user's personal information, including first name, last name, date of birth, and a list of their addresses in the User Profile page. [RSS-ECOMM-3_14](./Sprint3/RSS-ECOMM-3_14.md) 📄
- **(20 points)** Provide a user-friendly interface for users to switch to an edit mode, where they can update their personal details, email, and addresses. [RSS-ECOMM-3_15](./Sprint3/RSS-ECOMM-3_15.md) ✏️

#### 2. Edit User Profile Information (40 points) ✏️

- **(10 points)** In the edit mode, allow users to update their personal information, including first name, last name, and date of birth and email. [RSS-ECOMM-3_16](./Sprint3/RSS-ECOMM-3_16.md) ✍️
- **(15 points)** Enable users to change their password. [RSS-ECOMM-3_17](./Sprint3/RSS-ECOMM-3_17.md) 🔑
- **(15 points)** Allow users to manage their addresses, including adding new addresses, deleting existing ones, and updating address details. [RSS-ECOMM-3_18](./Sprint3/RSS-ECOMM-3_18.md) 🏠

### Routing Implementation (40 points - Total) 🛣️

- **(25 points)** Implement routing for navigation between Catalog page, Product detail page. [RSS-ECOMM-3_19](./Sprint3/RSS-ECOMM-3_19.md) 🚦
- **(15 points)** Implement routing for navigation to User Profile page. [RSS-ECOMM-3_20](./Sprint3/RSS-ECOMM-3_20.md) 🚧

### Evaluation Criteria for Header (10 points - Total) 🖥️

- **(5 points)** Consistent header layout with necessary information like branding and user navigation across all the pages. [RSS-ECOMM-3_21](./Sprint3/RSS-ECOMM-3_21.md) 📐
- **(5 points)** User Profile link or button in the header, enabling navigation to User Profile page. [RSS-ECOMM-3_22](./Sprint3/RSS-ECOMM-3_22.md) ➡️

### Penalties for Cross-Check Criteria (70 points - Total): ❌

1. **Absence of Responsive Application Design (20 points):** If the application does not provide a responsive layout suitable for various devices and screen sizes, a penalty of 20 points will be applied. 📱🖥️🛑

2. **Errors in the Console (20 points):** Except for request errors, console errors, including favicon error, will result in a penalty of 20 points. Ensure your code is debugged and free of unnecessary errors for a smooth user experience. 🐛🔍🛑

3. **Usage of Data from commercetools-sunrise-data (30 points):** If a project is found to be using data directly from `commercetools-sunrise-data`, a penalty of 30 points will be applied. The intent is to encourage developers to use unique data sources and avoid ready-made datasets. 📊❌🛑

Please note that these penalties will be deducted from the final score. Strive for high-quality, error-free code and a responsive, user-friendly design for the best outcome. 🌟🏆💪

### Mentor Evaluation Criteria (60 points - Total): 👨‍🏫

1. **Code Review Participation (10 points):** Students actively participate in code reviews, providing constructive feedback and suggestions to their peers. 🗣️
2. **No Merges Without Approvals (10 points):** Pull requests are not merged without approvals from other team members, ensuring the quality of code contributions. 👍
3. **Pull Request Descriptions (10 points):** Pull requests include detailed descriptions, outlining the changes made and the purpose of the changes, facilitating better understanding and review. 📝
4. **Task Board Management (10 points):** Students maintain and regularly update a task board (e.g., Trello, Jira), ensuring that tasks are moved according to their progress and completion. 📊
5. **Active Participation in Development Discussions (5 points):** Students take an active role in discussing the development process, sharing ideas, and collaborating on solutions and improvements. 🗨️
6. **Unit Test Coverage (15 points):** The codebase has a minimum of 30% unit test coverage, ensuring the reliability and robustness of the implemented features. ✔️

### Penalties for Mentor Evaluation Criteria: ❌

1. **Linter Errors (5 points):** If there are errors from the linter, a penalty of 5 points will be applied. Ensure that you follow the linter rules to maintain high code quality. 🛠️📝🛑

2. **Prettier Errors (5 points):** If there are formatting errors detected by Prettier, a penalty of 5 points will be applied. It's important to adhere to established formatting conventions for clean, readable code. 📐✍️🛑

3. **Presence of 'any' (5 points):** The use of 'any' in TypeScript can lead to potential typing issues and is generally discouraged. A penalty of 5 points will be applied if 'any' is found in the code. 🚫🔍🛑

4. **Non-functional Scripts in package.json (5 points):** All scripts defined in the package.json should function correctly. If there are non-working scripts, a penalty of 5 points will be applied. ⚙️📦🛑

5. **Non-SPA Application (60 points):** The application should be a Single Page Application (SPA) with an empty index.html. If this requirement is not met, a penalty of 60 points will be applied. ⚠️🖥️🛑

Please note that these penalties will be deducted from the final score. Strive to adhere to best practices, maintain clean and well-formatted code, and ensure that all your scripts are working correctly for the best outcome. 🌟🏆💪

### Here is the final points distribution:

- Catalog Page Implementation: 150 points 📚
- Detailed Product Page Implementation: 100 points 🔍
- Profile Page Implementation: 70 points 👥
- Routing Implementation: 40 points 🛣️
- Evaluation Criteria for Header: 10 points 🖥️
- Mentor Evaluation Criteria: 60 points 👨‍🏫
- Total points for Sprint 3: 430 points 🏆

"One sprint to rule them all, one sprint to find them, One sprint to bring all the pages and in the code bind them." 🧙‍♂️💍

In the Land of Development 🌐 where the Shadows of Bugs 🐛 lie, we embark on Sprint 3, the quest for implementing the Catalog Product page 📖, Detailed Product page 🔬, and User Profile page 👤. Harness the power of the APIs 🌐, let not a single bug pass 🐞, and leave no user-story unchecked ✅. Remember, not all those who wander around the code are lost 🛤️💡. Let's decode this sprint like it's the one Ring of Power! ⚡💍🧙‍♂️
