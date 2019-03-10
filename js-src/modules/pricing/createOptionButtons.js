import createCloneFromTemplate from './createCloneFromTemplate';
import setFeatureCellText from './setFeatureCellText';

/**
 * @desc removes an object by key from a [object Array]
 * @param object {Object} the array to remove the config object from
 * @param objectKey {String} a string which defines the  key to remove from [object Array]
 * @returns {Array} an array in which the
 */
export function removeObjectByKeyFromArray(object, objectKey) {
  let options = [];
  for (let option of Object.values(object)) {
    const [key] = Object.keys(option);
    /** don't include config as option option */
    if (key !== objectKey) {
      options.push(option);
    }
  }
  return options;
}

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

  /** be default the values are multiplied by the percentage stated in the option */
  let optionDataSet = 'multiplier';

  /** but if this property is set to false by a config, use a static value instead */
  if (options[0].hasOwnProperty('config')) {
    /** when the value is'nt a percentage, use static calculation instead */
    if (options[0]['config']['percentage'] === false) {
      optionDataSet = 'subTotal';
    }
  }

  /** if config object exists remove it since it's not an option */
  options = removeObjectByKeyFromArray(options, 'config');

  options.forEach((option, i) => {
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
