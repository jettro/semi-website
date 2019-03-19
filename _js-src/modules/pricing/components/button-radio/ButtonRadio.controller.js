
export default class ButtonRadioController {

  constructor(model) {
    this.model = model;
  }

  /**
   * @desc Changes the model
   * @param target
   */
  clickHandler(target){
    this.model.title = 'World';
    target.innerText = this.getModelTitle();
  }

  /**
   * @desc gets the model title
   * @returns {*}
   */
  getModelTitle(){
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
        this.clickHandler(e.target);
        break;
      default:
        console.log(e.target);
    }
  };

}
