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

/***/ "./_data/pricingUseCases.json":
/*!************************************!*\
  !*** ./_data/pricingUseCases.json ***!
  \************************************/
/*! exports provided: cpcLabels, useCases, hostingProviders, default */
/***/ (function(module) {

eval("module.exports = {\"cpcLabels\":[{\"title\":\"Adding Data\",\"desc\":\"Everything related to adding data. This also allows for scale or speed of the knowledge graph.\",\"api\":\"weaviate.graph.add\"},{\"title\":\"Updating data\",\"desc\":\"info here...\",\"api\":\"weaviate.graph.manipulate\"},{\"title\":\"Requesting data\",\"desc\":\"info here...\",\"api\":\"weaviate.graph.get\"},{\"title\":\"Understanding the local graph\",\"desc\":\"info here...\",\"api\":\"weaviate.graph.meta\"},{\"title\":\"Adding to the network\",\"desc\":\"info here...\",\"api\":\"weaviate.network.add\"},{\"title\":\"Getting from the network\",\"desc\":\"info here...\",\"api\":\"weaviate.network.get\"},{\"title\":\"Understanding the network\",\"desc\":\"info here...\",\"api\":\"weaviate.network.meta\"},{\"title\":\"Querying the network\",\"desc\":\"info here...\",\"api\":\"weaviate.network.query\"},{\"title\":\"Knowledge services\",\"desc\":\"info here...\",\"api\":\"weaviate.graph.service\"}],\"useCases\":[{\"MD\":{\"title\":\"Master Data\",\"shortDesc\":\"Enrich merge and find data relating to master data\",\"panelLabel\":\"Master Data use case estimated consumption\",\"desc\":\"Based on your use-case we have provided you with recommendations for your setup and a specific pricing that best suits your needs.\",\"hostingCostWeaviate\":\"0\",\"consumptions\":[{\"cpc\":\"0.015\",\"average\":\"100000\"},{\"cpc\":\"0.015\",\"average\":\"200000\"},{\"cpc\":\"0.015\",\"average\":\"300000\"},{\"cpc\":\"0.015\",\"average\":\"400000\"},{\"cpc\":\"0.015\",\"average\":\"500000\"},{\"cpc\":\"0.015\",\"average\":\"600000\"},{\"cpc\":\"0.015\",\"average\":\"700000\"},{\"cpc\":\"0.015\",\"average\":\"800000\"},{\"cpc\":\"0.015\",\"average\":\"900000\"}],\"optimization\":[{\"size\":\"75\"},{\"overall\":\"100\"},{\"speed\":\"110\"}]},\"RP\":{\"title\":\"Reporting\",\"panelLabel\":\"Reporting use case estimated consumption\",\"desc\":\"A supporting tool that allows us to request daily/monthly or weekly reports replacing manual work\",\"hostingCostWeaviate\":\"120\",\"consumptions\":[{\"cpc\":\"0.025\",\"average\":\"100000\"},{\"cpc\":\"0.025\",\"average\":\"200000\"},{\"cpc\":\"0.025\",\"average\":\"300000\"},{\"cpc\":\"0.025\",\"average\":\"400000\"},{\"cpc\":\"0.025\",\"average\":\"500000\"},{\"cpc\":\"0.025\",\"average\":\"600000\"},{\"cpc\":\"0.025\",\"average\":\"700000\"},{\"cpc\":\"0.025\",\"average\":\"800000\"},{\"cpc\":\"0.025\",\"average\":\"900000\"}],\"optimization\":[{\"size\":\"100\"},{\"overall\":\"100\"},{\"speed\":\"75\"}]},\"BD\":{\"title\":\"Big Data\",\"shortDesc\":\"Enrich, merge and find data relating to master data.\",\"panelLabel\":\"Big Data Use Case estimated consumption\",\"desc\":\"This is a longer decription\",\"hostingCostWeaviate\":\"3044\",\"consumptions\":[{\"cpc\":\"0.035\",\"average\":\"100000\"},{\"cpc\":\"0.035\",\"average\":\"200000\"},{\"cpc\":\"0.035\",\"average\":\"300000\"},{\"cpc\":\"0.035\",\"average\":\"400000\"},{\"cpc\":\"0.035\",\"average\":\"500000\"},{\"cpc\":\"0.035\",\"average\":\"600000\"},{\"cpc\":\"0.035\",\"average\":\"700000\"},{\"cpc\":\"0.035\",\"average\":\"800000\"},{\"cpc\":\"0.035\",\"average\":\"900000\"}],\"optimization\":[{\"size\":\"75\"},{\"overall\":\"100\"},{\"speed\":\"100\"}]}}],\"hostingProviders\":[{\"Oracle Cloud\":\"100\"},{\"Google Cloud\":\"90\"},{\"AWS\":\"90\"},{\"Azure\":\"100\"},{\"Other\":\"110\"}]};\n\n//# sourceURL=webpack:///./_data/pricingUseCases.json?");

/***/ }),

/***/ "./js-src/helpers/helpers.js":
/*!***********************************!*\
  !*** ./js-src/helpers/helpers.js ***!
  \***********************************/
