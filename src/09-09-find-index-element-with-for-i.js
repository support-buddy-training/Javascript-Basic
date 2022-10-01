// // Part 9 lesson 9: Find Index Element With for...i
// version 1
function findIndexFirstEven(numberList) {
	if (!Array.isArray(numberList)) return false;

	let firstIndexEven;

	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];
		if (number % 2 === 0) {
			firstIndexEven = i;
			break;
		}
	}

	return firstIndexEven;
}
console.log(findIndexFirstEven([9, 1, 4]));

// version 2
function findIndexFirstEven(numberList) {
	if (!Array.isArray(numberList)) return false;

	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];
		if (number % 2 === 0) return i;
	}

	return undefined;
}
console.log(findIndexFirstEven([9, 1, 4]));

// version 3: findIndex Callback
function findIndexFirstEven(numberList, callbackFn) {
	if (!Array.isArray(numberList)) return false;

	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];
		if (callbackFn(number, i)) return i;
	}

	return undefined;
}
function isIndexEven(number) {
	return number % 2 === 0;
}

console.log(findIndexFirstEven([9, 1, 4], isIndexEven));

// version 4:
function findIndexFirstEven(numberList, callbackFn) {
	if (!Array.isArray(numberList)) return false;

	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];
		if (callbackFn(number, i)) return i;
	}

	return undefined;
}
// Inline function / anonymous function (no name function)
console.log(
	findIndexFirstEven([9, 1, 4], function (number) {
		return number % 2 === 0;
	})
);
// findIndex arrow
console.log(
	findIndexFirstEven([9, 1, 4], (number) => {
		return number % 2 === 0;
	})
);
// findIndex arrow shordhand
console.log(findIndexFirstEven([9, 1, 4], (number) => number % 2 === 0));
console.log(findIndexFirstEven([9, 1, 4], (number) => number > 8));
