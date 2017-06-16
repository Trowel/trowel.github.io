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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _menu = __webpack_require__(0);

var _menu2 = _interopRequireDefault(_menu);

var _affix = __webpack_require__(2);

var _affix2 = _interopRequireDefault(_affix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menus = new _menu2.default(document.querySelectorAll('[data-flag="menu"]'));
var affix = new _affix2.default();

/***/ }),
/* 2 */
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

    if (!this.contentWrapper.getAttribute('data-affix')) return;

    this.print();
    return this.listener();
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
        anchor.setAttribute('data-anchor', heading.id);

        return nav.append(anchor);
      });

      return this.contentWrapper.before(nav);
    }
  }, {
    key: 'goTo',
    value: function goTo(event) {
      var target = document.getElementById(event.target.getAttribute('data-anchor'));
      var header = document.getElementById('doc-header');
      var subHeader = document.getElementById('doc-subheader');
      var scrollTop = target.offsetTop - (header.offsetHeight + subHeader.offsetHeight);
      return document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
    }
  }, {
    key: 'listener',
    value: function listener() {
      var _this = this;

      this.anchors.map(function (anchor) {
        return anchor.addEventListener('click', _this.goTo.bind(_this));
      });
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

/***/ })
/******/ ]);
//# sourceMappingURL=trowel.github.io.js.map