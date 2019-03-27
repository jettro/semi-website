/**
 * map the commands to the classList methods
 */
import getClosest from '../utilities/getClosest';

const fnmap = {
  'toggle': 'toggle',
  'show': 'add',
  'hide': 'remove'
};

/**
 * @desc set the aria-expanded based on display of element
 * @param element {HTMLElement}
 */
const toggleAriaVisibility = element => {
  if (element.style.display === 'block') {
    element.setAttribute('aria-expanded', 'false');
  } else {
    element.setAttribute('aria-expanded', 'true');
  }
};

const collapse = (selector, cmd) => {
  const targets = Array.from(document.querySelectorAll(selector));
  targets.forEach(target => {
    target.classList[fnmap[cmd]]('show');
  });
};

const singleCollapse = (target) => {
  target.classList.toggle('show');
};

/**
 * @desc Grab all the trigger elements on the page. By default triggers are added to al elements
 *       that have the data-toggle set to collapse
 *
 */
function addCollapseTriggers() {
  const querySelector = '[data-toggle="collapse"]';
  const triggers = Array.from(document.querySelectorAll(querySelector));
  window.addEventListener('click', (event) => {
    const clickedElement = event.target;
    const dataTarget = 'collapse';
    const element = (clickedElement.dataset.target !== dataTarget) ? getClosest(clickedElement, `[data-target=${dataTarget}]`) : clickedElement;

    /**  Listen for click events, but only on the triggers */
    if (triggers.includes(element)) {
      const selector = element.getAttribute('data-target');
      /** toggle the collapse element by parent */
      const children = element.parentNode.children;
      const hasChildElements = typeof children !== 'undefined';
      /** toggle class on trigger element */
      singleCollapse(element, 'toggle');
      if (hasChildElements) {
        for (let child of children) {
          /** toggle class on target element */
          if(child.classList.contains(selector)) {
            singleCollapse(child, 'toggle');
            toggleAriaVisibility(child);
          }
        }
      }
      collapse(selector, 'toggle');
    }
  }, false);
}

export default function() { addCollapseTriggers(); }

export { addCollapseTriggers };
