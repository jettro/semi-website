import removeObjectByKeyFromArray from '../../../common/removeObjectByKeyFromArray';

export default class ListOptionsModel {

  /**
   * @desc if an option named 'config' is present, filter it out of the options list
   * @param options {Array}
   */
  static filterOptions(options) {
    return removeObjectByKeyFromArray(options, 'config');
  }

  /**
   * @returns {Array} the (filtered) list options
   */
  static validateOptions(options) {
    if (typeof(options) === 'undefined') {
      throw new Error('No options are provided. A list must have options to create child list items.');
    }
    if (Object.prototype.toString.call(options) !== '[object Array]') {
      throw new Error('The parameter "options" is not a [object Array]".');
    }
    return ListOptionsModel.filterOptions(options);
  }

  /**
   * @param options {Array} the value the list item should get
   * @param buttonData {...}
   */
  constructor(options, buttonData) {
    this._options = ListOptionsModel.validateOptions(options);
    this._buttonData = buttonData;
  }

  /**
   * @desc gets the model value
   * @returns {array}
   */
  get options(){
    if (this._options !== undefined)
      return this._options;
  };


  get buttonData() {
    if (this._buttonData !== undefined)
      return this._buttonData;
  }
}
