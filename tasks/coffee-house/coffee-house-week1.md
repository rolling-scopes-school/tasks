## Coffee-House. Week-1 - Fixed Layout

### Main Task Description and Requirements

- [Detailed Description](coffee-house.md)

You need to create `home` and `menu` pages according to the [Design in Figma](https://www.figma.com/file/SAoBmuOqTfguehdT4IFRxQ/Coffee-House?type=design&node-id=0-1&mode=design&t=qis81E9Ovgx47eVl-0) - **only \[D\] Home** and **\[D\] Menu \[1440\] > Coffee** in **\[D\] Desktop 1440px** group.
The content width of 1440px should not change when resizing the browser window.

[Prototype in Figma](https://www.figma.com/proto/SAoBmuOqTfguehdT4IFRxQ/Coffee-House?page-id=0%3A1&type=design&node-id=216-1349&viewport=875%2C385%2C0.03&t=rqlxorgzq8m3fnhO-1&scaling=min-zoom&starting-point-node-id=216%3A1349)

## Workflow

1. The task should be completed in private repository of the school. [How to work with a school's private repository](https://docs.rs.school/#/private-repository)
2. Create a new branch named `coffee-house` from `main` branch. Create a folder `coffee-house` in the created branch. Place your code in this folder.
3. Complete the task.
4. Ensure your work meets the [CrossCheck Criteria](#crosscheck-criteria).
5. Independently evaluate your work according to the provided [Criteria for Evaluation](#criteria-for-evaluation), keeping in mind the [Specifics of Verifying Layout](#specifics-of-verifying-layout).
6. Deploy your work to gh-pages. For example, create and merge a Pull Request from the `coffee-house` branch into `gh-pages` branch. The title of the Pull Request can be chosen at your discretion. A description for this Pull Request is not necessary.
7. Once you have completed your work, open a Pull Request from the `coffee-house` branch to the `main` branch. Give the Pull Request a title based on the task name. Provide a description for the Pull Request following [template](https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr).
   There is no need to merge this Pull Request.
8. Submit the deployment link of your project in the "Cross-Check Submit" section of the [RS APP](https://app.rs.school/).
9. After the task deadline has passed, the cross-check phase will start, lasting three days. To earn points for the task, you must review all the projects assigned to you for cross-checking and submit your review results in the "Cross-Check Review" section of the [RS APP](https://app.rs.school/).

### CrossCheck Criteria (100 points)

1. Checking validation of pages: **+18**
   - The layout for both pages is validated and error-free according to the W3C Validator (https://validator.w3.org/): **+12** (6 points per page)
     Valid markup of checked page corresponds to the message "Document checking completed. No errors or warnings to show." In this case, we assign the full points for the checked page (+6). If there are `warnings` but no `errors`, we assign half of the points (+3) for the checked page
   - Favicon is added to each page: **+2**
   - Each page has only one `<h1>` element: **+2**
   - The URL of the `menu` page differs from the URL of the `home` page (e.g. `your-site.com` for the `home` page and `your-site.com/menu` for the `menu` page): **+2**
2. The layout matches the design: **+40**
   - `<header>` block on each page: **+4**
   - `Enjoy` block on `home` page: **+6**
   - `Favourites Coffee` block on `home` page: **+6**
   - `About` block on `home` page: **+6**
   - `Mobile App` block on `home` page: **+6**
   - `Menu` block on `menu` page: **+6**
   - `<footer>` block on each page: **+6**
3. CSS Requirements: **+10**
   - For positioning images in `About` block on `home` page and products in `Menu` block on `menu` page used **Flexbox** or **Grid Layout**: **+4**
   - When scaling the browser page (<100%) or increasing the page width (>1440px), the layout of both pages is centered rather than shifted to the side and not stretched across the entire width: **+4**
   - The background color **Body** stretches across the entire width of the page: **+2**
4. Interactivity: **+32**
   - Navigation elements (except `Contact us`) lead to corresponding blocks on `home` page (anchor links): **+4**
   - `Contact us` in navigation panel links to the `<footer>` block on its own page (anchor link): **+2**
   - Smooth scrolling with anchor links: **+2**
   - When clicking on the **Menu** buttons in `header` and `Enjoy` block on `home` page, it navigates to the `menu` page: **+2**
   - The **Menu** button in `header` on `menu` page is non-interactive: **+2**
   - When clicking on the **Logo** in `header`, it navigates to the `home` page: **+2**
   - The active **Coffee** button in `Menu` block of `Menu` page is non-interactive: **+2**
   - Each Coffee-card in the `Menu` section of the `Menu` page is interactive when hovering over any area of the card: **+4**
   - In the `<footer>` block, clicking on the link with phone number (all area including icon) should initiate a phone call: **+2**
   - In the `<footer>` block, clicking on the link with the address (all area including icon) should open a new browser tab with Google Maps displaying any location of your choice: **+2**
   - Interactivity of links and buttons is implemented according to Figma layout. Interactivity includes not only changing cursor's appearance, for example, using the `cursor: pointer` property, but also the use of other visual effects, such as changing the background color or font color, following the **Styleguide** in Figma layout: **+4**
   - Mandatory requirement for interactivity: smooth change in the appearance of an element on hover, without affecting adjacent elements: **+4**

### Penalties

1. If the layout of the entire design or individual blocks is implemented using images, this will result in a penalty of **-100 points**.
2. The use of frameworks, libraries, and technologies that are prohibited in the technical requirements will also result in a penalty of **-100 points**.

## Criteria for Evaluation

**Maximum score for the task: 100 points**

The scoring for each requirement is detailed in the [CrossCheck Criteria](#crosscheck-criteria) section.
Penalties are outlined in the [Penalties](#penalties) section.

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

- **Coffee-House. Week-1 - Fixed Layout** task is evaluated through a cross-check process.
- Upon receipt of the task and prior to the submission deadline, proceed to the RS App at https://app.rs.school/. Navigate to **Cross-Check: Submit**, select the appropriate task from the dropdown list, and enter the URL of your deployed website into the **Solution URL** field. Then click the **Submit** button.

## Submit Recommendations

- Aim to submit early once the submission option becomes available in the RS App. You are free to make additional changes up until the deadline.
- Given that the project is contained within a private repository, there's no need to share repository or pull request links as reviewers will not have access to them. Private repositories are visible only to you, the course administrators, and any assigned mentors.
- Verify that the deployed website link is functional, especially when accessed in the browser's incognito mode.

## Task Evaluation

- Follow the instructions for conducting a cross-check available at: https://docs.rs.school/#/cross-check-flow
