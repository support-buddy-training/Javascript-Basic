// Part 11 lesson 9: Exercise 05: Count unique numbers
// v1: add unique numbers to a new array --> lenghth

// export function countUniqueNumbers(numberList) {
// 	if (!Array.isArray(numberList) || numberList.length === 0) return 0;

// 	const uniqueNumbersList = [];
// 	for (let i = 0; i < numberList.length; i++) {
// 		const number = numberList[i];
// 		if (!uniqueNumbersList.includes(number)) uniqueNumbersList.push(number);
// 	}

// 	return uniqueNumbersList.length;
// }

// v2: using object map --> keys of object
// Ex: [1, 1, 1, 2, 2, 2]
// flag = {}
// flag = {1: true, 2: true}
// length = 2

// export function countUniqueNumbers(numberList) {
// 	if (!Array.isArray(numberList) || numberList.length === 0) return 0;

// 	const flag = {};
// 	for (let i = 0; i < numberList.length; i++) {
// 		const number = numberList[i];
// 		flag[number] = true;
// 	}

// 	return Object.keys(flag).length;
// }

// use reduce
export function countUniqueNumbers(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) return 0;

	const flag = numberList.reduce((flag, number) => {
		flag[number] = true;
		return flag;
	}, {});

	return Object.keys(flag).length;
}