/*! exports provided: elementExists, isNumber, localizeNumberToString, localizeStringToNumber, addEventListenerOnce, nextSibling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementExists\", function() { return elementExists; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return isNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"localizeNumberToString\", function() { return localizeNumberToString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"localizeStringToNumber\", function() { return localizeStringToNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEventListenerOnce\", function() { return addEventListenerOnce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nextSibling\", function() { return nextSibling; });\n/**\n * @desc simple helper to test if an eleement exists\n * @param element {HTMLElement} The element to check\n * @returns {boolean} whether the element exists in local DOM\n */\nfunction elementExists(element) {\n  return typeof element != 'undefined' && element != null;\n}\n/**\n * @desc parses number with comma decimal separator\n * @param n {number}\n * @returns {boolean}\n */\n\nfunction isNumber(n) {\n  'use strict';\n\n  n = n.replace(/\\./g, '').replace(',', '.');\n  return !isNaN(parseFloat(n)) && isFinite(n);\n}\n/**\n * @desc localize the number to the language of choice\n * @param n {number} the number to localize\n * @returns {string}\n */\n\nfunction localizeNumberToString(n) {\n  const numberLanguage = 'nl';\n  return Number(n).toLocaleString(numberLanguage);\n}\n/**\n * @desc localizes the string to number depending on the language of choice\n * @param n {number} the number to localize\n * @returns {number}\n */\n\nfunction localizeStringToNumber(n) {\n  /**\n   * can be used for conversion to non-EU numbers:\n   * return parseFloat(n.replace(\",\", \".\")).toFixed(2);\n   * source: https://stackoverflow.com/questions/28894971/problems-with-javascript-parseint-decimal-string\n   */\n\n  /** note: this function doesn't return decimals */\n  return parseFloat(n.replace(/\\./g, ''));\n}\n/**\n * @desc can be used to fire event only once\n * @param target\n * @param type\n * @param listener\n */\n\nfunction addEventListenerOnce(target, type, listener) {\n  target.addEventListener(type, function fn() {\n    target.removeEventListener(type, fn);\n    listener.apply(this, arguments);\n  });\n}\n/**\n * @desc returns the next sibling of HTMLElement\n * @param element {HTMLElement} The element of which the sibling should be found\n * @returns {*} the next sibling\n */\n\nfunction nextSibling(element) {\n  do {\n    element = element.nextSibling;\n  } while (element && element.nodeType !== 1);\n\n  return element;\n}\n\n//# sourceURL=webpack:///./js-src/helpers/helpers.js?");

/***/ }),

/***/ "./js-src/modules/pricing/assignClickedElement.js":
/*!********************************************************!*\
  !*** ./js-src/modules/pricing/assignClickedElement.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @desc assigns the clicked element, either a parent or child\n * @param e\n * @param type {string} The type of element\n * @param targetParentIsClicked {boolean} check if the target parent is a button rather than the clicked element\n * @param targetIsClicked {boolean} check if the clicked element itself is a button\n * @returns {HTMLElement} returns the target element\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (e, type, targetParentIsClicked, targetIsClicked) {\n  if (targetParentIsClicked) {\n    return e.target.closest(type);\n  } else if (targetIsClicked) {\n    return e.target;\n  }\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/assignClickedElement.js?");

/***/ }),

/***/ "./js-src/modules/pricing/calcTotalCostUseCases.js":
/*!*********************************************************!*\
  !*** ./js-src/modules/pricing/calcTotalCostUseCases.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst {\n  isNumber\n} = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n/**\n * @desc calculates the total cost of the use-cases\n * @param containerElement {HTMLElement} The element containing all the pricing rows\n * @returns {number} the calculated total number\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (containerElement) {\n  const tableRows = containerElement.getElementsByClassName('table-pricing__row');\n  let useCaseTotal = 0;\n\n  for (let row of tableRows) {\n    if (typeof row.dataset.subTotal !== 'undefined' && isNumber(row.dataset.subTotal)) {\n      const useCaseSubTotal = row.dataset.subTotal;\n      useCaseTotal += parseInt(useCaseSubTotal);\n    }\n  }\n\n  return useCaseTotal;\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/calcTotalCostUseCases.js?");

/***/ }),

