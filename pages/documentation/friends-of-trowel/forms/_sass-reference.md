## Sass reference

### Syntax variables

You can override the global syntax config for a specific component with the following variables

{% include doc/scss-reference-thead.md %}
| `$form--syntax` | `null` | syntax config for `.form-group`, `.checkbox`, `.radio` and `.select` blocks |


### Enables

You can avoid the generation of some css with those following variables

{% include doc/scss-reference-thead.md %}
| `$formgroup--enable` | `true` | enable the generation of style rules for the `.form-group` block |
| `$checkbox--enable` | `true` | enable the generation of style rules for the `.checkbox` block |
| `$radio--enable` | `true` | enable the generation of style rules for the `.radio` block |
| `$select--enable` | `true` | enable the generation of style rules for the `.select` block |


### Component variables

#### Form group

{% include doc/scss-reference-thead.md %}
| `$formgroup--font-size` | {{ page.trwl_theme.sizes.md }} | sets the font-size property on `.form-group` |
| `$formgroup--font-family` | null | sets the font-family property on `.form-group` |
| `$formgroup--margin-bottom` | 2em | sets the margin-bottom property on `.form-group` |
| `$formgroup--md-effet` | <code>(<br>&nbsp;&nbsp;'-md':&nbsp;true,<br>)</code> | sets style rules on `.form-group` for material design animation |
{% include doc/inner-heading-table.md title="Label" %}
{% include doc/scss-reference-tbody.md %}
| `$formgroup-label--font-size` | 0.75em | sets the font-size property on `.form-group__label` |
| `$formgroup-label--font-family` | null | sets the font-family property on `.form-group__label` |
| `$formgroup-label--margin-bottom` | 0.5em | sets the margin-bottom property on `.form-group__label` |
| `$formgroup-label--text-align` | null | sets the text-align property on `.form-group__label` |
| `$formgroup-label--line-height` | {{ page.trwl_theme.line_height }} | sets the line-height property on `.form-group__label` |
| `$formgroup-label--color` | null | sets the color property on `.form-group__label` |
| `$formgroup-label--font-style` | null | sets the font-style property on `.form-group__label` |
| `$formgroup-label--font-weight` | null | sets the font-weight property on `.form-group__label` |
| `$formgroup-label--text-transform` | null | sets the text-transform property on `.form-group__label` |
{% include doc/inner-heading-table.md title="Input" %}
{% include doc/scss-reference-tbody.md %}
| `$formgroup-input--padding` | 0 0 0.5em | sets the padding property on `.form-group__input` |
| `$formgroup-input--font-size` | 1em | sets the font-size property on `.form-group__input` |
| `$formgroup-input--line-height` | {{ page.trwl_theme.line_height }} | sets the line-height property on `.form-group__input` |
| `$formgroup-input--color` | black | sets the color property on `.form-group__input` |
| `$formgroup-input--background-color` | white | sets the background-color property on `.form-group__input` |
| `$formgroup-input--border-width` | 0 0 0.0625em 0 | sets the border-width property on `.form-group__input` |
| `$formgroup-input--border-style` | solid | sets the border-style property on `.form-group__input` |
| `$formgroup-input--border-color` | null | sets the border-color property on `.form-group__input` |
| `$formgroup-input--border-radius` | null | sets the border-radius property on `.form-group__input` |
| `$formgroup-input--box-shadow` | null | sets the box-shadow property on `.form-group__input` |
| `$formgroup-input--font-style` | null | sets the font-style property on `.form-group__input` |
| `$formgroup-input--font-weight` | null | sets the font-weight property on `.form-group__input` |
| `$formgroup-input--text-transform` | null | sets the text-transform property on `.form-group__input` |
| `$formgroup-input--outline` | (<br>&nbsp;&nbsp;':focus':&nbsp;0,<br>) | sets the outline property on `.form-group__input` |
{% include doc/inner-heading-table.md title="Help" %}
{% include doc/scss-reference-tbody.md %}
| `$formgroup-help--margin` | 0.5em 0 0 | sets the margin property on `.form-group__help` |
| `$formgroup-help--padding` | null | sets the padding property on `.form-group__help` |
| `$formgroup-help--font-size` | 0.8em | sets the font-size property on `.form-group__help` |
| `$formgroup-help--line-height` | null | sets the line-height property on `.form-group__help` |
| `$formgroup-help--color` | null | sets the color property on `.form-group__help` |
| `$formgroup-help--background-color` | null | sets the background-color property on `.form-group__help` |
| `$formgroup-help--background-image` | null | sets the background-image property on `.form-group__help` |
| `$formgroup-help--background-position` | null | sets the background-position property on `.form-group__help` |
| `$formgroup-help--background-size` | null | sets the background-size property on `.form-group__help` |
| `$formgroup-help--background-repeat` | null | sets the background-repeat property on `.form-group__help` |
| `$formgroup-help--border-width` | null | sets the border-width property on `.form-group__help` |
| `$formgroup-help--border-style` | null | sets the border-style property on `.form-group__help` |
| `$formgroup-help--border-color` | null | sets the border-color property on `.form-group__help` |
| `$formgroup-help--border-radius` | null | sets the border-radius property on `.form-group__help` |
| `$formgroup-help--box-shadow` | null | sets the box-shadow property on `.form-group__help` |
| `$formgroup-help--font-style` | null | sets the font-style property on `.form-group__help` |
| `$formgroup-help--font-weight` | null | sets the font-weight property on `.form-group__help` |
| `$formgroup-help--text-transform` | null | sets the text-transform property on `.form-group__help` |


