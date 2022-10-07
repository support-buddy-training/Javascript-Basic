import { hasAlice } from './03-01-array-check-has-female-student-name-Alice';

describe('hasAlice(n)', () => {
	test('should return false for empty array ', () => {
		expect(hasAlice([])).toBe(false);
	});

	test("should return false for array doesn't has female student named Alice", () => {
		const studentList = [
			{ id: 1, name: 'Jame', gender: 'male' },
			{ id: 2, name: 'Alice', gender: 'male' },
		];
		expect(hasAlice(studentList)).toBe(false);
	});

	test('should return true for array has female student named Alice', () => {
		const studentList = [
			{ id: 1, name: 'Jame', gender: 'male' },
			{ id: 2, name: 'Alice', gender: 'female' },
		];
		expect(hasAlice(studentList)).toBe(true);
	});
});
