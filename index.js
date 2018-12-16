'use strict';

var appendType = require('append-type');

/*!
 * arr-indexes-of | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/arr-indexes-of
*/

module.exports = function arrIndexesOf(arr, searchValue, fromIndex) {
	if (!Array.isArray(arr)) {
		throw new TypeError('Expected an array, but got ' +
      (arr === '' ? 'an empty string' : appendType(arr)) +
      '.');
	}

	if (fromIndex !== undefined) {
		if (typeof fromIndex !== 'number') {
			throw new TypeError('Expected an index where to start the searching forwards in the array, but got ' +
        (fromIndex === '' ? 'an empty string' : appendType(fromIndex)) +
        '.');
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
