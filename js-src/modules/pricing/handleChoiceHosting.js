import selectClickedElementByType from './selectClickedElementByType';
import { addEventListenerOnce, elementExists } from '../../helpers/helpers';
import getChoiceFieldset from './getChoiceFieldset';
import formPricingRadioButtons from './formPricingRadioButtons';
import { setHostingAdjustment } from './pricingReceipt';
import createOptionButtons from './createOptionButtons';

import pricingUseCaseData from '../../../_data/pricingUseCases';
import pricingConfig from './pricingConfig';

/**
 *
 * @param elements {}
 * @returns {string}
 */
function getUseCaseKey(elements) {
  if (typeof elements !== 'undefined') {
    for (let element of elements) {
      if (element.classList.contains('ui-button--active')) return element.dataset.useCase;
    }
  }
}

/**
 *
 * @param target {Object}
 * @param template {HTMLElement}
 * @param container {HTMLElement}
 * @param data {object}
 * @param type {string}
 * @param callback {}
 */
function loadOptions(target, template, container, data, type, isFirstTime, callback) {
  const options = data[type];
  /** Append all the cost buttons to the cost container */
  createOptionButtons(options, template).forEach(item => {
    container.appendChild(item);
  });
  /** options are loaded, add click handling */
  container.addEventListener('click', e => {
    e.preventDefault();
    formPricingRadioButtons(e, container, function() {
      const button = selectClickedElementByType(e, 'BUTTON');
      /** get the total price from the receipt */
      const totalUseCasePrice = document.getElementById(pricingConfig.receipt.montlyTotalId);
      if (elementExists(button)) {
        /** target parent element, since data set needs to be set on parent li rather than button */
        const multiplier = button.parentElement.dataset.multiplier;
        const multiplierExists = multiplier !== '';
        if(multiplierExists) {
          setHostingAdjustment(multiplier, totalUseCasePrice);
        } else {
          console.info(`The multiplier isn't set on the data attribute of the hosting button.`);
        }
      }
    });
  });

  /** only set event listener when it's the first time this is called */
  if(isFirstTime) {
    addEventListenerOnce(container, "click", function() {
      callback(container);
    });
  }
}

/**
 *
 * @returns {Promise<any>}
 */
export default function(useCaseFieldset, target, fieldSets) {
  return new Promise((resolve, reject) => {
    let isFirstTimeFlag = true;
    target.addEventListener('click', e => {
      e.preventDefault();

      formPricingRadioButtons(e, target, function() {
        const button = selectClickedElementByType(e, 'BUTTON');
        if (elementExists(button)) {
          /** optional sub-steps */
          const buttonData = button.dataset.targetShowFieldset;
          if (buttonData) {
            const optionStep1 = 'hosting-optimisation';
            const optionStep2 = 'hosting-preference-platform';
            const hideClass = 'form-stepper__step--hide';
            const showClass = 'form-stepper__step--show';

            // TODO: refactor this and make more DRY
            /** Hosting is provided by Weaviate (option = Yes) */
            if (buttonData === optionStep1) {
              /** hide/show correct optional fieldset */
              const optionalFieldsetToShow = getChoiceFieldset(fieldSets, optionStep1);
              const optionalFieldsetToHide = getChoiceFieldset(fieldSets, optionStep2);
              optionalFieldsetToHide.classList.remove(showClass);
              optionalFieldsetToHide.classList.add(hideClass);
              optionalFieldsetToShow.classList.remove(hideClass);
              optionalFieldsetToShow.classList.add(showClass);
              /** add buttons to optional fieldset, only if they don't exist yet */
              const numberOfChildButtons = optionalFieldsetToShow.getElementsByClassName('pricing-hosting-button--show').length;
              if (numberOfChildButtons === 0) {
                const useCaseButtons = useCaseFieldset.getElementsByTagName('BUTTON');
                // TODO: maybe don't use document.getElement by id, but the current fieldset as Node's parent
                const container = document.getElementById(pricingConfig.pricingOptimizationContainerId);
                const template = document.getElementById(pricingConfig.pricingOptimizationTemplateId);
                const key = getUseCaseKey(useCaseButtons);
                const data = pricingUseCaseData.useCases[0][key];
                loadOptions(target, template, container, data,  'optimization', isFirstTimeFlag, function() {
                  resolve();
                  isFirstTimeFlag = false;
                });
              }
            }
            if (buttonData === optionStep2) {
              /** hide/show correct optional fieldset (option = No) */
              const optionalFieldsetToShow = getChoiceFieldset(fieldSets, optionStep2);
              const optionalFieldsetToHide = getChoiceFieldset(fieldSets, optionStep1);
              optionalFieldsetToHide.classList.remove(showClass);
              optionalFieldsetToHide.classList.add(hideClass);
              optionalFieldsetToShow.classList.remove(hideClass);
              optionalFieldsetToShow.classList.add(showClass);
              /** add buttons to optional fieldset, only if they don't exist yet */
              const numberOfChildButtons = optionalFieldsetToShow.getElementsByClassName('pricing-hosting-button--show').length;
              if (numberOfChildButtons === 0) {
                // TODO: maybe don't use document.getElement by id, but the current fieldset as Node's parent
                const container = document.getElementById(pricingConfig.pricingPlatformContainerId);
                const template = document.getElementById(pricingConfig.pricingPlatformTemplateId);
                const data = pricingUseCaseData;
                loadOptions(target, template, container, data, 'hostingProviders', isFirstTimeFlag, function() {
                  resolve();
                  isFirstTimeFlag = false;
                });
              }
            }
          }
        }
      });
    });

  });
}
