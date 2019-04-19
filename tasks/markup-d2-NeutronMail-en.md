| Deadline  | Folder name |
|-----------|-------------|
| 21.04.2019 23:59 | NeutronMail |


# Homework: NeutronMail. Difficulty Level 2.

Create a web page, strictly according to:

PSD:

**[NeutronMail PSD](https://www.dropbox.com/s/t100g6172y0yxv1/neutronmail.psd?dl=0)**

JPG:

**[NeutronMail JPG](https://www.dropbox.com/s/13u9s7lmixckx6l/neutronmail.jpg?dl=0)**

The reference point here is a successful per-pixel comparison via Pixel Perfect extension.

*[PerfectPixel extension for chrome](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en)*

Browser Support: Google Chrome, Mozilla Firefox, Microsoft Edge.


## Procedure

To upload your HTML and CSS files, use your private RSS repository located at [https://github.com/rolling-scopes-school/your-nickname-2019Q1](https://github.com/rolling-scopes-school/your-nickname-2019Q1)

## Assessment criteria

If the task is fully completed, and no defects are found by mentor, you are awarded **100 points**. This concerns the markup and use of HTML and CSS.

You сan use any HTML and CSS in your solution. Fonts and images must be hosted locally in the `assets` folder.

Page only for desktop gives you up to 50 points. Responsive for at least 3 screen sizes you up to 100 points. This task is creative, so think of layout at media points.

1. Failure to submit on time may result in losing **up to 40 points** of the total homework score!
2. Failure to comply with the requirements of any task item may result in losing **3 to 10 points**.
3. Failure to comply with coding standards or syntax requirements may result in losing **up to 20 points**.
4. Failure to comply with the PSD template (except for nuances with fonts) may result in losing **up to 40 points**.
5. Not using **flexbox** or **grid** may result in losing **up to 40 points**.
6. No bootstrap!

## Terms of Reference

Preferable @media points:
1) 1800px - wrapper should be centered in case the resolution is bigger.
2) 1400px - when responsive less than 1800px main container should not affect. Social network icons and Customers block should float.
3) 1200px - when responsive less than 1400px content from both sides should float, but structure of layout sould be the same (lines, columns, blocks).
4) 800px or 768px - when responsive less than 1200px blocks sequence and layout structure could be changed. Lines can dissapear, but all blocks with contet inside should be visible.
5) 540px or 480px or 420px - when responsive less than previous media some content can be hidden, some can be restyled.
6) Less than previous media - structure should have mobile view, with simple menu view and only necessary content available.

“Interactive“ means effects or animations depending on user's actions, like on hover or on click.

1. Header.
- Interactive nav.
- Think of where `h1` should be used.
- Gradients could be applied approximately. No need to make them 100% identical
- Buttons and icons should be positioned accurately on desktop version.

2. Main.
- Thin lines must not be images. Think of html elements and css properties to use. 
- Care about icons, fonts and colors.

3. Footer
- Email addresses must be clickable as 'mailto'.
- Care about breadcrumbs (slashes between social links). Thay should not be selected as other text does. Example:
![breadcrumbs](data:image/png;base64,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 "breadcrumbs")

## Useful links

Responsive web design article:
https://dev.to/drews256/ridiculously-easy-row-and-column-layouts-with-flexbox-1k01

Video about css-recipes-and-layouts:
https://www.youtube.com/watch?v=k2GtDJKC6HQ

To simplify work with CSS syntax and selectors, you can use CSS3 generator at:
http://css3generator.com/

## If you don't have Photoshop to work with .psd files
There’s a good design tool: https://studio.psdetch.com/
No sign-up is required, just click the “open” button or drag&drop the downloaded PSD template. Yes, its functionality is rather limited, but it is perfectly suitable for work with layers.
If you need to extract an image, the “export” function is available.
It is perfectly functional to meet all the needs you would encounter in this homework.

However, if you lack some of the functionality when using the previous service, give [Photopea](https://www.photopea.com/) a try.
No sign-up is required, too. It can handle .psd, .sketch and a variety of other formats.
It also supports work with layers and export operations (including .svg format).
Another advantage is that its interface is very similar to that of Photoshop.
