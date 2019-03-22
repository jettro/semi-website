import TableRowModel from './TableRow.model';
import TableRowController from './TableRow.controller';
import TableRowView from './TableRow.view';

export default function tableRowComponent(data, childComponent) {
  const tableRowModel = new TableRowModel(data, childComponent),
    tableRowController = new TableRowController(tableRowModel);
  return new TableRowView(tableRowController);
};
