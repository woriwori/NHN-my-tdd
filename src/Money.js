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
    return this.amount === moneyInstance.amount && this.currency === moneyInstance.currency;
  }
  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }
}
class Franc extends Money {
  constructor(amount, currency) {
    super(amount, currency);
  }
}

class Dollar extends Money {
  constructor(amount, currency) {
    super(amount, currency);
  }
}
