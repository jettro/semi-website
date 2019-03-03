import selectClickedElementByType from './selectClickedElementByType';
import { elementExists } from '../../helpers/helpers';
import getChoiceFieldset from './getChoiceFieldset';
import formPricingRadioButtons from './formPricingRadioButtons';

import pricingUseCaseData from '../../../_data/pricingUseCases';
import createCloneFromTemplate from './createCloneFromTemplate';

import pricingConfig from './pricingConfig';
import setFeatureCellText from './setFeatureCellText';

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
 * @param template {HTMLElement}
 * @param container {HTMLElement}
 * @param data {object}
 * @param type {string}
 */
function loadOptions(template, container, data, type) {
  const options = data[type];
  const optionsButtonMap = new Map();
  options.forEach((option, i) => {
    const clone = createCloneFromTemplate(template);
    const costPrice = parseFloat(Object.values(option)[0]).toFixed(2);
    const label = Object.keys(option)[0];
    setFeatureCellText(clone, label, 'ui-button__title');
    clone.classList.remove('pricing-hosting-button--hide');
    clone.classList.add('pricing-hosting-button--show');
    clone.dataset.subTotal = costPrice;
    optionsButtonMap.set(i, clone);
  });
  /** Append all the cost buttons to the cost container */
  optionsButtonMap.forEach(item => {
    container.appendChild(item);
  });
}

/**
 *
 * @returns {Promise<any>}
 */
export default function(useCaseFieldset, target, fieldSets) {
  return new Promise((resolve, reject) => {
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
            /** Hosting is provided by Weaviate */
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
                loadOptions(template, container, data, 'optimization');
              }
            }
            if (buttonData === optionStep2) {
              /** hide/show correct optional fieldset */
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
                loadOptions(template, container, data, 'hostingProviders');
              }
            }
          }
        }
      });
    });
  });
}
