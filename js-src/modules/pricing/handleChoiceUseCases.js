import { elementExists, addEventListenerOnce } from '../../helpers/helpers';
import formPricingRadioButtons from './formPricingRadioButtons';
import showUseCasePricing from './showUseCasePricing';
import selectClickedElementByType from './selectClickedElementByType';

import pricingConfig from './pricingConfig';

/**
 *
 * @param target {HTMLElement} the target this choice applies to
 * @param callback {fn} a function to execute only once, once this function is done
 */
export default function(target, executeOnce) {
  target.addEventListener('click', e => {
    e.preventDefault();

    /** Logic for the radio buttons*/
    formPricingRadioButtons(e, target, function() {
      const button = selectClickedElementByType(e, 'BUTTON');
      if (elementExists(button)) {
        const useCaseKey = button.dataset.useCase;
        const useCaseKeyExists = useCaseKey !== '';
        if (useCaseKeyExists) {
          showUseCasePricing(
            useCaseKey,
            pricingConfig.pricingInfoContainerId
          );
        }
      }
    });
  });
  /** do a callback once! */
  addEventListenerOnce(target, "click", function() {
    const button = selectClickedElementByType(event, 'BUTTON');
    /** only do callback when the element clicked on is a button */
    if (elementExists(button)) {
      executeOnce();
    }
  });
}
