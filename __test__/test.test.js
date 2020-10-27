import Dollar from '../src/Dollar';
test('test multiplication', () => {
  const fiveInstance = new Dollar(5);
  fiveInstance.times(2);
  expect(fiveInstance.amount).toBe(10);
});
