import getClosest from '../../../../../utilities/getClosest';
import PubSub from 'pubsub-js';

export default class ButtonController {

  /**
   * @desc Changes the model
   * @param e {event}
   * @param scope {string} The scope which can be used to identify specific pubsub event
   */
  static clickHandler(e, scope) {

    const data = {
      "clickedButton": getClosest(e.target, 'BUTTON'),
      "clickedButtonContainer": getClosest(e.target, 'DIV'),
      // "clickedButtonRadioList": getClosest(e.target, 'UL')
    };
    PubSub.publish('buttonClicked.default', data);
    if (typeof(scope) !== 'undefined') {
      PubSub.publish(`buttonClicked.${scope}`, data);
    }
  }

  constructor(model) {
    this.model = model;
    this.scope = this.model.scope;
    this.active = false;
  }

  get title() {
    return this.model.title;
  };

  get useCaseKey() {
    return this.model.useCaseKey;
  }

  get value() {
    return this.model.value;
  };

  get valueType() {
    return this.model.valueType;
  }

  get showTarget() {
    return this.model.showTarget;
  }

  get isDefault() {
    return this.model.isDefault;
  }

  /**
   * @desc interface for the eventlistener
   * @param e
   */
  handleEvent(e){
    e.stopPropagation();
    switch(e.type){
      case "click":
        ButtonController.clickHandler(e, this.scope);
        break;
      default:
        console.log(e.target);
    }
  };

}
