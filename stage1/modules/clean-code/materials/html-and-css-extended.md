#### [Stage#1](../../) > [Clean Code S1E1](../)

# HTML & CSS. Advanced level.

## 1. HTML

### 1.1. Semantics

Use HTML the way it was intended to be used.

Use tags as they should be used: `<h1-6>` for headings, `<p>` for paragraphs, `<a>` for links etc.
You should also use such elements as `<aside>`, `<section>`, `<article>`.

**Why?**

- This makes it easier to read, edit, and maintain code.
- Also, if your site opens on an e-book,
  semantic tags will help the parser parse your page elements into their intended components
  and display them correctly to the user.
- This is how you take care of all users:
  if the page is opened in the mode for people who can't see well, a special robot will read each element so the user can recognize the page content. This robot relies on the fair use of semantic tags.
  Otherwise, the reader will not be able to navigate through your site.
  (read more: [Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML))
- Search engines Google, Yandex, Bing use semantic tags as keywords with which they better recognize the internal content of a page,
  and therefore rank such pages higher in search results.
  The higher your page ranks in a search query, the more users will visit it.
  [More on SEO](https://developer.mozilla.org/en-US/docs/Glossary/SEO)

```html
<!-- Not recommended -->
<div onclick="goToRecommendations();">All recommendations</div>

<!-- Recommended -->
<a href="recommendations/"> All recommendations </a>
```

**It's good to learn:**

- [More about semantics here](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [and here](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [Usage advices](https://medium.com/@stasonmars/%D1%81%D0%B5%D0%BA%D1%80%D0%B5%D1%82%D1%8B-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D1%81%D0%B5%D0%BC%D0%B0%D0%BD%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B8%CC%86-%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B8-%D0%B2-html5-c7cd5e6f1ebb)

### 1.2. Media alternatives

Always specify alternative content for multimedia.

Try to specify alternative content for multimedia:
For example, for pictures, videos, or animations defined with canvas.

For pictures, this is a meaningful alternative text (alt),
and for video and audio, transcripts and captions if possible.

**Note!** If `alt` is redundant for a picture, or if it is used only for decorative purposes in places,
where CSS cannot be used, _use the empty alternate text_ `alt=""`.

**Why?**

- The `alt` attribute is incredibly useful for accessibility:
  screen reader programs read this description to their visually impaired users,
  to let them know what is displayed on the page.
- This same description is also used by search engines (Google, Yandex) to identify their content and display it in their search results.
  So, this is another way to increase the number of users of your page.
- Plus, the description from `alt` is displayed on the page,
  if the image cannot be loaded for any reason:
  bad connection, content blocking or broken resource link.
- [Read more](https://moz.com/learn/seo/alt-text)

```html
<!-- Not recommended -->
<img src="spreadsheet.png" />

<!-- Recommended -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot" />
```

The subtitle file is added using the `<track>` element:

```html
<video preload="auto" width="480" height="360" poster="cute-kitten-video.jpg">
  <source type="video/mp4" src="cute-kitten-video.mp4" />
  <source type="video/webm" src="cute-kitten-video.webm" />
  <track kind="captions" src="video-captions.vtt" />
</video>
```

## 2. CSS

### 2.1. BEM

Use BEM notation to form class names.

BEM (Block, Element, Modifier) is a component-based approach to web development. It is based on the principle of dividing an interface into independent blocks. It allows you to easily and quickly develop interfaces of any complexity and reuse existing code, avoiding "Copy-Paste".

BEM originated in Yandex, but has spread far beyond its borders.

Briefly, BEM is based on the idea of dividing any interface into blocks. The inseparable parts of the blocks are elements. Both have modifiers.

```html
<ul class="menu">
  <li
    class="
    menu__item"
  ></li>
  <li
    class="
    menu__item
    menu__item_active"
  ></li>
</ul>
```

As an example, let's look at the site menu. It can be in the header and on the side of the site - so it is a block. It has mandatory parts: menu list items, title - these are its elements. If some menu element is active, it is given a modifier.

#### Even more interesting things about BEM:

- Here: [BEM history and why do we need it](https://habr.com/ru/company/yandex/blog/276035/)
- And here: [First BEM steps and docs](https://en.bem.info/methodology/quick-start/)
- Also, here: [BEM for beginners. Easy and hard parts of development](https://medium.com/@innabelaya/%D0%B1%D1%8D%D0%BC-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%B0%D1%8E%D1%89%D0%B8%D1%85-%D0%BE%D1%87%D0%B5%D0%B2%D0%B8%D0%B4%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%BD%D0%B5%D0%BE%D1%87%D0%B5%D0%B2%D0%B8%D0%B4%D0%BD%D1%8B%D0%B5-%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%8B-%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B8-1a21d67cf840)
