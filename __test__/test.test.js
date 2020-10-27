import Dollar from '../src/Dollar';

test('test multiplication', () => {
  const fiveInstance = new Dollar(5);
  let productInstance = fiveInstance.times(2);
  expect(productInstance.amount).toBe(10);
  productInstance = fiveInstance.times(3);
  expect(productInstance.amount).toBe(15);
});
test('test equality', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
});
