
export default class ExpansionPanelBodyModel {

  constructor(innerContentElement) {
    this.innerContentElement = innerContentElement;
  }

  get innerChildElement() {
    return this.innerContentElement;
  }
}
