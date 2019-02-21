/**
 * @desc
 * @param element
 * @returns {boolean}
 */
function elementExists(element) {
  return typeof element != 'undefined' && element != null;
}

export default { elementExists };
