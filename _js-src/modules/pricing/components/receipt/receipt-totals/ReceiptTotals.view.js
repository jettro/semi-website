
export default class ReceiptTotalsView {

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
    return `
    <dl class="receipt--reverse-sm-3 receipt__totals">
        <dt class="receipt__total"><strong>Estimated p/m</strong></dt>
        <dd class="receipt__total price" id="price-total"><strong>0,00</strong></dd>
        <dt class="receipt__one-time-setup">One time setup fee</dt>
        <dd class="receipt__one-time-setup price" id="price-one-time-setup">1.000</dd>
    </dl>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = ReceiptTotalsView.initialize(controller);
    this.receiptTotals = ReceiptTotalsView.htmlString();
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {Element} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentHTML('beforeend', this.receiptTotals);
  }
};
