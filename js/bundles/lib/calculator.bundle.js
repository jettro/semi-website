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
/*! exports provided: cpcLabels, useCases, default */
/***/ (function(module) {

eval("module.exports = {\"cpcLabels\":[{\"title\":\"Adding Data\",\"desc\":\"Everything related to adding data. This also allows for scale or speed of the knowledge graph.\",\"api\":\"weaviate.local.query\"},{\"title\":\"Updating data\",\"desc\":\"info here...\",\"api\":\"\"},{\"title\":\"Requesting data\",\"desc\":\"info here...\",\"api\":\"\"},{\"title\":\"Understanding the local graph\",\"desc\":\"info here...\",\"api\":\"\"},{\"title\":\"Adding to the network\",\"desc\":\"info here...\",\"api\":\"\"},{\"title\":\"Getting from the network\",\"desc\":\"info here...\",\"api\":\"\"},{\"title\":\"Understanding the network\",\"desc\":\"info here...\",\"api\":\"\"},{\"title\":\"Querying the network\",\"desc\":\"info here...\",\"api\":\"\"},{\"title\":\"Knowledge services\",\"desc\":\"info here...\",\"api\":\"\"}],\"useCases\":[{\"MD\":{\"title\":\"Master Data\",\"desc\":\"Based on your use-case we have provided you with recommendations for your setup and a specific pricing that best suits your needs.\",\"shortDesc\":\"Enrich merge and find data relating to master data\",\"infoLabel\":\"Master Data use case estimated consumption\",\"consumptions\":[{\"cpc\":\"0,015\",\"average\":\"100.000\"},{\"cpc\":\"0,015\",\"average\":\"200.000\"},{\"cpc\":\"0,015\",\"average\":\"300.000\"},{\"cpc\":\"0,015\",\"average\":\"400.000\"},{\"cpc\":\"0,015\",\"average\":\"500.000\"},{\"cpc\":\"0,015\",\"average\":\"600.000\"},{\"cpc\":\"0,015\",\"average\":\"700.000\"},{\"cpc\":\"0,015\",\"average\":\"800.000\"},{\"cpc\":\"0,015\",\"average\":\"900.000\"}]},\"RP\":{\"title\":\"Reporting\",\"desc\":\"A supporting tool that allows us to request daily/monthly or weekly reports replacing manual work\",\"infoLabel\":\"Reporting use case estimated consumption\",\"consumptions\":[{\"cpc\":\"0,025\",\"average\":\"100.000\"},{\"cpc\":\"0,025\",\"average\":\"200.000\"},{\"cpc\":\"0,025\",\"average\":\"300.000\"},{\"cpc\":\"0,025\",\"average\":\"400.000\"},{\"cpc\":\"0,025\",\"average\":\"500.000\"},{\"cpc\":\"0,025\",\"average\":\"600.000\"},{\"cpc\":\"0,025\",\"average\":\"700.000\"},{\"cpc\":\"0,025\",\"average\":\"800.000\"},{\"cpc\":\"0,025\",\"average\":\"900.000\"}]}}]};\n\n//# sourceURL=webpack:///./_data/pricingUseCases.json?");

/***/ }),

/***/ "./js-src/helpers/helpers.js":
/*!***********************************!*\
  !*** ./js-src/helpers/helpers.js ***!
  \***********************************/
/*! exports provided: elementExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementExists\", function() { return elementExists; });\n/**\n * @desc simple helper to test if an eleement exists\n * @param element {HTMLElement} The element to check\n * @returns {boolean} whether the element exists in local DOM\n */\nfunction elementExists(element) {\n  return typeof element != 'undefined' && element != null;\n}\n\n//# sourceURL=webpack:///./js-src/helpers/helpers.js?");

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

