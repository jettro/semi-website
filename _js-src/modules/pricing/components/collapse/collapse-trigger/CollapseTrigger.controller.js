import getClosest from '../../../../../utilities/getClosest';
import PubSub from 'pubsub-js';

export default class CollapseTriggerController {

  /**
   * @desc Changes the model
   * @param target
   */
  static clickHandler(target) {
    const collapseTrigger = getClosest(target, 'div');
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