/***/ "./js-src/modules/pricing/calculator.js":
/*!**********************************************!*\
  !*** ./js-src/modules/pricing/calculator.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n/* harmony import */ var _pricingConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricingConfig */ \"./js-src/modules/pricing/pricingConfig.js\");\n/* harmony import */ var _handleChoiceUseCases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleChoiceUseCases */ \"./js-src/modules/pricing/handleChoiceUseCases.js\");\n/* harmony import */ var _handleChoiceHosting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleChoiceHosting */ \"./js-src/modules/pricing/handleChoiceHosting.js\");\n/* harmony import */ var _getChoiceFieldset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getChoiceFieldset */ \"./js-src/modules/pricing/getChoiceFieldset.js\");\n\n\n\n\n // import { formPricingInit, formPricingCalculate } from './formPricingCalculate';\n\n(function (factory) {\n  /** Find the global object for export to both the browser and web workers. */\n  var globalObject = typeof window === 'object' && window || typeof self === 'object' && self;\n  /**\n   *  Setup calculator.js for different environments.\n   *  First is Node.js or CommonJS.\n   */\n\n  if (typeof exports !== 'undefined') {\n    factory(exports);\n  } else if (globalObject) {\n    /**\n     * Export calculator globally even when using AMD for cases when this script\n     * is loaded with others that may still expect a global calculator.\n     */\n    globalObject.calculator = factory({});\n    /** Finally register the global calculator with AMD. */\n\n    if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n      define([], function () {\n        return globalObject.calculator;\n      });\n    }\n  }\n})(function (calculator) {\n  function initCalculatorOnLoad() {\n    const formPricing = document.getElementById(_pricingConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"].formId);\n\n    if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"elementExists\"])(formPricing)) {\n      const fieldSets = formPricing.getElementsByTagName('FIELDSET');\n      const fieldsetUseCase = Object(_getChoiceFieldset__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(fieldSets, 'use-case');\n      const fieldsetHostingPreference = Object(_getChoiceFieldset__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(fieldSets, 'hosting-preference');\n      /** execute the choices */\n\n      /** first fieldset, use cases */\n\n      Object(_handleChoiceUseCases__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(fieldsetUseCase, function () {\n        const nextFieldset = Object(_getChoiceFieldset__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(fieldSets, 'hosting-preference');\n        nextFieldset.classList.remove('form-stepper__step--hide');\n        nextFieldset.classList.add('form-stepper__step--show');\n      }).then();\n      /** second fieldset, hosting preference */\n\n      Object(_handleChoiceHosting__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(fieldsetUseCase, fieldsetHostingPreference, fieldSets).then(function (resolve) {});\n    } else {\n      console.error(`No form present. Are you sure the form with id '${_pricingConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"].formId}' exists?`);\n    }\n  }\n  /** interface definition */\n\n\n  calculator.initCalculatorOnLoad = initCalculatorOnLoad;\n  return calculator;\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/calculator.js?");

/***/ }),

/***/ "./js-src/modules/pricing/createCloneFromTemplate.js":
/*!***********************************************************!*\
  !*** ./js-src/modules/pricing/createCloneFromTemplate.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n\n/**\n * @desc clones element and removes the id (!) that was used to target it by to prevent duplicate ID's in HTML.\n *       So use an id to target element.\n * @param element {HTMLElement} The element to clone\n * @returns {*|Node|ActiveX.IXMLDOMNode} clone of the element\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (element) {\n  if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"elementExists\"])(element)) {\n    const clone = element.cloneNode(true);\n    clone.removeAttribute('id');\n    return clone;\n  } else {\n    console.info(`No element with id ${element} has been found. Please check the markup.`);\n  }\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/createCloneFromTemplate.js?");

/***/ }),

/***/ "./js-src/modules/pricing/formPricingRadioButtons.js":
/*!***********************************************************!*\
  !*** ./js-src/modules/pricing/formPricingRadioButtons.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n/* harmony import */ var _formPricingToggleFieldset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formPricingToggleFieldset */ \"./js-src/modules/pricing/formPricingToggleFieldset.js\");\n/* harmony import */ var _selectClickedElementByType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectClickedElementByType */ \"./js-src/modules/pricing/selectClickedElementByType.js\");\n\n\n\n/**\n * @desc Field section radio buttons interaction\n * @param e\n * @param form\n * @param callback\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (e, form, callback) {\n  const clickedButton = Object(_selectClickedElementByType__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e, 'BUTTON');\n  /**\n   *\n   * @desc sets all other radio buttons to false by getting the button types\n   * @param parentElement\n   */\n\n  function unsetRadioButtons(parentElement) {\n    const radioButtons = parentElement.getElementsByTagName('BUTTON');\n\n    for (let radioButton of radioButtons) {\n      radioButton.setAttribute('aria-checked', 'false');\n      radioButton.classList.remove('ui-button--active');\n    }\n  }\n\n  if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"elementExists\"])(clickedButton)) {\n    const isRadioButton = clickedButton.attributes.role.value === 'radio';\n    const isInactiveButton = clickedButton.getAttribute('aria-checked') !== true;\n    const isDisabledButton = clickedButton.disabled;\n    const isToggleButton = typeof clickedButton.dataset.targetShow !== 'undefined';\n    const isButtonInTable = clickedButton.classList.contains('form-stepper-table__column');\n\n    if (isDisabledButton) {\n      return; // don't do anything if button is disabled\n    }\n\n    if (isRadioButton && isInactiveButton || isButtonInTable) {\n      const targetRadioGroup = clickedButton.closest('[role=\"radiogroup\"]');\n      unsetRadioButtons(targetRadioGroup);\n      clickedButton.setAttribute('aria-checked', 'true');\n      clickedButton.classList.add('ui-button--active');\n    }\n\n    if (isToggleButton) {\n      Object(_formPricingToggleFieldset__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e, form, clickedButton);\n    }\n  }\n\n  callback();\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/formPricingRadioButtons.js?");

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

