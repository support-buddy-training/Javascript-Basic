// Part 9 lesson 14: Setting reduce with for..i

//  reduce(arr, callbackFn, initialValue)
// rules:
// - arr should be an array and callbackFn should be a function
// - arr.length = 0 and initialValue === undefined -> throw error
// - arr.length = 0 and initialValue !== undefined -> return initialValue

function reduce(arr, callbackFn, initialValue) {
	if (!Array.isArray(arr) || typeof callbackFn !== 'function') {
		throw new Error('Invalid parameters');
	}

	// arr is an array
	if (arr.length === 0) {
		if (initialValue === undefined) {
			throw new Error('Should have inivitialValue when arr is empty');
		}

		return initialValue;
	}

	const hasInivitialValue = initialValue !== undefined;
	const startIndex = hasInivitialValue ? 0 : 1;
	let accumulator = hasInivitialValue ? initialValue : arr[0];

	//  loop
	for (let i = startIndex; i < arr.length; i++) {
		accumulator = callbackFn(accumulator, arr[i], i);
	}

	return accumulator;
}

function calcSum(prevSum, number, idx) {
	return prevSum + number;
}

console.log(reduce([2, 4, 6], calcSum, 2));

// inline function
function reduce(arr, callbackFn, initialValue) {
	if (!Array.isArray(arr) || typeof callbackFn !== 'function') {
		throw new Error('Invalid parameters');
	}

	// arr is an array
	if (arr.length === 0) {
		if (initialValue === undefined) {
			throw new Error('Should have inivitialValue when arr is empty');
		}

		return initialValue;
	}

	const hasInivitialValue = initialValue !== undefined; // Do not use boolean to check if inivitalValue is available because if inivialValue = 0 then the returned boolean is false/ without iniviatialValue
	const startIndex = hasInivitialValue ? 0 : 1;
	let accumulator = hasInivitialValue ? initialValue : arr[0];

	//  loop
	for (let i = startIndex; i < arr.length; i++) {
		accumulator = callbackFn(accumulator, arr[i], i);
	}

	return accumulator;
}
console.log(
	reduce(
		[2, 3, 5],
		function (prevSum, number) {
			return prevSum + number;
		},
		0
	)
);
console.log(reduce([2, 3, 5], (prevSum, number) => prevSum + number, 0));
