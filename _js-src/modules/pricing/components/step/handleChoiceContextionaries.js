
import PubSub from 'pubsub-js';
import createListItems from '../../common/createListItems';
import pricingConfig from '../../pricingConfig';
import pricingUseCaseData from '../../../../../_data/pricingUseCases';

export default function(target, showNextChoiceHandler) {
  const container = document.getElementById(pricingConfig.pricingContextionaryContainerId);
  const options = pricingUseCaseData.contextionaries;
  createListItems(options, container, undefined, 'contextionaries');
  PubSub.subscribe('buttonClicked.contextionaries', (msg, data) => {
    if (typeof (showNextChoiceHandler) === typeof (Function)) showNextChoiceHandler();
  });
  // TODO: how do the contextionaries influence the price?
}
