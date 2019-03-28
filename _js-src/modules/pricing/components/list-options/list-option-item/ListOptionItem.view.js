import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';

const _createValue = Symbol('createValue');

export default class ListOptionItemView {

  /**
   * @desc Test for basic necessary functionality
   * @param controller
   * @returns {*}
   */
  static initialize(controller) {
    if (!controller) {
      throw new Error('You must provide a ButtonRadioController.');
    }
    return controller;
  }

  /**
   * @returns {string} the list item html element as a string
   */
  static htmlString() {
    return `<li></li>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this._controller = ListOptionItemView.initialize(controller);
    this._html = stringToHTMLCollection(ListOptionItemView.htmlString())[0];
    this._value = this._controller.value;
    this._valueType = this._controller.valueType;
  }

  /**
   * @returns {Element} the list item with value (optional)
   */
  init() {
    this[_createValue](this._value);
    return this._html;
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {HTMLElement} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.init());
  }

  /**
   * @returns {Element}
   */
  [_createValue]() {
    if (typeof(this._value) !== 'undefined') {
      const listItem = this._html;
      listItem.dataset[this._valueType] = this._value;
    }
    return this._html;
  }
}
