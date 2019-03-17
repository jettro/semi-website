import { htmlToElement } from '../../../../helpers/helpers';

const _createValue = Symbol('createValue');
const _filterOptions = Symbol('filterOptions');

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

export default class listOptionItem {

  /**
   * @returns {string} the list item html element as a string
   */
  static htmlString() {
    return `<li></li>`;
  }

  /**
   * @param optionDataSet {string}
   * @param value {string}
   */
  constructor(value = undefined, optionDataSet) {
    this._value = value;
    this._optionDataSet = optionDataSet;
    /** constructs the html element from html template literal (string) */
    this._html = htmlToElement(listOptionItem.htmlString());
  }

  /**
   * @returns {Element} the list item with value (optional)
   */
  init() {
    this[_createValue](this._value);
    return this._html;
  }

  /**
   * Use this if you need to render the element
   * @returns {HTMLLIElement}
   */
  render() {
    return this.init();
  }

  /**
   * use this if you need to use the element as a string
   * @returns {String}
   */
  create() {
    return this.init().outerHTML;
  }

  [_filterOptions](options) {
    /** if config object exists remove it since it's not an option */
    return removeObjectByKeyFromArray(options, 'config');
  }

  /**
   * @returns {Element}
   */
  [_createValue]() {
    if (typeof(this._value) !== 'undefined') {
      const listItem = this._html;
      listItem.dataset[this._optionDataSet] = this._value;
    }
    return this._html;
  }

}
