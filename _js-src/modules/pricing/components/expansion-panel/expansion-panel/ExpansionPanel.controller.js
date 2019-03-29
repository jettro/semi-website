
export default class ExpansionPanelController {
  constructor(model) {
    this.model = model;
  }

  get currentUseCase() {
    return this.model.currentUseCase;
  }

  get panelLabel() {
    return this.model.panelLabel;
  }
};
