import selectClickedElementByType from '../../common/selectClickedElementByType';
import { getClosest, elementExists } from '../../../../helpers/helpers';
import getChoiceFieldset from '../../common/getChoiceFieldset';
import formPricingRadioButtons from '../../common/formPricingRadioButtons';
import { setHostingAdjustment } from '../receipt/pricingReceiptFunctions';
import createListItems from '../../common/createListItems';
import { addCollapseTriggers } from '../../../collapse';

import pricingUseCaseData from '../../../../../_data/pricingUseCases';
import pricingConfig from '../../pricingConfig';
import PubSub from 'pubsub-js';

import buttonRadioComponent from '../button-radio';
import listOptionsComponent from '../list-options/list';
import listOptionItemComponent from '../list-options/list-option-item';
import { removeObjectByKeyFromArray } from './handleChoiceUseCases';

// /**
//  *
//  * @param elements {}
//  * @returns {string}
//  */
// function getUseCaseKey(elements) {
//   if (typeof elements !== 'undefined') {
//     for (let element of elements) {
//       if (element.classList.contains('ui-button--active')) return element.dataset.useCase;
//     }
//   }
// }
//
// /**
//  * @desc create the options based on a data object. Attaches event listeners to the options as well.
//  * @param template {HTMLElement} The template use to create the options
//  * @param container {HTMLElement} The container to which the options should be appended to
//  * @param options {Object} The data object which contains the options
//  * @param loadOnce {Boolean} This should only resolve if it's the first time the options are created
//  * @param callback {callback} The callback to run
//  */
// function loadOptions(container, options, loadOnce = false, callback = undefined) {
//
//   /** Skip creating the options if the data provided isn't an object containing an array with options */
//   if (Object.prototype.toString.call(options) !== '[object Array]') {
//     console.info(
//       `Skipped load options. The data should be a type of '[object Array]', meaning an object containing the options.`,
//     );
//     return;
//   }
//
//   const listOptionsElement = new ListOptions(createListItems(options)).render();
//
//   /** insert list with buttons to container */
//   container.insertAdjacentElement('beforeend', listOptionsElement);
//
//   /** options are loaded, add click handling */
//   container.addEventListener('click', e => {
//     e.preventDefault();
//     formPricingRadioButtons(e, container);
//   });
// }
//
// /**
//  * @desc first hide old optional element, then show new element
//  * @param elementToHide {HTMLElement} element which should be hidden
//  * @param elementToShow {HTMLElement} element which should be shown
//  */
// function toggleOptionalStep(elementToHide, elementToShow) {
//   hideElement(elementToHide);
//   showElement(elementToShow);
// }

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
 * @param target {Object} The target fieldset
 * @param fieldSets {Object} The sub-fieldsets
 * @param showNextChoiceHandler {fn=null} callback function to execute only once, once all actions  in this handler are done
 */
