
export default class ListOptionItemModel {

  /**
   * @param {string} [option] the list item option
   * @param innerChildElement {Element?} Option to render a component inside the list-item
   */
  constructor(option, innerChildElement = undefined) {
    this._value = option.value;
    this._valueType = option.valueType || 'multiplier';
    this._innerChildElement = innerChildElement;
  }

  /**
   * @desc gets the model value
   * @returns {string}
   */
  get value(){
    if (this._value !== undefined)
      return this._value;
  };

  /**
   * @desc gets the model value type used to define calculation
   * @returns {string}
   */
  get valueType() {
      return this._valueType;
  }

  get innerChildElement() {
    return this._innerChildElement;
  }
}
