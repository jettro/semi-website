
/**
 *
 * @param target {HTMLElement} The element
 * @param text {string} text to apply to innerHTML
 * @param className {string} class name to target element to apply it to
 */
export default function(target, text, className) {
  const element = target.getElementsByClassName(className);
  element[0].innerHTML = text;
}
