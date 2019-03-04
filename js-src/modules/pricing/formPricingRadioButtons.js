import { elementExists } from '../../helpers/helpers';
import formPricingToggleFieldset from './formPricingToggleFieldset';
import selectClickedElementByType from './selectClickedElementByType';

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
    const isRadioButton = clickedButton.attributes.role.value === 'radio';
    const isInactiveButton = clickedButton.getAttribute('aria-checked') !== true;
    const isDisabledButton = clickedButton.disabled;
    const isToggleButton = typeof(clickedButton.dataset.targetShow) !== 'undefined';
    const isButtonInTable = clickedButton.classList.contains('form-stepper-table__column');

    if (isDisabledButton) {
      return; // don't do anything if button is disabled
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
