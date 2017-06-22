---
layout: documentation
type: friendsoftrowel
title: Cards
library: friendsOfTrowel/cards
permalink: /documentation/friends-of-trowel/cards/
affix: true
---

## Download

You can fetch *Trowel Cards* with *npm*, *yarn* or *bower*.

```bash
# With bower
$ bower install --save trowel-cards

# With npm
$ npm install --save trowel-cards

# With yarn
$ yarn add trowel-cards
```

You can also download a zip archive [right here](https://github.com/FriendsOfTrowel/Cards/archive/master.zip).

## Installation

### *SCSS*
The main scss file to include to your main `.scss` file is located at the `./src/scss/cards.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel core (need to be imported first)
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Cards
@import './path/to/dependencies/trowel-cards/src/scss/cards';
```

### *Twig files*
The twig template ready to be `include` or `embed` is located at `./src/twig/card.html.twig`.

## Usage

## Sass reference

### Syntax variables

You can override the global syntax config for a specific component with the following variables

{% include doc/scss-reference-thead.md %}
| `$cards--syntax` | `null` | syntax config for `.card` |


### Component variables

{% include doc/scss-reference-thead.md %}
| `$cards--font-size` | `{{ page.trwl_theme.sizes.md }}` | sets the font-size property |
| `$cards--font-family` | `{{ page.trwl_theme.font_family }}` | sets the font-family property |
| `$cards--font-weight` | `null` | sets the font-weight property |
| `$cards--text-transform` | `null` | sets the text-transform property |
| `$cards--letter-spacing` | `null` | sets the letter-spacing property |
| `$cards--line-height` | `null` | sets the line-height property |
| `$cards--text-align` | `null` | sets the text-align property |
| `$cards--text-decoration` | `null` | sets the text-decoration property |
| `$cards--height` | `null` | sets the height property |
| `$cards--margin` | `0 0 2em` | sets the margin property |
| `$cards--border-width` | `{{ page.trwl_theme.border_width }}` | sets the border-width property |
| `$cards--border-style` | `{{ page.trwl_theme.border_style }}` | sets the border-style property |
| `$cards--border-color` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;{{ page.trwl_theme.colors.gray_medium }},<br>&nbsp;&nbsp;'-primary':&nbsp;{{ page.trwl_theme.colors.primary }},<br>&nbsp;&nbsp;'-success':&nbsp;{{ page.trwl_theme.colors.success }},<br>&nbsp;&nbsp;'-warning':&nbsp;{{ page.trwl_theme.colors.warning }},<br>&nbsp;&nbsp;'-danger':&nbsp;{{ page.trwl_theme.colors.danger }},<br>)</code> | sets the border-color property |
| `$cards--border-radius` | `{{ page.trwl_theme.border_radius }}` | sets the border-radius property |
| `$cards--color` | `null` | sets the color property |
| `$cards--background-color` | `rgb(255, 255, 255)` | sets the background-color property |
| `$cards--box-shadow` | `null` | sets the box-shadow property |
| `$cards--background` | `null` | sets the background property |
{% include doc/inner-heading-table.md title="Cover" %}
{% include doc/scss-reference-tbody.md %}
| `$card-cover--height` | `9.375em` | sets the height property for `.card__cover` |
{% include doc/inner-heading-table.md title="Block" %}
{% include doc/scss-reference-tbody.md %}
| `$card-block--padding` | `1em` | sets the padding property for `.card__block` |
| `$card-block--text-align` | `null` | sets the text-align property for `.card__block` |
| `$card-block--flex-basis` | `null` | sets the flex-basis property for `.card__block` |
| `$card-block--flex-shrink` | `null` | sets the flex-shrink property for `.card__block` |
| `$card-block--flex-grow` | `1` | sets the flex-grow property for `.card__block` |
{% include doc/inner-heading-table.md title="Heading" %}
{% include doc/scss-reference-tbody.md %}
| `$card-heading--margin` | `0 0 1em` | sets the margin property for `.card__heading` |
| `$card-heading--font-size` | `null` | sets the font-size property for `.card__heading` |
| `$card-heading--font-weight` | `null` | sets the font-weight property for `.card__heading` |
| `$card-heading--font-family` | `null` | sets the font-family property for `.card__heading` |
| `$card-heading--letter-spacing` | `null` | sets the letter-spacing property for `.card__heading` |
| `$card-heading--line-height` | `null` | sets the line-height property for `.card__heading` |
| `$card-heading--text-align` | `null` | sets the text-align property for `.card__heading` |
| `$card-heading--text-decoration` | `null` | sets the text-decoration property for `.card__heading` |
| `$card-heading--color` | <code>(<br>&nbsp;&nbsp;'-primary':&nbsp;{{ page.trwl_theme.colors.primary }},<br>&nbsp;&nbsp;'-success':&nbsp;{{ page.trwl_theme.colors.success }},<br>&nbsp;&nbsp;'-warning':&nbsp;{{ page.trwl_theme.colors.warning }},<br>&nbsp;&nbsp;'-danger':&nbsp;{{ page.trwl_theme.colors.danger }},<br>)</code> | sets the color property for `.card__heading` |
{% include doc/inner-heading-table.md title="Paragraph" %}
{% include doc/scss-reference-tbody.md %}
| `$card-paragraph--margin` | `0 0 1em` | sets the margin property for `.card__paragraph` |
| `$card-paragraph--font-size` | `null` | sets the font-size property for `.card__paragraph` |
| `$card-paragraph--font-weight` | `null` | sets the font-weight property for `.card__paragraph` |
| `$card-paragraph--font-family` | `null` | sets the font-family property for `.card__paragraph` |
| `$card-paragraph--letter-spacing` | `null` | sets the letter-spacing property for `.card__paragraph` |
| `$card-paragraph--line-height` | `null` | sets the line-height property for `.card__paragraph` |
| `$card-paragraph--text-align` | `null` | sets the text-align property for `.card__paragraph` |
| `$card-paragraph--text-decoration` | `null` | sets the text-decoration property for `.card__paragraph` |
| `$card-paragraph--color` | `null` | sets the color property for `.card__paragraph` |