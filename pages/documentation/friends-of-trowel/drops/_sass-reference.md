## Sass reference

### Syntax variables

You can override the global syntax config for a specific component with the following variables

{% include doc/scss-reference-thead.md %}
| `$drops--syntax` | `null` | syntax config for `.drop` |

### Enables

You can avoid the generation of some css with those following variables

{% include doc/scss-reference-thead.md %}
| `$drops-caret--enabled` | `true` | enable the generation of rules for `.drop__caret` |
| `$drops-menu--enabled` | `true` | enable the generation enabledrules for `.drop__menumenu` |
| `$drops-heading--enabled` | `true` | enable the generation of rules for `.drop__heading` |
| `$drops-anchor--enabled` | `true` | enable the generation of enabledles for `.drop__anchoranchor` |
| `$drops-divider--enabled` | `true` | enable the generation of rules for `.drop__divider` |
| `$drops-header--enabled` | `true` | enable the generation of rules for `.drop__header` |
| `$drops-content--enabled` | `true` | enable the generation of rules for `.drop__content` |


### Component variables

{% include doc/scss-reference-thead.md %}
| `$drops--font-size` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;1rem,<br>&nbsp;&nbsp;'-tooltip':&nbsp;0.875rem,<br>)</code> | sets the font-size property |
| `$drops--font-family` | `null` | sets the font-family property |
| `$drops--font-weight` | `null` | sets the font-weight property |
| `$drops--text-transform` | `null` | sets the text-transform property |
| `$drops--letter-spacing` | `null` | sets the letter-spacing property |
| `$drops--line-height` | `null` | sets the line-height property |
| `$drops--text-align` | `left` | sets the text-align property |
| `$drops--text-decoration` | `null` | sets the text-decoration property |
| `$drops--margin` | `null` | sets the margin property |
| `$drops--min-width` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;10em,<br>&nbsp;&nbsp;'-tooltip':&nbsp;0,<br>)</code> | sets the min-width property |
| `$drops--max-width` | `20em` | sets the max-width property |
| `$drops--width` | `null` | sets the width property |
| `$drops--border-width` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;1px,<br>&nbsp;&nbsp;'-tooltip':&nbsp;0,<br>)</code> | sets the border-width property |
| `$drops--border-style` | `solid` | sets the border-style property |
| `$drops--border-color` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;rgba(0,&nbsp;0,&nbsp;0,&nbsp;0.15),<br>&nbsp;&nbsp;'-tooltip':&nbsp;rgb(0,&nbsp;0,&nbsp;0),<br>)</code> | sets the border-color property |
| `$drops--border-radius` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;0.25em,<br>&nbsp;&nbsp;'-tooltip'` | 0.285714286em,<br>)</code> | sets the border-radius property |
| `$drops--color` | <code>(<br>&nbsp;&nbsp;'-tooltip':&nbsp;rgb(255,&nbsp;255,&nbsp;255),<br>)</code> | sets the color property |
| `$drops--box-shadow` | `null` | sets the box-shadow property |
| `$drops--background` | `null` | sets the background property |
| `$drops--background-color` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;rgb(255,&nbsp;255,&nbsp;255),<br>&nbsp;&nbsp;'-tooltip':&nbsp;rgb(0,&nbsp;0,&nbsp;0),<br>)</code> | sets the background-color property |
| `$drops--padding-x` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;1.5rem,<br>&nbsp;&nbsp;'-tooltip'` | 0.571428571em,<br>)</code> | sets the padding-x property |
| `$drops--margin` | <code>(<br>&nbsp;&nbsp;'-tooltip':&nbsp;0.75rem,<br>&nbsp;&nbsp;'-popover':&nbsp;0.75rem,<br>)</code> | sets the margin property |
| `$drops--z-index` | `1000` | sets the z-index property |
{% include doc/inner-heading-table.md title="Caret" %}
{% include doc/scss-reference-tbody.md %}
| `$drops-caret--base` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;0,<br>&nbsp;&nbsp;'-popover':&nbsp;20px,<br>&nbsp;&nbsp;'-tooltip':&nbsp;10px,<br>)</code> | sets the base size for `.drop__caret` |
| `$drops-caret--height` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;0,<br>&nbsp;&nbsp;'-popover':&nbsp;10px,<br>&nbsp;&nbsp;'-tooltip':&nbsp;5px,<br>)</code> | sets the height size for `.drop__caret` |
{% include doc/inner-heading-table.md title="Menu" %}
{% include doc/scss-reference-tbody.md %}
| `$drops-menu--padding-y` | `0.5rem` | sets the left and right padding for `.drop__menu` |
| `$drops-menu--margin` | `null` | sets the margin property for `.drop__menu` |
| `$drops-menu--font-size` | `null` | sets the font-size property for `.drop__menu` |
| `$drops-menu--color` | `null` | sets the color property for `.drop__menu` |
| `$drops-menu--text-align` | `null` | sets the text-align property for `.drop__menu` |
| `$drops-menu--background-color` | `null` | sets the background-color property for `.drop__menu` |
{% include doc/inner-heading-table.md title="Heading" %}
{% include doc/scss-reference-tbody.md %}
| `$drops-heading--padding-y` | `0.5rem` | sets the left and right padding for `.drop__heading` |
| `$drops-heading--font-size` | `0.875rem` | sets the font-size property for `.drop__heading` |
| `$drops-heading--line-height` | `1.1` | sets the line-height property for `.drop__heading` |
| `$drops-heading--letter-spacing` | `null` | sets the letter-spacing property for `.drop__heading` |
| `$drops-heading--font-weight` | `500` | sets the font-weight property for `.drop__heading` |
| `$drops-heading--text-transform` | `null` | sets the text-transform property for `.drop__heading` |
| `$drops-heading--text-decoration` | `null` | sets the text-decoration property for `.drop__heading` |
| `$drops-heading--color` | `#818a91` | sets the color property for `.drop__heading` |
{% include doc/inner-heading-table.md title="Anchor" %}
{% include doc/scss-reference-tbody.md %}
| `$drops-anchor--padding-y` | `0.1875rem` | sets the left and right padding property for `.drop__anchor` |
| `$drops-anchor--font-size` | `null` | sets the font-size property for `.drop__anchor` |
| `$drops-anchor--line-height` | `null` | sets the line-height property for `.drop__anchor` |
| `$drops-anchor--letter-spacing` | `null` | sets the letter-spacing property for `.drop__anchor` |
| `$drops-anchor--font-weight` | `null` | sets the font-weight property for `.drop__anchor` |
| `$drops-anchor--text-transform` | `null` | sets the text-transform property for `.drop__anchor` |
| `$drops-anchor--text-decoration` | `none` | sets the text-decoration property for `.drop__anchor` |
| `$drops-anchor--color` | `rgb(0, 0, 0)` | sets the color property for `.drop__anchor` |
| `$drops-anchor--background-color` | <code>(<br>&nbsp;&nbsp;':hover':&nbsp;rgb(245,&nbsp;245,&nbsp;245),<br>)</code> | sets the background-color property for `.drop__anchor` |
{% include doc/inner-heading-table.md title="Divider" %}
{% include doc/scss-reference-tbody.md %}
| `$drops-divider--margin` | `0.625em 0` | sets the margin property for `.drop__divider` |
{% include doc/inner-heading-table.md title="Header" %}
{% include doc/scss-reference-tbody.md %}
| `$drops-header--padding-y` | `0.5rem` | sets the left and right padding property for `.drop__header` |
| `$drops-header--font-size` | `1rem` | sets the font-size property for `.drop__header` |
| `$drops-header--background-color` | `rgb(247, 247, 247)` | sets the background-color property for `.drop__header` |
| `$drops-header--border-bottom` | `1px solid rgb(235, 235, 235)` | sets the border-bottom property for `.drop__header` |
| `$drops-header--font-weight` | `500` | sets the font-weight property for `.drop__header` |
| `$drops-header--color` | `inherit` | sets the color property for `.drop__header` |
{% include doc/inner-heading-table.md title="Content" %}
{% include doc/scss-reference-tbody.md %}
| `$drops-content--padding-y` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;0.5625rem,<br>&nbsp;&nbsp;'-tooltip':&nbsp;0.214285714em,<br>)</code> | sets the left and right padding property for `.drop__content` |
