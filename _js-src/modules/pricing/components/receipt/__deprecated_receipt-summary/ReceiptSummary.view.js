import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';

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

  static htmlString(controller) {
    return `
    <div class="card__title hidden-sm">
        <strong class="receipt__title">Price Summary</strong>
    </div>
    <button class="receipt--reverse-sm-1 button--link hidden-l-up" data-toggle="collapse" data-target="collapse">Show subtotals</button>
    <div class="collapse collapse-show-on-l-up">
        <dl class="receipt--reverse-sm-2 receipt__details">
            <dt class="receipt__entry-inactive receipt__use-case">Variable monthly cost</dt>
            <dd class="receipt__entry-inactive receipt__use-case price" id="price-monthly-total">${controller.variableMonthlyCost}</dd>
            <dt class="receipt__entry-inactive receipt__hosting">Hosting/optimization</dt>
            <dd class="receipt__entry-inactive receipt__hosting price" id="price-hosting">${controller.hostingOptimization}</dd>
            <dt class="receipt__entry-inactive receipt__clusters"># of clusters</dt>
            <dd class="receipt__entry-inactive receipt__clusters price" id="price-cluster">${controller.clusters}</dd>
            <dt class="receipt__entry-inactive receipt__recurring">Recurring cost per month (fixed)</dt>
            <dd class="receipt__entry-inactive receipt__recurring price" id="price-recurring">${controller.recurring}</dd>
        </dl>
    </div>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    /** @type {Class!} */
    this.controller = ReceiptSummaryView.initialize(controller);
    /** @type {HTMLCollection!} */
    this.receiptSummaryHTML = stringToHTMLCollection(ReceiptSummaryView.htmlString(controller));
    /** @type {Element!} */
    this.collapseElement = this.receiptSummaryHTML[2];
    /** @type {HTMLCollectionOf!} */
    this.receiptPrices = this.collapseElement.getElementsByTagName('dd');
  }

  setEntryActive() {
    // const eventPrice = ???
    // Object.entries(this.receiptPrices).forEach(([key, price]) => {
      // if (price === eventPrice) {
      //   price.classList.remove('receipt__entry-inactive');
      // }
    // });
  }

  setEntryInactive() {
    // const eventPrice = ???
    // Object.entries(this.receiptPrices).forEach(([key, price]) => {
      // if (price === eventPrice) {
      //   price.classList.add('receipt__entry-inactive');
      // }
    // });
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {Element} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    Object.entries(this.receiptSummaryHTML).forEach(([key, element])  => {
      targetNode.insertAdjacentElement('beforeend', element);
    });
  }
};
