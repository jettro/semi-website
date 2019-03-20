
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

  get tableRowCel2() {
    return this.model.tableRowCel2;
  }
  get tableRowCel3() {
    return this.model.tableRowCel3;
  }
}
