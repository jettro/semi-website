
export default class ButtonModel {

  static isRequired(parameter) {
    if(parameter === undefined) {
      throw new Error(`Parameter is required.`);
    }
    return parameter;
  }

  /**
   * @param option {{title: string}, {useCaseKey: string}, {value: string}, {valueType: string}, {default: boolean}, {showTarget: string}}
   * @param scopedPubSub {string} The scope which is used in the pubsub event
   */
  constructor(option, scopedPubSub) {
    this.title = ButtonModel.isRequired(option.title);
    this.isDefault = option.default; /** states that the button is active by default */
    this.showTarget = option.showTarget;
    this.useCaseKey = option.useCaseKey;
    this.value = option.value;
    this.valueType = option.valueType || 'multiplier';
    this.scope = scopedPubSub;
  }
}
