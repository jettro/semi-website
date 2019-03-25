import ButtonRadioModel from './ButtonRadio.model';
import ButtonRadioController from './ButtonRadio.controller';
import ButtonRadioView from './ButtonRadio.view';

export default function buttonRadioComponent(title, key, scopedPubSub, showTarget) {
  const buttonModel = new ButtonRadioModel(title, key, showTarget),
    buttonController = new ButtonRadioController(buttonModel, scopedPubSub);
  return new ButtonRadioView(buttonController);
};
