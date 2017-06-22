---
layout: documentation
type: friendsoftrowel
title: Collapses
library: friendsOfTrowel/collapses
permalink: /documentation/friends-of-trowel/collapses/
affix: true
---

## Download

You can fetch *Trowel Collapses* with *npm*, *yarn* or *bower*.

```bash
# With bower
$ bower install --save trowel-collapses

# With npm
$ npm install --save trowel-collapses

# With yarn
$ yarn add trowel-collapses
```

You can also download a zip archive [right here](https://github.com/FriendsOfTrowel/Collapses/archive/master.zip).

## Installation

### *SCSS*
The main scss file to include to your main `.scss` file is located at the `./src/scss/collapses.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel core (need to be imported first)
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Collapses
@import './path/to/dependencies/trowel-collapses/src/scss/collapses';
```

### *JavaScript*
The javascript file is located at the `./dest/javascript/collapses.js`. The optimized and minified version is available at `dest/javascript/collapses.min.js`.

## Usage

## Sass reference

### Syntax variables

You can override the global syntax config for a specific component with the following variables

{% include doc/scss-reference-thead.md %}
| `$collapses--syntax` | `null` | syntax config for `.collapse` |
| `$accordions--syntax` | `null` | syntax config for `.accordion` |
| `$tabs--syntax` | `null` | syntax config for `.tab` |

### Enables

You can avoid the generation of some css with those following variables

{% include doc/scss-reference-thead.md %}
| `$accordions--enabled` | `true` | enable the generation of rules for accordion component |
| `$tabs--enabled` | `true` | enable the generation of rules for tab component |

### Component variables

{% include doc/scss-reference-thead.md %}
| `$collapses--font-size` | `1rem` | sets the font-size property |
| `$collapses--font-family` | `null` | sets the font-family property |
| `$collapses--font-weight` | `null` | sets the font-weight property |
| `$collapses--text-transform` | `null` | sets the text-transform property |
| `$collapses--letter-spacing` | `null` | sets the letter-spacing property |
| `$collapses--line-height` | `null` | sets the line-height property |
| `$collapses--text-align` | `null` | sets the text-align property |
| `$collapses--text-decoration` | `null` | sets the text-decoration property |
| `$collapses--margin` | `null` | sets the margin property |
| `$collapses--border-width` | `null` | sets the border-width property |
| `$collapses--border-style` | `null` | sets the border-style property |
| `$collapses--border-color` | `null` | sets the border-color property |
| `$collapses--border-radius` | `null` | sets the border-radius property |
| `$collapses--color` | `null` | sets the color property |
| `$collapses--box-shadow` | `null` | sets the box-shadow property |
| `$collapses--background` | `null` | sets the background property |
| `$collapses--background-color` | `null` | sets the background-color property |


#### Accordions

{% include doc/scss-reference-thead.md %}
| `$accordions--font-size` | `{{ page.trwl_theme.sizes.md }}` | sets the font-size property |
| `$accordions--font-family` | `{{ page.trwl_theme.font_family }}` | sets the font-family property |
| `$accordions--font-weight` | `null` | sets the font-weight property |
| `$accordions--text-transform` | `null` | sets the text-transform property |
| `$accordions--letter-spacing` | `null` | sets the letter-spacing property |
| `$accordions--line-height` | `null` | sets the line-height property |
| `$accordions--text-align` | `null` | sets the text-align property |
| `$accordions--text-decoration` | `null` | sets the text-decoration property |
| `$accordions--margin` | `0.5em 0` | sets the margin property |
| `$accordions--border-width` | `{{ page.trwl_theme.border_width }}` | sets the border-width property |
| `$accordions--border-style` | `{{ page.trwl_theme.border_style }}` | sets the border-style property |
| `$accordions--border-color` | `{{ page.trwl_theme.colors.gray_dark }}` | sets the border-color property |
| `$accordions--border-radius` | `{{ page.trwl_theme.border_radius }}` | sets the border-radius property |
| `$accordions--color` | `null` | sets the color property |
| `$accordions--box-shadow` | `null` | sets the box-shadow property |
| `$accordions--background` | `null` | sets the background property |
| `$accordions--background-color` | `null` | sets the background-color property |
| `$accordions--padding-x` | `null` | sets the left and right padding properties |
| `$accordions--padding-y` | `null` | sets the top and bottom padding properties |
{% include doc/inner-heading-table.md title="Anchors" %}
{% include doc/scss-reference-tbody.md %}
| `$accordions-anchor--font-size` | `null` | sets the font-size property for `.accordion__anchor` |
| `$accordions-anchor--font-family` | `null` | sets the font-family property for `.accordion__anchor` |
| `$accordions-anchor--font-weight` | `null` | sets the font-weight property for `.accordion__anchor` |
| `$accordions-anchor--text-transform` | `null` | sets the text-transform property for `.accordion__anchor` |
| `$accordions-anchor--letter-spacing` | `null` | sets the letter-spacing property for `.accordion__anchor` |
| `$accordions-anchor--line-height` | `null` | sets the line-height property for `.accordion__anchor` |
| `$accordions-anchor--text-align` | `null` | sets the text-align property for `.accordion__anchor` |
| `$accordions-anchor--text-decoration` | `null` | sets the text-decoration property for `.accordion__anchor` |
| `$accordions-anchor--margin` | `null` | sets the margin property for `.accordion__anchor` |
| `$accordions-anchor--border-width` | `null` | sets the border-width property for `.accordion__anchor` |
| `$accordions-anchor--border-style` | `null` | sets the border-style property for `.accordion__anchor` |
| `$accordions-anchor--border-color` | `null` | sets the border-color property for `.accordion__anchor` |
| `$accordions-anchor--border-radius` | `null` | sets the border-radius property for `.accordion__anchor` |
| `$accordions-anchor--color` | `rgb(255, 255, 255)` | sets the color property for `.accordion__anchor` |
| `$accordions-anchor--box-shadow` | `null` | sets the box-shadow property for `.accordion__anchor` |
| `$accordions-anchor--background` | `null` | sets the background property for `.accordion__anchor` |
| `$accordions-anchor--background-color` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;{{ page.trwl_theme.colors.primary }},<br>&nbsp;&nbsp;':hover':&nbsp;lighten({{ page.trwl_theme.colors.primary }},&nbsp;5%),<br>&nbsp;&nbsp;':active':&nbsp;lighten({{ page.trwl_theme.colors.primary }},&nbsp;5%),<br>&nbsp;&nbsp;':focus':&nbsp;lighten({{ page.trwl_theme.colors.primary }},&nbsp;5%),<br>&nbsp;&nbsp;'~active':&nbsp;(<br>&nbsp;&nbsp;&nbsp;&nbsp;'default':&nbsp;{{ page.trwl_theme.colors.dan__anchorger }},<br>&nbsp;&nbsp;&nbsp;&nbsp;':hover':&nbsp;lighten({{ page.trwl_theme.colors.danger }},&nbsp;5%),<br>&nbsp;&nbsp;&nbsp;&nbsp;':active':&nbsp;lighten({{ page.trwl_theme.colors.danger }},&nbsp;5%),<br>&nbsp;&nbsp;&nbsp;&nbsp;':focus':&nbsp;lighten({{ page.trwl_theme.colors.danger }},&nbsp;5%),<br>&nbsp;&nbsp;)<br>)</code> | sets the background-color property for `.accordion__anchor` |
| `$accordions-anchor--padding-x` | `{{ page.trwl_theme.padding_x }}` | sets the left and right padding properties for `.accordion__anchor` |
| `$accordions-anchor--padding-y` | `{{ page.trwl_theme.padding_y }}` | sets the top and bottom padding properties for `.accordion__anchor` |
{% include doc/inner-heading-table.md title="Collapses" %}
{% include doc/scss-reference-tbody.md %}
| `$accordion-collapse--font-size` | `null` | sets the font-size property for `.accordion__collapse` |
| `$accordion-collapse--font-family` | `null` | sets the font-family property for `.accordion__collapse` |
| `$accordion-collapse--font-weight` | `null` | sets the font-weight property for `.accordion__collapse` |
| `$accordion-collapse--text-transform` | `null` | sets the text-transform property for `.accordion__collapse` |
| `$accordion-collapse--letter-spacing` | `null` | sets the letter-spacing property for `.accordion__collapse` |
| `$accordion-collapse--line-height` | `null` | sets the line-height property for `.accordion__collapse` |
| `$accordion-collapse--text-align` | `null` | sets the text-align property for `.accordion__collapse` |
| `$accordion-collapse--text-decoration` | `null` | sets the text-decoration property for `.accordion__collapse` |
| `$accordion-collapse--margin` | `null` | sets the margin property for `.accordion__collapse` |
| `$accordion-collapse--border-width` | `null` | sets the border-width property for `.accordion__collapse` |
| `$accordion-collapse--border-style` | `null` | sets the border-style property for `.accordion__collapse` |
| `$accordion-collapse--border-color` | `null` | sets the border-color property for `.accordion__collapse` |
| `$accordion-collapse--border-radius` | `null` | sets the border-radius property for `.accordion__collapse` |
| `$accordion-collapse--color` | `null` | sets the color property for `.accordion__collapse` |
| `$accordion-collapse--box-shadow` | `null` | sets the box-shadow property for `.accordion__collapse` |
| `$accordion-collapse--background` | `null` | sets the background property for `.accordion__collapse` |
| `$accordion-collapse--background-color` | `null` | sets the background-color property for `.accordion__collapse` |
| `$accordion-collapse--padding-x` | `{{ page.trwl_theme.padding_x }}` | sets the left and right padding properties for `.accordion__collapse` |
| `$accordion-collapse--padding-y` | `{{ page.trwl_theme.padding_y }}` | sets the top and bottom padding properties for `.accordion__collapse` |

