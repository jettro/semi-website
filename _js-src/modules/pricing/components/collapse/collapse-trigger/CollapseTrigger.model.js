
export default class CollapseTriggerModel {

  constructor(label) {
    this._label = label;
  }

  /**
   * @desc gets the model title
   * @returns {*}
   */
  get label(){
    return this._label;
  };
}
