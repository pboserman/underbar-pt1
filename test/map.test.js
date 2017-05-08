_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  // MY TEST
  it('maps elements in an object and return the same elements in array form', () => {
    const obj = {
      0: 'foo', 
      1: 1, 
      2: [1, 2, 3]
    };
    const mappedArr = _.map(obj, (el) => el);
    expect(mappedArr).toEqual(['foo', 1, [1, 2, 3]]);
  });
});