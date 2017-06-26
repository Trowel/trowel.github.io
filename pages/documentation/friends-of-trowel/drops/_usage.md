## Usage

## Simple drops

<div class="preview">
  <button class="btn btn--primary btn--sm" data-drop="trigger" data-href="#drop-ex-1">simple drop</button>

  <div class="drop" id="drop-ex-1">
    <nav class="drop__menu">
      <a class="drop__anchor" href="#">Drop anchor</a>
      <a class="drop__anchor" href="#">Drop anchor</a>
      <a class="drop__anchor" href="#">Drop anchor</a>
      <hr class="drop__divider">
      <h6 class="drop__heading">Drop heading</h6>
      <a class="drop__anchor" href="#">Drop anchor</a>
      <a class="drop__anchor" href="#">Drop anchor</a>
      <hr class="drop__divider">
      <h6 class="drop__heading">Drop heading</h6>
      <a class="drop__anchor" href="#">Drop anchor</a>
    </nav>
  </div>
</div>

```html
<button data-drop="trigger" data-href="#drop-ex-1">simple drop</button>

<div class="drop" id="drop-ex-1">
  <nav class="drop__menu">
    <a class="drop__anchor" href="#">Drop anchor</a>
    <a class="drop__anchor" href="#">Drop anchor</a>
    <a class="drop__anchor" href="#">Drop anchor</a>
    <hr class="drop__divider">
    <h6 class="drop__heading">Drop heading</h6>
    <a class="drop__anchor" href="#">Drop anchor</a>
    <a class="drop__anchor" href="#">Drop anchor</a>
    <hr class="drop__divider">
    <h6 class="drop__heading">Drop heading</h6>
    <a class="drop__anchor" href="#">Drop anchor</a>
  </nav>
</div>
```

### Javascript setup

In order to make it work you need to setup some javascript. You have two ways to make it work :

#### Javascript usage into html

``` html
<script src="./path/to/trowel-alerts/javascript/drops.js"></script>

<script type="text/javascript">
  var dropTriggers = new TrowelDrops(document.querySelectorAll('[data-drop="trigger"]'));
</script>
```

#### Javascript usage with an import

```js
import TrowelDrops from './path/to/trowel-alerts/src/javascript/drops';

const dropTriggers = new TrowelDrops(document.querySelectorAll('[data-drop="trigger"]'));
```

### Change position

You can setup the drop position relative to the trigger with the attribute `[data-position]`.

<div class="preview">
  <button class="btn btn--primary btn--sm" data-position="bottomout leftin" data-drop="trigger" data-href="#drop-ex-2">bottom left</button>

  <button class="btn btn--primary btn--sm" data-position="bottomout rightin" data-drop="trigger" data-href="#drop-ex-3">bottom right</button>

  <button class="btn btn--primary btn--sm" data-position="topout leftin" data-drop="trigger" data-href="#drop-ex-4">top left</button>

  <button class="btn btn--primary btn--sm" data-position="topout rightin" data-drop="trigger" data-href="#drop-ex-5">top right</button>

  <div class="drop" id="drop-ex-2">
    <nav class="drop__menu">
      <a class="drop__anchor" href="#">Drop anchor</a>
      <a class="drop__anchor" href="#">Drop anchor</a>
      <a class="drop__anchor" href="#">Drop anchor</a>
    </nav>
  </div>

  <div class="drop" id="drop-ex-3">
    <nav class="drop__menu">
      <a class="drop__anchor" href="#">Drop anchor</a>
      <a class="drop__anchor" href="#">Drop anchor</a>
      <a class="drop__anchor" href="#">Drop anchor</a>
    </nav>
  </div>

  <div class="drop" id="drop-ex-4">
    <nav class="drop__menu">
      <a class="drop__anchor" href="#">Drop anchor</a>
      <a class="drop__anchor" href="#">Drop anchor</a>
      <a class="drop__anchor" href="#">Drop anchor</a>
    </nav>
  </div>

  <div class="drop" id="drop-ex-5">
    <nav class="drop__menu">
      <a class="drop__anchor" href="#">Drop anchor</a>
      <a class="drop__anchor" href="#">Drop anchor</a>
      <a class="drop__anchor" href="#">Drop anchor</a>
    </nav>
  </div>
