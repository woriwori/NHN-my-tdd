export default class Money {
  static dollar(amount) {
    return new Dollar(amount);
  }
  static franc(amount) {
    return new Franc(amount);
  }
  equals(compare) {
    const moneyInstance = compare;
    return this.amount === moneyInstance.amount && this.constructor === moneyInstance.constructor;
  }
}
