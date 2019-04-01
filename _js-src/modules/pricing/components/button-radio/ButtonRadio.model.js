
export default class ButtonRadioModel {

  constructor(option, scopedPubSub = undefined) {
    this._title = option.title;
    this.description = "a description inside buttonRadio.model.js";
    this._useCaseKey = option.useCaseKey;
    this._value = option.value;
    this._valueType = option.valueType || 'multiplier';
    this._scopedPubSub = scopedPubSub;
    /** show showTarget is only on optional options (Yes or no question) */
    this._showTarget = option.showTarget;

    if (option.default) {
      this._isDefault = option.default;
    }
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
   * @desc gets the model value
   * @returns {string}
   */
  get value(){
    if (this._value !== undefined)
      return this._value;
  };

  /**
   * @desc gets the model value type used to define calculation
   * @returns {string}
   */
  get valueType() {
    return this._valueType;
  }

  /**
   * @returns {string} [showTarget=undefined]
   */
  get showTarget() {
    if (typeof(this._showTarget) !== "undefined")
      return this._showTarget;
  }

  /**
   * @returns {string} [isDefault=undefined]
   */
  get isDefault() {
    if (typeof(this._isDefault) !== "undefined")
      return this._isDefault;
  }

  get scope() {
    return this._scopedPubSub;
  }
}
