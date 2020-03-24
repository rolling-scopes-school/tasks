| Deadline  | Folder name |
|-----------|-------------|
| 14.04.2020 18.00 | markup-1 |

# Homework: markup-1

Create web page, strictly according to:

**[Lambda restaurant layout](https://www.dropbox.com/s/xvhx2kxlvzxu5n0/Restaurant_2.psd?dl=0)**

## How to submit

Implemented layout (files/folders with the content) have to be pushed to *the markup-1* branch of **your repository**. Create a pull request and set your mentor as a reviewer.

```
*GitHub: go to your RS **private** repository. You can find one here - https://github.com/rolling-scopes-school/
*GitHub: fetch the repository to your machine(git clone or download)
*on your machine: open the repository with CMD and create a new branch **markup-1** (git checkout -b markup-1)
*on your machine: place your files and folders in this directory
*on your machine: create a commit then push the files to the **markup-1** branch (git add .) --> (git commit -m 'commit name') --> (git push origin markup-1)
*GitHub: create a pull request ('new pull request' button)
*GitHub: pick a master branch as a target branch (master <-- markup-1), set your mentor as a reviewer( click the **reviewers** label in the right corner and pick your mentor from the list)
*Github: click the **pull request** button
*Summary: in a nutshell, we are suggesting to merge markup-1 brunch with master brunch, and set our mentor as a **reviewer**.
```

## Success criteria

**100** - the maximum amount of points you can get for implementing this task

!Points - **0-10** shortcut meaning that if the criteria aren't met, the student gets **0** points, otherwise - **10** points; for the partial implementation of the feature the number of points to be set are to the mentor's judgment 

Points can be cut down in case of mistakes (described in the technical requirements)

## Technical Requirements

1. General:
    - the name of the HTML file should be *index.html*;
    - Create individual folders for images, fonts, styles. If all the files will be placed on the same level as 'index.html' file - **minus 10 points**;
    - The markup width should be 1600px. Hence the layout will be tested on the 1600px screen-width or higher. The markup should be centered. If you are going to implement the task on the device with screen width lower then 1600px, the scrollbar will appear, and It's Ok(you can use zoom out)(**points - 0-10**);

2. Semantic layout:
	 - HTML5 semantic tags should be used, such as header, nav, section, article, footer, form + fields, figure  (**points - 0-10**);
	 - Class names should be reasonable and correct, avoid names such as .right-column, .third-form, .left, .big. use more meaningful ones - .heading, .form-container, .wrapper, .menu-column. Usage of the pseudo-classes are very welcome (:first-child, last-child, etc.)(**points - 0-10**);
	 - Using id for styles will be considered as a mistake, **minus 5 points**

3. The logo should be implemented correctly. Don't forget to use *h1* tag on the page(**points - 0-5**);

4. Navigation should be implemented with a *nav* tag. Clickable parts of the menu should be *links*(**points - 0-5**);

5. Pay your attention to the fact that the background should be a graphic pattern, not just plain white(**points - 0-5**);

6. Fonts. You can find all the font for free (the links will be provided). The fonts should be imported properly. Don't forget about the font-weight, it also should be correct(**points - 0-10**);

7. Requirements for the blocks and columns:
	 - The case with more text than in the markup should be considered - just copy to the column bigger text(the position of the column or layout shouldn't change, limitation by overflow)(**points - 0-10**)
	 - You should consider the case when one more column is added. This column should appear under the first one or in the center of the next line or hidden by overflow property. It should not break the layout by being positioned as the visible third element out of the parent's borders(**points - 0-5**);
	 -  If you are going to use inline-block property, make sure that there is no free space between the elements(**points - 0-5**);

8. Images in *fine ingredients* section should be square or rectangle-shaped and should be processed by CSS tools(border, border-radius)(**points - 0-10**);

9. The form should be implemented with a *form* tag and with the proper tags inside of it. The input fields should be validated with basic browser validation for Email, and Name, Email and Date fields should be required. One of the field's name is incorrect, you should fix it for your application(**points - 0-10**);

10. The footer should be placed at the bottom of the page, meaning that if all the content but the footer will be deleted from the page, the footer still will be placed at the bottom(**points - 0-5**);

11.You should implement style effects for the hover events(which effect to use is up to you - for example, the color of the navigation button can change on hover)(**points - 0-5**);

The header can be fixed on the gradient background when scrolling, but the additional point will not be added for implementing this feature.

You may use any grid markup you want. Font-awesome can be used for icons.

Pre-processors and post-processors are not necessary. In case of using these tools, the final file still should be in *.css* format. **Libraries such as Bootstrap are forbidden**. The layout should be implemented by the student. Fine - **40 points**.

