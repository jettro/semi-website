import { elementExists } from '../helpers/helpers';

/**
 *
 * @desc toggle fieldsection based on radio buttons
 * @param e
 * @param form
 * @param button
 */
export default function(e, form, button) {
  const parentNode = button.parentNode;
  const fieldsetHidden = unHideFieldset(button.dataset.targetShow);

  /**
   *
   * @desc flips 'true' and 'false' (strings) so that the aria-hidden value of target gets correct string value
   * @param showTarget {string} |
   * @returns {string}
   */
  function unHideFieldset(showTarget) {
    if (showTarget === 'false') {
      return 'true';
    } else if (showTarget === 'true') {
      return 'false';
    }
  }

  if (elementExists(parentNode)) {
    const parentIsFieldset = parentNode.tagName === 'FIELDSET';
    if (parentIsFieldset) {
      const fieldsetTarget = parentNode.dataset.target;
      const fieldsetHasTarget = typeof (fieldsetTarget) !== 'undefined';
      if (fieldsetHasTarget) {
        // TODO: refactor and merge with similar function in formPricingCalculate
        const fieldSets = form.children;
        if (elementExists(fieldSets)) {
          for (let fieldset of fieldSets) {
            const currentFieldsetIsTarget = fieldset.dataset.step === fieldsetTarget;
            if (currentFieldsetIsTarget) {
              fieldset.setAttribute('aria-hidden', fieldsetHidden);
            }
          }
        } else {
          console.error(`There are no fieldsets present in the selected form '${config.formId}'.`);
        }
        // until here
      }
    } else {
      console.error(`parent ${parentIsFieldset} isn't a fieldset`);
    }
  } else {
    console.error(`parent node ${parentNode} doesn't exist.`)
  }
}