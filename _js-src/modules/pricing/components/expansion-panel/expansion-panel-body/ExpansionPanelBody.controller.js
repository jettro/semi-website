
export default class ExpansionPanelBodyController {

  constructor(model) {
    this.model = model;
  }

  get innerChildElement() {
    return this.model.innerContentElement;
  }
}
