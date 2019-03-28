
export default class ReceiptSummaryView {

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
    <div class="card__title hidden-sm">
        <strong class="receipt__title">Price Summary</strong>
    </div>
    <button class="receipt--reverse-sm-1 button--link hidden-l-up" data-toggle="collapse" data-target="collapse">Show subtotals</button>
    <div class="collapse collapse-show-on-l-up">
        <dl class="receipt--reverse-sm-2 receipt__details">
            <dt class="receipt__entry-inactive receipt__use-case">Variable monthly cost</dt>
            <dd class="receipt__entry-inactive receipt__use-case price" id="price-monthly-total">0,00</dd>
            <dt class="receipt__entry-inactive receipt__hosting">Hosting/optimization</dt>
            <dd class="receipt__entry-inactive receipt__hosting price" id="price-hosting">0,00</dd>
            <dt class="receipt__entry-inactive receipt__clusters"># of clusters</dt>
            <dd class="receipt__entry-inactive receipt__clusters price" id="price-cluster">0,00</dd>
            <dt class="receipt__entry-inactive receipt__recurring">Recurring cost per month (fixed)</dt>
            <dd class="receipt__entry-inactive receipt__recurring price" id="price-recurring">0,00</dd>
        </dl>
    </div>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = ReceiptSummaryView.initialize(controller);
    this.receiptSummary = ReceiptSummaryView.htmlString();
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {Element} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentHTML('beforeend', this.receiptSummary);
  }
};
