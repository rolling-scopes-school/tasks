## Christmas Shop. Part-1 - Fixed Layout

### Main Task Description and Requirements

- [Detailed Description](christmas-shop.md)

You need to create `Home` and `Gifts` pages according to the [Design in Figma](https://www.figma.com/design/zTB01BwWZVoXYK5atH3eZT/Cristmas-Shop) - only **Home / w1440** and **Gifts / w1440**.
The content width of 1440px should not change when resizing the browser window.

## Workflow

1. The task should be completed in private repository of the school. [How to work with a school's private repository](https://docs.rs.school/#/private-repository)
2. Create a new branch named `christmas-shop` from `main` branch. Create a folder `christmas-shop` in the created branch. Place your code in this folder.
3. Complete the task.
4. Ensure your work meets the [CrossCheck Criteria](#crosscheck-criteria).
5. Independently evaluate your work according to the provided [Criteria for Evaluation](#criteria-for-evaluation), keeping in mind the [Specifics of Verifying Layout](#specifics-of-verifying-layout).
6. Deploy your work to gh-pages. For example, create and merge a Pull Request from the `christmas-shop` branch into `gh-pages` branch. The title of the Pull Request can be chosen at your discretion. A description for this Pull Request is not necessary.
7. Once you have completed your work, open a Pull Request from the `christmas-shop` branch to the `main` branch. Give the Pull Request a title based on the task name. Provide a description for the Pull Request following [template](https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr).
   There is no need to merge this Pull Request.
8. Submit the deployment link of your project in the "Cross-Check Submit" section of the [RS APP](https://app.rs.school/).
9. After the task deadline has passed, the cross-check phase will start, lasting three days. To earn points for the task, you must review all the projects assigned to you for cross-checking and submit your review results in the "Cross-Check Review" section of the [RS APP](https://app.rs.school/).

### CrossCheck Criteria (110 points)

1. Checking validation of pages: **+18**
   - The layout for both pages is validated and error-free according to the W3C Validator (https://validator.w3.org/): **+12** (6 points per page)
     - Valid markup of checked page corresponds to the message _"Document checking completed. No errors or warnings to show."_ In this case, we assign the full points for the checked page (+6).
     - If there are `warnings` but no `errors`, we assign half of the points (+3) for the checked page
   - Favicon is added to each page: **+2**
   - Only one `<h1>` per each page: **+2**
   - The URL of the `Gifts` page differs from the URL of the `Home` page (e.g. `your-site.com` for the `Home` page and `your-site.com/gifts` for the `Gifts` page): **+2**
2. The layout matches the design: **+46**
   - `<header>` on each page: **+4**
   - `Hero` section on `Home` page: **+6**
   - `About` section on `Home` page: **+6**
   - `Slider` section on `Home` page: **+6**
   - `Best Gifts` section on `Home` page: **+6**
   - `CTA` section on `Home` page: **+6**
   - `Gifts` section on `Gifts` page: **+6**
   - `<footer>` on each page: **+6**
3. CSS Requirements: **+10**
   - For positioning gifts in `Best Gifts` section on `Home` page and gifts in `Gifts` section on `Gifts` page used **Flexbox** or **Grid Layout**: **+4**
   - When scaling the browser page (<100%) or increasing the page width (>1440px), the layout of both pages is centered rather than shifted to the side and not stretched across the entire width: **+4**
   - The empty spaces around the layout are filled with white color: **+2**
4. Interactivity: **+36**
   - Navigation elements (except `CONTACTS`) lead to corresponding sections on `Home` page: **+4**
   - `CONTACTS` in navigation panel links to the `<footer>` on its own page: **+2**
   - Smooth scrolling with anchor links: **+2**
   - When clicking on the **GIFTS** link in `<header>` and **Explore Magical Gifts** button in `Hero` and `CTA` sections on `Home` page, it navigates to the `Gifts` page: **+2**
   - The **GIFTS** link in `<header>` on `Gifts` page is non-interactive and don't have a hover effects: **+2**
   - When clicking on the **Logo** in `<header>`, it navigates to the `Home` page: **+2**
   - The active **ALL** tab in `Gifts` section of `Gifts` page is non-interactive and don't have a hover effects: **+2**
   - Each Gift-card in the `Gifts` section of the `Gifts` page, `Best Gifts` section on `Home` page and cards in `<footer>` is interactive when hovering over any area of the card: **+6**
   - In the `<footer>`, clicking on the card **CALL US** should initiate a phone call: **+2**
   - In the `<footer>`, clicking on the card **WRITE US** should open the mail client: **+2**
   - In the `<footer>`, clicking on the card **MAGIC FOREST** should open a new browser tab with Google Maps displaying any location of your choice: **+2**
   - In the `<footer>`, clicking on the link **Made in Rolling Scopes School** should open the [school's website](https://rs.school/) in a new tab: **+2**
   - Interactivity of the links and buttons is implemented according to the Figma layout. Interactivity includes not only changing cursor's appearance, for example, using the `cursor: pointer` property, but also the use of other visual effects, such as changing the background color or font color, following the **Styleguide** in the Figma layout. If the interactivity is not specified in the **Styleguide**, `cursor: pointer` property is enough: **+4**
   - Mandatory requirement for interactivity: smooth change in the appearance of an element on hover, without affecting adjacent elements: **+2**

### Penalties

Penalties for the task are assigned by the course curators, not by students. An imposed penalty results in zero points for the task. If you believe there's a reason to apply any of the following penalties in the work you're evaluating, please direct message the link to it to one of the curators:

1. The layout of the entire design or individual blocks is implemented using images, except in cases where the image is specifically required by the design.
2. The use of frameworks, libraries, and technologies that are prohibited in the [Technical Requirements](./christmas-shop.md#technical-requirements).

## Criteria for Evaluation

**Maximum score for the task: 110 points**

The scoring for each requirement is detailed in the [CrossCheck Criteria](#crosscheck-criteria) section.

Any disputed issues should be resolved in favor of the student being assessed.

## Specifics of Verifying Layout

- A deviation of up to 10px horizontally and vertically from the layout is permissible as long as visual congruity between the design and the markup is preserved.
- Utilize the [PerfectPixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=ru) Chrome extension to verify alignment with the design.
- When using the PerfectPixel extension, ensure it is set to a scale factor of 1, and that your browser and operating system are set to 100% scale.
- If the screen resolution is greater than 1440 pixels, to check for compliance with the layout, it is sufficient to center horizontally the layout or manually align it with the top-left corner guides.
- If the screen resolution is 1440 pixels or less, use the device toolbar in Google Chrome browser in responsive mode for checking.
- Please note that when checking the work in a window with a width of 1440 pixels, the layout may compress by approximately 17 pixels. This happens because part of the layout space is consumed by the vertical scroll (17 pixels - the standard scroll size for Google Chrome).
- Each block and section should be evaluated independently; deficiencies in one block should not affect the assessment of subsequent blocks. Start each new block's review with it aligned to the overlaid layout from PerfectPixel.
- For text, check its alignment and spacing within the confines of the block. Text sizes should be checked only for their height. Variations in word width and letter spacing are not considered errors as long as the correct font with specified properties is used.

## How to Submit

- **Christmas Shop. Part-1 - Fixed Layout** task is evaluated through a cross-check process.
- Upon receipt of the task and prior to the submission deadline, proceed to the RS App at https://app.rs.school/. Navigate to **Cross-Check: Submit**, select the appropriate task from the dropdown list, and enter the URL of your deployed website into the **Solution URL** field. Then click the **Submit** button.

## Submit Recommendations

- Aim to submit early once the submission option becomes available in the RS App. You are free to make additional changes up until the deadline.
- Given that the project is contained within a private repository, there's no need to share repository or pull request links as reviewers will not have access to them. Private repositories are visible only to you, the course administrators, and any assigned mentors.
- Verify that the deployed website link is functional, especially when accessed in the browser's incognito mode.

## Task Evaluation

- Follow the instructions for conducting a cross-check available at: https://docs.rs.school/#/cross-check-flow
