
export default class CollapseModel {

  constructor(title, description) {
    this._title = title;
    this._description = description;
  }

  /**
   * @desc gets the model title
   * @returns {string}
   */
  get title(){
    return this._title;
  };

  /**
   * @desc gets the model title
   * @returns {string}
   */
  get description(){
    return this._description;
  };
}
