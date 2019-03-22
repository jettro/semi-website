
export default class TableRowModel {

  static calculateSubTotal(cpc, averageCalls) {
    const cpcDigits = 3;
    const callsDigits = 2;
    return parseFloat(cpc).toFixed(cpcDigits) * parseFloat(averageCalls).toFixed(callsDigits);
  };

  constructor(data, childComponent) {
    this._cpc = data.cpc;
    this._averageCalls = data.averageCalls;
    this._tableRowSubTotal = TableRowModel.calculateSubTotal(this._cpc, this._averageCalls);
    this._childComponent = childComponent;
  }

  /**
   * @returns {string}
   */
  get cpc(){
    return this._cpc;
  };

  /**
   * @returns {string}
   */
  get averageCalls(){
    return this._averageCalls;
  };

  /**
   * @returns {string}
   */
  get subTotal(){
    return this._tableRowSubTotal;
  }

  /**
   * @returns {Element}
   */
  get childComponent() {
    return this._childComponent;
  }
}
