
export default class ListOptionsController {

  constructor(model, config) {
    this._model = model;
    this._config = config;
  }

  get options() {
    return this._model.options;
  };

  get buttonData() {
    return this._model.buttonData;
  }

  get config() {
    return this._config;
  }
}
