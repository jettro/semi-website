import PubSub from 'pubsub-js';
import createListItems from '../../common/createListItems';
import pricingConfig from '../../pricingConfig';
import pricingUseCaseData from '../../../../../_data/pricingUseCases';
import getClosest from '../../../../utilities/getClosest';
import { setFixedCostPrice } from '../receipt/pricingReceiptFunctions';

/**
 *
 * @param target {}
 * @param showNextChoiceHandler {function}
 */
export default function(target, showNextChoiceHandler = undefined) {
  const container = document.getElementById(pricingConfig.pricingNetworkNodesContainerId);
  const options = pricingUseCaseData.networkNodes;

  let type = '';
  options.map(option => {
    if (option.config) {
      if (option.config.fixed) type = 'fixed';
    } else {
      Object.assign(option, {'valueType': type});
    }
  });

  createListItems(options, container, undefined, 'networkNodes');

  let nodeNetworksPrice = '0';
  let numberOfWeaviatesPrice = '0';

  PubSub.subscribe('buttonClicked.weaviates', (msg, data) => {
    const li = getClosest(data.button, 'li');
    let numberOfWeaviatesPrice = li.dataset.fixed;
    setFixedCostPrice(numberOfWeaviatesPrice, nodeNetworksPrice);
  });

  PubSub.subscribe('buttonClicked.networkNodes', (msg, data) => {
    const li = getClosest(data.button, 'li');
    nodeNetworksPrice = li.dataset.fixed;
    setFixedCostPrice(numberOfWeaviatesPrice, nodeNetworksPrice);
    if (typeof (showNextChoiceHandler) === typeof (Function)) showNextChoiceHandler();
  });
}
