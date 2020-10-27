import Bank from './Bank';
import Expression from './Expression';
import Sum from './Sum';
export default class Money implements Expression {
  public amount: number;
  public currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }
  static dollar(amount: number) {
    return new Money(amount, 'USD');
  }
  static franc(amount: number) {
    return new Money(amount, 'CHF');
  }
  equals(compare: Money) {
    const moneyInstance = compare;
    return this.amount === moneyInstance.amount && this.currency === moneyInstance.currency;
  }
  times(multiplier: number) {
    return new Money(this.amount * multiplier, this.currency);
  }
  plus(addend: Expression) {
    return new Sum(this, addend);
  }
  reduce(bank: Bank, to: string) {
    const rate: number = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }
}
