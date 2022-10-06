// Part 11 lesson 12: Exersice 8: Find the number that appears the most

export function findMostFrequentNumber(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

	const statistics = {};
	let maxKey = undefined;
	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];

		// update statistics
		statistics[number] = statistics[number] === undefined ? 1 : statistics[number] + 1;

		// Check maxkey
		if (maxKey === undefined || statistics[number] > statistics[maxKey]) {
			maxKey = number;
		}
	}

	// let maxKey = undefined;
	// for (const key in statistics) {
	// 	if (maxKey === undefined || statistics[maxKey] < statistics[key]) {
	// 		maxKey = key;
	// 	}
	// }

	return Number.parseInt(maxKey);
}
