### 🎯 Issue RSS-ECOMM-3_08: Implement Category 🏷️ and Breadcrumb Navigation 🍞 (25 points)

#### 📋 Description

Our goal is to make the product exploration process 🕵️ easy and efficient. We need to implement clear and user-friendly navigation 🧭 that enables users to explore and switch between different product categories or subcategories. In addition, we need to provide breadcrumb navigation 🍞 to help users understand their current location 📍 within the category hierarchy.

#### 🔨 Implementation Details

1. **Category Display:** The navigation options should be prominently displayed, possibly as a side panel 📝 or a drop-down menu ⬇️. This might vary depending on the chosen design 🎨.
2. **API Usage:** Make use of the commercetools API 💻, or any other simple API, to fetch the categories/subcategories information. The API call should return a list 📃 of all available categories/subcategories.
3. **Navigation Implementation:** Each category or subcategory should be clickable 👆, and when clicked, the product list should be updated to reflect the selected category or subcategory.
4. **Breadcrumb Navigation:** Breadcrumb navigation 🍞 should be present on all category pages to give users a clear understanding of the category hierarchy and their current location 📍 within it. Each segment of the breadcrumb should be a clickable link 🔗 that takes the user to the corresponding category or subcategory page.
5. **Category Hierarchy:** Ensure that the category hierarchy is accurately reflected in the breadcrumb navigation 🍞. This will likely involve fetching category data from the chosen API (commercetools or another simple API) and dynamically generating the breadcrumb links based on this data.

#### ✅ Acceptance Criteria

- User-friendly navigation for product categories and subcategories is implemented and clearly visible 🔍.
- Users can switch between different product categories and subcategories.
- Clicking on a category or subcategory updates the product list accordingly 🔄.
- Breadcrumb navigation or a similar navigational aid is present on all category pages, accurately reflecting the category hierarchy and the user's current location within it.
- Clicking on a segment of the breadcrumb navigation takes the user to the corresponding category or subcategory page.

#### 🔗 Useful Links and Resources

1. [Commercetools API Documentation](https://docs.commercetools.com/api)
2. [Commercetools Modeling Categories](https://docs.commercetools.com/tutorials/categories)
3. [Product Projection Search](https://docs.commercetools.com/api/projects/products-search#product-projection-search)
4. [Breadcrumb Navigation](https://blog.hubspot.com/marketing/navigation-breadcrumbs)
5. [Breadcrumb in HTML and CSS](https://www.w3schools.com/howto/howto_css_breadcrumbs.asp)
6. [commercetools Categories API](https://docs.commercetools.com/api/projects/categories)
