import { elementExists } from '../../../helpers/helpers';

/**
 * @desc check whether the type of element is directly selectable return true (= not a parent)
 * @param event
 * @param type
 * @returns {boolean}
 */
export default function(event, type) {
  const target = event.target.closest(type);
  if (elementExists(target)) {
    if (target.tagName === type) {
      return true;
    }
  }
  return false;
}
