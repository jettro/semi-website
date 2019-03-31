
export default class ListOptionsController {

  constructor(model) {
    this._model = model;
  }

  get options() {
    return this._model.options;
  };

  get buttonData() {
    return this._model.buttonData;
  }
}
