// Part 11 lesson 11: Exercise 07: Find all sub-arrays with consecutive even positive numbers

export function findAllPositiveEvenSubArr(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) return [];

	const subArrayList = [];
	let subArray = [];

	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];

		if (number >= 0 && number % 2 === 0) subArray.push(number);

		// check if we need to reset subArray when encountering odd numbers or end of array
		// kiem tra neu ta can reset subArray khi gap so le hoac cuoi mang

		if (
			subArray.length > 0 &&
			(number < 0 || number % 2 === 1 || i === numberList.length - 1)
		) {
			subArrayList.push(subArray);
			subArray = [];
		}
	}

	return subArrayList;
}
