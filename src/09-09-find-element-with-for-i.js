// Part 9 lesson 9: Find Element With for...i

// find(callbackFn)
// find(x => x > 0)

// find() version 1
function findFistEven(numberList) {
	if (!Array.isArray(numberList)) return -1;

	let firstEven;

	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];
		if (number % 2 == 0) {
			firstEven = number;
			break;
		}
	}

	return firstEven;
}
console.log(findFistEven([1, 3, 4]));

// find() version 2
function findFistEven(numberList) {
	if (!Array.isArray(numberList)) return -1;

	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];
		if (number % 2 == 0) return number;
	}

	return undefined;
}
console.log(findFistEven([1, 3, 4]));

// find(callbackFn)
function findFistEven(numberList, callbackFn) {
	if (!Array.isArray(numberList)) return -1;

	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];
		if (callbackFn(number, i)) return number;
	}

	return undefined;
}

function isEven(number) {
	return number % 2 === 0;
}

console.log(findFistEven([1, 3, 4], isEven));
console.log(findFistEven([1, 3, 4], isEven));

// find(callbackFn) version 2
function findFistEven(numberList, callbackFn) {
	if (!Array.isArray(numberList)) return -1;

	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];
		if (callbackFn(number, i)) return number;
	}

	return undefined;
}

// function isEven(number) {
// 	return number % 2 === 0;
// }

// Inline function / anonymous function (no name function)
console.log(
	findFistEven([1, 3, 4], function (number) {
		return number % 2 === 0;
	})
);

// arrow function
console.log(
	findFistEven([1, 3, 4], (number) => {
		return number % 2 === 0;
	})
);

// arrow function shorthand
console.log(findFistEven([1, 3, 4], (number) => number % 2 === 0));
console.log(findFistEven([1, 3, 4], (number) => number > 0));
