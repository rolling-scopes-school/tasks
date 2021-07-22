# Homework: theyalow

Create a web page, strictly according to:

PSD:

**[theyalow PSD Desktop](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-1/theyalow/THEYALOW%20Desktop.psd)**

**[theyalow PSD Mobile](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-1/theyalow/THEYALOW%20mobile.psd)**

JPG:

**[theyalow JPG Desktop](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-1/theyalow/THEYALOW%20Desktop.jpg)**

**[theyalow JPG Mobile](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-1/theyalow/THEYALOW%20mobile.jpg)**



Browser Support: Google Chrome ( last version)

## Prerequisites

1. Create a new branch named *theyalow* in **your private RS** Github account and upload your HTML and CSS files.
2. The task will be checked by *cross-check*. So you should **deploy your solution** (preferably to gh-pages) and submit the **link to the hosted solution** into cross-check submit

**IMPORTANT!!!**
Failure to host your solution and/or not providing a correct link to the hosted solution will result in 0 points!

## Assessment criteria

If the task is fully completed, and no defects are found by reviwer, you are awarded **100 points**. This concerns the markup and use of HTML and CSS.

You must use either **Flex or Grid** in your solution. Fonts and images should be hosted locally in the `assets` folder.
The minimum width you have to support is 360px

## Global penalties
1. Failure to submit on time is equal to **failing task** at all
2. No hosted version of the solution - **-100 points**
3. Not using flex or grid atleast once - **-30 points**
5. Not following semantic standards **-1 point per semantically incorrect tag, up to -15 points**.
6. The solution is not responsive. **Choose one**:
    1. The layout breaks only on large screens (>1400px) **or** small screens (360 <= x <= 400) **-5 points**
    2. One of the version (mobile/deskop) breaks between its boundaries (test by resizing from 360px to 600px for example) **-10 points**
    3. The app doesn't take up the whole screen width (empty spaces visible on the sides at any circumstance) **-20 points**
    4. A lot of code is rewritten to be used by desktop/mobile only **-30 points**
    5. No mobile or desktop version present **don't evaluate the missing version**
7. General inconsistencies (more than 10 per solution). This includes: **-20 points**
    1.  very inaccurate placement of elements (>20px from the source)
    2.  wrong background used
    3.  wrong colors used
8. Pixel perfect is out of scope, but try to replicate the design as best as you can

## Terms of Reference

“Interactive“ means effects or animations depending on user's actions, like on hover, on click.
- Care about background styles.
- Care about lines and colors.

## Scoring
**You can score a maximum of 120, but the total after deducting penalties cannot be higher than 100**  
**Desktop (59 points)**

1. Header **16 points**
- All elements are clickable. **+2 points**
- Nav elements are interactive. **+2 points**
- Logo and text grouped (has one parent element that groups them together, not two separate elements). **+1 points**
- H1 tag used correctly **+1 points**
- The nav elements are replicated pixel perfectly **+10 points**

2. Main **38 points**
- Video element placed with the image placeholder. **+5 points**
- Slider button present, interactive **+2 points**
- Slider button placed using the **position** property **+2 points**
- Text is styled according to design **+2 points**
---
- 3 responsive columns **+3 points**
- The column width is equal **+2 points**
- using svg icons **+1 points**
- Shadow used **+3 points**
---
- Video element placed with image placeholder. **+5 points**
- All '+' should be interactive. **+2 points**
- Replicate slider, could be inactive **+3 points**.
- Every other block positioned correctly **+3 points**
---
- Bullet points styled **+2 points**
- 100% free banner present and in place **+3 points**

3. Footer **5 points**
- Shadow used **+3 points**
- Logo and text grouped (has one parent element that groups them together, not two separate elements). **+1 points**
- H1 tag used correctly **+1 points**

**Mobile  (53 points)**

1. Header **6 points**
- All elements are clickable. **+2 points**
- Nav elements are interactive. **+2 points**
- Logo and text grouped (has one parent element that groups them together, not two separate elements). **+1 points**
- H1 tag used correctly **+1 points**
2. Main **42 points**
- Video element placed with the image placeholder. **+5 points**
---
- 3 responsive columns. **+3 points**
- The column width is equal **+2 points**
- using svg icons **+1 points**
- Layered effect used on borders **+3 points**
---
- Video element placed with image placeholder. **+5 points**
- All '+' should be interactive. **+2 points**
---
- Using svg icons **+1 points**
- Chat bubbles present and aligned **+3 points**
- Chat bubbles perfectly replicated **+5 points**
- Input present **+2 points**
- Input perfectly replicated **+3 points**
- Form element used **+2 points**
- Clicking enter on the input submits the form **+2 points**
---
- 100% free banner present and in place **+3 points**

3. Footer **5 points**
- Shadow used **+3 points**
- Logo and text grouped (has one parent element that groups them together, not two separate elements). **+1 points**
- H1 tag used correctly **+1 points**

**General (8 points)**

1. Backgrounds **8 points**
- All sections have backgrounds **+3 points**
- All sections have correct backgrounds **+2 points**
- All fonts are correct **+3 points**


## Useful links

To simplify work with CSS syntax and selectors, you can use CSS3 generator at:
http://css3generator.com/

Fonts can be found here:  
[Open Sans](https://www.fontsquirrel.com/fonts/open-sans)  
[PT Sans Regular, PT Sans Norrow Bold](https://www.fontsquirrel.com/fonts/pt-sans)  
[Segoe WP](https://www.cufonfonts.com/font/segoe-wp)  
[Segoe WP Light](https://www.azfonts.net/families/segoe-wp-light.html)  
[Asap Regular](https://www.fontsquirrel.com/fonts/asap?q%5Bterm%5D=asap&q%5Bsearch_check%5D=Y)  
If you can't find font you are looking for, just replace it with same serif-style font.


## If you don't have Photoshop to work with .psd files
There’s a good design tool: https://studio.psdetch.com/
No sign-up is required, just click the “open” button or drag&drop the downloaded PSD template. Yes, its functionality is rather limited, but it is perfectly suitable for work with layers.
If you need to extract an image, the “export” function is available.
It is perfectly functional to meet all the needs you would encounter in this homework.

However, if you lack some of the functionality when using the previous service, give [Photopea](https://www.photopea.com/) a try.
No sign-up is required, too. It can handle .psd, .sketch and a variety of other formats.
It also supports work with layers and export operations (including .svg format).
Another advantage is that its interface is very similar to that of Photoshop.

