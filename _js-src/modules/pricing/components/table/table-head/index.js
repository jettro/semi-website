import TableHeadModel from './TableHead.model';
import TableHeadController from './TableHead.controller';
import TableHeadView from './TableHead.view';

export default function tableHeadComponent() {
  const tableHeadModel = new TableHeadModel(),
    tableHeadController = new TableHeadController(tableHeadModel);
    return new TableHeadView(tableHeadController);
}
