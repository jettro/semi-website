/**
 * @desc simple helper to test if an eleement exists
 * @param element {HTMLElement} The element to check
 * @returns {boolean} whether the element exists in local DOM
 */
export function elementExists(element) {
  return typeof (element) != 'undefined' && element != null;
}
