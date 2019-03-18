import { htmlToElement } from '../../../../helpers/helpers';

const _createValue = Symbol('createValue');

export default class listOptionItem {

  /**
   * @returns {string} the list item html element as a string
   */
  static htmlString() {
    return `<li></li>`;
  }

  /**
   * @param {string} [value=undefined] the value the list item should get
   * @param {string} [valueType=undefined] the type of value the list item should get
   */
  constructor(value = undefined, valueType = undefined) {
    this._value = value;
    this._valueType = valueType;
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
   * @returns {Element}
   */
  [_createValue]() {
    if (typeof(this._value) !== 'undefined') {
      if (Object.prototype.toString.call(this._value) !== '[object String]') {
        throw new Error('The parameter "value" is not a string [object String]".');
      }
      if (this._valueType !== 'undefined' && Object.prototype.toString.call(this._valueType) !== '[object String]') {
        throw new Error('The parameter "valueType" is not a string [object String]".');
      }
      const listItem = this._html;
      listItem.dataset[this._valueType] = this._value;
    }
    return this._html;
  }

}
