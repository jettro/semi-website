import htmlToElement from '../../../../../utilities/htmlToElement';

export default class TableView {

  /**
   * @desc Test for basic necessary functionality
   * @param controller
   * @returns {*}
   */
  static initialize(controller) {
    if (!controller) {
      throw new Error('You must provide a TableController.');
    }
    return controller;
  }

  /**
   * @returns {string} the button html element as a string
   */
  static htmlString() {
    return `<table class="table-pricing table-zebra"></table>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = TableView.initialize(controller);
    this.html = htmlToElement(TableView.htmlString());
    this.table = this.html;
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
