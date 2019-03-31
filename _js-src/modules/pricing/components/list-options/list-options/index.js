import ListOptionsModel from './ListOptions.model';
import ListOptionsController from './ListOptions.controller';
import ListOptionsView from './ListOptions.view';

export default function listOptionComponent(options, buttonData) {
  const listOptionsModel = new ListOptionsModel(options, buttonData),
    listOptionsController = new ListOptionsController(listOptionsModel);
  return new ListOptionsView(listOptionsController);
};
