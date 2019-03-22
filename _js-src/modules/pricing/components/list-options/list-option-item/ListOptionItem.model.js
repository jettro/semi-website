
export default class ListOptionItemModel {

  /**
   * @param {string} [value=undefined] the value the list item should get
   * @param {string} [valueType=undefined] the value the list item should get
   */
  constructor(value = undefined, valueType = undefined) {
    this._value = value;
    this._valueType = valueType;
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
    if (this._valueType !== undefined)
      return this._valueType;
  }
}
