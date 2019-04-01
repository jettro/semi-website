
export default class ListOptionItemController {

  constructor(model) {
    this._model = model;
  }

  get innerChildElement() {
    return this._model.innerChildElement;
  }
}
