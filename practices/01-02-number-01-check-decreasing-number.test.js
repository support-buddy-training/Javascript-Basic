import { isDecreasingNumber, isDecreasingNumber2 } from './01-02-number-01-check-decreasing-number';

describe('isDecreasingNumber(n)', () => {
	test('should retun false if n < 10 or n > 1000000', () => {
		Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
			expect(isDecreasingNumber(x)).toBe(false);
		});

		[1000001, 1000002].forEach((x) => {
			expect(isDecreasingNumber(x)).toBe(false);
		});
	});

	// test('should retun false if n is not a descreasing number', () => {
	// 	[22, 333, 4444, 55555, 666666, 21, 102, 1023, 10234, 102345].forEach((x) => {
	// 		expect(isDecreasingNumber(x)).toBe(false);
	// 	});
	// });

	test('should return false when n is not a increasing number', () => {
		[22, 333, 4444, 55555, 666666, 12, 102, 1023, 10234, 102345, 123456].forEach((x) => {
			expect(isDecreasingNumber(x)).not.toBe(true);
		});
	});

	test('should retun true if is a descreasing number', () => {
		[21, 321, 4321, 54321, 654321].forEach((x) => {
			expect(isDecreasingNumber(x)).not.toBe(false);
		});
	});
});

describe('isDecreasingNumber2(n)', () => {
	test('should retun false if n < 10 or n > 1000000', () => {
		Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
			expect(isDecreasingNumber2(x)).toBe(false);
		});

		[1000001, 1000002].forEach((x) => {
			expect(isDecreasingNumber2(x)).toBe(false);
		});
	});

	// test('should retun false if n is not a descreasing number', () => {
	// 	[22, 333, 4444, 55555, 666666, 21, 102, 1023, 10234, 102345].forEach((x) => {
	// 		expect(isDecreasingNumber2(x)).toBe(false);
	// 	});
	// });

	// test('should retun false if n is not a descreasing number', () => {
	// 	[22, 333, 4444, 55555, 666666, 21, 102, 1023, 10234, 102345].forEach((x) => {
	// 		expect(isDecreasingNumber2(x)).not.toBe(true);
	// 	});
	// });

	test('should return false when n is not a increasing number', () => {
		[22, 333, 4444, 55555, 666666, 12, 102, 1023, 10234, 102345, 123456].forEach((x) => {
			// expect(Object.is(isDecreasingNumber2(x), false)).toBe(false);
			// expect(isDecreasingNumber2(x)).toEqual(false);
		});
	});

	test('should retun true if is a descreasing number', () => {
		// [21, 321, 4321, 54321, 654321].forEach((x) => {
		// 	expect(isDecreasingNumber2(x)).not.toBe(false);
		// });

		// Dung toEqual cho array va object
		[21, 321, 4321, 54321, 654321].forEach((x) => {
			expect(isDecreasingNumber2(x)).toEqual(true);
		});
	});
});
