
export default class ButtonRadioModel {

  constructor(title, useCaseKey = undefined) {
    this._title = title;
    this._useCaseKey = useCaseKey;
    this.description = "a description";
  }

  /**
   * @desc gets the model title
   * @returns {*}
   */
  get title(){
    return this._title;
  };

  get useCaseKey() {
    if (this._useCaseKey !== undefined)
      return this._useCaseKey;
  }
}
