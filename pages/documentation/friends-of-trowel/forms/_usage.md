## Usage

### Form group
Here is the basic structure for form elements

<div class="preview">
<div class="form-group">
  <label class="form-group__label" for="input-example-1">label</label>
  <input class="form-group__input" id="input-example-1" type="text" value="hello world !">
</div>
</div>
```html
<div class="form-group">
  <label class="form-group__label" for="input-example-1">label</label>
  <input class="form-group__input" id="input-example-1" type="text">
</div>
```

Works too with `<textarea>` instead of `<input>` tag

<div class="preview">
<div class="form-group">
  <label class="form-group__label" for="input-example-1">label</label>
  <textarea class="form-group__input" id="input-example-2"></textarea>
</div>
</div>
```html
<div class="form-group">
  <label class="form-group__label" for="input-example-2">label</label>
  <textarea class="form-group__input" id="input-example-2"></textarea>
</div>
```


### Checkbox

Checkbox component customize the native `input[type="checkbox"]` element in order to make it look as you wish with trowel variables.

<p class="callout callout--success">
  Checkout all the checkbox trowel variables to design it as you wish
</p>

<div class="preview">
<div class="form-group">
  <label class="checkbox">
    <input class="checkbox__native" type="checkbox">

    <span class="checkbox__indicator"></span>
    Hello world !
  </label>
</div>
</div>
```html
<div class="form-group">
  <label class="checkbox">
    <input class="checkbox__native" type="checkbox">

    <span class="checkbox__indicator"></span>
    Hello world !
  </label>
</div>
```

### Radio

Like checkboxes, radio component customize the native `input[type="radio"]` element in order to make it look as you wish with trowel variables.

<p class="callout callout--success">
  Checkout all the radio trowel variables to design it as you wish
</p>

<div class="preview">
<div class="form-group">
  <label class="radio">
    <input class="radio__native" type="radio" name="radio-example">

    <span class="radio__indicator"></span>
    Hello world !
  </label>
</div>

<div class="form-group">
  <label class="radio">
    <input class="radio__native" type="radio" name="radio-example">

    <span class="radio__indicator"></span>
    Hello world !
  </label>
</div>
</div>
```html
<div class="form-group">
  <label class="radio">
    <input class="radio__native" type="radio" name="radio-example">

    <span class="radio__indicator"></span>
    Hello world !
  </label>
</div>

<div class="form-group">
  <label class="radio">
    <input class="radio__native" type="radio" name="radio-example">

    <span class="radio__indicator"></span>
    Hello world !
  </label>
</div>
```

### Select

Put a the `.select__native` class to the `<select>` element, wrap it in a `.select` container and you will get a custom select component fully customizable with trowel-variables

<p class="callout callout--success">
  Select all the select trowel variables to design it as you wish
</p>

<div class="preview">
<div class="form-group">
  <div class="select">
    <select class="select__native">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</div>
</div>
```html
<div class="form-group">
  <div class="select">
    <select class="select__native">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</div>
```