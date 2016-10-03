'use strict';

const arrIndexesOf = require('.');
const test = require('tape');

test('arrIndexesOf()', t => {
  t.deepEqual(
    arrIndexesOf(['a', 10, 'b', 10, 'c'], 10),
    [1, 3],
    'should return indexes of the search value.'
  );

  t.deepEqual(
    arrIndexesOf(['a', 10, 'b', 10, 'c'], 10, 2),
    [3],
    'should support the third `fromIndex` parameter.'
  );

  t.deepEqual(
    arrIndexesOf(['a', 10, 'b', 10, 'c'], 10, -9999),
    [1, 3],
    'should treat negitive `fromIndex` as 0.'
  );

  const arg = [1, 2, 3];
  arrIndexesOf(arg, 10, 1);

  t.deepEqual(
    arg,
    [1, 2, 3],
    'should not mutate the passed array.'
  );

  t.throws(
    () => arrIndexesOf(1, 'a'),
    /^TypeError.*Expected an array, but got 1 \(number\)\./,
    'should throw a type error when the first argument is not an array.'
  );

  t.throws(
    () => arrIndexesOf('', 'a'),
    /^TypeError.*Expected an array, but got an empty string\./,
    'should throw a type error when the first argument is an empty string.'
  );

  t.throws(
    () => arrIndexesOf(['a'], 'b', 'c'),
    /^TypeError.*Expected an index where to start the searching forwards in the array, but got c \(string\)\./,
    'should throw a type error when the third argument is not a number.'
  );

  t.throws(
    () => arrIndexesOf(['a'], 'b', ''),
    /^TypeError.*Expected an index where to start the searching forwards in the array, but got an empty string\./,
    'should throw a type error when the third argument is an empty string.'
  );

  t.end();
});
