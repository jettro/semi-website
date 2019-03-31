
export default class ReceiptSummaryModel {

  constructor(data) {
    this._variableMonthlyCost = data.variableMonthlyCost;
    this._hostingOptimization = data.hostingOptimization;
    this._clusters = data.clusters;
    this._recurring = data.recurring;
  }

  get variableMonthlyCost() {
    return this._variableMonthlyCost;
  }

  get hostingOptimization() {
    return this._hostingOptimization;
  }

  get clusters() {
    return this._clusters;
  }

  get recurring() {
    return this._recurring;
  }
};
