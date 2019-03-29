import TableModel from './Table.model';
import TableController from './Table.controller';
import TableView from './Table.view';

/**
 * @param rows {Array} An array containing a iterable list of object rows,
 *        each object has in turn by minimum four entries 'title', 'desc', 'cpc' and 'average'.
 * @returns {TableView}
 */
export default function tableComponent(rows) {
  const tableModel = new TableModel(rows),
    tableController = new TableController(tableModel);
  return new TableView(tableController);
}
