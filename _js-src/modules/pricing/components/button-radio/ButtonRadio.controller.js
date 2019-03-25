import { getClosest } from '../../../../helpers/helpers';
import PubSub from 'pubsub-js';

export default class ButtonRadioController {

  /**
   * @desc Changes the model
   * @param target
   */
  static clickHandler(e, scope) {
    const button = getClosest(e.target, 'BUTTON');
    const container = getClosest(e.target, 'DIV');
    PubSub.publish('buttonClicked.default', {"button": button, "container": container});

    if (typeof(scope) !== 'undefined') {
      PubSub.publish(`buttonClicked.${scope}`, { "button": button });
    }
  }

  constructor(model, scopedPubSub = undefined) {
    this.model = model;
    this.scope = scopedPubSub;
  }

  get title() {
    return this.model.title;
  };

  get useCaseKey() {
    return this.model.useCaseKey;
  }

  get showTarget() {
    return this.model.showTarget;
  }

  /**
   * @desc interface for the eventlistener
   * @param e
   */
  handleEvent(e){
    e.stopPropagation();
    switch(e.type){
      case "click":
        ButtonRadioController.clickHandler(e, this.scope);
        break;
      default:
        console.log(e.target);
    }
  };

}