#### Checkbox

{% include doc/scss-reference-thead.md %}
| `$checkbox--font-size` | `{{ page.trwl_theme.sizes.md }}` | sets the font-size property on `.checkbox` |
| `$checkbox--line-height` | `null` | sets the line-height property on `.checkbox` |
| `$checkbox--padding` | `null` | sets the padding property on `.checkbox` |
| `$checkbox--margin` | `null` | sets the margin property on `.checkbox` |
| `$checkbox--font-style` | `null` | sets the font-style property on `.checkbox` |
| `$checkbox--font-weight` | `null` | sets the font-weight property on `.checkbox` |
| `$checkbox--text-transform` | `null` | sets the text-transform property on `.checkbox` |
{% include doc/inner-heading-table.md title="Indicator" %}
{% include doc/scss-reference-tbody.md %}
| `$checkbox-indicator--size` | `1.25em` | sets the width and height properties on `.checkbox__indicator` |
| `$checkbox-indicator--margin` | `0 0.5em 0 0` | sets the margin property on `.checkbox__indicator` |
| `$checkbox-indicator--background-color` | `{{ page.trwl_theme.colors.gray_medium }}` | sets the background-color property on `.checkbox__indicator` |
| `$checkbox-indicator--background-image` | `null` | sets the background-image property on `.checkbox__indicator` |
| `$checkbox-indicator--background-repeat` | `null` | sets the background-repeat property on `.checkbox__indicator` |
| `$checkbox-indicator--background-size` | `null` | sets the background-size property on `.checkbox__indicator` |
| `$checkbox-indicator--background-position` | `null` | sets the background-position property on `.checkbox__indicator` |
| `$checkbox-indicator--border-radius` | `{{ page.trwl_theme.border_radius }}` | sets the border-radius property on `.checkbox__indicator` |
| `$checkbox-indicator--border-width` | `{{ page.trwl_theme.border_width }}` | sets the border-width property on `.checkbox__indicator` |
| `$checkbox-indicator--border-style` | `solid` | sets the border-style property on `.checkbox__indicator` |
| `$checkbox-indicator--border-color` | `{{ page.trwl_theme.colors.gray_dark }}` | sets the border-color property on `.checkbox__indicator` |
| `$checkbox-indicator--transition-property` | `null` | sets the transition-property property on `.checkbox__indicator` |
| `$checkbox-indicator--transition-timing-function` | `null` | sets the transition-timing-function property on `.checkbox__indicator` |
| `$checkbox-indicator--transition-duration` | `null` | sets the transition-duration property on `.checkbox__indicator` |
| `$checkbox-indicator--box-shadow` | `null` | sets the box-shadow property on `.checkbox__indicator` |
{% include doc/inner-heading-table.md title="Indicator::before" %}
{% include doc/scss-reference-tbody.md %}
| `$checkbox-indicator-before--width` | `0.875em` | sets the width property on `.checkbox__indicator:before` |
| `$checkbox-indicator-before--height` | `0.875em` | sets the height property on `.checkbox__indicator:before` |
| `$checkbox-indicator-before--background-color` | `transparent` | sets the background-color property on `.checkbox__indicator:before` |
| `$checkbox-indicator-before--background-image` | `null` | sets the background-image property on `.checkbox__indicator:before` |
| `$checkbox-indicator-before--background-repeat` | `null` | sets the background-repeat property on `.checkbox__indicator:before` |
| `$checkbox-indicator-before--background-size` | `null` | sets the background-size property on `.checkbox__indicator:before` |
| `$checkbox-indicator-before--background-position` | `null` | sets the background-position property on `.checkbox__indicator:before` |
| `$checkbox-indicator-before--border-radius` | `0.1em` | sets the border-radius property on `.checkbox__indicator:before` |
| `$checkbox-indicator-before--border-width` | `null` | sets the border-width property on `.checkbox__indicator:before` |
| `$checkbox-indicator-before--border-style` | `null` | sets the border-style property on `.checkbox__indicator:before` |
| `$checkbox-indicator-before--border-color` | `null` | sets the border-color property on `.checkbox__indicator:before` |
| `$checkbox-indicator-before--transition-property` | `null` | sets the transition-property property on `.checkbox__indicator:before` |
| `$checkbox-indicator-before--transition-timing-function` | `null` | sets the transition-timing-function property on `.checkbox__indicator:before` |
| `$checkbox-indicator-before--transition-duration` | `null` | sets the transition-duration property on `.checkbox__indicator:before` |
| `$checkbox-indicator-before--box-shadow` | `null` | sets the box-shadow property on `.checkbox__indicator:before` |
{% include doc/inner-heading-table.md title="Indicator::before checked" %}
{% include doc/scss-reference-tbody.md %}
| `$checkbox-indicator-checked-before--width` | `null` | sets the width property on `.checkbox__indicator:before` when the checkbox is checked |
| `$checkbox-indicator-checked-before--height` | `null` | sets the height property on `.checkbox__indicator:before` when the checkbox is checked |
| `$checkbox-indicator-checked-before--background-color` | `{{ page.trwl_theme.colors.primary }}` | sets the background-color property on `.checkbox__indicator:before` when the checkbox is checked |
| `$checkbox-indicator-checked-before--background-image` | `null` | sets the background-image property on `.checkbox__indicator:before` when the checkbox is checked |
| `$checkbox-indicator-checked-before--background-repeat` | `null` | sets the background-repeat property on `.checkbox__indicator:before` when the checkbox is checked |
| `$checkbox-indicator-checked-before--background-size` | `null` | sets the background-size property on `.checkbox__indicator:before` when the checkbox is checked |
| `$checkbox-indicator-checked-before--background-position` | `null` | sets the background-position property on `.checkbox__indicator:before` when the checkbox is checked |
| `$checkbox-indicator-checked-before--border-radius` | `null` | sets the border-radius property on `.checkbox__indicator:before` when the checkbox is checked |
| `$checkbox-indicator-checked-before--border-width` | `null` | sets the border-width property on `.checkbox__indicator:before` when the checkbox is checked |
| `$checkbox-indicator-checked-before--border-style` | `null` | sets the border-style property on `.checkbox__indicator:before` when the checkbox is checked |
| `$checkbox-indicator-checked-before--border-color` | `null` | sets the border-color property on `.checkbox__indicator:before` when the checkbox is checked |
| `$checkbox-indicator-checked-before--transition-property` | `null` | sets the transition-property property on `.checkbox__indicator:before` when the checkbox is checked |
| `$checkbox-indicator-checked-before--transition-timing-function` | `null` | sets the transition-timing-function property on `.checkbox__indicator:before` when the checkbox is checked |
| `$checkbox-indicator-checked-before--transition-duration` | `null` | sets the transition-duration property on `.checkbox__indicator:before` when the checkbox is checked |
| `$checkbox-indicator-checked-before--box-shadow` | `null` | sets the box-shadow property on `.checkbox__indicator:before` when the checkbox is checked |


