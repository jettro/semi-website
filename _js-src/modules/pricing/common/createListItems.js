import ButtonRadio from '../components/button-radio/ButtonRadio';
import listOptionItem from '../components/list-option-item/ListOptionItem';

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
 * @returns {Map<any, any>}
 */
export default function(options) {
  const optionsListItemButtonMap = new Map();

  const hasConfig = options[0].hasOwnProperty('config');
  const isFixedPrice = (hasConfig) ? options[0]['config']['fixed'] === true : '';
  const dataset = (isFixedPrice) ? 'subTotal' : 'multiplier';

  removeObjectByKeyFromArray(options, 'config').forEach((option, i) => {
    const title = Object.keys(option)[0];
    const value = parseFloat(Object.values(option)[0]).toFixed(2);

    const listItemOption = new listOptionItem(value, dataset).render();
    const buttonRadioOption = new ButtonRadio(title).render();

    let template = document.createElement('template');
    template.insertAdjacentElement('beforeend', listItemOption);
    let [li] = template.getElementsByTagName('LI');
    li.insertAdjacentElement('beforeend', buttonRadioOption);

    optionsListItemButtonMap.set(i, li);
  });

  return optionsListItemButtonMap;
}
