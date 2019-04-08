
export default class ExpansionPanel {

  constructor(data, innerChildElement) {
    this._currentUseCase = data.currentUseCase;
    this._panelLabel = data.panelLabel;
    this._innerChildElement = innerChildElement;
  }

  get currentUseCase() {
    return this._currentUseCase;
  }

  get panelLabel() {
    return this._panelLabel;
  }

  get innerChildElement() {
    return this._innerChildElement;
  }
};
