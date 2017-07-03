## Usage

<div class="preview">
<nav class="breadcrumb" data-flag="breadcrumb">
  <div class="breadcrumb__header">
    <button class="breadcrumb__toggle" data-breadcrumb="toggle">Previous pages</button>
    <a class="breadcrumb__back" onclick="history.go(-1)">Back</a>
  </div>

  <ul class="breadcrumb__list" data-breadcrumb="list" data-state="hidden">
    <li class="breadcrumb__list-item">
      <a class="breadcrumb__item" href="#">item 1</a>
    </li>

    <li class="breadcrumb__list-item">
      <a class="breadcrumb__item" href="#">item 2</a>
    </li>

    <li class="breadcrumb__list-item">
      <span class="breadcrumb__item breadcrumb__item--active">item 3</span>
    </li>
  </ul>
</nav>
</div>

```html
<nav class="breadcrumb" data-flag="breadcrumb">
  <div class="breadcrumb__header">
    <button class="breadcrumb__toggle" data-breadcrumb="toggle">Previous pages</button>
    <a class="breadcrumb__back" onclick="history.go(-1)">Back</a>
  </div>

  <ul class="breadcrumb__list" data-breadcrumb="list" data-state="hidden">
    <li class="breadcrumb__list-item">
      <a class="breadcrumb__item" href="#">item 1</a>
    </li>

    <li class="breadcrumb__list-item">
      <a class="breadcrumb__item" href="#">item 2</a>
    </li>

    <li class="breadcrumb__list-item">
      <span class="breadcrumb__item breadcrumb__item--active">item 3</span>
    </li>
  </ul>
</nav>
```

### The small device usage

You can with the variable `$breadcrumbs--responsive-breakpoint` setup the breakpoint where starts the "desktop" layout. Then you need to setup some javascript to work on small devices. You can do it into the html directly or with an import following es6 syntax :

#### Javascript usage into html

```html
<!-- As close of the </body> tag as possible -->
<script src="./path/to/trowel-breadcrumbs/dest/javascript/breadcrumbs.js"></script>

<script type="text/javascript">
  var breadcrumbs = new TrowelBreadcrumbs(document.querySelectorAll('[data-flag="breadcrumb"]'));
</script>
```

#### Javascript usage with an import

```js
import TrowelBreadcrumbs from './path/to/trowel-breadcrumbs/src/javascript/breadcrumbs';

const breadcrumbs = new TrowelBreadcrumbs(document.querySelectorAll('[data-flag="breadcrumb"]'));
```


### Twig usage

Instead of writing html, you can `include` the twig template :

```twig{% raw %}
{% include "path/to/trowel-breadcrumbs/src/twig/breadcrumb.html.twig" with {
  "items": [{
    "href": "#",
    "label": "item 1",
  }, {
    "href": "#",
    "label": "item 2",
  }, {
    "label": "item 3",
    "active": true,
  }]
} %}
{% endraw %}```

If you want to add some modifiers on the block selector (`.breadcrumb`), you can set the array `modifiers` with as many modifiers as you need :

```twig{% raw %}
{% include "path/to/trowel-breadcrumbs/src/twig/breadcrumb.html.twig" with {
  "modifiers": ['primary', 'lg'],
  "items": [{
    "href": "#",
    "label": "item 1",
  }, {
    "href": "#",
    "label": "item 2",
  }, {
    "label": "item 3",
    "active": true,
  }]
} %}
{% endraw %}```

If you setted some syntax config, you will have to pass it to the `include` :

```twig{% raw %}
{% include "path/to/trowel-breadcrumbs/src/twig/breadcrumb.html.twig" with {
  "syntax": {
    "prefix": "c",
    "separator": {
      "prefix": "-",
      "element": "-",
      "modifier": "-",
    },
  },
  "items": [{
    "href": "#",
    "label": "item 1",
  }, {
    "href": "#",
    "label": "item 2",
  }, {
    "label": "item 3",
    "active": true,
  }]
} %}
{% endraw %}```

For changing the back and toggle buttons label, replace the `include` statement by `embed` and overwrite the blocks `toggle_label` and `back_label` :

```twig{% raw %}
{% embed "path/to/trowel-breadcrumbs/src/twig/breadcrumb.html.twig" with {
  "items": [{
    "href": "#",
    "label": "item 1",
  }, {
    "href": "#",
    "label": "item 2",
  }, {
    "label": "item 3",
    "active": true,
  }]
} %}
  {% block toggle_label %}Previous{% endblock %}
  {% block back_label %}Go back{% endblock %}
{% endembed %}
{% endraw %}```