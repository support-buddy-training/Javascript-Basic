// Part 11 lesson 5: Exercise 03: Check has a female student named Alice

// Chia de tri: Chia bai toan phuc tap thanh nhieu ham, moi ham giai quyet mot van de don gian nao do
function isAlice(student) {
	return student.name.toLowerCase() === 'alice' && student.gender === 'female';
}

// for...i: gap truong hop thoa dieu kien thi thoat vong lap (break)
// export function hasAlice(studentList) {
// 	if (!Array.isArray(studentList) || studentList.length === 0) return false;

// 	for (let i = 0; i < studentList.length; i++) {
// 		const student = studentList[i];
// 		// console.log(student);
// 		if (isAlice(student)) return true;
// 	}

// 	return false;
// }

// forEach: khong the thoat vong lap giua chung duoc ma phai chay den het --> dung flag de khac phuc
// export function hasAlice(studentList) {
// 	if (!Array.isArray(studentList) || studentList.length === 0) return false;

// 	// khong dat flag thi bi loi
// 	// studentList.forEach((student) => {
// 	// 	// console.log(student);
// 	// 	if (isAlice(student)) {
// 	// 		// console.log('found alice');
// 	// 		return true;
// 	// 	}
// 	// });

// 	let hasAliceflag = false;
// 	studentList.forEach((student) => {
// 		if (isAlice(student)) {
// 			hasAliceflag = true;
// 			// console.log(hasAliceflag);
// 		}
// 	});

// 	return hasAliceflag;
// }

// find
// export function hasAlice(studentList) {
// 	if (!Array.isArray(studentList) || studentList.length === 0) return false;

// 	// return !!studentList.find((student) => isAlice(student));
// 	// return Boolean(studentList.find((student) => isAlice(student)));
// 	return Boolean(studentList.find(isAlice));
// }

// // find index (recommended)
export function hasAlice(studentList) {
	if (!Array.isArray(studentList) || studentList.length === 0) return false;

	return studentList.findIndex(isAlice) >= 0;
}

// filter
// export function hasAlice(studentList) {
// 	if (!Array.isArray(studentList) || studentList.length === 0) return false;

// 	return studentList.filter(isAlice).length > 0;
// }

// const studentList = [
// 	{ id: 1, name: 'Jame', gender: 'male' },
// 	{ id: 2, name: 'Alice', gender: 'female' },
// 	{ id: 3, name: 'Alice', gender: 'female' },
// ];
// hasAlice(studentList);
