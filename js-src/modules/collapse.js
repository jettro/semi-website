/**
 * map the commands to the classList methods
 */
const fnmap = {
  'toggle': 'toggle',
  'show': 'add',
  'hide': 'remove'
};

const collapse = (selector, cmd) => {
  const targets = Array.from(document.querySelectorAll(selector));
  targets.forEach(target => {
    target.classList[fnmap[cmd]]('show');
  });
};

const toggle = (target) => {
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
    const element = event.target;
    /**  Listen for click events, but only on the triggers */
    if (triggers.includes(element)) {
      const selector = element.getAttribute('data-target');
      /** toggle the collapse element by parent */
      const children = element.parentNode.children;
      const hasChildElements = typeof children !== 'undefined';
      /** toggle class on trigger element */
      toggle(element, 'toggle');
      if (hasChildElements) {
        for (let child of children) {
          /** toggle class on target element */
          if(child.classList.contains(selector)) {
            toggle(child, 'toggle');
          }
        }
      }
      collapse(selector, 'toggle');
    }
  }, false);
}

export default function() { addCollapseTriggers(); }

export { addCollapseTriggers };
