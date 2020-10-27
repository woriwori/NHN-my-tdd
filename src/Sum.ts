import Expression from './Expression';
import Money from './Money';

// Sum은 Sum 인스턴스가 어떤 피연산자 2개로 생성된건지 알고 있다.
export default class Sum implements Expression {
  augend: Money;
  addend: Money;
  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }
  reduce(to: String) {
    const amount: number = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