</div>

```html
<button data-position="bottomout leftin" data-drop="trigger" data-href="#drop-ex-2">bottom left</button>
<button data-position="bottomout rightin" data-drop="trigger" data-href="#drop-ex-3">bottom right</button>
<button data-position="topout leftin" data-drop="trigger" data-href="#drop-ex-4">top left</button>
<button data-position="topout rightin" data-drop="trigger" data-href="#drop-ex-5">top right</button>
```

### Popovers

Popovers are just a variant of drops. You can make them by just adding a modifier class on the `.drop` element, and change the `[data-position]` value.

<p class="callout callout--success">
  The popover modifier is created with the usage of trowel variables, you can change the design, or delete the class `.drop--popover` by editing the trowel variables listed below.
</p>

<div class="preview">
  <button class="btn btn--primary btn--sm" data-position="bottomout center" data-drop="trigger" data-href="#drop-ex-6">popover</button>

  <div class="drop drop--popover" id="drop-ex-6">
    <h6 class="drop__header">Drop header</h6>

    <div class="drop__content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
  </div>
</div>

```html
<button data-position="bottomout center" data-drop="trigger" data-href="#drop-ex-6">popover</button>

<div class="drop drop--popover" id="drop-ex-6">
  <h6 class="drop__header">Drop header</h6>

  <div class="drop__content">
    ...
  </div>
</div>
```

#### Popovers positions

<div class="preview">
  <button class="btn btn--primary btn--sm" data-position="bottomout center" data-drop="trigger" data-href="#drop-ex-7">bottom</button>
  <button class="btn btn--primary btn--sm" data-position="middle leftout" data-drop="trigger" data-href="#drop-ex-8">left</button>
  <button class="btn btn--primary btn--sm" data-position="topout center" data-drop="trigger" data-href="#drop-ex-9">top</button>
  <button class="btn btn--primary btn--sm" data-position="middle rightout" data-drop="trigger" data-href="#drop-ex-10">right</button>

  <div class="drop drop--popover" id="drop-ex-7">
    <div class="drop__content">
      popover bottom
    </div>
  </div>

  <div class="drop drop--popover" id="drop-ex-8">
    <div class="drop__content">
      popover left
    </div>
  </div>

  <div class="drop drop--popover" id="drop-ex-9">
    <div class="drop__content">
      popover top
    </div>
  </div>

  <div class="drop drop--popover" id="drop-ex-10">
    <div class="drop__content">
      popover right
    </div>
  </div>
</div>

```html
<button data-position="bottomout center" data-drop="trigger" data-href="#drop-ex-7">bottom</button>
<button data-position="middle leftout" data-drop="trigger" data-href="#drop-ex-8">left</button>
<button data-position="topout center" data-drop="trigger" data-href="#drop-ex-9">top</button>
<button data-position="middle rightout" data-drop="trigger" data-href="#drop-ex-10">right</button>
```

### Tooltips

Tooltips are like popovers : just a modifier class to add on the `.drop` element.

<p class="callout callout--warning">
  The positionning of tooltips is exactly the same that for popovers
</p>

Mostly a popover displays when the trigger is hovered. To make this behavior possible just add the attribute `[data-behavior="hover"]` on the trigger.

<p class="callout callout--success">
  This attributes work for any kind of drops, popover or tooltip
</p>

<div class="preview">
  <button class="btn btn--primary btn--sm" data-behavior="hover" data-position="bottomout center" data-drop="trigger" data-href="#drop-ex-11">popover</button>

  <div class="drop drop--tooltip" id="drop-ex-11">
    <div class="drop__content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
  </div>
</div>

```html
<button data-behavior="hover" data-position="bottomout center" data-drop="trigger" data-href="#drop-ex-11">popover</button>

<div class="drop drop--tooltip" id="drop-ex-11">
  <div class="drop__content">
    ...
  </div>
</div>
```