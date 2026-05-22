# ShopFront — Online Store

A full-featured online store where the user can browse the product catalog, filter and sort products, add items to the cart, place orders, and manage their profile.

The platform runs on top of the **commercetools HTTP API** — an enterprise-grade e-commerce engine supporting products, categories, carts, orders, and customers. commercetools provides a free trial account sufficient for an educational project.

> **API:** [commercetools HTTP API](https://docs.commercetools.com/api).
> Auth: `{auth_url}/oauth/token` (OAuth2 client credentials).
> REST: `{api_url}/{project_key}/…`
> [Merchant Center](https://mc.commercetools.com/) — UI for catalog management.

---

## API Setup

1. Register at [commercetools.com](https://commercetools.com/) and create a free trial project.
2. In Merchant Center → Settings → Developer Settings, create an API Client with the required scopes (`manage_products`, `manage_orders`, `manage_customers`, etc.).
3. Obtain: `project_key`, `client_id`, `client_secret`, `auth_url`, `api_url`.
4. To get an `access_token`, execute `POST {auth_url}/oauth/token` with `grant_type=client_credentials`.
5. Populate the catalog with products via Merchant Center or Import API (at least 15–20 products in 3–4 categories).

> **Important:** Do not use data from `commercetools-sunrise-data`. The catalog must be unique — a custom store theme (electronics, clothing, books, etc.).

---

## Login Page Implementation

### 1. Input Validation

- The login form contains Email and Password fields.
- Client-side validation: email must be in a valid format, password is a required field.
- Clear error messages below each field on validation errors (e.g., "Invalid email", "Password is required").

### 2. Integration with Authentication Service

- The form is integrated with commercetools for user authentication (`POST /{project_key}/login`).
- On invalid credentials — a clear error message (e.g., "Invalid email or password").
- On successful authentication — the authorization token is saved.

### 3. Redirection

- On successful login — redirect to the main page.
- If an authenticated user tries to navigate to the login page — automatic redirect to the main page.

### 4. Navigation

- Link/button to navigate to the registration page.

---

## Registration Page Implementation

### 1. Input Validation

- The registration form contains fields: email, password, first name, last name, date of birth, address (street, city, postal code, country).
- Client-side validation of all fields: valid email, minimum password length (≥8 characters, letters and digits), required fields.
- Postal code format depends on the selected country (custom validation).
- Clear error messages below each field on errors.

### 2. Integration with Authentication Service

- The form is integrated with commercetools for customer registration (`POST /{project_key}/customers`).
- On errors (e.g., email already in use) — a clear message is shown.

### 3. Redirection

- On successful registration — automatic login and redirect to the main page.

### 4. Address Management

- The user can set a default address during registration.
- Option to specify separate addresses for shipping and billing, or use a single address for both.

### 5. Navigation

- Link/button to navigate to the login page.

---

## Main Page Implementation

### 1. Store Showcase

- A promo banner or carousel with promotional offers.
- A featured products section (e.g., "New Arrivals" or "Popular") — at least 4 products as cards.
- Display of active promo codes (if any).

### 2. Category Navigation

- Links to all product categories. Clicking a category navigates to the Catalog with a filter for that category.

### 3. Centralized Navigation

- Links to all functional pages of the application (catalog, cart, profile, About Us).

---

## Catalog Page Implementation

### 1. Display Product List

- Fetch and display the product list from commercetools API (`GET /{project_key}/product-projections/search`).
- Each product is displayed as a card: image, name, short description.
- Price display: if the product has a discount — show both the original (strikethrough) and the current (discounted) price. The discounted price is visually highlighted.
- Price is formatted from centAmount to a human-readable format with currency (e.g., `12345` → `$123.45`).

### 2. Product Filtering, Sorting, and Searching

- Product filtering by attributes: price range, category, brand, color, size, or other relevant characteristics. Filters are executed via the commercetools API.
- Sorting the product list by price and by name.
- Product search: a search bar with results updating as the user types (without pressing Enter).

### 3. Interactive Product Cards

- Hover effect on cards — visual change on hover.
- An "Add to cart" button on each card. On click — the product is added to the cart via commercetools Carts API.
- If the product is already in the cart — the button changes (e.g., to "In cart" or "Remove from cart").
- Clicking the card (outside the button) — navigates to the detailed product page.

### 4. Category Navigation

- Navigation by categories and subcategories fetched from the commercetools Categories API.
- Selecting a category filters products without page reload.

### 5. Performance Optimization

- Implement pagination, infinite scrolling, or lazy loading for efficient handling of a large number of products.

---

## Detailed Product Page Implementation

### 1. Display Product Information

- Fetch and display full product information from the commercetools API: name, description, images, price.
- Product image slider: the user can browse all images.
- If the product is discounted — show both prices (original strikethrough, discounted price highlighted).

### 2. Enlarged Image Modal

- Clicking an image opens an enlarged version in a modal window.
- Inside the modal — a slider for navigating all product images.

### 3. Product Options

- If the product has variants (size, color, etc.) — widgets for selecting a variant.
- On variant selection — price and image update (if different).

### 4. Add / Remove from Cart

- If the product is not in the cart — an "Add to cart" button. The product is added with the selected options via commercetools Carts API.
- If the product is already in the cart — a "Remove from cart" button. The product is removed via commercetools Carts API.

---

## Basket (Cart) Page Implementation

### 1. Display Basket Items

- Fetch and display the list of cart items from commercetools Carts API: name, image, price, quantity.

### 2. Modify Product Quantity

- The user can change the quantity of each product in the cart. Data is updated via the commercetools API. The total cost is recalculated.

### 3. Remove Product from Cart

- A "Remove" button on each product. The product is removed via the commercetools API.

### 4. Recalculate Total Cost

- The cart total is automatically recalculated when quantity changes or a product is removed.

### 5. Empty Cart Message

- If the cart is empty — a "Cart is empty" message and a link to the catalog.

### 6. Promo Code

- A promo code input field and an "Apply" button. The promo code is sent to the commercetools Carts API.
- On application — both the original and the discounted price are displayed (visually distinct).

### 7. Clear Shopping Cart

- A "Clear cart" button — removes all items from the cart via the commercetools API.

---

## User Profile Page Implementation

### 1. Display User Profile Information

- Display the user's personal information: first name, last name, date of birth, email, list of addresses.
- Data is loaded from the commercetools Customers API.

### 2. Edit User Profile Information

- Edit mode: the user can update first name, last name, date of birth, email.
- Option to change the password (current password + new + confirmation).
- Address management: adding new, deleting existing, editing, setting a default address.
- All changes are saved via the commercetools API.
- Validation of all fields (same as the registration form).

### 3. Access Control

- The page is accessible only to authenticated users. Unauthenticated users are redirected to Login.

---

## About Us Page Implementation

### 1. Team Introduction

- Information about each team member: name, role in the project, short bio, photo, GitHub link.
- Description of effective team collaboration methods.
- Card design is consistent.

### 2. RS School Logo

- RS School logo with a clickable link to [rs.school](https://rs.school/).

---

## Header & Navigation

### 1. Header Layout

- Store logo/name linking to the main page.
- Navigation: Catalog, Cart, About Us.
- For unauthenticated users: links to Login and Registration.
- For authenticated users: link to Profile, Logout button.
- Cart icon with a badge (number of items in the cart).
- Search bar.

### 2. Routing

- All pages are accessible via direct URLs and through header navigation.
- Browser back/forward buttons are supported.
- Navigating to a non-existent URL shows a 404 (Not Found) page with an option to return to the main page.
- Profile is accessible only to authenticated users — attempting to access without authorization redirects to Login.
- Pages are loaded lazily (lazy loading).

---

## Beyond API — Features Not Available in commercetools

commercetools provides full CRUD for products, carts, and orders, but does not cover user-generated content. These features are implemented independently.

### 1. Reviews and Ratings

- A review form on the product page: text + star rating (1–5).
- A list of reviews on the product page.
- The average rating is displayed on the product card in the catalog and on the detailed page.
- Data is saved locally (localStorage).

### 2. Wishlist

- An "Add to favorites" button on each product card.
- A separate Wishlist page with the list of favorite products.
- Option to remove a product from the wishlist and move it to the cart.
- Data persists across sessions (localStorage).

---

## Useful Links

- [commercetools HTTP API](https://docs.commercetools.com/api) — main documentation
- [Product Projections Search](https://docs.commercetools.com/api/projects/productProjections#search-productprojections) — search and filtering
- [Carts API](https://docs.commercetools.com/api/projects/carts) — cart management
- [Customers API](https://docs.commercetools.com/api/projects/customers) — registration and profile
- [Authorization](https://docs.commercetools.com/api/authorization) — OAuth2 client credentials flow
- [Merchant Center](https://mc.commercetools.com/) — catalog management
