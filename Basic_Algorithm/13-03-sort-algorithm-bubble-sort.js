// Part 13 lesson 3: Bubble Sort
function bubbleSearch(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) return [];

	// sorting
	for (let i = numberList.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (numberList[j] > numberList[j + 1]) {
				// swap j and j + 1
				// const temp = numberList[j];
				// numberList[j] = numberList[j + 1];
				// numberList[j + 1] = temp;

				// [x, y] = [y, x]
				[numberList[j], numberList[j + 1]] = [numberList[j + 1], numberList[j]];
			}
		}
	}

	console.log(numberList);
	return numberList;
}

bubbleSearch([1, 3, 2, 4, 1, 5, 3]);
