## Usage

<div class="preview">
  <div class="progress">
    <div class="progress__bar" style="width: 25%" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>

```html
<div class="progress">
  <div class="progress__bar" style="width: 25%" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

If you want to add the progress value into the bar, just add the value into the `.progress__bar` element.

<div class="preview">
  <div class="progress progress--primary">
    <div class="progress__bar" style="width: 33%" role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">33%</div>
  </div>
</div>

```html
<div class="progress progress--primary">
  <div class="progress__bar" style="width: 33%" role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">33%</div>
</div>
```

### Themes

By default, you have access to 4 themes :

<div class="preview">
  <div class="progress progress--primary">
    <div class="progress__bar" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
  </div>

  <div class="progress progress--success">
    <div class="progress__bar" style="width: 40%" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
  </div>

  <div class="progress progress--warning">
    <div class="progress__bar" style="width: 60%" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
  </div>

  <div class="progress progress--danger">
    <div class="progress__bar" style="width: 80%" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>

```html
<div class="progress progress--primary">
  <div class="progress__bar" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<div class="progress progress--success">
  <div class="progress__bar" style="width: 40%" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<div class="progress progress--warning">
  <div class="progress__bar" style="width: 60%" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<div class="progress progress--danger">
  <div class="progress__bar" style="width: 80%" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

### Sizes

By default, you have access to 4 sizes :

<div class="preview">
  <div class="progress progress--xs">
    <div class="progress__bar" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
  </div>

  <div class="progress progress--sm">
    <div class="progress__bar" style="width: 40%" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
  </div>

  <div class="progress">
    <div class="progress__bar" style="width: 60%" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
  </div>

  <div class="progress progress--lg">
    <div class="progress__bar" style="width: 80%" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>

```html
<div class="progress progress--xs">
  <div class="progress__bar" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<div class="progress progress--sm">
  <div class="progress__bar" style="width: 40%" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<div class="progress">
  <div class="progress__bar" style="width: 60%" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<div class="progress progress--lg">
  <div class="progress__bar" style="width: 80%" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

### Twig usage

Instead of writing html, you can `include` the twig template :

```twig{% raw %}
{% include "path/to/trowel-progress/src/twig/progress.html.twig" with {
  "min": 0,
  "max": 100,
  "now": 25,
} %}
{% endraw %}```

To add a label into the bar transform the `include` as an `embed` and overwrite the `label` block :

```twig{% raw %}
{% embed "path/to/trowel-progress/src/twig/progress.html.twig" with {
  "min": 0,
  "max": 100,
  "now": 25,
} %}
  {% block label %}25%{% endblock %}
{% endembed %}
{% endraw %}```

If you want to add some modifiers on the block selector (`.progress`) in order to, for example, use a specific theme or size, you can set the array modifiers with as many modifiers as you need :

```twig{% raw %}
{% include "path/to/trowel-progress/src/twig/progress.html.twig" with {
  "modifiers": ["lg", "success"],
  "min": 0,
  "max": 100,
  "now": 25,
} %}
{% endraw %}```