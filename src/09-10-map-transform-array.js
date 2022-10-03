// Part 9 lesson 10: Map - Array transformation
// map(mappingFn)
// map(transformFn)
// map(callbackFn)

// Example with element in array is number
numberList = [1, 3, 5, 7];
numberList.map((x) => x + 1);
numberList.map((x) => x + 3);
numberList.map((x) => x * 4);

console.log(numberList); // [ 1, 3, 5, 7 ]

// Example with element in array is string
wordList = ['Easy', 'FronEnd'];
wordList.map((x) => x.length);
wordList.map((x) => `super-${x}`);

console.log(wordList); // [ 'Easy', 'FronEnd' ]

// Setting function map() with for..i
function map(arr, mappingFn) {
	// arr should be an array
	// mappingFn shoulb be a function
	if (!Array.isArray(arr) || typeof mappingFn !== 'function') return undefined;

	newArray = [];

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		const newElement = mappingFn(element, i);
		newArray.push(newElement);
	}

	return newArray;
}
console.log(map([1, 2, 3], (x) => x + 1));
console.log(map([1, 2, 3], (x) => x / 2));
console.log(map([1, 2, 3], (x) => x * 3));

// if even index: increment by 1
// if odd index: multiply with 2
console.log(map([1, 2, 3, 4], (x, idx) => (idx % 2 === 0 ? x + 1 : x * 2)));
console.log(map(['easy', 'frontend'], (x) => x.length));
