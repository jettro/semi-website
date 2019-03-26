import { removeObjectByKeyFromArray } from '../components/step/handleChoiceUseCases';
import listOptionItemComponent from '../components/list-options/list-option-item';
import buttonRadioComponent from '../components/button-radio';
import listOptionsComponent from '../components/list-options/list';

/**
 * @desc creates a list with list items and buttons inside,
 *       filters a config option (can be made more generic)
 * @param options {Object} The object in which the options are
 * @param container {HTMLElement} The element the list should be asserted to
 * @param listData {object}{attr: "", value: ""} [listData="undefined"] ...
 * @param scope {string} The scope of the pubsub
 * @type {Map<any, any>}
 */
export default function(options, container, listData = undefined, scope) {
  const listItemButtonMap = new Map();
  removeObjectByKeyFromArray(options, 'config').forEach((option, i) => {
    /** create list item template so the button can be asserted inside */
    let template = document.createElement('template');
    listOptionItemComponent(option.value, option.valueType).renderInto(template);
    /** use list item template to assert button radio into */
    let [li] = template.getElementsByTagName('LI');
    const isDefault = (typeof option.default !== 'undefined') ? option.default : false;
    buttonRadioComponent(option.title, option.useCaseKey, isDefault, scope, option.showTarget).renderInto(li);
    listItemButtonMap.set(i, li);
  });

  /** add data attribute to newly created list */
  if (listData !== undefined && listData !== '') {
    // createdList.dataset[listData.attr] = listData.value;
    /** insert optionsListItemButtonMap containing map with HTML elements into container */
    listOptionsComponent(listItemButtonMap, listData).renderInto(container);
  } else {
    listOptionsComponent(listItemButtonMap).renderInto(container);
  }

}


// import listOptionItem from '../components/list-options/list-option-item/ListOptionItem';
// import pricingConfig from '../pricingConfig';
// import { getClosest } from '../../../helpers/helpers';
// import { setHostingAdjustment } from '../components/receipt/pricingReceiptFunctions';
// import PubSub from 'pubsub-js';

// import { ButtonRadioModel, ButtonRadioController, ButtonRadioView } from '../components/button-radio';

// /**
//  * @desc removes an object by key from a [object Array]
//  * @param object {Object} the array to remove the config object from
//  * @param objectKey {String} a string which defines the  key to remove from [object Array]
//  * @returns {Array} an array in which the
//  */
// export function removeObjectByKeyFromArray(object, objectKey) {
//   let options = [];
//   for (let option of Object.values(object)) {
//     const [key] = Object.keys(option);
//     /** don't include config as option option */
//     if (key !== objectKey) {
//       options.push(option);
//     }
//   }
//   return options;
// }
//
// /**
//  * @desc creates a map of buttons containing HTMLElement buttons based on template
//  *       Note: the buttons have a multiplier data attribute to be picked up by calculations
//  * @param options {object} The options that the buttons have to be generated for
//  *                         The object always must have a {key: value} pair
//  *                         The key is used for the label
//  *                         The value is used for the data attribute 'multiplier'
//  * @returns {Map<any, any>}
//  */
// export default function(options) {
//   const optionsListItemButtonMap = new Map();
//
//   // const hasConfig = options[0].hasOwnProperty('config');
//   // const isFixedPrice = (hasConfig) ? options[0]['config']['fixed'] === true : '';
//   // const dataset = (isFixedPrice) ? 'subTotal' : 'multiplier';
//
//   removeObjectByKeyFromArray(options, 'config').forEach((option, i) => {
//
//     // const value = parseFloat(Object.values(option)[0]).toFixed(2);
//
//     const listItemOption = new listOptionItem('0', 'multiplier').render();
//
//     const buttonModel = new ButtonRadioModel(option.title, option.useCaseKey),
//           buttonController = new ButtonRadioController(buttonModel),
//           buttonView = new ButtonRadioView(buttonController);
//
//     let template = document.createElement('template');
//     template.insertAdjacentElement('beforeend', listItemOption);
//     let [li] = template.getElementsByTagName('LI');
//     li.insertAdjacentElement('beforeend', buttonView.render());
//
//     optionsListItemButtonMap.set(i, li);
//
//     /** get the total price from the receipt */
//     // const totalUseCasePrice = document.getElementById(pricingConfig.receipt.montlyTotalId);
//
//     // buttonRadioOption.addEventListener('button-radio-clicked', function (e) {
//     //   e.preventDefault();
//     //
//     //   // TODO: optional remove dataset from the parent li, but set it on the button instead
//     //
//     //   /** target parent element, since data set needs to be set on parent li rather than button */
//     //   const multiplier = e.currentTarget.parentElement.dataset.multiplier;
//     //   const multiplierExists = multiplier !== '';
//     //   if (multiplierExists) {
//     //     setHostingAdjustment(totalUseCasePrice.textContent, multiplier);
//     //   } else {
//     //     console.info(`The multiplier isn't set on the data attribute of the hosting button.`);
//     //   }
//     //
//     //   const parentFieldset = getClosest(e.target, 'fieldset');
//     //   PubSub.publish('hostingChoiceMade', parentFieldset.dataset.step);
//     //
//     // }, false);
//
//
//   });
//
//   return optionsListItemButtonMap;
// }
