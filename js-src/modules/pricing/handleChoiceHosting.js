import selectClickedElementByType from './selectClickedElementByType';
import { elementExists } from '../../helpers/helpers';
import getChoiceFieldset from './getChoiceFieldset';
import formPricingRadioButtons from './formPricingRadioButtons';

/**
 *
 * @returns {Promise<any>}
 */
export default function(target, fieldSets) {

    return new Promise((resolve, reject) => {
      target.addEventListener('click', e => {
        e.preventDefault();

        formPricingRadioButtons(e, target, function() {
          const button = selectClickedElementByType(e, 'BUTTON');
          if (elementExists(button)) {
            /** optional sub-steps */
            const buttonData = button.dataset.targetShowFieldset;
            if (buttonData) {
              const optionStep1 = 'hosting-preference-platform';
              const optionStep2 = 'hosting-optimisation';
              const hideClass = 'form-stepper__step--hide';
              const showClass = 'form-stepper__step--show';

              // TODO: refactor this
              if (buttonData === optionStep1) {
                const optionalFieldsetToShow = getChoiceFieldset(fieldSets, optionStep1);
                const optionalFieldsetToHide = getChoiceFieldset(fieldSets, optionStep2);
                optionalFieldsetToHide.classList.remove(showClass);
                optionalFieldsetToHide.classList.add(hideClass);
                optionalFieldsetToShow.classList.remove(hideClass);
                optionalFieldsetToShow.classList.add(showClass);
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
