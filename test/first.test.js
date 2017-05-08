const _ = require('../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first(['a', 'b', 'c'])).toEqual('a');
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  // MY TEST
  it('returns an empty array if you ask for 0 elements', () => {
    expect(_.first(['a', 'b', 'c'], 0)).toEqual([]);
  });
  
  it('returns the whole array if you ask for the same amount of elements the array has', () => {
    expect(_.first(['a', 'b', 'c'], 3)).toEqual(['a', 'b', 'c']);
  });

});