export default class Money {
  equals(compare) {
    const moneyInstance = compare;
    return this.amount === moneyInstance.amount;
  }
}
