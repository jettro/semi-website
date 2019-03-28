const isString = require('../typeChecking/isString').default;
const isElement = require('../typeChecking/isElement').default;

/**
 * @desc Gets closest element by type by traversing up the DOM structure
 * @param element {Object<string, any>} The element which to find another element close to
 * @param selector {String} The selector of the closest element
 * @returns {(Object<string, any>|null)}
 */
export default function(element, selector) {

  /** type checking */
  if (!isElement(element))
    throw new TypeError (`Element is not of the correct type, expected Element`);
  if (!isString(selector))
    throw new TypeError (`Entry is not of the correct type, expected String`);

  /** Element.matches() polyfill */
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function(s) {
        let matches = (this.document || this.ownerDocument).querySelectorAll(s),
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
