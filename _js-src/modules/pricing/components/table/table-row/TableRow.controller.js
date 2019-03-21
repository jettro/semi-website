
export default class TableRowController {

  constructor(model) {
    this.model = model;
  }

  get tableRowCel1ButtonText() {
    return this.model.tableRowCel1ButtonText;
  }

  get tableRowCel1Description() {
    return this.model.tableRowCel1Description;
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
}
