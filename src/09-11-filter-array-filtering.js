// Past 9 lesson 11: Filter - Filtering array

// Filter with element ís a number
numberList = [1, 5, 4, 6, 2];
console.log(numberList.filter((x) => x % 2 === 0)); // [ 4, 6, 2 ]
console.log(numberList.filter((x) => x > 1)); // [ 5, 4, 6, 2 ]
console.log(numberList.filter((x) => x < 4)); // [ 1, 2 ]
console.log(numberList.filter((x) => x <= 10 || x % 5 === 0)); // [ 1, 5, 4, 6, 2 ]

// Filter with element is a string
wordList = ['easy', 'frontedend', 'easier'];
console.log(wordList.filter((x) => x.length < 5)); // [ 'easy' ]
console.log(wordList.filter((x) => x.startsWith('ea'))); // [ 'easy', 'easier' ]

// Setting filter with for...i
function filter(arr, callbackFn) {
	if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;

	newArray = [];
	// Filtering...
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (callbackFn(element, i)) {
			newArray.push(element);
		}
	}

	return newArray;
}
console.log(filter([2, 3, 4, 6, 7], (x) => x > 4));
console.log(filter([2, 4, 6, 8, 10, 1], (x, idx) => x % 2 === 0 && idx % 2 === 1));
