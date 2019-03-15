/**
 * @desc assigns the clicked element, either a parent or child
 * @param e
 * @param type {string} The type of element
 * @param targetParentIsClicked {boolean} check if the target parent is a button rather than the clicked element
 * @param targetIsClicked {boolean} check if the clicked element itself is a button
 * @returns {HTMLElement} returns the target element
 */
export default function(e, type, targetParentIsClicked, targetIsClicked) {
  if (targetParentIsClicked) {
    return e.target.closest(type);
  } else if (targetIsClicked) {
    return e.target;
  }
}
