import ExpansionPanelBodyModel from './ExpansionPanelBody.model';
import ExpansionPanelBodyController from './ExpansionPanelBody.controller';
import ExpansionPanelBodyView from './ExpansionPanelBody.view';

export default function expansionPanelBodyComponent() {
  const expansionPanelBodyModel = new ExpansionPanelBodyModel(),
  expansionPanelBodyController = new ExpansionPanelBodyController(expansionPanelBodyModel);
  return new ExpansionPanelBodyView(expansionPanelBodyController);
}