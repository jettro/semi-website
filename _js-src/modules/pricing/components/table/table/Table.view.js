import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';
import tableHeadComponent from '../table-head';
import tableBodyComponent from '../table-body';

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
    this.table = stringToHTMLCollection(TableView.htmlString())[0];
    tableHeadComponent().renderInto(this.table);
    tableBodyComponent(this.controller.rows).renderInto(this.table);
  }

  /**
   * @description creates an element to reuse in other element
   * @returns {Element | *}
   */
  create() {
    return this.table;
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {Element} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.table);
  }
}
