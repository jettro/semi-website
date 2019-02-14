import './common';
import fieldSectionRadioButtons from './modules/fieldSectionRadioButtons';
import { elementExists } from './helpers/helpers';

const config = {
  'formId': 'js-form-pricing'
};

const formPricing = document.getElementById(config.formId);

if (elementExists(formPricing)) {
  formPricing.addEventListener('click', e => {
    e.preventDefault();
    fieldSectionRadioButtons(e, formPricing);
    // TODO: add calculation logic
    // TODO: add form handler
  }, false);
} else {
  console.error(`No form present. Are you sure the form with id '${config.formId}' exists?`);
}
