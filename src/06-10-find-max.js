// Part 6 lesson 10: Find max

// Convert hours to seconds
function convertHoursToSecond(hours) {
	if (hours <= 0) return false;

	const SECOND_PER_HOURS = 3600;
	return hours * SECOND_PER_HOURS;
}

// Given 3 numbers, find max
function findMax(a, b, c) {
	let max = a;

	if (max < b) return (max = b);
	if (max < c) return (max = c);

	return max;
}
console.log(findMax(4, 2, 8));

// Given 3 numbers, find max even number
function findMaxEven(a, b, c) {
	let max = Number.NEGATIVE_INFINITY;

	if (a % 2 === 0 && a > max) max = a;
	if (b % 2 === 0 && b > max) max = b;
	if (c % 2 === 0 && c > max) max = c;

	return max;
}
console.log(findMaxEven(4, 2, 10));
