
export default class ReceiptModel {
  constructor(pricingState) {
    this._pricingState = pricingState;
  }

  get pricingState() {
    return this._pricingState;
  }
};
