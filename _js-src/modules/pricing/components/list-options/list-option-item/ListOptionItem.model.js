
export default class ListOptionItemModel {

  /**
   * @param innerChildElement {Element?} Option to render a component inside the list-item
   */
  constructor(innerChildElement = undefined) {
    this._innerChildElement = innerChildElement;
  }

  get innerChildElement() {
    return this._innerChildElement;
  }
}
