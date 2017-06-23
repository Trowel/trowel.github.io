## Usage

### Tags
You can put the `.btn` classes `<a>`, `<button>` and `<input>` DOM elements.

<div class="preview">
  <a class="btn btn--default" href="#" role="button">Link</a>
  <button class="btn btn--default" type="submit">Button</button>
  <input class="btn btn--default" type="button" value="Input">
  <input class="btn btn--default" type="submit" value="Submit">
</div>
```html
<a class="btn btn--default" href="#" role="button">Link</a>
<button class="btn btn--default" type="submit">Button</button>
<input class="btn btn--default" type="button" value="Input">
<input class="btn btn--default" type="submit" value="Submit">
```

### Sizes
By default you have 4 sizes availables :

<p class="callout callout--success">
 Here, the sizes are just made with the `$button--font-size` variable : we create a default value, and 3 modifiers flags value. Padding are made with `em` units, so it scales to the font-size value.
</p>

<div class="preview">
  <button class="btn btn--default btn--lg">button lg</button>
  <button class="btn btn--default">button md</button>
  <button class="btn btn--default btn--sm">button sm</button>
  <button class="btn btn--default btn--xs">button xs</button>
</div>
```html
  <button class="btn btn--default btn--lg">button lg</button>
  <button class="btn btn--default">button md</button>
  <button class="btn btn--default btn--sm">button sm</button>
  <button class="btn btn--default btn--xs">button xs</button>
```

### Themes

By default you have 6 different themes for the `.btn`.

<p class="callout callout--success">
 The themes are designed with the variables <code>$button--color</code>, <code>$button--border-color</code> and <code>$button--background-color</code>.
</p>

<div class="preview">
  <button class="btn btn--default">default</button>
  <button class="btn btn--primary">primary</button>
  <button class="btn btn--success">success</button>
  <button class="btn btn--warning">warning</button>
  <button class="btn btn--danger">danger</button>
  <button class="btn btn--link">link</button>
</div>
```html
<button class="btn btn--default">default</button>
<button class="btn btn--primary">primary</button>
<button class="btn btn--success">success</button>
<button class="btn btn--warning">warning</button>
<button class="btn btn--danger">danger</button>
<button class="btn btn--link">link</button>
```

### Block

You can make the button size equal to its container size with the `.btn--block` class.

<p class="callout callout--success">
  this class is designed with a modifier flag on two trowel variables : ` $button--display` as `block`, and `$button--width` as `100%`.
</p>

<div class="preview">
  <button class="btn btn--primary btn--block">btn block</button>
</div>
```html
<button class="btn btn--primary btn--block">btn block</button>
```


### Btn group

You can group button by just wrapping them in a `.btn-group` DOM element

<p class="callout callout--success">
  The btn-group is design with flexbox. Check out the btn-groups variables to custom its behavior.
</p>

<div class="preview">
  <div class="btn-group">
    <button class="btn btn--default">first button</button>
    <button class="btn btn--default">second button</button>
    <button class="btn btn--default">third button</button>
  </div>
</div>
```html
<div class="btn-group">
  <button class="btn btn--default">first button</button>
  <button class="btn btn--default">second button</button>
  <button class="btn btn--default">third button</button>
</div>
```