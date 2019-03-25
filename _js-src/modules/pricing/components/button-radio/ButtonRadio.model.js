
export default class ButtonRadioModel {

  constructor(title, useCaseKey = undefined, showTarget = undefined) {
    this._title = title;
    this._useCaseKey = useCaseKey;
    this._showTarget = showTarget;
    this.description = "a description";
  }

  /**
   * @desc gets the model title
   * @returns {*}
   */
  get title(){
    return this._title;
  };

  /**
   * @returns {string} [useCaseKey = undefined]
   */
  get useCaseKey() {
    if (typeof(this._useCaseKey) !== "undefined")
      return this._useCaseKey;
  }

  /**
   * @returns {string} [showTarget=undefined]
   */
  get showTarget() {
    if (typeof(this._showTarget) !== "undefined")
      return this._showTarget;
  }
}
