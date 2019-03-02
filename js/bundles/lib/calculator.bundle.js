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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js-src/modules/pricing/calculator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js-src/helpers/helpers.js":
/*!***********************************!*\
  !*** ./js-src/helpers/helpers.js ***!
  \***********************************/
/*! exports provided: elementExists, selectParentElementOfType, assignButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementExists\", function() { return elementExists; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectParentElementOfType\", function() { return selectParentElementOfType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assignButtonElement\", function() { return assignButtonElement; });\n/**\n * \n * @param element\n * @returns {boolean}\n */\nfunction elementExists(element) {\n  return typeof element != 'undefined' && element != null;\n}\n/**\n *\n * @param event\n * @param type\n * @returns {boolean}\n */\n\nfunction selectParentElementOfType(event, type) {\n  const target = event.target.closest(type);\n\n  if (elementExists(target)) {\n    if (target.tagName === type) {\n      return true;\n    }\n  }\n\n  return false;\n}\n/**\n *\n * @param event\n * @param targetParentIsButton\n * @param targetIsButton\n * @returns {*}\n */\n\nfunction assignButtonElement(event, targetParentIsButton, targetIsButton) {\n  if (targetParentIsButton) {\n    return event.target.closest('button');\n  } else if (targetIsButton) {\n    return event.target;\n  }\n}\n\n//# sourceURL=webpack:///./js-src/helpers/helpers.js?");

/***/ }),

/***/ "./js-src/modules/pricing/calculator.js":
/*!**********************************************!*\
  !*** ./js-src/modules/pricing/calculator.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formPricingRadioButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formPricingRadioButtons */ \"./js-src/modules/pricing/formPricingRadioButtons.js\");\n/* harmony import */ var _formPricingCalculate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formPricingCalculate */ \"./js-src/modules/pricing/formPricingCalculate.js\");\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n/* harmony import */ var _pricingConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pricingConfig */ \"./js-src/modules/pricing/pricingConfig.js\");\n\n\n\n\n\n(function (factory) {\n  // Find the global object for export to both the browser and web workers.\n  var globalObject = typeof window === 'object' && window || typeof self === 'object' && self; // Setup calculator.js for different environments. First is Node.js or\n  // CommonJS.\n\n  if (typeof exports !== 'undefined') {\n    factory(exports);\n  } else if (globalObject) {\n    // Export calculator globally even when using AMD for cases when this script\n    // is loaded with others that may still expect a global calculator.\n    globalObject.calculator = factory({}); // Finally register the global calculator with AMD.\n\n    if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n      define([], function () {\n        return globalObject.calculator;\n      });\n    }\n  }\n})(function (calculator) {\n  console.log('inside calculator');\n\n  function initCalculatorOnLoad() {\n    const formPricing = document.getElementById(_pricingConfig__WEBPACK_IMPORTED_MODULE_3__[\"default\"].formId);\n\n    if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__[\"elementExists\"])(formPricing)) {\n      // initial setting of receipt\n      Object(_formPricingCalculate__WEBPACK_IMPORTED_MODULE_1__[\"formPricingInit\"])(formPricing); // form interactions\n\n      formPricing.addEventListener('click', e => {\n        e.preventDefault();\n        Object(_formPricingRadioButtons__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, formPricing);\n        Object(_formPricingCalculate__WEBPACK_IMPORTED_MODULE_1__[\"formPricingCalculate\"])(e, formPricing); // TODO: add form handler\n      }, false);\n    } else {\n      console.error(`No form present. Are you sure the form with id '${_pricingConfig__WEBPACK_IMPORTED_MODULE_3__[\"default\"].formId}' exists?`);\n    }\n  }\n  /* interface definition */\n\n\n  calculator.initCalculatorOnLoad = initCalculatorOnLoad;\n  return calculator;\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/calculator.js?");

/***/ }),

/***/ "./js-src/modules/pricing/formPricingCalculate.js":
/*!********************************************************!*\
  !*** ./js-src/modules/pricing/formPricingCalculate.js ***!
  \********************************************************/
/*! exports provided: formPricingInit, formPricingCalculate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formPricingInit\", function() { return formPricingInit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formPricingCalculate\", function() { return formPricingCalculate; });\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n\nconst config = {\n  'elementClassToCountBy': 'price',\n  'elementClassTotalPrice': 'pricing-total'\n};\n\nfunction sum(arr) {\n  const add = (a, b) => a + b;\n\n  return arr.reduce(add);\n}\n\nfunction calculateTotal(elementsContainingPrices) {\n  let prices = [];\n\n  for (let price of elementsContainingPrices) {\n    const priceNumber = parseInt(price.innerText);\n    prices.push(priceNumber);\n  }\n\n  if (prices.constructor === Array) {\n    if (prices.length !== 0) {\n      return sum(prices);\n    }\n  } else {\n    console.error(`The prices aren't in an Array, something has gone wrong.`);\n  }\n}\n/**\n * @desc pricing is calculated based on elements per column with the class defined in above config\n * @param form\n */\n\n\nfunction formPricingInit(form) {\n  const fieldSets = form.children;\n\n  if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"elementExists\"])(fieldSets)) {\n    for (let fieldset of fieldSets) {\n      if (fieldset.id === 'use-case') {\n        const columns = fieldset.getElementsByClassName('form-stepper-table__column');\n\n        for (let column of columns) {\n          // only calculate prices if it's a button\n          if (column.classList.contains('ui-button')) {\n            const columnPriceElements = column.getElementsByClassName(config.elementClassToCountBy);\n            const total = calculateTotal(columnPriceElements);\n            const totalContainer = column.getElementsByClassName(config.elementClassTotalPrice);\n\n            if (totalContainer.length === 1) {\n              totalContainer[0].innerText = total;\n            } else if (totalContainer.length >= 1) {\n              console.error(`There are more containers for the total sum of prices present in this column. It should have only one.`);\n            } else {\n              console.error(`There are no  containers for the total sum of prices. It should have one to show the total price.`);\n            }\n          }\n        }\n      }\n    }\n  } else {\n    console.error(`There are no fieldsets present in the selected form '${config.formId}'.`);\n  }\n}\n/**\n *\n * @param e\n * @param form\n */\n\nfunction formPricingCalculate(e, form) {}\n\n//# sourceURL=webpack:///./js-src/modules/pricing/formPricingCalculate.js?");