/***/ "./js-src/modules/pricing/generateCpcRows.js":
/*!***************************************************!*\
  !*** ./js-src/modules/pricing/generateCpcRows.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n/* harmony import */ var _createCloneFromTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCloneFromTemplate */ \"./js-src/modules/pricing/createCloneFromTemplate.js\");\n/* harmony import */ var _setFeatureCellText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setFeatureCellText */ \"./js-src/modules/pricing/setFeatureCellText.js\");\n/* harmony import */ var _setFeatureSubTotal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setFeatureSubTotal */ \"./js-src/modules/pricing/setFeatureSubTotal.js\");\n\n\n\n\n/**\n * @desc generate all the rows\n * @param template {HTMLElement} template to use for the clone for each row\n * @param labels {object} label to add as first cell of each row\n * @param data {object} data to be used in cells in each row\n * @param containerNode {HTMLElement} The container element in which the rows should be appended to\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (template, labels, data, containerNode) {\n  const hasLabels = typeof labels !== 'undefined';\n\n  if (hasLabels) {\n    const rowsMap = new Map();\n    /** Set all the data in the rows */\n\n    labels.forEach((label, i) => {\n      const cpcConverted = Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"localizeNumberToString\"])(data[i].cpc);\n      const avgConverted = Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"localizeNumberToString\"])(data[i].average);\n      /** clone the template for each label */\n\n      const clone = Object(_createCloneFromTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(template);\n      Object(_setFeatureCellText__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(clone, labels[i].title, 'feature-label');\n      Object(_setFeatureCellText__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(clone, labels[i].desc, 'feature-description');\n      Object(_setFeatureCellText__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(clone, cpcConverted, 'feature-cpc');\n      Object(_setFeatureCellText__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(clone, avgConverted, 'feature-average');\n      Object(_setFeatureSubTotal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(clone, data[i].cpc, data[i].average);\n      clone.classList.remove('template-table-pricing-row--hidden');\n      clone.classList.add('template-table-pricing-row--visible');\n      rowsMap.set(i, clone);\n    });\n    /** Append all the rows to the row-container */\n\n    rowsMap.forEach(item => {\n      containerNode.appendChild(item);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/generateCpcRows.js?");

/***/ }),

/***/ "./js-src/modules/pricing/generateUseCaseTable.js":
/*!********************************************************!*\
  !*** ./js-src/modules/pricing/generateUseCaseTable.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n/* harmony import */ var _createCloneFromTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCloneFromTemplate */ \"./js-src/modules/pricing/createCloneFromTemplate.js\");\n/* harmony import */ var _setUseCaseInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setUseCaseInfo */ \"./js-src/modules/pricing/setUseCaseInfo.js\");\n/* harmony import */ var _generateCpcRows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateCpcRows */ \"./js-src/modules/pricing/generateCpcRows.js\");\n\n\n\n\n\nconst useCaseData = __webpack_require__(/*! ../../../_data/pricingUseCases */ \"./_data/pricingUseCases.json\");\n/**\n * @param useCaseKey {string} A key to identify the correct values in the pricingUseCases.json (JSON) file\n * @param pricingInfoTableContainerClassName {string} The container of the pricing information table\n * @param pricingRowTemplateClassName {string} The template for each pricing information table row\n * @param pricingInfoTemplateId {string} The template for the pricing information block\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (useCaseKey, pricingInfoTableContainerClassName, pricingRowTemplateClassName, pricingInfoTemplateId, callback) {\n  const infoTemplateElement = document.getElementById(pricingInfoTemplateId);\n\n  if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"elementExists\"])(infoTemplateElement)) {\n    const useCaseLabels = useCaseData.cpcLabels;\n    const thisUseCaseData = useCaseData.useCases[0][useCaseKey];\n    const consumptions = thisUseCaseData.consumptions;\n    const cloneInfoContainer = document.getElementById('container-pricing-use-case');\n    const cloneInfoTemplate = Object(_createCloneFromTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(infoTemplateElement);\n    const thisInfoChildElements = cloneInfoTemplate.querySelectorAll('*');\n    /** append the clone to the container */\n\n    cloneInfoContainer.appendChild(cloneInfoTemplate);\n    /** show the correct clone based on use-case key */\n\n    cloneInfoTemplate.dataset.useCase = useCaseKey;\n    cloneInfoTemplate.classList.remove('template-pricing-use-case--hidden');\n    cloneInfoTemplate.classList.add('template-pricing-use-case--show');\n    thisInfoChildElements.forEach(childNode => {\n      Object(_setUseCaseInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(childNode, 'use-case-panel-label', thisUseCaseData.panelLabel);\n      Object(_setUseCaseInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(childNode, 'use-case-panel-description', thisUseCaseData.desc);\n    }); // TODO: improvement: target the template and container element not by classname but by other\n    //                    method. ID would be logical, but since each use-case info block will have\n    //                    an instance of this, ID isn't possible since only one may exist. Perhaps\n    //                    a data attribute? (research info for this)\n\n    const [rowTemplateElement] = cloneInfoTemplate.getElementsByClassName(pricingRowTemplateClassName);\n    const [tableRowContainer] = cloneInfoTemplate.getElementsByClassName(pricingInfoTableContainerClassName);\n\n    if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"elementExists\"])(tableRowContainer)) {\n      Object(_generateCpcRows__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(rowTemplateElement, useCaseLabels, consumptions, tableRowContainer);\n      callback(tableRowContainer);\n    } else {\n      console.info(`No container for the row elements is present. (rowContainer: ${tableRowContainer})`);\n    }\n  } else {\n    console.info(`Pricing container with classname ${pricingContainerClassName} does not exist. Please check the markup.`);\n  }\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/generateUseCaseTable.js?");

/***/ }),

/***/ "./js-src/modules/pricing/getChoiceFieldset.js":
/*!*****************************************************!*\
  !*** ./js-src/modules/pricing/getChoiceFieldset.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @desc gets fieldset based on data attribute (step)\n * @param fieldSets\n * @param step\n * @returns {HTMLElement} The fieldset by step\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (fieldSets, step) {\n  for (let fieldSet of fieldSets) {\n    if (fieldSet.dataset.step === step) return fieldSet;\n  }\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/getChoiceFieldset.js?");

/***/ }),

