import { filterFirstNumberIsOdd } from './03-03-array-filter-all-numbers-have-first-digit-is-odd';

describe('filterFirstNumberIsOdd(numberList)', () => {
	test('should return empty array for array is empty', () => {
		expect(filterFirstNumberIsOdd([])).toEqual([]);
		expect(filterFirstNumberIsOdd({})).toEqual([]);
		expect(filterFirstNumberIsOdd()).toEqual([]);
		expect(filterFirstNumberIsOdd('')).toEqual([]);
		expect(filterFirstNumberIsOdd(true)).toEqual([]);
		expect(filterFirstNumberIsOdd(false)).toEqual([]);
	});

	test("should return empty array when list hasn't number starting with odd digit", () => {
		expect(filterFirstNumberIsOdd([-2, 2134, 23445, -865644])).toEqual([]);
	});

	test('should return correct array when list has number starting odd digit', () => {
		// expect(filterFirstNumberIsOdd([2, 8, 134, 3445, -5644])).toEqual([134, 3445, -5644]);
		// expect(filterFirstNumberIsOdd([2, 8, 134, 3445, -5644]).equals([134, 3445, -5644])).toBe(
		// 	true
		// );
		// expect(received).toEqual(expected) --> expect(received.title).toEqual(expected.title) de chuyen thanh so sanh hai title voi nhau
		expect(filterFirstNumberIsOdd([2, 42, 123, -56, 789012]).title).toEqual(
			[123, -56, 789012].title
		);

		// expect(filterFirstNumberIsOdd([2, 42, 123, -56, 789012]).equals([123, -56, 789012])).toBe(
		// 	true
		// );
	});
});
