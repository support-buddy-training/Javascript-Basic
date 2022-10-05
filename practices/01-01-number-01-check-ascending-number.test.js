import { isIncreasingNumber, isIncreasingNumber2 } from './01-01-number-01-check-ascending-number';

describe('isIncreasingNumber(n)', () => {
	test('should return false when n < 10 or n > 1000000', () => {
		// expect((isIncreasingNumber(0))).toBe(false);
		// expect((isIncreasingNumber(1))).toBe(false);
		// expect((isIncreasingNumber(2))).toBe(false);
		// expect((isIncreasingNumber(3))).toBe(false);
		// expect((isIncreasingNumber(4))).toBe(false);
		// expect((isIncreasingNumber(5))).toBe(false);
		// expect((isIncreasingNumber(6))).toBe(false);
		// expect((isIncreasingNumber(7))).toBe(false);
		// expect((isIncreasingNumber(8))).toBe(false);
		// expect((isIncreasingNumber(9))).toBe(false);

		Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
			expect(isIncreasingNumber(x)).toBe(false);
		});

		[1000001].forEach((x) => {
			expect(isIncreasingNumber(x)).toBe(false);
		});
	});

	test('should return false when n is not a increasing number', () => {
		[22, 333, 4444, 55555, 666666, 21, 102, 1023, 10234, 102345, 543210].forEach((x) => {
			expect(isIncreasingNumber(x)).toBe(false);
		});
	});

	test('should return true when n is a increasing number', () => {
		[12, 123, 1234, 12345, 123456].forEach((x) => {
			expect(isIncreasingNumber(x)).toBe(true);
		});
	});
});

describe('isIncreasingNumber2(n)', () => {
	test('should return false when n < 10 or n > 1000000', () => {
		// expect((isIncreasingNumber2(0))).toBe(false);
		// expect((isIncreasingNumber2(1))).toBe(false);
		// expect((isIncreasingNumber2(2))).toBe(false);
		// expect((isIncreasingNumber2(3))).toBe(false);
		// expect((isIncreasingNumber2(4))).toBe(false);
		// expect((isIncreasingNumber2(5))).toBe(false);
		// expect((isIncreasingNumber2(6))).toBe(false);
		// expect((isIncreasingNumber2(7))).toBe(false);
		// expect((isIncreasingNumber2(8))).toBe(false);
		// expect((isIncreasingNumber2(9))).toBe(false);

		Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
			expect(isIncreasingNumber2(x)).toBe(false);
		});

		[1000001].forEach((x) => {
			expect(isIncreasingNumber2(x)).toBe(false);
		});
	});

	test('should return false when n is not a increasing number', () => {
		[22, 333, 4444, 55555, 666666, 21, 102, 1023, 10234, 102345].forEach((x) => {
			expect(isIncreasingNumber2(x)).toBe(false);
		});
	});

	test('should return true when n is a increasing number', () => {
		[12, 123, 1234, 12345, 123456].forEach((x) => {
			expect(isIncreasingNumber2(x)).toBe(true);
		});
	});
});
