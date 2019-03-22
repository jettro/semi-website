import { htmlToElement } from '../../../../../helpers/helpers';

export default class TableBodyView {

  /**
   * @desc Test for basic necessary functionality
   * @param controller
   * @returns {*}
   */
  static initialize(controller) {
    if (!controller) {
      throw new Error('You must provide a TableBodyController.');
    }
    return controller;
  }

  /**
   * @returns {string} the button html element as a string
   */
  static htmlString() {
    return `<tbody class="table-row-container"></tbody>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = TableBodyView.initialize(controller);
    this.html = htmlToElement(TableBodyView.htmlString());
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {Element} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.html);
  }
}
