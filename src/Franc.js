export default class Franc {
  constructor(amount) {
    this.amount = amount;
  }
  times(multiplier) {
    return new Franc(this.amount * multiplier);
  }
  equals(compare) {
    return this.amount === compare.amount;
  }
}
