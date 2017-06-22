---
layout: documentation
type: friendsoftrowel
title: Modals
library: friendsOfTrowel/modals
permalink: /documentation/friends-of-trowel/modals/
affix: true
---

## Download

You can fetch *Trowel Modals* with *npm*, *yarn* or *bower*.

```bash
# With bower
$ bower install --save trowel-modals

# With npm
$ npm install --save trowel-modals

# With yarn
$ yarn add trowel-modals
```

You can also download a zip archive [right here](https://github.com/FriendsOfTrowel/Modals/archive/master.zip).

## Installation

### *Scss*
The main scss file to include to your main `.scss` file is located at the `./src/scss/modals.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel core (need to be imported first)
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Modals
@import './path/to/dependencies/trowel-modals/src/scss/modals';
```

### *JavaScript*
You have several javascript files for different use cases :
* The browser ready file is available at `./dest/javascript/modals.js` (a minified version exists at `dest/javascript/modals.min.js`)
* The script written in es2015 and ready to `import` is available at `./src/javascript/modals.js`

## Usage

## Sass reference

### Syntax variables

You can override the global syntax config for a specific component with the following variables

{% include doc/scss-reference-thead.md %}
| `$modals--syntax` | `null` | syntax config for `.modal` |

### Component variables

{% include doc/scss-reference-thead.md %}
| `$modals--font-size` | `1rem` | set the font-size property |
| `$modals--font-family` | `null` | set the font-family property |
| `$modals--font-weight` | `null` | set the font-weight property |
| `$modals--text-transform` | `null` | set the text-transform property |
| `$modals--letter-spacing` | `null` | set the letter-spacing property |
| `$modals--line-height` | `null` | set the line-height property |
| `$modals--text-align` | `null` | set the text-align property |
| `$modals--text-decoration` | `null` | set the text-decoration property |
| `$modals--color` | `null` | set the color property |
| `$modals--background` | `null` | set the background property |
| `$modals--background-color` | `rgba(0, 0, 0, 0.5)` | set the background-color property |
| `$modals--z-index` | `1050` | set the z-index property |
| `$modals--transition` | `all 200ms ease-in-out` | set the transition property |
{% include doc/inner-heading-table.md title="Dialog" %}
{% include doc/scss-reference-tbody.md %}
| `$modals-dialog--max-width` | `500px` | set the max-width property for `.modal__dialog` |
| `$modals-dialog--margin` | `30px auto` | set the margin property for `.modal__dialog` |
{% include doc/inner-heading-table.md title="Content" %}
{% include doc/scss-reference-tbody.md %}
| `$modals-content--background-color` | `rgb(255, 255, 255)` | set the background-color property for `.modal__content` |
| `$modals-content--border-width` | `1px` | set the border-width property for `.modal__content` |
| `$modals-content--border-style` | `{{ page.trwl_theme.border_style }}` | set the border-style property for `.modal__content` |
| `$modals-content--border-color` | `{{ page.trwl_theme.colors.gray_medium }}` | set the border-color property for `.modal__content` |
| `$modals-content--border-radius` | `{{ page.trwl_theme.border_radius }}` | set the border-radius property for `.modal__content` |
| `$modals-content--box-shadow` | `null` | set the box-shadow property for `.modal__content` |
{% include doc/inner-heading-table.md title="Header" %}
{% include doc/scss-reference-tbody.md %}
| `$modals-header--background-color` | `null` | set the background-color property for `.modal__header` |
| `$modals-header--border-bottom-width` | `$modals-content--border-width` | set the border-bottom-width property for `.modal__header` |
| `$modals-header--border-bottom-style` | `$modals-content--border-style` | set the border-bottom-style property for `.modal__header` |
| `$modals-header--border-bottom-color` | `$modals-content--border-color` | set the border-bottom-color property for `.modal__header` |
| `$modals-header--padding` | `{{ page.trwl_theme.padding_y }} {{ page.trwl_theme.padding_x }}` | set the padding property for `.modal__header` |
{% include doc/inner-heading-table.md title="Close" %}
{% include doc/scss-reference-tbody.md %}
| `$modals-close--font-size` | `1em` | set the font-size property for `.modal__close` |
| `$modals-close--font-weight` | `null` | set the font-weight property for `.modal__close` |
| `$modals-close--line-height` | `1` | set the line-height property for `.modal__close` |
| `$modals-close--color` | `null` | set the color property for `.modal__close` |
| `$modals-close--text-shadow` | `null` | set the text-shadow property for `.modal__close` |
| `$modals-close--opacity` | `0.5` | set the opacity property for `.modal__close` |
{% include doc/inner-heading-table.md title="Body" %}
{% include doc/scss-reference-tbody.md %}
| `$modals-body--background-color` | `null` | set the background-color property for `.modal__body` |
| `$modals-body--padding` | `{{ page.trwl_theme.padding_y }} {{ page.trwl_theme.padding_x }}` | set the padding property for `.modal__body` |
{% include doc/inner-heading-table.md title="Footer" %}
{% include doc/scss-reference-tbody.md %}
| `$modals-footer--background-color` | `null` | set the background-color property for `.modal__footer` |
| `$modals-footer--border-top-width` | `$modals-content--border-width` | set the border-top-width property for `.modal__footer` |
| `$modals-footer--border-top-style` | `$modals-content--border-style` | set the border-top-style property for `.modal__footer` |
| `$modals-footer--border-top-color` | `$modals-content--border-color` | set the border-top-color property for `.modal__footer` |
| `$modals-footer--padding` | `{{ page.trwl_theme.padding_y }} {{ page.trwl_theme.padding_x }}` | set the padding property for `.modal__footer` |
| `$modals-footer--text-align` | `right` | set the text-align property for `.modal__footer` |


## Javascript reference