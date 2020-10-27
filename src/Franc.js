import Money from './Money';
export default class Franc extends Money {
  constructor(amount) {
    super();
    this.amount = amount;
  }
  times(multiplier) {
    return new Franc(this.amount * multiplier);
  }
}
