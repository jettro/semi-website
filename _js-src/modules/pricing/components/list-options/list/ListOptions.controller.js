
export default class ListOptionsController {

  constructor(model) {
    this._model = model;
  }

  get children() {
    return this._model.children;
  };

  get dataAttr() {
    return this._model.dataAttr;
  }
}
