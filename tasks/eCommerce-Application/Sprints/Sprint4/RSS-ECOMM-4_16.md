### 💰🔖 Issue RSS-ECOMM-4_16: Implement Promo Code Application Feature (15 points)

#### 📝📚 Description

For an engaging and user-friendly shopping experience 🚀, develop a feature that enables users to apply promo codes to their orders 💸. The application of these promo codes should offer discounts on eligible items 🛍 and appropriately adjust the total cost of the cart 🛒 using the commercetools API. Information about active promo codes should be presented on the main page 📋.

#### 💻🔧 Implementation Details

1. **Promo Code Display 🎫:** Present active promo codes on the main page to increase visibility and encourage their use 🙌.
2. **Promo Code Input Field 🖊:** Include a field where users can input their promo codes. This could be a text box, for instance 📝.
3. **Apply Button 🆗:** Add an 'Apply' button next to the promo code input field. When a user clicks on this button after entering their promo code, the discount associated with the promo code should be applied to eligible items in the cart 💰.
4. **API Integration 🌐:** Connect the promo code application feature to the commercetools API to ensure the total cost of the cart is updated correctly when a promo code is applied 💹.

#### ✅🎯 Acceptance Criteria

- The main page displays active promo codes 🎫.
- The cart includes an input field for promo codes and an 'Apply' button ✔️.
- When a valid promo code is entered and the 'Apply' button is clicked, the total cost of the cart is updated to reflect the discount associated with the promo code 💰.
- The total cost of the cart, including any discounts from promo codes, is calculated and displayed correctly 💲.

#### 🔗📚 Useful Links and Resources

1. [Commercetools Discount Codes API](https://docs.commercetools.com/api/projects/discountCodes)
2. [Commercetools Cart Discounts API](https://docs.commercetools.com/api/projects/cartDiscounts)
3. [Commercetools Add Discount Code API](https://docs.commercetools.com/api/projects/carts#add-discountcode)
