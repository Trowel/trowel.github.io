/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Affix = function () {
  function Affix() {
    _classCallCheck(this, Affix);

    this.contentWrapper = document.getElementById('doc-content');

    if (!this.contentWrapper) return;
    if (!this.contentWrapper.getAttribute('data-affix')) return;

    return this.print();
  }

  _createClass(Affix, [{
    key: 'print',
    value: function print() {
      var nav = document.createElement("nav");
      nav.classList.add('affix');
      nav.id = 'affix';

      this.headings.map(function (heading) {
        var anchor = document.createElement("a");
        anchor.innerText = heading.innerText;
        anchor.setAttribute('data-anchor', '');
        anchor.setAttribute('href', '#' + heading.id);

        return nav.append(anchor);
      });

      return this.contentWrapper.before(nav);
    }
  }, {
    key: 'headings',
    get: function get() {
      return [].slice.call(this.contentWrapper.querySelectorAll('h2'));
    }
  }, {
    key: 'anchors',
    get: function get() {
      return [].slice.call(document.querySelectorAll('#affix a'));
    }
  }]);

  return Affix;
}();

exports.default = Affix;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _anchor = __webpack_require__(8);

var _anchor2 = _interopRequireDefault(_anchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DocHeadings = function DocHeadings() {
  _classCallCheck(this, DocHeadings);

  var anchors = new _anchor2.default();
  anchors.options = {
    placement: 'left'
  };
  return anchors.add('[data-headinganchor="true"] h1, [data-headinganchor="true"] h2, [data-headinganchor="true"] h3, [data-headinganchor="true"] h4, [data-headinganchor="true"] h5, [data-headinganchor="true"] h6');
};

exports.default = DocHeadings;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menus = function Menus(elements) {
  _classCallCheck(this, Menus);

  elements.forEach(function (element, index) {
    var element_obj = new Menu(element);
  });
};

var Menu = function () {
  function Menu(element) {
    _classCallCheck(this, Menu);

    this.element = element;
    this.nav = element.querySelector('[data-menu="nav"]');
    this.navToggle = element.querySelector('[data-menu="toggle"]');
    this.backdrop = element.querySelector('[data-menu="backdrop"]');

    this.movingDom = [this.nav, this.backdrop];
    this.triggerDom = [this.navToggle, this.backdrop];

    return this.listener();
  }

  _createClass(Menu, [{
    key: 'toggle',
    value: function toggle() {
      this.movingDom.map(function (navPart) {
        return navPart.classList.toggle('is-in');
      });
    }
  }, {
    key: 'listener',
    value: function listener() {
      var _this = this;

      return this.triggerDom.map(function (navPart) {
        return navPart.addEventListener('click', _this.toggle.bind(_this));
      });
    }
  }]);

  return Menu;
}();

exports.default = Menus;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class TrowelAlerts {
  constructor(elements) {
    elements.forEach(function(element, index) {
      let element_obj = new TrowelAlert(element);
    })
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = TrowelAlerts;


class TrowelAlert {
  constructor(element) {
    this.element = element;
    this.timesCollection = [].slice.call(this.element.querySelectorAll('[data-alert="times"]'));
    return this.listener();
  }

  removeAlert() {
    return this.element.remove();
  }

  listener() {
    return this.timesCollection
      .map(times => times.addEventListener('click', this.removeAlert.bind(this)));
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class TrowelBreadcrumbs {
  constructor(elements) {
    elements.forEach(function(element, index) {
      let element_obj = new TrowelBreadcrumb(element);
    })
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = TrowelBreadcrumbs;


class TrowelBreadcrumb {
  constructor(element) {
    this.element = element;
    this.toggleTriggers = [].slice.call(this.element.querySelectorAll('[data-breadcrumb="toggle"]'));
    this.list = this.element.querySelector('[data-breadcrumb="list"]');

    this.events = this.events();
    this.listener();
    this.element.dispatchEvent(this.events.mounted);
    return;
  }

  isVisible() {
    return this.list.getAttribute('data-state') === "visible";
  }

  show() {
    this.element.dispatchEvent(this.events.show);
    this.list.setAttribute('data-state', 'visible');
    this.element.dispatchEvent(this.events.shown);
    return;
  }

  hide() {
    this.element.dispatchEvent(this.events.hide);
    this.list.setAttribute('data-state', 'hidden');
    this.element.dispatchEvent(this.events.hidden);
    return;
  }

  toggle() {
    this.element.dispatchEvent(this.events.toggle);
    this.isVisible() ? this.hide() : this.show();
    this.element.dispatchEvent(this.events.toggled);
    return;
  }

  events() {
    const show = new Event('trowel.breadcrumb.show');
    const shown = new Event('trowel.breadcrumb.shown');
    const hide = new Event('trowel.breadcrumb.hide');
    const hidden = new Event('trowel.breadcrumb.hidden');
    const toggle = new Event('trowel.breadcrumb.toggle');
    const toggled = new Event('trowel.breadcrumb.toggled');
    const mounted = new Event('trowel.breadcrumb.mounted');

    return { show, shown, hide, hidden, toggle, toggled, mounted };
  }


  listener() {
    return this.toggleTriggers
      .map(toggleTrigger => toggleTrigger.addEventListener('click', this.toggle.bind(this)));
  }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class TrowelCollapses {
  constructor(elements) {
    elements.forEach(function(element, index) {
      let element_obj = new TrowelCollapse(element);
    })
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = TrowelCollapses;


class TrowelCollapse {
  constructor(collapse, nested = true) {
    this.collapse = collapse;
    this.nested = nested;

    this.isVisible ? this.show() : this.hide();

    this.listener();
    this.collapse.dispatchEvent(this.events.mounted);
    return;
  }

  show() {
    this.collapse.dispatchEvent(this.events.show);
    this.collapse.setAttribute('data-state', 'visible');
    this.triggers.map(trigger => trigger.addActiveclass());
    this.otherCollapsesFromGroup.forEach(collapse => collapse.hide());
    this.collapse.dispatchEvent(this.events.shown);
    return;
  }

  hide() {
    this.collapse.dispatchEvent(this.events.hide);
    this.collapse.setAttribute('data-state', 'hidden');
    this.triggers.map(trigger => trigger.removeActiveclass());
    this.collapse.dispatchEvent(this.events.hidden);
    return;
  }

  toggle() {
    this.collapse.dispatchEvent(this.events.toggle);

    if (this.isVisible) {
      this.hide();
    } else {
      this.show();
    }

    this.collapse.dispatchEvent(this.events.toggled);
    return;
  }

  get isVisible () {
    return this.collapse.getAttribute('data-state') == 'visible';
  }

  get groupName () {
    return this.collapse.getAttribute('data-group');
  }

  get isEffectingOtherCollapsesFromGroup () {
    return this.groupName && this.nested;
  }

  get otherCollapsesFromGroup () {
    if (!this.isEffectingOtherCollapsesFromGroup) return [];
    const groupList = document.querySelectorAll(`[data-group="${this.groupName}"]`);

    return [].slice.call(groupList) // convert the nodelist as array
      .filter(collapse => collapse != this.collapse) // exclude `this` from the arr
      .map(collapse => new TrowelCollapse(collapse, false))
  }

  listener() {
    if (!this.nested) return false;

    this.toggleTriggers
      .map(trigger => trigger.domEl.addEventListener('click', this.toggle.bind(this)));

    this.showTriggers
      .map(trigger => trigger.domEl.addEventListener('click', this.show.bind(this)));

    this.hideTriggers
      .map(trigger => trigger.domEl.addEventListener('click', this.hide.bind(this)));
  }

  get triggers () {
    const triggerDomList = document.querySelectorAll(`[data-collapse][data-href="#${this.collapse.id}"]`);

    return Array.prototype.slice.call(triggerDomList) // convert the nodelist as array
      .map(trigger => new TrowelCollapseTrigger(trigger));
  }

  get toggleTriggers () {
    return this.triggers
      .filter(trigger => trigger.isToggleAction);
  }

  get showTriggers () {
    return this.triggers
      .filter(trigger => trigger.isShowAction);
  }

  get hideTriggers () {
    return this.triggers
      .filter(trigger => trigger.isHideAction);
  }

  get events() {
    const show = new Event('trowel.collapse.show');
    const shown = new Event('trowel.collapse.shown');
    const hide = new Event('trowel.collapse.hide');
    const hidden = new Event('trowel.collapse.hidden');
    const toggle = new Event('trowel.collapse.toggle');
    const toggled = new Event('trowel.collapse.toggled');
    const mounted = new Event('trowel.collapse.mounted');

    return { show, shown, hide, hidden, toggle, toggled, mounted };
  }
}


class TrowelCollapseTrigger {
  constructor(domEl) {
    this.domEl = domEl;

    this.domEl.dispatchEvent(this.events.mounted);
    return;
  }

  get activeclass () {
    return this.domEl.getAttribute('data-activeclass');
  }

  get action () {
    return this.domEl.getAttribute('data-collapse');
  }

  get isToggleAction () {
    return this.action == 'toggle';
  }

  get isShowAction () {
    return this.action == 'show';
  }

  get isHideAction () {
    return this.action == 'hide';
  }

  addActiveclass() {
    this.domEl.dispatchEvent(this.events.activate);
    this.domEl.classList.add(this.activeclass);
    this.domEl.dispatchEvent(this.events.activated);
    return;
  }

  removeActiveclass() {
    this.domEl.dispatchEvent(this.events.desactivate);
    this.domEl.classList.remove(this.activeclass);
    this.domEl.dispatchEvent(this.events.desactivated);
    return;
  }

  toggleActiveclass() {
    this.domEl.dispatchEvent(this.events.toggle);
    this.domEl.classList.toggle(this.activeclass);
    this.domEl.dispatchEvent(this.events.toggled);
    return;
  }

  get events() {
    const activate = new Event('trowel.collapse.trigger.activate');
    const activated = new Event('trowel.collapse.trigger.activated');
    const desactivate = new Event('trowel.collapse.desactivate.hide');
    const desactivated = new Event('trowel.collapse.desactivated.hidden');
    const toggle = new Event('trowel.collapse.trigger.toggle');
    const toggled = new Event('trowel.collapse.trigger.toggled');
    const mounted = new Event('trowel.collapse.trigger.mounted');

    return { activate, activated, desactivate, desactivated, toggle, toggled, mounted };
  }
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class TrowelDrops {
  constructor(triggers) {
    triggers.forEach(function(trigger, index) {
      let trigger_obj = new TrowelDrop(trigger);
    })
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = TrowelDrops;


class TrowelDrop {
  constructor(trigger, customOptions = {}) {
    if (window.Tether === undefined) throw new Error('Trowel Drops require Tether (http://tether.io/)')

    this.trigger = trigger;
    this.drop = document.querySelector(this.trigger.getAttribute('data-href'));
    this.options = customOptions;
    this.tether = new Tether(this.tetherOptions);

    this.events = this.events();

    this.options.visible ? this.show() : this.hide();
    this.setGutterPositions();

    this.listener();
    this.drop.dispatchEvent(this.events.mounted);
    return;
  }

  set options(customOptions) {
    const defaultOptions = {
      visible: false,
      behavior: 'click',
      position: 'bottomout leftin',
    };

    const options = Object.keys(defaultOptions).reduce((options, option) => {
      options[option] = defaultOptions[option];

      // 1st priority : data-options
      if (this.trigger.getAttribute(`data-${option}`)) {
        options[option] = this.trigger.getAttribute(`data-${option}`);

        // make sure the option is a bool and not a string
        if (option == 'visible') {
          options[option] = options[option] == "true";
        }

      // 2nd priority : customOptions
      } else if (customOptions[option]) {
        options[option] = customOptions[option];
      }

      return options;
    }, {});

    const { posY, posX } = this.getPositions(options);

    if (!['click', 'hover'].includes(options.behavior)) {
      throw new Error('Trowel drops behavior option must be \'click\' or \'hover\'')
    }

    if (options.position.split(' ').length != 2) {
      throw new Error('Trowel drops position option must be a string within two words describing Y (\'top\', \'middle\' or \'bottom\') and X (\'left\', \'center\' or \'right\') position')
    }

    if (!['topin', 'topout', 'middle', 'bottomin', 'bottomout'].includes(posY)) {
      throw new Error('Trowel drops position option first word must be \'topin\', \'topout\', \'middle\', \'bottomin\' or \'bottomout\'')
    }

    if (!['leftin', 'leftout', 'center', 'rightin', 'rightout'].includes(posX)) {
      throw new Error('Trowel drops position option second word must be \'leftin\', \'leftout\', \'center\', \'rightin\' or \'rightout\'')
    }

    return this._options = options;
  }

  get options() {
    return this._options;
  }

  getPositions(options = this.options) {
    return {
      options: options,
      posY: options.position.split(' ')[0],
      posX: options.position.split(' ')[1],
    }
  }

  get tetherOptions() {
    const { posY, posX } = this.getPositions();
    let attachmentX, attachmentY, targetAttachmentX, targetAttachmentY, gutterX, gutterY;

    switch (posY) {
      case 'topout':
        attachmentY = 'bottom';
        targetAttachmentY = 'top';
        break;
      case 'topin':
        attachmentY = 'top';
        targetAttachmentY = 'top';
        break;
      case 'bottomin':
        attachmentY = 'bottom';
        targetAttachmentY = 'bottom';
        break;
      case 'bottomout':
        attachmentY = 'top';
        targetAttachmentY = 'bottom';
        break;
      default:
        attachmentY = 'center';
        targetAttachmentY = 'center';
    }

    switch (posX) {
      case 'leftout':
        attachmentX = 'right';
        targetAttachmentX = 'left';
        break;
      case 'leftin':
        attachmentX = 'left';
        targetAttachmentX = 'left';
        break;
      case 'rightin':
        attachmentX = 'right';
        targetAttachmentX = 'right';
        break;
      case 'rightout':
        attachmentX = 'left';
        targetAttachmentX = 'right';
        break;
      default:
        attachmentX = 'center';
        targetAttachmentX = 'center';
    }

    let config = {
      element: this.drop,
      target: this.trigger,
      attachment: `${attachmentY} ${attachmentX}`,
      targetAttachment: `${targetAttachmentY} ${targetAttachmentX}`,
    };


    return config;
  }

  setGutterPositions() {
    const { posY, posX } = this.getPositions();
    let gutterY, gutterX;

    switch (posY) {
      case 'topout':
        gutterY = 'bottom';
        break;
      case 'bottomout':
        gutterY = 'top';
        break;
      default:
        gutterY = 'none';
    }

    switch (posX) {
      case 'leftout':
        gutterX = 'right';
        break;
      case 'rightout':
        gutterX = 'left';
        break;
      default:
        gutterX = 'none';
    }

    this.drop.setAttribute('data-gutter', `${gutterY} ${gutterX}`)
  }

  get isVisible() {
    return this.drop.style.display == 'block';
  }

  show() {
    this.drop.dispatchEvent(this.events.show);
    this.drop.style.display = 'block';
    this.drop.dispatchEvent(this.events.shown);
    return;
  }

  hide() {
    this.drop.dispatchEvent(this.events.hide);
    this.drop.style.display = 'none';
    this.drop.dispatchEvent(this.events.hidden);
    return;
  }

  toggle() {
    this.drop.dispatchEvent(this.events.toggle);
    this.isVisible ? this.hide() : this.show();
    this.drop.dispatchEvent(this.events.toggled);
    return;
  }

  listener() {
    if (this.options.behavior == 'click') {
      this.trigger.addEventListener('click', this.toggle.bind(this));

      // hide the drop when you click outside
      document.addEventListener('click', function(event) {
        const isClickInside = this.trigger.contains(event.target) || this.drop.contains(event.target);
        if (!isClickInside && this.isVisible) this.hide();
        return;
      }.bind(this))

    } else if (this.options.behavior == 'hover') {
      this.trigger.addEventListener('mouseenter', this.show.bind(this));

      [this.trigger, this.drop].map(element => {
        element.addEventListener('mouseout', function(event) {
          const hovering = this.trigger.contains(event.toElement) || this.drop.contains(event.toElement);
          if (!hovering) this.hide();
          return;
        }.bind(this));
      })
    }
  }

  events() {
    const show = new Event('trowel.drop.show');
    const shown = new Event('trowel.drop.shown');
    const hide = new Event('trowel.drop.hide');
    const hidden = new Event('trowel.drop.hidden');
    const toggle = new Event('trowel.drop.toggle');
    const toggled = new Event('trowel.drop.toggled');
    const mounted = new Event('trowel.drop.mounted');

    return { show, shown, hide, hidden, toggle, toggled, mounted };
  }

}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class TrowelModals {
  constructor(elements) {
    elements.forEach(function(element, index) {
      let element_obj = new TrowelModal(element);
    })
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = TrowelModals;


class TrowelModal {
  constructor(element) {
    this.element = element;
    this.dialog = this.element.children[0];
    this.rootNodes = [this.element, this.dialog];

    this.hideTriggers = [].slice.call(this.element.querySelectorAll('[data-modal="hide"]'));
    this.showTriggers = [].slice.call(document.querySelectorAll(`[data-modal="open"][data-target="#${this.element.id}"]`));

    this.events = this.events();
    this.listener();
    this.element.dispatchEvent(this.events.mounted);
    return;
  }

  isVisible() {
    return this.element.getAttribute('data-modal') === 'visible';
  }

  show() {
    this.element.dispatchEvent(this.events.show);
    this.rootNodes.map(node => node.setAttribute('data-modal', 'visible'));
    this.element.dispatchEvent(this.events.shown);
    return;
  }

  hide() {
    this.element.dispatchEvent(this.events.hide);
    this.rootNodes.map(node => node.setAttribute('data-modal', 'invisible'));
    this.element.dispatchEvent(this.events.hidden);
    return;
  }

  toggle() {
    this.element.dispatchEvent(this.events.toggle);
    this.isVisible() ? this.hide() : this.show();
    this.element.dispatchEvent(this.events.toggled);
    return;
  }

  backdropClose(event) {
    // make sure the click event is on the modal and not dom children element
    if (event.currentTarget === event.target) this.hide();

    return;
  }

  events() {
    const show = new Event('trowel.modal.show');
    const shown = new Event('trowel.modal.shown');
    const hide = new Event('trowel.modal.hide');
    const hidden = new Event('trowel.modal.hidden');
    const toggle = new Event('trowel.modal.toggle');
    const toggled = new Event('trowel.modal.toggled');
    const mounted = new Event('trowel.modal.mounted');

    return { show, shown, hide, hidden, toggle, toggled, mounted };
  }

  listener() {
    this.element.addEventListener('click', this.backdropClose.bind(this));
    this.hideTriggers.map(hideTrigger => hideTrigger.addEventListener('click', this.backdropClose.bind(this)))
    this.showTriggers.map(showTrigger => showTrigger.addEventListener('click', this.show.bind(this)))

    return;
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* eslint-env amd, node */

// https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
  'use strict';

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.AnchorJS = factory();
    root.anchors = new root.AnchorJS();
  }
}(this, function () {
  'use strict';

  function AnchorJS(options) {
    this.options = options || {};
    this.elements = [];

    /**
     * Assigns options to the internal options object, and provides defaults.
     * @param {Object} opts - Options object
     */
    function _applyRemainingDefaultOptions(opts) {
      opts.icon = opts.hasOwnProperty('icon') ? opts.icon : '\ue9cb'; // Accepts characters (and also URLs?), like  '#', '¶', '❡', or '§'.
      opts.visible = opts.hasOwnProperty('visible') ? opts.visible : 'hover'; // Also accepts 'always' & 'touch'
      opts.placement = opts.hasOwnProperty('placement') ? opts.placement : 'right'; // Also accepts 'left'
      opts.class = opts.hasOwnProperty('class') ? opts.class : ''; // Accepts any class name.
      // Using Math.floor here will ensure the value is Number-cast and an integer.
      opts.truncate = opts.hasOwnProperty('truncate') ? Math.floor(opts.truncate) : 64; // Accepts any value that can be typecast to a number.
    }

    _applyRemainingDefaultOptions(this.options);

    /**
     * Checks to see if this device supports touch. Uses criteria pulled from Modernizr:
     * https://github.com/Modernizr/Modernizr/blob/da22eb27631fc4957f67607fe6042e85c0a84656/feature-detects/touchevents.js#L40
     * @return {Boolean} - true if the current device supports touch.
     */
    this.isTouchDevice = function() {
      return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
    };

    /**
     * Add anchor links to page elements.
     * @param  {String|Array|Nodelist} selector - A CSS selector for targeting the elements you wish to add anchor links
     *                                            to. Also accepts an array or nodeList containing the relavant elements.
     * @return {this}                           - The AnchorJS object
     */
    this.add = function(selector) {
      var elements,
          elsWithIds,
          idList,
          elementID,
          i,
          index,
          count,
          tidyText,
          newTidyText,
          readableID,
          anchor,
          visibleOptionToUse,
          indexesToDrop = [];

      // We reapply options here because somebody may have overwritten the default options object when setting options.
      // For example, this overwrites all options but visible:
      //
      // anchors.options = { visible: 'always'; }
      _applyRemainingDefaultOptions(this.options);

      visibleOptionToUse = this.options.visible;
      if (visibleOptionToUse === 'touch') {
        visibleOptionToUse = this.isTouchDevice() ? 'always' : 'hover';
      }

      // Provide a sensible default selector, if none is given.
      if (!selector) {
        selector = 'h2, h3, h4, h5, h6';
      }

      elements = _getElements(selector);

      if (elements.length === 0) {
        return this;
      }

      _addBaselineStyles();

      // We produce a list of existing IDs so we don't generate a duplicate.
      elsWithIds = document.querySelectorAll('[id]');
      idList = [].map.call(elsWithIds, function assign(el) {
        return el.id;
      });

      for (i = 0; i < elements.length; i++) {
        if (this.hasAnchorJSLink(elements[i])) {
          indexesToDrop.push(i);
          continue;
        }

        if (elements[i].hasAttribute('id')) {
          elementID = elements[i].getAttribute('id');
        } else if (elements[i].hasAttribute('data-anchor-id')) {
          elementID = elements[i].getAttribute('data-anchor-id');
        } else {
          tidyText = this.urlify(elements[i].textContent);

          // Compare our generated ID to existing IDs (and increment it if needed)
          // before we add it to the page.
          newTidyText = tidyText;
          count = 0;
          do {
            if (index !== undefined) {
              newTidyText = tidyText + '-' + count;
            }

            index = idList.indexOf(newTidyText);
            count += 1;
          } while (index !== -1);
          index = undefined;
          idList.push(newTidyText);

          elements[i].setAttribute('id', newTidyText);
          elementID = newTidyText;
        }

        readableID = elementID.replace(/-/g, ' ');

        // The following code builds the following DOM structure in a more effiecient (albeit opaque) way.
        // '<a class="anchorjs-link ' + this.options.class + '" href="#' + elementID + '" aria-label="Anchor link for: ' + readableID + '" data-anchorjs-icon="' + this.options.icon + '"></a>';
        anchor = document.createElement('a');
        anchor.className = 'anchorjs-link ' + this.options.class;
        anchor.href = '#' + elementID;
        anchor.setAttribute('aria-label', 'Anchor link for: ' + readableID);
        anchor.setAttribute('data-anchorjs-icon', this.options.icon);

        if (visibleOptionToUse === 'always') {
          anchor.style.opacity = '1';
        }

        if (this.options.icon === '\ue9cb') {
          anchor.style.font = '1em/1 anchorjs-icons';

          // We set lineHeight = 1 here because the `anchorjs-icons` font family could otherwise affect the
          // height of the heading. This isn't the case for icons with `placement: left`, so we restore
          // line-height: inherit in that case, ensuring they remain positioned correctly. For more info,
          // see https://github.com/bryanbraun/anchorjs/issues/39.
          if (this.options.placement === 'left') {
            anchor.style.lineHeight = 'inherit';
          }
        }

        if (this.options.placement === 'left') {
          anchor.style.position = 'absolute';
          anchor.style.marginLeft = '-1em';
          anchor.style.paddingRight = '0.5em';
          elements[i].insertBefore(anchor, elements[i].firstChild);
        } else { // if the option provided is `right` (or anything else).
          anchor.style.paddingLeft = '0.375em';
          elements[i].appendChild(anchor);
        }
      }

      for (i = 0; i < indexesToDrop.length; i++) {
        elements.splice(indexesToDrop[i] - i, 1);
      }
      this.elements = this.elements.concat(elements);

      return this;
    };

    /**
     * Removes all anchorjs-links from elements targed by the selector.
     * @param  {String|Array|Nodelist} selector - A CSS selector string targeting elements with anchor links,
     *                                            OR a nodeList / array containing the DOM elements.
     * @return {this}                           - The AnchorJS object
     */
    this.remove = function(selector) {
      var index,
          domAnchor,
          elements = _getElements(selector);

      for (var i = 0; i < elements.length; i++) {
        domAnchor = elements[i].querySelector('.anchorjs-link');
        if (domAnchor) {
          // Drop the element from our main list, if it's in there.
          index = this.elements.indexOf(elements[i]);
          if (index !== -1) {
            this.elements.splice(index, 1);
          }
          // Remove the anchor from the DOM.
          elements[i].removeChild(domAnchor);
        }
      }
      return this;
    };

    /**
     * Removes all anchorjs links. Mostly used for tests.
     */
    this.removeAll = function() {
      this.remove(this.elements);
    };

    /**
     * Urlify - Refine text so it makes a good ID.
     *
     * To do this, we remove apostrophes, replace nonsafe characters with hyphens,
     * remove extra hyphens, truncate, trim hyphens, and make lowercase.
     *
     * @param  {String} text - Any text. Usually pulled from the webpage element we are linking to.
     * @return {String}      - hyphen-delimited text for use in IDs and URLs.
     */
    this.urlify = function(text) {
      // Regex for finding the nonsafe URL characters (many need escaping): & +$,:;=?@"#{}|^~[`%!'<>]./()*\
      var nonsafeChars = /[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\]/g,
          urlText;

      // The reason we include this _applyRemainingDefaultOptions is so urlify can be called independently,
      // even after setting options. This can be useful for tests or other applications.
      if (!this.options.truncate) {
        _applyRemainingDefaultOptions(this.options);
      }

      // Note: we trim hyphens after truncating because truncating can cause dangling hyphens.
      // Example string:                                  // " ⚡⚡ Don't forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
      urlText = text.trim()                               // "⚡⚡ Don't forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
                    .replace(/\'/gi, '')                  // "⚡⚡ Dont forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
                    .replace(nonsafeChars, '-')           // "⚡⚡-Dont-forget--URL-fragments-should-be-i18n-friendly--hyphenated--short--and-clean-"
                    .replace(/-{2,}/g, '-')               // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated-short-and-clean-"
                    .substring(0, this.options.truncate)  // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated-"
                    .replace(/^-+|-+$/gm, '')             // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated"
                    .toLowerCase();                       // "⚡⚡-dont-forget-url-fragments-should-be-i18n-friendly-hyphenated"

      return urlText;
    };

    /**
     * Determines if this element already has an AnchorJS link on it.
     * Uses this technique: http://stackoverflow.com/a/5898748/1154642
     * @param    {HTMLElemnt}  el - a DOM node
     * @return   {Boolean}     true/false
     */
    this.hasAnchorJSLink = function(el) {
      var hasLeftAnchor = el.firstChild && ((' ' + el.firstChild.className + ' ').indexOf(' anchorjs-link ') > -1),
          hasRightAnchor = el.lastChild && ((' ' + el.lastChild.className + ' ').indexOf(' anchorjs-link ') > -1);

      return hasLeftAnchor || hasRightAnchor || false;
    };

    /**
     * Turns a selector, nodeList, or array of elements into an array of elements (so we can use array methods).
     * It also throws errors on any other inputs. Used to handle inputs to .add and .remove.
     * @param  {String|Array|Nodelist} input - A CSS selector string targeting elements with anchor links,
     *                                         OR a nodeList / array containing the DOM elements.
     * @return {Array} - An array containing the elements we want.
     */
    function _getElements(input) {
      var elements;
      if (typeof input === 'string' || input instanceof String) {
        // See https://davidwalsh.name/nodelist-array for the technique transforming nodeList -> Array.
        elements = [].slice.call(document.querySelectorAll(input));
      // I checked the 'input instanceof NodeList' test in IE9 and modern browsers and it worked for me.
      } else if (Array.isArray(input) || input instanceof NodeList) {
        elements = [].slice.call(input);
      } else {
        throw new Error('The selector provided to AnchorJS was invalid.');
      }
      return elements;
    }

    /**
     * _addBaselineStyles
     * Adds baseline styles to the page, used by all AnchorJS links irregardless of configuration.
     */
    function _addBaselineStyles() {
      // We don't want to add global baseline styles if they've been added before.
      if (document.head.querySelector('style.anchorjs') !== null) {
        return;
      }

      var style = document.createElement('style'),
          linkRule =
          ' .anchorjs-link {'                       +
          '   opacity: 0;'                          +
          '   text-decoration: none;'               +
          '   -webkit-font-smoothing: antialiased;' +
          '   -moz-osx-font-smoothing: grayscale;'  +
          ' }',
          hoverRule =
          ' *:hover > .anchorjs-link,'              +
          ' .anchorjs-link:focus  {'                +
          '   opacity: 1;'                          +
          ' }',
          anchorjsLinkFontFace =
          ' @font-face {'                           +
          '   font-family: "anchorjs-icons";'       + // Icon from icomoon; 10px wide & 10px tall; 2 empty below & 4 above
          '   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype");' +
          ' }',
          pseudoElContent =
          ' [data-anchorjs-icon]::after {'          +
          '   content: attr(data-anchorjs-icon);'   +
          ' }',
          firstStyleEl;

      style.className = 'anchorjs';
      style.appendChild(document.createTextNode('')); // Necessary for Webkit.

      // We place it in the head with the other style tags, if possible, so as to
      // not look out of place. We insert before the others so these styles can be
      // overridden if necessary.
      firstStyleEl = document.head.querySelector('[rel="stylesheet"], style');
      if (firstStyleEl === undefined) {
        document.head.appendChild(style);
      } else {
        document.head.insertBefore(style, firstStyleEl);
      }

      style.sheet.insertRule(linkRule, style.sheet.cssRules.length);
      style.sheet.insertRule(hoverRule, style.sheet.cssRules.length);
      style.sheet.insertRule(pseudoElContent, style.sheet.cssRules.length);
      style.sheet.insertRule(anchorjsLinkFontFace, style.sheet.cssRules.length);
    }
  }

  return AnchorJS;
}));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _menu = __webpack_require__(2);

var _menu2 = _interopRequireDefault(_menu);

var _affix = __webpack_require__(0);

var _affix2 = _interopRequireDefault(_affix);

var _docHeadings = __webpack_require__(1);

var _docHeadings2 = _interopRequireDefault(_docHeadings);

var _breadcrumbs = __webpack_require__(4);

var _breadcrumbs2 = _interopRequireDefault(_breadcrumbs);

var _alerts = __webpack_require__(3);

var _alerts2 = _interopRequireDefault(_alerts);

var _drops = __webpack_require__(6);

var _drops2 = _interopRequireDefault(_drops);

var _collapses = __webpack_require__(5);

var _collapses2 = _interopRequireDefault(_collapses);

var _modals = __webpack_require__(7);

var _modals2 = _interopRequireDefault(_modals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menus = new _menu2.default(document.querySelectorAll('[data-flag="menu"]'));
var affix = new _affix2.default();
var docHeadings = new _docHeadings2.default();

// Trowel components
var breadcrumbs = new _breadcrumbs2.default(document.querySelectorAll('[data-flag="breadcrumb"]'));
var alerts = new _alerts2.default(document.querySelectorAll('.alert'));
var dropsTrigger = new _drops2.default(document.querySelectorAll('[data-drop="trigger"]'));
var collapses = new _collapses2.default(document.querySelectorAll('[data-flag="collapse"]'));
var modals = new _modals2.default(document.querySelectorAll('[data-flag="modal"]'));

/***/ })
/******/ ]);
//# sourceMappingURL=trowel.github.io.js.map