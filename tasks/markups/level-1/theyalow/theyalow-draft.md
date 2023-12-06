| Deadline | Project name |
| -------- | ------------ |
| no       | theyalow     |

# Homework: theyalow. Difficulty Level 1.

Create a web page, according to:

PSD:

**[theyalow PSD Desktop](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-1/theyalow/THEYALOW%20Desktop.psd)**

**[theyalow PSD Mobile](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-1/theyalow/THEYALOW%20mobile.psd)**

JPG:

**[theyalow JPG Desktop](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-1/theyalow/THEYALOW%20Desktop.jpg)**

**[theyalow JPG Mobile](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-1/theyalow/THEYALOW%20mobile.jpg)**

The reference point here is a successful comparison via Pixel Perfect extension. "Perfect" means markup items are identcal to image layout pixel to pixel. There is a list of common cases:

- Major blocks should be positioned perfectly on given width of the screen.
- Images, logos and video elements if any should be positioned perfectly according to their place inside the visual block.
- Icons should keep perfect distance to the related text.
- If correct font is applied, check the height of the text - it should match the original. Width could vary. But, the common practice is to add letter-spacing property to correspong text in headings, motto or blockquotes.
- If there are multiple objects in row, and their width looks identical, than they should be equal by width. A few pixel differnce does not matter.
- Background or foreground slight shadows are not necessary to use. If you still want to use them, there are two solutions to admit. First is to merge layers in graphic redactor and use it as background image. Second is to add shadow as box-shadow the way you visually can handle it.

_[PerfectPixel extension for chrome](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en)_

Browser Support: **Google Chrome, Mozilla Firefox, Microsoft Edge**. It means, first we develop for Google Chrome, and use pixel perfect to check application fits. Then we check if Mozilla Firefox, Microsoft Edge do not visually break the styles.

## Procedure

Create a new private repository named _theyalow_ in **your** Github account and upload your HTML and CSS files.

## Assessment criteria

If the task is fully completed, and no defects are found by mentor, you are awarded **100 points**. This concerns the markup and use of HTML and CSS.

You must have only one HTML file and only one CSS file (or two CSS files, where second one holds the collection of _@font-face_ rules separately) in your solution. Fonts themselves and images must be hosted locally in the `assets` folder.

1. Failure to submit on time may result in losing **up to 40 points** of the total homework score!
2. Failure to comply with the requirements of any task item may result in losing **3 to 10 points**.
3. Failure to comply with coding standards or syntax requirements may result in losing **up to 20 points**.
4. Failure to comply with the PSD template (except for nuances with fonts) may result in losing **up to 40 points**.
5. Failure to match both desktop and mobile may result in losing **up to 50 points**.

## Terms of Reference

“Interactive“ means effects or animations depending on user's actions, like on hover or on click.

- Care about background styles.
- Care about lines and colors.
- Care about pointer cursor.

**Desktop**

1. Header (`<header>` holds logo and navbar only)

- Interactive navbar.
- There are 3 layers of background on navbar container.
- Logo image consists of 2 different images. Or you can merge them in graphic redactor and use as one image.
- Think of where `<h1>` should be used.

2. Main (not necessary `<main>`)

- Video element placed with image placeholder.
- Video controls could have default styles.
- Image with parrots should be added as single image.
- Slider buttons could be inactive, but should exist.
- (Next block)
- Block separators (black thin shadows) should exist. Shadows could have little inconsistency.
- 3 columns the same width with centered content.
- svg icons.
- (Next block)
- Video element placed with image placeholder.
- Video controls could have default styles.
- All '+' should be interactive.
- Customize range input slider, could be inactive.

3. Footer

- Logo image consists of 2 different images. Or you can merge them in graphic redactor and use as one image.

**Mobile**

1. Header

- Interactive navbar.
- Logo image consists of 2 different images. Or you can merge them in graphic redactor and use as one image.
- Think of where `<h1>` should be used.

2. Main

- Video element placed with image placeholder on full width of screen.
- Video controls could have default styles.
- Image with parrots should be added as single image.
- Swiper instead of slider (for our case, just hide the slider).
- (Next)
- Block separators (white lines with opacity) should exist. Opacity could have little inconsistency.
- 3 columns the same width with centered content.
- svg icons.
- (Next)
- Video element placed with image placeholder.
- All '+' should be interactive.
- Twitter messages should have the same design with 2 lines - message and author.
- Form has input field and submit button

3. Footer

- Logo image consists of 2 different images. Or you can merge them in graphic redactor and use as one image.

## Useful links

To simplify work with CSS3 cross-browser syntax and selectors, you can use CSS3 generator at:
http://css3generator.com/

Fonts can be found here:  
[Open Sans](https://www.fontsquirrel.com/fonts/open-sans)  
[PT Sans Regular, PT Sans Norrow Bold](https://www.fontsquirrel.com/fonts/pt-sans)  
[Segoe WP](https://www.cufonfonts.com/font/segoe-wp)  
[Segoe WP Light](https://www.azfonts.net/families/segoe-wp-light.html)  
[Asap Regular](https://www.fontsquirrel.com/fonts/asap?q%5Bterm%5D=asap&q%5Bsearch_check%5D=Y)  
If you can't find font you are looking for, just replace it with same serif-style font.

## If you don't have Photoshop to work with .psd files

There’s a good design tool: [Photopea](https://www.photopea.com/)
No sign-up is required, just click the “open” button or drag&drop the downloaded PSD template. Yes, its functionality is rather limited, but it is perfectly suitable for work with layers.
If you need to extract an image, the “download .png” or “download .svg” function is available.
It meets all the requirements for this homework.
