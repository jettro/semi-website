
export default class CollapseBodyModel {

  constructor(description) {
    this._description = description;
  }

  /**
   * @desc gets the model title
   * @returns {*}
   */
  get description(){
    return this._description;
  };
}
