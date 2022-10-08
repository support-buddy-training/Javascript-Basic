// Part 13 lesson 4: Quick Sort

// qua trinh tim ra pivot, xac dinh va chuyen doi ben phai, trai
function partition(numberList, left, right) {
	console.log('partition: ', numberList.slice(left, right + 1));

	const mid = left + Math.trunc((right - left) / 2);
	const pivot = numberList[mid];

	let i = left;
	let j = right;

	while (i <= j) {
		// find the first item that greater or equal than pivot
		while (numberList[i] < pivot) i++;

		// find the first item that less or equal than pivot
		while (numberList[j] > pivot) j--;

		if (i < j) {
			const temp = numberList[i];
			numberList[i] = numberList[j];
			numberList[j] = temp;
		}

		// NOTE: chỗ này khác trên video,
		// cần phải check i <= j thì mới tăng,
		// còn case i > j rồi thì ko tăng nữa
		if (i <= j) {
			// MUST HAVE, INF loop
			i++;
			j--;
		}
	}

	return i;
}

function quickSort(numberList, left, right) {
	console.log('quick sort: ', numberList.slice(left, right + 1));

	// base condition/ termination point
	if (left >= right) return numberList;

	const pivotPosition = partition(numberList, left, right);

	quickSort(numberList, left, pivotPosition - 1);
	quickSort(numberList, pivotPosition, right);

	return numberList;
}

console.log(quickSort([4, 2, 3], 0, 2));
console.log(quickSort([4, 2, 6, 5, 3, 9], 0, 5));
console.log(quickSort([1, 2, 1, 3, 4, 2, 5, 8, 6, 9, 0], 0, 10));
// 4, 2, 3
// i = 4, j = 3, pivot = 2
// 4 2 3
// i j
// 2 4 3
// j i = 1

// 2| 4      3
// 2| pivot/i  j
// 2| 3 4
//    j i
