this["LP"] = this["LP"] || {}; this["LP"]["Templates"] =
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/templates/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/templates/index.js":
/*!********************************!*\
  !*** ./src/templates/index.js ***!
  \********************************/
/*! exports provided: SingleCourse_Buttons_Enroll, SingleCourse_Buttons_Purchase, SingleCourse_Buttons_Submit, SingleCourse_ContentLanding, SingleCourse_ContentLearning, SingleCourse_Content, SingleCourse_CourseTabs, SingleCourse_Lesson_ButtonSubmit, SingleCourse_Lesson_Content, SingleCourse_Lesson_Index, SingleCourse_Progress, SingleCourse_Quiz_Buttons_Start, SingleCourse_Quiz_Content, SingleCourse_Quiz_Index, SingleCourse_Tabs_Index */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _single_course_buttons_enroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-course/buttons/enroll.js */ "./src/templates/single-course/buttons/enroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Buttons_Enroll", function() { return _single_course_buttons_enroll_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _single_course_buttons_purchase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-course/buttons/purchase.js */ "./src/templates/single-course/buttons/purchase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Buttons_Purchase", function() { return _single_course_buttons_purchase_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _single_course_buttons_submit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-course/buttons/submit.js */ "./src/templates/single-course/buttons/submit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Buttons_Submit", function() { return _single_course_buttons_submit_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _single_course_content_landing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-course/content-landing.js */ "./src/templates/single-course/content-landing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_ContentLanding", function() { return _single_course_content_landing_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _single_course_content_learning_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./single-course/content-learning.js */ "./src/templates/single-course/content-learning.js");
/* harmony import */ var _single_course_content_learning_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_single_course_content_learning_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_ContentLearning", function() { return _single_course_content_learning_js__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _single_course_content_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-course/content.js */ "./src/templates/single-course/content.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Content", function() { return _single_course_content_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _single_course_course_tabs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-course/course-tabs.js */ "./src/templates/single-course/course-tabs.js");
/* harmony import */ var _single_course_course_tabs_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_single_course_course_tabs_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_CourseTabs", function() { return _single_course_course_tabs_js__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var _single_course_lesson_button_submit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./single-course/lesson/button-submit.js */ "./src/templates/single-course/lesson/button-submit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Lesson_ButtonSubmit", function() { return _single_course_lesson_button_submit_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _single_course_lesson_content_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./single-course/lesson/content.js */ "./src/templates/single-course/lesson/content.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Lesson_Content", function() { return _single_course_lesson_content_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _single_course_lesson_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./single-course/lesson/index.js */ "./src/templates/single-course/lesson/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Lesson_Index", function() { return _single_course_lesson_index_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _single_course_progress_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./single-course/progress.js */ "./src/templates/single-course/progress.js");
/* harmony import */ var _single_course_progress_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_single_course_progress_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Progress", function() { return _single_course_progress_js__WEBPACK_IMPORTED_MODULE_10___default.a; });
/* harmony import */ var _single_course_quiz_buttons_start_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./single-course/quiz/buttons/start.js */ "./src/templates/single-course/quiz/buttons/start.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Quiz_Buttons_Start", function() { return _single_course_quiz_buttons_start_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _single_course_quiz_content_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./single-course/quiz/content.js */ "./src/templates/single-course/quiz/content.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Quiz_Content", function() { return _single_course_quiz_content_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _single_course_quiz_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./single-course/quiz/index.js */ "./src/templates/single-course/quiz/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Quiz_Index", function() { return _single_course_quiz_index_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _single_course_tabs_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./single-course/tabs/index.js */ "./src/templates/single-course/tabs/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Tabs_Index", function() { return _single_course_tabs_index_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });















 // For watching files change
// export const rand = function(){ return 0.4288432289387054}

/***/ }),

/***/ "./src/templates/single-course/buttons/enroll.js":
/*!*******************************************************!*\
  !*** ./src/templates/single-course/buttons/enroll.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Component = wp.element.Component;
var Template = LP.components.Template;

var EnrollButton = function EnrollButton() {
  //render(){
  return React.createElement(React.Fragment, null, "???", React.createElement("button", {
    type: "button"
  }, "Enroll Me!"), Template.get('/single-course/quiz/buttons/start.js'), "???"); //}
};

/* harmony default export */ __webpack_exports__["default"] = (EnrollButton);

/***/ }),

/***/ "./src/templates/single-course/buttons/purchase.js":
/*!*********************************************************!*\
  !*** ./src/templates/single-course/buttons/purchase.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component = wp.element.Component;

var PurchaseButton =
/*#__PURE__*/
function (_Component) {
  _inherits(PurchaseButton, _Component);

  function PurchaseButton() {
    _classCallCheck(this, PurchaseButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(PurchaseButton).apply(this, arguments));
  }

  _createClass(PurchaseButton, [{
    key: "render",
    value: function render() {
      return React.createElement("button", {
        type: "button"
      }, "Purchase!");
    }
  }]);

  return PurchaseButton;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (PurchaseButton);

/***/ }),

