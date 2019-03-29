
export default class TableModel {

  constructor(rows) {
    this._rows = rows;
  }

  get rows() {
    return this._rows;
  }
}
