import Dollar from '../src/Dollar';
import Franc from '../src/Franc';

test('test multiplication', () => {
  const fiveInstance = new Dollar(5);
  expect(fiveInstance.times(2)).toEqual(new Dollar(10));
  expect(fiveInstance.times(3)).toEqual(new Dollar(15));
});

test('test Franc multiplication', () => {
  const fiveInstance = new Franc(5);
  expect(fiveInstance.times(2)).toEqual(new Franc(10));
  expect(fiveInstance.times(3)).toEqual(new Franc(15));
});

test('test equality', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
  expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
});
