import ButtonRadioModel from './ButtonRadio.model';
import ButtonRadioController from './ButtonRadio.controller';
import ButtonRadioView from './ButtonRadio.view';

/**
 * @desc the radio button component
 * @param title {string}
 * @param key {string} The key to identify the use case
 * @param isDefault {?boolean} [isDefault=false] Whether or not the button is default
 * @param scopedPubSub {?string} Defines a more specific scope for the pubsub of the 'buttonClicked...'
 * @param showTarget {?string} This target is added to 'dataset.targetShow' and is used to show an optional fieldset
 * @returns {ButtonRadioView}
 */
export default function buttonRadioComponent(title, key, isDefault = false, scopedPubSub = undefined, showTarget = undefined) {
  const buttonModel = new ButtonRadioModel(title, key, showTarget, scopedPubSub),
    buttonController = new ButtonRadioController(buttonModel, isDefault);
  return new ButtonRadioView(buttonController);
};
