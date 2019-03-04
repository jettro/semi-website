import createCloneFromTemplate from './createCloneFromTemplate';
import setFeatureCellText from './setFeatureCellText';

/**
 * @desc creates a map of buttons containing HTMLElement buttons based on template
 *       Note: the buttons have a multiplier data attribute to be picked up by calculations
 * @param options {object} The options that the buttons have to be generated for
 *                         The object always must have a {key: value} pair
 *                         The key is used for the label
 *                         The value is used for the data attribute 'multiplier'
 * @param template {HTMLElement} The element to serve as the template for the clones
 * @returns {Map<any, any>}
 */
export default function(options, template) {
  const optionsButtonMap = new Map();
  let optionDataSet = '';
  if (options[0]['percentage'] === false) {
    optionDataSet = 'subTotal';
  } else {
    optionDataSet = 'multiplier';
  }

  options.forEach((option, i) => {
    /** remove precentage from options since that doesn't have to be a button */
    if (option.hasOwnProperty('percentage')) {
      return;
    }

    /** otherwise create the option */
    const clone = createCloneFromTemplate(template);
    const label = Object.keys(option)[0];
    const value = parseFloat(Object.values(option)[0]).toFixed(2);
    setFeatureCellText(clone, label, 'ui-button__title');
    clone.classList.remove('pricing-hosting-button--hide');
    clone.classList.add('pricing-hosting-button--show');
    clone.dataset[optionDataSet] = value;
    optionsButtonMap.set(i, clone);
  });
  return optionsButtonMap;
}
