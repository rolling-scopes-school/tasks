### RSS-ECOMM-54: Fetch and Display Product Details using Commercetools API (10 points)

#### Description
The application should utilize the commercetools API to fetch the detailed information such as the product name, description, and images of a selected product. The data fetched from the API should be parsed and organized to be displayed on the Detailed Product page, where users can view all details of the selected product.

#### Implementation Details
1. **API Setup:** Use the already set up commercetools API in your project to fetch detailed product data. Make sure you have the necessary credentials and permissions.
2. **Fetching Data:** Use the appropriate commercetools API endpoints to fetch product detail data. The `GET /{projectKey}/products/{ID}` endpoint could be useful for this task. Remember to handle potential errors in data fetching, like network errors or API limitations.
3. **Data Parsing and Display:** Parse the fetched data to extract the necessary product details: name, description, and images. Display this data on the Detailed Product page in a user-friendly format.

#### Visual Implementation Ideas
1. **Product Details:** Display the product name, description, and images on the Detailed Product page in an easy-to-read and comprehensive manner.
2. **Product Images:** The product images should be clear and accurately represent the product. Users should have the possibility to see multiple images if available.
3. **Product Name and Description:** The product name should be in a larger, bold font to quickly draw the user's attention. The product description should be detailed, informative, and provide all necessary details for the user to understand the product completely.

#### Acceptance Criteria
- The application successfully fetches detailed information of a product from the commercetools API, including the essential details: name, description, images and other attributes.
- The fetched product details are displayed on the Detailed Product page in an organized and easy-to-understand manner.
- The Detailed Product page includes the product's images, name, and description, and these elements are easy to identify and understand by users.

#### Useful Links and Resources
2. [Commercetools API endpoint for fetching product by ID](https://docs.commercetools.com/api/projects/products#get-product-by-id)
