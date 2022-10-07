import { checkIfAllEvenV1, checkIfAllEvenV2 } from './10-06-unit-test-for-checkIfAllEven';

describe('checkIfAllEvenV1', () => {
	test('should return false when not an array', () => {
		expect(checkIfAllEvenV1(1)).toBe(false);
		expect(checkIfAllEvenV1({})).toBe(false);
		expect(checkIfAllEvenV1('')).toBe(false);
		expect(checkIfAllEvenV1(null)).toBe(false);
		expect(checkIfAllEvenV1(undefined)).toBe(false);
	});

	test('should return false when array is empty', () => {
		expect(checkIfAllEvenV1([])).toBe(false);
	});

	test('should return false when array has no even number', () => {
		expect(checkIfAllEvenV1([1, 3, 5, 7])).toBe(false);
	});

	test('should return false when array has some even number', () => {
		expect(checkIfAllEvenV1([1, 4, 6, 7])).toBe(false);
	});

	test('should return true when array has all even number', () => {
		expect(checkIfAllEvenV1([0, 2, 4, 6])).toBe(true);
	});
});

describe('checkIfAllEvenV2', () => {
	test('should return false when not an array', () => {
		expect(checkIfAllEvenV2(1)).toBe(false);
		expect(checkIfAllEvenV2({})).toBe(false);
		expect(checkIfAllEvenV2('')).toBe(false);
		expect(checkIfAllEvenV2(null)).toBe(false);
		expect(checkIfAllEvenV2(undefined)).toBe(false);
	});

	test('should return false when array is empty', () => {
		expect(checkIfAllEvenV2([])).toBe(false);
	});

	test('should return false when array has no even number', () => {
		expect(checkIfAllEvenV2([1, 3, 5, 7])).toBe(false);
	});

	test('should return false when array has some even number', () => {
		expect(checkIfAllEvenV2([1, 4, 6, 7])).toBe(false);
	});

	test('should return true when array has all even number', () => {
		expect(checkIfAllEvenV2([0, 2, 4, 6])).toBe(true);
	});
});
