## Sass reference

### Syntax variables

You can override the global syntax config for a specific component with the following variables

{% include doc/scss-reference-thead.md %}
| `$covers--syntax` | `null` | syntax config for `.cover` |

### Component variables

{% include doc/scss-reference-thead.md %}
| `$covers--font-size` | `{{ page.trwl_theme.sizes.md }}` | sets the font-size property |
| `$covers--font-family` | `null` | sets the font-family property |
| `$covers--font-weight` | `null` | sets the font-weight property |
| `$covers--text-transform` | `null` | sets the text-transform property |
| `$covers--letter-spacing` | `null` | sets the letter-spacing property |
| `$covers--line-height` | `null` | sets the line-height property |
| `$covers--text-align` | `null` | sets the text-align property |
| `$covers--text-decoration` | `null` | sets the text-decoration property |
| `$covers--margin` | `0 0 2em` | sets the margin property |
| `$covers--border-width` | `null` | sets the border-width property |
| `$covers--border-style` | `null` | sets the border-style property |
| `$covers--border-color` | `null` | sets the border-color property |
| `$covers--border-radius` | `null` | sets the border-radius property |
| `$covers--color` | `null` | sets the color property |
| `$covers--box-shadow` | `null` | sets the box-shadow property |
| `$covers--background` | `null` | sets the background property |
| `$covers--background-color` | `null` | sets the background-color property |
| `$covers--height` | `null` | sets the height property |
| `$covers--min-height` | `18.75em` | sets the min-height property |
| `$covers--max-height` | `null` | sets the max-height property |
{% include doc/inner-heading-table.md title="Overlay" %}
{% include doc/scss-reference-tbody.md %}
| `$covers-overlay--background` | `null` | sets the background property for `.cover__overlay` |
| `$covers-overlay--background-color` | <code>(<br>&nbsp;&nbsp;'-overlaid':&nbsp;rgba(0,&nbsp;0,&nbsp;0,&nbsp;0.6),<br>)</code> | sets the background-color property for `.cover__overlay` |
| `$covers-overlay--opacity` | `null` | sets the opacity property for `.cover__overlay` |
{% include doc/inner-heading-table.md title="Image" %}
{% include doc/scss-reference-tbody.md %}
| `$covers-image--opacity` | `null` | sets the opacity property for `.cover__image` |
| `$covers-image--object-fit` | `cover` | sets the object-fit property for `.cover__image` |
{% include doc/inner-heading-table.md title="Content" %}
{% include doc/scss-reference-tbody.md %}
| `$covers-content--font-size` | `null` | sets the font-size property for `.cover__content` |
| `$covers-content--font-family` | `null` | sets the font-family property for `.cover__content` |
| `$covers-content--font-weight` | `null` | sets the font-weight property for `.cover__content` |
| `$covers-content--text-transform` | `null` | sets the text-transform property for `.cover__content` |
| `$covers-content--letter-spacing` | `null` | sets the letter-spacing property for `.cover__content` |
| `$covers-content--line-height` | `null` | sets the line-height property for `.cover__content` |
| `$covers-content--text-align` | `null` | sets the text-align property for `.cover__content` |
| `$covers-content--text-decoration` | `null` | sets the text-decoration property for `.cover__content` |
| `$covers-content--margin` | `auto` | sets the margin property for `.cover__content` |
| `$covers-content--padding` | `0 1em` | sets the padding property for `.cover__content` |
| `$covers-content--color` | <code>(<br>&nbsp;&nbsp;'-overlaid':&nbsp;rgb(255,&nbsp;255,&nbsp;255),<br>)</code> | sets the color property for `.cover__content` |
| `$covers-content--background` | `null` | sets the background property for `.cover__content` |
| `$covers-content--background-color` | `null` | sets the background-color property for `.cover__content` |
| `$covers-content--width` | `null` | sets the width property for `.cover__content` |
| `$covers-content--max-width` | `75em` | sets the max-width property for `.cover__content` |
{% include doc/inner-heading-table.md title="Header" %}
{% include doc/scss-reference-tbody.md %}
| `$covers-header--font-size` | `null` | sets the font-size property for `.cover__header` |
| `$covers-header--font-family` | `null` | sets the font-family property for `.cover__header` |
| `$covers-header--font-weight` | `null` | sets the font-weight property for `.cover__header` |
| `$covers-header--text-transform` | `null` | sets the text-transform property for `.cover__header` |
| `$covers-header--letter-spacing` | `null` | sets the letter-spacing property for `.cover__header` |
| `$covers-header--line-height` | `null` | sets the line-height property for `.cover__header` |
| `$covers-header--text-align` | `null` | sets the text-align property for `.cover__header` |
| `$covers-header--text-decoration` | `null` | sets the text-decoration property for `.cover__header` |
| `$covers-header--margin` | `null` | sets the margin property for `.cover__header` |
| `$covers-header--padding` | `null` | sets the padding property for `.cover__header` |
| `$covers-header--color` | `null` | sets the color property for `.cover__header` |
| `$covers-header--background` | `null` | sets the background property for `.cover__header` |
| `$covers-header--background-color` | `null` | sets the background-color property for `.cover__header` |
| `$covers-header--height` | `null` | sets the height property for `.cover__header` |
| `$covers-header--max-height` | `null` | sets the max-height property for `.cover__header` |
| `$covers-header--width` | `null` | sets the width property for `.cover__header` |
| `$covers-header--max-width` | `null` | sets the max-width property for `.cover__header` |
{% include doc/inner-heading-table.md title="Body" %}
{% include doc/scss-reference-tbody.md %}
| `$covers-body--font-size` | `null` | sets the font-size property for `.cover__body` |
| `$covers-body--font-family` | `null` | sets the font-family property for `.cover__body` |
| `$covers-body--font-weight` | `null` | sets the font-weight property for `.cover__body` |
| `$covers-body--text-transform` | `null` | sets the text-transform property for `.cover__body` |
| `$covers-body--letter-spacing` | `null` | sets the letter-spacing property for `.cover__body` |
| `$covers-body--line-height` | `null` | sets the line-height property for `.cover__body` |
| `$covers-body--text-align` | `null` | sets the text-align property for `.cover__body` |
| `$covers-body--text-decoration` | `null` | sets the text-decoration property for `.cover__body` |
| `$covers-body--margin` | `null` | sets the margin property for `.cover__body` |
| `$covers-body--padding` | `null` | sets the padding property for `.cover__body` |
| `$covers-body--color` | `null` | sets the color property for `.cover__body` |
| `$covers-body--background` | `null` | sets the background property for `.cover__body` |
| `$covers-body--background-color` | `null` | sets the background-color property for `.cover__body` |
| `$covers-body--height` | `null` | sets the height property for `.cover__body` |
| `$covers-body--max-height` | `null` | sets the max-height property for `.cover__body` |
| `$covers-body--width` | `null` | sets the width property for `.cover__body` |
| `$covers-body--max-width` | `null` | sets the max-width property for `.cover__body` |
{% include doc/inner-heading-table.md title="Footer" %}
{% include doc/scss-reference-tbody.md %}
| `$covers-footer--font-size` | `null` | sets the font-size property for `.cover__footer` |
| `$covers-footer--font-family` | `null` | sets the font-family property for `.cover__footer` |
| `$covers-footer--font-weight` | `null` | sets the font-weight property for `.cover__footer` |
| `$covers-footer--text-transform` | `null` | sets the text-transform property for `.cover__footer` |
| `$covers-footer--letter-spacing` | `null` | sets the letter-spacing property for `.cover__footer` |
| `$covers-footer--line-height` | `null` | sets the line-height property for `.cover__footer` |
| `$covers-footer--text-align` | `center` | sets the text-align property for `.cover__footer` |
| `$covers-footer--text-decoration` | `null` | sets the text-decoration property for `.cover__footer` |
| `$covers-footer--margin` | `null` | sets the margin property for `.cover__footer` |
| `$covers-footer--padding` | `null` | sets the padding property for `.cover__footer` |
| `$covers-footer--color` | `null` | sets the color property for `.cover__footer` |
| `$covers-footer--background` | `null` | sets the background property for `.cover__footer` |
| `$covers-footer--background-color` | `null` | sets the background-color property for `.cover__footer` |
| `$covers-footer--height` | `null` | sets the height property for `.cover__footer` |
| `$covers-footer--max-height` | `null` | sets the max-height property for `.cover__footer` |
| `$covers-footer--width` | `null` | sets the width property for `.cover__footer` |
| `$covers-footer--max-width` | `null` | sets the max-width property for `.cover__footer` |
{% include doc/inner-heading-table.md title="Scroll button" %}
{% include doc/scss-reference-tbody.md %}
| `$covers-button--vertical-align` | `middle` | sets the vertical-align property for `.cover__scroll-btn` |
| `$covers-button--float` | `null` | sets the float property for `.cover__scroll-btn` |
| `$covers-button--display` | `inline-block` | sets the display property for `.cover__scroll-btn` |
| `$covers-button--border-width` | `0` | sets the border-width property for `.cover__scroll-btn` |
| `$covers-button--padding` | `0.666666667em` | sets the padding property for `.cover__scroll-btn` |
| `$covers-button--width` | `null` | sets the width property for `.cover__scroll-btn` |
| `$covers-button--margin` | `null` | sets the margin property for `.cover__scroll-btn` |
| `$covers-button--height` | `null` | sets the height property for `.cover__scroll-btn` |
| `$covers-button--color` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;inherit,<br>&nbsp;&nbsp;':hover':&nbsp;rgb(0,&nbsp;0,&nbsp;0),<br>&nbsp;&nbsp;':active':&nbsp;rgb(0,&nbsp;0,&nbsp;0),<br>&nbsp;&nbsp;':focus':&nbsp;rgb(0,&nbsp;0,&nbsp;0),<br>)</code> | sets the color property for `.cover__scroll-btn` |
| `$covers-button--border-color` | `null` | sets the border-color property for `.cover__scroll-btn` |
| `$covers-button--background-color` | <code>(<br>&nbsp;&nbsp;'default':&nbsp;transparent,<br>&nbsp;&nbsp;':hover':&nbsp;rgb(255,&nbsp;255,&nbsp;255),<br>&nbsp;&nbsp;':active':&nbsp;rgb(255,&nbsp;255,&nbsp;255),<br>&nbsp;&nbsp;':focus':&nbsp;rgb(255,&nbsp;255,&nbsp;255),<br>)</code> | sets the background-color property for `.cover__scroll-btn` |
| `$covers-button--opacity` | `null` | sets the opacity property for `.cover__scroll-btn` |
| `$covers-button--font-size` | `1em` | sets the font-size property for `.cover__scroll-btn` |
| `$covers-button--text-decoration` | `null` | sets the text-decoration property for `.cover__scroll-btn` |
| `$covers-button--line-height` | `null` | sets the line-height property for `.cover__scroll-btn` |
| `$covers-button--text-align` | `center` | sets the text-align property for `.cover__scroll-btn` |
| `$covers-button--font-family` | `null` | sets the font-family property for `.cover__scroll-btn` |
| `$covers-button--font-weight` | `null` | sets the font-weight property for `.cover__scroll-btn` |
| `$covers-button--text-transform` | `null` | sets the text-transform property for `.cover__scroll-btn` |
| `$covers-button--letter-spacing` | `null` | sets the letter-spacing property for `.cover__scroll-btn` |
| `$covers-button--border-radius` | `null` | sets the border-radius property for `.cover__scroll-btn` |
| `$covers-button--border-style` | `null` | sets the border-style property for `.cover__scroll-btn` |
| `$covers-button--box-shadow` | `null` | sets the box-shadow property for `.cover__scroll-btn` |
| `$covers-button--transition` | `null` | sets the transition property for `.cover__scroll-btn` |
| `$covers-button--cursor` | `pointer` | sets the cursor property for `.cover__scroll-btn` |
