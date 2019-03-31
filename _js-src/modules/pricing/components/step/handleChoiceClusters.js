
import PubSub from 'pubsub-js';
import pricingUseCaseData from '../../../../../_data/pricingUseCases';
import pricingConfig from '../../pricingConfig';
import getClosest from '../../../../utilities/getClosest';
import { setHostingCluster } from '../receipt/pricingReceiptFunctions';
import listOptionsComponent from '../list-options/list-options';

/**
 * @param showNextChoiceHandler {function()=undefined} callback function to execute only once, once all actions  in this handler are done
 */
export default function(showNextChoiceHandler = undefined) {
  const container = document.getElementById(pricingConfig.pricingClusterContainerId);
  const options = pricingUseCaseData.clusters;
  listOptionsComponent(options, { pubSubScope: 'clusters' }).renderInto(container);
  PubSub.subscribe('buttonClicked.clusters', (msg, data) => {
    const li = getClosest(data.button, 'li');
    const useCaseSubTotal = document.getElementById(pricingConfig.receipt.montlyTotalId).innerHTML;
    setHostingCluster(li.dataset.multiplier, useCaseSubTotal);
    if (typeof (showNextChoiceHandler) === typeof (Function)) showNextChoiceHandler();
  });
}
