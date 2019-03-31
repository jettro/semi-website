import listOptionsComponent from '../list-options/list-options';
import PubSub from 'pubsub-js';
import pricingConfig from '../../pricingConfig';
import pricingUseCaseData from '../../../../../_data/pricingUseCases';

export default function(target, showNextChoiceHandler) {
  const container = document.getElementById(pricingConfig.pricingContextionaryContainerId);
  const options = pricingUseCaseData.contextionaries;
  listOptionsComponent(options, { pubSubScope: 'contextionaries' }).renderInto(container);
  PubSub.subscribe('buttonClicked.contextionaries', (msg, data) => {
    if (typeof showNextChoiceHandler === typeof Function) showNextChoiceHandler();
  });
  // TODO: how do the contextionaries influence the price?
}
