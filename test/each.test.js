const _ = require('../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arr = ['a', 'b', 'c'];
    let count = 0;
    _.each(arr, function(element, index, array) {
      expect(element).toEqual(array[index]);
      count += 1;
    });
    expect(count).toBe(3);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrayLikeObj = {
      length: 3,
      1: 'a',
      2: 'b',
      3: 'c'
    };
    let count = 0;
    _.each(arrayLikeObj, function(element, index, iteratedArrayLikeObj) {
      expect(element).toEqual(iteratedArrayLikeObj[index]);
      count += 1;
    });
    expect(count).toBe(3);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {
      name: 'Calvin',
      age: 6,
      occupation: 'student'
    };
    let count = 0;
    _.each(obj, function(value, key, iteratedObj) {
      expect(value).toEqual(iteratedObj[key]);
      count += 1;
    });
    expect(count).toBe(3);
  });

  // MY TEST
  it('iterates over an empty object, keeping the empty object the same', () => {
    const obj = {};
    let count = 0;
    _.each(obj, function(value, key, iteratedObj) {
      expect(value).toEqual(iteratedObj[key]);
      count += 1;
    });
    expect(count).toBe(0);
  });

  it('iterates an array like object with length but other properties too', () => {
    const obj = {
      length: 5,
      name: 'ruler',
      0: 0,
      1: 1,
      5: '5'
    };
    let count = 0;
    _.each(obj, function(value, key, iteratedObj) {
      expect(value).toEqual(iteratedObj[key]);
      count += 1;
    });
    expect(count).toBe(5);
  });

});

