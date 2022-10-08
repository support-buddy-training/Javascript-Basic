// Create set
// const set = new Set();
// // Set(0) {}

// const set2 = new Set([1, 1, 1, 2, 2, 3, 3, 3]);
// // Set(3) {1, 2, 3}

// const set3 = new Set([abcdabcdabcd]);
// // Set(4) {'a', 'b', 'c', 'd'}\

// const set4 = new Set(new Set([1, 2, 3]));
// // Set(3) {1, 2, 3}

// Add/delete
// const set = new Set();
// set.size; // 0

// set.add(1);
// set.add(2);
// set.size; // 2
// console.log(set); // Set(2) { 1, 2 }

// console.log(set.has(1)); // true
// set.has(2); // true
// set.has(3); // false

// set.delete(1); // true
// console.log(set); // Set(1) { 2 }
// set.delete(3); // false

// set.clear();
// set.size; // 0
// console.log(set); // Set(0) {}

// Loop through set
// const numberSet = new Set([1, 2, 3, 3]);

// for (const number of numberSet) {
// 	console.log(number); // 1
// 	//                      2
// 	//                      3
// }

// numberSet.forEach((number) => console.log(number));

// demo
// [1, 1, 2, 2] --> [1, 2]
function uniqueNumbers(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) return [];

	const uniqueNumberSet = new Set(numberList);
	// return Array.from(uniqueNumberSet);
	return [...uniqueNumberSet];
}

console.log(uniqueNumbers([1, 1, 2, 2, 1, 3, 1]));

function uniqueLetters(str) {
	if (str.length === 0) return '';

	const uniqueLettersSet = new Set(str);
	return [...uniqueLettersSet].join('');
}
console.log(uniqueLetters('Abacadsbwbaaaa'));

function getIntersectionSet(set1, set2) {
	const intersectionSet = new Set();

	for (const item of set1) {
		if (set2.has(item)) intersectionSet.add(item);
	}

	return intersectionSet;
}
const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2, 3, 4, 5]);
console.log(getIntersectionSet(set1, set2));
