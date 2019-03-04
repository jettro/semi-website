
import createOptionButtons from './createOptionButtons';
import pricingConfig from './pricingConfig';
import pricingUseCaseData from '../../../_data/pricingUseCases';
import formPricingRadioButtons from './formPricingRadioButtons';
import { addEventListenerOnce, elementExists } from '../../helpers/helpers';
import selectClickedElementByType from './selectClickedElementByType';

export default function(target, callback) {

  const container = document.getElementById(pricingConfig.pricingContextionaryContainerId);
  const template = document.getElementById(pricingConfig.pricingContextionaryTemplateId);
  const options = pricingUseCaseData.contextionaries;

  /** Append all the cost buttons to the cluster container */
  createOptionButtons(options, template).forEach(item => {
    container.appendChild(item);
  });

  target.addEventListener('click', e => {
    formPricingRadioButtons(e, target, function() {});
  });

  /** resolve the promise and do a callback once! */
  addEventListenerOnce(target, "click", function() {
    const button = selectClickedElementByType(event, 'BUTTON');
    /** only do callback when the element clicked on is a button */
    if (elementExists(button)) {
      callback();
    }
  });
}
