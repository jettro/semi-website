/**
 * @desc gets fieldset based on data attribute (step)
 * @param fieldSets
 * @param step
 * @returns {HTMLElement} The fieldset by step
 */
export default function(fieldSets, step) {
  for (let fieldSet of fieldSets) {
    if(fieldSet.dataset.step === step) return fieldSet;
  }
}