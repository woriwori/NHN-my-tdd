export default class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }
  static dollar(amount) {
    return new Dollar(amount, 'USD');
  }
  static franc(amount) {
    return new Franc(amount, 'CHF');
  }
  equals(compare) {
    const moneyInstance = compare;
    return this.amount === moneyInstance.amount && this.constructor === moneyInstance.constructor;
  }
}
class Franc extends Money {
  constructor(amount, currency) {
    super(amount, currency);
  }
  times(multiplier) {
    return Money.franc(this.amount * multiplier);
  }
}

class Dollar extends Money {
  constructor(amount, currency) {
    super(amount, currency);
  }
  times(multiplier) {
    return Money.dollar(this.amount * multiplier);
  }
}
