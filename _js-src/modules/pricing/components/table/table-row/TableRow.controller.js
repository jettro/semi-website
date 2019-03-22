
export default class TableRowController {

  constructor(model) {
    this.model = model;
  }

  get cpc() {
    return this.model.cpc;
  }

  get averageCalls() {
    return this.model.averageCalls;
  }

  get subTotal() {
    return this.model.subTotal;
  }

  get childComponent() {
    return this.model.childComponent;
  }
}