#### Tabs

{% include doc/inner-heading-table.md title="Tab navs" %}
{% include doc/scss-reference-tbody.md %}
| `$tabsnavs--font-size` | `{{ page.trwl_theme.sizes.md }}` | sets the font-size property for `.tab-nav` |
| `$tabsnavs--font-family` | `{{ page.trwl_theme.font_family }}` | sets the font-family property for `.tab-nav` |
| `$tabsnavs--font-weight` | `null` | sets the font-weight property for `.tab-nav` |
| `$tabsnavs--text-transform` | `null` | sets the text-transform property for `.tab-nav` |
| `$tabsnavs--letter-spacing` | `null` | sets the letter-spacing property for `.tab-nav` |
| `$tabsnavs--line-height` | `null` | sets the line-height property for `.tab-nav` |
| `$tabsnavs--text-align` | `null` | sets the text-align property for `.tab-nav` |
| `$tabsnavs--text-decoration` | `null` | sets the text-decoration property for `.tab-nav` |
| `$tabsnavs--margin` | `null` | sets the margin property for `.tab-nav` |
| `$tabsnavs--border-width` | `null` | sets the border-width property for `.tab-nav` |
| `$tabsnavs--border-style` | `null` | sets the border-style property for `.tab-nav` |
| `$tabsnavs--border-color` | `null` | sets the border-color property for `.tab-nav` |
| `$tabsnavs--border-radius` | `null` | sets the border-radius property for `.tab-nav` |
| `$tabsnavs--color` | `null` | sets the color property for `.tab-nav` |
| `$tabsnavs--box-shadow` | `null` | sets the box-shadow property for `.tab-nav` |
| `$tabsnavs--background` | `null` | sets the background property for `.tab-nav` |
| `$tabsnavs--background-color` | `{{ page.trwl_theme.colors.primary }}` | sets the background-color property for `.tab-nav` |
| `$tabsnavs--padding` | `{{ page.trwl_theme.padding_y }} ({{ page.trwl_theme.padding_x }} / 2) 0` | sets the padding property for `.tab-nav` |
{% include doc/inner-heading-table.md title="Tab navs item" %}
{% include doc/scss-reference-tbody.md %}
| `$tabsnavs-item--gutter` | `1em` | sets the pod property for `.tab-nav` |
{% include doc/inner-heading-table.md title="Tab navs item" %}
{% include doc/scss-reference-tbody.md %}
| `$tabsnavs-anchor--font-size` | `null` | sets the font-size property for `.tab-nav` |
| `$tabsnavs-anchor--font-family` | `null` | sets the font-family property for `.tab-nav` |
| `$tabsnavs-anchor--font-weight` | `null` | sets the font-weight property for `.tab-nav` |
| `$tabsnavs-anchor--text-transform` | `null` | sets the text-transform property for `.tab-nav` |
| `$tabsnavs-anchor--letter-spacing` | `null` | sets the letter-spacing property for `.tab-nav` |
| `$tabsnavs-anchor--line-height` | `null` | sets the line-height property for `.tab-nav` |
| `$tabsnavs-anchor--text-align` | `null` | sets the text-align property for `.tab-nav` |
| `$tabsnavs-anchor--text-decoration` | `null` | sets the text-decoration property for `.tab-nav` |
| `$tabsnavs-anchor--margin` | `null` | sets the margin property for `.tab-nav` |
| `$tabsnavs-anchor--border-width` | `null` | sets the border-width property for `.tab-nav` |
| `$tabsnavs-anchor--border-style` | `null` | sets the border-style property for `.tab-nav` |
| `$tabsnavs-anchor--border-color` | `null` | sets the border-color property for `.tab-nav` |
| `$tabsnavs-anchor--border-radius` | `{{ page.trwl_theme.border_radius }} {{ page.trwl_theme.border_radius }}` | sets the border-radius property for `.tab-nav` |
| `$tabsnavs-anchor--padding` | `{{ page.trwl_theme.padding_y }} ({{ page.trwl_theme.padding_x }} / 2)` | sets the padding property for `.tab-nav` |
| `$tabsnavs-anchor--color` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;rgb(255,&nbsp;255,&nbsp;255),<br>&nbsp;&nbsp;'~active':&nbsp;{{ page.trwl_theme.colors.primary }},<br>)</code> | sets the color property for `.tab-nav` |
| `$tabsnavs-anchor--background-color` | `null` | sets the background-color property for `.tab-nav` |
| `$tabsnavs-anchor--background` | <code>(<br>&nbsp;&nbsp;'~active':&nbsp;rgb(255,&nbsp;255,&nbsp;255),<br>)</code> | sets the background property for `.tab-nav` |
| `$tabsnavs-anchor--box-shadow` | `null` | sets the box-shadow property for `.tab-nav` |
{% include doc/inner-heading-table.md title="Tab collapses" %}
{% include doc/scss-reference-tbody.md %}
| `$tabscollapses--font-size` | `{{ page.trwl_theme.sizes.md }}` | sets the font-size property for `.tab-collapse` |
| `$tabscollapses--font-family` | `{{ page.trwl_theme.font_family }}` | sets the font-family property for `.tab-collapse` |
| `$tabscollapses--font-weight` | `null` | sets the font-weight property for `.tab-collapse` |
| `$tabscollapses--text-transform` | `null` | sets the text-transform property for `.tab-collapse` |
| `$tabscollapses--letter-spacing` | `null` | sets the letter-spacing property for `.tab-collapse` |
| `$tabscollapses--line-height` | `null` | sets the line-height property for `.tab-collapse` |
| `$tabscollapses--text-align` | `null` | sets the text-align property for `.tab-collapse` |
| `$tabscollapses--text-decoration` | `null` | sets the text-decoration property for `.tab-collapse` |
| `$tabscollapses--margin` | `null` | sets the margin property for `.tab-collapse` |
| `$tabscollapses--border-width` | `null` | sets the border-width property for `.tab-collapse` |
| `$tabscollapses--border-style` | `null` | sets the border-style property for `.tab-collapse` |
| `$tabscollapses--border-color` | `null` | sets the border-color property for `.tab-collapse` |
| `$tabscollapses--border-radius` | `null` | sets the border-radius property for `.tab-collapse` |
| `$tabscollapses--color` | `null` | sets the color property for `.tab-collapse` |
| `$tabscollapses--box-shadow` | `null` | sets the box-shadow property for `.tab-collapse` |
| `$tabscollapses--background` | `null` | sets the background property for `.tab-collapse` |
| `$tabscollapses--background-color` | `null` | sets the background-color property for `.tab-collapse` |
| `$tabscollapses--padding` | `{{ page.trwl_theme.padding_y }} 0` | sets the padding property for `.tab-collapse` |

## Javascript reference