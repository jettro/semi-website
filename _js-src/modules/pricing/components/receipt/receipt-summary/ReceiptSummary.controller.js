
export default class ReceiptSummaryController {
  constructor(model) {
    this.model = model;
  }

  get variableMonthlyCost() {
    return this.model.variableMonthlyCost;
  }

  get hostingOptimization() {
    return this.model.hostingOptimization;
  }

  get clusters() {
    return this.model.clusters;
  }

  get recurring() {
    return this.model.recurring;
  }
};
