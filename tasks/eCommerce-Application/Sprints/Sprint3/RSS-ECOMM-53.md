### RSS-ECOMM-53: Breadcrumb Navigation (15 points)

#### Description
Implement breadcrumb navigation or other navigational aids to help users understand and navigate the current category hierarchy.

#### Implementation Details
1. **Breadcrumb Navigation:** Breadcrumb navigation should be present on all category pages to give users a clear understanding of the category hierarchy and their current location within it. Each segment of the breadcrumb should be a clickable link that takes the user to the corresponding category or subcategory page.
2. **Category Hierarchy:** Ensure that the category hierarchy is accurately reflected in the breadcrumb navigation. This will likely involve fetching category data from the chosen API (commercetools or another simple API) and dynamically generating the breadcrumb links based on this data.

#### Acceptance Criteria
- Breadcrumb navigation or a similar navigational aid is present on all category pages, accurately reflecting the category hierarchy and the user's current location within it.
- Clicking on a segment of the breadcrumb navigation takes the user to the corresponding category or subcategory page.

#### Useful Links and Resources
1. [Breadcrumb Navigation](https://blog.hubspot.com/marketing/navigation-breadcrumbs)
2. [Breadcrumb in HTML and CSS](https://www.w3schools.com/howto/howto_css_breadcrumbs.asp)
3. [commercetools Categories API](https://docs.commercetools.com/api/projects/categories)
