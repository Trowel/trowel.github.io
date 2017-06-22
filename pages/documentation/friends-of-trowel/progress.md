---
layout: documentation
type: friendsoftrowel
title: Progress
library: friendsOfTrowel/progress
permalink: /documentation/friends-of-trowel/progress/
affix: true
---

## Download

You can fetch *Trowel Progress* with *npm*, *yarn* or *bower*.

```bash
# With bower
$ bower install --save trowel-progress

# With npm
$ npm install --save trowel-progress

# With yarn
$ yarn add trowel-progress
```

You can also download a zip archive [right here](https://github.com/FriendsOfTrowel/Progress/archive/master.zip).

## Installation

### *Scss*
The main scss file to include to your main `.scss` file is located at the `./src/scss/progress.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel core (need to be imported first)
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Progress
@import './path/to/dependencies/trowel-progress/src/scss/progress';
```


### *Twig template*
The twig template ready to be `include` or `embed` is located at `./src/twig/progres.html.twig`.

## Usage

## Sass reference

### Syntax variables

You can override the global syntax config for a specific component with the following variables

{% include doc/scss-reference-thead.md %}
| `$progress--syntax` | `null` | syntax config for `.progress` |

### Component variables

{% include doc/scss-reference-thead.md %}
`$progress--font-size` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;{{ page.trwl_theme.sizes.md }},<br>&nbsp;&nbsp;'-xs':&nbsp;{{ page.trwl_theme.sizes.xs }},<br>&nbsp;&nbsp;'-sm':&nbsp;{{ page.trwl_theme.sizes.sm }},<br>&nbsp;&nbsp;'-lg':&nbsp;{{ page.trwl_theme.sizes.lg }},<br>)</code> | sets the font-size property |
`$progress--font-family` | `null` | sets the font-family property |
`$progress--font-weight` | `null` | sets the font-weight property |
`$progress--text-transform` | `null` | sets the text-transform property |
`$progress--letter-spacing` | `null` | sets the letter-spacing property |
`$progress--text-decoration` | `null` | sets the text-decoration property |
`$progress--margin` | `0 0 1em` | sets the margin property |
`$progress--border-width` | `null` | sets the border-width property |
`$progress--border-style` | `null` | sets the border-style property |
`$progress--border-color` | `null` | sets the border-color property |
`$progress--border-radius` | `0.25em` | sets the border-radius property |
`$progress--box-shadow` | `null` | sets the box-shadow property |
`$progress--background-color` | `{{ page.trwl_theme.colors.gray_medium }}` | sets the background-color property |
`$progress--height` | <code>(<br>&nbsp;&nbsp;'-xs':&nbsp;0.5em,<br>&nbsp;&nbsp;'-sm':&nbsp;0.75em,<br>&nbsp;&nbsp;'default':&nbsp;1em,<br>&nbsp;&nbsp;'-lg': 1.5em,<br>)</code> | sets the height property |
`$progress--padding` | `0 {{ page.trwl_theme.padding_x }}` | sets the padding property |
`$progress--line-height` | `{{ page.trwl_theme.line_height }}` | sets the line-height property |
`$progress--color` | `rgb(255, 255, 255)` | sets the color property |
{% include doc/inner-heading-table.md title="Bar" %}
{% include doc/scss-reference-tbody.md %}
`$progress-bar--background-color` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;{{ page.trwl_theme.colors.primary }},<br>&nbsp;&nbsp;'-primary':&nbsp;{{ page.trwl_theme.colors.primary }},<br>&nbsp;&nbsp;'-success':&nbsp;{{ page.trwl_theme.colors.success }},<br>&nbsp;&nbsp;'-warning':&nbsp;{{ page.trwl_theme.colors.warning }},<br>&nbsp;&nbsp;'-danger':&nbsp;{{ page.trwl_theme.colors.danger }},<br>)</code> | sets the background-color property for `.progress__bar` |
`$progress-bar--padding` | `{{ page.trwl_theme.padding_y }} {{ page.trwl_theme.padding_x }}` | sets the padding property for `.progress__bar` |
`$progress-bar--font-size` | `0.8em` | sets the font-size property for `.progress__bar` |
`$progress-bar--justify-content` | `flex-end` | sets the justify-content property for `.progress__bar` |
`$progress-bar--align-items` | `center` | sets the align-items property for `.progress__bar` |