/***/ "./js-src/modules/pricing/handleChoiceHosting.js":
/*!*******************************************************!*\
  !*** ./js-src/modules/pricing/handleChoiceHosting.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _selectClickedElementByType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectClickedElementByType */ \"./js-src/modules/pricing/selectClickedElementByType.js\");\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n/* harmony import */ var _getChoiceFieldset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getChoiceFieldset */ \"./js-src/modules/pricing/getChoiceFieldset.js\");\n/* harmony import */ var _formPricingRadioButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formPricingRadioButtons */ \"./js-src/modules/pricing/formPricingRadioButtons.js\");\n/* harmony import */ var _pricingReceipt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pricingReceipt */ \"./js-src/modules/pricing/pricingReceipt.js\");\n/* harmony import */ var _data_pricingUseCases__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_data/pricingUseCases */ \"./_data/pricingUseCases.json\");\nvar _data_pricingUseCases__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../_data/pricingUseCases */ \"./_data/pricingUseCases.json\", 1);\n/* harmony import */ var _createCloneFromTemplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createCloneFromTemplate */ \"./js-src/modules/pricing/createCloneFromTemplate.js\");\n/* harmony import */ var _pricingConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pricingConfig */ \"./js-src/modules/pricing/pricingConfig.js\");\n/* harmony import */ var _setFeatureCellText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./setFeatureCellText */ \"./js-src/modules/pricing/setFeatureCellText.js\");\n\n\n\n\n\n\n\n\n\n/**\n *\n * @param elements {}\n * @returns {string}\n */\n\nfunction getUseCaseKey(elements) {\n  if (typeof elements !== 'undefined') {\n    for (let element of elements) {\n      if (element.classList.contains('ui-button--active')) return element.dataset.useCase;\n    }\n  }\n}\n/**\n *\n * @param template {HTMLElement}\n * @param container {HTMLElement}\n * @param data {object}\n * @param type {string}\n */\n\n\nfunction loadOptions(template, container, data, type) {\n  const options = data[type];\n  const optionsButtonMap = new Map();\n  options.forEach((option, i) => {\n    const clone = Object(_createCloneFromTemplate__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(template);\n    const multiplier = parseFloat(Object.values(option)[0]).toFixed(2);\n    const label = Object.keys(option)[0];\n    Object(_setFeatureCellText__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(clone, label, 'ui-button__title');\n    clone.classList.remove('pricing-hosting-button--hide');\n    clone.classList.add('pricing-hosting-button--show');\n    clone.dataset.multiplier = multiplier;\n    optionsButtonMap.set(i, clone);\n  });\n  /** Append all the cost buttons to the cost container */\n\n  optionsButtonMap.forEach(item => {\n    container.appendChild(item);\n  });\n  /** options are loaded, add click handling */\n\n  container.addEventListener('click', e => {\n    e.preventDefault();\n    Object(_formPricingRadioButtons__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e, container, function () {\n      const button = Object(_selectClickedElementByType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, 'BUTTON');\n      /** get the total price from the receipt */\n\n      const totalUseCasePrice = document.getElementById(_pricingConfig__WEBPACK_IMPORTED_MODULE_7__[\"default\"].receipt.montlyTotalId);\n\n      if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__[\"elementExists\"])(button)) {\n        /** target parent element, since data set needs to be set on parent li rather than button */\n        const multiplier = button.parentElement.dataset.multiplier;\n        const multiplierExists = multiplier !== '';\n\n        if (multiplierExists) {\n          Object(_pricingReceipt__WEBPACK_IMPORTED_MODULE_4__[\"setHostingAdjustment\"])(multiplier, totalUseCasePrice);\n        } else {\n          console.info(`The multiplier isn't set on the data attribute of the hosting button.`);\n        }\n      }\n    });\n  });\n}\n/**\n *\n * @returns {Promise<any>}\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (useCaseFieldset, target, fieldSets) {\n  return new Promise((resolve, reject) => {\n    target.addEventListener('click', e => {\n      e.preventDefault();\n      Object(_formPricingRadioButtons__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e, target, function () {\n        const button = Object(_selectClickedElementByType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, 'BUTTON');\n\n        if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__[\"elementExists\"])(button)) {\n          /** optional sub-steps */\n          const buttonData = button.dataset.targetShowFieldset;\n\n          if (buttonData) {\n            const optionStep1 = 'hosting-optimisation';\n            const optionStep2 = 'hosting-preference-platform';\n            const hideClass = 'form-stepper__step--hide';\n            const showClass = 'form-stepper__step--show'; // TODO: refactor this and make more DRY\n\n            /** Hosting is provided by Weaviate (option = Yes) */\n\n            if (buttonData === optionStep1) {\n              /** hide/show correct optional fieldset */\n              const optionalFieldsetToShow = Object(_getChoiceFieldset__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(fieldSets, optionStep1);\n              const optionalFieldsetToHide = Object(_getChoiceFieldset__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(fieldSets, optionStep2);\n              optionalFieldsetToHide.classList.remove(showClass);\n              optionalFieldsetToHide.classList.add(hideClass);\n              optionalFieldsetToShow.classList.remove(hideClass);\n              optionalFieldsetToShow.classList.add(showClass);\n              /** add buttons to optional fieldset, only if they don't exist yet */\n\n              const numberOfChildButtons = optionalFieldsetToShow.getElementsByClassName('pricing-hosting-button--show').length;\n\n              if (numberOfChildButtons === 0) {\n                const useCaseButtons = useCaseFieldset.getElementsByTagName('BUTTON'); // TODO: maybe don't use document.getElement by id, but the current fieldset as Node's parent\n\n                const container = document.getElementById(_pricingConfig__WEBPACK_IMPORTED_MODULE_7__[\"default\"].pricingOptimizationContainerId);\n                const template = document.getElementById(_pricingConfig__WEBPACK_IMPORTED_MODULE_7__[\"default\"].pricingOptimizationTemplateId);\n                const key = getUseCaseKey(useCaseButtons);\n                const data = _data_pricingUseCases__WEBPACK_IMPORTED_MODULE_5__.useCases[0][key];\n                loadOptions(template, container, data, 'optimization');\n              }\n            }\n\n            if (buttonData === optionStep2) {\n              /** hide/show correct optional fieldset (option = No) */\n              const optionalFieldsetToShow = Object(_getChoiceFieldset__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(fieldSets, optionStep2);\n              const optionalFieldsetToHide = Object(_getChoiceFieldset__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(fieldSets, optionStep1);\n              optionalFieldsetToHide.classList.remove(showClass);\n              optionalFieldsetToHide.classList.add(hideClass);\n              optionalFieldsetToShow.classList.remove(hideClass);\n              optionalFieldsetToShow.classList.add(showClass);\n              /** add buttons to optional fieldset, only if they don't exist yet */\n\n              const numberOfChildButtons = optionalFieldsetToShow.getElementsByClassName('pricing-hosting-button--show').length;\n\n              if (numberOfChildButtons === 0) {\n                // TODO: maybe don't use document.getElement by id, but the current fieldset as Node's parent\n                const container = document.getElementById(_pricingConfig__WEBPACK_IMPORTED_MODULE_7__[\"default\"].pricingPlatformContainerId);\n                const template = document.getElementById(_pricingConfig__WEBPACK_IMPORTED_MODULE_7__[\"default\"].pricingPlatformTemplateId);\n                const data = _data_pricingUseCases__WEBPACK_IMPORTED_MODULE_5__;\n                loadOptions(template, container, data, 'hostingProviders');\n              }\n            }\n          }\n        }\n      });\n    });\n  });\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/handleChoiceHosting.js?");

