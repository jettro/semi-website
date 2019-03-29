
export default class TableController {

  constructor(model) {
    this.model = model;
  }

  get rows() {
    return this.model.rows;
  }
}
