## Usage

In order to set up a collapse, the basic markup is right below :

<div class="preview">
<a class="btn btn--primary" data-collapse="toggle" data-href="#collapse-ex-1">toggle</a>
<a class="btn btn--primary" data-collapse="show" data-href="#collapse-ex-1">show</a>
<a class="btn btn--primary" data-collapse="hide" data-href="#collapse-ex-1">hide</a>

<div class="collapse" id="collapse-ex-1" data-flag="collapse">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</div>
</div>

```html
<a data-collapse="toggle" data-href="#collapse-ex-1">toggle</a>
<a data-collapse="show" data-href="#collapse-ex-1">show</a>
<a data-collapse="hide" data-href="#collapse-ex-1">hide</a>

<div class="collapse" id="collapse-ex-1" data-flag="collapse">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</div>
```

### Javascript setup

In order to make it work you need to setup some javascript. You have two ways to make it work :

#### Javascript usage into html

``` html
<script src="./path/to/trowel-collapses/javascript/collapses.js"></script>

<script type="text/javascript">
  var collapses = new TrowelCollapses(document.querySelectorAll('[data-flag="collapse"]'));
</script>
```

#### Javascript usage with an import

```js
import TrowelCollapses from './path/to/trowel-collapses/src/javascript/collapses';

const collapses = new TrowelCollapses(document.querySelectorAll('[data-flag="collapse"]'));
```

### Accordions

An accordion is a group of collapses, one over the others :

<div class="preview">
<div class="accordion">
  <a class="accordion__trigger" data-collapse="toggle" data-href="#collapse-ex-2-1" data-activeclass="accordion__trigger--active">accordion 1</a>

  <div class="collapse accordion__collapse" id="collapse-ex-2-1" data-flag="collapse" data-state="visible">
    accordion 1
  </div>
</div>

<div class="accordion">
  <a class="accordion__trigger" data-collapse="toggle" data-href="#collapse-ex-2-2" data-activeclass="accordion__trigger--active">accordion 2</a>

  <div class="collapse accordion__collapse" id="collapse-ex-2-2" data-flag="collapse">
    accordion 2
  </div>
</div>

<div class="accordion">
  <a class="accordion__trigger" data-collapse="toggle" data-href="#collapse-ex-2-3" data-activeclass="accordion__trigger--active">accordion 3</a>

  <div class="collapse accordion__collapse" id="collapse-ex-2-3" data-flag="collapse">
    accordion 3
  </div>
</div>
</div>

```html
<div class="accordion">
  <a class="accordion__trigger" data-collapse="toggle" data-href="#collapse-ex-2-1" data-activeclass="accordion__trigger--active">accordion 1</a>

  <div class="collapse accordion__collapse" id="collapse-ex-2-1" data-flag="collapse" data-state="visible">
    accordion 1
  </div>
</div>

<div class="accordion">
  <a class="accordion__trigger" data-collapse="toggle" data-href="#collapse-ex-2-2" data-activeclass="accordion__trigger--active">accordion 2</a>

  <div class="collapse accordion__collapse" id="collapse-ex-2-2" data-flag="collapse">
    accordion 2
  </div>
</div>

<div class="accordion">
  <a class="accordion__trigger" data-collapse="toggle" data-href="#collapse-ex-2-3" data-activeclass="accordion__trigger--active">accordion 3</a>

  <div class="collapse accordion__collapse" id="collapse-ex-2-3" data-flag="collapse">
    accordion 3
  </div>
</div>
```

<p class="callout callout--warning">
  The attribute <code>[data-activeclass]</code> on the trigger reference a class to add on this trigger, when the collapse referenced in the attribute <code>[data-href]</code> is visible.
</p>

#### Collapse groups

You can force an accordion to have only one `.accordion__collapse` opened by setting the attribute `[data-group]` with the same value for all the `.accordion__collapse` elements

<div class="preview">
<div class="accordion">
  <a class="accordion__trigger" data-collapse="toggle" data-href="#collapse-ex-3-1" data-activeclass="accordion__trigger--active">accordion 1</a>

  <div class="collapse accordion__collapse" id="collapse-ex-3-1" data-flag="collapse" data-group="tab-ex-3" data-state="visible">
    accordion 1
  </div>
</div>

