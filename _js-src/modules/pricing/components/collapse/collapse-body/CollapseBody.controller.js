
export default class CollapseBodyController {

  constructor(model) {
    this.model = model;
  }

  get description() {
    return this.model.description;
  };

}
