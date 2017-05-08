const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  // MY TEST
  it('returns same list in a list of numbers of which there are no duplicates', () => {
    const nums = [2, 4, 5, 7, 10];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups an object with repeated values in different keys', () => {
    const obj = {
      'name': 'foo',
      'name2': 'foo',
      'num1': 5,
      'num2': 5
    };
    expect(_.uniq(obj)).toEqual(['foo', 5]);
  });

});