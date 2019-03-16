
import { elementExists } from '../../../helpers/helpers';

/**
 * @desc clones element and removes the id (!) that was used to target it by to prevent duplicate ID's in HTML.
 *       So use an id to target element.
 * @param element {HTMLElement} The element to clone
 * @returns {*|Node|ActiveX.IXMLDOMNode} clone of the element
 */
export default function(element) {
  if(elementExists(element)) {
    const clone = element.cloneNode(true);
    clone.removeAttribute('id');
    return clone;
  } else {
    console.info(`No element with id ${element} has been found. Please check the markup.`);
  }
}
