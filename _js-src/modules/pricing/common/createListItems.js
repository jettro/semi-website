import listOptionItemComponent from '../components/list-options/list-option-item';
import buttonRadioComponent from '../components/button/button-radio';
import listOptionsComponent from '../components/list-options/list-options';
import removeObjectByKeyFromArray from './removeObjectByKeyFromArray';


/**
 * @desc creates a list with list items and buttons inside,
 *       filters a config option (can be made more generic)
 * @param options {Object} The object in which the options are
 * @param container {HTMLElement} The element the list should be asserted to
 * @param listData {object}{attr: "", value: ""} [listData="undefined"] ...
 * @param topicScope {string} The topic scope of the pubsub (created aside the usual topic of the component)
 * @type {Map<any, any>}
 */
export default function(options, container, listData = undefined, topicScope) {
  const listItemButtonMap = new Map();
  /** Removes 'config' from list of options */
  removeObjectByKeyFromArray(options, 'config').forEach((option, i) => {
    /** create list item template so the button can be asserted inside */
    let template = document.createElement('template');
    listOptionItemComponent(option.value, option.valueType).renderInto(template);
    /** use list item template to assert button radio into */
    let [li] = template.getElementsByTagName('LI');
    const isDefault = (typeof option.default !== 'undefined') ? option.default : false;
    buttonRadioComponent(option.title, option.useCaseKey, isDefault, topicScope, option.showTarget).renderInto(li);
    listItemButtonMap.set(i, li);
  });

  /** if the data attribute is present add a data attribute to newly created list */
  if (listData !== undefined && listData !== '') {
    /** insert optionsListItemButtonMap containing map with HTML elements into container */
    listOptionsComponent(listItemButtonMap, listData).renderInto(container);
  } else {
    listOptionsComponent(listItemButtonMap).renderInto(container);
  }
}
