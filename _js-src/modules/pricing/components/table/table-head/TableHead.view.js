import { htmlToElement } from '../../../../../helpers/helpers';

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
    this.html = htmlToElement(TableHeadView.htmlString());
    this.tableHead = this.html;
    this.tableHeadcells = this.html.getElementsByTagName('TD');
    this.tableHeadcells[0].childNodes[0].innerText = this.controller.tableHeadCel1;
    this.tableHeadcells[1].childNodes[0].innerText = this.controller.tableHeadCel2;
    this.tableHeadcells[2].childNodes[0].innerText = this.controller.tableHeadCel3;
  }

  /**
   * Use this if you need to render the element
   * @returns {Element} the table
   */
  render() {
    return this.tableHead;
  }
}
