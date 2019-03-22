import { getClosest } from '../../../../../helpers/helpers';
import PubSub from 'pubsub-js';

export default class CollapseTriggerController {

  /**
   * @desc Changes the model
   * @param target
   */
  static clickHandler(target) {
    // TODO: not sure if DIV is the right target, or if it will search for something outside the panel head also...
    const collapseTrigger = getClosest(target, 'DIV');
    PubSub.publish('collapseTriggerClicked', collapseTrigger);
  }

  constructor(model) {
    this.model = model;
  }

  get label() {
    return this.model.label;
  };

  /**
   * @desc interface for the eventlistener
   * @param e
   */
  handleEvent(e){
    e.stopPropagation();

    switch(e.type){
      case "click":
        CollapseTriggerController.clickHandler(e.target);
        break;
      default:
        console.log(e.target);
    }
  };

}
