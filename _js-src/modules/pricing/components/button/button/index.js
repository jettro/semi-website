import ButtonModel from './Button.model';
import ButtonController from './Button.controller';
import ButtonView from './Button.view';

/**
 * @desc the button component
 * @param option {{title: string}, {useCaseKey: string}, {value: string}, {valueType: string}, {default: boolean}}
 * @param scopedPubSub {?string} Defines a more specific scope for the pubsub of the 'buttonClicked...'
 * @returns {ButtonView}
 */
export default function buttonComponent(option, scopedPubSub = undefined) {
  const buttonModel = new ButtonModel(option, scopedPubSub),
    buttonController = new ButtonController(buttonModel);
  return new ButtonView(buttonController);
};