/***/ "./js-src/modules/pricing/calculator.js":
/*!**********************************************!*\
  !*** ./js-src/modules/pricing/calculator.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formPricingRadioButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formPricingRadioButtons */ \"./js-src/modules/pricing/formPricingRadioButtons.js\");\n/* harmony import */ var _showUseCasePricing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showUseCasePricing */ \"./js-src/modules/pricing/showUseCasePricing.js\");\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n/* harmony import */ var _selectClickedElementByType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectClickedElementByType */ \"./js-src/modules/pricing/selectClickedElementByType.js\");\n/* harmony import */ var _pricingConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pricingConfig */ \"./js-src/modules/pricing/pricingConfig.js\");\n\n\n\n // import { formPricingInit, formPricingCalculate } from './formPricingCalculate';\n\n\n\n(function (factory) {\n  // Find the global object for export to both the browser and web workers.\n  var globalObject = typeof window === 'object' && window || typeof self === 'object' && self; // Setup calculator.js for different environments. First is Node.js or\n  // CommonJS.\n\n  if (typeof exports !== 'undefined') {\n    factory(exports);\n  } else if (globalObject) {\n    // Export calculator globally even when using AMD for cases when this script\n    // is loaded with others that may still expect a global calculator.\n    globalObject.calculator = factory({}); // Finally register the global calculator with AMD.\n\n    if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n      define([], function () {\n        return globalObject.calculator;\n      });\n    }\n  }\n})(function (calculator) {\n  function initCalculatorOnLoad() {\n    const formPricing = document.getElementById(_pricingConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"].formId);\n\n    if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__[\"elementExists\"])(formPricing)) {\n      // TODO: restate the init\n      // initial setting of receipt\n      // formPricingInit(formPricing);\n      // form interactions\n      formPricing.addEventListener('click', e => {\n        e.preventDefault();\n        Object(_formPricingRadioButtons__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, formPricing, function () {\n          const button = Object(_selectClickedElementByType__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e, 'BUTTON');\n\n          if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__[\"elementExists\"])(button)) {\n            const useCaseKey = button.dataset.useCase;\n            const useCaseKeyExists = useCaseKey !== '';\n\n            if (useCaseKeyExists) {\n              Object(_showUseCasePricing__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(useCaseKey, _pricingConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"].pricingInfoContainerId, _pricingConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"].pricingInfoTemplateId, _pricingConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"].pricingInfoTableContainerClassName, _pricingConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"].pricingRowTemplateClassName);\n            }\n          }\n        }); // TODO refactor two functions:\n        // formPricingCalculate(e, formPricing);\n        // TODO: add form handler\n      }, false);\n    } else {\n      console.error(`No form present. Are you sure the form with id '${_pricingConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"].formId}' exists?`);\n    }\n  }\n  /* interface definition */\n\n\n  calculator.initCalculatorOnLoad = initCalculatorOnLoad;\n  return calculator;\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/calculator.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n/* harmony import */ var _formPricingToggleFieldset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formPricingToggleFieldset */ \"./js-src/modules/pricing/formPricingToggleFieldset.js\");\n/* harmony import */ var _selectClickedElementByType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectClickedElementByType */ \"./js-src/modules/pricing/selectClickedElementByType.js\");\n\n\n\n/**\n * @desc Field section radio buttons interaction\n * @param e\n * @param form\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (e, form, callback) {\n  const clickedButton = Object(_selectClickedElementByType__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e, 'BUTTON');\n  /**\n   *\n   * @desc sets all other radio buttons to false by getting the button types\n   * @param parentElement\n   */\n\n  function unsetRadioButtons(parentElement) {\n    const radioButtons = parentElement.getElementsByTagName('BUTTON');\n\n    for (let radioButton of radioButtons) {\n      radioButton.setAttribute('aria-checked', 'false');\n      radioButton.classList.remove('ui-button--active');\n    }\n  }\n\n  if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"elementExists\"])(clickedButton)) {\n    const isRadioButton = clickedButton.attributes.role.value === 'radio';\n    const isInactiveButton = clickedButton.getAttribute('aria-checked') !== true;\n    const isDisabledButton = clickedButton.disabled;\n    const isToggleButton = typeof clickedButton.dataset.targetShow !== 'undefined';\n    const isButtonInTable = clickedButton.classList.contains('form-stepper-table__column');\n\n    if (isDisabledButton) {\n      return; // don't do anything if button is disabled\n    }\n\n    if (isRadioButton && isInactiveButton || isButtonInTable) {\n      const targetRadioGroup = clickedButton.closest('[role=\"radiogroup\"]');\n      unsetRadioButtons(targetRadioGroup);\n      clickedButton.setAttribute('aria-checked', 'true');\n      clickedButton.classList.add('ui-button--active');\n    }\n\n    if (isToggleButton) {\n      Object(_formPricingToggleFieldset__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e, form, clickedButton);\n    }\n  }\n\n  callback();\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/formPricingRadioButtons.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setFeatureCellText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setFeatureCellText */ \"./js-src/modules/pricing/setFeatureCellText.js\");\n/* harmony import */ var _createCloneFromTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCloneFromTemplate */ \"./js-src/modules/pricing/createCloneFromTemplate.js\");\n\n\n/**\n * @desc generate all the rows\n * @param template {HTMLElement} template to use for the clone for each row\n * @param labels {object} label to add as first cell of each row\n * @param data {object} data to be used in cells in each row\n * @param containerNode {HTMLElement} The container element in which the rows should be appended to\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (template, labels, data, containerNode) {\n  const hasLabels = typeof labels !== 'undefined';\n\n  if (hasLabels) {\n    const rowsMap = new Map();\n    /** Set all the data in the rows */\n\n    labels.forEach((label, i) => {\n      /** clone the template for each label */\n      const clone = Object(_createCloneFromTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(template);\n      Object(_setFeatureCellText__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(clone, labels[i].title, 'feature-label');\n      Object(_setFeatureCellText__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(clone, labels[i].desc, 'feature-description');\n      Object(_setFeatureCellText__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(clone, data[i].cpc, 'feature-cpc');\n      Object(_setFeatureCellText__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(clone, data[i].average, 'feature-average');\n      clone.classList.remove('template-table-pricing-row--hidden');\n      clone.classList.add('template-table-pricing-row--visible');\n      rowsMap.set(i, clone);\n    });\n    /** Append all the rows to the row-container */\n\n    rowsMap.forEach(item => {\n      containerNode.appendChild(item);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/generateCpcRows.js?");

