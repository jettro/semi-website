
export default class TableBodyController {

  constructor(model) {
    this.model = model;
  }

  get rows() {
    return this.model.rows;
  }
}
