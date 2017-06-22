---
layout: documentation
type: friendsoftrowel
title: Alerts
library: friendsOfTrowel/alerts
permalink: /documentation/friends-of-trowel/alerts/
affix: true
---

## Download

You can fetch *Trowel Alerts* with *npm*, *yarn* or *bower*.

```bash
# With bower
$ bower install --save trowel-alerts

# With npm
$ npm install --save trowel-alerts

# With yarn
$ yarn add trowel-alerts
```

You can also download a zip archive [right here](https://github.com/FriendsOfTrowel/Alerts/archive/master.zip).

## Installation

### *Scss*
The main scss file to include to your main `.scss` file is located at the `./src/scss/alerts.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel core (need to be imported first)
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Alerts
@import './path/to/dependencies/trowel-alerts/src/scss/alerts';
```

### *JavaScript*
You have several javascript files for different use cases :
* The browser ready file is available at `./dest/javascript/alerts.js` (a minified version exists at `dest/javascript/alerts.min.js`)
* The script written in es2015 and ready to `import` is available at `./src/javascript/alerts.js`


### *Twig template*
The twig template ready to be `include` or `embed` is located at `./src/twig/alert.html.twig`.

## Usage

## Sass reference

### Syntax variables

You can override the global syntax config for a specific component with the following variables

{% include doc/scss-reference-thead.md %}
| `$alerts--syntax` | `null` | syntax config for `.alert` |


### Enables

You can avoid the generation of some css with those following variables

{% include doc/scss-reference-thead.md %}
| `$alerts-times--enabled` | `true` | enable the generation of style rules for the `.alert__times` block |


### Component variables

{% include doc/scss-reference-thead.md %}
| `$alerts--font-size` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;{{ page.trwl_theme.sizes.md }},<br>&nbsp;&nbsp;'-xs':&nbsp;{{ page.trwl_theme.sizes.xs }},<br>&nbsp;&nbsp;'-sm':&nbsp;{{ page.trwl_theme.sizes.sm }},<br>&nbsp;&nbsp;'-lg':&nbsp;{{ page.trwl_theme.sizes.lg }},<br>)</code> | sets the font-size property |
| `$alerts--font-family` | `{{ page.trwl_theme.font_family }}` | sets the font-family property |
| `$alerts--font-weight` | `null` | sets the font-weight property |
| `$alerts--text-transform` | `null` | sets the text-transform property |
| `$alerts--letter-spacing` | `null` | sets the letter-spacing property |
| `$alerts--line-height` | `{{ page.trwl_theme.line_height }}` | sets the line-height property |
| `$alerts--text-align` | `null` | sets the text-align property |
| `$alerts--text-decoration` | `null` | sets the text-decoration property |
| `$alerts--margin` | `0 0 1em` | sets the margin property |
| `$alerts--padding` | `{{ page.trwl_theme.padding_y }} {{ page.trwl_theme.padding_x }}` | sets the padding property |
| `$alerts--border-width` | `null` | sets the border-width property |
| `$alerts--border-style` | `null` | sets the border-style property |
| `$alerts--border-color` | `null` | sets the border-color property |
| `$alerts--border-radius` | `{{ page.trwl_theme.border_radius }}` | sets the border-radius property |
| `$alerts--color` | `rgb(255, 255, 255)` | sets the color property |
| `$alerts--box-shadow` | `null` | sets the box-shadow property |
| `$alerts--background` | `null` | sets the background property |
| `$alerts--background-color` | <code>(<br>&nbsp;&nbsp;'-primary':&nbsp;{{ page.trwl_theme.colors.primary }},<br>&nbsp;&nbsp;'-success':&nbsp;{{ page.trwl_theme.colors.success }},<br>&nbsp;&nbsp;'-warning':&nbsp;{{ page.trwl_theme.colors.warning }},<br>&nbsp;&nbsp;'-danger':&nbsp;{{ page.trwl_theme.colors.danger }},<br>)</code> | sets the background-color property |
| `$alerts--float` | `null` | sets the float property |
| `$alerts--width` | `null` | sets the width property |
| `$alerts--height` | `null` | sets the height property |
| `$alerts--max-width` | `null` | sets the max-width property |
| `$alerts--max-height` | `null` | sets the max-height property |
{% include doc/inner-heading-table.md title="Times" %}
{% include doc/scss-reference-tbody.md %}
| `$alerts-times--opacity` | `null` | sets the opacity property for `.alert__times` |
| `$alerts-times--float` | `right` | sets the float property for `.alert__times` |
| `$alerts-times--font-size` | `inherit` | sets the font-size property for `.alert__times` |
| `$alerts-times--font-weight` | `null` | sets the font-weight property for `.alert__times` |
| `$alerts-times--line-height` | `null` | sets the line-height property for `.alert__times` |
| `$alerts-times--color` | `inherit` | sets the color property for `.alert__times` |
| `$alerts-times--text-shadow` | `null` | sets the text-shadow property for `.alert__times` |
| `$alerts-times--box-shadow` | `null` | sets the box-shadow property for `.alert__times` |
| `$alerts-times--margin` | `null` | sets the margin property for `.alert__times` |
| `$alerts-times--padding` | `0 0 0.325em 0.825em` | sets the padding property for `.alert__times` |
| `$alerts-times--border-width` | `null` | sets the border-width property for `.alert__times` |
| `$alerts-times--border-style` | `null` | sets the border-style property for `.alert__times` |
| `$alerts-times--border-color` | `null` | sets the border-color property for `.alert__times` |
| `$alerts-times--border-radius` | `null` | sets the border-radius property for `.alert__times` |
| `$alerts-times--background-color` | `null` | sets the background-color property for `.alert__times` |