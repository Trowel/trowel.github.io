## Sass reference

### Syntax variables

You can override the global syntax config for a specific component with the following variables

{% include doc/scss-reference-thead.md %}
| `$ribbons--syntax` | `null` | syntax config for `.ribbon` |

### Component variables

{% include doc/scss-reference-thead.md %}
| `$ribbons--font-size` | `{{ page.trwl_theme.sizes.md }}` | set the font-size property |
| `$ribbons--font-family` | `null` | set the font-family property |
| `$ribbons--font-weight` | `null` | set the font-weight property |
| `$ribbons--text-transform` | `null` | set the text-transform property |
| `$ribbons--letter-spacing` | `null` | set the letter-spacing property |
| `$ribbons--line-height` | `null` | set the line-height property |
| `$ribbons--text-decoration` | `null` | set the text-decoration property |
| `$ribbons--margin` | `null` | set the margin property |
| `$ribbons--color` | `rgb(255, 255, 255)` | set the color property |
| `$ribbons--box-shadow` | `null` | set the box-shadow property |
| `$ribbons--background` | `null` | set the background property |
| `$ribbons--background-color` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;{{ page.trwl_theme.colors.gray_darker }},<br>&nbsp;&nbsp;'-primary':&nbsp;{{ page.trwl_theme.colors.primary }},<br>&nbsp;&nbsp;'-success':&nbsp;{{ page.trwl_theme.colors.success }},<br>&nbsp;&nbsp;'-warning':&nbsp;{{ page.trwl_theme.colors.warning }},<br>&nbsp;&nbsp;'-danger':&nbsp;{{ page.trwl_theme.colors.danger }},<br>)</code> | set the background-color property |
| `$ribbons--size` | `7.5em` | set the width and height properties |
| `$ribbons--position` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;'left',<br>&nbsp;&nbsp;'-right':&nbsp;'right',<br>)</code> | define the orientation of the ribbon, can only be `'left'` or `'right'` |
| `$ribbons--gutter` | `3.75em` | set the gutter property |
| `$ribbons--height` | `1.875em` | set the height property |
