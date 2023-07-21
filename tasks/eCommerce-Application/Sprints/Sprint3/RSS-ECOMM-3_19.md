### Implement Routing and Browser Navigation for Catalog and Product Detail Pages (20 points)

#### Description

Implement routing to allow seamless navigation between the Catalog page and the Product Detail page, directly accessing specific product detail pages via unique URLs, and supporting browser navigation buttons (forward and back). The pages should be accessible whether the user is logged in or not.

#### Implementation Details

1. **Catalog Page:** This page should display a list of products. Each product card should contain a link (or be a link itself) directing to the corresponding product's detail page.
2. **Product Detail Page:** This page should display detailed information about a single product. It should be accessible by clicking on a product card from the Catalog page or by directly accessing a unique URL for the product.
3. **Routing:** The URL in the browser should change when users navigate from the Catalog page to a Product Detail page and vice versa. Each product should have a unique URL that can be directly accessed to view its details.
4. **Browser Navigation Buttons:** Implement support for browser navigation buttons. If a user navigates to a different product detail page or the Catalog page, the back button should take the user to the previously viewed page. The forward button should work correspondingly after using the back button.
5. **Public Accessibility:** The Catalog and Product Detail pages should be accessible whether the user is logged in or not. These pages should not require authentication.

#### Acceptance Criteria

- Clicking on a product card from the Catalog page takes the user to the corresponding Product Detail page.
- Navigating from the Catalog page to a Product Detail page and vice versa changes the URL in the browser.
- Each product has a unique URL that can be directly accessed to view its details.
- Directly accessing a product's unique URL leads to the corresponding Product Detail page.
- The browser's back and forward buttons work as expected, enabling the user to navigate through their history of visited pages.
- The Catalog and Product Detail pages are accessible regardless of the user's authentication state.

#### Useful Links and Resources

1. [Using the HTML5 History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
2. [Introduction to routing in React](https://reactrouter.com/en/6.14.1/start/tutorial)
3. [Client-side Routing in Angular](https://angular.io/guide/router)
4. [Vue Router](https://router.vuejs.org/)
