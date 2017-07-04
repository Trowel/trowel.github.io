## Sass reference

### Syntax variables

You can override the global syntax config for a specific component with the following variables

{% include doc/scss-reference-thead.md %}
| `$button--syntax` | `null` | syntax config for `.btn` |


### Enables

You can avoid the generation of some css with the following variables

{% include doc/scss-reference-thead.md %}
| `$buttongroup--enabled` | `true` | enable the generation of style rules for the `.btn-group` block |


### Component variables

{% include doc/scss-reference-thead.md %}
| `$button--vertical-align` | `middle` | sets the vertical-align property |
| `$button--float` | `null` | sets the float property |
| `$button--display` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;inline-block,<br>&nbsp;&nbsp;'-block':&nbsp;block,<br>)</code> | sets the display property |
| `$button--border-width` | `{{ page.trwl_theme.border_width }}` | sets the float property |
| `$button--padding` | `{{ page.trwl_theme.padding_y }} {{ page.trwl_theme.padding_x }}` | sets the padding property |
| `$button--width` | <code>(<br>&nbsp;&nbsp;'-block': 100%,<br>)</code> | sets the padding property |
| `$button--margin` | null | sets the margin property |
| `$button--height` | null | sets the height property |
| `$button--color` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;{{ page.trwl_theme.colors.primary }},<br>&nbsp;&nbsp;'-primary':&nbsp;rgb(255,&nbsp;255,&nbsp;255),<br>&nbsp;&nbsp;'-success':&nbsp;rgb(255,&nbsp;255,&nbsp;255),<br>&nbsp;&nbsp;'-warning':&nbsp;rgb(255,&nbsp;255,&nbsp;255),<br>&nbsp;&nbsp;'-danger':&nbsp;rgb(255, 255, 255),<br>)</code> | sets the color property |
| `$button--border-color` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;currentColor,<br>&nbsp;&nbsp;'-primary':&nbsp;transparent,<br>&nbsp;&nbsp;'-success':&nbsp;transparent,<br>&nbsp;&nbsp;'-warning':&nbsp;transparent,<br>&nbsp;&nbsp;'-danger':&nbsp;transparent,<br>&nbsp;&nbsp;'-link':&nbsp;transparent,<br>)</code> | sets the border-color property |
| `$button--background-color` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;(<br>&nbsp;&nbsp;&nbsp;&nbsp;'default':&nbsp;rgb(255,&nbsp;255,&nbsp;255)&nbsp;darken(rgb(255,&nbsp;255,&nbsp;255),&nbsp;10%),<br>&nbsp;&nbsp;&nbsp;&nbsp;'[disabled="true"':&nbsp;rgb(255,&nbsp;255,&nbsp;255)&nbsp;rgb(255,&nbsp;255,&nbsp;255),<br>&nbsp;&nbsp;),<br>&nbsp;&nbsp;'-primary':&nbsp;(<br>&nbsp;&nbsp;&nbsp;&nbsp;'default':&nbsp;rgb(31,&nbsp;13,&nbsp;51)&nbsp;darken(rgb(31,&nbsp;13,&nbsp;51),&nbsp;10%),<br>&nbsp;&nbsp;&nbsp;&nbsp;'[disabled="true"':&nbsp;rgb(31,&nbsp;13,&nbsp;51)&nbsp;rgb(31,&nbsp;13,&nbsp;51),<br>&nbsp;&nbsp;),<br>&nbsp;&nbsp;'-success':&nbsp;(<br>&nbsp;&nbsp;&nbsp;&nbsp;'default':&nbsp;rgb(55,&nbsp;211,&nbsp;189)&nbsp;darken(rgb(55,&nbsp;211,&nbsp;189),&nbsp;10%),<br>&nbsp;&nbsp;&nbsp;&nbsp;'[disabled="true"':&nbsp;rgb(55,&nbsp;211,&nbsp;189)&nbsp;rgb(55,&nbsp;211,&nbsp;189),<br>&nbsp;&nbsp;),<br>&nbsp;&nbsp;'-warning':&nbsp;(<br>&nbsp;&nbsp;&nbsp;&nbsp;'default':&nbsp;rgb(255,&nbsp;176,&nbsp;0)&nbsp;darken(rgb(255,&nbsp;176,&nbsp;0),&nbsp;10%),<br>&nbsp;&nbsp;&nbsp;&nbsp;'[disabled="true"':&nbsp;rgb(255,&nbsp;176,&nbsp;0)&nbsp;rgb(255,&nbsp;176,&nbsp;0),<br>&nbsp;&nbsp;),<br>&nbsp;&nbsp;'-danger':&nbsp;(<br>&nbsp;&nbsp;&nbsp;&nbsp;'default':&nbsp;rgb(253,&nbsp;65,&nbsp;100)&nbsp;darken(rgb(253,&nbsp;65,&nbsp;100),&nbsp;10%),<br>&nbsp;&nbsp;&nbsp;&nbsp;'[disabled="true"':&nbsp;rgb(253,&nbsp;65,&nbsp;100)&nbsp;rgb(253,&nbsp;65,&nbsp;100),<br>&nbsp;&nbsp;),<br>&nbsp;&nbsp;'-link':&nbsp;(<br>&nbsp;&nbsp;&nbsp;&nbsp;'default':&nbsp;(transparent,&nbsp;transparent),<br>&nbsp;&nbsp;)<br>)</code> | sets the background-color property |
| `$button--opacity` | <code>(<br>&nbsp;&nbsp;'[disabled="true"':&nbsp;0.5,<br>)</code> | sets the opacity property |
| `$button--font-size` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;&nbsp;{{ page.trwl_theme.sizes.md }},<br>&nbsp;&nbsp;'-lg':&nbsp;{{ page.trwl_theme.sizes.lg }},<br>&nbsp;&nbsp;'-sm':&nbsp;{{ page.trwl_theme.sizes.sm }},<br>&nbsp;&nbsp;'-xs':&nbsp;{{ page.trwl_theme.sizes.xs }},<br>)</code> | sets the font-size property |
| `$button--text-decoration` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;none,<br>&nbsp;&nbsp;'-link':&nbsp;(<br>&nbsp;&nbsp;&nbsp;&nbsp;':hover':&nbsp;(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'default':&nbsp;underline,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'[disabled="true"':&nbsp;none,<br>&nbsp;&nbsp;&nbsp;&nbsp;),<br>&nbsp;&nbsp;)<br>)</code> | sets the text-decoration property |
| `$button--line-height` | `{{ page.trwl_theme.line_height }}` | sets the line-height property |
| `$button--text-align` | `center` | sets the text-align property |
| `$button--font-family` | `{{ page.trwl_theme.font_family }}` | sets the font-family property |
| `$button--font-weight` | `null` | sets the font-weight property |
| `$button--text-transform` | `null` | sets the text-transform property |
| `$button--letter-spacing` | `null` | sets the letter-spacing property |
| `$button--border-radius` | `{{ page.trwl_theme.border_radius }}` | sets the border-radius property |
| `$button--border-style` | `{{ page.trwl_theme.border_style }}` | sets the border-style property |
| `$button--box-shadow` | `null` | sets the box-shadow property |
| `$button--transition` | `null` | sets the transition property |
| `$button--cursor` | `null` | sets the cursor property |

#### Btn-groups

{% include doc/scss-reference-thead.md %}
| `$buttongroup--justify-content` | `null` | sets the justify-content property on block `.btn-group` |
| `$buttongroup-item--flex-grow` | `null` | sets the flex-grow property on a `.btn` inside a `.btn-group` block |