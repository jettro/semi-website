
export default class TableRowModel {

  static calculateSubTotal(cpc, averageCalls) {
    const cpcDigits = 3;
    const callsDigits = 2;
    return parseFloat(cpc).toFixed(cpcDigits) * parseFloat(averageCalls).toFixed(callsDigits);
  };

  constructor(cel1buttonText, cel1description, cpc, averageCalls) {
    this._tableRowCel1ButtonText = cel1buttonText;
    this._tableRowCel1Description = cel1description;
    this._cpc = cpc;
    this._averageCalls = averageCalls;
    this._tableRowSubTotal = TableRowModel.calculateSubTotal(this._cpc, this._averageCalls);
  }

  get tableRowCel1ButtonText(){
    return this._tableRowCel1ButtonText;
  };

  get tableRowCel1Description(){
    return this._tableRowCel1Description;
  };

  get cpc(){
    return this._cpc;
  };

  get averageCalls(){
    return this._averageCalls;
  };

  get subTotal(){
    return this._tableRowSubTotal;
  }
}
