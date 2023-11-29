### 🚀 Issue RSS-ECOMM-3_02: Display Prices with and Without Discount for Discounted Products (20 points) 🎯

#### 🖊️ Description

For discounted products 💸, the application should display both the original and the discounted price 💰. The discounted price, which is the current price the customer needs to pay, should be made visually distinct to highlight the discount and value for the customer 👀.

#### 🔧 Implementation Details

1. **Fetching Discounted Product Data:** Make use of the commercetools API to fetch product data, which should include the original price and any available discounts. It may require fetching price data separately or in combination with product details.
2. **Parsing Product Price Data:** Extract the necessary price and discount information from the fetched data 💡. This may include the original price, the discount amount or percentage, and the discounted price.
3. **Calculating Discounted Price:** If the API does not provide the discounted price directly, calculate it from the original price and the discount amount or percentage 🔢.

#### 💡 Visual Implementation Ideas

1. **Displaying Prices:** Display the original price and the discounted price clearly on the product card. Ensure both prices are easily visible and understandable 👓.
2. **Highlighting Discounted Price:** Make the discounted price visually distinct, for example, by using a different color, font size, or a badge 🏷️. The goal is to draw attention to the discounted price and highlight the savings.
3. **Striking out the Original Price:** Consider using a strikethrough for the original price to reinforce the idea that the discounted price is currently in effect 🚫.

#### ✅ Acceptance Criteria

- Both the original price and the discounted price are clearly displayed for discounted products.
- The discounted price is visually distinct and clearly indicates that it is the current price the customer needs to pay.
- If the original price is displayed, it should be marked in a way that clearly communicates that it is not the current price (e.g., strikethrough).

#### 🔗 Useful Links and Resources

1. [Commercetools API documentation](https://docs.commercetools.com/api)
2. [Commercetools API endpoint for fetching product prices](https://docs.commercetools.com/api/projects/products#productvariantdraft)
3. [Product Discounts](https://docs.commercetools.com/api/projects/productDiscounts)
