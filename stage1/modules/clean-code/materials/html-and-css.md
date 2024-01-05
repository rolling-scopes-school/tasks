#### [Stage#1](../../) > [Clean Code S1E1](../)

# HTML & CSS. Beginner level

## 1. General HTML & CSS rules

### 1.1. Indentation

Always use two spaces for one indentation.
Do not use tabs for indentation and do not mix indentation types (tabs and spaces).

<details>
    <summary>Why?</summary>

Since there is a team of people working on projects, often the same project source code is displayed in different code editors. Problems start when different idempotent methods are used in the same file. Since each code editor displays tab indentation differently, a file which looks beautiful in your IDE may look quite ugly in another IDE.

</details>

```html
<ul>
  <li>Fantastic</li>
  <li>Great</li>
</ul>
```

```css
.example {
  color: blue;
}
```

### 1.2. Use lowercase

All HTML-tags, attributes and their values, CSS selectors, CSS properties and their values must be in lowercase. `<!DOCTYPE html>` is an exception to this rule.

```html
<!-- Not recommended -->
<SPAN CLASS="text-ROSE">Home</SPAN>

<!-- Recommended -->
<img src="google.png" alt="Google" />
```

```css
/* Not recommended */
color: #E5E5E5;

/* Recommended */
color: #e5e5e5;
```

### 1.3. Quotes in HTML & CSS files

Use double quotes instead of single quotes for HTML attributes and CSS properties.

```html
<!-- Not recommended -->
<a class='main-button main-button-secondary'>Sign in</a>

<!-- Recommended -->
<a class="main-button main-button-secondary">Sign in</a>
```

## 2. HTML

### 2.1. Formatting

Put every block, table or list element on a new line, regardless of their styles.

Indent each nested element, thus respecting the nesting ladder.
Inline elements can (but do not have to) be put to a new line and indented to improve code readability.

- Element `<em>` is used to highlight a substring on a paragraph. It can stay where it is, because it is an inline element.
- Element `<p>` is a block element, so it must be put on a new line.

```html
<blockquote>
  <p><em>Space</em>, the final frontier.</p>
</blockquote>
```

- List elements:

```html
<ul>
  <li>JavaScript</li>
  <li>TypeScript</li>
  <li>React.js</li>
</ul>
```

- Table elements:

```html
<table>
  <thead>
    <tr>
      <th scope="col">Income</th>
      <th scope="col">Taxes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$5.00</td>
      <td>$4.50</td>
    </tr>
    <tr>
      <td>$9.00</td>
      <td>$2.50</td>
    </tr>
  </tbody>
</table>
```

- Input and button elements are inline, but putting them on a new line will increase the code readability.

```html
<div>
  <input type="text" />
  <button>Add</button>
</div>
```

### 2.2. Document Type

Use HTML5.

HTML5 is recommended for all types of HTML files and is marked by the first tag in HTML file:
`<!DOCTYPE html>`

### 2.3. Named character references

Do not use named character references.

