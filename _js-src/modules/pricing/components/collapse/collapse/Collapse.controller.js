
export default class CollapseController {

  constructor(model) {
    this.model = model;
  }

  get title() {
    return this.model.title;
  };

  get description() {
    return this.model.description;
  };

}
