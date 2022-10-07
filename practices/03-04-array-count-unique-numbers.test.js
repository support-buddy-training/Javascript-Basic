import { countUniqueNumbers } from './03-04-array-count-unique-numbers';

describe('countUniqueNumbers(numberList)', () => {
	test('should return 0 for empty array', () => {
		expect(countUniqueNumbers([])).toBe(0);
		expect(countUniqueNumbers({})).toBe(0);
		expect(countUniqueNumbers()).toBe(0);
		expect(countUniqueNumbers('')).toBe(0);
		expect(countUniqueNumbers(true)).toBe(0);
		expect(countUniqueNumbers(123)).toBe(0);
	});

	test('should return length if list is unique', () => {
		expect(countUniqueNumbers([1])).toBe(1);
		expect(countUniqueNumbers([0, 1, 2])).toBe(3);
		expect(countUniqueNumbers([0, 2, 1, 3, 4, 5, 6])).toBe(7);
	});

	test('should return correct count unique number', () => {
		expect(countUniqueNumbers([1, 1, 1, 2, 2, 2])).toBe(2);
		expect(countUniqueNumbers([0, 1, 1, 3, 4, 4, 5, 6, 1])).toBe(6);
	});
});
