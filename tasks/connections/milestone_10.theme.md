## Milestone 10. Dark/Light theme.

**Score:** 50

To allow user change the appearance of the site to improve visual perception in varying levels of
ambient lightning.

### Visualization

The special button should be placed in the site header.
_Light_ version is default, when user visit site first time.

The visual presentation of each page for dark/light state could be made on your own.

Current state of switcher should be persisted in `localStorage`. When user visit site again the last
chosen option supposed to be applied to the site.

### Solution

Independent components can have their own styles based on some inputs, for example, custom button
has `@Input() disabled = false;` property and contains styles for that state based on specific class
in html - `<button [class.disabled]="disabled"></button>`

`.dark`/`.light` class name is set to the root element in the main component depending on switcher
in the header. The `:host-context()` pseudo-class selector is used in component style files to apply
specific css theme rules to the elements.

Actually, it does not matter what approach you choose indeed, the most preferable option would be
not to use services or decorators for that.

## Examination

### Profit

- chosen state is saved in `localStorage` and used/applied after reloading. User can refresh the
  page and see the same theme: **20 points**
- light/dark styles are applied to main page: **10 points**
- light/dark styles are applied to group dialog page: **10 points**
- light/dark styles are applied to personal conversation page: **10 points**
