import TableModel from './Table.model';
import TableController from './Table.controller';
import TableView from './Table.view';

export default function tableComponent() {
  const tableModel = new TableModel(),
    tableController = new TableController(tableModel);
  return new TableView(tableController);
}
