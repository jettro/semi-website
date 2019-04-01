import ListOptionItemModel from './ListOptionItem.model';
import ListOptionItemController from './ListOptionItem.controller';
import ListOptionItemView from './ListOptionItem.view';

export default function listOptionItemComponent(innerChildElement = undefined) {
  const listOptionModel = new ListOptionItemModel(innerChildElement),
    listOptionController = new ListOptionItemController(listOptionModel);
  return new ListOptionItemView(listOptionController);
};
