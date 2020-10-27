import Money from './Money';
import Expression from './Expression';
import Sum from './Sum';

// source가 갖고 있는 Money를 통화(to)에 맞게 변경
export default class Bank {
  reduce(source: Expression, to: string) {
    return source.reduce(to);
  }
}
