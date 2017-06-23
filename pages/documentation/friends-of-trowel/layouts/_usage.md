## Usage

### Containers

Use the `.container` class to contain your content in a fixed width.

<div class="preview">
  <div class="container">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</div>  
```html
<div class="container">
  ...
</div>
```

With the `$container--width` you can control the width of the container, and for example do fluid containers by setting up `100%` as designed by default on the flag `-fluid`.

<div class="preview">
  <div class="container container--fluid">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</div>  
```html
<div class="container container--fluid">
  ...
</div>
```

### Grids
You can layout as grid your content, by first creating a `.grid` DOM element, then for each column a `.grid__col` and then specify the size of the column depending of the viewport width configured in the `$trowel-config` variable like `.grid__col--xs-2`.

<div class="preview">
  <div class="grid">
    <div class="grid__col grid__col--xs-2 grid__col--sm-10">
      <div class="grid-showoff">col</div>
    </div>

    <div class="grid__col grid__col--xs-4 grid__col--sm-2">
      <div class="grid-showoff">col</div>
    </div>

    <div class="grid__col grid__col--xs-6 grid__col--sm-4">
      <div class="grid-showoff">col</div>
    </div>

    <div class="grid__col grid__col--xs-12 grid__col--sm-8">
    <div class="grid-showoff">col</div>
    </div>
  </div>
</div>  
```html
<div class="grid">
  <div class="grid__col grid__col--xs-2 grid__col--sm-10"></div>
  <div class="grid__col grid__col--xs-4 grid__col--sm-2"></div>
  <div class="grid__col grid__col--xs-6 grid__col--sm-4"></div>
  <div class="grid__col grid__col--xs-12 grid__col--sm-8"></div>
</div>
```


### Flex grids
You can also create a grid with flexbox. Wrap your columns with a `.flex-grid` DOM element. Then for each col use the `.flex-grid__col` class.


<p class="callout callout--success">You will be able to custom the behavior of your flex-grid through *Trowel variables* but by default a `.flex-grid__col--grow-1` element-modifier class is available to make a column fill all the remaining space available.</p>

<div class="preview">
  <div class="flex-grid">
    <div class="flex-grid__col">
      <div class="grid-showoff">col</div>
    </div>

    <div class="flex-grid__col flex-grid__col--grow-1">
      <div class="grid-showoff">col</div>
    </div>

    <div class="flex-grid__col">
      <div class="grid-showoff">col</div>
    </div>

    <div class="flex-grid__col">
      <div class="grid-showoff">col</div>
    </div>
  </div>
</div>
```html
<div class="flex-grid">
  <div class="flex-grid__col">
    <div class="grid-showoff">col</div>
  </div>

  <div class="flex-grid__col flex-grid__col--grow-1">
    <div class="grid-showoff">col</div>
  </div>

  <div class="flex-grid__col">
    <div class="grid-showoff">col</div>
  </div>

  <div class="flex-grid__col">
    <div class="grid-showoff">col</div>
  </div>
</div>
```