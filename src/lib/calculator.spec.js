const { sum } = require('./calcuator');

it('sum 2 and 2 and the result must e 4', () => {
  expect(sum(2, 2)).toBe(4);
});

it('sum 2 and 2 even if one of them is a string and the result must e 4', () => {
  expect(sum('2', '2')).toBe(4);
});

it('should throw an error if what is provided to the method cannot e summed', () => {
  expect(() => {
    sum('', '2');
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();

  expect(() => {
    sum({});
  }).toThrowError();

  expect(() => {
    sum();
  }).toThrowError();
});
