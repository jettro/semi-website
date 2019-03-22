
export default class ListOptionsModel {

  /**
   * @returns {string} the list html element as a string
   */
  static validateChildren(children) {
    if (typeof(children) === 'undefined') {
      throw new Error('No child elements are provided. A list must have child list items.');
    }
    if (Object.prototype.toString.call(children) !== '[object Map]') {
      throw new Error('The parameter "children" is not a map [object Map]".');
    }
    return children;
  }

  /**
   * @param {HTMLElement} [children] the value the list item should get
   */
  constructor(children) {
    this._children = ListOptionsModel.validateChildren(children);
  }

  /**
   * @desc gets the model value
   * @returns {string}
   */
  get children(){
    if (this._children !== undefined)
      return this._children;
  };
}