/***/ }),

/***/ "./js-src/modules/pricing/handleChoiceUseCases.js":
/*!********************************************************!*\
  !*** ./js-src/modules/pricing/handleChoiceUseCases.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n/* harmony import */ var _formPricingRadioButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formPricingRadioButtons */ \"./js-src/modules/pricing/formPricingRadioButtons.js\");\n/* harmony import */ var _showUseCasePricing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showUseCasePricing */ \"./js-src/modules/pricing/showUseCasePricing.js\");\n/* harmony import */ var _selectClickedElementByType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectClickedElementByType */ \"./js-src/modules/pricing/selectClickedElementByType.js\");\n/* harmony import */ var _pricingConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pricingConfig */ \"./js-src/modules/pricing/pricingConfig.js\");\n\n\n\n\n\n/**\n *\n * @param target {HTMLElement} the target this choice applies to\n * @param callback {fn} a function to execute only once, once this function is done\n * @returns {Promise<any>}\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (target, callback) {\n  return new Promise((resolve, reject) => {\n    target.addEventListener('click', e => {\n      e.preventDefault();\n      /** Logic for the radio buttons*/\n\n      Object(_formPricingRadioButtons__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e, target, function () {\n        const button = Object(_selectClickedElementByType__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e, 'BUTTON');\n\n        if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"elementExists\"])(button)) {\n          const useCaseKey = button.dataset.useCase;\n          const useCaseKeyExists = useCaseKey !== '';\n\n          if (useCaseKeyExists) {\n            Object(_showUseCasePricing__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(useCaseKey, _pricingConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"].pricingInfoContainerId);\n          }\n        }\n      });\n    });\n    /** resolve the promise and do a callback once! */\n\n    Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"addEventListenerOnce\"])(target, \"click\", function () {\n      const button = Object(_selectClickedElementByType__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(event, 'BUTTON');\n      /** only do callback when the element clicked on is a button */\n\n      if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"elementExists\"])(button)) {\n        callback();\n      }\n\n      resolve();\n    });\n  });\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/handleChoiceUseCases.js?");

/***/ }),

/***/ "./js-src/modules/pricing/pricingConfig.js":
/*!*************************************************!*\
  !*** ./js-src/modules/pricing/pricingConfig.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * configuration object\n * @type {{formId: string}}\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  'formId': 'js-form-pricing',\n  'pricingInfoTemplateId': 'template-pricing-use-case',\n  'pricingInfoContainerId': 'container-pricing-use-case',\n  'panelsClassName': 'panel-collapse',\n  'pricingInfoTableContainerClassName': 'table-row-container',\n  'pricingRowTemplateClassName': 'template-table-pricing-row',\n  'pricingOptimizationContainerId': 'container-pricing-optimization-button',\n  'pricingOptimizationTemplateId': 'template-pricing-optimization-button',\n  'pricingPlatformContainerId': 'container-pricing-platform-button',\n  'pricingPlatformTemplateId': 'template-pricing-platform-button',\n  'receipt': {\n    'montlyTotalId': 'price-monthly-total',\n    'hostingAdjustmentId': 'price-hosting-adjustment'\n  }\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/pricingConfig.js?");

/***/ }),

