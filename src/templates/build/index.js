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

/***/ "./src/templates/hooks.js":
/*!********************************!*\
  !*** ./src/templates/hooks.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Test js hooks
 */
jQuery(function () {
  var hooks = LP.utils.hooks;
  return;
  hooks.addAction('before-course-landing', function () {
    return React.createElement('div', {
      dangerouslySetInnerHTML: {
        __html: 'Hello, <strong>Admin</strong>'
      }
    });
  }, -40);
  hooks.addAction('before-course-landing', function () {
    return React.createElement('div', {
      dangerouslySetInnerHTML: {
        __html: 'You are student'
      }
    });
  }, 10);
  hooks.addAction('before-course-landing', function () {
    return React.createElement('div', {
      dangerouslySetInnerHTML: {
        __html: '#1111'
      }
    });
  }, 1);
  hooks.addAction('before-course-landing', function () {
    return React.createElement('div', {
      dangerouslySetInnerHTML: {
        __html: 'YEP!'
      }
    });
  }, 10);
  hooks.addAction('after-course-landing', function () {
    return React.createElement('div', {
      dangerouslySetInnerHTML: {
        __html: 'Continue...'
      }
    });
  });
});

/***/ }),

/***/ "./src/templates/index.js":
/*!********************************!*\
  !*** ./src/templates/index.js ***!
  \********************************/
