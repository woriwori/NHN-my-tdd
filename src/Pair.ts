export default class Pair {
  private from: string;
  private to: string;
  public key: string;
  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
    this.key = from + to;
  }
  equals(object: object): boolean {
    const pair: Pair = object as Pair;
    return this.from === pair.from && this.to === pair.to;
  }
  hashCode(): number {
    return 0;
  }
}