/***/ "./src/templates/single-course/buttons/submit.js":
/*!*******************************************************!*\
  !*** ./src/templates/single-course/buttons/submit.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component = wp.element.Component;

var SubmitButton =
/*#__PURE__*/
function (_Component) {
  _inherits(SubmitButton, _Component);

  function SubmitButton() {
    var _this;

    _classCallCheck(this, SubmitButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SubmitButton).apply(this, arguments));
    _this.state = {
      count: 0
    };
    _this.updateCount = _this.updateCount.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SubmitButton, [{
    key: "updateCount",
    value: function updateCount() {
      var count = this.state.count + 1;
      this.setState({
        count: count
      });
      console.log(this.state, count);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("button", {
        type: "button",
        onClick: this.updateCount
      }, "Submit Course (", this.state.count, ")!");
    }
  }]);

  return SubmitButton;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (SubmitButton);

/***/ }),

/***/ "./src/templates/single-course/content-landing.js":
/*!********************************************************!*\
  !*** ./src/templates/single-course/content-landing.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentLanding; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Template = LP.components.Template;

var ContentLanding =
/*#__PURE__*/
function (_wp$element$Component) {
  _inherits(ContentLanding, _wp$element$Component);

  function ContentLanding() {
    _classCallCheck(this, ContentLanding);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContentLanding).apply(this, arguments));
  }

  _createClass(ContentLanding, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "learnpress-landing"
      }, "HOW", Template.get('/single-course/tabs'), Template.get('/single-course/buttons/enroll.js'));
    }
  }]);

  return ContentLanding;
}(wp.element.Component);



/***/ }),

/***/ "./src/templates/single-course/content-learning.js":
/*!*********************************************************!*\
  !*** ./src/templates/single-course/content-learning.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by tu on 8/1/19.
 */

/***/ }),

/***/ "./src/templates/single-course/content.js":
/*!************************************************!*\
  !*** ./src/templates/single-course/content.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return React.createElement("div", {
    className: "course-content"
  }, "This is content of course.");
});

/***/ }),

/***/ "./src/templates/single-course/course-tabs.js":
/*!****************************************************!*\
  !*** ./src/templates/single-course/course-tabs.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CourseTabs =
/*#__PURE__*/
function (_wp$element$Component) {
  _inherits(CourseTabs, _wp$element$Component);

  function CourseTabs() {
    _classCallCheck(this, CourseTabs);

    return _possibleConstructorReturn(this, _getPrototypeOf(CourseTabs).apply(this, arguments));
  }

  _createClass(CourseTabs, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, "Course Tabs");
    }
  }]);

  return CourseTabs;
}(wp.element.Component);

/***/ }),

/***/ "./src/templates/single-course/lesson/button-submit.js":
/*!*************************************************************!*\
  !*** ./src/templates/single-course/lesson/button-submit.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component = wp.element.Component;

var ButtonSubmit =
/*#__PURE__*/
function (_Component) {
  _inherits(ButtonSubmit, _Component);

  function ButtonSubmit() {
    var _this;

    _classCallCheck(this, ButtonSubmit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonSubmit).apply(this, arguments));
    _this.state = {
      status: 'Complete'
    };
    _this.updateButton = _this.updateButton.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ButtonSubmit, [{
    key: "updateButton",
    value: function updateButton() {
      this.setState({
        status: 'Completed'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("button", {
        type: "button",
        onClick: this.updateButton
      }, this.state.status);
    }
  }]);

  return ButtonSubmit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (ButtonSubmit);

/***/ }),

/***/ "./src/templates/single-course/lesson/content.js":
/*!*******************************************************!*\
  !*** ./src/templates/single-course/lesson/content.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component = wp.element.Component;

var LessonContent =
/*#__PURE__*/
function (_Component) {
  _inherits(LessonContent, _Component);

  function LessonContent() {
    _classCallCheck(this, LessonContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(LessonContent).apply(this, arguments));
  }

  _createClass(LessonContent, [{
    key: "updateCount",
    value: function updateCount() {
      var count = this.state.count + 1;
      this.setState({
        count: count
      });
      console.log(this.state, count);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, "Lorem ispul content");
    }
  }]);

  return LessonContent;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (LessonContent);

/***/ }),

/***/ "./src/templates/single-course/lesson/index.js":
/*!*****************************************************!*\
  !*** ./src/templates/single-course/lesson/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./src/templates/single-course/lesson/content.js");
/* harmony import */ var _button_submit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-submit */ "./src/templates/single-course/lesson/button-submit.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Component = wp.element.Component;

