
export default class ReceiptModel {

  constructor() {
    this.observers = [];
    this.registerObserver = function(observer){
      this.observers.push(observer);
    };
    this.notifyAll = function(updateEventType){
      this.observers.forEach(function(observer){
        observer.update(updateEventType);
      })
    };
  }

  set defaultPricing(defaultPricing) {
    this._variableMonthlyCost = defaultPricing.variableMonthlyCost;
    this._clusters = defaultPricing.clusters;
    this._hostingOptimization = defaultPricing.hostingOptimization;
    this._weaviates = defaultPricing.weaviates;
    this._networkNodes = defaultPricing.networkNodes;
  }

  get variableMonthlyCost() {
    return this._variableMonthlyCost;
  }

  set variableMonthlyCost(newSubTotal) {
    this._variableMonthlyCost = newSubTotal;
  }

  get hostingOptimization() {
    return this._hostingOptimization;
  }

  set hostingOptimization(subTotal) {
    this._hostingOptimization = subTotal;
  }

  get clusters() {
    return this._clusters;
  }

  set clusters(subTotal) {
    this._clusters = subTotal;
  }

  get weaviates() {
    return this._weaviates;
  }

  set weaviates(subTotal) {
    this._weaviates = subTotal;
  }

  get networkNodes() {
    return this._networkNodes;
  }

  set networkNodes(subTotal) {
    this._networkNodes = subTotal;
  }
};
