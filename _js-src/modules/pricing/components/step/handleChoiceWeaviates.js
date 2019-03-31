import PubSub from 'pubsub-js';
import pricingConfig from '../../pricingConfig';
import pricingUseCaseData from '../../../../../_data/pricingUseCases';
import { setFixedCostPrice } from '../receipt/pricingReceiptFunctions';
import getClosest from '../../../../utilities/getClosest';
import listOptionsComponent from '../list-options/list-options';

/**
 * @param showNextChoiceHandler {function()=undefined} callback function to execute only once, once all actions  in this handler are done
 */
export default function(showNextChoiceHandler = undefined) {
  const container = document.getElementById(pricingConfig.pricingWeaviateContainerId);
  const options = pricingUseCaseData.weaviates;

  let type = '';
  options.map(option => {
    if (option.config) {
      if (option.config.fixed) type = 'fixed';
    } else {
      Object.assign(option, {'valueType': type});
    }
  });

  listOptionsComponent(options, { pubSubScope: 'weaviates' }).renderInto(container);

  PubSub.subscribe('buttonClicked.weaviates', (msg, data) => {
    const li = getClosest(data.button, 'li');
    setFixedCostPrice(li.dataset.fixed, '0');
    if (typeof (showNextChoiceHandler) === typeof (Function)) showNextChoiceHandler();
  });
}
