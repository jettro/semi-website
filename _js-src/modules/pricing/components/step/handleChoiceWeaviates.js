import createListItems from '../../common/createListItems';
import pricingConfig from '../../pricingConfig';
import pricingUseCaseData from '../../../../../_data/pricingUseCases';
// import formPricingRadioButtons from '../../common/formPricingRadioButtons';
import { addEventListenerOnce, elementExists } from '../../../../helpers/helpers';
import selectClickedElementByType from '../../common/selectClickedElementByType';

/**
 * @desc ...
 * @param target
 * @param getWeaviatePrice
 * @param showNextChoiceHandler
 */
export default function(target, getWeaviatePrice, showNextChoiceHandler) {

  const container = document.getElementById(pricingConfig.pricingWeaviateContainerId);
  const template = document.getElementById(pricingConfig.pricingWeaviateTemplateId);
  const options = pricingUseCaseData.weaviates;

  /** Append all the cost buttons to the cluster container */
  createListItems(options, template).forEach(item => {
    container.appendChild(item);
  });

  target.addEventListener('click', e => {
    formPricingRadioButtons(e, target, function() {
      const button = selectClickedElementByType(e, 'BUTTON');
      if (elementExists(button)) {
        console.log(button.parentElement);
        console.log(button.parentElement.dataset);
        console.log(button.parentElement.dataset.subTotal);
        /** target parent element, since data set needs to be set on parent li rather than button */
        const weaviatePrice = button.parentElement.dataset.subTotal;
        if(weaviatePrice) {
          getWeaviatePrice(weaviatePrice);
        } else {
          console.info(`The multiplier isn't set on the data attribute of the hosting button.`);
        }
      }
    });
  });

  /** resolve the promise and do a callback once! */
  addEventListenerOnce(target, "click", function() {
    const button = selectClickedElementByType(event, 'BUTTON');
    /** only do callback when the element clicked on is a button */
    if (elementExists(button)) {
      showNextChoiceHandler();
    }
  });

}
