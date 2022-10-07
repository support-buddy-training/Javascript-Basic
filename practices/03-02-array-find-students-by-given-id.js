// Part 11 lesson 6: Exercise 04: Find students by given id

// find index
// for...i
// export function findIndexStudentById(studentList, id) {
// 	if (!Array.isArray(studentList) || studentList.length === 0) return -1;

// 	for (let i = 0; i < studentList.length; i++) {
// 		const student = studentList[i];
// 		if (student.id === id) return i;
// 	}

// 	return -1;
// }

// findIndex
export function findIndexStudentById(studentList, id) {
	if (!Array.isArray(studentList) || studentList.length === 0) return -1;

	return studentList.findIndex((student) => student.id === id);
}
