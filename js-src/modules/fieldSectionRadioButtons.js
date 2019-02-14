
import { elementExists, selectParentElementOfType, assignButtonElement } from '../helpers/helpers';
import fieldSectionToggleFieldset from './fieldSectionToggleFieldset';

/**
 * @desc Field section radio buttons interaction
 * @param e
 * @param form
 */
export default function(e, form) {
  const targetParentIsButton = selectParentElementOfType(e, 'BUTTON');
  const targetIsButton = e.target.tagName === 'BUTTON';
  const clickedButton = assignButtonElement(e, targetParentIsButton, targetIsButton);

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

  if (elementExists(clickedButton)) {
    const isRadioButton = clickedButton.attributes.role.value === 'radio';
    const isInactiveButton = clickedButton.getAttribute('aria-checked') !== true;
    const isDisabledBUtton = clickedButton.disabled;

    if (isDisabledBUtton) {
      return;
    }

    if (isRadioButton && isInactiveButton) {
      const targetRadioGroup = clickedButton.closest('[role="radiogroup"]');
      setRadioButtonsFalse(targetRadioGroup);
      clickedButton.setAttribute('aria-checked', 'true');
    }

    fieldSectionToggleFieldset(e, form, clickedButton);
  }
}
