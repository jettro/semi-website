
import receiptSummaryComponent from '../receipt-summary';
import receiptTotalsComponent from '../receipt-totals';
import receiptActionComponent from '../receipt-action';
import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';

export default class ReceiptView {

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

  static htmlString() {
    return `<div class="receipt"></div>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = ReceiptView.initialize(controller);
    this.receipt = stringToHTMLCollection(ReceiptView.htmlString())[0];

    receiptSummaryComponent(this.controller.pricingState).renderInto(this.receipt);
    receiptTotalsComponent().renderInto(this.receipt);
    receiptActionComponent().renderInto(this.receipt);
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {Element} the target node provided
   */
  createInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.receipt);
  }
};
