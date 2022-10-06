import { findAllPositiveEvenSubArr } from './03-06-array-subar-sub-arrays-has-consecutive-even-positive-numbers';

describe('findAllPositiveEvenSubArr(numberList)', () => {
	test('should return empty if empty array', () => {
		expect(findAllPositiveEvenSubArr([])).toEqual([]);
		expect(findAllPositiveEvenSubArr({})).toEqual([]);
		expect(findAllPositiveEvenSubArr('')).toEqual([]);
		expect(findAllPositiveEvenSubArr(true)).toEqual([]);
		expect(findAllPositiveEvenSubArr(123)).toEqual([]);
	});

	test('should return empty if the array has no even numbers', () => {
		expect(findAllPositiveEvenSubArr([1, 3, 5, 1, 3, 5, 7, 9])).toEqual([]);
	});

	test('should return correct sub-array list if has even sub-array', () => {
		expect(findAllPositiveEvenSubArr([1, 2, 4, 5, 6, 8, 0])).toEqual([
			[2, 4],
			[6, 8, 0],
		]);
	});
});
