/**
 *
 * @param node {HTMLElement} element to check if content should be added
 * @param targetClassName {string} The class to identify the node by
 * @param innerContent {string} The content to add
 */
export default function(node, targetClassName, innerContent) {
  const targetExists = typeof(node.classList) != 'undefined' && node.classList.contains(targetClassName);
  if(targetExists && innerContent) {
    node.innerHTML = innerContent;
  }
}
