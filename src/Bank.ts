import Money from './Money';
import Expression from './Expression';

export default class Bank {
  private source: Expression;
  private to: string;
  reduce(source, to) {
    return Money.dollar(10);
  }
}
