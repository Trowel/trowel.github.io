## Usage
A list-group is just an unordered list with classes on `<ul>` and `<li>` DOM elements.

<div class="preview">
<ul class="list-group">
  <li class="list-group__item">Cras justo odio</li>
  <li class="list-group__item">Dapibus ac facilisis in</li>
  <li class="list-group__item">Morbi leo risus</li>
  <li class="list-group__item">Porta ac consectetur ac</li>
  <li class="list-group__item">Vestibulum at eros</li>
</ul>
</div>
```html
<ul class="list-group">
  <li class="list-group__item">Cras justo odio</li>
  <li class="list-group__item">Dapibus ac facilisis in</li>
  <li class="list-group__item">Morbi leo risus</li>
  <li class="list-group__item">Porta ac consectetur ac</li>
  <li class="list-group__item">Vestibulum at eros</li>
</ul>
```

### Themed items

With the trowel variable `$listgroups-item--background-color` we setup some modifier-element flag that allow us to create themed list-group items.

<div class="preview">
<ul class="list-group">
  <li class="list-group__item list-group__item--primary">Cras justo odio</li>
  <li class="list-group__item list-group__item--success">Morbi leo risus</li>
  <li class="list-group__item list-group__item--warning">Vestibulum at eros</li>
  <li class="list-group__item list-group__item--danger">Morbi leo risus</li>
</ul>
</div>
```html
<ul class="list-group">
  <li class="list-group__item list-group__item--primary">Cras justo odio</li>
  <li class="list-group__item list-group__item--success">Morbi leo risus</li>
  <li class="list-group__item list-group__item--warning">Vestibulum at eros</li>
  <li class="list-group__item list-group__item--danger">Morbi leo risus</li>
</ul>
```

### List-group sizes

By default, the setup of the trowel variables generates modifiers classes that with different sizes for list-group.

<div class="preview">
<div class="flex-grid">
  <div class="flex-grid__col flex-grid__col--grow-1">
    <ul class="list-group list-group--xs">
      <li class="list-group__item">list group xs</li>
      <li class="list-group__item">item</li>
      <li class="list-group__item">item</li>
    </ul>
  </div>

  <div class="flex-grid__col flex-grid__col--grow-1">
    <ul class="list-group list-group--sm">
      <li class="list-group__item">list group sm</li>
      <li class="list-group__item">item</li>
      <li class="list-group__item">item</li>
    </ul>
  </div>

  <div class="flex-grid__col flex-grid__col--grow-1">
    <ul class="list-group">
      <li class="list-group__item">list group md</li>
      <li class="list-group__item">item</li>
      <li class="list-group__item">item</li>
    </ul>
  </div>

  <div class="flex-grid__col flex-grid__col--grow-1">
    <ul class="list-group list-group--lg">
      <li class="list-group__item">list group lg</li>
      <li class="list-group__item">Dapibus ac facilisis in</li>
      <li class="list-group__item">item</li>
    </ul>
  </div>
</div>
</div>
```html
<!-- Extra small list-group -->
<ul class="list-group list-group--xs">
  <li class="list-group__item">list group xs</li>
  <li class="list-group__item">item</li>
  <li class="list-group__item">item</li>
</ul>

<!-- Small list-group -->
<ul class="list-group list-group--sm">
  <li class="list-group__item">list group sm</li>
  <li class="list-group__item">item</li>
  <li class="list-group__item">item</li>
</ul>

<!-- Medium list-group -->
<ul class="list-group">
  <li class="list-group__item">list group md</li>
  <li class="list-group__item">item</li>
  <li class="list-group__item">item</li>
</ul>

<!-- Large list-group -->
<ul class="list-group list-group--lg">
  <li class="list-group__item">list group lg</li>
  <li class="list-group__item">Dapibus ac facilisis in</li>
  <li class="list-group__item">item</li>
</ul>
```