export default function(useCaseFieldset, useCases, target, fieldSets, showNextChoiceHandler = undefined) {
  let choiceMade = [];
  let choiceYesOptionsExist = false;
  let choiceNoOptionsExist = false;

  PubSub.subscribe('generatedCpcRows', function() {
    /** Add collapse triggers async to newly created DOM elements */
    addCollapseTriggers();
  });

  const options = [
    { "title": "Yes", "showTarget": "hosting-by-semi" },
    { "title": "No", "showTarget": "hosting-by-customer" }
  ];

  const container = document.getElementById('container-hosting-choice');
  createListItems(options, container, undefined, 'hostingChoice');

  PubSub.subscribe('buttonClicked.hostingChoice', (msg, pubSubData) => {

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

      if (choiceMade.includes('choiceYesOptions')) { choiceYesOptionsExist = true; }

      /** show optional fieldset for options 1 & 2 */
      hideElement(hostingByCustomer);
      showElement(hostingBySemiElement);

      showElement(optionsSubStep1FieldsetElement);

      /** only if they don't exist, create options for step 1 */
      if (!choiceYesOptionsExist) {
        const container = document.getElementById(pricingConfig.pricingSemiOption1Id);
        const options = pricingUseCaseData.hostingProvidersBySemi;
        choiceMade.push('choiceYesOptions');
        createListItems(options, container, undefined, 'hostingBySemiOption1');
      }
    }

    /** show next options */
    PubSub.subscribe('buttonClicked.hostingBySemiOption1', (msg, pubSubData) => {
      showElement(optionsSubStep2FieldsetElement);
    });


    /** option No clicked */
    if (pubSubData.button.dataset.targetShow === optionNoId) {

      if (choiceMade.includes('choiceNoOptions')) { choiceNoOptionsExist = true; }

      hideElement(hostingBySemiElement);
      showElement(hostingByCustomer);

      if (!choiceNoOptionsExist) {
        // TODO: add the 'No' options
        const container = document.getElementById(pricingConfig.pricingOptimizationCustomerContainerId);
        const options = pricingUseCaseData.hostingProvidersByCustomer;
        choiceMade.push('choiceNoOptions');
        console.log('nope!');
        createListItems(options, container, undefined, 'hostingByCustomer');
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
    const listIdentifier = "useCase";

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
      const listData = { attr: listIdentifier, value: useCaseKey };
      createListItems(options, container, listData, 'hostingBySemiOption2');
      /** add this button to the set of existing options */
      existingOptions.add(data.button);
    }

  });

  // /** used to execute the event listener for showing content only one time */
  // target.addEventListener('click', e => {
  //   e.preventDefault();
  //
  //   formPricingRadioButtons(e, target, function() {
  //     const button = selectClickedElementByType(e, 'BUTTON');
  //     if (elementExists(button)) {
  //       const buttonData = button.dataset.targetShow;
  //       if (buttonData) {
  //         /** Settings for option 'Yes' */
  //         const hostingBySemiOptionsId = 'hosting-by-semi';
  //         const showHostingBySemi = buttonData === hostingBySemiOptionsId;
  //         const hostingBySemiOptionsElement = document.getElementById(hostingBySemiOptionsId);
  //         /** Settings for option 'No' */
  //         const hostingByCustomerOptionsId = 'hosting-by-customer';
  //         const showHostingByCustomer = buttonData === hostingByCustomerOptionsId;
  //         const hostingByCustomerOptionsElement = document.getElementById(
  //           hostingByCustomerOptionsId,
  //         );
  //
  //         const optionsHostingBySemi = hostingBySemiOptionsElement.getElementsByClassName('pricing-hosting-button--show');
  //         const optionsHostingBySemiExist = optionsHostingBySemi.length > 0;
  //         const optionsHostingByCustomer = hostingByCustomerOptionsElement.getElementsByClassName('pricing-hosting-button--show');
  //         const optionsHostingByCustomerExist = optionsHostingByCustomer.length > 0
  //
  //         const reOpenedThisChoice = optionsHostingBySemiExist && optionsHostingByCustomerExist;
  //
  //         /**
  //          * Option 'Yes'
  //          */
  //         if (!elementExists(hostingBySemiOptionsElement)) {
  //           console.info(
  //             `No optional element has been found with the id ${hostingBySemiOptionsId}`,
  //           );
  //           return;
  //         }
  //
  //         if (showHostingBySemi) {
  //           const optionStep1 = 'hosting-semi-preference-platform';
  //           const optionStep2 = 'hosting-semi-optimisation';
  //           const optionsSubStep1FieldsetElement = getChoiceFieldset(fieldSets, optionStep1);
  //           const optionsSubStep2FieldsetElement = getChoiceFieldset(fieldSets, optionStep2);
  //           const optionsStep1DoesntExist =
  //             optionsSubStep1FieldsetElement.getElementsByClassName(
  //               'pricing-hosting-button--show',
  //             ).length === 0;
  //           const optionsStep2DoesntExist =
  //             optionsSubStep2FieldsetElement.getElementsByClassName(
  //               'pricing-hosting-button--show',
  //             ).length === 0;
  //
  //           /** re-set the hosting adjustment */
  //           setHostingAdjustment('0');
  //
  //           /** toggle the step itself */
  //           toggleOptionalStep(hostingByCustomerOptionsElement, hostingBySemiOptionsElement);
  //
  //           /** then show the substeps of this fieldset */
  //           showElement(optionsSubStep1FieldsetElement);
  //           showElement(optionsSubStep2FieldsetElement);
  //
  //           /** Load the fieldset options for choosing hosting platform by SeMI */
  //           if (optionsStep1DoesntExist) {
  //             // TODO: maybe don't use document.getElement by id, but the current fieldset as Node's parent
  //             const container = document.getElementById(pricingConfig.pricingPlatformContainerId);
  //             const data = pricingUseCaseData.hostingProvidersBySemi;
  //             /** load options for weaviate hosting platforms */
  //             loadOptions(container, data);
  //           }
  //
  //           /** Load the fieldset options for optimization preferences */
  //           if (optionsStep2DoesntExist) {
  //             // TODO: maybe don't use document.getElement by id, but the current fieldset as Node's parent
  //             const container = document.getElementById(
  //               pricingConfig.pricingOptimizationContainerId,
  //             );
  //             const template = document.getElementById(
  //               pricingConfig.pricingOptimizationTemplateId,
  //             );
  //             const useCaseButtons = useCaseFieldset.getElementsByTagName('BUTTON');
  //             const key = getUseCaseKey(useCaseButtons);
  //             const data = pricingUseCaseData.useCases[0][key]['optimization'];
  //             /** load options for optimization preference */
  //             loadOptions(container, data);
  //           }
  //
  //         }
  //
  //         /**
  //          * Option 'No'
  //          */
  //         if (!elementExists(hostingByCustomerOptionsElement)) {
  //           console.info(
  //             `No optional element has been found with the id ${hostingByCustomerOptionsId}`,
  //           );
  //           return;
  //         }
  //
  //         if (showHostingByCustomer) {
  //           const optionsSubStepFieldsetElement = getChoiceFieldset(
  //             fieldSets,
  //             'hosting-customer-platform',
  //           );
  //           const optionsStepDoesntExist =
  //             optionsSubStepFieldsetElement.getElementsByClassName('pricing-hosting-button--show')
  //               .length === 0;
  //
  //           /** re-set the hosting adjustment */
  //           setHostingAdjustment('0');
  //
  //           /** toggle the step itself */
  //           toggleOptionalStep(hostingBySemiOptionsElement, hostingByCustomerOptionsElement);
  //
  //           /** then show the substeps of this fieldset */
  //           showElement(optionsSubStepFieldsetElement);
  //
  //           /** Load the fieldset options for choosing hosting platform by customer */
  //           if (optionsStepDoesntExist) {
  //             // TODO: maybe don't use document.getElement by id, but the current fieldset as Node's parent
  //             const container = document.getElementById(
  //               pricingConfig.pricingCustomerPlatformContainerId,
  //             );
  //             const template = document.getElementById(
  //               pricingConfig.pricingCustomerPlatformTemplateId,
  //             );
  //             const data = pricingUseCaseData.hostingProvidersByCustomer;
  //             /** load options for optimization preference */
  //             loadOptions(container, data);
  //           }
  //         }
  //
  //         /** when it's te second time this choice is opened */
  //         if (reOpenedThisChoice) {
  //           /** remove active class of options */
  //           for (let option of optionsHostingBySemi) {
  //             const [optionButton] = option.getElementsByTagName('BUTTON');
  //             const activeClass = 'ui-button--active';
  //             if (elementExists(optionButton) && optionButton.classList.contains(activeClass)) {
  //               optionButton.classList.remove(activeClass);
  //             }
  //           }
  //           for (let option of optionsHostingByCustomer) {
  //             const [optionButton] = option.getElementsByTagName('BUTTON');
  //             const activeClass = 'ui-button--active';
  //             if (elementExists(optionButton) && optionButton.classList.contains(activeClass)) {
  //               optionButton.classList.remove(activeClass);
  //             }
  //           }
  //         }
  //
  //         PubSub.subscribe('hostingChoiceMade', function(msg, step) {
  //           /** only show next choice handler when radio button clicked is of: */
  //           if (step === 'hosting-semi-optimisation' || step === 'hosting-customer-platform') {
  //             showNextChoiceHandler();
  //           }
  //         });
  //       }
  //     }
  //   });
  // });
}
