import { getClosest } from '../../../../helpers/helpers';
import PubSub from 'pubsub-js';

export default class ButtonRadioController {

  /**
   * @desc Changes the model
   * @param target
   */
  static clickHandler(e) {
    const button = getClosest(e.target, 'BUTTON');
    const container = getClosest(e.target, 'DIV');
    PubSub.publish('buttonClicked', {"button": button, "container": container});
  }

  constructor(model) {
    this.model = model;
  }

  get title() {
    return this.model.title;
  };

  get useCaseKey() {
    return this.model.useCaseKey;
  }

  /**
   * @desc interface for the eventlistener
   * @param e
   */
  handleEvent(e){
    e.stopPropagation();
    switch(e.type){
      case "click":
        ButtonRadioController.clickHandler(e);
        break;
      default:
        console.log(e.target);
    }
  };

}
