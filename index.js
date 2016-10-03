'use strict';

/*!
 * arr-indexes-of | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/arr-indexes-of
*/
function arrIndexesOf(arr, searchValue, fromIndex) {
  if (!Array.isArray(arr)) {
    throw new TypeError(
      'Expected an array, but got ' +
      (arr === '' ? 'an empty string' : String(arr) + ' (' + typeof arr + ')') +
      '.'
    );
  }

  if (fromIndex !== undefined) {
    if (typeof fromIndex !== 'number') {
      throw new TypeError(
        'Expected an index where to start the searching forwards in the array, but got ' +
        (fromIndex === '' ? 'an empty string' : String(fromIndex) + ' (' + typeof fromIndex + ')') +
        '.'
      );
    }

    if (fromIndex < 0) {
      fromIndex = 0;
    }
  } else {
    fromIndex = 0;
  }

  return arr.slice(fromIndex).reduce(function(results, current, index) {
    if (current === searchValue) {
      results.push(fromIndex + index);
    }

    return results;
  }, []);
}

module.exports = arrIndexesOf;
