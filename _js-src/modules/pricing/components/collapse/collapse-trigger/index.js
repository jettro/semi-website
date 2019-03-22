import CollapseTriggerModel from './CollapseTrigger.model';
import CollapseTriggerController from './CollapseTrigger.controller';
import CollapseTriggerView from './CollapseTrigger.view';

export default function collapseTriggerComponent(label) {
  const collapseTriggerModel = new CollapseTriggerModel(label),
    collapseTriggerController = new CollapseTriggerController(collapseTriggerModel);
  return new CollapseTriggerView(collapseTriggerController);
}
