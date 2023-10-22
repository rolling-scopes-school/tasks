## Coffee-House. Week-1 - Fixed layout  

- [Main task Description and Requirements](coffee-house.md)

You need to create `home` and `menu` pages according to the [Design in Figma](https://www.figma.com/file/SAoBmuOqTfguehdT4IFRxQ/Coffee-House?type=design&node-id=0-1&mode=design&t=qis81E9Ovgx47eVl-0) - **only \[D\] Home** and **\[D\] Menu \[1440\] > Coffee** in **\[D\] Desktop 1440px** group.  
The content width of 1440px should not change when resizing the browser window.  
  
[Prototype in Figma](https://www.figma.com/proto/SAoBmuOqTfguehdT4IFRxQ/Coffee-House?page-id=0%3A1&type=design&node-id=216-1349&viewport=875%2C385%2C0.03&t=rqlxorgzq8m3fnhO-1&scaling=min-zoom&starting-point-node-id=216%3A1349)

## Workflow

1. Task should be done in private school's repository. [How to work with a school's private repository](https://docs.rs.school/#/private-repository)
2. Create new branch `coffee-house` from `main`. Create a folder `coffee-house` in the created branch. Place your code in this folder.
3. Complete the task.  
4. Check if your work meets [Layout Requirements](#layout-requirements)  
5. Evaluate your work yourself according to the provided [Criteria for evaluation](#criteria-for-evaluation), taking into account the [Specifics of verifying layout](#specifics-of-verifying-layout) for compliance with the layout
6. To make the assessment of your work easier, print your self-assessment to the browser console. To do this, include the `index.js` file in your `*.html` file, write a `console.log()` function in it, and in parentheses within quotes, write your self-assessment points. Use the `\n` character to insert line breaks.  
For example:
```
console.log('1. First criteria's name: +5\n2.Second criteria's name: +10')
```
7. Deploy your work to gh-pages. For example, create and merge a Pull Request from the `coffee-house` branch into `gh-pages` branch. The Pull Request title can be arbitrary. There is no need to describe this Pull Request.  
8. After completing your work, open a Pull Request from the `coffee-house` branch to the `main` branch. Give the Pull Request a title based on the task name. Provide a description for the Pull Request following [template](https://docs.rs.school/#/pull-request-review-process?id=Требования-к-pull-request-pr)  
There is no need to merge this Pull Request. 
9. Submit the link to the deployment of your work in the [RS APP](https://app.rs.school/) section "Cross-Check Submit"
10. After the task deadline, the cross-check process begins. The cross-check lasts for three days. To receive points for the task, you need to review all the submissions sent for review and submit the results of the review in the "Cross-Check Review" section of [RS APP](https://app.rs.school/).

## Layout Requirements
1. Checking validation of pages: **+16**
   - The layout of both pages is valid: to check the validity of the layout, use the service https://validator.w3.org/ . **+12** (6 points per page)  
   Valid markup of checked page corresponds to the message "Document checking completed. No errors or warnings to show." In this case, we assign the full points for the checked page (+6). If there are `warnings` but no `errors`, we assign half of the points (+3) for the checked page
   -  Favicon is added to each page **+4**
2. The layout matches the design **+42**
   - `<header>` block on each page **+6**
   - `Enjoy` block on `home` page **+6**
   - `Favourites Coffee` block on `home` page **+6**
   - `About` block on `home` page **+6**
   - `Mobile App` block on `home` page **+6**
   - `Menu` block on `menu` page **+6**
   - `<footer>` block on each page **+6**  
3. CSS Requirements **+10**
   - For positioning images in `About` block on `home` page and products in `Menu` block on `menu` page used **Flexbox** or **Grid Layout** **+4**
   - When scaling the browser page (<100%) or increasing the page width (>1440px), the layout of both pages is centered rather than shifted to the side and not stretched across the entire width **+4**
   - The background color **Body** stretches across the entire width of the page **+2**
4. Interactivity **+32**
   - Navigation elements (except `Contacts`) lead to corresponding blocks on `home` page (anchor links) **+4**
   - `Contacts` in navigation panel links to the `<footer>` block on its own page (anchor link) **+2**
   - Smooth scrolling with anchor links **+2**
   - When clicking on the **Menu** buttons in `header` and `Enjoy` block on `home` page, it navigates to the `menu` page **+2**
   - The **Menu** button in `header` on `menu` page is non-interactive **+2**
   - When clicking on the **Logo** in `header`, it navigates to the `home` page **+2**
   - The active **Coffee** button in `Menu` block of `Menu` page is non-interactive **+2**
   - Each Coffee-card in the `Menu` section of the `Menu` page is interactive when hovering over any area of the card **+4**
   - In the `<footer>` block, clicking on the link with phone number (all area including icon) should initiate a phone call **+2**
   - In the `<footer>` block, clicking on the link with the address (all area including icon) should open a new browser tab with Google Maps displaying any location of your choice **+2**
   - Interactivity of links and buttons is implemented according to Figma layout. Interactivity includes not only changing cursor's appearance, for example, using the `cursor: pointer` property, but also the use of other visual effects, such as changing the background color or font color, following the **Styleguide** in Figma layout **+4**
   - Mandatory requirement for interactivity: smooth change in the appearance of an element on hover and click, without affecting adjacent elements **+4**

## Criteria for evaluation

**Maximum score for the task: 100 points**  

Scores for requirement points are specified in [Layout Requirements](#layout-requirements) section  

All disputed issues are resolved in favor of the student being assessed.

To make the assessment of your work easier, print self-assessment of your project in the browser console, listing points for each criteria you have completed.

## Penalties
1. Layout of the entire design or individual blocks is implemented using images -100
2. Using frameworks, libraries, and technologies prohibited in technical requirements -100

## Specifics of verifying layout
- Deviation from the layout of up to 10px horizontally and vertically is allowed, provided that the visual similarity between the layout and the markup is maintained.
- Use the [PerfectPixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=ru) extension as a tool to check the layout's conformity with the design
- When checking the layout using the PerfectPixel extension, make sure that the extension is set to a scale of 1, while the browser and operating system are set to a scale of 100%.
- If the screen resolution is greater than 1440 pixels, to check for compliance with the layout, it is sufficient to center horizontally the layout or manually align it with the top-left corner guides.
- If the screen resolution is 1440 pixels or less, use the device toolbar in Google Chrome browser in responsive mode for checking.
- Please note that when checking the work in a window with a width of 1440 pixels, the layout may compress by approximately 17 pixels. This happens because part of the layout space is consumed by the vertical scroll (17 pixels - the standard scroll size for Google Chrome).
- Each block and section are reviewed separately, meaning that shortcomings in the previous block do not carry over to next one. When transitioning to the review of the next block, we align it with overlaid layout.
- Regarding text, we check its alignment and spacing relative to the block's boundaries. Text sizes are only checked for height. Deviations in word width and letter spacing when comparing the layout and the markup are not considered errors if the correct font with the specified properties is used

## How to submit
- **Coffee-House. Week-1 - Fixed layout** task is checked by cross-check.  
- After receiving the task but before the deadline, please go to the RS App at https://app.rs.school/. Select **Cross-Check: Submit**, choose the relevant task from the dropdown menu, and add the link to the deployed version of your created website in the **Solution URL** field. Then, click **Submit** button.  

## Submit Recommendations
- It is recommended to submit the task as early as possible, as soon as the option becomes available in the rs app. After submission, you can continue working on the task until the deadline
- Since the project is being done in a private repository, there is no point in submitting a link to the repository or a pull request - the reviewer won't be able to see it. The private school repository is only visible to you, course admins, and your mentors when they become available 
- Make sure that the deployed link you provide opens in incognito mode of the browser  

## Task Evaluation
- Instructions for conducting a cross-check: https://docs.rs.school/#/cross-check-flow
