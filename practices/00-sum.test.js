// // Bài 1: Tính S(n) = 1 + 2 + 3 + … + n
// // function calcS(n) {}
// // n <= 0 -> 0
// // n > 0 -> sum
// // n = 1 -> 1
// // n = 2 -> 3
// // n = 3 -> 6
import { calcS, calcSv2 } from './00-sum';

describe('S(n) = 1 + 2 + 3 + … + n', () => {
	test('should return 0 if n <=0', () => {
		expect(calcS(-1)).toBe(0);
		expect(calcS(0)).toBe(0);
	});

	test('should return sum if n > 0 ', () => {
		expect(calcS(1)).toBe(1);
		expect(calcS(2)).toBe(3);
		expect(calcS(3)).toBe(6);
		expect(calcS(10)).toBe(55);
	});
});

describe('S(n) = n * (n + 1) / 2', () => {
	test('should return 0 if n <=0', () => {
		expect(calcSv2(-1)).toBe(0);
		expect(calcSv2(0)).toBe(0);
	});

	test('should return sum if n > 0 ', () => {
		expect(calcSv2(1)).toBe(1);
		expect(calcSv2(2)).toBe(3);
		expect(calcSv2(3)).toBe(6);
		expect(calcSv2(10)).toBe(55);
	});
});
