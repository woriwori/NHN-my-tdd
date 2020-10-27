import Bank from './Bank';
import Expression from './Expression';
import Money from './Money';

// Sum은 Sum 인스턴스가 어떤 피연산자 2개로 생성된건지 알고 있다.
export default class Sum implements Expression {
  augend: Expression;
  addend: Expression;
  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }
  reduce(bank: Bank, to: string) {
    const amount: number = this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }
  plus(addend: Expression) {
    return null;
  }
}
