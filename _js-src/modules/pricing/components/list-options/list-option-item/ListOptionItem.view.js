import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';

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
    this.listItemOption = stringToHTMLCollection(ListOptionItemView.htmlString())[0];
    this.listItemOption.insertAdjacentElement('beforeend', this._controller.innerChildElement);
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {HTMLElement} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.listItemOption);
  }


}
