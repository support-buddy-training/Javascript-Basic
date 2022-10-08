// Part 13 lesson 2: Search Algorithm

// Linear search
function linearSearch(numberList, target) {
	if (!Array.isArray(numberList) || numberList.length === 0) return -1;

	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];

		if (number === target) return i;
	}

	return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 7));

// Binary Search
function binarySearch(numberList, target) {
	if (!Array.isArray(numberList) || numberList.length === 0) return -1;

	let left = 0;
	right = numberList.length - 1;

	while (left <= right) {
		const mid = left + Math.trunc((right - left) / 2);
		if (numberList[mid] === target) return mid;

		if (target > numberList[mid]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 7));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 8));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 2));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 1));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 0));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 6));
