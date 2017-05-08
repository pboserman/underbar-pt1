const _ = require('../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc + num, 0);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });

  // MY TEST
  it('reduces an array of 1 element to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [4];
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(4);
  });

  it('reduces an array of 1 element to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [4];
    const result = _.reduce(nums, (a, b) => a + b, 4);
    expect(result).toEqual(8);
  });

});