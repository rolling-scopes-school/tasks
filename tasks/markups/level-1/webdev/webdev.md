| Deadline | Project name |
|--------------------|-------------|
| 21.09.2020 23:59 GMT+3 | webdev |


# Home assignment: webdev

Create a webpage according to the provided layout:

Figma:

**[webdev. Figma](https://www.figma.com/file/EWG64LHNWmdi51cY0W1kqt/phototime?node-id=9%3A13)**

❗ To gain full access to the project and be able to edit it, we need to copy it to our own Figma account. After signing in and opening the link above, click on the *burger menu* and select *Back to Files*. The project will be displayed in the *Recent* tab. Right click on it and select *Duplicate* in the context menu to make your own copy of the project, which is available in the *Drafts* tab.

JPG:

**[webdev. JPG](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-1/webdev/webdev.jpg)**

Full alignment with the layout is the key requirement. To achieve it, we need to superimpose the image above over our page using the **Pixel Perfect** browser extension. Note the following important issues:

- Primary blocks must be perfectly positioned at the given screen width (1600px).
- Images, logos (if any) must be perfectly positioned within their logical containers.
- Icons must remain the perfect distance from their corresponding text;
- If the correct font family is used, check line-height - it must be set exactly as in the layout. Width may vary, although explicitly adding the `letter-spacing` property to motto and quote blocks is a common practice.
- If a line contains multiple objects of the same width (visually), then their containing blocks must have the same widths. A difference of a few pixels is irrelevant, but size alignment matters.
- If a layout has multiple layers, it's best to merge layers in the graphics editor and use the image as a background.

*[PerfectPixel extension for Google Chrome](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en)*

Required browser support: **Google Chrome, Mozilla Firefox, Microsoft Edge (Windows) or Safari (MacOS)**.

First, we develop for Google Chrome and use Pixel Perfect to check for layout alignment. Then, we check whether our styles are "wrecked" in Mozilla Firefox, Microsoft Edge and Safari.

## Submission format

Create the private repository **webdev**  in **your** Github account, then commit `index.html`, `style.css`, and an `assets` folder containing images and font files (if any). 

❗ This task is to be reviewed through cross-check. Submission format will be announced soon.


## Technical requirements

Layout width is 1600px.
1. Either horizontally center the entire page with equal margins on both sides.
2. Or stretch container blocks screen-wide, except background image blocks.

"Interactive" means that an element triggers a visual effect or an animation on some user actions, i.e. mouse hover (your choice: cursor animation, background color change, darkening, underscoring, typeface change). Using JavaScript to process user events is not required in this task. Typically, these effects are implemented using `:hover` pseudo-class and the following properties:
- `cursor: pointer`,
- `background`,
- `text-decoration: underline`,
- `color`.


#### 1. **Header** (`<header>` contains only logo and the navbar):
- Navbar must be interactive. First element must be highlighted.
- Logo is centered.
- The page must contain one `<h1>` element with `webdev` text in it. You decide where to place it.
- Header scrolls with the rest of the page - it is not sticky.
- Image must be a background.


#### 2. **Your Life** Block
- The `get started` button must be interactive.
- Social network buttons (icons) must be interactive
- Image must be a background.


#### 3. **Rappresent** Block
- The text block contains an important part in bold. An appropriate logical element must be used for it. 
- The `get started` button must be interactive.
- Content image must maintain its position.


#### 4. **Our Community** Block
- `1`, `/`, `5` must be separate elements.
- Arrows must be interactive.
- This block consists of two multi-column layouts:
  1. A two-column layout: on the left - a user icon and text, on the right - a column that is itself a multi-column layout with images.
  2. A three-column layout. Columns contain images (with same widths). Note the third overflowing screen borders. It must be clipped using CSS styles.
  
  
#### 5. **Implement** Block
- The text block contains an important part in bold. An appropriate logical element must be used for it. 
- The `learn more` button must be interactive.
- Content image must maintain its position.
  
  
#### 6. **Subscribe** Block
- Image must be a background.
- The check icon with a green background must be interactive.
- The `your email` field must have validation.


#### 7. **Download** Block
- `apple store`, `play store` and their icons must be interactive.


#### 8. **Footer** (`<footer>` contains text, logo and a navigation panel):
- There are separators between navigation items. 
- Navigation panel is interactive.


## Useful links

Fonts can be found here:

[Roboto, google fonts](https://fonts.google.com/specimen/Roboto)

They can be added either by downloading fonts locally, or by linking the url from google fonts. If you cannot find the typeface, replace it by another one (with a similar king of serif).
