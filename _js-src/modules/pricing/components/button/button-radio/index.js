import ButtonRadioModel from './ButtonRadio.model';
import ButtonRadioController from './ButtonRadio.controller';
import ButtonRadioView from './ButtonRadio.view';

/**
 * @desc the radio button component
 * @param option {{title: string, useCaseKey: string, value: string, valueType: string, default: boolean}}
 * @param scopedPubSub {?string} Defines a more specific scope for the pubsub of the 'buttonClicked...'
 * @returns {ButtonRadioView}
 */
export default function buttonRadioComponent(option, scopedPubSub) {
  const buttonRadioModel = new ButtonRadioModel(option, scopedPubSub),
    buttonRadioController = new ButtonRadioController(buttonRadioModel);
  return new ButtonRadioView(buttonRadioController);
}
