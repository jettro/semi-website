import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';

export default class TableRowView {

  /**
   * @desc Test for basic necessary functionality
   * @param controller
   * @returns {*}
   */
  static initialize(controller) {
    if (!controller) {
      throw new Error('You must provide a TableRowController.');
    }
    return controller;
  }

  /**
   * @returns {string} the button html element as a string
   */
  static htmlString() {
    return `<tr class="table-pricing__row">
               <td class="table-pricing__column"></td>
               <td class="table-pricing__column feature-cpc price"></td>
               <td class="table-pricing__column feature-average"></td>
           </tr>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = TableRowView.initialize(controller);
    this.tableRow = stringToHTMLCollection(TableRowView.htmlString())[0];
    this.tableRow.dataset.subTotal = this.controller.subTotal;
    this.tableRowCells = this.tableRow.getElementsByTagName('TD');
    this.tableRowCells[0].insertAdjacentElement('beforeend', this.controller.childComponent);
    this.tableRowCells[1].innerText = this.controller.cpc;
    this.tableRowCells[2].innerText = this.controller.averageCalls;
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {Element} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.tableRow);
  }
}
