import { elementExists, addEventListenerOnce } from '../../helpers/helpers';
import formPricingRadioButtons from './formPricingRadioButtons';
import showUseCasePricing from './showUseCasePricing';
import selectClickedElementByType from './selectClickedElementByType';

import pricingConfig from './pricingConfig';

/**
 *
 * @param target {HTMLElement} the target this choice applies to
 * @param callback {fn} a function to execute only once, once this function is done
 * @returns {Promise<any>}
 */
export default function(target, callback) {

  return new Promise((resolve, reject) => {
    target.addEventListener('click', e => {
      e.preventDefault();

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
    addEventListenerOnce(target, "click", function() {
      callback();
      resolve();
    });
  });
}
