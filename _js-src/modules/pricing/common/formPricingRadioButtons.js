import { elementExists } from '../../../helpers/helpers';
import selectClickedElementByType from './selectClickedElementByType';

/**
 *
 * @desc toggle fieldsection based on radio buttons
 * @param e
 * @param form
 * @param button
 */
const formPricingToggleFieldset = function(e, form, button) {
  const parentNode = button.parentNode;
  const fieldsetHidden = unHideFieldset(button.dataset.targetShow);

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

  if (elementExists(parentNode)) {
    const parentIsFieldset = parentNode.tagName === 'FIELDSET';
    if (parentIsFieldset) {
      const fieldsetTarget = parentNode.dataset.target;
      const fieldsetHasTarget = typeof (fieldsetTarget) !== 'undefined';
      if (fieldsetHasTarget) {
        // TODO: refactor and merge with similar function in formPricingCalculate
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
        // until here
      }
    } else {
      console.error(`parent ${parentIsFieldset} isn't a fieldset`);
    }
  } else {
    console.error(`parent node ${parentNode} doesn't exist.`)
  }
};

/**
 * @desc Field section radio buttons interaction
 * @param e {}
 * @param form {HTMLElement}
 * @param callback
 */
export default function(e, form, callback) {
  const clickedButton = selectClickedElementByType(e, 'BUTTON');

  /**
   *
   * @desc sets all other radio buttons to false by getting the button types
   * @param parentElement
   */
  function unsetRadioButtons(parentElement) {
    const radioButtons = parentElement.getElementsByTagName('BUTTON');
    for (let radioButton of radioButtons) {
      radioButton.setAttribute('aria-checked', 'false');
      radioButton.classList.remove('ui-button--active');
    }
  }

  if (elementExists(clickedButton)) {
    const isRadioButton = clickedButton.hasAttribute('role') && clickedButton.attributes.role.value === 'radio';

    /** don't continue if this is a radio button */
    if (!isRadioButton) {
      return false;
    }

    const isInactiveButton = clickedButton.getAttribute('aria-checked') !== true;
    const isDisabledButton = clickedButton.disabled;
    const isToggleButton = typeof(clickedButton.dataset.targetShow) !== 'undefined';
    const isButtonInTable = clickedButton.classList.contains('form-stepper-table__column');

    if (isDisabledButton) {
      return false; // don't do anything if button is disabled
    }

    if (isRadioButton && isInactiveButton || isButtonInTable) {
      const targetRadioGroup = clickedButton.closest('[role="radiogroup"]');
      unsetRadioButtons(targetRadioGroup);
      clickedButton.setAttribute('aria-checked', 'true');
      clickedButton.classList.add('ui-button--active');
    }

    if (isToggleButton) {
      formPricingToggleFieldset(e, form, clickedButton);
    }
  }

  callback();
}
