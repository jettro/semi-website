
/**
 * map the commands to the classList methods
 */
import getClosest from '../utilities/getClosest';
import cssClasses from './collapse.config.js';

/**
 * @desc set the aria-expanded based on display of element
 * @param element {Element}
 */
const toggleVisibility = element => {
  if (element.style.display === 'block') {
    element.setAttribute('hidden');
  } else {
    element.removeAttribute('hidden');
  }
};

/**
 * @desc
 * @param selector {string}
 */
const collapse = (selector) => {
  const targets = Array.from(document.querySelectorAll(selector));
  targets.forEach(target => {
    target.classList.add(cssClasses.target.hide);
  });
};

/**
 * @desc collapses the element
 * @param target {Object} The element to toggle the class
 *        note: Not element but Object, since event.target returns an object rather than element
 *        https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
 * @param collapseType {{trigger}, {target}} the type of collapse element
 */
const singleCollapse = (target, collapseType) => {

  /** when hidden show */
  if (target.classList.contains(cssClasses[collapseType].show)) {
    target.classList.remove(cssClasses[collapseType].show);
    target.classList.add(cssClasses[collapseType].hide);
  } else {
    target.classList.remove(cssClasses[collapseType].hide);
    target.classList.add(cssClasses[collapseType].show);
  }
};

/**
 * @desc Grab all the trigger elements on the page. By default triggers are added to al elements
 *       that have the data-toggle set to collapse
 *
 */
export default function() {
  const querySelector = '[data-toggle="collapse"]';

  document.addEventListener(
    'click',
    event => {
      const allTriggers = Array.from(document.querySelectorAll(querySelector));
      const clickedElement = event.target;

      const currentTrigger =
        /** when the clicked element has no dataset, then it can't be the trigger */
        clickedElement.dataset.target !== 'undefined'
          ? clickedElement
          : getClosest(clickedElement, `[data-target='collapse']`);

      /**  Listen for click events, but only on the triggers */
      if (allTriggers.includes(currentTrigger)) {
        const selector = currentTrigger.getAttribute('data-target');
        /** toggle the collapse element by parent */
        const children = currentTrigger.parentNode.children;

        /** toggle class on trigger element */
        singleCollapse(currentTrigger, 'trigger');

        if (typeof children !== 'undefined') {
          for (let child of children) {
            /** toggle class on target element */
            if (child.classList.contains(selector)) {
              singleCollapse(child, 'target');
              toggleVisibility(child);
            }
          }
        }

        /** collapse all other elements */
        collapse(selector);
      }
    },
    false,
  );
}
