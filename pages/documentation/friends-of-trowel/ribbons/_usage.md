## Usage

<span class="ribbon">
  <span class="ribbon__band">
    <span class="ribbon__content">default</span>
  </span>
</span>

```html
<span class="ribbon">
  <span class="ribbon__band">
    <span class="ribbon__content">default</span>
  </span>
</span>
```

### On the right

By default the ribbon is oriented on the left, but with the `.ribbon--right` class you can flip the orientation.

<span class="ribbon ribbon--right">
  <span class="ribbon__band">
    <span class="ribbon__content">default</span>
  </span>
</span>

```html
<span class="ribbon ribbon--right">
  <span class="ribbon__band">
    <span class="ribbon__content">default</span>
  </span>
</span>
```

<p class="callout callout--success">
  If you don't need a right orientation, or you want to change the default orientation just overwrite the trowel variable `$ribbons--position`.
</p>

### Themes

By default, you have access to 5 themes :


<div class="preview">
<div class="flex-grid">
  <span class="ribbon">
    <span class="ribbon__band">
      <span class="ribbon__content">default</span>
    </span>
  </span>

  <span class="ribbon ribbon--primary">
    <span class="ribbon__band">
      <span class="ribbon__content">primary</span>
    </span>
  </span>

  <span class="ribbon ribbon--success">
    <span class="ribbon__band">
      <span class="ribbon__content">success</span>
    </span>
  </span>

  <span class="ribbon ribbon--warning">
    <span class="ribbon__band">
      <span class="ribbon__content">warning</span>
    </span>
  </span>

  <span class="ribbon ribbon--danger">
    <span class="ribbon__band">
      <span class="ribbon__content">danger</span>
    </span>
  </span>
  </div>
</div>

```html
<span class="ribbon">
  <span class="ribbon__band">
    <span class="ribbon__content">default</span>
  </span>
</span>

<span class="ribbon ribbon--primary">
  <span class="ribbon__band">
    <span class="ribbon__content">primary</span>
  </span>
</span>

<span class="ribbon ribbon--success">
  <span class="ribbon__band">
    <span class="ribbon__content">success</span>
  </span>
</span>

<span class="ribbon ribbon--warning">
  <span class="ribbon__band">
    <span class="ribbon__content">warning</span>
  </span>
</span>

<span class="ribbon ribbon--danger">
  <span class="ribbon__band">
    <span class="ribbon__content">danger</span>
  </span>
</span>
```

### Twig usage

Instead of writing html, you can `embed` the twig template :

```twig{% raw %}
{% embed "path/to/trowel-ribbons/src/twig/ribbon.html.twig" %}
  {% block content %}default{% endblock %}
{% endembed %}
{% endraw %}```

If you want to add some `modifiers` on the block selector (`.ribbon`), you can set the array modifiers with as many modifiers as you need :

```twig{% raw %}
{% embed "path/to/trowel-ribbons/src/twig/ribbon.html.twig" with {
  "modifiers": ["primary"]
} %}
  {% block content %}primary{% endblock %}
{% endembed %}
{% endraw %}```