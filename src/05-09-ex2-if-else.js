// Part 5 lesson 9: Excercise if...else 2
// Write a function to classify student
// Receive mark as a number, output as below:
// mark >= 8       -> 'Excellence'
// 7 <= mark <= 8  -> 'Good'
// 4 <= mark <= 6  -> 'Not Good'
// mark < 4        -> 'Bad'

// version 1: guards
function classifyStudent(mark) {
	// validate arguments
	// mark should be in range of [0, 10]
	if (mark < 0 || mark > 10) return 'Invalid mark!';

	let result;

	// checking...
	if (mark > 8) result = 'Excellence';
	else if (mark >= 7) result = 'Good';
	else if (mark >= 4) result = 'Not Good';
	else result = 'Bad';

	return result;
}
console.log(classifyStudent(12));
console.log(classifyStudent(7));
console.log(classifyStudent(3));
console.log(classifyStudent(6));

// version 2
function classifyStudent(mark) {
	// validate arguments
	// mark should be in range of [0, 10]
	if (mark < 0 || mark > 10) return 'Invalid mark!';

	let result = 'Bad';

	// checking...
	if (mark > 8) result = 'Excellence';
	else if (mark >= 7) result = 'Good';
	else if (mark >= 4) result = 'Not Good';

	return result;
}
console.log(classifyStudent(9));
console.log(classifyStudent(7));
console.log(classifyStudent(3));
console.log(classifyStudent(6));

// version 3 use if...return
function classifyStudent(mark) {
	// validate arguments
	// mark should be in range of [0, 10]
	if (mark < 0 || mark > 10) return 'Invalid mark!';

	if (mark > 8) return 'Excellence';
	if (mark >= 7) return 'Good';
	if (mark >= 4) return 'Not Good';

	return 'Bad';
}
console.log(classifyStudent(12));
console.log(classifyStudent(9));
console.log(classifyStudent(7));
console.log(classifyStudent(3));
console.log(classifyStudent(6));