There is no sense in using named character references, such as `&mdash;`(&mdash;), `&rdquo;`(&rdquo;) or `&#x263a;`(&#x263a;), when all files use the same encoding (UTF-8).

The only exception to this rule - special symbols in HTML (e.g. `<` and `&`) and "invisible" characters (e.g. non-breaking space `&nbsp;`).

```html
<!-- Not recommended -->
<div>Euro sign: &ldquo;&eur;&rdquo;.</div>

 <!--  Recommended -->
<div>Euro sign: "€". </div>
```

### 2.4. 'type' attribute

Do not use `type` attribute when connecting styles and scripts (use it only if you connect not CSS or JS).

<details>
    <summary>Why?</summary>
    HTML5 uses 'text/css' and 'text/javascript' by default, so there is no need to use 'type' attribute.
    This works even in old browsers.
</details>

```html
<!--  Not recommended -->
<link rel="stylesheet" href="https://www.google.com/css/main.css" type="text/css" />

<!--  Recommended -->
<link rel="stylesheet" href="https://www.google.com/css/main.css" />
```

```html
<!--  Not recommended -->
<script
  src="https://www.google.com/js/gweb/analytics/autotrack.js"
  type="text/javascript"
></script>

<!--  Recommended -->
<script src="https://www.google.com/js/gweb/analytics/autotrack.js"></script>
```

## Optional recommendations:

### 2.5. HTML Line-Wrapping

Break long lines into multiple lines.

Breaking a long text into multiple lines may significantly increase code readability.

```html
<md-progress-circular
  md-mode="indeterminate"
  class="md-accent"
  ng-show="ctrl.loading"
  md-diameter="35"
>
</md-progress-circular>
```

## 3. CSS

### 3.1. Single style for selectors naming

Whichever style of name writing you choose, follow it throughout the project.

If you use BEM, stick to that notation without exception.

Otherwise, it is recommended that you use a hyphen to separate words in selectors and spell them in lower case, and all the words in the selector must be separated.

[More about BEM](https://en.bem.info/methodology/quick-start/)

```css
/* Not recommended: words “demo” and “image” are not separated */
.demoimage {
}

/* Not recommended: usage of underscore instead of hyphen */
.error_status {
}

/* Recommended */
#video-id {
}
.ads-sample {
}

/* Recommended for BEM */
.block-name__element-name_modifier-name {
}

.search-form__button {
}
```

### 3.2. Meaningful naming of identifiers and classes:

Use template or meaningful class names and identifiers.

Rather than relying on ciphers or describing an element's appearance, aim to convey the purpose behind its creation in the name of its class or identifier. Alternatively, assign a descriptive template name.

It is recommended to choose names that reflect the essence of the class because they are easier to understand and will likely not need to be changed in the future.

Template names are simply a naming option for elements that have no special purpose or are not distinct from their siblings. They are usually needed as "Helpers".

Using functional or template names reduces the need for unnecessary changes to the document or templates.

```css
/* Not recommended: has no meaning */
#yee-1901 {
}

/* Not recommended: appearance description */
.button-green {
}
.clear {
}
```

```css
/* Recommended: short and simple */
#gallery {
}
#login {
}
.video {
}

/* Recommended: template name */
.clearfix {
}
.alt {
}
```

### 3.3. Keep the names of identifiers and classes concise

For identifiers and classes, use names that are as long as necessary, but as short as possible.

Try to articulate exactly what the element is supposed to do, while being as concise as possible.

This use of classes and identifiers contributes to making code easier to understand and more efficient.

```css
/* Not recommended */
#navigation {
}
.atr {
}
```

```css
/* Recommended */
#nav {
}
.author {
}
```

### 3.4. Tag selectors

Do not use tag selectors (except for intentionally resetting the default styles).

It increases performance when applying styles by a browser.
[More details here](https://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/)

You may want to change the tag you use to some other tag in the future, in which case you'll have to track down all the places where that tag is used in the styles and replace it with the new one, while using classes / id helps abstract your styles from the details of your html layout.

```css
/* Not recommended */
body {
}
ul#example {
}
div.error {
}

/* Recommended */
.page {
}
#example {
}
.error {
}
```

### 3.5. Indentation in blocks

Always indent the content of blocks.

Always indent any content in a block (blocks are separated by curly braces `{}`).
For example for rules within rules or declarations, to show hierarchy and make the code easier to understand.

```css
@media screen, projection {
  html {
    background: #fff;
    color: #444;
  }
}
```

### 3.6. Space after property name

Always use one space after (not before) a colon in properties.

```css
/* Not recommended */
h3 {
  font-size :16px;
  font-weight:bold;
}

/* Recommended */
h3 {
  font-size: 16px;
  font-weight: bold;
}
```

### 3.7. Semicolon after properties

Put semicolon after each property.

```css
/* Not recommended */
.test {
  display: block;
  height: 100px
}

/* Recommended */
.test {
  display: block;
  height: 100px;
}
```

### 3.8. Separate selectors and properties

Separate selectors and properties with a line break.

Start each selector or rule on a new line.

```css
/* Not recommended */
a:focus,
a:active {
  position: relative; top: 1px;
}

/* Recommended */
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 3.2;
}
```

## [Advanced level](https://github.com/rolling-scopes-school/tasks/blob/master/stage1/modules/clean-code/materials/html-and-css-extended.md)
