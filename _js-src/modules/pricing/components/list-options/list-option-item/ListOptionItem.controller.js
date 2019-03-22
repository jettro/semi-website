
export default class ListOptionItemController {

  constructor(model) {
    this._model = model;
  }

  get value() {
    return this._model.value;
  };

  get valueType() {
    return this._model.valueType;
  }
}
