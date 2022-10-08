// Part 9 lesson 12: Array sorting

// Example 1
const numberList = [2, 1, 3, 5, 0];
numberList.sort();
console.log(numberList); // [ 0, 1, 2, 3, 5 ]

console.log([null, 2, 0, 6, 1, undefined, null, undefined].sort()); // [ 0, 1, 2, 6, null, null, undefined, undefined ]

// Example 2
function compareFn(a, b) {
	if (a > b) return 1;
	if (a === b) return 0;
	return -1;
}
console.log([7, 6, 5, 4].sort(compareFn)); // [ 4, 5, 6, 7 ]

// Example 2 version 2
function compareFn(a, b) {
	return a - b;
}
console.log([7, 6, 5, 4].sort(compareFn)); // [ 4, 5, 6, 7 ]

// Example 2 version 3
function compareFn(a, b) {
	return a - b;
}
console.log([7, 6, 5, 4].sort((a, b) => a - b)); // [ 4, 5, 6, 7 ]
