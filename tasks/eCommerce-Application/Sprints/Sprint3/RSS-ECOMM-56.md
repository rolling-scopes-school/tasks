### RSS-ECOMM-56: Implement an Image Slider for Product Images (25 points)

#### Description
As part of the detailed product page, the application should implement an image slider that allows users to view multiple images of a selected product. This image slider should be populated with images fetched from the commercetools API, or any other simple API chosen by the team.

#### Implementation Details
1. **Fetch Product Images:** For a given product, fetch all associated images from the API. This might involve the `GET /{projectKey}/products/{ID}` endpoint in the case of commercetools API, which should include image URLs in the product data.
2. **Implement Image Slider:** Implement a user-friendly image slider that can handle multiple images. The slider should allow users to manually cycle through the images, and it should gracefully handle the case of a product with only a single image.

#### Visual Implementation Ideas
1. **Interactive Slider:** The image slider should be interactive, letting users control which image is currently displayed. This might involve arrows on either side of the image, or a series of clickable dots representing each image.
2. **Image Layout:** The images should be presented in a clean and organized way. Consider the size and aspect ratio of the images and how they will fit into the overall design of the page.

#### Acceptance Criteria
- The application successfully fetches multiple images for a product from the chosen API, when available.
- An image slider is implemented on the Detailed Product page, and can handle multiple images. The slider allows users to manually control which image is displayed.
- If a product has only a single image, the slider gracefully degrades to simply display that image without any unnecessary slider controls.

#### Useful Links and Resources
1. [Commercetools API endpoint for fetching product by ID](https://docs.commercetools.com/api/projects/products#get-product-by-id)
2. [Swiper](https://swiperjs.com/), a modern mobile touch slider
