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
class Franc extends Money {
  constructor(amount) {
    super();
    this.amount = amount;
  }
  times(multiplier) {
    return new Franc(this.amount * multiplier);
  }
}

class Dollar extends Money {
  constructor(amount) {
    super();
    this.amount = amount;
  }
  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }
}
