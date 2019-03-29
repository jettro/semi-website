import TableBodyModel from './TableBody.model';
import TableBodyController from './TableBody.controller';
import TableBodyView from './TableBody.view';

export default function tableBodyComponent(rows) {
  const tableBodyModel = new TableBodyModel(rows),
    tableBodyController = new TableBodyController(tableBodyModel);
  return new TableBodyView(tableBodyController);
}
