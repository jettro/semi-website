import ButtonRadioModel from './ButtonRadio.model';
import ButtonRadioController from './ButtonRadio.controller';
import ButtonRadioView from './ButtonRadio.view';

export default function buttonRadioComponent(title, key, scopedPubSub) {
  const buttonModel = new ButtonRadioModel(title, key),
    buttonController = new ButtonRadioController(buttonModel, scopedPubSub);
  return new ButtonRadioView(buttonController);
};