<div class="accordion">
  <a class="accordion__trigger" data-collapse="toggle" data-href="#collapse-ex-3-2" data-activeclass="accordion__trigger--active">accordion 2</a>

  <div class="collapse accordion__collapse" id="collapse-ex-3-2" data-flag="collapse" data-group="tab-ex-3">
    accordion 2
  </div>
</div>

<div class="accordion">
  <a class="accordion__trigger" data-collapse="toggle" data-href="#collapse-ex-3-3" data-activeclass="accordion__trigger--active">accordion 3</a>

  <div class="collapse accordion__collapse" id="collapse-ex-3-3" data-flag="collapse" data-group="tab-ex-3">
    accordion 3
  </div>
</div>
</div>

```html
<div class="accordion">
  <a class="accordion__trigger" data-collapse="toggle" data-href="#collapse-ex-3-1" data-activeclass="accordion__trigger--active">accordion 1</a>

  <div class="collapse accordion__collapse" id="collapse-ex-3-1" data-flag="collapse" data-group="tab-ex-3" data-state="visible">
    accordion 1
  </div>
</div>

<div class="accordion">
  <a class="accordion__trigger" data-collapse="toggle" data-href="#collapse-ex-3-2" data-activeclass="accordion__trigger--active">accordion 2</a>

  <div class="collapse accordion__collapse" id="collapse-ex-3-2" data-flag="collapse" data-group="tab-ex-3">
    accordion 2
  </div>
</div>

<div class="accordion">
  <a class="accordion__trigger" data-collapse="toggle" data-href="#collapse-ex-3-3" data-activeclass="accordion__trigger--active">accordion 3</a>

  <div class="collapse accordion__collapse" id="collapse-ex-3-3" data-flag="collapse" data-group="tab-ex-3">
    accordion 3
  </div>
</div>
```


### Tabs

Tabs use the same concepts seen before, but with a different markup :

<div class="preview">
<ul class="tabs-nav">
  <li class="tabs-nav__item">
    <a class="tabs-nav__anchor" data-collapse="show" data-href="#collapse-ex-4-1" data-activeclass="tabs-nav__anchor--active">tab 1</a>
  </li>

  <li class="tabs-nav__item">
    <a class="tabs-nav__anchor" data-collapse="show" data-href="#collapse-ex-4-2" data-activeclass="tabs-nav__anchor--active">tab 2</a>
  </li>

  <li class="tabs-nav__item">
    <a class="tabs-nav__anchor" data-collapse="show" data-href="#collapse-ex-4-3" data-activeclass="tabs-nav__anchor--active">tab 3</a>
  </li>
</ul>

<div class="tabs-collapses">
  <div class="collapse" id="collapse-ex-4-1" data-flag="collapse" data-group="tab-ex-4" data-state="visible">
    tab 1
  </div>

  <div class="collapse" id="collapse-ex-4-2" data-flag="collapse" data-group="tab-ex-4">
    tab 2
  </div>

  <div class="collapse" id="collapse-ex-4-3" data-flag="collapse" data-group="tab-ex-4">
    tab 3
  </div>
</div>
</div>

```html
<ul class="tabs-nav">
  <li class="tabs-nav__item">
    <a class="tabs-nav__anchor" data-collapse="show" data-href="#collapse-ex-4-1" data-activeclass="tabs-nav__anchor--active">tab 1</a>
  </li>

  <li class="tabs-nav__item">
    <a class="tabs-nav__anchor" data-collapse="show" data-href="#collapse-ex-4-2" data-activeclass="tabs-nav__anchor--active">tab 2</a>
  </li>

  <li class="tabs-nav__item">
    <a class="tabs-nav__anchor" data-collapse="show" data-href="#collapse-ex-4-3" data-activeclass="tabs-nav__anchor--active">tab 3</a>
  </li>
</ul>

<div class="tabs-collapses">
  <div class="collapse" id="collapse-ex-4-1" data-flag="collapse" data-group="tab-ex-4" data-state="visible">
    tab 1
  </div>

  <div class="collapse" id="collapse-ex-4-2" data-flag="collapse" data-group="tab-ex-4">
    tab 2
  </div>

  <div class="collapse" id="collapse-ex-4-3" data-flag="collapse" data-group="tab-ex-4">
    tab 3
  </div>
</div>
```
