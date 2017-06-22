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
