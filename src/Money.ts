import Expression from './Expression';
export default class Money implements Expression {
  private amount: number;
  public currency: string;
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }
  static dollar(amount) {
    return new Money(amount, 'USD');
  }
  static franc(amount) {
    return new Money(amount, 'CHF');
  }
  equals(compare) {
    const moneyInstance = compare;
    return this.amount === moneyInstance.amount && this.currency === moneyInstance.currency;
  }
  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }
  plus(added) {
    return new Money(this.amount + added.amount, this.currency);
  }
}
