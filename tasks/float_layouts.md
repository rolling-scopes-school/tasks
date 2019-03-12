Deadline         | Folder Name    | Mark
-----------------|----------------|---------------
21.03.2016 09:00 | float_layouts  | 0.5

Developing Typical Layouts

**1st Layout.** A block with a picture or modal (when it's used as a log-in modal or an info message modal) is usually centered in the middle of a web page. The main advantage of such positioning is that the centered block doesn't depend on the screen resolution or width of the viewport. One way or another this kind of layer should be positioned in the center of the page.

**2nd Layout.** One of the most popular ways to make a web page is Double-Column Layout, where the left column contains all the links while he main content is in the right column. This type of layout is traditional and most users are familiar with it. To create columns you should use the CSS float property. Pay attention to the fact that the columns should have the same height regardless of the amount of the content they have (**N.B.**: don't use absolute positioning here).

**3rd Layout.** It is pretty similar to the 2nd type of layout except the navigation is on the right. In order to create a navigation column either use absolute positioning or set the display property of the columns to inline-block (you are free to choose).

**4th Layout.** Modifies the 2nd type of layout so that it becomes _flexible_ (elements should resize based on the width of the viewport. No horizontal scroll upon resize).

**5th Layout.** Usually footer comes after entire content of a web page and can be found only if you scroll down the page. In some cases it is desirable to make the footer always visible despite the height of the page and stick it to the bottom of the viewport.

**6th Layout.** You use three-column layout in cases when two columns are not enough or you need to divide content in a certain way. For instance, one column is with the main content, another column is for navigation and yet another one to display the news of the website or other information.

In order to fill up the page you can use Dummy text (Lorem Ipsum): http://www.lipsum.com/. Navigation columns (the yellow ones on the picture) may be filled with links.

**Don't use tables for layouts!**

Fixed-width layouts should be centered. You choose the width of the columns but take the proportions into consideration (don't make navigation column wider than main content column). Use the same colors as shown in the layout. You don't have to make gradient background.

Link to layouts: https://www.dropbox.com/sh/uvc0atccwl2zkms/AACLM_y825jsZZHe4-ueskCGa?dl=0
