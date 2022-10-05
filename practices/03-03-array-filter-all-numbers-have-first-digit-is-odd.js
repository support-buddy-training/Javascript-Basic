// Part 11 lesson 6: Exercise 04: Filter all numbers have first digit is  odd

// for...i
// delegate: uy thac
// function giai quyet van de loc ra chu so dau tien
function getTheFirstDigit(number) {
	// chuyen tat ca ve so duong
	const unsignedNumber = Math.abs(number);
	// return Number.partInt(unsignedNumber.toString().charAt(0));
	const firstDigitCharacter = unsignedNumber.toString().charAt(0);
	return Number.parseInt(firstDigitCharacter);
}

export function filterFirstNumberIsOdd(numberList) {
	if (!Array.isArray(numberList) || numberList.length === 0) return [];

	const fileredList = [];
	for (let i = 0; i < numberList.length; i++) {
		const number = numberList[i];
		// get the first Digit
		const firstDigit = getTheFirstDigit(number);
		if (firstDigit % 2 === 1) return fileredList.push(number);
	}

	return fileredList;
}
