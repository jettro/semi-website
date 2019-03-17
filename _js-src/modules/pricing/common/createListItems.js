import ButtonRadio from '../components/button-radio/ButtonRadio';
import listOptionItem from '../components/list-options/listOptionItem';

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

  options.forEach((option, i) => {
    const title = Object.keys(option)[0];
    const value = parseFloat(Object.values(option)[0]).toFixed(2);

    const listItemOption = new listOptionItem(value, dataset).create();
    const buttonRadioOption = new ButtonRadio(title).create();

    let template = document.createElement('template');
    template.insertAdjacentHTML('beforeend', listItemOption);
    let [li] = template.getElementsByTagName('LI');
    li.insertAdjacentHTML('beforeend', buttonRadioOption);

    optionsListItemButtonMap.set(i, li);
  });

  return optionsListItemButtonMap;
}
