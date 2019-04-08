import PubSub from 'pubsub-js';
import pricingConfig from '../../pricingConfig';
import pricingUseCaseData from '../../../../../_data/pricingUseCases';
import listOptionsComponent from '../list-options/list-options';

/**
 * @param showNextChoiceHandler {function}
 */
export default function(showNextChoiceHandler = undefined) {
  const container = document.getElementById(pricingConfig.pricingNetworkNodesContainerId);
  const options = pricingUseCaseData.networkNodes;

  let type = '';
  options.map(option => {
    if (option.config) {
      if (option.config.fixed) type = 'fixed';
    } else {
      Object.assign(option, { valueType: type });
    }
  });

  listOptionsComponent(options, { pubSubScope: 'networkNodes' }).renderInto(container);

  PubSub.subscribe('buttonClicked.networkNodes', (msg, data) => {
    PubSub.publish('recurring.networkNodes.buttonClicked', {fixed: data.button.dataset.fixed});

    /** show the next fieldset */
    if (typeof showNextChoiceHandler === typeof Function) showNextChoiceHandler();
  });
}
