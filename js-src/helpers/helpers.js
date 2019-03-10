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

/**
 * @desc Gets closest element by type
 * @param element {object} The element that's clicked (usually event.target)
 * @param selector
 * @returns {*}
 */
export function getClosest(element, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function(s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for ( ; element && element !== document; element = element.parentNode ) {
      if ( element.matches( selector ) ) return element;
    }
    return null;
}

/**
 * @desc removes an object by key from a [object Array]
 * @param array {Array} the array to remove the config object from
 * @param objectKey {String} a string which defines the  key to remove from [object Array]
 * @returns {Array} an array in which the
 */
export function removeObjectByKeyFromArray(array, objectKey) {
  let options = [];
  for (let option of Object.values(array)) {
    const [key] = Object.keys(option);
    /** don't include config as option option */
    if (key !== objectKey) {
      options.push(option);
    }
  }
  return options;
}
