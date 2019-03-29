import ExpansionPanelModel from './ExpansionPanel.model';
import ExpansionPanelController from './ExpansionPanel.controller';
import ExpansionPanelView from './ExpansionPanel.view';

export default function expansionPanelComponent(data) {
  const expansionPanelModel = new ExpansionPanelModel(data),
    expansionPanelController = new ExpansionPanelController(expansionPanelModel);
  return new ExpansionPanelView(expansionPanelController);
};
