// Part 13 lesson 5: Array.prototype.sort()

const studentList = [
	{ id: 1, name: 'Alice', mark: { math: 9, english: 10 } },
	{ id: 3, name: 'Bod', mark: { math: 5, english: 10 } },
	{ id: 2, name: 'John', mark: { math: 10, english: 10 } },
];

function sortById(studentList) {
	if (!Array.isArray(studentList) || studentList.length === 0) return [];

	return studentList.sort((s1, s2) => s1.id - s2.id);
	// 	return studentList.sort((s1, s2) => {
	// 		// return > 0, s1 after s2
	// 		// return < 0, s1 before s2
	// 		// return = 0

	// 		// tang dan
	// 		return s1.id - s2.id;
	// 		// giam dan
	// 		// return s2.id - s1.id;
	// 	});
}

console.log('sortById: ', sortById(studentList));

function sortByName(studentList) {
	if (!Array.isArray(studentList) || studentList.length === 0) return [];

	return studentList.sort((s1, s2) => {
		// tang dan
		// if (s1.name > s2.name) return 1;
		// if (s1.name < s2.name) return -1;
		// return 0;

		// giam dan
		if (s1.name > s2.name) return -1;
		if (s1.name < s2.name) return 1;
		return 0;
	});
}

console.log(sortByName(studentList));

function sortByAvg(studentList) {
	if (!Array.isArray(studentList) || studentList.length === 0) return [];

	return studentList.sort((s1, s2) => {
		const s1Avg = (s1.mark.math + s1.mark.english) / 2;
		const s2Avg = (s2.mark.math + s2.mark.english) / 2;

		// tang dan
		// return s1Avg - s2Avg;

		// giam dan
		return s2Avg - s1Avg;
	});
}

console.log(sortByAvg(studentList));
