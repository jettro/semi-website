/**
 * @desc simple helper to test if an eleement exists
 * @param element {HTMLElement} The element to check
 * @returns {boolean} whether the element exists in local DOM
 */
export function elementExists(element) {
  return typeof (element) != 'undefined' && element != null;
}

/**
 * @desc parses number with comma decimal separator
 * @param n {number}
 * @returns {boolean}
 */
export function isNumber(n) {
  'use strict';
  n = n.replace(/\./g, '').replace(',', '.');
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * @desc localize the number to the language of choice
 * @param n {number} the number to localize
 * @returns {string}
 */
export function localizeNumber(n) {
  const numberLanguage = 'nl';
  return Number(n).toLocaleString(numberLanguage);
}

/**
 * @desc localizes the string to number depending on the language of choice
 * @param n {number} the number to localize
 * @returns {number}
 */
export function localizeStringToNumber(n) {
  /**
   * can be used for conversion to non-EU numbers:
   * return parseFloat(n.replace(",", ".")).toFixed(2);
   * source: https://stackoverflow.com/questions/28894971/problems-with-javascript-parseint-decimal-string
   */
  /** note: this function doesn't return decimals */
  return parseFloat(n.replace(/\./g,''));
}

/**
 * @desc can be used to fire event only once
 * @param target
 * @param type
 * @param listener
 */
export function addEventListenerOnce(target, type, listener) {
  target.addEventListener(type, function fn() {
    target.removeEventListener(type, fn);
    listener.apply(this, arguments);
  });
}

/**
 * @desc returns the next sibling of HTMLElement
 * @param element {HTMLElement} The element of which the sibling should be found
 * @returns {*} the next sibling
 */
export function nextSibling(element) {
  do {
    element = element.nextSibling;
  } while (element && element.nodeType !== 1);
  return element;
}
