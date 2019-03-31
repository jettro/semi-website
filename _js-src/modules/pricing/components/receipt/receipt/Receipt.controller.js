
export default class ReceiptController {
  constructor(model) {
    this.model = model;
  }

  get pricingState() {
    return this.model.pricingState;
  };
};
