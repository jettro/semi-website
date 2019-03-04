
import createOptionButtons from './createOptionButtons';

import pricingUseCaseData from '../../../_data/pricingUseCases';
import pricingConfig from './pricingConfig';
import formPricingRadioButtons from './formPricingRadioButtons';
import selectClickedElementByType from './selectClickedElementByType';
import { elementExists } from '../../helpers/helpers';
import { setHostingCluster } from './pricingReceipt';

export default function(target) {

  return new Promise((resolve, reject) => {
    const container = document.getElementById(pricingConfig.pricingClusterContainerId);
    const template = document.getElementById(pricingConfig.pricingClusterTemplateId);
    const options = pricingUseCaseData.clusters;

    /** Append all the cost buttons to the cluster container */
    createOptionButtons(options, template).forEach(item => {
      container.appendChild(item);
    });

    target.addEventListener('click', e => {
      formPricingRadioButtons(e, target, function() {
        const button = selectClickedElementByType(e, 'BUTTON');
        /** get the total price from the receipt */
        const totalUseCasePrice = document.getElementById(pricingConfig.receipt.montlyTotalId);
        if (elementExists(button)) {
          /** target parent element, since data set needs to be set on parent li rather than button */
          const multiplier = button.parentElement.dataset.multiplier;
          const multiplierExists = multiplier !== '';
          if(multiplierExists) {
            setHostingCluster(multiplier, totalUseCasePrice);
          } else {
            console.info(`The multiplier isn't set on the data attribute of the hosting button.`);
          }
        }
      });
    });

  });
}