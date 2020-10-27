import Expression from './Expression';
import Pair from './Pair';

// source가 갖고 있는 Money를 통화(to)에 맞게 변경
export default class Bank {
  private rates: Map<string, number> = new Map();

  reduce(source: Expression, to: string) {
    return source.reduce(this, to);
  }
  rate(from: string, to: string) {
    if (from === to) return 1;
    return this.rates.get(new Pair(from, to).key);
  }
  addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to).key, rate);
  }
}
