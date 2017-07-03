## Usage

<div class="preview">
  <button class="btn btn--success" data-modal="open" data-target="#modal-example">click me !</button>

  <div class="modal" id="modal-example" data-flag="modal">
    <div class="modal__dialog">
      <div class="modal__content">
        <div class="modal__header">
          Modal title
          <button class="modal__close" data-modal="hide">x</button>
        </div>

        <div class="modal__body">
          Woohoo, you're reading this text in a modal!
        </div>

        <div class="modal__footer">
          <button type="button" data-modal="hide">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<button data-modal="open" data-target="#modal-example">click me !</button>

<div class="modal modal--lg" id="modal-example" data-flag="modal">
  <div class="modal__dialog">
    <div class="modal__content">
      <div class="modal__header">
        Modal title
        <button class="modal__close" data-modal="hide">x</button>
      </div>

      <div class="modal__body">
        Woohoo, you're reading this text in a modal!
      </div>

      <div class="modal__footer">
        <button type="button" data-modal="hide">Close</button>
      </div>
    </div>
  </div>
</div>
```

### Javascript setup
In order to make it work you need to setup some javascript. You have two ways to make it work :

#### Javascript usage into html

```html
<script src="./path/to/trowel-collapses/javascript/collapses.js"></script>

<script type="text/javascript">
  var modals = new TrowelModals(document.querySelectorAll('[data-flag="modal"]'));
</script>
```

#### Javascript usage with an import

```js
import TrowelModals from './path/to/trowel-modals/src/javascript/modals';

const modals = new TrowelModals(document.querySelectorAll('[data-flag="modal"]'));
```