#### Radio

{% include doc/scss-reference-thead.md %}
| `$radio--font-size` | {{ page.trwl_theme.sizes.md }} | sets the font-size property on `.radio` |
| `$radio--line-height` | null | sets the line-height property on `.radio` |
| `$radio--padding` | null | sets the padding property on `.radio` |
| `$radio--margin` | null | sets the margin property on `.radio` |
| `$radio--font-style` | null | sets the font-style property on `.radio` |
| `$radio--font-weight` | null | sets the font-weight property on `.radio` |
| `$radio--text-transform` | null | sets the text-transform property on `.radio` |
{% include doc/inner-heading-table.md title="Indicator" %}
{% include doc/scss-reference-tbody.md %}
| `$radio-indicator--size` | 1.25em | sets the width and height properties on `.radio__indicator` |
| `$radio-indicator--margin` | 0 0.5em 0 0 | sets the margin property on `.radio__indicator` |
| `$radio-indicator--background-color` | {{ page.trwl_theme.colors.gray_medium }} | sets the background-color property on `.radio__indicator` |
| `$radio-indicator--background-image` | null | sets the background-image property on `.radio__indicator` |
| `$radio-indicator--background-repeat` | null | sets the background-repeat property on `.radio__indicator` |
| `$radio-indicator--background-size` | null | sets the background-size property on `.radio__indicator` |
| `$radio-indicator--background-position` | null | sets the background-position property on `.radio__indicator` |
| `$radio-indicator--border-radius` | 100% | sets the border-radius property on `.radio__indicator` |
| `$radio-indicator--border-width` | {{ page.trwl_theme.border_width }} | sets the border-width property on `.radio__indicator` |
| `$radio-indicator--border-style` | solid | sets the border-style property on `.radio__indicator` |
| `$radio-indicator--border-color` | {{ page.trwl_theme.colors.gray_dark }} | sets the border-color property on `.radio__indicator` |
| `$radio-indicator--transition-property` | null | sets the transition-property property on `.radio__indicator` |
| `$radio-indicator--transition-timing-function` | null | sets the transition-timing-function property on `.radio__indicator` |
| `$radio-indicator--transition-duration` | null | sets the transition-duration property on `.radio__indicator` |
| `$radio-indicator--box-shadow` | null | sets the box-shadow property on `.radio__indicator` |
{% include doc/inner-heading-table.md title="Indicator::before" %}
{% include doc/scss-reference-tbody.md %}
| `$radio-indicator-before--width` | 0.875em | sets the width property on `.radio__indicator:before` |
| `$radio-indicator-before--height` | 0.875em | sets the height property on `.radio__indicator:before` |
| `$radio-indicator-before--background-color` | transparent | sets the background-color property on `.radio__indicator:before` |
| `$radio-indicator-before--background-image` | null | sets the background-image property on `.radio__indicator:before` |
| `$radio-indicator-before--background-repeat` | null | sets the background-repeat property on `.radio__indicator:before` |
| `$radio-indicator-before--background-size` | null | sets the background-size property on `.radio__indicator:before` |
| `$radio-indicator-before--background-position` | null | sets the background-position property on `.radio__indicator:before` |
| `$radio-indicator-before--border-radius` | 100% | sets the border-radius property on `.radio__indicator:before` |
| `$radio-indicator-before--border-width` | null | sets the border-width property on `.radio__indicator:before` |
| `$radio-indicator-before--border-style` | null | sets the border-style property on `.radio__indicator:before` |
| `$radio-indicator-before--border-color` | null | sets the border-color property on `.radio__indicator:before` |
| `$radio-indicator-before--transition-property` | null | sets the transition-property property on `.radio__indicator:before` |
| `$radio-indicator-before--transition-timing-function` | null | sets the transition-timing-function property on `.radio__indicator:before` |
| `$radio-indicator-before--transition-duration` | null | sets the transition-duration property on `.radio__indicator:before` |
| `$radio-indicator-before--box-shadow` | null | sets the box-shadow property on `.radio__indicator:before` |
{% include doc/inner-heading-table.md title="Indicator::before checked" %}
{% include doc/scss-reference-tbody.md %}
| `$radio-indicator-checked-before--width` | null | sets the width property on `.radio__indicator:before` when the checkbox is checked |
| `$radio-indicator-checked-before--height` | null | sets the height property on `.radio__indicator:before` when the checkbox is checked |
| `$radio-indicator-checked-before--background-color` | {{ page.trwl_theme.colors.primary }} | sets the background-color property on `.radio__indicator:before` when the checkbox is checked |
| `$radio-indicator-checked-before--background-image` | null | sets the background-image property on `.radio__indicator:before` when the checkbox is checked |
| `$radio-indicator-checked-before--background-repeat` | null | sets the background-repeat property on `.radio__indicator:before` when the checkbox is checked |
| `$radio-indicator-checked-before--background-size` | null | sets the background-size property on `.radio__indicator:before` when the checkbox is checked |
| `$radio-indicator-checked-before--background-position` | null | sets the background-position property on `.radio__indicator:before` when the checkbox is checked |
| `$radio-indicator-checked-before--border-radius` | null | sets the border-radius property on `.radio__indicator:before` when the checkbox is checked |
| `$radio-indicator-checked-before--border-width` | null | sets the border-width property on `.radio__indicator:before` when the checkbox is checked |
| `$radio-indicator-checked-before--border-style` | null | sets the border-style property on `.radio__indicator:before` when the checkbox is checked |
| `$radio-indicator-checked-before--border-color` | null | sets the border-color property on `.radio__indicator:before` when the checkbox is checked |
| `$radio-indicator-checked-before--transition-property` | null | sets the transition-property property on `.radio__indicator:before` when the checkbox is checked |
| `$radio-indicator-checked-before--transition-timing-function` | null | sets the transition-timing-function property on `.radio__indicator:before` when the checkbox is checked |
| `$radio-indicator-checked-before--transition-duration` | null | sets the transition-duration property on `.radio__indicator:before` when the checkbox is checked |
| `$radio-indicator-checked-before--box-shadow` | null | sets the box-shadow property on `.radio__indicator:before` when the checkbox is checked |


