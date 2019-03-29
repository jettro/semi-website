import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';

export default class TableHeadView {

  /**
   * @desc Test for basic necessary functionality
   * @param controller
   * @returns {*}
   */
  static initialize(controller) {
    if (!controller) {
      throw new Error('You must provide a TableHeadController.');
    }
    return controller;
  }

  /**
   * @returns {string} the button html element as a string
   */
  static htmlString() {
    return `<thead>
                <tr class="table-pricing__row">
                    <td class="table-pricing__column"><strong></strong></td>
                    <td class="table-pricing__column"><strong></strong></td>
                    <td class="table-pricing__column"><strong></strong></td>
                </tr>
            </thead>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = TableHeadView.initialize(controller);
    this.tableHead = stringToHTMLCollection(TableHeadView.htmlString())[0];
    this.tableHeadcells = this.tableHead.getElementsByTagName('TD');
    this.tableHeadcells[0].childNodes[0].innerText = this.controller.tableHeadCel1;
    this.tableHeadcells[1].childNodes[0].innerText = this.controller.tableHeadCel2;
    this.tableHeadcells[2].childNodes[0].innerText = this.controller.tableHeadCel3;
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {Element} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.tableHead);
  }
}