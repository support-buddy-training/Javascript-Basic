import { findMostFrequentNumber } from './04-01-logic-find-the-number-that-appears-the-most';

describe('findMostFrequentNumber(numberList)', () => {
	test('should return empty if empty array', () => {
		expect(findMostFrequentNumber([])).toBeUndefined();
		expect(findMostFrequentNumber({})).toBeUndefined();
	});

	test('should return correct frequent number', () => {
		expect(findMostFrequentNumber([1])).toBe(1);
		expect(findMostFrequentNumber([1, 2, 1, 2])).toBe(1);
		expect(findMostFrequentNumber([1, 2, 1, 2, 1])).toBe(1);
	});
});
