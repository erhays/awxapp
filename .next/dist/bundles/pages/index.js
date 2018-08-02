module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Head.js



var Head_Head = function Head(props) {
  return external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("meta", {
    charSet: "UTF-8"
  }), external__react__default.a.createElement("title", null, props.title || ''), external__react__default.a.createElement("meta", {
    name: "description",
    content: props.description || ''
  }), external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Zilla+Slab:400,700"
  }));
};

/* harmony default export */ var components_Head = (Head_Head);
// CONCATENATED MODULE: ./components/Layout.js
throw new Error("Cannot find module \"../components/Nav\"");




/* harmony default export */ var Layout = (function (_ref) {
  var children = _ref.children,
      _ref$settings = _ref.settings,
      settings = _ref$settings === void 0 ? {} : _ref$settings;
  return external__react__default.a.createElement("div", {
    className: "jsx-3162421542"
  }, external__react__default.a.createElement(components_Head, null), external__react__default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Nav___default.a, {
    settings: settings
  }), external__react__default.a.createElement("div", {
    className: "jsx-3162421542" + " " + "util__container"
  }, children), external__react__default.a.createElement(style__default.a, {
    styleId: "3162421542",
    css: ["@font-face{font-family:'SF UI Display';src:url('./fonts/sf-ui-display-thin.eot');src:url('./fonts/sf-ui-display-thin.eot?#iefix') format('embedded-opentype'), url('./fonts/sf-ui-display-thin.woff2') format('woff2'), url('./fonts/sf-ui-display-thin.woff') format('woff'), url('./fonts/sf-ui-display-thin.ttf') format('truetype'), url('./fonts/sf-ui-display-thin.svg#san_francisco_displaythin') format('svg');font-weight:300;font-style:normal;}", "@font-face{font-family:'SF UI';src:url('./fonts/sf-ui-text-regular.eot');src:url('./fonts/sf-ui-text-regular.eot?#iefix') format('embedded-opentype'), url('./fonts/sf-ui-text-regular.woff2') format('woff2'), url('./fonts/sf-ui-text-regular.woff') format('woff'), url('./fonts/sf-ui-text-regular.ttf') format('truetype'), url('./fonts/sf-ui-text-regular.svg#san_francisco_textregular') format('svg');font-weight:normal;font-style:normal;}", "article,aside,footer,header,hgroup,main,nav,section{display:block;}", "body{font-family:'Zilla Slab',Helvetica,sans-serif;line-height:1;font-size:18px;color:#000;margin:0;padding:0;}", ".util__flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".util__flex-col{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}", ".util__flex-eq{-webkit-flex:1;-ms-flex:1;flex:1;}", ".util__container{max-width:75rem;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px;box-sizing:border-box;}", "#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}"]
  }));
});
// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages__default; });


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var pages__default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(Layout, null, external__react__default.a.createElement("h1", null, "Welcome to Next!"));
    }
  }]);

  return _default;
}(external__react__default.a.Component);



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })
/******/ ]);