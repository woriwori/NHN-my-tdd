import Money from '../src/Money';

test('test multiplication', () => {
  const fiveInstance = Money.dollar(5);
  expect(fiveInstance.times(2)).toEqual(Money.dollar(10));
  expect(fiveInstance.times(3)).toEqual(Money.dollar(15));
});

test('test Franc multiplication', () => {
  const fiveInstance = Money.franc(5);
  expect(fiveInstance.times(2)).toEqual(Money.franc(10));
  expect(fiveInstance.times(3)).toEqual(Money.franc(15));
});

test('test equality', () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
  expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
  expect(Money.dollar(5).equals(Money.franc(5))).toBeFalsy();
});

test('test currency', () => {
  expect(Money.dollar(1).currency).toBe('USD');
  expect(Money.franc(1).currency).toBe('CHF');
});
