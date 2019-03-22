import { htmlToElement } from '../../../../../helpers/helpers';

import { CollapseBodyModel, CollapseBodyController, CollapseBodyView } from '../../collapse/collapse-body';
import { CollapseTriggerModel, CollapseTriggerController, CollapseTriggerView } from '../../collapse/collapse-trigger';

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
               <td class="table-pricing__column">
                   <template class="collapseTrigger"></template>
                   <template class="collapseBody"></template>
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
    const collapseTriggerModel = new CollapseTriggerModel(this.controller.tableRowCel1ButtonText),
      collapseTriggerController = new CollapseTriggerController(collapseTriggerModel),
      collapseTriggerView = new CollapseTriggerView(collapseTriggerController);
    const collapseBodyModel = new CollapseBodyModel(this.controller.tableRowCel1Description),
      collapseBodyController = new CollapseBodyController(collapseBodyModel),
      collapseBodyView = new CollapseBodyView(collapseBodyController);
    this.html = htmlToElement(TableRowView.htmlString());
    this.tableRow = this.html;
    this.tableRow.dataset.subTotal = this.controller.subTotal;
    this.tableRowcells = this.html.getElementsByTagName('TD');
    this.tableRowcells[1].innerText = this.controller.cpc;
    this.tableRowcells[2].innerText = this.controller.averageCalls;
    this.tableRowcells[0].insertAdjacentElement('beforeend', collapseTriggerView.render());
    this.tableRowcells[0].insertAdjacentElement('beforeend', collapseBodyView.render());
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
