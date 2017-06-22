---
layout: documentation
type: friendsoftrowel
title: Trowel-badges
library: friendsOfTrowel/badges
permalink: /documentation/friends-of-trowel/badges/
affix: true
---

## Download

You can fetch *Trowel Badges* with *npm*, *yarn* or *bower*.

```bash
# With bower
$ bower install --save trowel-badges

# With npm
$ npm install --save trowel-badges

# With yarn
$ yarn add trowel-badges
```

You can also download a zip archive [right here](https://github.com/FriendsOfTrowel/Badges/archive/master.zip).

## Installation

### *Scss*
The main scss file to include to your main `.scss` file is located at the `./src/scss/badges.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel core (need to be imported first)
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Badges
@import './path/to/dependencies/trowel-badges/src/scss/badges';
```

## Usage

## Sass reference

### Syntax variables

You can override the global syntax config for a specific component with the following variables

{% include doc/scss-reference-thead.md %}
| `$badges--syntax` | `null` | syntax config syntax` | `null `.badge` |

### Component variables

{% include doc/scss-reference-thead.md %}
| `$badges--font-size` | `0.75em` | set the font-size property |
| `$badges--font-family` | `{{ page.trwl_theme.font_family }}` | set the font-family property |
| `$badges--font-weight` | `null` | set the font-weight property |
| `$badges--text-transform` | `null` | set the text-transform property |
| `$badges--letter-spacing` | `null` | set the letter-spacing property |
| `$badges--line-height` | `1` | set the line-height property |
| `$badges--text-decoration` | `null` | set the text-decoration property |
| `$badges--margin` | `null` | set the margin property |
| `$badges--border-width` | `null` | set the border-width property |
| `$badges--border-style` | `null` | set the border-style property |
| `$badges--border-color` | `null` | set the border-color property |
| `$badges--border-radius` | `{{ page.trwl_theme.border_radius }}` | set the border-radius property |
| `$badges--color` | `rgb(255, 255, 255)` | set the color property |
| `$badges--box-shadow` | `null` | set the box-shadow property |
| `$badges--background` | `null` | set the background property |
| `$badges--background-color` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;{{ page.trwl_theme.colors.gray_darker }},<br>&nbsp;&nbsp;'-primary':&nbsp;{{ page.trwl_theme.colors.primary }},<br>&nbsp;&nbsp;'-success':&nbsp;{{ page.trwl_theme.colors.success }},<br>&nbsp;&nbsp;'-warning':&nbsp;{{ page.trwl_theme.colors.warning }},<br>&nbsp;&nbsp;'-danger':&nbsp;{{ page.trwl_theme.colors.danger }},<br>)</code> | set the background-color property |
| `$badges--padding` | `0.2em 0.4em` | set the padding property |
