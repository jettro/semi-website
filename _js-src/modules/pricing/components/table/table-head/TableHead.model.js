
export default class TableHeadModel {

  constructor() {
    this._tableHeadCel1 = "Feature";
    this._tableHeadCel2 = "Cost per call";
    this._tableHeadCel3 = "Estimated nr. of API calls";
  }

  get tableHeadCel1(){
    return this._tableHeadCel1;
  };

  get tableHeadCel2(){
    return this._tableHeadCel2;
  };

  get tableHeadCel3(){
    return this._tableHeadCel3;
  };
}
