import CollapseBodyModel from './CollapseBody.model';
import CollapseBodyController from './CollapseBody.controller';
import CollapseBodyView from './CollapseBody.view';

export default function collapseBodyComponent(desc) {
  const collapseBodyModel = new CollapseBodyModel(desc),
    collapseBodyController = new CollapseBodyController(collapseBodyModel);
    return new CollapseBodyView(collapseBodyController);
}
