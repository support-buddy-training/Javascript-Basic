// Part 9 lesson 16: Aarray Exercise 2: Find max
// Write function to find max

// for..i
function findMaxI(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

	// linh canh
	let max = numberList[0];
	for (let i = 0; i < numberList.length; i++) {
		if (numberList[i] > max) {
			max = numberList[i];
		}
	}

	return max;
}
console.log(findMaxI([2, 3, 5, 1, 2, 6, 11]));

// forEach
function findMaxEach(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

	// linh canh
	let max = numberList[0];
	numberList.forEach((number) => {
		if (number > max) {
			max = number;
		}
	});

	return max;
}
console.log(findMaxEach([2, 3, 5, 1, 2, 6, 11]));

//reduce version 1
function findMaxReduce(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

	return numberList.reduce((max, number) => {
		if (number > max) return number;
		return max;
	});
}
console.log(findMaxReduce([2, 3, 5, 1, 2, 6, 11]));

//reduce version 2: Use the trinity operator
function findMaxReduce(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

	return numberList.reduce((max, number) => {
		return number > max ? number : max;
	});
}
console.log(findMaxReduce([2, 3, 5, 1, 2, 6, 11]));

//reduce version 3: Use the trinity operator and shorthand
function findMaxReduce(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

	return numberList.reduce((max, number) => (number > max ? number : max));
}
console.log(findMaxReduce([2, 3, 5, 1, 2, 6, 11]));
