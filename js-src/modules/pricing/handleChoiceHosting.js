import selectClickedElementByType from './selectClickedElementByType';
import { elementExists } from '../../helpers/helpers';
import getChoiceFieldset from './getChoiceFieldset';
import formPricingRadioButtons from './formPricingRadioButtons';

import hostsingCostData from '../../../_data/pricingUseCases';
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

            // TODO: refactor this
            /** Hosting is provided by Weaviate */
            if (buttonData === optionStep1) {
              const optionalFieldsetToShow = getChoiceFieldset(fieldSets, optionStep1);
              const optionalFieldsetToHide = getChoiceFieldset(fieldSets, optionStep2);
              optionalFieldsetToHide.classList.remove(showClass);
              optionalFieldsetToHide.classList.add(hideClass);
              optionalFieldsetToShow.classList.remove(hideClass);
              optionalFieldsetToShow.classList.add(showClass);

              const useCaseButtons = useCaseFieldset.getElementsByTagName('BUTTON');

              const [test] = hostsingCostData.useCases;
              const optimizationCosts = test[getUseCaseKey(useCaseButtons)].optimization;

              // TODO: maybe don't use document.getElement by id, but the current fieldset as Node's parent
              const template = document.getElementById(pricingConfig.pricingOptimizationTemplateId);
              const container = document.getElementById(pricingConfig.pricingOptimizationContainerId);
              const costButtonMap = new Map();
              optimizationCosts.forEach((cost, i) => {
                const clone = createCloneFromTemplate(template);
                const costPrice = parseFloat(Object.values(cost)[0]).toFixed(2);
                const label = Object.keys(cost)[0];
                setFeatureCellText(clone, label, 'ui-button__title');
                clone.classList.remove('pricing-optimization-button--hidden');
                clone.classList.add('pricing-optimization-button--visible');
                clone.dataset.subTotal = costPrice;
                costButtonMap.set(i, clone);
              });
              /** Append all the cost buttons to the cost container */
              costButtonMap.forEach(item => {
                container.appendChild(item);
              });

              // pricingConfig.pricingOptimizationTemplateClassName
            }
            if (buttonData === optionStep2) {
              const optionalFieldsetToShow = getChoiceFieldset(fieldSets, optionStep2);
              const optionalFieldsetToHide = getChoiceFieldset(fieldSets, optionStep1);
              optionalFieldsetToHide.classList.remove(showClass);
              optionalFieldsetToHide.classList.add(hideClass);
              optionalFieldsetToShow.classList.remove(hideClass);
              optionalFieldsetToShow.classList.add(showClass);
            }
          }
        }
      });
    });
  });
}
