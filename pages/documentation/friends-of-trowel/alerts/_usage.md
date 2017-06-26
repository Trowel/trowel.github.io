## Usage


<div class="preview">
  <div class="alert alert--primary" role="alert">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>
</div>

```html
<div class="alert alert--primary" role="alert">
  ...
</div>
```

### Themes

By default, you have access to four alert themes. You can of course, totally change thoses themes, delete or add some, through trowel variables.

<div class="preview">
  <div class="alert alert--primary" role="alert">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>

  <div class="alert alert--success" role="alert">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>

  <div class="alert alert--warning" role="alert">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>

  <div class="alert alert--danger" role="alert">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>
</div>

```html
<div class="alert alert--primary" role="alert">
  ...
</div>

<div class="alert alert--success" role="alert">
  ...
</div>

<div class="alert alert--warning" role="alert">
  ...
</div>

<div class="alert alert--danger" role="alert">
  ...
</div>
```

### Sizes

You also, by default, have access to 4 sizes :

<div class="preview">
  <div class="alert alert--primary alert--xs" role="alert">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>

  <div class="alert alert--primary alert--sm" role="alert">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>

  <div class="alert alert--primary" role="alert">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>

  <div class="alert alert--primary alert--lg" role="alert">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>
</div>

```html
<div class="alert alert--primary alert--xs" role="alert">
  ...
</div>

<div class="alert alert--primary alert--sm" role="alert">
  ...
</div>

<div class="alert alert--primary" role="alert">
  ...
</div>

<div class="alert alert--primary alert--lg" role="alert">
  ...
</div>
```

### Auto-delete

You can add a button following the markup below. When the user click on this button, it will delete the alert.

<div class="preview">
  <div class="alert alert--primary" role="alert">
    <button class="alert__times" data-alert="times">&times;</button>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>
</div>

```html
<div class="alert alert--primary" role="alert">
  <button class="alert__times" data-alert="times">&times;</button>

  ...
</div>
```

In order to make it work you need to setup some javascript. You have two ways to make it work :

#### Javascript usage into html

```html
<script src="./path/to/trowel-alerts/javascript/alerts.js"></script>

<script type="text/javascript">
  var alerts = new TrowelAlerts(document.querySelectorAll('.alert'));
</script>
```

#### Javascript usage with an import

```js
import TrowelAlerts from './path/to/trowel-alerts/src/javascript/alerts';

const alerts = new TrowelAlerts(document.querySelectorAll('.alert'));
```

### Twig usage

Instead of writing html, you can `embed` the twig template :

```twig{% raw %}
{% embed 'path/to/trowel-alerts/src/twig/alert.html.twig' with {
  'modifiers': ['primary'],
} %}
  {% block body %}lorem ipsum...{% endblock %}
{% endembed %}
{% endraw %}```

If you want to add some modifiers on the block selector (`.breadcrumb`), you can set the array `modifiers` with as many modifiers as you need :

```twig{% raw %}
{% embed 'path/to/trowel-alerts/src/twig/alert.html.twig' with {
  'modifiers': ['primary', 'xs'],
} %}
  {% block body %}lorem ipsum...{% endblock %}
{% endembed %}
{% endraw %}```

To add the times button just set as true `times`

```twig{% raw %}
{% embed 'path/to/trowel-alerts/src/twig/alert.html.twig' with {
  'times': true,
} %}
  {% block body %}lorem ipsum...{% endblock %}
{% endembed %}
{% endraw %}```