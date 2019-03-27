
/**
 * @desc simple helper to test if an eleement exists
 * @param element {Element} The element to check
 * @returns {boolean} whether the element exists in local DOM
 */
export default function(element) {
  return typeof (element) != 'undefined' && element != null;
}
