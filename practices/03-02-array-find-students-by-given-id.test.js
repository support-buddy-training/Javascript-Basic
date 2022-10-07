import { findIndexStudentById } from './03-02-array-find-students-by-given-id';

describe('findIndexStudentById(studentList, id)', () => {
	test('should return -1 when list is empty', () => {
		expect(findIndexStudentById([], -1)).toBe(-1);
		expect(findIndexStudentById([], 0)).toBe(-1);
		expect(findIndexStudentById([], 1)).toBe(-1);
		expect(findIndexStudentById([], 2)).toBe(-1);
		expect(findIndexStudentById([], 3)).toBe(-1);
	});

	test("should return -1 when list doesn't has target id", () => {
		const studentList = [
			{ id: 1, name: 'Hello' },
			{ id: 2, name: 'My' },
			{ id: 3, name: 'Friend' },
		];
		expect(findIndexStudentById(studentList, 0)).toBe(-1);
		expect(findIndexStudentById(studentList, 4)).toBe(-1);
	});

	test('should return correct index when list has target id', () => {
		const studentList = [
			{ id: 1, name: 'Hello' },
			{ id: 2, name: 'My' },
			{ id: 3, name: 'Friend' },
		];
		expect(findIndexStudentById(studentList, 1)).toBe(0);
		expect(findIndexStudentById(studentList, 2)).toBe(1);
		expect(findIndexStudentById(studentList, 3)).toBe(2);
	});
});
