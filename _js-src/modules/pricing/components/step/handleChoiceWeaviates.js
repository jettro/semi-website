import PubSub from 'pubsub-js';
import createListItems from '../../common/createListItems';
import pricingConfig from '../../pricingConfig';
import pricingUseCaseData from '../../../../../_data/pricingUseCases';
import { setFixedCostPrice } from '../receipt/pricingReceiptFunctions';
import getClosest from '../../../../utilities/getClosest';

/**
 * @param target
 * @param showNextChoiceHandler {function}
 */
export default function(target, showNextChoiceHandler = undefined) {
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

  createListItems(options, container, undefined, 'weaviates');

  PubSub.subscribe('buttonClicked.weaviates', (msg, data) => {
    const li = getClosest(data.button, 'li');
    setFixedCostPrice(li.dataset.fixed, '0');
    if (typeof (showNextChoiceHandler) === typeof (Function)) showNextChoiceHandler();
  });
}
