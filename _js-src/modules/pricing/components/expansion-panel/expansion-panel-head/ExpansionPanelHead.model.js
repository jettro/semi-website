
export default class ExpansionPanelHeadModel {

  constructor(title) {
    this._title = title;
  }

  /**
   * @desc gets the model title
   * @returns {*}
   */
  get title(){
    return this._title;
  };
}