/*! exports provided: Hooks, Index, SingleCourse_Buttons_Enroll, SingleCourse_Buttons_Purchase, SingleCourse_Buttons_Submit, SingleCourse_ContentLanding, SingleCourse_ContentLearning, SingleCourse_Content, SingleCourse_CourseTabs, SingleCourse_Lesson_ButtonSubmit, SingleCourse_Lesson_Content, SingleCourse_Lesson_Index, SingleCourse_Progress, SingleCourse_Quiz_Buttons_Start, SingleCourse_Quiz_Content, SingleCourse_Quiz_Index, SingleCourse_Section_Index, SingleCourse_Tabs_Index, SingleCourse_Tabs_TabCurriculum, SingleCourse_Tabs_TabInstructor, SingleCourse_Tabs_TabOverview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks.js */ "./src/templates/hooks.js");
/* harmony import */ var _hooks_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hooks_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Hooks", function() { return _hooks_js__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/templates/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return _index_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _single_course_buttons_enroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-course/buttons/enroll.js */ "./src/templates/single-course/buttons/enroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Buttons_Enroll", function() { return _single_course_buttons_enroll_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _single_course_buttons_purchase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-course/buttons/purchase.js */ "./src/templates/single-course/buttons/purchase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Buttons_Purchase", function() { return _single_course_buttons_purchase_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _single_course_buttons_submit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./single-course/buttons/submit.js */ "./src/templates/single-course/buttons/submit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Buttons_Submit", function() { return _single_course_buttons_submit_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _single_course_content_landing_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-course/content-landing.js */ "./src/templates/single-course/content-landing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_ContentLanding", function() { return _single_course_content_landing_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _single_course_content_learning_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-course/content-learning.js */ "./src/templates/single-course/content-learning.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_ContentLearning", function() { return _single_course_content_learning_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _single_course_content_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./single-course/content.js */ "./src/templates/single-course/content.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Content", function() { return _single_course_content_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _single_course_course_tabs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./single-course/course-tabs.js */ "./src/templates/single-course/course-tabs.js");
/* harmony import */ var _single_course_course_tabs_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_single_course_course_tabs_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_CourseTabs", function() { return _single_course_course_tabs_js__WEBPACK_IMPORTED_MODULE_8___default.a; });
/* harmony import */ var _single_course_lesson_button_submit_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./single-course/lesson/button-submit.js */ "./src/templates/single-course/lesson/button-submit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Lesson_ButtonSubmit", function() { return _single_course_lesson_button_submit_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _single_course_lesson_content_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./single-course/lesson/content.js */ "./src/templates/single-course/lesson/content.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Lesson_Content", function() { return _single_course_lesson_content_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _single_course_lesson_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./single-course/lesson/index.js */ "./src/templates/single-course/lesson/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Lesson_Index", function() { return _single_course_lesson_index_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _single_course_progress_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./single-course/progress.js */ "./src/templates/single-course/progress.js");
/* harmony import */ var _single_course_progress_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_single_course_progress_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Progress", function() { return _single_course_progress_js__WEBPACK_IMPORTED_MODULE_12___default.a; });
/* harmony import */ var _single_course_quiz_buttons_start_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./single-course/quiz/buttons/start.js */ "./src/templates/single-course/quiz/buttons/start.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Quiz_Buttons_Start", function() { return _single_course_quiz_buttons_start_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _single_course_quiz_content_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./single-course/quiz/content.js */ "./src/templates/single-course/quiz/content.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Quiz_Content", function() { return _single_course_quiz_content_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _single_course_quiz_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./single-course/quiz/index.js */ "./src/templates/single-course/quiz/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Quiz_Index", function() { return _single_course_quiz_index_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _single_course_section_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./single-course/section/index.js */ "./src/templates/single-course/section/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Section_Index", function() { return _single_course_section_index_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _single_course_tabs_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./single-course/tabs/index.js */ "./src/templates/single-course/tabs/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Tabs_Index", function() { return _single_course_tabs_index_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _single_course_tabs_tab_curriculum_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./single-course/tabs/tab-curriculum.js */ "./src/templates/single-course/tabs/tab-curriculum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Tabs_TabCurriculum", function() { return _single_course_tabs_tab_curriculum_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _single_course_tabs_tab_instructor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./single-course/tabs/tab-instructor.js */ "./src/templates/single-course/tabs/tab-instructor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Tabs_TabInstructor", function() { return _single_course_tabs_tab_instructor_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _single_course_tabs_tab_overview_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./single-course/tabs/tab-overview.js */ "./src/templates/single-course/tabs/tab-overview.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCourse_Tabs_TabOverview", function() { return _single_course_tabs_tab_overview_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });





















 // For watching files change
// export const rand = function(){ return 0.34477967656057684}

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
/* harmony import */ var _learnpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @learnpress/blocks */ "@learnpress/blocks");
/* harmony import */ var _learnpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_learnpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _learnpress_course_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @learnpress/course-progress */ "@learnpress/course-progress");
/* harmony import */ var _learnpress_course_progress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_learnpress_course_progress__WEBPACK_IMPORTED_MODULE_1__);
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
var hooks = LP.utils.hooks;

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
      var enrollCourse = this.props.enrollCourse;
      return React.createElement("div", {
        className: "learnpress-landing"
      },
      /**
       * Hook
       */
      hooks.doAction('before-course-landing'), React.createElement(_learnpress_blocks__WEBPACK_IMPORTED_MODULE_0__["CourseTabs"], null),
      /**
       * Hook
       */
      hooks.doAction('after-course-landing'), React.createElement("button", {
        onClick: function onClick(e) {
          e.preventDefault();
          enrollCourse();
        }
      }, "Enroll"));
    }
  }]);

  return ContentLanding;
}(wp.element.Component);

/* harmony default export */ __webpack_exports__["default"] = (ContentLanding);

/***/ }),

/***/ "./src/templates/single-course/content-learning.js":
/*!*********************************************************!*\
  !*** ./src/templates/single-course/content-learning.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _learnpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @learnpress/blocks */ "@learnpress/blocks");
/* harmony import */ var _learnpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_learnpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _learnpress_course_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @learnpress/course-progress */ "@learnpress/course-progress");
/* harmony import */ var _learnpress_course_progress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_learnpress_course_progress__WEBPACK_IMPORTED_MODULE_1__);
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
var hooks = LP.utils.hooks;