/***/ }),

/***/ "./js-src/modules/pricing/formPricingRadioButtons.js":
/*!***********************************************************!*\
  !*** ./js-src/modules/pricing/formPricingRadioButtons.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n/* harmony import */ var _formPricingToggleFieldset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formPricingToggleFieldset */ \"./js-src/modules/pricing/formPricingToggleFieldset.js\");\n\n\n/**\n * @desc Field section radio buttons interaction\n * @param e\n * @param form\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (e, form) {\n  const targetParentIsButton = Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"selectParentElementOfType\"])(e, 'BUTTON');\n  const targetIsButton = e.target.tagName === 'BUTTON';\n  const clickedButton = Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"assignButtonElement\"])(e, targetParentIsButton, targetIsButton);\n  /**\n   *\n   * @desc sets all other radio buttons to false by getting the button types\n   * @param parentElement\n   */\n\n  function unsetRadioButtons(parentElement) {\n    const radioButtons = parentElement.getElementsByTagName('BUTTON');\n\n    for (let radioButton of radioButtons) {\n      radioButton.setAttribute('aria-checked', 'false');\n      radioButton.classList.remove('ui-button--active');\n    }\n  }\n\n  if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"elementExists\"])(clickedButton)) {\n    const isRadioButton = clickedButton.attributes.role.value === 'radio';\n    const isInactiveButton = clickedButton.getAttribute('aria-checked') !== true;\n    const isDisabledButton = clickedButton.disabled;\n    const isToggleButton = typeof clickedButton.dataset.targetShow !== 'undefined';\n    const isButtonInTable = clickedButton.classList.contains('form-stepper-table__column');\n\n    if (isDisabledButton) {\n      return; // don't do anything if button is disabled\n    }\n\n    if (isRadioButton && isInactiveButton || isButtonInTable) {\n      const targetRadioGroup = clickedButton.closest('[role=\"radiogroup\"]');\n      unsetRadioButtons(targetRadioGroup);\n      clickedButton.setAttribute('aria-checked', 'true');\n      clickedButton.classList.add('ui-button--active');\n    }\n\n    if (isToggleButton) {\n      Object(_formPricingToggleFieldset__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e, form, clickedButton);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/formPricingRadioButtons.js?");

/***/ }),

/***/ "./js-src/modules/pricing/formPricingToggleFieldset.js":
/*!*************************************************************!*\
  !*** ./js-src/modules/pricing/formPricingToggleFieldset.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n\n/**\n *\n * @desc toggle fieldsection based on radio buttons\n * @param e\n * @param form\n * @param button\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (e, form, button) {\n  const parentNode = button.parentNode;\n  const fieldsetHidden = unHideFieldset(button.dataset.targetShow);\n  /**\n   *\n   * @desc flips 'true' and 'false' (strings) so that the aria-hidden value of target gets correct string value\n   * @param showTarget {string} |\n   * @returns {string}\n   */\n\n  function unHideFieldset(showTarget) {\n    if (showTarget === 'false') {\n      return 'true';\n    } else if (showTarget === 'true') {\n      return 'false';\n    }\n  }\n\n  if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"elementExists\"])(parentNode)) {\n    const parentIsFieldset = parentNode.tagName === 'FIELDSET';\n\n    if (parentIsFieldset) {\n      const fieldsetTarget = parentNode.dataset.target;\n      const fieldsetHasTarget = typeof fieldsetTarget !== 'undefined';\n\n      if (fieldsetHasTarget) {\n        // TODO: refactor and merge with similar function in formPricingCalculate\n        const fieldSets = form.children;\n\n        if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"elementExists\"])(fieldSets)) {\n          for (let fieldset of fieldSets) {\n            const currentFieldsetIsTarget = fieldset.dataset.step === fieldsetTarget;\n\n            if (currentFieldsetIsTarget) {\n              fieldset.setAttribute('aria-hidden', fieldsetHidden);\n            }\n          }\n        } else {\n          console.error(`There are no fieldsets present in the selected form '${config.formId}'.`);\n        } // until here\n\n      }\n    } else {\n      console.error(`parent ${parentIsFieldset} isn't a fieldset`);\n    }\n  } else {\n    console.error(`parent node ${parentNode} doesn't exist.`);\n  }\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/formPricingToggleFieldset.js?");

/***/ }),

/***/ "./js-src/modules/pricing/pricingConfig.js":
/*!*************************************************!*\
  !*** ./js-src/modules/pricing/pricingConfig.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * configuration object\n * @type {{formId: string}}\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  'formId': 'js-form-pricing'\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/pricingConfig.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */\nmodule.exports = __webpack_amd_options__;\n\n/* WEBPACK VAR INJECTION */}.call(this, {}))\n\n//# sourceURL=webpack:///(webpack)/buildin/amd-options.js?");

/***/ })

/******/ });