/***/ }),

/***/ "./js-src/modules/pricing/pricingConfig.js":
/*!*************************************************!*\
  !*** ./js-src/modules/pricing/pricingConfig.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * configuration object\n * @type {{formId: string}}\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  'formId': 'js-form-pricing',\n  'pricingInfoTemplateId': 'template-pricing-use-case',\n  'pricingInfoContainerId': 'container-pricing-use-case',\n  'pricingInfoTableContainerClassName': 'table-row-container',\n  'pricingRowTemplateClassName': 'template-table-pricing-row'\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/pricingConfig.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers */ \"./js-src/helpers/helpers.js\");\n/* harmony import */ var _generateCpcRows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateCpcRows */ \"./js-src/modules/pricing/generateCpcRows.js\");\n/* harmony import */ var _setUseCaseInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setUseCaseInfo */ \"./js-src/modules/pricing/setUseCaseInfo.js\");\n/* harmony import */ var _createCloneFromTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createCloneFromTemplate */ \"./js-src/modules/pricing/createCloneFromTemplate.js\");\n\n\n\n\n\nconst useCaseData = __webpack_require__(/*! ../../../_data/pricingUseCases */ \"./_data/pricingUseCases.json\");\n/**\n * @desc This shows the use case pricing information block\n * @param useCaseKey {string} A key to identify the correct values in the pricingUseCases.json (JSON) file\n * @param pricingInfoContainerId {string} The container for all the pricing info blocks\n * @param pricingInfoTemplateId {string} The template for the pricing information block\n * @param useCaseKey {string} Use case key is used to retrieve data from ./_data/pricingUseCases.json\n * @param pricingInfoTableContainerClassName {string} The container of the pricing information table\n * @param pricingRowTemplateClassName {string} The template for each pricing information table row\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (useCaseKey, pricingInfoContainerId, pricingInfoTemplateId, pricingInfoTableContainerClassName, pricingRowTemplateClassName) {\n  const useCaseLabels = useCaseData.cpcLabels;\n  const thisUseCaseData = useCaseData.useCases[0][useCaseKey];\n  const consumptions = thisUseCaseData.consumptions;\n  const infoTemplateElement = document.getElementById(pricingInfoTemplateId);\n\n  if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"elementExists\"])(infoTemplateElement)) {\n    const cloneInfoContainer = document.getElementById('container-pricing-use-case');\n    const cloneInfoTemplate = Object(_createCloneFromTemplate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(infoTemplateElement);\n    const thisInfoChildElements = cloneInfoTemplate.querySelectorAll('*'); // append the clone it on the right location\n\n    cloneInfoContainer.appendChild(cloneInfoTemplate); // show/hide the template\n    // TODO: add logic so only one template is shown,\n    //       and the other that was shown remains in the DOM\n\n    cloneInfoTemplate.classList.remove('template-pricing-use-case--hidden');\n    cloneInfoTemplate.classList.add('template-pricing-use-case--show');\n    thisInfoChildElements.forEach(childNode => {\n      Object(_setUseCaseInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(childNode, 'use-case-panel-label', thisUseCaseData.infoLabel);\n      Object(_setUseCaseInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(childNode, 'use-case-panel-description', thisUseCaseData.desc);\n    }); // TODO: improvement: target the template and container element not by classname but by other\n    //                    method. ID would be logical, but since each use-case info block will have\n    //                    an instance of this, ID isn't possible since only one may exist. Perhaps\n    //                    a data attribute? (research info for this)\n\n    const [rowTemplateElement] = cloneInfoTemplate.getElementsByClassName(pricingRowTemplateClassName);\n    const [tableRowContainer] = cloneInfoTemplate.getElementsByClassName(pricingInfoTableContainerClassName);\n\n    if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__[\"elementExists\"])(tableRowContainer)) {\n      Object(_generateCpcRows__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rowTemplateElement, useCaseLabels, consumptions, tableRowContainer);\n    } else {\n      console.info(`No container for the row elements is present. (rowContainer: ${tableRowContainer})`);\n    }\n  } else {\n    console.info(`Pricing container with classname ${pricingContainerClassName} does not exist. Please check the markup.`);\n  }\n});\n\n//# sourceURL=webpack:///./js-src/modules/pricing/showUseCasePricing.js?");

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