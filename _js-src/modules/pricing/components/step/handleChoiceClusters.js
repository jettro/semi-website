import PubSub from 'pubsub-js';
import pricingConfig from '../../pricingConfig';
import pricingUseCaseData from '../../../../../_data/pricingUseCases';
import listOptionsComponent from '../list-options/list-options';

/**
 * @param showNextChoiceHandler {function()=undefined} callback function to execute only once, once all actions  in this handler are done
 */
export default function(showNextChoiceHandler = undefined) {
  const container = document.getElementById(pricingConfig.pricingClusterContainerId);
  const options = pricingUseCaseData.clusters;
  listOptionsComponent(options, { pubSubScope: 'clusters' }).renderInto(container);
  PubSub.subscribe('buttonClicked.clusters', (msg, data) => {
    /** publish data to use in the receipt */
    PubSub.publish('cluster.buttonClicked', {multiplier: data.clickedButton.dataset.multiplier});
    /** show the next fieldset */
    if (typeof showNextChoiceHandler === typeof Function) showNextChoiceHandler();
  });
}
