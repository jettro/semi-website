import ExpansionPanelHeadModel from './ExpansionPanelHead.model';
import ExpansionPanelHeadController from './ExpansionPanelHead.controller';
import ExpansionPanelHeadView from './ExpansionPanelHead.view';

export default function expansionPanelHeadComponent(title) {
  const expansionPanelHeadModel = new ExpansionPanelHeadModel(title),
    expansionPanelHeadController = new ExpansionPanelHeadController(expansionPanelHeadModel);
  return new ExpansionPanelHeadView(expansionPanelHeadController);
};
