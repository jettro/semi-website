
import { elementExists, selectParent } from '../helpers/helpers';

export default function(e, form) {
  const targetParentIsButton = selectParent(e.target.closest('button'), 'BUTTON');
  const targetIsButton = e.target.tagName === 'BUTTON';

  /**
   *
   * @desc use this to assign the correct button element based on the target
   * @returns {*} element
   */
  function assignButtonElement() {
    if (targetParentIsButton) {
      return e.target.closest('button');
    } else if (targetIsButton) {
      return e.target;
    }
  }

  /**
   *
   * @desc sets all other radio buttons to false by getting the button types
   * @param parentElement
   */
  function setRadioButtonsFalse(parentElement) {
    const radioButtons = parentElement.getElementsByTagName('BUTTON');
    for (let radioButton of radioButtons) {
      radioButton.setAttribute('aria-checked', 'false');
    }
  }

  /**
   *
   * @desc flips 'true' and 'false' (strings) so that the aria-hidden value of target gets correct string value
   * @param showTarget {string} |
   * @returns {string}
   */
  function unHideFieldset(showTarget) {
    if (showTarget === 'false') {
      return 'true';
    } else if (showTarget === 'true') {
      return 'false';
    }
  }

  const clickedButton = assignButtonElement();

  if (elementExists(clickedButton)) {
    const isRadioButton = clickedButton.attributes.role.value === 'radio';
    const isInactiveButton = clickedButton.getAttribute('aria-checked') !== true;
    const isDisabledBUtton = clickedButton.disabled;

    // don't do anything when button is disabled
    if (isDisabledBUtton) {
      return;
    }

    if (isRadioButton && isInactiveButton) {
      const targetRadioGroup = clickedButton.closest('[role="radiogroup"]');
      setRadioButtonsFalse(targetRadioGroup);
      clickedButton.setAttribute('aria-checked', 'true');
    }

    const parentNode = clickedButton.parentNode;
    const fieldsetHidden = unHideFieldset(clickedButton.dataset.targetShow);

    if (elementExists(parentNode)) {
      const parentIsFieldset = parentNode.tagName === 'FIELDSET';
      if (parentIsFieldset) {
        const fieldsetTarget = parentNode.dataset.target;
        const fieldsetHasTarget = typeof(fieldsetTarget) !== 'undefined';
        if (fieldsetHasTarget) {
          const fieldSets = form.children;
          if (elementExists(fieldSets)) {
            for (let fieldset of fieldSets) {
              const currentFieldsetIsTarget = fieldset.dataset.step === fieldsetTarget;
              if (currentFieldsetIsTarget) {
                fieldset.setAttribute('aria-hidden', fieldsetHidden);
              }
            }
          } else {
            console.error(`There are no fieldsets present in the selected form '${config.formId}'.`);
          }
        }
      } else {
        console.error(`parent ${parentIsFieldset} isn't a fieldset`);
      }
    } else {
      console.error(`parent node ${parentNode} doesn't exist.`)
    }
  }
}
