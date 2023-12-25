#### [Stage#1](../../) > [Clean Code S1E1](../)

# Code Quality Manual

- [Why?](#Why)
- [Common approaches](#Common-approaches)
  - [1. DRY — _Don't Repeat Yourself_](#1-dry--_dont-repeat-yourself_)
  - [2. KISS — _keep it short simple / keep it simple, stupid_](#2-kiss--_keep-it-short-simple--keep-it-simple-stupid_)
  - [3. YAGNI — _You ain't gonna need it_](#3-yagni--_you-aint-gonna-need-it_)
  - [4. Comments](#4-comments)
    - [4.1 TODOs](#41-todos)
  - [5. Trailing whitespaces\_](#5-trailing-whitespaces)
  - [6. Files naming](#6-files-naming)
  - [Continue](#Continue)

## Why?

Easily maintainable readable code is what any experienced developer wants. This is code that is easy to read in two months, six months, a year or more after writing it, not only for the author, but also for any other programmer. And since in most cases code is developed in teams - your teammates should be able to easily understand your piece of application without making efforts to decipher the written logic.

In the same way, you will be much more comfortable to understand someone else's code if it is written as clearly as possible and conforms to a common stylistic standard accepted in the team.

But you might ask, how do code styling rules (for example, the choice of `'` or `"` quotation marks and letter case) affect its readability?

Very briefly: directly.

A bit longer:

As you write code in one style, you get used to that writing. The neurons of your brain instantly recognize that there is a class behind a capitalized variable, and a locally modifiable variable behind a small-letter word. You also don't feel irritation when you see some code written by another programmer who uses the same style, and this is very important. Reading someone else's code is not always a pleasant task itself, but if this code also causes irritation... In general, there are enough difficulties in a programmer's life already, so you should not create additional ones for yourself.

One more reason - a single standard saves time on writing code. You don't spend a minute thinking about which case to use to name a variable and which writing style to choose, but write according to the accepted style.

## Common approaches

### 1. DRY — _Don't Repeat Yourself_

or **DIE** — _Duplication Is Evil_

The principle urges you not to repeat yourself when writing code. Everything you write in a project should be defined only once.
If this principle is not followed, the programmer will be forced to make changes in several repeating code fragments instead of one. Also, duplicated code leads to unwanted code build-up and thus makes it harder to understand and read.

<details>
    <summary>
    Wanna know more!
    </summary>

**The history:**
The principle was first mentioned in the book ["The Pragmatic Programmer" by Andrew Hunt](https://ideafix.name/wp-content/uploads/stuff/book51.pdf) (1999). However, even before the book was published, it had been widely known and widely used. At the same time "The Pragmatic Programmer" precisely defined the principle and gave it a name.

In the book DRY is described as:

> "Every piece of knowledge must have a single, unambiguous,
> authoritative representation within a system".

where "piece of knowledge" can be understood as a functional, logically completed piece of code for your application or algorithm.

</details>

**Examples:**

<details>
	<summary>
		1. CSS: Selectors grouping
	</summary>

```css
h1 {
  color: #ff0000;
  font-family: Arial;
}
h2 {
  color: #ff0000;
  font-family: Arial;
}
h3 {
  color: #ff0000;
  font-family: Arial;
}
h4 {
  color: #ff0000;
  font-family: Arial;
}
```

This code can be refactored using selectors grouping:

```css
h1,
h2,
h3,
h4 {
  color: #ff0000;
  font-family: Arial;
}
```

</details>

<details>
	<summary>
		2. CSS: Move repeating style pieces inside classes
	</summary>

If a single set of CSS properties defines the style of several elements on a page, these elements are usually combined into a single CSS class:

```css
p {
  margin-bottom: 10px;
  text-indent: 10px;
}

/* Re-used styles */
.quotation {
  font-family: "Helvetica";
  font-style: italic;
  text-indent: 20px;
}

.bold-text {
  font-weight: bold;
}
```

```html
<section>
  <h2 class="bold-text">A book</h2>
  <p>
    I don't know what to write here, but it's definitely the first paragraph.
  </p>
  <p class="quotation">«Hello world»</p>
  <p>
    I still don't know what to write here, but it's definitely the second
    paragraph.
  </p>
  <p class="quotation">«Hello world 2»</p>
  <p>Just some common bla-bla text :).</p>
</section>
```

</details>

<details>
	<summary>
		3. JS: Cycles
	</summary>

```js
// non DRY code
console.log("corn");
console.log("pita");
console.log("potato");
console.log("tortilla");
```

```js
// DRY code
const chips = ["corn", "pita", "potato", "tortilla"];

for (let i = 0; i < chips.length; i++) {
  console.log(chips[i]);
}
```

</details>

<details>
	<summary>
		4. JS: Functions
	</summary>

It is convenient to put duplicated logic into functions.

```js
const today = new Date();
const weekday = today.toLocaleDateString("en-US", { weekday: "long" });

// non DRY code
if (weekday === "Sunday" || weekday === "Saturday") {
  console.log(`Today is ${today} so my day plan includes: sleep, eat, rest`);
} else {
  console.log(`Today is ${today} so my day plan includes: work, work, work`);
}

// DRY code
const today = new Date();
const weekday = today.toLocaleDateString("en-US", { weekday: "long" });

if (weekday === "Sunday" || weekday === "Saturday") {
  logDayPlan(today, "sleep, eat, rest");
} else {
  logDayPlan(today, "work, work, work");
}

function logDayPlan(weekday, tasks) {
  console.log(`Today is ${weekday} so my day plan includes: ${tasks}`);
}
```

</details>

### 2. KISS — _keep it short simple / keep it simple, stupid_

Sometimes the most correct solution is the simplest realization of a task without anything extra.

The simpler the code is, the easier it is to understand, both for you and for other people involved in its support. Simplicity means refraining from using tricky patterns and unnecessary complication.

<details>
    <summary>Examples:</summary>

An example of violating this principle is writing a separate function just to perform the addition operation or using a bitwise operator (right shift >> 1) to divide integers by 2.

`(4 >> 1) === (4 / 2)`

It may be more efficient for some program compilers than the usual `/ 2` division, but the code's clarity is very much reduced.

> Important note: For JS engines, the efficiency of the shift operation is offset by the expensive conversion to integer - [more here](https://thefullsnack.com/en/bitwise-javascript-fast.html).

By accepting this approach, you are doing clever coding and over-optimization. Both of them will make your code less and less clear in the long run, both to other developers and to yourself. Remember that you may have to deal with this code again in a month, two, or a year.

</details>

<details>
    <summary>Want to know more!</summary>

**History:**

A design principle used by the U.S. Navy in 1960. The KISS principle states that most systems work best if they remain simple rather than become more complex. Therefore, in design, simplicity should be a key goal and unnecessary complexity should be avoided. The phrase was associated with an aircraft designer Clarence Johnson (1910-1990). In the 1970s, the term "KISS principle" was widely used. Variations on the phrase include "Keep it Simple, Silly", "keep it short and simple", "keep it simple and straightforward", and "keep it small and simple."

[More on Wikipedia](https://en.wikipedia.org/wiki/KISS_principle)

</details>

### 3. YAGNI — _You ain't gonna need it_

Anything that is not required for the project to work as planned shouldn't be in it.

Simply put, you should not write functionality for the future if you don't need it right now. The desire to write code for the future can have many unpleasant consequences:

- You waste valuable time that could be used to add, test, and improve the functionality that is really required.
- New features should be tested and documented.
- Your unnecessary new features may later prevent you from adding new, but already required, features.
- If the code you write is eventually needed, it may not be the right code.
- Superfluous code may never be needed in the end.
- Superfluous code complicates your program (see KISS).
- Adding new unnecessary functionality can lead to a desire to add even more new unnecessary functionality, leading to a snowball effect.

[Martin Fowler about YAGNI](https://martinfowler.com/bliki/Yagni.html)

### 4. Comments

Explain code as necessary, where possible.

Use comments to explain the code:

- What does it cover?
- What is its purpose?
- Why is this solution used or preferred?

At the same time, don't try to cover all the code with comments. Using meaningful names of variables and functions, breaking code into logical fragments using functions, and other practices help to make code as readable and clear as possible without resorting to comments (self-documenting code).

Nevertheless, there are cases when you need explanatory comments no matter what your code looks like.

This is usually when you need to add context to a non-intuitive solution.

```js
// Not recommended
const MAIN_TEXT_COLOUR = "#000000"; // color for main text on the page
```

The comment here is unnecessary, because it explains the purpose of the constant, which is obvious from the name of the variable.

Here is a good example from the Lodash library:

```js
// Recommended

function addSetEntry(set, value) {
  // Don't return `set.add`, as this call chain doesn't work in Internet Explorer 11
  set.add(value);
  return set;
}
```

[More about comments](https://javascript.info/comments)

#### 4.1. TODOs

_Some part of comments_

TODO - from English _to do_ is used to denote a planned change directly in code comments. Usually this task refers to changes that are not urgent but rather important. That's why developers leave a kind of a reminder for themselves and other programmers right in the code.

- Use the prefix "TODO: ..." in front of such notation.
- Use only this type of notation for TODO tasks.

```js
// TODO: move this magic number (15 rows) to the configuration file
for (let i = 0; i < 15; i++) {
  const row = document.createElement("tr");
  table.appendChild(row);
}
```

```html
<!-- TODO: remove optional tags -->
<ul>
  <li>Apples</li>
  <li>Oranges</li>
</ul>
```

### 5. Trailing whitespaces

Spaces at the end of a line are unnecessary, and they complicate commit changes on Github (you see an extra line/change character that doesn't carry a meaningful change):

```html
<!-- Not recommended -->
<p>
  What?_

  <!-- Recommended -->
</p>

<p>Yes, please.</p>
```

### 6. Files naming

Use the same files naming styleguide in the project.

It is also convenient to separate files into `/js`, `/assets`, `/styles` (unless otherwise specified in the requirements). Component-by-component folder structure is also acceptable (meaning storing all the files related to a certain component in one folder).

```
/assets
	right-arrow-image.svg
	left-arrow-image.svg
/js
	app.js
	image-slider.js
/styles
	basic.css
	image-slider.css
/html
	index.html
	image-slider.html
```

### Continue

- [HTML and CSS recommendations - beginner level](html-and-css.md)
- [HTML and CSS recommendations - advanced level](html-and-css-extended.md)
- [Commits recommendations](commits.md)
