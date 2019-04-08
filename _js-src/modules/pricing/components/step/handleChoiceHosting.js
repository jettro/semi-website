import { addCollapseTriggers } from '../../../collapse';
import getChoiceFieldset from '../../common/getChoiceFieldset';
import listOptionsComponent from '../list-options/list-options';
import pricingConfig from '../../pricingConfig';
import pricingUseCaseData from '../../../../../_data/pricingUseCases';
import PubSub from 'pubsub-js';

/**
 * @desc show the element
 * @param elementToHide {HTMLElement}
 */
function hideElement(elementToHide) {
  elementToHide.classList.remove(pricingConfig.showClass);
  elementToHide.classList.add(pricingConfig.hideClass);
}

/**
 * @desc hide the element
 * @param elementToShow {HTMLElement}
 */
function showElement(elementToShow) {
  elementToShow.classList.remove(pricingConfig.hideClass);
  elementToShow.classList.add(pricingConfig.showClass);
}

/**
 *
 * @param useCaseFieldset {Object} The fieldset of the use cases, used to determine the selected
 *                                 use-case for price calculations
 * @param useCases {Object} the use cases
 * @param target {Object} The target fieldset
 * @param fieldSets {Object} The sub-fieldsets
 * @param showNextChoiceHandler {function()=undefined} callback function to execute only once, once all actions  in this handler are done
 */
export default function(
  useCaseFieldset,
  useCases,
  target,
  fieldSets,
  showNextChoiceHandler = undefined,
) {
  let choiceMade = [];
  let choiceYesOptionsExist = false;
  let choiceNoOptionsExist = false;

  PubSub.subscribe('generatedCpcRows', function() {
    /** Add collapse triggers async to newly created DOM elements */
    addCollapseTriggers();
  });

  const options = [
    { title: 'Yes', showTarget: 'hosting-by-semi' },
    { title: 'No', showTarget: 'hosting-by-customer' },
  ];

  const container = document.getElementById('container-hosting-choice');
  listOptionsComponent(options, { pubSubScope: 'hosting' }).renderInto(container);

  PubSub.subscribe('buttonClicked.hosting', (msg, pubSubData) => {
    const optionYesId = 'hosting-by-semi';
    const hostingBySemiElement = document.getElementById(optionYesId);
    const optionNoId = 'hosting-by-customer';
    const hostingByCustomer = document.getElementById(optionNoId);

    const optionStep1 = 'hosting-semi-preference-platform';
    const optionStep2 = 'hosting-semi-optimisation';
    const optionsSubStep1FieldsetElement = getChoiceFieldset(fieldSets, optionStep1);
    const optionsSubStep2FieldsetElement = getChoiceFieldset(fieldSets, optionStep2);

    /** option Yes clicked */
    if (pubSubData.button.dataset.targetShow === optionYesId) {
      if (choiceMade.includes('choiceYesOptions')) {
        choiceYesOptionsExist = true;
      }

      /** show optional fieldset for options 1 & 2 */
      hideElement(hostingByCustomer);
      showElement(hostingBySemiElement);
      showElement(optionsSubStep1FieldsetElement);

      /** TODO: reset hosting adjustment */

      /** only if they don't exist, create options for step 1 */
      if (!choiceYesOptionsExist) {
        const container = document.getElementById(pricingConfig.pricingSemiOption1Id);
        const options = pricingUseCaseData.hostingProvidersBySemi;
        choiceMade.push('choiceYesOptions');
        listOptionsComponent(options, { pubSubScope: 'hosting.hostingBySemi.option1' }).renderInto(
          container,
        );
      }
    }

    /** show next options */
    PubSub.subscribe('buttonClicked.hosting.hostingBySemi.option1', (msg, pubSubData) => {
      showElement(optionsSubStep2FieldsetElement);
    });

    /** option No clicked */
    if (pubSubData.button.dataset.targetShow === optionNoId) {
      if (choiceMade.includes('choiceNoOptions')) {
        choiceNoOptionsExist = true;
      }

      /** TODO: reset hosting adjustment */

      hideElement(hostingBySemiElement);
      showElement(hostingByCustomer);

      if (!choiceNoOptionsExist) {
        const container = document.getElementById(
          pricingConfig.pricingOptimizationCustomerContainerId,
        );
        const options = pricingUseCaseData.hostingProvidersByCustomer;
        choiceMade.push('choiceNoOptions');
        listOptionsComponent(options, { pubSubScope: 'hosting.hostingByCustomer' }).renderInto(
          container,
        );
      }
    }
  });

  let existingOptions = new Set();

  /** the optimization is based on each use-case */
  PubSub.subscribe('buttonClicked.useCases', (msg, data) => {
    const useCaseKey = data.button.dataset.useCase;
    const theseOptionsExist = existingOptions.has(data.button);
    const options = useCases[useCaseKey]['optimization'];
    const container = document.getElementById(pricingConfig.pricingSemiOption2Id);
    const lists = container.getElementsByTagName('ul');

    const listIdentifier = 'useCase';

    /** show list based on use case button clicked */
    Object.keys(lists).forEach(key => {
      const list = lists[key];
      if (list.dataset[listIdentifier] === useCaseKey) {
        list.classList.remove(pricingConfig.hideClass);
      } else {
        list.classList.add(pricingConfig.hideClass);
      }
    });

    if (!theseOptionsExist) {
      /** create new list (and assign data attribute for the used use-case key) */
      listOptionsComponent(options, { pubSubScope: 'hosting.hostingBySemi.option2' }).renderInto(
        container,
      );

      /** add this button to the set of existing options */
      existingOptions.add(data.button);
    }
  });

  /** hosting by semi option 1 influences the hosting costs */
  PubSub.subscribe('buttonClicked.hosting.hostingBySemi.option1', (msg, data) => {
    /** publish data to use in the receipt */
    PubSub.publish('hosting.hostingBySemi', { multiplier: data.button.dataset.multiplier });
    /** show the next fieldset */
    if (typeof showNextChoiceHandler === typeof Function) showNextChoiceHandler();
  });

  /** hosting by customer influences the hosting costs */
  PubSub.subscribe('buttonClicked.hosting.hostingByCustomer', (msg, data) => {
    /** publish data to use in the receipt */
    PubSub.publish('hosting.hostingByCustomer', { multiplier: data.button.dataset.multiplier });
    /** show the next fieldset */
    if (typeof showNextChoiceHandler === typeof Function) showNextChoiceHandler();
  });

  /** the optimization preference adjusts the variable monthly cost */
  PubSub.subscribe('buttonClicked.hosting.hostingBySemi.option2', (msg, data) => {
    // TODO: this multiplier, from which amount should this be substracted?
    //       is this relative to the variable monthly cost,
    //       or is it relative to the hosting optimization?
    console.log('this is a TODO item');
    console.log(data.button.dataset.multiplier);
  });
}
