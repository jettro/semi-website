const isString = require('../typeChecking/isString').default;
const isElement = require('../typeChecking/isElement').default;
const isNodeList = require('../typeChecking/isNodeList').default;
const isHTMLCollection = require('../typeChecking/isHTMLCollection').default;

/**
 * @desc Check if an input field or multiple input fields in a given collection
 *       (Element or HTMLCollection) have a certain type.
 * @param entries {(NodeList | HTMLCollection | HTMLCollectionOf)} The type of element that should exist
 * @param attribute {String} A list of html input fields
 * @returns {Boolean} If an element of a certain type exists
 */
const inputExistsOfType = function(entries, attribute) {

  /** type checking */
  if (isElement(entries))
    throw new TypeError (`entry should be a NodeList or HTMLCollection`);
  if (!isNodeList(entries) && !isHTMLCollection(entries))
    throw new TypeError (`entry is not of the correct type, expected nodeList or HTMLCollection`);
  if (!isString(attribute))
    throw new TypeError (`type is not of the correct type, expected String`);

  let rangeCollection = 0;
  Object.entries(entries).forEach(([key, item]) => {
    if (item.type === attribute) {
      rangeCollection++;
    }
  });
  return rangeCollection >= 1;
};

export default inputExistsOfType;
