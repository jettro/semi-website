import getClosest from '../../../../../utilities/getClosest';
import PubSub from 'pubsub-js';

export default class ExpansionPanelHeadController {

  /**
   * @desc Changes the model
   * @param target
   */
  static clickHandler(target) {
    const expansionPanelHead = getClosest(target, 'DIV');
    PubSub.publish('expansionPanelHeadClicked', expansionPanelHead);
  }

  constructor(model) {
    this.model = model;
  }

  get title() {
    return this.model.title;
  };

  /**
   * @desc interface for the eventlistener
   * @param e
   */
  handleEvent(e){
    e.stopPropagation();
    switch(e.type){
      case "click":
        ExpansionPanelHeadController.clickHandler(e.target);
        break;
      default:
        console.log(e.target);
    }
  };

}
