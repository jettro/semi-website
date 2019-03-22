import TableRowModel from './TableRow.model';
import TableRowController from './TableRow.controller';
import TableRowView from './TableRow.view';

export default function tableRowComponent(title, desc, cpc, average) {
  const tableRowModel = new TableRowModel(title, desc, cpc, average),
    tableRowController = new TableRowController(tableRowModel);
  return new TableRowView(tableRowController);
};
