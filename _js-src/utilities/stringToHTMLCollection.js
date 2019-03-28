
/**
 * @param html {String} Representing a single HTML element
 * @return {HTMLCollection} The newly created element
 */
export default function(html) {
  /** @type {HTMLElement} */
  const template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.children;
}
