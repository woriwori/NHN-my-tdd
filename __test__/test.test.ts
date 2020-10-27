import Money from '../src/Money';
import Expression from '../src/Expression';
import Bank from '../src/Bank';
import Sum from '../src/Sum';

test('multiplication', () => {
  const fiveInstance: Money = Money.dollar(5);
  expect(fiveInstance.times(2)).toEqual(Money.dollar(10));
  expect(fiveInstance.times(3)).toEqual(Money.dollar(15));
});

test('Franc multiplication', () => {
  const fiveInstance: Money = Money.franc(5);
  expect(fiveInstance.times(2)).toEqual(Money.franc(10));
  expect(fiveInstance.times(3)).toEqual(Money.franc(15));
});

test('equality', () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
  expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
  expect(Money.dollar(5).equals(Money.franc(5))).toBeFalsy();
});

test('currency', () => {
  expect(Money.dollar(1).currency).toBe('USD');
  expect(Money.franc(1).currency).toBe('CHF');
});

test('simple addition', () => {
  const fiveInstance: Money = Money.dollar(5);
  const sum: Expression = fiveInstance.plus(fiveInstance);
  const bank: Bank = new Bank();
  const reduced: Money = bank.reduce(sum, 'USD');
  expect(reduced).toEqual(Money.dollar(10));
});

test('reduce Sum by Bank', () => {
  const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
  const bank: Bank = new Bank();
  const result: Money = bank.reduce(sum, 'USD');

  expect(Money.dollar(7)).toEqual(result);
});

test('reduce Money by Bank', () => {
  const bank: Bank = new Bank();
  const result: Money = bank.reduce(Money.dollar(1), 'USD');
  expect(Money.dollar(1)).toEqual(result);
});
