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
    this.tableBody = htmlToElement(TableBodyView.htmlString());
  }

  /**
   * Use this if you need to render the element
   * @returns {Element} the table
   */
  render() {
    return this.tableBody;
  }
}
