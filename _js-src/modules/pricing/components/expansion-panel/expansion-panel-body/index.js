import ExpansionPanelBodyModel from './ExpansionPanelBody.model';
import ExpansionPanelBodyController from './ExpansionPanelBody.controller';
import ExpansionPanelBodyView from './ExpansionPanelBody.view';

export default function expansionPanelBodyComponent(innerContentElement) {
  const expansionPanelBodyModel = new ExpansionPanelBodyModel(innerContentElement),
  expansionPanelBodyController = new ExpansionPanelBodyController(expansionPanelBodyModel);
  return new ExpansionPanelBodyView(expansionPanelBodyController);
}