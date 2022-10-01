// Part 9 lesson 7: Check the existence of the element

// check if all numbers is even
[1, 2, 4].every((x) => x % 2 === 0); // false
[2, 4, 6].every((x) => x % 2 === 0); // true

// check if exist one of number is even
[1, 2, 4].some((x) => x % 2 === 0); // true
console.log([1, 2, 4].some((x) => x % 2 === 0)); // true
[2, 4, 6].some((x) => x % 2 === 0); // true

// indexOf
[1, 1, 1].indexOf(1); //0
[1, 1, 1].lastIndexOf(1); // 2

// include
[1, 2, 3].includes(2); // true

// Setting with for...i
// every
function checkIfAllEven(numberList0) {
	if (!Array.isArray(numberList0)) return false;

	let isValid = true;

	for (let i = 0; i < numberList0.length; i++) {
		const number = numberList0[i];
		if (number % 2 !== 0) {
			isValid = false;
			break;
		}
	}

	return isValid;
}
console.log(checkIfAllEven([2, 1, 3]));
console.log(checkIfAllEven([2, 4, 6]));
// V2
function checkIfAllEven(numberList0) {
	if (!Array.isArray(numberList0)) return false;

	for (let i = 0; i < numberList0.length; i++) {
		const number = numberList0[i];
		if (number % 2 !== 0) return false;
	}

	return true;
}
console.log(checkIfAllEven([2, 1, 3]));
console.log(checkIfAllEven([2, 4, 6]));

// some
function checkIfSomeEven(numberList) {
	if (!Array.isArray(numberList)) return false;

	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];
		if (number % 2 === 0) return true;
	}

	return false;
}
console.log(checkIfSomeEven([2, 1, 3]));
console.log(checkIfSomeEven([2, 4, 6]));
console.log(checkIfSomeEven([3, 1, 9]));

// indexOf
function checkWithIndexOf(numberList) {
	if (!Array.isArray(numberList)) return false;

	for (let i = 0; i < numberList.length; i++) {
		number = numberList[i];
		if (number % 2 === 0) return i;
	}

	return -1;
}
console.log(checkWithIndexOf([2, 1, 3]));
console.log(checkWithIndexOf([1, 4, 6]));
console.log(checkWithIndexOf([3, 1, 9]));

// lastIndexOf
function checkWithLastIndexOf(numberList) {
	if (!Array.isArray(numberList)) return false;

	let lastIndex = [];
	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];
		if (number % 2 === 0) {
			lastIndex.push(i);
		}
	}
	return lastIndex[lastIndex.length - 1];
}
console.log(checkWithLastIndexOf([1, 4, 6]));
console.log(checkWithLastIndexOf([3, 1, 9]));
console.log(checkWithLastIndexOf([3, 2, 6, 8, 12]));

// includes
function checkWithIncludes(numberList) {
	if (!Array.isArray(numberList)) return false;

	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];
		if (number % 2 === 0) return true;
	}

	return false;
}
console.log(checkWithIncludes([1, 4, 6]));
console.log(checkWithIncludes([3, 1, 9]));
console.log(checkWithIncludes([3, 2, 6, 8, 12]));