var ContentLearning =
/*#__PURE__*/
function (_wp$element$Component) {
  _inherits(ContentLearning, _wp$element$Component);

  function ContentLearning() {
    _classCallCheck(this, ContentLearning);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContentLearning).apply(this, arguments));
  }

  _createClass(ContentLearning, [{
    key: "render",
    value: function render() {
      var leaveCourse = this.props.leaveCourse;
      return React.createElement("div", {
        className: "learnpress-learning"
      },
      /**
       * Hook
       */
      hooks.doAction('before-course-learning'), React.createElement(_learnpress_course_progress__WEBPACK_IMPORTED_MODULE_1___default.a, null), React.createElement(_learnpress_blocks__WEBPACK_IMPORTED_MODULE_0__["CourseTabs"], null), React.createElement("button", {
        onClick: function onClick(e) {
          e.preventDefault();
          leaveCourse();
        }
      }, "Leave"),
      /**
       * Hook
       */
      hooks.doAction('after-course-learning'));
    }
  }]);

  return ContentLearning;
}(wp.element.Component);

/* harmony default export */ __webpack_exports__["default"] = (ContentLearning);

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

/***/ "./src/templates/single-course/section/index.js":
/*!******************************************************!*\
  !*** ./src/templates/single-course/section/index.js ***!
  \******************************************************/
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

var _lodash = lodash,
    isNumber = _lodash.isNumber;

var CourseSection =
/*#__PURE__*/
function (_wp$element$Component) {
  _inherits(CourseSection, _wp$element$Component);

  function CourseSection() {
    _classCallCheck(this, CourseSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(CourseSection).apply(this, arguments));
  }

  _createClass(CourseSection, [{
    key: "renderItem",
    value: function renderItem(item) {
      var items = this.props.items;

      if (isNumber(item)) {
        item = items[item];
      }

      if (!item) {
        return '';
      }

      return React.createElement("h4", null, React.createElement("a", {
        href: item.permalink
      }, item.name));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          section = _this$props.section,
          clickSection = _this$props.clickSection,
          renderItem = _this$props.renderItem,
          className = _this$props.className;
      return React.createElement("div", {
        className: className.join(' ')
      }, React.createElement("h4", {
        onClick: clickSection
      }, section.title), React.createElement("div", {
        className: "course-items"
      }, section.items.map(function (item) {
        return React.createElement("div", {
          className: "course-item"
        }, renderItem(item));
      })));
    }
  }]);

  return CourseSection;
}(wp.element.Component);

/* harmony default export */ __webpack_exports__["default"] = (CourseSection);

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

var Component = wp.element.Component;

var CourseTabs =
/*#__PURE__*/
function (_Component) {
  _inherits(CourseTabs, _Component);

  function CourseTabs() {
    _classCallCheck(this, CourseTabs);

    return _possibleConstructorReturn(this, _getPrototypeOf(CourseTabs).apply(this, arguments));
  }

  _createClass(CourseTabs, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          tabs = _this$props.tabs,
          selectTab = _this$props.selectTab,
          isActiveTab = _this$props.isActiveTab,
          displayTab = _this$props.displayTab;
      return React.createElement("div", {
        id: "learn-press-course-tabs"
      }, React.createElement("ul", {
        className: "learn-press-nav-tabs course-nav-tabs"
      }, Object.keys(tabs).map(function (tabId) {
        var theTab = tabs[tabId];
        var tabClass = ['course-nav', 'course-nav-tab-' + tabId];

        if (isActiveTab(tabId)) {
          tabClass.push('active');
        }

        return React.createElement("li", {
          className: tabClass.join(' ')
        }, React.createElement("a", {
          href: '?tab=' + theTab.id,
          "data-tab": '#' + theTab.id,
          onClick: function onClick(e) {
            selectTab(e, tabId);
          }
        }, theTab.title));
      })), Object.keys(tabs).map(function (tabId) {
        if (!isActiveTab(tabId)) {
          return;
        }

        var theTab = tabs[tabId];
        var tabClass = ['course-tab-panel-' + tabId, 'course-tab-panel active'];
        return isActiveTab(tabId) && React.createElement("div", {
          className: tabClass.join(' '),
          id: theTab.id
        }, displayTab(theTab, _this));
      }));
    }
  }]);

  return CourseTabs;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (CourseTabs);

/***/ }),

