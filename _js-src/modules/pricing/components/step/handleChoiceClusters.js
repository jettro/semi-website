
import PubSub from 'pubsub-js';
import createListItems from '../../common/createListItems';
import pricingUseCaseData from '../../../../../_data/pricingUseCases';
import pricingConfig from '../../pricingConfig';
import { getClosest } from '../../../../helpers/helpers';
import { setHostingCluster } from '../receipt/pricingReceiptFunctions';

export default function(target, showNextChoiceHandler = undefined) {
  const container = document.getElementById(pricingConfig.pricingClusterContainerId);
  const options = pricingUseCaseData.clusters;
  createListItems(options, container, undefined, 'clusters');
  PubSub.subscribe('buttonClicked.clusters', (msg, data) => {
    const li = getClosest(data.button, 'li');
    const useCaseSubTotal = document.getElementById(pricingConfig.receipt.montlyTotalId).innerHTML;
    setHostingCluster(li.dataset.multiplier, useCaseSubTotal);
    if (typeof (showNextChoiceHandler) === typeof (Function)) showNextChoiceHandler();
  });
}
