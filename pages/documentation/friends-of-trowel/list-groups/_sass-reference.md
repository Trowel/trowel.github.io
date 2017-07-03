## Sass reference

### Syntax variables

You can override the global syntax config for a specific component with the following variables

{% include doc/scss-reference-thead.md %}
| `$listgroups--syntax` | `null` | syntax config for `.list-group` |


### Component variables

{% include doc/scss-reference-thead.md %}
| `$listgroups--font-size` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;1rem,<br>&nbsp;&nbsp;'-xs':&nbsp;{{ page.trwl_theme.sizes.xs }}&nbsp;trwl-theme-size('xs'),<br>&nbsp;&nbsp;'-sm':&nbsp;{{ page.trwl_theme.sizes.sm }}&nbsp;trwl-theme-size('sm'),<br>&nbsp;&nbsp;'-lg':&nbsp;{{ page.trwl_theme.sizes.lg }}&nbsp;trwl-theme-size('lg'),<br>)</code> | sets the font-size property on `.list-group` |
| `$listgroups--font-family` | `{{ page.trwl_theme.font_family }}` | sets the font-family property on `.list-group` |
| `$listgroups--font-weight` | `null` | sets the font-weight property on `.list-group` |
| `$listgroups--text-transform` | `null` | sets the text-transform property on `.list-group` |
| `$listgroups--letter-spacing` | `null` | sets the letter-spacing property on `.list-group` |
| `$listgroups--line-height` | `{{ page.trwl_theme.line_height }}` | sets the line-height property on `.list-group` |
| `$listgroups--text-align` | `null` | sets the text-align property on `.list-group` |
| `$listgroups--text-decoration` | `null` | sets the text-decoration property on `.list-group` |
| `$listgroups--margin` | `0 0 1em` | sets the margin property on `.list-group` |
| `$listgroups--border-radius` | `null` | sets the border-radius property on `.list-group` |
| `$listgroups--color` | `null` | sets the color property on `.list-group` |
| `$listgroups--box-shadow` | `null` | sets the box-shadow property on `.list-group` |
| `$listgroups--background` | `null` | sets the background property on `.list-group` |
| `$listgroups--background-color` | `null` | sets the background-color property on `.list-group` |
| `$listgroups--max-width` | `null` | sets the max-width property on `.list-group` |
{% include doc/inner-heading-table.md title="Item" %}
{% include doc/scss-reference-tbody.md %}
| `$listgroups-item--font-size` | `null` | sets the font-size property on `.list-group__item` |
| `$listgroups-item--font-family` | `null` | sets the font-family property on `.list-group__item` |
| `$listgroups-item--font-weight` | `null` | sets the font-weight property on `.list-group__item` |
| `$listgroups-item--text-transform` | `null` | sets the text-transform property on `.list-group__item` |
| `$listgroups-item--letter-spacing` | `null` | sets the letter-spacing property on `.list-group__item` |
| `$listgroups-item--line-height` | `null` | sets the line-height property on `.list-group__item` |
| `$listgroups-item--text-align` | `null` | sets the text-align property on `.list-group__item` |
| `$listgroups-item--text-decoration` | `null` | sets the text-decoration property on `.list-group__item` |
| `$listgroups-item--border-width` | `1px` | sets the border-width property on `.list-group__item` |
| `$listgroups-item--border-style` | `{{ page.trwl_theme.border_style }}` | sets the border-style property on `.list-group__item` |
| `$listgroups-item--border-color` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;{{ page.trwl_theme.colors.gray_dark }},<br>&nbsp;&nbsp;'~primary':&nbsp;darken({{ page.trwl_theme.colors.primary }},&nbsp;10%),<br>&nbsp;&nbsp;'~success':&nbsp;darken({{ page.trwl_theme.colors.success }},&nbsp;10%),<br>&nbsp;&nbsp;'~warning':&nbsp;darken({{ page.trwl_theme.colors.warning }},&nbsp;10%),<br>&nbsp;&nbsp;'~danger':&nbsp;darken({{ page.trwl_theme.colors.danger }},&nbsp;10%),<br>)</code> | sets the border-color property on `.list-group__item` |
| `$listgroups-item--border-radius` | `{{ page.trwl_theme.border_radius }}` | sets the border-radius property on `.list-group__item` |
| `$listgroups-item--color` | <code>(<br>&nbsp;&nbsp;'~primary':&nbsp;rgb(255, 255, 255),<br>)</code> | sets the color property on `.list-group__item` |
| `$listgroups-item--box-shadow` | `null` | sets the box-shadow property on `.list-group__item` |
| `$listgroups-item--background` | `null` | sets the background property on `.list-group__item` |
| `$listgroups-item--background-color` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;rgb(255,&nbsp;255,&nbsp;255),<br>&nbsp;&nbsp;'~primary':&nbsp;{{ page.trwl_theme.colors.primary }},<br>&nbsp;&nbsp;'~success':&nbsp;{{ page.trwl_theme.colors.success }},<br>&nbsp;&nbsp;'~warning':&nbsp;{{ page.trwl_theme.colors.warning }},<br>&nbsp;&nbsp;'~danger':&nbsp;{{ page.trwl_theme.colors.danger }},<br>)</code> | sets the background-color property on `.list-group__item` |
| `$listgroups-item--padding` | `{{ page.trwl_theme.padding_y }} {{ page.trwl_theme.padding_x }}` | sets the padding property on `.list-group__item` |
| `$listgroups-item--z-index` | <code>(<br>&nbsp;&nbsp;'~primary':&nbsp;1,<br>&nbsp;&nbsp;'~success':&nbsp;1,<br>&nbsp;&nbsp;'~warning':&nbsp;1,<br>&nbsp;&nbsp;'~danger':&nbsp;1,<br>)</code> | sets the z-index property on `.list-group__item` |