var Lesson =
/*#__PURE__*/
function (_Component) {
  _inherits(Lesson, _Component);

  function Lesson() {
    _classCallCheck(this, Lesson);

    return _possibleConstructorReturn(this, _getPrototypeOf(Lesson).apply(this, arguments));
  }

  _createClass(Lesson, [{
    key: "updateCount",
    value: function updateCount() {
      var count = this.state.count + 1;
      this.setState({
        count: count
      });
      console.log(this.state, count);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(_content__WEBPACK_IMPORTED_MODULE_0__["default"], null), React.createElement(_button_submit__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return Lesson;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (Lesson);

/***/ }),

/***/ "./src/templates/single-course/progress.js":
/*!*************************************************!*\
  !*** ./src/templates/single-course/progress.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by tu on 8/3/19.
 */

/***/ }),

/***/ "./src/templates/single-course/quiz/buttons/start.js":
/*!***********************************************************!*\
  !*** ./src/templates/single-course/quiz/buttons/start.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component = wp.element.Component;

var ButtonStart =
/*#__PURE__*/
function (_Component) {
  _inherits(ButtonStart, _Component);

  function ButtonStart() {
    var _this;

    _classCallCheck(this, ButtonStart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonStart).apply(this, arguments));
    _this.state = {
      status: 'Start'
    };
    _this.updateButton = _this.updateButton.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ButtonStart, [{
    key: "updateButton",
    value: function updateButton() {
      this.setState({
        status: 'Started'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("button", {
        type: "button",
        onClick: this.updateButton
      }, this.state.status);
    }
  }]);

  return ButtonStart;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (ButtonStart);

/***/ }),

/***/ "./src/templates/single-course/quiz/content.js":
/*!*****************************************************!*\
  !*** ./src/templates/single-course/quiz/content.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component = wp.element.Component;

var QuizContent =
/*#__PURE__*/
function (_Component) {
  _inherits(QuizContent, _Component);

  function QuizContent() {
    _classCallCheck(this, QuizContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(QuizContent).apply(this, arguments));
  }

  _createClass(QuizContent, [{
    key: "updateCount",
    value: function updateCount() {
      var count = this.state.count + 1;
      this.setState({
        count: count
      });
      console.log(this.state, count);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, "QUiz content");
    }
  }]);

  return QuizContent;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (QuizContent);

/***/ }),

/***/ "./src/templates/single-course/quiz/index.js":
/*!***************************************************!*\
  !*** ./src/templates/single-course/quiz/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons_start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/start */ "./src/templates/single-course/quiz/buttons/start.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ "./src/templates/single-course/quiz/content.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Component = wp.element.Component;

var Quiz =
/*#__PURE__*/
function (_Component) {
  _inherits(Quiz, _Component);

  function Quiz() {
    _classCallCheck(this, Quiz);

    return _possibleConstructorReturn(this, _getPrototypeOf(Quiz).apply(this, arguments));
  }

  _createClass(Quiz, [{
    key: "updateCount",
    value: function updateCount() {
      var count = this.state.count + 1;
      this.setState({
        count: count
      });
      console.log(this.state, count);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(_content__WEBPACK_IMPORTED_MODULE_1__["default"], null), React.createElement(_buttons_start__WEBPACK_IMPORTED_MODULE_0__["default"], null));
    }
  }]);

  return Quiz;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (Quiz);

/***/ }),

/***/ "./src/templates/single-course/tabs/index.js":
/*!***************************************************!*\
  !*** ./src/templates/single-course/tabs/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CourseTabs =
/*#__PURE__*/
function (_wp$element$Component) {
  _inherits(CourseTabs, _wp$element$Component);

  function CourseTabs() {
    var _this;

    _classCallCheck(this, CourseTabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CourseTabs).apply(this, arguments));
    _this.state = {
      tabs: {
        "overview": {
          "title": "Overview",
          "priority": 10,
          "callback": "learn_press_course_overview_tab",
          "id": "tab-overview"
        },
        "curriculum": {
          "title": "Curriculum",
          "priority": 30,
          "callback": "learn_press_course_curriculum_tab",
          "id": "tab-curriculum",
          "active": true
        },
        "instructor": {
          "title": "Instructor",
          "priority": 40,
          "callback": "learn_press_course_instructor_tab",
          "id": "tab-instructor"
        }
      } //this.selectTab = this.selectTab.bind(this);

    };
    return _this;
  }

  _createClass(CourseTabs, [{
    key: "selectTab",
    value: function selectTab(e, tabId) {
      e.preventDefault();
      console.log(tabId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var tabs = this.state.tabs;
      return React.createElement(React.Fragment, null, React.createElement("ul", {
        className: "learn-press-nav-tabs course-nav-tabs"
      }, Object.keys(tabs).map(function (tabId) {
        var theTab = tabs[tabId];
        var tabClass = ['course-nav', 'course-nav-tab-' + tabId];
        return React.createElement("li", {
          className: tabClass.join(' ')
        }, React.createElement("a", {
          href: '?tab=' + theTab.id,
          "data-tab": '#' + theTab.id,
          onClick: function onClick(e) {
            _this2.selectTab(e, tabId);
          }
        }, theTab.title));
      })), Object.keys(tabs).map(function (tabId) {
        var theTab = tabs[tabId];
        var tabClass = ['course-tab-panel-' + tabId, 'course-tab-panel'];
        return React.createElement("div", {
          className: tabClass.join(' '),
          id: theTab.id
        }, JSON.stringify(theTab));
      }));
    }
  }]);

  return CourseTabs;
}(wp.element.Component);

/* harmony default export */ __webpack_exports__["default"] = (CourseTabs);

/***/ })

/******/ });
//# sourceMappingURL=index.js.map