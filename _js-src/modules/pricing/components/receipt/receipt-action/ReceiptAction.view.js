
export default class ReceiptActionView {

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

  // TODO: make class with not-a-button styling
  static htmlString() {
    // <!--<button>Get a detailed pricing report</button>-->
    return `<a class="button button-receipt" href="#">Schedule a call</a>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = ReceiptActionView.initialize(controller);
    this.receiptAction = ReceiptActionView.htmlString();
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {Element} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentHTML('beforeend', this.receiptAction);
  }
};