/***/ "./js-src/modules/pricing/pricingReceipt.js":
/*!**************************************************!*\
  !*** ./js-src/modules/pricing/pricingReceipt.js ***!
  \**************************************************/
/*! exports provided: setVariableMonthlyCost, setHostingAdjustment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setVariableMonthlyCost\", function() { return setVariableMonthlyCost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setHostingAdjustment\", function() { return setHostingAdjustment; });\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n/* harmony import */ var _pricingConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricingConfig */ \"./js-src/modules/pricing/pricingConfig.js\");\n\n\n/**\n * @desc set subTotal for 'variable monthly cost'\n * @param subTotal\n */\n\nfunction setVariableMonthlyCost(subTotal) {\n  /** append to receipt */\n  const monthlyTotalElement = document.getElementById(_pricingConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"].receipt.montlyTotalId);\n  monthlyTotalElement.innerHTML = Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"localizeNumberToString\"])(subTotal);\n  /** make the subtotal active */\n\n  const receiptEntriesUseCase = document.getElementsByClassName('receipt__use-case');\n\n  for (let entry of receiptEntriesUseCase) {\n    entry.classList.remove('receipt__entry-inactive');\n  }\n}\n/**\n *\n * @param multiplier {string}\n * @param useCasePrice {HTMLElement}\n */\n\nfunction setHostingAdjustment(multiplier, useCasePrice) {\n  /** calculate price */\n  const priceBefore = useCasePrice.textContent;\n  const priceBeforeFormatted = Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"localizeStringToNumber\"])(priceBefore);\n  const sum = parseInt(multiplier / 100 * priceBeforeFormatted);\n  const difference = priceBeforeFormatted - sum;\n  /** append to receipt */\n\n  const hostingAdjustmentElement = document.getElementById(_pricingConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"].receipt.hostingAdjustmentId);\n  hostingAdjustmentElement.innerHTML = Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"localizeNumberToString\"])(difference);\n  /** make the subtotal active */\n\n  const receiptEntriesUseCase = document.getElementsByClassName('receipt__hosting-adjustment');\n\n  for (let entry of receiptEntriesUseCase) {\n    entry.classList.remove('receipt__entry-inactive');\n  }\n}\n\n//# sourceURL=webpack:///./js-src/modules/pricing/pricingReceipt.js?");

/***/ }),

/***/ "./js-src/modules/pricing/selectClickedElementByType.js":
/*!**************************************************************!*\
  !*** ./js-src/modules/pricing/selectClickedElementByType.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assignClickedElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignClickedElement */ \"./js-src/modules/pricing/assignClickedElement.js\");\n/* harmony import */ var _selectParentElementByType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectParentElementByType */ \"./js-src/modules/pricing/selectParentElementByType.js\");\n\n\n/**\n * @desc button is block level element, so it can also contain another element inside,\n *       this makes sure the button itself is selected rather than an element inside\n * @param e {object} event that triggers this action\n * @param type {string} the type of object to check\n * @returns {HTMLElement} the element the click was on\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (e, type) {\n  const targetParentIsClicked = Object(_selectParentElementByType__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e, type);\n  const targetIsClicked = e.target.tagName === type;\n  return Object(_assignClickedElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, type, targetParentIsClicked, targetIsClicked);\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/selectClickedElementByType.js?");

/***/ }),

/***/ "./js-src/modules/pricing/selectParentElementByType.js":
/*!*************************************************************!*\
  !*** ./js-src/modules/pricing/selectParentElementByType.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n\n/**\n * @desc check whether the type of element is directly selectable return true (= not a parent)\n * @param event\n * @param type\n * @returns {boolean}\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (event, type) {\n  const target = event.target.closest(type);\n\n  if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"elementExists\"])(target)) {\n    if (target.tagName === type) {\n      return true;\n    }\n  }\n\n  return false;\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/selectParentElementByType.js?");

/***/ }),

/***/ "./js-src/modules/pricing/setFeatureCellText.js":
/*!******************************************************!*\
  !*** ./js-src/modules/pricing/setFeatureCellText.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n *\n * @param target {HTMLElement} The element\n * @param text {string} text to apply to innerHTML\n * @param className {string} class name to target element to apply it to\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (target, text, className) {\n  const element = target.getElementsByClassName(className);\n  element[0].innerHTML = text;\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/setFeatureCellText.js?");

/***/ }),

/***/ "./js-src/modules/pricing/setFeatureSubTotal.js":
/*!******************************************************!*\
  !*** ./js-src/modules/pricing/setFeatureSubTotal.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @desc Add the total of cpc and average call amount to data attribute\n * @param target\n * @param cpc\n * @param average\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (target, cpc, averageCalls) {\n  // TODO: add error handler for cpc and average, for instance what happens when something other than a number is used\n  const parsedCpc = parseFloat(cpc).toFixed(2);\n  const parsedAverage = parseFloat(averageCalls).toFixed(2);\n  target.dataset.subTotal = parsedAverage * parsedCpc;\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/setFeatureSubTotal.js?");

/***/ }),

