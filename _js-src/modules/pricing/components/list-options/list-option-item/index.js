import ListOptionItemModel from './ListOptionItem.model';
import ListOptionItemController from './ListOptionItem.controller';
import ListOptionItemView from './ListOptionItem.view';

export default function listOptionItemComponent(option, innerChildElement = undefined) {
  const listOptionModel = new ListOptionItemModel(option, innerChildElement),
    listOptionController = new ListOptionItemController(listOptionModel);
  return new ListOptionItemView(listOptionController);
};
