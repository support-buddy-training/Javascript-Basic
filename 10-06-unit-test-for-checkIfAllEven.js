// every
export function checkIfAllEvenV1(numberList0) {
	if (!Array.isArray(numberList0) || numberList0.length === 0) return false;

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
// console.log(checkIfAllEven([2, 1, 3]));
// console.log(checkIfAllEven([2, 4, 6]));
// V2
export function checkIfAllEvenV2(numberList1) {
	if (!Array.isArray(numberList1) || numberList1.length === 0) return false;

	for (let i = 0; i < numberList1.length; i++) {
		if (numberList1[i] % 2 !== 0) return false;
	}

	return true;
}
// console.log(checkIfAllEven([2, 1, 3]));
// console.log(checkIfAllEven([2, 4, 6]));
