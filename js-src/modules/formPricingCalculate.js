import { elementExists } from '../helpers/helpers';

/**
 *
 * @param e
 * @param form
 */
export function formPricingInit (form) {

  const fieldSets = form.children;
  if (elementExists(fieldSets)) {
    for (let fieldset of fieldSets) {
      // Do stuff
      console.log(fieldset);
    }
  } else {
    console.error(`There are no fieldsets present in the selected form '${config.formId}'.`);
  }

}

/**
 *
 * @param e
 * @param form
 */
export function formPricingCalculate (e, form) {}
