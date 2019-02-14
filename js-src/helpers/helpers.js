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
 * @param event
 * @param type
 * @returns {boolean}
 */
export function selectParentElementOfType(event, type) {
  const target = event.target.closest(type);
  if (elementExists(target)) {
    if (target.tagName === type) {
      return true;
    }
  }
  return false;
}

/**
 *
 * @param event
 * @param targetParentIsButton
 * @param targetIsButton
 * @returns {*}
 */
export function assignButtonElement(event, targetParentIsButton, targetIsButton) {
  if (targetParentIsButton) {
    return event.target.closest('button');
  } else if (targetIsButton) {
    return event.target;
  }
}