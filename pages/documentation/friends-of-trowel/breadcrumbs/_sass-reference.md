## Sass reference

### Syntax variables

You can override the global syntax config for a specific component with the following variables

{% include doc/scss-reference-thead.md %}
| `$breadcrumbs--syntax` | `null` | syntax config for `.breadcrumb` |


### Component variables

{% include doc/scss-reference-thead.md %}
| `$breadcrumbs--responsive-breakpoint` | `'@sm'` | *not a trowel variable* |
| `$breadcrumbs--font-size` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;0.7rem,<br>&nbsp;&nbsp;$breadcrumbs--responsive-breakpoint:&nbsp;1rem,<br>)</code> | sets the font-size property on `.breadcrumb` |
| `$breadcrumbs--font-family` | `null` | sets the font-family property on `.breadcrumb` |
| `$breadcrumbs--font-weight` | `null` | sets the font-weight property on `.breadcrumb` |
| `$breadcrumbs--text-transform` | `null` | sets the text-transform property on `.breadcrumb` |
| `$breadcrumbs--letter-spacing` | `null` | sets the letter-spacing property on `.breadcrumb` |
| `$breadcrumbs--line-height` | `null` | sets the line-height property on `.breadcrumb` |
| `$breadcrumbs--text-align` | `null` | sets the text-align property on `.breadcrumb` |
| `$breadcrumbs--text-decoration` | `null` | sets the text-decoration property on `.breadcrumb` |
| `$breadcrumbs--margin` | `0 0 1em` | sets the margin property on `.breadcrumb` |
| `$breadcrumbs--padding` | `{{ page.trwl_theme.padding_y }} {{ page.trwl_theme.padding_x }}` | sets the padding property on `.breadcrumb` |
| `$breadcrumbs--border-width` | `null` | sets the border-width property on `.breadcrumb` |
| `$breadcrumbs--border-style` | `null` | sets the border-style property on `.breadcrumb` |
| `$breadcrumbs--border-color` | `null` | sets the border-color property on `.breadcrumb` |
| `$breadcrumbs--border-radius` | `null` | sets the border-radius property on `.breadcrumb` |
| `$breadcrumbs--color` | `rgb(255, 255, 255)` | sets the color property on `.breadcrumb` |
| `$breadcrumbs--box-shadow` | `null` | sets the box-shadow property on `.breadcrumb` |
| `$breadcrumbs--background` | `null` | sets the background property on `.breadcrumb` |
| `$breadcrumbs--background-color` | `{{ page.trwl_theme.colors.primary }}` | sets the background-color property on `.breadcrumb` |
{% include doc/inner-heading-table.md title="Toggle" %}
{% include doc/scss-reference-tbody.md %}
| `$breadcrumbs-toggle--padding` | `{{ page.trwl_theme.padding_y }} {{ page.trwl_theme.padding_x }}` | sets the padding property on `.breadcrumb__toggle` |
| `$breadcrumbs-toggle--font-weight` | `null` | sets the font-weight property on `.breadcrumb__toggle` |
| `$breadcrumbs-toggle--line-height` | `{{ page.trwl_theme.line_height }}` | sets the line-height property on `.breadcrumb__toggle` |
| `$breadcrumbs-toggle--border` | `0` | sets the border property on `.breadcrumb__toggle` |
| `$breadcrumbs-toggle--padding` | `null` | sets the padding property on `.breadcrumb__toggle` |
| `$breadcrumbs-toggle--border-radius` | `{{ page.trwl_theme.border_radius }}` | sets the border-radius property on `.breadcrumb__toggle` |
| `$breadcrumbs-toggle--font-size` | `1em` | sets the font-size property on `.breadcrumb__toggle` |
| `$breadcrumbs-toggle--border-radius` | `null` | sets the border-radius property on `.breadcrumb__toggle` |
| `$breadcrumbs-toggle--transition` | `null` | sets the transition property on `.breadcrumb__toggle` |
| `$breadcrumbs-toggle--background-color` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;{{ page.trwl_theme.colors.danger }},<br>&nbsp;&nbsp;':hover':&nbsp;darken({{ page.trwl_theme.colors.danger }},&nbsp;20%),<br>&nbsp;&nbsp;':active':&nbsp;darken({{ page.trwl_theme.colors.danger }},&nbsp;20%),<br>&nbsp;&nbsp;':focus':&nbsp;darken({{ page.trwl_theme.colors.danger }},&nbsp;20%),<br>)</code> | sets the background-color property on `.breadcrumb__toggle` |
| `$breadcrumbs-toggle--color` | `rgb(255, 255, 255)` | sets the color property on `.breadcrumb__toggle` |
| `$breadcrumbs-toggle--letter-spacing` | `null` | sets the letter-spacing property on `.breadcrumb__toggle` |
| `$breadcrumbs-toggle--font-style` | `null` | sets the font-style property on `.breadcrumb__toggle` |
| `$breadcrumbs-toggle--text-transform` | `null` | sets the text-transform property on `.breadcrumb__toggle` |
| `$breadcrumbs-toggle--text-decoration` | `null` | sets the text-decoration property on `.breadcrumb__toggle` |
| `$breadcrumbs-toggle--box-shadow` | `null` | sets the box-shadow property on `.breadcrumb__toggle` |
{% include doc/inner-heading-table.md title="Back" %}
{% include doc/scss-reference-tbody.md %}
| `$breadcrumbs-back--padding` | `null` | sets the padding property on `.breadcrumb__back` |
| `$breadcrumbs-back--font-weight` | `null` | sets the font-weight property on `.breadcrumb__back` |
| `$breadcrumbs-back--line-height` | `{{ page.trwl_theme.line_height }}` | sets the line-height property on `.breadcrumb__back` |
| `$breadcrumbs-back--border` | `null` | sets the border property on `.breadcrumb__back` |
| `$breadcrumbs-back--border-radius` | `null` | sets the border-radius property on `.breadcrumb__back` |
| `$breadcrumbs-back--font-size` | `1em` | sets the font-size property on `.breadcrumb__back` |
| `$breadcrumbs-back--border-radius` | `null` | sets the border-radius property on `.breadcrumb__back` |
| `$breadcrumbs-back--transition` | `null` | sets the transition property on `.breadcrumb__back` |
| `$breadcrumbs-back--background-color` | `null` | sets the background-color property on `.breadcrumb__back` |
| `$breadcrumbs-back--color` | `rgb(255, 255, 255)` | sets the color property on `.breadcrumb__back` |
| `$breadcrumbs-back--letter-spacing` | `null` | sets the letter-spacing property on `.breadcrumb__back` |
| `$breadcrumbs-back--font-style` | `null` | sets the font-style property on `.breadcrumb__back` |
| `$breadcrumbs-back--text-transform` | `null` | sets the text-transform property on `.breadcrumb__back` |
| `$breadcrumbs-back--text-decoration` | <code>(<br>&nbsp;&nbsp;':hover':&nbsp;underline,<br>&nbsp;&nbsp;':active':&nbsp;underline,<br>&nbsp;&nbsp;':focus':&nbsp;underline,<br>)</code> | sets the text-decoration property on `.breadcrumb__back` |
| `$breadcrumbs-back--box-shadow` | `null` | sets the box-shadow property on `.breadcrumb__back` |
{% include doc/inner-heading-table.md title="List" %}
{% include doc/scss-reference-tbody.md %}
| `$breadcrumbs-list--background-color` | `$breadcrumbs--background-color` | sets the background-color property on `.breadcrumb__list` |
| `$breadcrumbs-list--transition` | `all 300ms ease-in-out` | sets the transition property on `.breadcrumb__list` |
| `$breadcrumbs-list--hidden-transform` | `translateY(-25%)` | sets the transform property on `.breadcrumb__list` when the list is hidden |
{% include doc/inner-heading-table.md title="Separator" %}
{% include doc/scss-reference-tbody.md %}
| `$breadcrumbs-separator--content` | `'>'` | sets the separator content between to list items when the device resolution is higher than responsive breakpoint |
| `$breadcrumbs-separator--margin-x` | `0.5em` | sets the left and right margin  |
{% include doc/inner-heading-table.md title="Item" %}
{% include doc/scss-reference-tbody.md %}
| `$breadcrumbs-item--color` | `inherit` | sets the color property on `.breadcrumb__item` |
| `$breadcrumbs-item--text-decoration` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;underline,<br>&nbsp;&nbsp;':hover':&nbsp;none,<br>&nbsp;&nbsp;':active':&nbsp;none,<br>&nbsp;&nbsp;':focus':&nbsp;none,<br>&nbsp;&nbsp;'~active':&nbsp;none,<br>)</code> | sets the text-decoration property on `.breadcrumb__item` |
| `$breadcrumbs-item--font-style` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;italic,<br>&nbsp;&nbsp;'~active':&nbsp;initial,<br>)</code> | sets the font-style property on `.breadcrumb__item` |
| `$breadcrumbs-item--padding` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;{{ page.trwl_theme.padding_y }}&nbsp;{{ page.trwl_theme.padding_x }},<br>&nbsp;&nbsp;$breadcrumbs--responsive-breakpoint:&nbsp;0,<br>)</code> | sets the padding property on `.breadcrumb__item` |
| `$background-coloradcrumbs-item--background-color` | <code>(<br>&nbsp;&nbsp;'<a':&nbsp;(<br>&nbsp;&nbsp;&nbsp;&nbsp;':hover':&nbsp;rgba(255,&nbsp;255,&nbsp;255,&nbsp;0.25),<br>&nbsp;&nbsp;&nbsp;&nbsp;':active':&nbsp;rgba(255,&nbsp;255,&nbsp;255,&nbsp;0.25),<br>&nbsp;&nbsp;&nbsp;&nbsp;':focus':&nbsp;rgba(255,&nbsp;255,&nbsp;255,&nbsp;0.25),<br>&nbsp;&nbsp;&nbsp;&nbsp;$breadcrumbs--responsive-breakpoint:&nbsp;(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;':hover':&nbsp;initial,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;':active':&nbsp;initial,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;':focus':&nbsp;initial,<br>&nbsp;&nbsp;&nbsp;&nbsp;),<br>&nbsp;&nbsp;),<br>)</code> | sets the color property on `.breadcrumb__item` |
| `$breadcrumbs-item--font-size` | `null` | sets the font-size property on `.breadcrumb__item` |
| `$breadcrumbs-item--text-transform` | `null` | sets the text-transform property on `.breadcrumb__item` |
| `$breadcrumbs-item--font-weight` | `null` | sets the font-weight property on `.breadcrumb__item` |
| `$breadcrumbs-item--line-height` | `null` | sets the line-height property on `.breadcrumb__item` |
| `$breadcrumbs-item--font-family` | `null` | sets the font-family property on `.breadcrumb__item` |
| `$breadcrumbs-item--text-shadow` | `null` | sets the text-shadow property on `.breadcrumb__item` |
| `$breadcrumbs-item--opacity` | <code>(<br>&nbsp;&nbsp;'~active':&nbsp;(<br>&nbsp;&nbsp;&nbsp;&nbsp;'default':&nbsp;0.5,<br>&nbsp;&nbsp;&nbsp;&nbsp;$breadcrumbs--responsive-breakpoint:&nbsp;initial,<br>&nbsp;&nbsp;),<br>)</code> | sets the opacity property on `.breadcrumb__item` |
