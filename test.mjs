import {strict as assert} from 'assert';

import arrIndexesOf from '.';
import test from 'testit';

test('return indexes of the search value', () => {
	assert.deepEqual(arrIndexesOf(['a', 10, 'b', 10, 'c'], 10), [1, 3]);
});

test('support the third `fromIndex` parameter', () => {
	assert.deepEqual(arrIndexesOf(['a', 10, 'b', 10, 'c'], 10, 2), [3]);
});

test('treat negitive `fromIndex` as 0', () => {
	assert.deepEqual(arrIndexesOf(['a', 10, 'b', 10, 'c'], 10, -9999), [1, 3]);
});

test('don\'t mutate the passed array', () => {
	const arg = [1, 2, 3];

	arrIndexesOf(arg, 10, 1);
	assert.deepEqual(arg, [1, 2, 3]);
});

test('throw an error when the first argument is not an array', () => {
	assert.throws(() => arrIndexesOf(1, 'a'), {
		name: 'TypeError',
		message: 'Expected an array, but got 1 (number).'
	});

	assert.throws(() => arrIndexesOf('', 'a'), {
		name: 'TypeError',
		message: 'Expected an array, but got an empty string.'
	});
});

test('throw a type error when the third argument is not a number.', () => {
	assert.throws(() => arrIndexesOf(['a'], 'b', 'c'), {
		name: 'TypeError',
		message: 'Expected an index where to start the searching forwards in the array, but got c (string).'
	});

	assert.throws(() => arrIndexesOf(['a'], 'b', ''), {
		name: 'TypeError',
		message: 'Expected an index where to start the searching forwards in the array, but got an empty string.'
	});
});