/***/ "./src/templates/single-course/tabs/tab-curriculum.js":
/*!************************************************************!*\
  !*** ./src/templates/single-course/tabs/tab-curriculum.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _learnpress_course_curriculum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @learnpress/course-curriculum */ "@learnpress/course-curriculum");
/* harmony import */ var _learnpress_course_curriculum__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_learnpress_course_curriculum__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




window.learn_press_course_curriculum_tab = function (props) {
  return React.createElement(_learnpress_course_curriculum__WEBPACK_IMPORTED_MODULE_0___default.a, props);
};

var TabCurriculum =
/*#__PURE__*/
function (_wp$element$Component) {
  _inherits(TabCurriculum, _wp$element$Component);

  function TabCurriculum() {
    _classCallCheck(this, TabCurriculum);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabCurriculum).apply(this, arguments));
  }

  _createClass(TabCurriculum, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          sections = _this$props.sections,
          items = _this$props.items;
      return React.createElement("div", null, sections.map(function (section) {
        return React.createElement(_learnpress_course_curriculum__WEBPACK_IMPORTED_MODULE_0__["Section"], {
          section: section,
          items: items
        });
      }));
    }
  }]);

  return TabCurriculum;
}(wp.element.Component);

/* harmony default export */ __webpack_exports__["default"] = (TabCurriculum);

/***/ }),

/***/ "./src/templates/single-course/tabs/tab-instructor.js":
/*!************************************************************!*\
  !*** ./src/templates/single-course/tabs/tab-instructor.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _learnpress_course_curriculum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @learnpress/course-curriculum */ "@learnpress/course-curriculum");
/* harmony import */ var _learnpress_course_curriculum__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_learnpress_course_curriculum__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



window.learn_press_course_instructor_tab = function (props) {
  return React.createElement(_learnpress_course_curriculum__WEBPACK_IMPORTED_MODULE_0___default.a, props);
};

var TabInstructor =
/*#__PURE__*/
function (_wp$element$Component) {
  _inherits(TabInstructor, _wp$element$Component);

  function TabInstructor() {
    _classCallCheck(this, TabInstructor);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabInstructor).apply(this, arguments));
  }

  _createClass(TabInstructor, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          sections = _this$props.sections,
          items = _this$props.items;
      return React.createElement("div", null, sections.map(function (section) {
        return React.createElement(Section, {
          section: section,
          items: items
        });
      }));
    }
  }]);

  return TabInstructor;
}(wp.element.Component);

/* harmony default export */ __webpack_exports__["default"] = (TabInstructor);

/***/ }),

/***/ "./src/templates/single-course/tabs/tab-overview.js":
/*!**********************************************************!*\
  !*** ./src/templates/single-course/tabs/tab-overview.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _learnpress_course_curriculum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @learnpress/course-curriculum */ "@learnpress/course-curriculum");
/* harmony import */ var _learnpress_course_curriculum__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_learnpress_course_curriculum__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _learnpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @learnpress/blocks */ "@learnpress/blocks");
/* harmony import */ var _learnpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_learnpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




window.learn_press_course_overview_tab = function (props) {
  return React.createElement(_learnpress_blocks__WEBPACK_IMPORTED_MODULE_1__["CourseOverview"], props);
};

var TabOverview =
/*#__PURE__*/
function (_wp$element$Component) {
  _inherits(TabOverview, _wp$element$Component);

  function TabOverview() {
    _classCallCheck(this, TabOverview);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabOverview).apply(this, arguments));
  }

  _createClass(TabOverview, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: this.props.overview
        }
      }));
    }
  }]);

  return TabOverview;
}(wp.element.Component);

/* harmony default export */ __webpack_exports__["default"] = (TabOverview);

/***/ }),

/***/ "@learnpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["LP","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["LP"]["blocks"]; }());

/***/ }),

/***/ "@learnpress/course-curriculum":
/*!***************************************************!*\
  !*** external {"this":["LP","courseCurriculum"]} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["LP"]["courseCurriculum"]; }());

/***/ }),

/***/ "@learnpress/course-progress":
/*!*************************************************!*\
  !*** external {"this":["LP","courseProgress"]} ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["LP"]["courseProgress"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map