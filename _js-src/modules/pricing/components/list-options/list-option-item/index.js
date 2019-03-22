import ListOptionModel from './ListOptionItem.model';
import ListOptionController from './ListOptionItem.controller';
import ListOptionView from './ListOptionItem.view';

export default function listOptionComponent(value, valueType) {
  const listOptionModel = new ListOptionModel(value, valueType),
    listOptionController = new ListOptionController(listOptionModel);
  return new ListOptionView(listOptionController);
};