#### Select

{% include doc/scss-reference-thead.md %}
| `$select--color` | rgb(0, 0, 0) | sets the color property |
| `$select--font-size` | {{ page.trwl_theme.sizes.md }} | sets the font-size property |
| `$select--font-family` | null | sets the font-family property |
| `$select--border-radius` | {{ page.trwl_theme.border_radius }} | sets the border-radius property |
| `$select--border-width` | {{ page.trwl_theme.border_width }} | sets the border-width property |
| `$select--border-style` | solid | sets the border-style property |
| `$select--border-color` | {{ page.trwl_theme.colors.gray_dark }} | sets the border-color property |
| `$select--box-shadow` | null | sets the box-shadow property |
| `$select--width` | null | sets the width property |
| `$select--height` | null | sets the height property |
| `$select--margin` | null | sets the margin property |
| `$select--padding-x` | {{ page.trwl_theme.padding_x }} | sets the padding-left and padding-right properties |
| `$select--padding-y` | {{ page.trwl_theme.padding_y }} | sets the padding-top and padding-bottom properties |
| `$select--line-height` | null | sets the line-height property |
| `$select--background-color` | {{ page.trwl_theme.colors.gray_medium }} | sets the background-color property |
| `$select--cursor` | pointer | sets the cursor property |
{% include doc/inner-heading-table.md title="Caret" %}
{% include doc/scss-reference-tbody.md %}
| `$select-caret--method` | 'css' |  sets if the caret design is made of a css triangle or background-image. Can be `'css'` or `'image'` |
| `$select-caret--width` | 0.7em | sets the caret width |
| `$select-caret--height` | 0.4em | sets the caret height |
| `$select-caret--margin-left` | 0.5em | sets the caret margin-left |
| `$select-caret--background-color` | currentColor | sets the caret background-color |

