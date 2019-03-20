import { htmlToElement } from '../../../../../helpers/helpers';

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
    return `<tr class="table-pricing__row template-table-pricing-row">
               <td class="table-pricing__column">
                   <button class="button--link feature-label"
                           data-toggle="collapse"
                           data-target="collapse">
                   </button>
                   <div class="collapse" aria-expanded="false">
                       <p class="feature-description"></p>
                   </div>
               </td>
               <td class="table-pricing__column feature-cpc price"></td>
               <td class="table-pricing__column feature-average"></td>
           </tr>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = TableRowView.initialize(controller);
    this.html = htmlToElement(TableRowView.htmlString());
    this.tableRow = this.html;
    this.tableRowcells = this.html.getElementsByTagName('TD');
    this.tableRowcells[0].getElementsByTagName('BUTTON')[0].innerText = this.controller.tableRowCel1ButtonText;
    this.tableRowcells[0].getElementsByClassName('feature-description')[0].innerText = this.controller.tableRowCel1Description;
    this.tableRowcells[1].innerText = this.controller.tableRowCel2;
    this.tableRowcells[2].innerText = this.controller.tableRowCel3;
  }

  /**
   * Use this if you need to render the element
   * @returns {Element} the table
   */
  render() {
    return this.tableRow;
  }
}
