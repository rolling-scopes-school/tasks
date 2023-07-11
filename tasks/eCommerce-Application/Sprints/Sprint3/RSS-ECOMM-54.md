### RSS-ECOMM-54: Implement Routing for Catalog and Product Detail Pages (15 points)

#### Description
Implement routing to allow seamless navigation between the Catalog page and the Product Detail page, and directly accessing specific product detail pages via unique URLs.

#### Implementation Details
1. **Catalog Page:** This page should display a list of products. Each product card should contain a link (or be a link itself) directing to the corresponding product's detail page.
2. **Product Detail Page:** This page should display detailed information about a single product. It should be accessible by clicking on a product card from the Catalog page or by directly accessing a unique URL for the product.
3. **Routing:** The URL in the browser should change when users navigate from the Catalog page to a Product Detail page and vice versa. Each product should have a unique URL that can be directly accessed to view its details.

#### Acceptance Criteria
- Clicking on a product card from the Catalog page takes the user to the corresponding Product Detail page.
- Navigating from the Catalog page to a Product Detail page and vice versa changes the URL in the browser.
- Each product has a unique URL that can be directly accessed to view its details.
- Directly accessing a product's unique URL leads to the corresponding Product Detail page.

#### Useful Links and Resources
1. [Using the HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
2. [Introduction to routing in React](https://reactrouter.com/en/6.14.1/start/tutorial)
3. [Client-side Routing in Angular](https://angular.io/guide/router)
4. [Vue Router](https://router.vuejs.org/)
