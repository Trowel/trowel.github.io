## Usage

<div class="preview">
<div class="card">
  <div class="card__block">
    <h4 class="card__heading">Simple card</h4>
    <p class="card__paragraph">Card as simple panel</p>
  </div>
</div>
</div>

```html
<div class="card">
  <div class="card__block">
    <h4 class="card__heading">Simple card</h4>
    <p class="card__paragraph">Card as simple panel</p>
  </div>
</div>
```


### With a cover

You can add an image displaying as a cover with the wrapper `.card__cover-wrapper` and an `<img>` with the class `.card__cover`.

<div class="preview">
<div class="card">
  <div class="card__cover-wrapper">
    <img class="card__cover" src="http://placehold.it/350x150">
  </div>

  <div class="card__block">
    <h4 class="card__heading">Simple card</h4>
    <p class="card__paragraph">Card as simple panel</p>
  </div>
</div>
</div>

```html
<div class="card">
  <div class="card__cover-wrapper">
    <img class="card__cover" src="http://placehold.it/350x150">
  </div>

  <div class="card__block">
    <h4 class="card__heading">Simple card</h4>
    <p class="card__paragraph">Card as simple panel</p>
  </div>
</div>
```

### Whole card clickable

With adding an `<a>` element with the class `.card__href` as the first child of `.card`, you can make the whole card clickable.

<div class="preview">
<div class="card">
  <a class="card__href" href="#"></a>

  <div class="card__cover-wrapper">
    <img class="card__cover" src="http://placehold.it/350x150">
  </div>

  <div class="card__block">
    <h4 class="card__heading">Simple card</h4>
    <p class="card__paragraph">Card as simple panel</p>
  </div>
</div>
</div>

```html
<div class="card">
  <a class="card__href" href="#"></a>

  <div class="card__cover-wrapper">
    <img class="card__cover" src="http://placehold.it/350x150">
  </div>

  <div class="card__block">
    <h4 class="card__heading">Simple card</h4>
    <p class="card__paragraph">Card as simple panel</p>
  </div>
</div>
```

### Themes

By default, you have access to 4 themes. You can with trowel variables, edit, add or remove themes.

<div class="flex-grid" id="grid-cards-theme">
  <div class="flex-grid__col">
    <div class="card card--primary">
      <div class="card__cover-wrapper">
        <img class="card__cover" src="http://placehold.it/350x150">
      </div>

      <div class="card__block">
        <h4 class="card__heading">Simple card</h4>
        <p class="card__paragraph">Card as simple panel</p>
      </div>
    </div>
  </div>

  <div class="flex-grid__col">
    <div class="card card--success">
      <div class="card__cover-wrapper">
        <img class="card__cover" src="http://placehold.it/350x150">
      </div>

      <div class="card__block">
        <h4 class="card__heading">Simple card</h4>
        <p class="card__paragraph">Card as simple panel</p>
      </div>
    </div>
  </div>

  <div class="flex-grid__col">
    <div class="card card--warning">
      <div class="card__cover-wrapper">
        <img class="card__cover" src="http://placehold.it/350x150">
      </div>

      <div class="card__block">
        <h4 class="card__heading">Simple card</h4>
        <p class="card__paragraph">Card as simple panel</p>
      </div>
    </div>
  </div>

  <div class="flex-grid__col">
    <div class="card card--danger">
      <div class="card__cover-wrapper">
        <img class="card__cover" src="http://placehold.it/350x150">
      </div>

      <div class="card__block">
        <h4 class="card__heading">Simple card</h4>
        <p class="card__paragraph">Card as simple panel</p>
      </div>
    </div>
  </div>
</div>

```html
<div class="card card--primary">
  ...
</div>

<div class="card card--success">
  ...
</div>

<div class="card card--warning">
  ...
</div>

<div class="card card--danger">
  ...
</div>
```


### Twig usage

Instead of writing html, you can `embed` the twig template :

```twig{% raw %}
{% embed 'path/to/trowel-cards/src/twig/card.html.twig' %}
  {% block card_block_inner %}
    <h4 class="card__heading">Full card</h4>
    <p class="card__paragraph">Card with cover</p>
  {% endblock card_block_inner %}
{% endembed %}
{% endraw %}```

In order to add a cover, set the `cover` property into the `embed` options

```twig{% raw %}
{% embed "path/to/trowel-cards/src/twig/card.html.twig" with {
  "cover": "http://placehold.it/350x150"
} %}
  {% block card_block_inner %}
    <h4 class="card__heading">Full card</h4>
    <p class="card__paragraph">Card with cover</p>
  {% endblock card_block_inner %}
{% endembed %}
{% endraw %}```

If you want to add some modifiers on the block selector (`.card`), you can set the array `modifiers` with as many modifiers as you need :

```twig{% raw %}
{% embed "path/to/trowel-cards/src/twig/card.html.twig" with {
  "modifiers": ["primary"],
} %}
  {% block card_block_inner %}
    <h4 class="card__heading">Full card</h4>
    <p class="card__paragraph">Card with cover</p>
  {% endblock card_block_inner %}
{% endembed %}
{% endraw %}```