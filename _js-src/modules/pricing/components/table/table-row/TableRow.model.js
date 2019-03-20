
export default class TableRowModel {

  constructor(cel1buttonText, cel1description, cel2content, cel3content) {
    this._tableRowCel1ButtonText = cel1buttonText;
    this._tableRowCel1Description = cel1description;
    this._tableRowCel2 = cel2content;
    this._tableRowCel3 = cel3content;
  }

  get tableRowCel1ButtonText(){
    return this._tableRowCel1ButtonText;
  };

  get tableRowCel1Description(){
    return this._tableRowCel1Description;
  };

  get tableRowCel2(){
    return this._tableRowCel2;
  };

  get tableRowCel3(){
    return this._tableRowCel3;
  };
}
