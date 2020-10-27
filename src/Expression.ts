import Bank from './Bank';
import Money from './Money';

export default interface Expression {
  reduce(bank: Bank, to: String): Money;
  plus(addend: Expression): Expression;
  times(multiplier: number): Expression;
}
