import TableBodyModel from './TableBody.model';
import TableBodyController from './TableBody.controller';
import TableBodyView from './TableBody.view';

export default function tableBodyComponent() {
  const tableBodyModel = new TableBodyModel(),
    tableBodyController = new TableBodyController(tableBodyModel);
  return new TableBodyView(tableBodyController);
}
