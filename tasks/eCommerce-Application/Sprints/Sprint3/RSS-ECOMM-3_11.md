### Display Product Price and Sale Price (10 points)

#### Description
The application should fetch and display the price for each product from the chosen API on the Detailed Product page. If the product is on sale, both the original price and the sale price should be displayed. The sale price should be clearly distinguished as the current price of the product.

#### Implementation Details
1. **Fetch Product Price:** Fetch the price details of the product from the chosen API. This might involve using the `GET /{projectKey}/products/{ID}` endpoint for the commercetools API, which should include product price information.
2. **Display Price:** Display the price of the product on the Detailed Product page. Make sure the price is formatted correctly and easy to read.
3. **Display Sale Price:** If the product is on sale, fetch the sale price from the API and display it alongside the original price. Make sure it's clear which price is the current price and which price is the original price before the sale.

#### Visual Implementation Ideas
1. **Sale Price Highlight:** When a product is on sale, the sale price could be highlighted in a bright color to draw attention. The original price might be crossed out next to it to make clear that it's no longer the current price.
2. **Price Formatting:** Both prices should be displayed with the appropriate currency symbol and two decimal places, regardless of whether the price ends in .00.

#### Acceptance Criteria
- The application successfully fetches and displays the price for each product from the chosen API.
- If the product is on sale, both the original price and the sale price are displayed. The sale price is clearly distinguished as the current price of the product.

#### Useful Links and Resources
1. [Commercetools API endpoint for fetching product by ID](https://docs.commercetools.com/api/projects/products#get-product-by-id)
2. [Formatting currency in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
