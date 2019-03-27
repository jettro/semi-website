const isString = require('../typeChecking/isString').default;
const isElement = require('../typeChecking/isElement').default;

/**
 * @desc Gets closest element by type by traversing up the DOM structure
 * @param element {object} The element which to find another element close to
 * @param selector {string} The selector of the closest element
 * @returns {*}
 */
export default function(element, selector) {

  /** type checking */
  if (!isElement(element))
    throw new TypeError (`element is not of the correct type, expected Element`);
  if (!isString(selector))
    throw new TypeError (`entry is not of the correct type, expected String`);

  /** Element.matches() polyfill */
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
