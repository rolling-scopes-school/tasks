### RSS-ECOMM-45: Fetch and Display Product List using Commercetools API (25 points)

#### Description
The application should utilize the commercetools API to fetch a list of products with essential details such as the product name, image, and description. The data fetched from the API should be parsed and organized to be displayed on the Catalog Product page, where users can view the list and select individual products for more detailed information.

#### Implementation Details
1. **API Setup:** Set up the commercetools API in your project, following the guidelines provided in the API documentation. Ensure you have the necessary credentials and permissions to fetch product data.
2. **Fetching Data:** Use the appropriate commercetools API endpoints to fetch product data. The `GET /{projectKey}/products` endpoint could be useful for this task. Remember to handle potential errors in data fetching, like network errors or API limitations.
3. **Data Parsing and Display:** Parse the fetched data to extract the necessary product details: name, image, and description. Display this data on the Catalog Product page in a user-friendly format.

#### Visual Implementation Ideas
1. **Product cards:** Display each product on the Catalog Product page in a card-like format, with the product image, name, and brief description visible.
2. **Product image:** The product image should be clear and accurately represent the product.
3. **Product name and description:** The product name should be in a larger, bold font to quickly draw the user's attention. The product description should be brief, informative, and provide necessary details to understand the product at a glance.

#### Acceptance Criteria
- The application successfully fetches a list of products from the commercetools API, including the essential details: name, image, and description.
- The fetched products are displayed on the Catalog Product page in an organized, easy-to-browse manner.
- Each product card includes the product's image, name, and description, and these elements are easy to identify and understand by users.

#### Useful Links and Resources
1. [Commercetools API documentation](https://docs.commercetools.com/api)
2. [Commercetools API endpoint for fetching products](https://docs.commercetools.com/api/projects/products#query-product)
3. [Working with data in commercetools](https://docs.commercetools.com/api/general-concepts#data-erasure)
