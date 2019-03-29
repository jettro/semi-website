
export default class ExpansionPanel {

  constructor(data) {
    this._currentUseCase = data.currentUseCase;
    this._panelLabel = data.panelLabel;
  }

  get currentUseCase() {
    return this._currentUseCase;
  }

  get panelLabel() {
    return this._panelLabel;
  }
};
