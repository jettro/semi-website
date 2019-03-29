import CollapseModel from './Collapse.model';
import CollapseController from './Collapse.controller';
import CollapseView from './Collapse.view';

export default function CollapseComponent(title, desc) {
  const collapseModel = new CollapseModel(title, desc),
    collapseController = new CollapseController(collapseModel);
  return new CollapseView(collapseController);
}