/***/ "./js-src/modules/pricing/setUseCaseInfo.js":
/*!**************************************************!*\
  !*** ./js-src/modules/pricing/setUseCaseInfo.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n *\n * @param node {HTMLElement} element to check if content should be added\n * @param targetClassName {string} The class to identify the node by\n * @param innerContent {string} The content to add\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (node, targetClassName, innerContent) {\n  const targetExists = typeof node.classList != 'undefined' && node.classList.contains(targetClassName);\n\n  if (targetExists && innerContent) {\n    node.innerHTML = innerContent;\n  }\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/setUseCaseInfo.js?");

/***/ }),

/***/ "./js-src/modules/pricing/showUseCasePricing.js":
/*!******************************************************!*\
  !*** ./js-src/modules/pricing/showUseCasePricing.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n/* harmony import */ var _generateUseCaseTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateUseCaseTable */ \"./js-src/modules/pricing/generateUseCaseTable.js\");\n/* harmony import */ var _pricingConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pricingConfig */ \"./js-src/modules/pricing/pricingConfig.js\");\n/* harmony import */ var _pricingReceipt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pricingReceipt */ \"./js-src/modules/pricing/pricingReceipt.js\");\n/* harmony import */ var _calcTotalCostUseCases__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calcTotalCostUseCases */ \"./js-src/modules/pricing/calcTotalCostUseCases.js\");\n\n\n\n\n\n/**\n *\n * @param panels {object} the panels that exist on the page\n * @param currentUseCaseKey {string} use case key to test if the element already exists\n * @returns {boolean} returns true if the element doesn't exist\n */\n\nconst panelDoesNotExist = function (panels, currentUseCaseKey) {\n  const panelsMap = new Map();\n  Array.from(panels).forEach((panel, i) => {\n    const panelUseCaseKey = panel.dataset.useCase;\n    panelsMap.set(i, panelUseCaseKey === currentUseCaseKey);\n  });\n\n  for (let [k, v] of panelsMap) {\n    if (v === true) {\n      return false;\n    }\n  }\n\n  return true;\n};\n/**\n * @desc toggle the existing panels based on use-case key\n * @param panels {object} the panels that exist on the page\n * @param currentUseCaseKey {string} The current use case key to compare\n */\n\n\nconst toggleUseCasePanels = function (panels, currentUseCaseKey, callback) {\n  const showPanelClass = 'template-pricing-use-case--show';\n  const hidePanelClass = 'template-pricing-use-case--hidden';\n\n  if (typeof currentUseCaseKey === 'undefined') {\n    console.info(`The use case key hasn't been defined.`);\n  }\n\n  Array.from(panels).forEach(panel => {\n    const notAUseCasePanel = typeof panel.dataset.useCase === 'undefined';\n    const currentPanel = panel.dataset.useCase === currentUseCaseKey;\n    const notCurrentPanel = panel.dataset.useCase !== currentUseCaseKey;\n\n    if (notAUseCasePanel) {\n      return;\n    }\n\n    if (currentPanel) {\n      panel.classList.add(showPanelClass);\n      panel.classList.remove(hidePanelClass);\n      callback(panel);\n    }\n\n    if (notCurrentPanel) {\n      panel.classList.add(hidePanelClass);\n      panel.classList.remove(showPanelClass);\n    }\n  });\n};\n/**\n * @desc This shows the use case pricing information block\n * @param useCaseKey {string} A key to identify the correct values in the pricingUseCases.json (JSON) file\n * @param pricingInfoContainerId {string} The container for all the pricing info blocks\n * @param useCaseKey {string} Use case key is used to retrieve data from ./_data/pricingUseCases.json\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (useCaseKey, pricingInfoContainerId) {\n  const pricingUseCaseContainer = document.getElementById(pricingInfoContainerId);\n\n  if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"elementExists\"])(pricingUseCaseContainer)) {\n    let doCalculationOn;\n    const panels = pricingUseCaseContainer.getElementsByClassName(_pricingConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"].panelsClassName);\n    /** hide the other panels if it's not the use-case that's clicked */\n\n    toggleUseCasePanels(panels, useCaseKey, function (panelContainer) {\n      [doCalculationOn] = panelContainer.getElementsByClassName('table-row-container');\n    });\n\n    if (panelDoesNotExist(panels, useCaseKey)) {\n      /** the panel doesn't exist, create it */\n      Object(_generateUseCaseTable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(useCaseKey, _pricingConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"].pricingInfoTableContainerClassName, _pricingConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"].pricingRowTemplateClassName, _pricingConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"].pricingInfoTemplateId, function (tableRowContainer) {\n        doCalculationOn = tableRowContainer;\n      });\n    }\n\n    if (doCalculationOn) {\n      // TODO: maybe add pricingReceipt.setVariableMonthlyCost() as scoped function\n      Object(_pricingReceipt__WEBPACK_IMPORTED_MODULE_3__[\"setVariableMonthlyCost\"])(Object(_calcTotalCostUseCases__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(doCalculationOn));\n    }\n  } else {\n    console.info(`There is no pricing info container with the id ${pricingUseCaseContainer}`);\n  }\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/showUseCasePricing.js?");

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