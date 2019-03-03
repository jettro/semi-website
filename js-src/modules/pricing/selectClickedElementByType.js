import assignClickedElement from './assignClickedElement';
import selectParentElementByType from './selectParentElementByType';

/**
 * @desc button is block level element, so it can also contain another element inside,
 *       this makes sure the button itself is selected rather than an element inside
 * @param e {object} event that triggers this action
 * @param type {string} the type of object to check
 * @returns {HTMLElement} the element the click was on
 */
export default function(e, type) {
  const targetParentIsClicked = selectParentElementByType(e, type);
  const targetIsClicked = e.target.tagName === type;
  return assignClickedElement(e, type, targetParentIsClicked, targetIsClicked);
}
