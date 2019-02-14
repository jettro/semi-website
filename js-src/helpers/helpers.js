/**
 * 
 * @param element
 * @returns {boolean}
 */
export function elementExists(element) {
  return typeof (element) != 'undefined' && element != null;
}

/**
 * 
 * @param target
 * @param type
 * @returns {boolean}
 */
export function selectParent(target, type) {
  if (elementExists(target)) {
    if (target.tagName === type) {
      return true;
    }
  }
  return false;
}
