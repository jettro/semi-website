import './common';
import formPricingRadioButtons from './modules/formPricingRadioButtons';
import { elementExists } from './helpers/helpers';

/**
 * configuration object
 * @type {{formId: string}}
 */
const config = {
  'formId': 'js-form-pricing'
};

/**
 * Form target
 * @type {HTMLElement}
 */
const formPricing = document.getElementById(config.formId);

if (elementExists(formPricing)) {
  formPricing.addEventListener('click', e => {
    e.preventDefault();
    formPricingRadioButtons(e, formPricing);
    formPricingCalculate(e, formPricing);
    // TODO: add form handler
  }, false);
} else {
  console.error(`No form present. Are you sure the form with id '${config.formId}' exists?`);
}
