
export default class ButtonRadioModel {

  static validate(data) {
    if (!data.title) {
      return 'A title is required in the model.';
    } else {
      return data.title;
    }
  }

  constructor(title) {
    this.title = ButtonRadioModel.validate({title});
    this.description = "a description";
  }
}
