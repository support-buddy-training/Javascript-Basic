// Part 8 lesson 5: Object familiarization exercises

// Create an object student which name is Easy FrontEnd and age in 18
const student = {};
student.name = 'Easy FrontEnd';
student.age = 18;
console.log(student);

const student = {
	name: 'Easy FrontEnd',
	name: 'Hello Word',
	age: 18,
};

// Check if an object is empty (mean have no key)
function isEmpty(obj) {
	return Object.keys(obj).length === 0;
}
console.log(isEmpty({}));
console.log(isEmpty({ id: 1 }));

// let data = null;
// data = { id: 1 };
// data && data.id;
// data?.id;

// Get average mark of an object
// calcAvgMark({math: 10, english: 8}) -> 9
function calcAvgMark(mark) {
	if (!mark) return -1;

	// avg = sum/length
	const length = Object.keys(mark).length;
	let sum = 0;

	for (const key in mark) {
		const value = mark[key];
		sum += value;
	}

	return (sum / length).toFixed(1);
}
console.log(calcAvgMark({ math: 10, english: 8 }));
