const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  // MY TEST
  it('returns true if one elements in object is a number', () => {
      const nums = {
        'name': 'foo', 
        'number': 7, 
        'array': [1, 2, 3]
      };
      expect(_.some(nums, el => !isNaN(el))).toBe(true);
    });

});